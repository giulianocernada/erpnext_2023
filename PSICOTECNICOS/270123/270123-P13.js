// FUNCION PASO 13
async function paso_13(){
	await paso_13a()
	await paso_13b(2000)
}

// VARIABLES PASO 13
let paso_13indirectoPsicotecnico

// FUNCIONES PASO 13
async function paso_13a() {
    await new Promise(resolve => {
		console.log("PASO 13A"),
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
				fields: ["name", "superyo", "ello", "si_mismo", "limitante_minimo_superyo", "limitante_maximo_superyo", "limitante_minimo_ello", "limitante_maximo_ello", "limitante_minimo_si_mismo", "limitante_maximo_si_mismo", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "limitante_minimo_desajuste_su_el", "limitante_maximo_desajuste_su_el"] 
			}, 
			callback: function(r) {
				resolve(
					paso_13indirectoPsicotecnico = r.message
				)
			}
		})
    })
}

async function paso_13b(tiempo) {
	for(let i = 0; i < paso_13indirectoPsicotecnico.length; i++){
		await new Promise(resolve => {
			console.log("PASO 13B")
			var superyo_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_superyo"]) {superyo_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_superyo"]) {superyo_limitante = 1};
			var ello_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_ello"]) {ello_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_ello"]){ ello_limitante = 1};
			var si_mismo_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_si_mismo"]){ si_mismo_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_si_mismo"]){ si_mismo_limitante = 1};
			var si_su_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_desajuste_si_su"]){ si_su_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_desajuste_si_su"]){ si_su_limitante = 1};
			var si_el_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_desajuste_si_el"]){ si_el_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_desajuste_si_el"]){ si_el_limitante = 1};
			var su_el_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_desajuste_su_el"]){ su_el_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_desajuste_su_el"]){ su_el_limitante = 1};
			resolve(
				frappe.call({ 
					method:"frappe.client.set_value", 
					args: { 
						"doctype": "Rasgos de Personas", 
						"name": paso_13indirectoPsicotecnico[i]["name"],
						"fieldname": {
								"parametros_limitantes_totales": superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante
						}
					} 
				})
			)
		})
		await guardar(tiempo)
	}
}