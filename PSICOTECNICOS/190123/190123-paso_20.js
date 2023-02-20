async function paso_20(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 20 INICIADO')
                }),
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas",
						filters: { 
							psicotecnico: cur_frm.doc.name, 
							"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
							"resultado": "DESAPROBADO"
						},
						limit_page_length: 999,
						order_by: "n_pregunta asc",
						fields: ["name"] 
					}, 
					callback: function(r) { 
						cur_frm.set_value("rasgos_desaprobados", r.message.length);
						frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 20 TERMINADO')
						});
					} 
				})
        	)
        }	
    })
    await guardar(tiempo)
}
