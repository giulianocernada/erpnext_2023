async function paso_5() {
    await new Promise(resolve => {
    	if(frm.doc.estado == "FINALIZADO"){
        	resolve(
                //LLAMADA: TRAE LOS RASGOS INDIRECTOS DEL PROTOCOLO DEL PERIODO
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos Indirectos del Protocolo de Periodo",
						parent: "Protocolos de Periodos", 
						filters: { 
							parent: cur_frm.doc.protocolo_de_periodo, 
						},
						order_by: "idx asc", 
						limit_page_length: 500,
						fields: ["rasgo", "nombre", "tipo_de_variable", "desarrollo", "descripcion"] 
					}, 
					callback: function(r) { 
                        // INSERTA LOS RASGOS INDIRECTOS DEL PERIODO
						r.message.forEach(function(v) {
							frappe.call({ 
								method:"frappe.client.insert", 
								args: { 
									doc: {
										"doctype": "Rasgos de Personas", 
										"protocolo_de_periodo": cur_frm.doc.protocolo_de_periodo,
										"periodo": cur_frm.doc.name,
										"plan_de_periodo": cur_frm.doc.plan_de_periodo,
										"cuenta": cur_frm.doc.cuenta,
										"persona": cur_frm.doc.persona,
										"cuenta_analizo": frappe.session.user,
										"estado": "REALIZADO",
										"inicio": cur_frm.doc.inicio,
										"fin": cur_frm.doc.fin,
										"tipo_de_rasgo": "INDIRECTO - PERIODO",
										"desarrollo": v["desarrollo"],
										"nombre": v["nombre"],
										"tipo_de_variable": v["tipo_de_variable"],
										"descripcion": v["descripcion"],
									}
								} 
							})
						})
					} 
				})
        	)
        }	
    })
}