async function paso_19(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 19 INICIADO')
                }),
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas",
						filters: { 
							psicotecnico: cur_frm.doc.name, 
							"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
							"parametros_limitantes_totales": [">", 0]
						},
						limit_page_length: 999,
						order_by: "n_pregunta asc",
						fields: ["name"] 
					}, 
					callback: function(r) { 
						cur_frm.set_value("rasgos_limitantes", r.message.length);
                        frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 19 TERMINADO')
						});
					} 
				})
        	)
        }	
    })
    await guardar(tiempo)
}