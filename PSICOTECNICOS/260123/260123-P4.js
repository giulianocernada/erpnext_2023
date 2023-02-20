// FUNCION PASO 4
async function paso_4(){
    await paso_4a(0)
    await paso_4b(0)
    await paso_4Comprobar(paso_4cantidadRasgosDirectosEvaluacion)
}

// VARIABLES PASO 4
let paso_4cantidadRasgosDirectosEvaluacion

// FUNCIONES PASO 4
async function paso_4a() {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	//resolve(
                console.log("PASO 4A"),
				cur_frm.clear_table("table_25"),
				frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Evaluaciones en Psicotecnicos",
						parent: "Psicotecnicos",
						filters: { 
							parent: cur_frm.doc.name, 
					},
					limit_page_length: 999,
					order_by: "creation asc", 
					fields: ["evaluacion"] 
					}, 
					callback: function(r) { 
						r.message.forEach(function(v) {
							frappe.call({ 
								method:"frappe.client.get_list", 
								args: { 
									doctype: "Rasgos de Personas",
									filters: { 
										evaluacion: v["evaluacion"],
										tipo_de_rasgo: "DIRECTO - EVALUACION"
									},
									limit_page_length: 999,
									order_by: "n_pregunta asc", 
									fields: ["name", "nombre", "tipo_de_variable", "desarrollo", "descripcion", "dimension", "superyo", "ello", "si_mismo"] 
								}, 
								callback: function(t) { 
									resolve(
									t.message.forEach(function(h) {
        								var n = frappe.model.add_child(cur_frm.doc, "Rasgos Directos en Psicotecnicos", "table_25");
										n.rasgo = h["name"];
										n.nombre = h["nombre"];
										n.tipo_de_variable = h["tipo_de_variable"];
										n.desarrollo = h["desarrollo"];
										n.descripcion = h["descripcion"];
										n.dimension = h["dimension"];
										n.superyo = h["superyo"];
										n.ello = h["ello"];
										n.si_mismo = h["si_mismo"];
        							})
									)
								refresh_field("table_25");
								} 
							})
						})
					}
				})
			//)
		}
    })
    //await guardar(tiempo)
}

async function paso_4b(tiempo) {
    await new Promise(resolve => {
        //resolve(
            console.log("PASO 4B"),
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos Directos del Protocolo de Psicotecnico",
                    parent: "Protocolos de Psicotecnicos",
                    filters: {
                        parent: cur_frm.doc.protocolo_de_psicotecnico
                    },
                    limit_page_length: 999
                },
                callback: function(r){
                    resolve(paso_4cantidadRasgosDirectosEvaluacion = r.message.length)
                    console.log(paso_4cantidadRasgosDirectosEvaluacion)
                }
            })
        //)
    })
    await guardar(tiempo)
}

async function paso_4Comprobar(cantidadRasgosDirectosEvaluacion) {
    if(cur_frm.doc.table_25.length != cantidadRasgosDirectosEvaluacion) {
        await paso_4a(2000)
        if(cur_frm.doc.table_25.length != cantidadRasgosDirectosEvaluacion) {
            await paso_4a(3000)
            if(cur_frm.doc.table_25.length != cantidadRasgosDirectosEvaluacion) {
                await paso_4a(5000)
                if(cur_frm.doc.table_25.length != cantidadRasgosDirectosEvaluacion) {
                    await paso_4a(10000)
                }
            }
        }
    }
}