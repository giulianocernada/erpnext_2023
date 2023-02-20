// Iniciar Psicotecnico
frappe.ui.form.on("Psicotecnicos", {
	iniciar: function(frm, cdt, cdn) {
      		cur_frm.set_value("estado", "INICIADO");
      		cur_frm.set_value("inicio", frappe.datetime.now_datetime());
		cur_frm.save();
		setTimeout(()=>{
		
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Protocolos de Evaluaciones en Protocolos de Psicotecnicos",
				parent: "Protocolos de Psicotecnicos", 
				filters: { 
					parent: frm.doc.protocolo_de_psicotecnico, 
					"idx": "1", 
				},
				fieldname: ["idx", "protocolo_de_evaluacion"] 
			}, 
			callback: function(r) { 
				frappe.new_doc("Evaluaciones", {
					"protocolo_de_evaluacion": r.message.protocolo_de_evaluacion,
					"psicotecnico": frm.doc.name,
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo,
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

				})
			}
		})
   		}, 1000);
	}
});

// FUNCIONES
frappe.ui.form.on("Psicotecnicos", {
	finalizar: function(frm) {
		correrFunciones()
	}
})

async function correrFunciones(){
    await paso_1()
    await paso_2()
    await paso_3()
    await paso_4()
    await finalizado()
}

async function guardar(tiempo) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(
              cur_frm.save()
            );
        }, tiempo)
    })
}

async function finalizado() {
    await new Promise(resolve => {
        resolve(
          frappe.msgprint(__('Ejecución finalizada'))
        );
    })
}
/*---------------------------------------------------------------- PASO 1 */
// FUNCION PASO 1
async function paso_1(){
    await paso_1a(0)
    await paso_1Comprobar(0)
}

// FUNCIONES PASO 1
async function paso_1a(tiempo) {
    await new Promise(resolve => {
        //resolve(
            console.log("PASO 1"),
            frappe.call({ 
                method:"frappe.client.get_value", 
                args: { 
                    doctype: "Protocolos de Evaluaciones en Protocolos de Psicotecnicos",
                    parent: "Protocolos de Psicotecnicos",
                    filters: { 
                        parent: cur_frm.doc.protocolo_de_psicotecnico,
                        idx: cur_frm.doc.protocolos_de_evaluaciones 
                    },
                    fieldname: ["protocolo_de_evaluacion"] 
                }, 
                callback: function(r) {
                    frappe.call({ 
                        method:"frappe.client.get_list", 
                        args: { 
                            doctype: "Evaluaciones",
                            filters: { 
                                psicotecnico: cur_frm.doc.name,
                                protocolo_de_evaluacion: r.message.protocolo_de_evaluacion
                            },
                        fields: ["protocolo_de_evaluacion"] 
                        }, 
                        callback: function(t) {
                            if(t.message && cur_frm.doc.tipo == "EXTERNOS"){
                                resolve(
                                    cur_frm.set_value("estado", "FINALIZADO")
                                )
                            }
                        }
                    }) 
                } 
            })
        //)
    })
    await guardar(tiempo)
}

async function paso_1Comprobar() {
	if(cur_frm.doc.estado != "FINALIZADO"){
        await paso_1(2000)
        console.log("Comprobacion PASO 1: 2000")
        if(cur_frm.doc.estado != "FINALIZADO"){
            await paso_1(3000)
            console.log("Comprobacion PASO 1: 3000")
            if(cur_frm.doc.estado != "FINALIZADO"){
                await paso_1(5000)
                console.log("Comprobacion PASO 1: 5000")
            }
        }
    }
}
    
/*---------------------------------------------------------------- PASO 2 */
// FUNCION PASO 2
async function paso_2(){
    await paso_2a(0)
    await paso_2Comprobar(0)
}

// FUNCIONES PASO 2
async function paso_2a(tiempo) {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADO"){
            //resolve(
                console.log("PASO 2"),
                frappe.call({ 
                    method:"frappe.client.get_value", 
                    args: { 
                        doctype: "Periodos",
                        filters: { 
                            protocolo_de_periodo: cur_frm.doc.protocolo_de_periodo,
                            plan_de_periodo: cur_frm.doc.plan_de_periodo, 
                            owner: cur_frm.doc.owner
                        },
                        fieldname: ["name"] 
                    }, 
                    callback: function(r) {
                        resolve(
                            cur_frm.set_value("periodo", r.message.name),
                            cur_frm.set_value("cuenta", cur_frm.doc.owner),
                            cur_frm.set_value("cuenta_analizo", frappe.session.user),
                            cur_frm.set_value("inicio", cur_frm.doc.creation),
                            cur_frm.set_value("fin", frappe.datetime.now_datetime())
                        )
                    } 
                })
            //)
        }
    })
    await guardar(tiempo)
}

async function paso_2Comprobar() {
    let fechaPsicotecnico = cur_frm.doc.fin
    let fechaActual = frappe.datetime.now_datetime()
    fechaPsicotecnico = fechaPsicotecnico.split(' ')
    fechaPsicotecnico = fechaPsicotecnico[1].split(':')
    fechaPsicotecnico = fechaPsicotecnico[1]
    console.log(fechaPsicotecnico)
    fechaActual = fechaActual.split(' ')
    fechaActual = fechaActual[1].split(':')
    fechaActual = fechaActual[1]
    console.log("DIFERENCIA: " + (fechaActual - fechaPsicotecnico))
	if(fechaActual - fechaPsicotecnico > 10){
        await paso_2(2000)
        console.log("Comprobacion PASO 2: 2000")
        if(fechaActual - fechaPsicotecnico > 10){
            await paso_2(3000)
            console.log("Comprobacion PASO 2: 3000")
            if(fechaActual - fechaPsicotecnico > 10){
                await paso_2(5000)
                console.log("Comprobacion PASO 2: 5000")
                if(fechaActual - fechaPsicotecnico > 10){
                    await paso_2(10000)
                    console.log("Comprobacion PASO 2: 10000")
                    if(fechaActual - fechaPsicotecnico > 10){
                        await paso_2(20000)
                        console.log("Comprobacion PASO 2: 20000")
                        if(fechaActual - fechaPsicotecnico > 10){
                            await paso_2(30000)
                            console.log("Comprobacion PASO 2: 30000")
                            if(fechaActual - fechaPsicotecnico > 10){
                                await paso_2(60000)
                                console.log("Comprobacion PASO 2: 60000")
                            }
                        }
                    }
                }
            }
        }
    }
}

/*---------------------------------------------------------------- PASO 3 */
// FUNCION PASO 3
async function paso_3(){
    await paso_3a(0)
    await paso_3b(0)
    await paso_3Comprobar(paso_3cantidadEvaluaciones)
}

// VARIABLES PASO 3
let paso_3cantidadEvaluaciones

// FUNCIONES PASO 3
async function paso_3a(tiempo) {
    await new Promise(resolve => {
        	//resolve(
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
                        resolve(
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
        				})
                        )
					} 
				})
			//)
    })
    await guardar(tiempo)
}

async function paso_3b(){
    await new Promise(resolve => {
        //resolve(
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
                    resolve(paso_3cantidadEvaluaciones = r.message.length)
                    console.log(paso_3cantidadEvaluaciones)
                }
            })
        //)
    })
}

async function paso_3Comprobar(cantidadEvaluaciones) {
    if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
        await paso_3a(2000)
        console.log("Comprobacion PASO 3: 2000")
        if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
            await paso_3a(3000)
            console.log("Comprobacion PASO 3: 3000")
            if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
                await paso_3a(5000)
                console.log("Comprobacion PASO 3: 5000")
                if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
                    await paso_3a(10000)
                    console.log("Comprobacion PASO 3: 10000")
                    if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
                        await paso_3a(20000)
                        console.log("Comprobacion PASO 3: 20000")
                        if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
                            await paso_3a(30000)
                            console.log("Comprobacion PASO 3: 30000")
                            if(cur_frm.doc.table_23.length != cantidadEvaluaciones) {
                                await paso_3a(60000)
                                console.log("Comprobacion PASO 3: 60000")
                            }
                        }
                    }
                }
            }
        }
    }
}

/*---------------------------------------------------------------- PASO 4 */
// FUNCION PASO 4
async function paso_4(){
    await paso_4a(0)
    await paso_4b()
    await paso_4Comprobar(paso_4cantidadRasgosDirectosEvaluacion)
}

// VARIABLES PASO 4
let paso_4cantidadRasgosDirectosEvaluacion

// FUNCIONES PASO 4
async function paso_4a(tiempo) {
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
    await guardar(tiempo)
}

async function paso_4b() {
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
    //await guardar(tiempo)
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