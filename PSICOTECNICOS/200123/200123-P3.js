// FUNCION PASO 3
async function paso_3(){
    await paso_3a(0)
    await paso_3b(0)
    await paso_3Comprobar(0)
}

// VARIABLES PASO 3
let paso_3cantidadEvaluaciones

// FUNCIONES PASO 3
async function paso_3a(tiempo) {
    await new Promise(resolve => {
        	resolve(
                console.log("PASO 3A"),
				cur_frm.clear_table("table_23"),
				frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Evaluaciones",
						filters: { 
							psicotecnico: cur_frm.doc.name 
						},
						order_by: "creation asc", 
						limit_page_length: 999, 
						fields: ["name", "protocolo_de_evaluacion", "persona", "analizo", "estado", "inicio", "fin", "duracion"] 
					}, 
					callback: function(r) {
						var total = 0; 
						r.message.forEach(function(v) {
        					var n = frappe.model.add_child(cur_frm.doc, "Evaluaciones en Psicotecnicos", "table_23");
							n.evaluacion = v["name"];
							n.protocolo_de_evaluacion = v["protocolo_de_evaluacion"];
							n.persona = v["persona"];
							n.analizo = v["analizo"];
							n.estado = v["estado"];
							n.inicio = v["inicio"];
							n.fin = v["fin"];
							n.duracion = v["duracion"];
							total += v["duracion"];
        				}); 
					} 
				})
			)
    })
    await guardar(tiempo)
}

async function paso_3b(){
    await new Promise(resolve => {
        resolve(
            console.log("PASO 3B"),
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Protocolos de Evaluaciones en Protocolos de Psicotecnicos",
                    parent: "Protocolos de Psicotecnicos",
                    filters: {
                        parent: cur_frm.doc.protocolo_de_psicotecnico
                    }
                },
                callback: function(r){
                    paso_3cantidadEvaluaciones = r.message.length
                }
            })
        )
    })
}

async function paso_3Comprobar(cantidadEvaluaciones) {
    if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
        await paso_3(2000)
        console.log("Comprobacion PASO 3: 2000")
        if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
            await paso_3(3000)
            console.log("Comprobacion PASO 3: 3000")
            if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
                await paso_3(5000)
                console.log("Comprobacion PASO 3: 5000")
                if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
                    await paso_3(10000)
                    console.log("Comprobacion PASO 3: 10000")
                    if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
                        await paso_3(20000)
                        console.log("Comprobacion PASO 3: 20000")
                        if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
                            await paso_3(30000)
                            console.log("Comprobacion PASO 3: 30000")
                            if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
                                await paso_3(60000)
                                console.log("Comprobacion PASO 3: 60000")
                            }
                        }
                    }
                }
            }
        }
    }
}