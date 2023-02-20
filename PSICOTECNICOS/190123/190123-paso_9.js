async function guardar(tiempo) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(
              cur_frm.save()
            );
        }, tiempo)
    })
}

async function paso_9(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 9 INICIADO')
                }),
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
                        frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 9 TERMINADO')
						}); 
					} 
				})
        	)
        }
    })
    await guardar(tiempo)
}