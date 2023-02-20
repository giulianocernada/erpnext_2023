async function paso_3() {
    await new Promise(resolve => {
    	if(frm.doc.estado == "FINALIZADO"){
        	resolve(
        		cur_frm.clear_table("table_25"),
                //1RA LLAMADA: TRAE LAS EVALUACIONES CORRESPONDIENTES AL PERIODO
				frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Evaluaciones",
						filters: { 
							periodo: cur_frm.doc.name, 
						},
						order_by: "idx asc", 
						limit_page_length: 999, 
						fields: ["name", "psicotecnico", "persona", "descripcion", "estado", "inicio", "fin"] 
					}, 
					callback: function(r) { 
                        //COMPLETA LA TABLA CON LOS VALORES OBTENIDOS
						r.message.forEach(function(v) {
		        			var n = frappe.model.add_child(cur_frm.doc, "Evaluaciones en Periodos", "table_25");
							n.psicotecnico = v["psicotecnico"];
							n.evaluacion = v["name"];
							n.persona = v["persona"];
							n.estado = v["estado"];
							n.inicio = v["inicio"];
							n.fin = v["fin"];
		        		});
						cur_frm.set_value("evaluaciones", r.message.length);
						refresh_field("table_25");
					} 
				})
        	)
        }	
    })
}