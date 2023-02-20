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

// CODIGO NUEVO
frappe.ui.form.on("Psicotecnicos", {
	finalizar: function(frm) {
		correrFunciones()
	}
})

// VARIABLES DE ASIGNACION
let listaPaso5 = []
let cantidadDeRasgosProtocolo
let cantidadDeRasgosPsicotecnico
let rasgosPsicotecnico = []
let rasgos
let valorPaso5
let listaPaso6 = []
let listaPaso7 = []

async function correrFunciones(){
    await paso_1(1000)
    await comprobarPaso1()
    await paso_2(1000)
    await comprobarPaso2()
    await paso_3(1000)
	await comprobarTablaPaso3()
    await paso_4(1000)
	await comprobarTablaPaso4()
    await paso_5(1000)
    await paso_5b(0, 0, 100)
    await paso_5b(0, 100, 200)
    await paso_5b(0, 200, 300)
    await paso_5b(0, 300, 400)
    await paso_5b(0, 400, 500)
    await paso_5_comprobacion(1000)
    await paso_6(1000)
    await paso_6a(1000)
	await paso_6b(1000)
    await paso_6b(1000)
    await paso_6superyo(5000, 0, 200)
    await paso_6superyo(5000, 200, 400)
    await paso_6superyo(5000, 400, 500)
    await paso_6ello(5000, 0, 200)
    await paso_6ello(5000, 200, 400)
    await paso_6ello(5000, 400, 500)
    await paso_6simismo(5000, 0, 200)
    await paso_6simismo(5000, 200, 400)
    await paso_6simismo(5000, 400, 500)
    await paso_7(1000)
	await paso_7b(5000)
	await comprobarTabla3()
    /*
    await paso_8(1000)
    await paso_9(1000)
    await paso_10(5000)
    await paso_11(1000)
    await paso_12(3000)
    await paso_13(1000);
    await paso_14(1000);
    await paso_15(1000);
    await paso_16(1000);
    await paso_17(1000);
	await comprobarTabla4();
    await paso_18(1000);
    await paso_19(1000);
    await paso_20(1000);
     */
    await finalizado();	
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

const delay = (delayEnMs) => {
    return new Promise(resolve => setTimeout(resolve, delayEnMs));
}

async function finalizado() {
    await new Promise(resolve => {
        resolve(
          frappe.msgprint(__('Ejecución finalizada'))
        );
    })
}

async function comprobarTabla3() {
	if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DVI-I"){
		if(cur_frm.doc.table_28.length != 112) {
            await paso_7(2000)
            if(cur_frm.doc.table_28.length != 112) {
                await paso_7(3000)
                if(cur_frm.doc.table_28.length != 112) {
                    await paso_7(5000)
                    if(cur_frm.doc.table_28.length != 112) {
                        await paso_7(10000)
                    }
                }
            }
	    }
    } 
	else if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I"){
		if(cur_frm.doc.table_28.length != 432) {
            await paso_7(2000)
            if(cur_frm.doc.table_28.length != 432) {
                await paso_7(3000)
                if(cur_frm.doc.table_28.length != 432) {
                    await paso_7(5000)
                    if(cur_frm.doc.table_28.length != 432) {
                        await paso_7(10000)
						if(cur_frm.doc.table_28.length != 432) {
							await paso_7(15000)
							if(cur_frm.doc.table_28.length != 432) {
								await paso_7(20000)
								if(cur_frm.doc.table_28.length != 432) {
									await paso_7(30000)
								}
							}
						}
                    }
                }
            }
	    }
	}
    /*
    else if(
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I" || 
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.PPR-I" || 
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.CAP-I"){
            if(cur_frm.doc.table_23.length != 1) {
                await paso_3(2000)
                if(cur_frm.doc.table_23.length != 1) {
                    await paso_3(3000)
                    if(cur_frm.doc.table_23.length != 1) {
                        await paso_3(5000)
                        if(cur_frm.doc.table_23.length != 1) {
                            await paso_3(10000)
                        }
                    }
                }
            }
    }*/
}

async function comprobarTabla4() {
	if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DVI-I"){
		if(cur_frm.doc.table_166.length != 112) {
            await paso_17(2000)
            if(cur_frm.doc.table_166.length != 112) {
                await paso_17(3000)
                if(cur_frm.doc.table_166.length != 112) {
                    await paso_17(5000)
                    if(cur_frm.doc.table_166.length != 112) {
                        await paso_17(10000)
						if(cur_frm.doc.table_166.length != 112) {
							await paso_17(15000)
							if(cur_frm.doc.table_166.length != 112) {
								await paso_17(30000)
							}
						}
                    }
                }
            }
	    }
    } 
    /*
    else if(
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I" || 
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.PPR-I" || 
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.CAP-I"){
            if(cur_frm.doc.table_23.length != 1) {
                await paso_3(2000)
                if(cur_frm.doc.table_23.length != 1) {
                    await paso_3(3000)
                    if(cur_frm.doc.table_23.length != 1) {
                        await paso_3(5000)
                        if(cur_frm.doc.table_23.length != 1) {
                            await paso_3(10000)
                        }
                    }
                }
            }
    }*/
}

// CN: PASO 1
async function paso_1(tiempo) {
    await new Promise(resolve => {
        resolve(
            frappe.msgprint({
                title: __('Notificacion'),
                indicator: 'green',
                message: __('PASO 1 INICIADO')
            }),
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
                                cur_frm.set_value("estado", "FINALIZADO")
                                frappe.msgprint({
                                    title: __('Notificacion'),
                                    indicator: 'green',
                                    message: __('PASO 1 TERMINADO')
                                });
                            }
                        }
                    }) 
                } 
            })
        )
    })
    await guardar(tiempo)
}

async function comprobarPaso1() {
	if(cur_frm.doc.estado != "FINALIZADO"){
        await paso_1(2000)
        console.log("Comprobacion PASO 1: 2000")
        if(cur_frm.doc.estado != "FINALIZADO"){
            await paso_1(3000)
            console.log("Comprobacion PASO 1: 3000")
            if(cur_frm.doc.estado != "FINALIZADO"){
                await paso_1(5000)
                console.log("Comprobacion PASO 1: 5000")
                if(cur_frm.doc.estado != "FINALIZADO"){
                    await paso_1(10000)
                    console.log("Comprobacion PASO 1: 10000")
                    if(cur_frm.doc.estado != "FINALIZADO"){
                        await paso_1(20000)
                        console.log("Comprobacion PASO 1: 20000")
                        if(cur_frm.doc.estado != "FINALIZADO"){
                            await paso_1(30000)
                            console.log("Comprobacion PASO 1: 30000")
                            if(cur_frm.doc.estado != "FINALIZADO"){
                                await paso_1(60000)
                                console.log("Comprobacion PASO 1: 60000")
                            }
                        }
                    }
                }
            }
        }
    }
}
            
// CN: PASO 2
async function paso_2(tiempo) {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADO"){
            resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 2 INICIADO')
                }),
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
                        cur_frm.set_value("periodo", r.message.name),
                        cur_frm.set_value("cuenta", cur_frm.doc.owner),
                        cur_frm.set_value("cuenta_analizo", frappe.session.user),
                        cur_frm.set_value("inicio", cur_frm.doc.creation),
                        cur_frm.set_value("fin", frappe.datetime.now_datetime())
                        frappe.msgprint({
                            title: __('Notificacion'),
                            indicator: 'green',
                            message: __('PASO 2 TERMINADO')
                        });
                    } 
                })
            )
        }
    })
    await guardar(tiempo)
}

async function comprobarPaso2() {
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

// CN: PASO 3
async function paso_3(tiempo) {
    await new Promise(resolve => {
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 3 INICIADO')
                }),
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
						refresh_field("table_23");
						cur_frm.set_value("duracion", total),
						cur_frm.set_value("evaluaciones", r.message.length),
						frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 3 TERMINADO')
						});
					} 
				})
			)
    })
    await guardar(tiempo)
}

async function comprobarTablaPaso3() {
	if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DVI-I"){
		if(cur_frm.doc.table_23.length != 2) {
            await paso_3(2000)
            console.log("Comprobacion PASO 3: 2000")
            if(cur_frm.doc.table_23.length != 2) {
                await paso_3(3000)
                console.log("Comprobacion PASO 3: 3000")
                if(cur_frm.doc.table_23.length != 2) {
                    await paso_3(5000)
                    console.log("Comprobacion PASO 3: 5000")
                    if(cur_frm.doc.table_23.length != 2) {
                        await paso_3(10000)
                        console.log("Comprobacion PASO 3: 10000")
                        if(cur_frm.doc.table_23.length != 2) {
                            await paso_3(20000)
                            console.log("Comprobacion PASO 3: 20000")
                            if(cur_frm.doc.table_23.length != 2) {
                                await paso_3(30000)
                                console.log("Comprobacion PASO 3: 30000")
                                if(cur_frm.doc.table_23.length != 2) {
                                    await paso_3(60000)
                                    console.log("Comprobacion PASO 3: 60000")
                                }
                            }
                        }
                    }
                }
            }
	    }
    } else if(
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I" || 
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.PPR-I" || 
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.CAP-I"){
            if(cur_frm.doc.table_23.length != 1) {
                await paso_3(2000)
                console.log("Comprobacion PASO 3: 2000")
                if(cur_frm.doc.table_23.length != 1) {
                    await paso_3(3000)
                    console.log("Comprobacion PASO 3: 3000")
                    if(cur_frm.doc.table_23.length != 1) {
                        await paso_3(5000)
                        console.log("Comprobacion PASO 3: 5000")
                        if(cur_frm.doc.table_23.length != 1) {
                            await paso_3(10000)
                            console.log("Comprobacion PASO 3: 10000")
                            if(cur_frm.doc.table_23.length != 1) {
                                await paso_3(20000)
                                console.log("Comprobacion PASO 3: 20000")
                                if(cur_frm.doc.table_23.length != 1) {
                                    await paso_3(30000)
                                    console.log("Comprobacion PASO 3: 30000")
                                    if(cur_frm.doc.table_23.length != 1) {
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
}

// CN: PASO 4
async function paso_4(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 4 INICIADO')
                }),
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
        							}); 
								refresh_field("table_25");
								} 
							})
						})
						frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 4 TERMINADO')
						});
					}
				})
			)
		}
    })
    await guardar(tiempo)
}

async function comprobarTablaPaso4() {
	if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DVI-I"){
		if(cur_frm.doc.table_25.length != 112) {
            await paso_4(2000)
            if(cur_frm.doc.table_25.length != 112) {
                await paso_4(3000)
                if(cur_frm.doc.table_25.length != 112) {
                    await paso_4(5000)
                    if(cur_frm.doc.table_25.length != 112) {
                        await paso_4(10000)
                    }
                }
            }
	    }
    } 
	else if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I"){
		if(cur_frm.doc.table_25.length != 432) {
            await paso_4(2000)
            if(cur_frm.doc.table_25.length != 432) {
                await paso_4(3000)
                if(cur_frm.doc.table_25.length != 432) {
                    await paso_4(5000)
                    if(cur_frm.doc.table_25.length != 432) {
                        await paso_4(10000)
                    }
                }
            }
	    }
	}
    /*
    else if(
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I" || 
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.PPR-I" || 
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.CAP-I"){
            if(cur_frm.doc.table_23.length != 1) {
                await paso_3(2000)
                if(cur_frm.doc.table_23.length != 1) {
                    await paso_3(3000)
                    if(cur_frm.doc.table_23.length != 1) {
                        await paso_3(5000)
                        if(cur_frm.doc.table_23.length != 1) {
                            await paso_3(10000)
                        }
                    }
                }
            }
    }*/
}

// CN: PASO 5
async function paso_5(tiempo) {
    await new Promise(resolve => {
		resolve(frappe.msgprint({
            title: __('Notificacion'),
            indicator: 'green',
            message: __('PASO 5 INICIADO')
            }),
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
                    listaPaso5 = r.message
                    console.log(listaPaso5)
                }
            })
        )
    })
    await guardar(tiempo)
}

async function paso_5b(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(listaPaso5.length > index2 || (listaPaso5.length >= index1 && listaPaso5.length <= index2)){
            resolve(
                listaPaso5.forEach(function(element){
                    if(element["idx"] >= index1 && element["idx"] < index2){
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
                })
            )
        }
    })
    await guardar(tiempo)
}

async function paso_5_comprobacion(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                    let listaObtenida = r.message
                    if(listaPaso5.length != listaObtenida.length){
                        listaPaso5.forEach(function(element, i) {
                            if(listaObtenida.some(x => x.nombre === element["nombre"])){
                                
                            } else {
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
                        })
                    }
                }
            })
        )
    })
    await guardar(tiempo)
}

// PASO 6 NUEVO
async function paso_6(tiempo) {
    await new Promise(resolve => {
		resolve(
            frappe.msgprint({
                title: __('Notificacion'),
                indicator: 'green',
                message: __('PASO 6 INICIADO')
            }),
			frappe.call({ 
				method:"frappe.client.get_list",
				args: { 
					doctype: "Rasgos Directos del Protocolo de Psicotecnico",
					parent: "Protocolos de Psicotecnicos", 
					filters: { 
						parent: cur_frm.doc.protocolo_de_psicotecnico
					},	
					order_by: "idx asc", 
					limit_page_length: 999,
					fields: ["rasgo", "idx", "nombre", "desarrollo", "tipo_de_variable", "descripcion"] 
				}, 
				callback: function(r) { 
					cantidadDeRasgosProtocolo = r.message.length
				}
			})
		)
	})
    await guardar(tiempo)
}

async function paso_6a(tiempo) {
    await new Promise(resolve => {
		resolve(
            frappe.msgprint({
                title: __('Notificacion'),
                indicator: 'green',
                message: __('PASO 6a INICIADO')
            }),
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
					cantidadDeRasgosPsicotecnico = r.message.length
                    rasgosPsicotecnico = r.message
				}
			})
		)
	})
    await guardar(tiempo)
}

async function paso_6b(tiempo) {
    await new Promise(resolve => {
		if(cantidadDeRasgosProtocolo === cantidadDeRasgosPsicotecnico){
			resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 6b INICIADO')
                }),
				frappe.call({ 
					method:"frappe.client.get_list",
					args: { 
						doctype: "Rasgos Directos del Protocolo de Psicotecnico",
						parent: "Protocolos de Psicotecnicos", 
						filters: { 
							parent: cur_frm.doc.protocolo_de_psicotecnico
						},	
						order_by: "idx asc", 
						limit_page_length: 999,
						fields: ["rasgo", "idx", "nombre", "desarrollo", "tipo_de_variable", "descripcion"] 
					}, 
					callback: function(r) { 
						rasgos = r.message
					}
				})
			)
        } else {
            guardar(3000)
        }
	})
    await guardar(tiempo)
}

// SUPERYO NUEVO
async function paso_6superyo(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(rasgosPsicotecnico.length > index2 || (rasgosPsicotecnico.length >= index1 && rasgosPsicotecnico.length <= index2)){
            if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DVI-I" || cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I"){
                resolve(
                    rasgosPsicotecnico.forEach(function(v, i) {
                        if(i >= index1 && i < index2){
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
                                }
                            })
                        }
                    })
                )
            }
        }
	})
    await guardar(tiempo)
}

// ELLO NUEVO
async function paso_6ello(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(rasgosPsicotecnico.length > index2 || (rasgosPsicotecnico.length >= index1 && rasgosPsicotecnico.length <= index2)){
            if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DVI-I" || cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I"){
                resolve(
                    frappe.msgprint({
                        title: __('Notificacion'),
                        indicator: 'green',
                        message: __('PASO ELLO IGNORADO')
                    })
                )
            } else {
                resolve(
                    rasgosPsicotecnico.forEach(function(v, i) {
                        if(i >= index1 && i < index2){
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
                                }
                            })
                        }
                    })
                )
            }
        }
	})
    await guardar(tiempo)
}

//SI MISMO NUEVO
async function paso_6simismo(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(rasgosPsicotecnico.length > index2 || (rasgosPsicotecnico.length >= index1 && rasgosPsicotecnico.length <= index2)){
            if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DVI-I" || cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I"){
                resolve (
                    frappe.msgprint({
                        title: __('Notificacion'),
                        indicator: 'green',
                        message: __('PASO SI-MISMO IGNORADO')
                    })
                )
            } else {
                resolve(
                    rasgosPsicotecnico.forEach(function(v, i) {
                        if(i >= index1 && i < index2){
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
                                }
                            })
                        }
                    })
                )
            }
        }
	})
    await guardar(tiempo)
}

// PASO 7
async function paso_7(tiempo) {
    await new Promise(resolve => {
		resolve(
			frappe.msgprint({
				title: __('Notificacion'),
				indicator: 'green',
				message: __('PASO 7 INICIADO')
			}),
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
					listaPaso7 = r.message
                    frappe.msgprint({
                        title: __('Notificacion'),
                        indicator: 'green',
                        message: __('PASO 7 TERMINADO')
                    });
				} 
			})
		)
    })
    await guardar(tiempo)
}

async function paso_7b(tiempo) {
    await new Promise(resolve => {
		resolve(
            frappe.msgprint({
                title: __('Notificacion'),
                indicator: 'green',
                message: __('PASO 7B INICIADO')
            }),
			listaPaso7.forEach(function(element){
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

async function comprobarTabla3() {
	if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DVI-I"){
		if(cur_frm.doc.table_28.length != 112) {
            await paso_7(2000)
            if(cur_frm.doc.table_28.length != 112) {
                await paso_7(3000)
                if(cur_frm.doc.table_28.length != 112) {
                    await paso_7(5000)
                    if(cur_frm.doc.table_28.length != 112) {
                        await paso_7(10000)
                    }
                }
            }
	    }
    } 
	else if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I"){
		if(cur_frm.doc.table_28.length != 432) {
            await paso_7(2000)
            if(cur_frm.doc.table_28.length != 432) {
                await paso_7(3000)
                if(cur_frm.doc.table_28.length != 432) {
                    await paso_7(5000)
                    if(cur_frm.doc.table_28.length != 432) {
                        await paso_7(10000)
						if(cur_frm.doc.table_28.length != 432) {
							await paso_7(15000)
							if(cur_frm.doc.table_28.length != 432) {
								await paso_7(20000)
								if(cur_frm.doc.table_28.length != 432) {
									await paso_7(30000)
								}
							}
						}
                    }
                }
            }
	    }
	}
    /*
    else if(
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I" || 
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.PPR-I" || 
        cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.CAP-I"){
            if(cur_frm.doc.table_23.length != 1) {
                await paso_3(2000)
                if(cur_frm.doc.table_23.length != 1) {
                    await paso_3(3000)
                    if(cur_frm.doc.table_23.length != 1) {
                        await paso_3(5000)
                        if(cur_frm.doc.table_23.length != 1) {
                            await paso_3(10000)
                        }
                    }
                }
            }
    }*/
}

// CN: PASO 8
async function paso_8(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
	        resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 8 INICIADO')
                }),
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
						frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 8 TERMINADO')
						});
					} 
				})
	        )
	    }
    })
    await guardar(tiempo)
}

// CN: PASO 9
async function paso_9(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 9 INICIADO')
                }),
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
								} 
							})
		        		})
                        frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 9 TERMINADO')
						}); 
					} 
				})
        	)
        }
    })
    await guardar(tiempo)
}