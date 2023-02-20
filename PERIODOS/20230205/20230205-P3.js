// FUNCION PASO 3
async function paso_3(){
    await paso_3a(0)
    await paso_3b()
    await paso_3Comprobar()
}

// VARIABLES PASO 3
let paso_3cantidadEvaluaciones

// FUNCIONES PASO 3
async function paso_3a() {
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

async function paso_3b() {
    await new Promise(resolve => {
        frappe.call({ 
            method:"frappe.client.get_value", 
            args: { 
                doctype: "Protocolos de Periodos",
                filters: {
                    name: cur_frm.doc.protocolo_de_periodo
                },
                fieldname: "protocolos_de_evaluaciones"
            },
            callback: function(r){
               // resolve(
                    paso_3cantidadEvaluaciones = r.message.protocolos_de_evaluaciones,
                    console.log(paso_3cantidadEvaluaciones)
 //               )
            }
        })
	})
}

async function paso_3Comprobar() {
	if(cur_frm.doc.table_25.length != paso_3cantidadEvaluaciones) {
		await paso_3a(2000)
		if(cur_frm.doc.table_25.length != paso_3cantidadEvaluaciones) {
			await paso_3a(3000)
			if(cur_frm.doc.table_25.length != paso_3cantidadEvaluaciones) {
				await paso_3a(5000)
				if(cur_frm.doc.table_25.length != paso_3cantidadEvaluaciones) {
					await paso_3a(10000)
				}
			}
		}
	}
}