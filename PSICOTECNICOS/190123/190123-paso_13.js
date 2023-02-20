async function paso_13(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 13 INICIADO')
                }),
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
						r.message.forEach(function(v) {
							var superyo_limitante = 0;
							if(v["limitante_minimo_superyo"]) {superyo_limitante = 1};
							if(v["limitante_maximo_superyo"]) {superyo_limitante = 1};
							var ello_limitante = 0;
							if(v["limitante_minimo_ello"]) {ello_limitante = 1};
							if(v["limitante_maximo_ello"]){ ello_limitante = 1};
							var si_mismo_limitante = 0;
							if(v["limitante_minimo_si_mismo"]){ si_mismo_limitante = 1};
							if(v["limitante_maximo_si_mismo"]){ si_mismo_limitante = 1};
							var si_su_limitante = 0;
							if(v["limitante_minimo_desajuste_si_su"]){ si_su_limitante = 1};
							if(v["limitante_maximo_desajuste_si_su"]){ si_su_limitante = 1};
							var si_el_limitante = 0;
							if(v["limitante_minimo_desajuste_si_el"]){ si_el_limitante = 1};
							if(v["limitante_maximo_desajuste_si_el"]){ si_el_limitante = 1};
							var su_el_limitante = 0;
							if(v["limitante_minimo_desajuste_su_el"]){ su_el_limitante = 1};
							if(v["limitante_maximo_desajuste_su_el"]){ su_el_limitante = 1};
							frappe.call({ 
								method:"frappe.client.set_value", 
								args: { 
									"doctype": "Rasgos de Personas", 
									"name": v["name"],
									"fieldname": {
											"parametros_limitantes_totales": superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante
									}
								} 
							})
		     			})
                        frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 13 TERMINADO')
						});
					}
     			})
        	)
        }	
    })
    await guardar(tiempo)
}