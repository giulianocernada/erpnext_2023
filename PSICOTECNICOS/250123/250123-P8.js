// FUNCION PASO 8
async function paso_8(){
    await paso_8a(2000)
}

// VARIABLES PASO 8

// FUNCIONES PASO 8
async function paso_8a(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
	        resolve(
                console.log("PASO 8A"),
	        	frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos Indirectos de Protocolos de Psicotecnicos",
						parent: "Protocolos de Psicotecnicos", 
						filters: { 
							parent: cur_frm.doc.protocolo_de_psicotecnico, 
						},
						limit_page_length: 999,
						fields: ["idx", "name", "nombre", "tipo_de_variable", "desarrollo", "descripcion", "limitante_minimo_superyo", "limitante_maximo_superyo", "minimo_superyo", "maximo_superyo", "limitante_minimo_ello", "limitante_maximo_ello", "minimo_ello", "maximo_ello", "limitante_minimo_si_mismo", "limitante_maximo_si_mismo", "minimo_si_mismo", "maximo_si_mismo", "limitante_minimo_desajuste_su_el", "limitante_maximo_desajuste_su_el", "minimo_desajuste_su_el", "maximo_desajuste_su_el", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "minimo_desajuste_si_el", "maximo_desajuste_si_el", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "minimo_desajuste_si_su", "maximo_desajuste_si_su"] 
					}, 
					callback: function(r) { 
						r.message.forEach(function(v) {
							frappe.call({ 
								method:"frappe.client.insert", 
								args: { 
									doc: {
										"doctype": "Rasgos de Personas",
										"n_pregunta": v["idx"],
										"protocolo_de_psicotecnico": cur_frm.doc.protocolo_de_psicotecnico,
										"psicotecnico": cur_frm.doc.name,
										"protocolo_de_periodo": cur_frm.doc.protocolo_de_periodo,
										"periodo": cur_frm.doc.periodo,
										"plan_de_periodo": cur_frm.doc.plan_de_periodo,
										"cuenta": cur_frm.doc.cuenta,
										"persona": cur_frm.doc.persona,
										"cuenta_analizo": frappe.session.user,
										"estado": "REALIZADO",
										"inicio": cur_frm.doc.inicio,
										"fin": cur_frm.doc.fin,
										"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
										"desarrollo": v["desarrollo"],
										"nombre": v["nombre"],
										"tipo_de_variable": v["tipo_de_variable"],
										"descripcion": v["descripcion"],
										"limitante_minimo_superyo": v["limitante_minimo_superyo"],
										"limitante_maximo_superyo": v["limitante_maximo_superyo"],
										"minimo_superyo": v["minimo_superyo"],
										"maximo_superyo": v["maximo_superyo"],
										"limitante_minimo_ello": v["limitante_minimo_ello"],
										"limitante_maximo_ello": v["limitante_maximo_ello"],
										"minimo_ello": v["minimo_ello"],
										"maximo_ello": v["maximo_ello"],
										"limitante_minimo_si_mismo": v["limitante_minimo_si_mismo"],
										"limitante_maximo_si_mismo": v["limitante_maximo_si_mismo"],
										"minimo_si_mismo": v["minimo_si_mismo"],
										"maximo_si_mismo": v["maximo_si_mismo"],
										"limitante_minimo_desajuste_su_el": v["limitante_minimo_desajuste_su_el"],
										"limitante_maximo_desajuste_su_el": v["limitante_maximo_desajuste_su_el"],
										"minimo_desajuste_su_el": v["minimo_desajuste_su_el"],
										"maximo_desajuste_su_el": v["maximo_desajuste_su_el"],
										"limitante_minimo_desajuste_si_el": v["limitante_minimo_desajuste_si_el"],
										"limitante_maximo_desajuste_si_el": v["limitante_maximo_desajuste_si_el"],
										"minimo_desajuste_si_el": v["minimo_desajuste_si_el"],
										"maximo_desajuste_si_el": v["maximo_desajuste_si_el"],
										"limitante_minimo_desajuste_si_su": v["limitante_minimo_desajuste_si_su"],
										"limitante_maximo_desajuste_si_su": v["limitante_maximo_desajuste_si_su"],
										"minimo_desajuste_si_su": v["minimo_desajuste_si_su"],
										"maximo_desajuste_si_su": v["maximo_desajuste_si_su"],
									}
								} 
							})
						})
					} 
				})
	        )
	    }
    })
    await guardar(tiempo)
}

async function guardar(tiempo) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(
              cur_frm.save()
            );
        }, tiempo)
    })
}