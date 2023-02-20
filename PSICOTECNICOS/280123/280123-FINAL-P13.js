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
    await paso_7()
    await paso_8()
    await paso_9()
    await paso_10()
    await paso_11()
    await paso_12(3000)
    await paso_13()
    await paso_14()
    await paso_15()
    await paso_16()
    await paso_17()
    await paso_18()
    await paso_19()
    await paso_20()
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
/*-------------------------------------------------------------------------------------------------------------------------------- PASO 1 */
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
    
/*-------------------------------------------------------------------------------------------------------------------------------- PASO 2 */
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

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 3 */
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

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 4 */
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

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 5 */
// FUNCION PASO 5
async function paso_5(){
    await paso_5a()
    await paso_5b()
    await paso_5c(paso_5acumulador, 5000)
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
        console.log("PASO 5A"),
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
        console.log("PASO 5B"),
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
    for(let i=0; i < veces; i++){
        await new Promise(resolve => {
        console.log("PASO 5C"),
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
        })
        await guardar(tiempo)
    }
}
/*-------------------------------------------------------------------------------------------------------------------------------- PASO 6 */
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
            console.log("PASO 6A"),
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
        console.log("PASO 6B"),
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
    for(let i = 0; i < veces; i++){
        await new Promise(resolve => {
                paso_6lista.forEach(function(v, i) {
                    if(i >= paso_6i1 && i < paso_6i2){
                        console.log(i + " - SUPERYO. i1: " + paso_6i1 + ".i2: " + paso_6i2)
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
        })
        await guardar(tiempo)
    }
    paso_6i1 = 0
    paso_6i2 = 100
}

// ELLO
async function paso_6d(veces, tiempo) {
    for(let i = 0; i < veces; i++){
        await new Promise(resolve => {
            paso_6lista.forEach(function(v, i) {
                if(i >= paso_6i1 && i < paso_6i2){
                    console.log(i + " - ELLO. i1: " + paso_6i1 + ".i2: " + paso_6i2)
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
        })
        await guardar(tiempo)
    }
    paso_6i1 = 0
    paso_6i2 = 100
}

//SI MISMO
async function paso_6e(veces, tiempo) {
    for(let i = 0; i < veces; i++){
        await new Promise(resolve => {
            paso_6lista.forEach(function(v, i) {
                if(i >= paso_6i1 && i < paso_6i2){
                    console.log(i + " - SI MISMO. i1: " + paso_6i1 + ".i2: " + paso_6i2)
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
        })
        await guardar(tiempo)
    }
    paso_6i1 = 0
    paso_6i2 = 100
}
/*-------------------------------------------------------------------------------------------------------------------------------- PASO 7 */
// FUNCION PASO 7
async function paso_7(){
    await paso_7a()
	await paso_7b(0)
	await paso_7c()
	await paso_7Comprobar()
}

// VARIABLES PASO 7
let paso_7directoPsicotecnico = []
let paso_7cantidadRasgosDirectos

// FUNCIONES PASO 7
async function paso_7a(tiempo) {
    await new Promise(resolve => {
		//resolve(
			console.log("PASO 7A"),
			cur_frm.clear_table("table_28"),
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
					fields: ["name", "nombre", "tipo_de_variable", "descripcion", "superyo", "ello", "si_mismo"] 
				}, 
				callback: function(r) { 
					resolve(paso_7directoPsicotecnico = r.message)
				} 
			})
		//)
    })
}

async function paso_7b(tiempo) {
    await new Promise(resolve => {
		resolve(
            console.log("PASO 7B"),
			paso_7directoPsicotecnico.forEach(function(element){
				var n = frappe.model.add_child(cur_frm.doc, "Rasgos Directos de Psicotecnicos", "table_28");	
				n.rasgo = element["name"];
				n.nombre = element["nombre"];
				n.tipo_de_variable = element["tipo_de_variable"];
				n.descripcion = element["descripcion"];
				n.superyo = element["superyo"];
				n.ello = element["ello"];
				n.si_mismo = element["si_mismo"];
			}),
			refresh_field("table_28")
		)
	})
	await guardar(tiempo)
}

async function paso_7c() {
    await new Promise(resolve => {
		//resolve(
			console.log("PASO 7C"),
			frappe.call({ 
				method:"frappe.client.get_value", 
				args: { 
					doctype: "Protocolos de Psicotecnicos",
					filters: {
						name: cur_frm.doc.protocolo_de_psicotecnico
					},
					fieldname: "rasgos_directos_del_modelo"
				},
				callback: function(r){
					resolve(
						paso_7cantidadRasgosDirectos = r.message.rasgos_directos_del_modelo
					)
				}
			})
		//)
	})
}

async function paso_7Comprobar() {
	if(cur_frm.doc.table_28.length != paso_7cantidadRasgosDirectos) {
		await paso_7b(2000)
		if(cur_frm.doc.table_28.length != paso_7cantidadRasgosDirectos) {
			await paso_7b(3000)
			if(cur_frm.doc.table_28.length != paso_7cantidadRasgosDirectos) {
				await paso_7b(5000)
				if(cur_frm.doc.table_28.length != paso_7cantidadRasgosDirectos) {
					await paso_7b(10000)
				}
			}
		}
	}
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 8 */
// FUNCION PASO 8
async function paso_8(){
    await paso_8a(2000)
}

// VARIABLES PASO 8

// FUNCIONES PASO 8
async function paso_8a(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
	        resolve(
                console.log("PASO 8A"),
	        	frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos Indirectos de Protocolos de Psicotecnicos",
						parent: "Protocolos de Psicotecnicos", 
						filters: { 
							parent: cur_frm.doc.protocolo_de_psicotecnico, 
						},
						limit_page_length: 999,
						fields: ["idx", "name", "nombre", "tipo_de_variable", "desarrollo", "descripcion", "limitante_minimo_superyo", "limitante_maximo_superyo", "minimo_superyo", "maximo_superyo", "limitante_minimo_ello", "limitante_maximo_ello", "minimo_ello", "maximo_ello", "limitante_minimo_si_mismo", "limitante_maximo_si_mismo", "minimo_si_mismo", "maximo_si_mismo", "limitante_minimo_desajuste_su_el", "limitante_maximo_desajuste_su_el", "minimo_desajuste_su_el", "maximo_desajuste_su_el", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "minimo_desajuste_si_el", "maximo_desajuste_si_el", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "minimo_desajuste_si_su", "maximo_desajuste_si_su"] 
					}, 
					callback: function(r) { 
						r.message.forEach(function(v) {
							frappe.call({ 
								method:"frappe.client.insert", 
								args: { 
									doc: {
										"doctype": "Rasgos de Personas",
										"n_pregunta": v["idx"],
										"protocolo_de_psicotecnico": cur_frm.doc.protocolo_de_psicotecnico,
										"psicotecnico": cur_frm.doc.name,
										"protocolo_de_periodo": cur_frm.doc.protocolo_de_periodo,
										"periodo": cur_frm.doc.periodo,
										"plan_de_periodo": cur_frm.doc.plan_de_periodo,
										"cuenta": cur_frm.doc.cuenta,
										"persona": cur_frm.doc.persona,
										"cuenta_analizo": frappe.session.user,
										"estado": "REALIZADO",
										"inicio": cur_frm.doc.inicio,
										"fin": cur_frm.doc.fin,
										"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
										"desarrollo": v["desarrollo"],
										"nombre": v["nombre"],
										"tipo_de_variable": v["tipo_de_variable"],
										"descripcion": v["descripcion"],
										"limitante_minimo_superyo": v["limitante_minimo_superyo"],
										"limitante_maximo_superyo": v["limitante_maximo_superyo"],
										"minimo_superyo": v["minimo_superyo"],
										"maximo_superyo": v["maximo_superyo"],
										"limitante_minimo_ello": v["limitante_minimo_ello"],
										"limitante_maximo_ello": v["limitante_maximo_ello"],
										"minimo_ello": v["minimo_ello"],
										"maximo_ello": v["maximo_ello"],
										"limitante_minimo_si_mismo": v["limitante_minimo_si_mismo"],
										"limitante_maximo_si_mismo": v["limitante_maximo_si_mismo"],
										"minimo_si_mismo": v["minimo_si_mismo"],
										"maximo_si_mismo": v["maximo_si_mismo"],
										"limitante_minimo_desajuste_su_el": v["limitante_minimo_desajuste_su_el"],
										"limitante_maximo_desajuste_su_el": v["limitante_maximo_desajuste_su_el"],
										"minimo_desajuste_su_el": v["minimo_desajuste_su_el"],
										"maximo_desajuste_su_el": v["maximo_desajuste_su_el"],
										"limitante_minimo_desajuste_si_el": v["limitante_minimo_desajuste_si_el"],
										"limitante_maximo_desajuste_si_el": v["limitante_maximo_desajuste_si_el"],
										"minimo_desajuste_si_el": v["minimo_desajuste_si_el"],
										"maximo_desajuste_si_el": v["maximo_desajuste_si_el"],
										"limitante_minimo_desajuste_si_su": v["limitante_minimo_desajuste_si_su"],
										"limitante_maximo_desajuste_si_su": v["limitante_maximo_desajuste_si_su"],
										"minimo_desajuste_si_su": v["minimo_desajuste_si_su"],
										"maximo_desajuste_si_su": v["maximo_desajuste_si_su"],
									}
								} 
							})
						})
					} 
				})
	        )
	    }
    })
    await guardar(tiempo)
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 9 */
// FUNCION PASO 9
async function paso_9(){
    await paso_9a(2000)
}

// VARIABLES PASO 9

// FUNCIONES PASO 9
async function paso_9a(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	//resolve(
                console.log("PASO 9A"),
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas", 
						filters: { 
							"psicotecnico": cur_frm.doc.name,
							"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
						},
						limit_page_length: 999,
						fields: ["name", "nombre"] 
					}, 
					callback: function(r) {
						r.message.forEach(function(g) {
							frappe.call({ 
								method:"frappe.client.get_value", 
								args: { 
									doctype: "Rasgos de Personas", 
									filters: { 
										"protocolo_de_psicotecnico": cur_frm.doc.protocolo_de_psicotecnico,
										"tipo_de_rasgo": "INDIRECTO - PROTOCOLO DE PSICOTECNICO",
										"nombre": g["nombre"],
									}, 
									fieldname: ["name", "constante_del_superyo", "constante_del_ello", "constante_del_si_mismo", "tiempo_superyo", "tiempo_ello", "tiempo_si_mismo"]
								}, 
								callback: function(u) { 
									resolve(
										frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": g["name"],
												"fieldname": {
													"rasgo_modelo": u.message.name,
													"constante_del_superyo_c": u.message.constante_del_superyo,
													"constante_del_ello_c": u.message.constante_del_ello,
													"constante_del_si_mismo_c": u.message.constante_del_si_mismo,
													"tiempo_superyo_c": u.message.tiempo_superyo,
													"tiempo_ello_c": u.message.tiempo_ello,
													"tiempo_si_mismo_c": u.message.tiempo_si_mismo
												}
											}
										})
									)
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

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 10 */
// FUNCION PASO 10
async function paso_10(){
    await paso_10a()
    await paso_10b(3000)
}

// VARIABLES PASO 10
let paso10_indirectoPsicotecnico
let paso10_coeficientesIndirectos = []

// FUNCIONES PASO 10
async function paso_10a() {
    await new Promise(resolve => {
        //resolve(
            console.log("PASO 10A"),
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas", 
                    filters: { 
                        "psicotecnico": cur_frm.doc.name,
                        "tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
                    }, 
                    fields: ["name", "nombre", "rasgo_modelo", "persona", "desarrollo"] 
                }, 
                callback: function(r) {
                    resolve(
                    paso10_indirectoPsicotecnico = r.message,
                    console.log(paso10_indirectoPsicotecnico)
                    )
                }
            })
        //)
    })
}

async function paso_10b(tiempo) {
    for(let i = 0; i < paso10_indirectoPsicotecnico.length; i++) {
        await new Promise(resolve => {
            console.log("PASO 10B"),
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Coeficientes Regresores",
                    parent: "Rasgos de Personas", 
                    filters: { 
                        parent: paso10_indirectoPsicotecnico[i]["rasgo_modelo"], 
                    },
                    order_by: "idx asc", 
                    limit_page_length: 500, 
                    fields: ["idx", "rasgo", "nombre", "tipo_de_variable", "descripcion", "grado_su", "coeficiente_su", "grado_el", "coeficiente_el", "grado_si", "coeficiente_si"] 
                }, 
                callback: function(s) {
                    resolve(
                        console.log(s.message.length),
                        s.message.forEach(function(elemento){
                            frappe.call({ 			
                                method:"frappe.client.insert", 		
                                args: { 		
                                    doc: {	
                                        "doctype": "Rasgos de Personas", 
                                        "rasgo_dependiente": paso10_indirectoPsicotecnico[i]["name"],
                                        "n_pregunta": elemento["idx"],
                                        "psicotecnico": cur_frm.doc.name,
                                        "protocolo_de_psicotecnico": cur_frm.doc.protocolo_de_psicotecnico,
                                        "protocolo_de_periodo": cur_frm.doc.protocolo_de_periodo,
                                        "periodo": cur_frm.doc.periodo,
                                        "plan_de_periodo": cur_frm.doc.plan_de_periodo,
                                        "cuenta": cur_frm.doc.cuenta,
                                        "persona": cur_frm.doc.persona,
                                        "cuenta_analizo": frappe.session.user,
                                        "estado": "REALIZADO",
                                        "desarrollo": paso10_indirectoPsicotecnico[i]["desarrollo"],
                                        "tipo_de_rasgo": "DIRECTO - COEFICIENTE",
                                        "inicio": frappe.datetime.now_datetime(),
                                        "fin": frappe.datetime.now_datetime(),
                                        "nombre": elemento["nombre"],
                                        "tipo_de_variable": elemento["tipo_de_variable"],
                                        "descripcion": elemento["descripcion"],
                                        "grado_su": elemento["grado_su"],
                                        "coeficiente_su": elemento["coeficiente_su"],
                                        "grado_el": elemento["grado_el"],
                                        "coeficiente_el": elemento["coeficiente_el"],
                                        "grado_si": elemento["grado_si"],
                                        "coeficiente_si": elemento["coeficiente_si"]
                                    }
                                }
                            })
                        })
                    )
                }
            })
        })
        await guardar(tiempo)
    }
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 11 */
// FUNCION PASO 11
async function paso_11(){
    await paso_11a()
    await paso_11b()
    await paso_11c(paso_11acumulador, 5000)
}

// VARIABLES PASO 11
let paso_11lista = []
let paso_11largoLista
let paso_11acumulador = 0
let paso_11i1 = 0
let paso_11i2 = 100

// FUNCIONES PASO 11
async function paso_11a() {
    await new Promise(resolve => {
            console.log("PASO 11A"),
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas", 
                    filters: { 
                        "psicotecnico": cur_frm.doc.name,
                        "tipo_de_rasgo": "DIRECTO - COEFICIENTE",
                    },
                    limit_page_length: 999, 
                    fields: ["name", "nombre", "grado_su", "grado_el", "grado_si", "coeficiente_su", "coeficiente_el", "coeficiente_si"]
                }, 
                callback: function(r) {
                    resolve(
                        console.log("a"),
                        console.log(r.message),
                        paso_11lista = r.message
                    )
                }
            })
    })
    //await guardar(tiempo)
}

async function paso_11b(){
    await new Promise(resolve => {
        console.log("PASO 11B")
        paso_11largoLista = paso_11lista.length
        while(paso_11largoLista > 100){
            if(paso_11largoLista > 100){
                resolve(
                    paso_11acumulador += 1,
                    paso_11largoLista -= 100
                )
            }
            console.log(paso_11largoLista + " - " + paso_11acumulador)
        }
        if(paso_11largoLista<100){
            resolve(
            paso_11acumulador += 1,
            console.log("b"),
            console.log(paso_11acumulador)
            )
        }
    })
}

async function paso_11c(veces, tiempo){
    for(let i=0; i < veces; i++){
        await new Promise(resolve => {
            console.log("PASO 11C")
            resolve(
            paso_11lista.forEach(function(element, i){
                if(i >= paso_11i1 && i <= paso_11i2){
                    frappe.call({ 
                        method:"frappe.client.get_value", 
                        args: { 
                            doctype: "Rasgos de Personas", 
                            filters: { 
                                "psicotecnico": cur_frm.doc.psicotecnico,
                                "tipo_de_rasgo": "DIRECTO - PSICOTECNICO",
                                "nombre": element["nombre"], 
                            },
                            limit_page_length: 999,
                            fieldname: ["superyo", "ello", "si_mismo"] 
                        }, 
                        callback: function(s) {
                                frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": element["name"],
                                        "fieldname": {
                                            "respuesta_su": s.message.superyo,
                                            "respuesta_el": s.message.ello,
                                            "respuesta_si": s.message.si_mismo,
                                            "superyo": Math.pow(s.message.superyo, element["grado_su"]) * element["coeficiente_su"],
                                            "ello": Math.pow(s.message.ello, element["grado_el"]) * element["coeficiente_el"],
                                            "si_mismo": Math.pow(s.message.si_mismo, element["grado_si"]) * element["coeficiente_si"],
                                        }
                                    }
                                })
                        }
                    })
                }
            }),
            paso_11i1 += 100,
            paso_11i2 += 100
            )
        })
        await guardar(tiempo)
    }
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 12 */
// FUNCION PASO 12
async function paso_12(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                console.log("PASO 12"),
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
						fields: ["name", "nombre", "constante_del_superyo_c", "constante_del_ello_c", "constante_del_si_mismo_c", "tiempo_superyo_c", "tiempo_ello_c", "tiempo_si_mismo_c",
						 "limitante_minimo_superyo", "minimo_superyo", "limitante_maximo_superyo", "maximo_superyo", "limitante_minimo_ello", "minimo_ello", "limitante_maximo_ello", "maximo_ello","limitante_minimo_si_mismo",
						 "minimo_si_mismo", "maximo_si_mismo", "limitante_maximo_si_mismo", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "limitante_minimo_desajuste_su_el",
						 "limitante_maximo_desajuste_su_el","minimo_desajuste_si_su","maximo_desajuste_si_su","minimo_desajuste_si_el","maximo_desajuste_si_el","minimo_desajuste_su_el", "maximo_desajuste_su_el"]
					}, 
					callback: function(r) { 
						r.message.forEach(function(v) {
							var total_superyo = 0;
							var total_ello = 0; 
							var total_si_mismo = 0; 
							frappe.call({ 
								method:"frappe.client.get_list", 
								args: { 
									doctype: "Rasgos de Personas",
									filters: { 
										psicotecnico: cur_frm.doc.name, 
										tipo_de_rasgo: "DIRECTO - COEFICIENTE",
										rasgo_dependiente: v["name"] 
										
									},
									limit_page_length: 999,
									order_by: "n_pregunta asc", 
									fields: ["superyo", "ello", "si_mismo"] 
								}, 
								callback: function(t) {
									$.each(t.message, function(i, row) {
										total_superyo += row.superyo;
										total_ello += row.ello;
										total_si_mismo += row.si_mismo;
									});
									if(total_superyo != 0 && total_si_mismo != 0 && v["tiempo_superyo_c"] != 1 && v["tiempo_si_mismo_c"] != 1){
										if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_ desajuste_si_su"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) > v["minimo_desajuste_si_su"] && v["limitante_maximo_ desajuste_si_su"] == 1 && (total_si_mismo +  v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) < v["maximo_desajuste_si_su"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]),
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_desajuste_si_su"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) < v["maximo_desajuste_si_su"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]),
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]),
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) < v["minimo_desajuste_si_su"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]),
													"resultado_desajuste_si_su": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_si_su"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) > v["maximo_desajuste_si_su"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]),
													"resultado_desajuste_si_su": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_superyo != 0 && total_si_mismo != 0 && v["tiempo_superyo_c"] == 1 && v["tiempo_si_mismo_c"] != 1){
										if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_ desajuste_si_su"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion

												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_su"] == 1 && (((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_su"]) && v["limitante_maximo_ desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_su"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_su"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["minimo_desajuste_si_su"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_su": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion)  > v["maximo_desajuste_si_su"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_si_su": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_superyo != 0 && total_si_mismo != 0 && v["tiempo_superyo_c"] != 1 && v["tiempo_si_mismo_c"] == 1){
										if(v["limitante_minimo_desajuste_si_su"] != 1 &&  v["limitante_maximo_desajuste_si_su"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"]))
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) < v["maximo_desajuste_si_su"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])),
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) < v["maximo_desajuste_si_su"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])),
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])),
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) < v["minimo_desajuste_si_su"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])),
													"resultado_desajuste_si_su": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) > v["maximo_desajuste_si_su"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])),
													"resultado_desajuste_si_su": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_superyo != 0 && total_si_mismo != 0 && v["tiempo_superyo_c"] == 1 && v["tiempo_si_mismo_c"] == 1){
										if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_desajuste_si_su"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion)
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_su"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_su"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_su": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["minimo_desajuste_si_su"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_su": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) > v["maximo_desajuste_si_su"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_su": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_ello != 0 && total_si_mismo != 0 && v["tiempo_ello_c"] != 1 && v["tiempo_si_mismo_c"] != 1){
										if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])

												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo +  v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo +  v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) < v["maximo_desajuste_si_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"]),
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) < v["maximo_desajuste_si_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"]),
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo +  v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"]),
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) < v["minimo_desajuste_si_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"]),
													"resultado_desajuste_si_el": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo +  v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) > v["maximo_desajuste_si_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"]),
													"resultado_desajuste_si_el": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_ello != 0 && total_si_mismo != 0 && v["tiempo_ello_c"] == 1 && v["tiempo_si_mismo_c"] != 1){
										if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion

												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  < v["maximo_desajuste_si_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  < v["minimo_desajuste_si_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_el": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  > v["maximo_desajuste_si_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_si_el": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_ello != 0 && total_si_mismo != 0 && v["tiempo_ello_c"] != 1 && v["tiempo_si_mismo_c"] == 1){
										if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + v["constante_del_ello_c"]))

												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) < v["maximo_desajuste_si_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + v["constante_del_ello_c"])),
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"]))  < v["maximo_desajuste_si_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) < v["minimo_desajuste_si_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
													"resultado_desajuste_si_el": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["maximo_desajuste_si_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
													"resultado_desajuste_si_el": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_ello != 0 && total_si_mismo != 0 && v["tiempo_ello_c"] == 1 && v["tiempo_si_mismo_c"] == 1){
										if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_ desajuste_si_el"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_el"] && v["limitante_maximo_ desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["minimo_desajuste_si_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_el": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["maximo_desajuste_si_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_si_el": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_ello != 0 && total_superyo != 0 && v["tiempo_ello_c"] != 1 && v["tiempo_superyo_c"] != 1){
										if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])
												}
											} 
										});
										if(v["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo +  v["constante_del_superyo_c"] - total_ello - v["constante_del_ello_c"]) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo +  v["constante_del_superyo_c"] - total_ello - v["constante_del_ello_c"]) < v["maximo_desajuste_su_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"]),
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo + v["constante_del_superyo_c"] - total_ello - v["constante_del_ello_c"]) < v["maximo_desajuste_su_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"]),
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo + v["constante_del_superyo_c"] - total_ello - v["constante_del_ello_c"]) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"]),
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo + v["constante_del_superyo_c"] - total_ello - v["constante_del_ello_c"]) < v["minimo_desajuste_su_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"]),
													"resultado_desajuste_su_el": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo + v["constante_del_superyo_c"] - total_ello + v["constante_del_ello_c"]) > v["maximo_desajuste_su_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"]),
													"resultado_desajuste_su_el": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_ello != 0 && total_superyo != 0 && v["tiempo_ello_c"] == 1 && v["tiempo_superyo_c"] != 1){
										if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion
												}
											} 
										});
										if(v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  < v["maximo_desajuste_su_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_su_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  < v["minimo_desajuste_su_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_su_el": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  > v["maximo_desajuste_su_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
													"resultado_desajuste_su_el": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_ello != 0 && total_superyo != 0 && v["tiempo_ello_c"] != 1 && v["tiempo_superyo_c"] == 1){
										if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"]))
												}
											} 
										});
										if(v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) < v["maximo_desajuste_su_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"]))  < v["maximo_desajuste_su_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) < v["minimo_desajuste_su_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
													"resultado_desajuste_su_el": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["maximo_desajuste_su_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
													"resultado_desajuste_su_el": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_ello != 0 && total_superyo != 0 && v["tiempo_ello_c"] == 1 && v["tiempo_superyo_c"] == 1){
										if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion)				
												}
											} 
										});
										if(v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_su_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello - v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_su_el"]) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_su_el": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["minimo_desajuste_su_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_su_el": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["maximo_desajuste_su_el"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
													"resultado_desajuste_su_el": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_superyo != 0 && v["tiempo_superyo_c"] != 1){
										if(v["limitante_minimo_superyo"] != 1 && v["limitante_maximo_superyo"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": total_superyo +  v["constante_del_superyo_c"]
												}
											} 
										});
										if(v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) > v["minimo_superyo"] && v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) < v["maximo_superyo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": total_superyo +  v["constante_del_superyo_c"],
													"resultado_superyo": "APROBADO"
												}
											} 
										});				
										if(v["limitante_minimo_superyo"] != 1 && v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) < v["maximo_superyo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": total_superyo +  v["constante_del_superyo_c"],
													"resultado_superyo": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) > v["minimo_superyo"] && v["limitante_maximo_superyo"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": total_superyo +  v["constante_del_superyo_c"],
													"resultado_superyo": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) < v["minimo_superyo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": total_superyo +  v["constante_del_superyo_c"],
													"resultado_superyo": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) > v["maximo_superyo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": total_superyo +  v["constante_del_superyo_c"],
													"resultado_superyo": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_superyo != 0 && v["tiempo_superyo_c"] == 1){
										if(v["limitante_minimo_superyo"] != 1 &&  v["limitante_maximo_superyo"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": (total_superyo + v["constante_del_superyo_c"]) / cur_frm.doc.duracion
												}
											} 
										});
										if(v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion  > v["minimo_superyo"] && v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion < v["maximo_superyo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
													"resultado_superyo": "APROBADO"
												}
											} 
										});				
										if(v["limitante_minimo_superyo"] != 1 && v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion < v["maximo_superyo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
													"resultado_superyo": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion  > v["minimo_superyo"] && v["limitante_maximo_superyo"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
													"resultado_superyo": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion  < v["minimo_superyo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo": (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
													"resultado_superyo": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion  > v["maximo_superyo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"superyo":(total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
													"resultado_superyo": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_ello != 0 && v["tiempo_ello_c"] != 1){
										if(v["limitante_minimo_ello"] != 1 && v["limitante_maximo_ello"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": total_ello +  v["constante_del_ello_c"]
												}
											} 
										});
										if(v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) > v["minimo_ello"] && v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) < v["maximo_ello"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": total_ello +  v["constante_del_ello_c"],
													"resultado_ello": "APROBADO"
												}
											} 
										});				
										if(v["limitante_minimo_ello"] != 1 && v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) < v["maximo_ello"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": total_ello +  v["constante_del_ello_c"],
													"resultado_ello": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) > v["minimo_ello"] && v["limitante_maximo_ello"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": total_ello +  v["constante_del_ello_c"],
													"resultado_ello": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) < v["minimo_ello"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": total_ello +  v["constante_del_ello_c"],
													"resultado_ello": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) > v["maximo_ello"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": total_ello +  v["constante_del_ello_c"],
													"resultado_ello": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_ello != 0 && v["tiempo_ello_c"] == 1){
										if(v["limitante_minimo_ello"] != 1 && v["limitante_maximo_ello"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion
												}
											} 
										});
										if(v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion  > v["minimo_ello"] && v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion < v["maximo_ello"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion,
													"resultado_ello": "APROBADO"
												}
											} 
										});				
										if(v["limitante_minimo_ello"] != 1 && v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion < v["maximo_ello"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion,
													"resultado_ello": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion  > v["minimo_ello"] && v["limitante_maximo_ello"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion,
													"resultado_ello": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion  < v["minimo_ello"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion,
													"resultado_ello": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion  > v["maximo_ello"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion,
													"resultado_ello": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_si_mismo != 0 && v["tiempo_si_mismo_c"] != 1){
										if(v["limitante_minimo_si_mismo"] != 1 && v["limitante_maximo_si_mismo"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"]
												}
											} 
										});	
										if(v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) > v["minimo_si_mismo"] && v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) < v["maximo_si_mismo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"],
													"resultado_si_mismo": "APROBADO"
												}
											} 
										});				
										if(v["limitante_minimo_si_mismo"] != 1 && v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) < v["maximo_si_mismo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"],
													"resultado_si_mismo": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) > v["minimo_si_mismo"] && v["limitante_maximo_si_mismo"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"],
													"resultado_si_mismo": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) < v["minimo_si_mismo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"],
													"resultado_si_mismo": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) > v["maximo_si_mismo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"],
													"resultado_si_mismo": "DESAPROBADO"
												}
											} 
										});
									};
									if(total_si_mismo != 0 && v["tiempo_si_mismo_c"] == 1){
										if(v["limitante_minimo_si_mismo"] != 1 && v["limitante_maximo_si_mismo"] != 1)frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo": (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion
												}
											} 
										});
										if(v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > v["minimo_si_mismo"] && v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion < v["maximo_si_mismo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo": (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
													"resultado_si_mismo": "APROBADO"
												}
											} 
										});				
										if(v["limitante_minimo_si_mismo"] != 1 && v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion < v["maximo_si_mismo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo": (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
													"resultado_si_mismo": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > v["minimo_si_mismo"] && v["limitante_maximo_si_mismo"] != 1) frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo": (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
													"resultado_si_mismo": "APROBADO"
												}
											} 
										});
										if (v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  < v["minimo_si_mismo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo":  (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
													"resultado_si_mismo": "DESAPROBADO"
												}
											} 
										});
										if (v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > v["maximo_si_mismo"])frappe.call({ 
											method:"frappe.client.set_value", 
											args: { 
												"doctype": "Rasgos de Personas", 
												"name": v["name"],
												"fieldname": {
													"si_mismo":(total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
													"resultado_si_mismo": "DESAPROBADO"
												}
											} 
										})
									}
    							}
     						})
     					})
					}
     			})
        	)
        }	
    })
    await guardar(tiempo)
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 13 */
// FUNCION PASO 13
async function paso_13(){
	await paso_13a()
	await paso_13b(2000)
}

// VARIABLES PASO 13
let paso_13indirectoPsicotecnico

// FUNCIONES PASO 13
async function paso_13a() {
    await new Promise(resolve => {
		console.log("PASO 13A"),
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
				resolve(
					paso_13indirectoPsicotecnico = r.message
				)
			}
		})
    })
}

async function paso_13b(tiempo) {
	for(let i = 0; i < paso_13indirectoPsicotecnico.length; i++){
		await new Promise(resolve => {
			console.log("PASO 13B")
			var superyo_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_superyo"]) {superyo_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_superyo"]) {superyo_limitante = 1};
			var ello_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_ello"]) {ello_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_ello"]){ ello_limitante = 1};
			var si_mismo_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_si_mismo"]){ si_mismo_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_si_mismo"]){ si_mismo_limitante = 1};
			var si_su_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_desajuste_si_su"]){ si_su_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_desajuste_si_su"]){ si_su_limitante = 1};
			var si_el_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_desajuste_si_el"]){ si_el_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_desajuste_si_el"]){ si_el_limitante = 1};
			var su_el_limitante = 0;
			if(paso_13indirectoPsicotecnico[i]["limitante_minimo_desajuste_su_el"]){ su_el_limitante = 1};
			if(paso_13indirectoPsicotecnico[i]["limitante_maximo_desajuste_su_el"]){ su_el_limitante = 1};
			resolve(
				frappe.call({ 
					method:"frappe.client.set_value", 
					args: { 
						"doctype": "Rasgos de Personas", 
						"name": paso_13indirectoPsicotecnico[i]["name"],
						"fieldname": {
								"parametros_limitantes_totales": superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante
						}
					} 
				})
			)
		})
		await guardar(tiempo)
	}
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 14 */
// FUNCION PASO 14
async function paso_14(){
    await paso_14a()
    await paso_14b(1000)
}

// VARIABLES PASO 14
let paso_14indirectoPsicotecnico = []

// FUNCIONES PASO 14
async function paso_14a() {
    await new Promise(resolve => {
            console.log("PASO 14A"),
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
                    fields: ["name", "superyo", "ello", "si_mismo"] 
                }, 
                callback: function(r) { 
                    resolve(
                        paso_14indirectoPsicotecnico = r.message
                    )
                    console.log(paso_14indirectoPsicotecnico)
                }
            })
    })
}

async function paso_14b(tiempo) {
    for(let i = 0; i < paso_14indirectoPsicotecnico.length; i++){
        await new Promise(resolve => {
            console.log("PASO 14B")
            if(paso_14indirectoPsicotecnico[i]["superyo"] > 0 && paso_14indirectoPsicotecnico[i]["ello"] > 0 && paso_14indirectoPsicotecnico[i]["si_mismo"] > 0){
                resolve(
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": paso_14indirectoPsicotecnico[i]["name"],
                            "fieldname": {
                                "dimensiones": 3,
                                "desajustes": 3,
                                "parametros": 6
                            }
                        } 
                    })
                )
            }
            if(paso_14indirectoPsicotecnico[i]["superyo"] > 0 && paso_14indirectoPsicotecnico[i]["ello"] == 0 && paso_14indirectoPsicotecnico[i]["si_mismo"] > 0){
                resolve(
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": paso_14indirectoPsicotecnico[i]["name"],
                            "fieldname": {
                                "dimensiones": 2,
                                "desajustes": 2,
                                "parametros": 4  
                            }
                        } 
                    })
                )   
            }
            if(paso_14indirectoPsicotecnico[i]["superyo"] > 0 && paso_14indirectoPsicotecnico[i]["ello"] > 0 && paso_14indirectoPsicotecnico[i]["si_mismo"] == 0){
                resolve(
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": paso_14indirectoPsicotecnico[i]["name"],
                            "fieldname": {
                                "dimensiones": 2,
                                "desajustes": 2,
                                "parametros": 4  
                            }
                        } 
                    })
                )
            }
            if(paso_14indirectoPsicotecnico[i]["superyo"] > 0 && paso_14indirectoPsicotecnico[i]["ello"] == 0 && paso_14indirectoPsicotecnico[i]["si_mismo"] == 0){
                resolve(
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": paso_14indirectoPsicotecnico[i]["name"],
                            "fieldname": {
                                "dimensiones": 1,
                                "parametros": 1  
                            }
                        } 
                    })
                )
            }
            if(paso_14indirectoPsicotecnico[i]["superyo"] == 0 && paso_14indirectoPsicotecnico[i]["ello"] > 0 && paso_14indirectoPsicotecnico[i]["si_mismo"] == 0){
                resolve(
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": paso_14indirectoPsicotecnico[i]["name"],
                            "fieldname": {
                                "dimensiones": 1,
                                "parametros": 1  
                            }
                        } 
                    })
                )
            }
            if(paso_14indirectoPsicotecnico[i]["superyo"] == 0 && paso_14indirectoPsicotecnico[i]["ello"] == 0 && paso_14indirectoPsicotecnico[i]["si_mismo"] > 0){
                resolve(
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": paso_14indirectoPsicotecnico[i]["name"],
                            "fieldname": {
                                "dimensiones": 1,
                                "parametros": 1  
                            }
                        } 
                    })
                )
            }
        })
        await guardar(tiempo)
    }
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 15 */
// FUNCION PASO 15
async function paso_15(){
    await paso_15a()
    await paso_15b(1000)
}

// VARIABLES PASO 15
let paso_15indirectoPsicotecnico

// FUNCIONES PASO 15
async function paso_15a() {
    await new Promise(resolve => {
        console.log("PASO 15A"),
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
                fields: ["name", "parametros_limitantes_totales", "resultado_superyo", "resultado_ello", "resultado_si_mismo", "resultado_desajuste_si_su", "resultado_desajuste_si_el", "resultado_desajuste_su_el"] 
            }, 
            callback: function(r) { 
                resolve(
                    paso_15indirectoPsicotecnico = r.message
                )
            }
        })
    })
}

async function paso_15b(tiempo) {
    for(let i = 0; i < paso_15indirectoPsicotecnico.length; i++){
        await new Promise(resolve => {
            console.log("PASO 15B")
            var superyo_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_superyo"] == "DESAPROBADO"){superyo_limitante = 1};
            var ello_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_ello"] == "DESAPROBADO"){ello_limitante = 1};
            var si_mismo_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_si_mismo"] == "DESAPROBADO"){ si_mismo_limitante = 1};
            var si_su_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_desajuste_si_su"]){ si_su_limitante = 1};
            var si_el_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_desajuste_si_el"]){ si_el_limitante = 1};
            var su_el_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_desajuste_su_el"]){ su_el_limitante = 1};
            resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_15indirectoPsicotecnico[i]["name"],
                        "fieldname": {
                            "parametros_desaprobados": superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante
                        }
                    } 
                })
            )
        })
        await guardar(tiempo)
    }
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 16 */
// FUNCION PASO 16
async function paso_16(){
    await paso_16a()
    await paso_16b(1000)
}

// VARIABLES PASO 16
let paso_16indirectoPsicotecnico = []

// FUNCIONES PASO 16
async function paso_16a() {
    await new Promise(resolve => {
            console.log("PASO 16A"),
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
					fields: ["name", "parametros_limitantes_totales", "resultado_superyo", "resultado_ello", "resultado_si_mismo", "resultado_desajuste_si_su", "resultado_desajuste_si_el", "resultado_desajuste_su_el"] 
				}, 
				callback: function(r) { 
					resolve(
						paso_16indirectoPsicotecnico = r.message
					)
				}
			})
    })
}

async function paso_16b(tiempo) {
	for(let i = 0; i < paso_16indirectoPsicotecnico.length; i++){
		await new Promise(resolve => {
            console.log("PASO 16B")
			var superyo_limitante = 0;
			if(paso_16indirectoPsicotecnico[i]["resultado_superyo"] == "DESAPROBADO"){superyo_limitante = 1};
			var ello_limitante = 0;
			if(paso_16indirectoPsicotecnico[i]["resultado_ello"] == "DESAPROBADO"){ello_limitante = 1};
			var si_mismo_limitante = 0;
			if(paso_16indirectoPsicotecnico[i]["resultado_si_mismo"] == "DESAPROBADO"){ si_mismo_limitante = 1};
			var si_su_limitante = 0;
			if(paso_16indirectoPsicotecnico[i]["resultado_desajuste_si_su"]){ si_su_limitante = 1};
			var si_el_limitante = 0;
			if(paso_16indirectoPsicotecnico[i]["resultado_desajuste_si_el"]){ si_el_limitante = 1};
			var su_el_limitante = 0;
			if(paso_16indirectoPsicotecnico[i]["resultado_desajuste_su_el"]){ su_el_limitante = 1};
			if(paso_16indirectoPsicotecnico[i]["parametros_limitantes_totales"] > 0 && (superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante) > 0){
				resolve(
					frappe.call({ 
						method:"frappe.client.set_value", 
						args: { 
							"doctype": "Rasgos de Personas", 
							"name": paso_16indirectoPsicotecnico[i]["name"],
							"fieldname": {
								"resultado": "DESAPROBADO"
							}
						} 
					})
				)
			};
			if(paso_16indirectoPsicotecnico[i]["parametros_limitantes_totales"] > 0 && (superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante) == 0){
				resolve(
					frappe.call({ 
						method:"frappe.client.set_value", 
						args: { 
							"doctype": "Rasgos de Personas", 
							"name": paso_16indirectoPsicotecnico[i]["name"],
							"fieldname": {
								"resultado": "APROBADO"
							}
						} 
					})
				)
			}
		})
		await guardar(tiempo)
	}
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 17 */
// FUNCION PASO 17
async function paso_17(){
    await paso_17a()
    await paso_17b(1000)
	await paso_17c()
	await paso_17Comprobacion()
}

// VARIABLES PASO 17
let paso_17indirectoPsicotecnico
let paso_17cantidadRasgosIndirectos

// FUNCIONES PASO 17
async function paso_17a() {
    await new Promise(resolve => {
		console.log("PASO 17A"),
		cur_frm.clear_table("table_166"),
		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					psicotecnico: cur_frm.doc.name, 
					"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
				},
				limit_page_length: 999,
				order_by: "n_pregunta asc",
				fields: ["name", "nombre", "tipo_de_variable", "descripcion", "superyo", "ello", "si_mismo", "limitante_minimo_superyo", "limitante_maximo_superyo", "minimo_superyo", "maximo_superyo", "limitante_minimo_ello", "limitante_maximo_ello", "minimo_ello", "maximo_ello", "limitante_minimo_si_mismo", "limitante_maximo_si_mismo", "minimo_si_mismo", "maximo_si_mismo", "limitante_minimo_desajuste_su_el", "limitante_maximo_desajuste_su_el", "minimo_desajuste_su_el", "maximo_desajuste_su_el", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "minimo_desajuste_si_el", "maximo_desajuste_si_el", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "minimo_desajuste_si_su", "maximo_desajuste_si_su", "resultado_superyo", "resultado_ello", "resultado_si_mismo", "valor_desajuste_si_su", "valor_desajuste_si_el", "valor_desajuste_su_el", "resultado_desajuste_si_su", "resultado_desajuste_si_el", "resultado_desajuste_su_el", "dimensiones", "desajustes", "parametros", "resultado", "parametros_desaprobados", "parametros_limitantes_totales"] 
			}, 
			callback: function(r) { 
				resolve(
					paso_17indirectoPsicotecnico = r.message
				)
			}
		})
	})
}

async function paso_17b(tiempo) {
	for(let i = 0; i < paso_17indirectoPsicotecnico.length; i++){
		await new Promise(resolve => {
            console.log("PASO 17B")
			var n = frappe.model.add_child(cur_frm.doc, "Rasgos Indirectos en Psicotecnicos", "table_166")
			resolve(
			n.rasgo = paso_17indirectoPsicotecnico[i]["name"],
			n.nombre = paso_17indirectoPsicotecnico[i]["nombre"],
			n.tipo_de_variable = paso_17indirectoPsicotecnico[i]["tipo_de_variable"],
			n.descripcion = paso_17indirectoPsicotecnico[i]["descripcion"],
			n.superyo = paso_17indirectoPsicotecnico[i]["superyo"],
			n.ello = paso_17indirectoPsicotecnico[i]["ello"],
			n.si_mismo = paso_17indirectoPsicotecnico[i]["si_mismo"],
			n.limitante_minimo_superyo = paso_17indirectoPsicotecnico[i]["limitante_minimo_superyo"],
			n.limitante_maximo_superyo = paso_17indirectoPsicotecnico[i]["limitante_maximo_superyo"],
			n.minimo_superyo = paso_17indirectoPsicotecnico[i]["minimo_superyo"],
			n.maximo_superyo = paso_17indirectoPsicotecnico[i]["maximo_superyo"],
			n.limitante_minimo_ello = paso_17indirectoPsicotecnico[i]["limitante_minimo_ello"],
			n.limitante_maximo_ello = paso_17indirectoPsicotecnico[i]["limitante_maximo_ello"],
			n.minimo_ello = paso_17indirectoPsicotecnico[i]["minimo_ello"],
			n.maximo_ello = paso_17indirectoPsicotecnico[i]["maximo_ello"],
			n.limitante_minimo_si_mismo = paso_17indirectoPsicotecnico[i]["limitante_minimo_si_mismo"],
			n.limitante_maximo_si_mismo = paso_17indirectoPsicotecnico[i]["limitante_maximo_si_mismo"],
			n.minimo_si_mismo = paso_17indirectoPsicotecnico[i]["minimo_si_mismo"],
			n.maximo_si_mismo = paso_17indirectoPsicotecnico[i]["maximo_si_mismo"],
			n.limitante_minimo_desajuste_su_el = paso_17indirectoPsicotecnico[i]["limitante_minimo_desajuste_su_el"],
			n.limitante_maximo_desajuste_su_el = paso_17indirectoPsicotecnico[i]["limitante_maximo_desajuste_su_el"],
			n.minimo_desajuste_su_el = paso_17indirectoPsicotecnico[i]["minimo_desajuste_su_el"],
			n.maximo_desajuste_su_el = paso_17indirectoPsicotecnico[i]["maximo_desajuste_su_el"],
			n.limitante_minimo_desajuste_si_el = paso_17indirectoPsicotecnico[i]["limitante_minimo_desajuste_si_el"],
			n.limitante_maximo_desajuste_si_el = paso_17indirectoPsicotecnico[i]["limitante_maximo_desajuste_si_el"],
			n.minimo_desajuste_si_el = paso_17indirectoPsicotecnico[i]["minimo_desajuste_si_el"],
			n.maximo_desajuste_si_el = paso_17indirectoPsicotecnico[i]["maximo_desajuste_si_el"],
			n.limitante_minimo_desajuste_si_su = paso_17indirectoPsicotecnico[i]["limitante_minimo_desajuste_si_su"],
			n.limitante_maximo_desajuste_si_su = paso_17indirectoPsicotecnico[i]["limitante_maximo_desajuste_si_su"],
			n.minimo_desajuste_si_su = paso_17indirectoPsicotecnico[i]["minimo_desajuste_si_su"],
			n.maximo_desajuste_si_su = paso_17indirectoPsicotecnico[i]["maximo_desajuste_si_su"],
			n.resultado_superyo = paso_17indirectoPsicotecnico[i]["resultado_superyo"],
			n.resultado_ello = paso_17indirectoPsicotecnico[i]["resultado_ello"],
			n.resultado_si_mismo = paso_17indirectoPsicotecnico[i]["resultado_si_mismo"],
			n.valor_desajuste_si_su = paso_17indirectoPsicotecnico[i]["valor_desajuste_si_su"],
			n.valor_desajuste_si_el = paso_17indirectoPsicotecnico[i]["valor_desajuste_si_el"],
			n.valor_desajuste_su_el = paso_17indirectoPsicotecnico[i]["valor_desajuste_su_el"],
			n.resultado_desajuste_si_su = paso_17indirectoPsicotecnico[i]["resultado_desajuste_si_su"],
			n.resultado_desajuste_si_el = paso_17indirectoPsicotecnico[i]["resultado_desajuste_si_el"],
			n.resultado_desajuste_su_el = paso_17indirectoPsicotecnico[i]["resultado_desajuste_su_el"],
			n.dimensiones = paso_17indirectoPsicotecnico[i]["dimensiones"],
			n.desajustes = paso_17indirectoPsicotecnico[i]["desajustes"],
			n.parametros = paso_17indirectoPsicotecnico[i]["parametros"],
			n.resultado = paso_17indirectoPsicotecnico[i]["resultado"],
			n.parametros_limitantes_totales = paso_17indirectoPsicotecnico[i]["parametros_limitantes_totales"],
			n.parametros_desaprobados = paso_17indirectoPsicotecnico[i]["parametros_desaprobados"]
			)
		})
	}
	await refresh_field("table_166")
	await guardar(tiempo)
}

async function paso_17c() {
	await new Promise(resolve => {
        console.log("PASO 17C"),
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Protocolos de Psicotecnicos",
				filters: {
					name: cur_frm.doc.protocolo_de_psicotecnico
				},
				fieldname: "rasgos_indirectos"
			},
			callback: function(r){
				resolve(
				paso_17cantidadRasgosIndirectos = r.message.rasgos_indirectos
				)
			}
		})
	})
}

async function paso_17Comprobacion() {
	if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
		await paso_17b(2000)
		if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
			await paso_17b(3000)
			if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
				await paso_17b(5000)
				if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
					await paso_17b(10000)
					if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
						await paso_17b(15000)
						if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
							await paso_17b(30000)
						}
					}
				}
			}
		}
	}
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 18 */
// FUNCION PASO 18
async function paso_18(){
	await paso_18a()
	await paso_18b(1000)
}

// VARIABLES PASO 18
let paso_18indirectoPsicotecnico

// FUNCIONES PASO 18
async function paso_18a() {
    await new Promise(resolve => {
        console.log("PASO 18A"),
		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					psicotecnico: cur_frm.doc.name, 
					"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
				},
				limit_page_length: 999,
				order_by: "n_pregunta asc",
				fields: ["name", "nombre", "tipo_de_variable", "descripcion", "superyo", "ello", "si_mismo", "limitante_minimo_superyo", "limitante_maximo_superyo", "minimo_superyo", "maximo_superyo", "limitante_minimo_ello", "limitante_maximo_ello", "minimo_ello", "maximo_ello", "limitante_minimo_si_mismo", "limitante_maximo_si_mismo", "minimo_si_mismo", "maximo_si_mismo", "limitante_minimo_desajuste_su_el", "limitante_maximo_desajuste_su_el", "minimo_desajuste_su_el", "maximo_desajuste_su_el", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "minimo_desajuste_si_el", "maximo_desajuste_si_el", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "minimo_desajuste_si_su", "maximo_desajuste_si_su", "resultado_superyo", "resultado_ello", "resultado_si_mismo", "valor_desajuste_si_su", "valor_desajuste_si_el", "valor_desajuste_su_el", "resultado_desajuste_si_su", "resultado_desajuste_si_el", "resultado_desajuste_su_el", "dimensiones", "desajustes", "parametros", "resultado", "parametros_desaprobados", "parametros_limitantes_totales"] 
			}, 
			callback: function(r) { 
				resolve(
					paso_18indirectoPsicotecnico = r.message
				)
			}
		})
    })
}

async function paso_18b(tiempo) {
    await new Promise(resolve => {
        console.log("PASO 18B")
		var total_parametros = 0;
		var total_parametros_limitantes_totales = 0; 
		var total_parametros_desaprobados = 0; 
		paso_18indirectoPsicotecnico.forEach(function(element){
			total_parametros += element.parametros;
			total_parametros_limitantes_totales += element.parametros_limitantes_totales;
			total_parametros_desaprobados += element.parametros_desaprobados;
		}),
		cur_frm.set_value("parametros", total_parametros)
		cur_frm.set_value("parametros_limitantes_totales", total_parametros_limitantes_totales)
		cur_frm.set_value("parametros_desaprobados", total_parametros_desaprobados)
		if(total_parametros_desaprobados > 0){
			resolve(
				cur_frm.set_value("resultado", "DESAPROBADO"),
				cur_frm.set_value("explicacion_final_completa", cur_frm.doc.explicacion_final + "El mismo ha sido DESAPROBADO.")
			)
		}  
		if(total_parametros_desaprobados == 0){
			resolve(
				cur_frm.set_value("resultado", "APROBADO"),
				cur_frm.set_value("explicacion_final_completa", cur_frm.doc.explicacion_final + "El mismo ha sido APROBADO.")
			)
		}
	})
	await guardar(tiempo)
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 19 */
// FUNCION PASO 19
async function paso_19() {
    await new Promise(resolve => {
        console.log("PASO 19"),
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
				resolve(
					cur_frm.set_value("rasgos_limitantes", r.message.length)
				)
			} 
		})
    })
}

/*-------------------------------------------------------------------------------------------------------------------------------- PASO 20 */
// FUNCION PASO 20
async function paso_20(tiempo) {
    await new Promise(resolve => {
        console.log("PASO 20"),
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
				resolve(
					cur_frm.set_value("rasgos_desaprobados", r.message.length)
				)
			} 
		})
    })
    await guardar(tiempo)
}