// FUNCION PASO 16
async function paso_16(){
    await paso_16a(1000)
    await paso_16b(1000)
}

// VARIABLES PASO 16
let paso_16indirectoPsicotecnico = []

// FUNCIONES PASO 16
async function paso_16a(tiempo) {
    await new Promise(resolve => {
        resolve(
            console.log("PASO 16A"),
			frappe.call({ 
				method:"frappe.client.get_list", 
				args: { 
					doctype: "Rasgos de Personas",
					filters: { 
						psicotecnico: cur_frm.doc.name, 
						tipo_de_rasgo: "INDIRECTO - PSICOTECNICO",
					},
					limit_page_length: 999,
					order_by: "n_pregunta asc",
					fields: ["name", "parametros_limitantes_totales", "resultado_superyo", "resultado_ello", "resultado_si_mismo", "resultado_desajuste_si_su", "resultado_desajuste_si_el", "resultado_desajuste_su_el"] 
				}, 
				callback: function(r) { 
					paso_16indirectoPsicotecnico = r.message
				}
			})
		)
    })
    await guardar(tiempo)
}

async function paso_16b(tiempo) {
    await new Promise(resolve => {
        resolve(
            console.log("PASO 16B"),
			paso_16indirectoPsicotecnico.forEach(function(v){
				var superyo_limitante = 0;
				if(v["resultado_superyo"] == "DESAPROBADO"){superyo_limitante = 1};
				var ello_limitante = 0;
				if(v["resultado_ello"] == "DESAPROBADO"){ello_limitante = 1};
				var si_mismo_limitante = 0;
				if(v["resultado_si_mismo"] == "DESAPROBADO"){ si_mismo_limitante = 1};
				var si_su_limitante = 0;
				if(v["resultado_desajuste_si_su"]){ si_su_limitante = 1};
				var si_el_limitante = 0;
				if(v["resultado_desajuste_si_el"]){ si_el_limitante = 1};
				var su_el_limitante = 0;
				if(v["resultado_desajuste_su_el"]){ su_el_limitante = 1};
				if(v["parametros_limitantes_totales"] > 0 && (superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante) > 0){
					frappe.call({ 
						method:"frappe.client.set_value", 
						args: { 
							"doctype": "Rasgos de Personas", 
							"name": v["name"],
							"fieldname": {
								"resultado": "DESAPROBADO"
							}
						} 
					});
				};
				if(v["parametros_limitantes_totales"] > 0 && (superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante) == 0){
					frappe.call({ 
						method:"frappe.client.set_value", 
						args: { 
							"doctype": "Rasgos de Personas", 
							"name": v["name"],
							"fieldname": {
								"resultado": "APROBADO"
							}
						} 
					});
				};
			})
		)
    })
    await guardar(tiempo)
}