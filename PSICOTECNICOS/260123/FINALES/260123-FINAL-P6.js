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
    await paso_5()
    await paso_6()
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

/*---------------------------------------------------------------- PASO 5 */
// FUNCION PASO 5
async function paso_5(){
    await paso_5a()
    await paso_5b()
    await paso_5c(paso_5acumulador, 2000)
}

// VARIABLES PASO 5
let paso_5lista = []
let paso_5largoLista
let paso_5i1 = 0
let paso_5i2 = 100
let paso_5acumulador = 0

// FUNCIONES PASO 5
async function paso_5a() {
    await new Promise(resolve => {
		resolve(
            frappe.call({ 
                method:"frappe.client.get_list",
                args: { 
                    doctype: "Rasgos Directos del Protocolo de Psicotecnico",
                    parent: "Protocolos de Psicotecnicos", 
                    filters: { 
                        parent: cur_frm.doc.protocolo_de_psicotecnico, 
                    },	
                    order_by: "idx asc", 
                    limit_page_length: 999,
                    fields: ["rasgo", "idx", "nombre", "desarrollo", "tipo_de_variable", "descripcion"] 
                }, 
                callback: function(r) { 
                    paso_5lista = r.message
                }
            })
        )
    })
}

async function paso_5b(){
    await new Promise(resolve => {
        paso_5largoLista = paso_5lista.length
        while(paso_5largoLista > 100){
            if(paso_5largoLista > 100){
                resolve(
                    paso_5acumulador += 1,
                    paso_5largoLista -= 100
                )
            }
            console.log(paso_5largoLista + " - " + paso_5acumulador)
        }
        if(paso_5largoLista<100){
            resolve(
            paso_5acumulador += 1,
            console.log(paso_5acumulador)
            )
        }
    })
}

async function paso_5c(veces, tiempo){
    await new Promise(resolve => {
        for(let i=0; i < veces; i++){
            resolve(
                paso_5lista.forEach(function(element, i){
                    if(element["idx"] >= paso_5i1 && element["idx"] < paso_5i2){
                        console.log(element["idx"])
                        frappe.call({ 
                            method:"frappe.client.insert",
                            limit_page_length: 999, 
                            args: { 
                                doc: {
                                    "doctype": "Rasgos de Personas", 
                                    "protocolo_de_psicotecnico": cur_frm.doc.protocolo_de_psicotecnico,
                                    "psicotecnico": cur_frm.doc.name,
                                    "protocolo_de_periodo": cur_frm.doc.protocolo_de_periodo,
                                    "periodo": cur_frm.doc.periodo,
                                    "plan_de_periodo": cur_frm.doc.plan_de_periodo,
                                    "cuenta": cur_frm.doc.cuenta,
                                    "persona": cur_frm.doc.persona,
                                    "cuenta_analizo": frappe.session.user,
                                    "n_pregunta": element["idx"],
                                    "estado": "REALIZADO",
                                    "inicio": cur_frm.doc.inicio,
                                    "fin": cur_frm.doc.fin,
                                    "tipo_de_rasgo": "DIRECTO - PSICOTECNICO",
                                    "desarrollo": element["desarrollo"],
                                    "tipo_de_variable": element["tipo_de_variable"],
                                    "nombre": element["nombre"],
                                    "descripcion": element["descripcion"]
                                }
                            } 
                        })
                    }
                }),
                paso_5i1 += 100,
                paso_5i2 += 100
            )
        }
    })
    await guardar(tiempo)
}

/*---------------------------------------------------------------- PASO 6 */
// FUNCION PASO 6
async function paso_6(){
    await paso_6a()
    await paso_6b()
    await paso_6c(paso_6acumulador, 2000)
    await paso_6d(paso_6acumulador, 2000)
    await paso_6e(paso_6acumulador, 2000)
}

// VARIABLES PASO 6
let paso_6lista = []
let paso_6largoLista
let paso_6i1 = 0
let paso_6i2 = 100
let paso_6acumulador = 0


// FUNCIONES PASO 6
async function paso_6a() {
    await new Promise(resolve => {
		//resolve(
            console.log("PASO 6B"),
			frappe.call({ 
				method:"frappe.client.get_list", 
				args: { 
					doctype: "Rasgos de Personas",
					filters: { 
						psicotecnico: cur_frm.doc.name, 
						tipo_de_rasgo: "DIRECTO - PSICOTECNICO"
					},
					limit_page_length: 999,
					order_by: "n_pregunta asc",
					fields: ["name", "nombre"] 
				}, 
				callback: function(r) {
                    resolve(
                        paso_6lista = r.message
                    )
				}
			})
            console.log(paso_6lista)
		//)
	})
    //await guardar(tiempo)
}

async function paso_6b(){
    await new Promise(resolve => {
        paso_6largoLista = paso_6lista.length
        while(paso_6largoLista > 100){
            if(paso_6largoLista > 100){
                resolve(
                    paso_6acumulador += 1,
                    paso_6largoLista -= 100
                )
            }
            console.log(paso_6largoLista + " - " + paso_6acumulador)
        }
        if(paso_6largoLista < 100){
            resolve(
            paso_6acumulador += 1,
            console.log(paso_6acumulador)
            )
        }
    })
}

// SUPERYO
async function paso_6c(veces, tiempo) {
    await new Promise(resolve => {
        for(let i = 0; i < veces; i++){
            //resolve(
                paso_6lista.forEach(function(v, i) {
                    if(i >= paso_6i1 && i < paso_6i2){
                        console.log(i + "SUPERYO. i1: " + paso_6i1 + ".i2: " + paso_6i2)
                        var total_superyo = 0;
                        var n_superyo = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "SUPERYO",
                                    nombre: v["nombre"]
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["superyo"] 
                            }, 
                            callback: function(t) {
                                $.each(t.message, function(i, row) {
                                    total_superyo += row.superyo;
                                })									
                                n_superyo = t.message.length;
                                resolve(
                                frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo":  total_superyo / n_superyo
                                        }
                                    } 
                                })
                                )
                            }
                        })
                    }
                }),
                paso_6i1 += 100,
                paso_6i2 += 100
            //)
        }
        paso_6i1 = 0
        paso_6i2 = 100
	})
    await guardar(tiempo)
}

// ELLO
async function paso_6d(veces, tiempo) {
    await new Promise(resolve => {
        for(let i = 0; i < veces; i++){
            //resolve(
                paso_6lista.forEach(function(v, i) {
                    if(i >= paso_6i1 && i < paso_6i2){
                        console.log(i + "ELLO. i1: " + paso_6i1 + ".i2: " + paso_6i2)
                        var total_ello = 0;
                        var n_ello = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "ELLO",
                                    nombre: v["nombre"], 
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["ello"] 
                            }, 
                            callback: function(t) {
                                $.each(t.message, function(i, row) {				
                                    total_ello += row.ello;
                                });									
                                n_ello = t.message.length;
                                resolve(
                                    frappe.call({ 
                                        method:"frappe.client.set_value", 
                                        args: { 
                                            "doctype": "Rasgos de Personas", 
                                            "name": v["name"],
                                            "fieldname": {
                                                "ello":  total_ello / n_ello
                                            }
                                        } 
                                    })
                                )
                            }
                        })
                    }
                }),
                paso_6i1 += 100,
                paso_6i2 += 100
            //)
        }
        paso_6i1 = 0
        paso_6i2 = 100
	})
    await guardar(tiempo)
}

//SI MISMO
async function paso_6e(veces, tiempo) {
    await new Promise(resolve => {
        for(let i = 0; i < veces; i++){
            //resolve(
                paso_6lista.forEach(function(v, i) {
                    if(i >= paso_6i1 && i < paso_6i2){
                        console.log(i + "SI MISMO. i1: " + paso_6i1 + ".i2: " + paso_6i2)
                        var total_si_mismo = 0;
                        var n_si_mismo = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "SI-MISMO",
                                    nombre: v["nombre"], 
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["si_mismo"] 
                            }, 
                            callback: function(t) {								
                                $.each(t.message, function(i, row) {				
                                    total_si_mismo += row.si_mismo;
                                });
                                n_si_mismo = t.message.length;
                                resolve(
                                    frappe.call({ 
                                        method:"frappe.client.set_value", 
                                        args: { 
                                            "doctype": "Rasgos de Personas", 
                                            "name": v["name"],
                                            "fieldname": {
                                                "si_mismo":  total_si_mismo / n_si_mismo
                                            }
                                        } 
                                    })
                                )
                            }
                        })
                    }
                }),
                paso_6i1 += 100,
                paso_6i2 += 100
            //)
        }
        paso_6i1 = 0
        paso_6i2 = 100
	})
    await guardar(tiempo)
}