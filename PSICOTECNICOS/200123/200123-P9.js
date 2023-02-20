// FUNCION PASO 9
async function paso_9(){
    await paso_9a(1000)

}

// VARIABLES PASO 9

// FUNCIONES PASO 9
async function paso_9a(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                console.log("PASO 9A"),
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas", 
						filters: { 
							"psicotecnico": cur_frm.doc.name,
							"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
						},
						limit_page_length: 999,
						fields: ["name", "nombre"] 
					}, 
					callback: function(r) {
						r.message.forEach(function(g) {
							frappe.call({ 
								method:"frappe.client.get_value", 
								args: { 
									doctype: "Rasgos de Personas", 
									filters: { 
										"protocolo_de_psicotecnico": cur_frm.doc.protocolo_de_psicotecnico,
										"tipo_de_rasgo": "INDIRECTO - PROTOCOLO DE PSICOTECNICO",
										"nombre": g["nombre"],
									}, 
									fieldname: ["name", "constante_del_superyo", "constante_del_ello", "constante_del_si_mismo", "tiempo_superyo", "tiempo_ello", "tiempo_si_mismo"]
								}, 
								callback: function(u) { 
									frappe.call({ 
										method:"frappe.client.set_value", 
										args: { 
											"doctype": "Rasgos de Personas", 
											"name": g["name"],
											"fieldname": {
												"rasgo_modelo": u.message.name,
												"constante_del_superyo_c": u.message.constante_del_superyo,
												"constante_del_ello_c": u.message.constante_del_ello,
												"constante_del_si_mismo_c": u.message.constante_del_si_mismo,
												"tiempo_superyo_c": u.message.tiempo_superyo,
												"tiempo_ello_c": u.message.tiempo_ello,
												"tiempo_si_mismo_c": u.message.tiempo_si_mismo
											}
										}
									})
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