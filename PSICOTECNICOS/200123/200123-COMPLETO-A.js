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
//let rasgos
let valorPaso5
let listaPaso6 = []
let listaPaso7 = []
let paso10_indirectos = []
let paso10_coeficientesIndirectos = []
let paso11_dirCoeficientes = []
let paso12_indirPsicotecnico = []

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
	//await paso_6b(1000)
    //await paso_6b(1000)
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
    await paso_8(2000)
    await paso_9(2000)
    await paso_10a(2000)
    await paso_10b(5000)
    await paso_10c(5000, 1, 20)
    await paso_10c(5000, 21, 40)
    await paso_10c(5000, 41, 60)
    await paso_11a(2000)
    await paso_11b(3000, 0, 80)
    await paso_11b(3000, 81, 160)
    await paso_11b(3000, 161, 240)
    await paso_12a(1000)
    await paso_12b(5000,0)
    await paso_12b(5000,1)
    await paso_12b(5000,2)
    await paso_12b(5000,3)
    /*
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

/*
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
*/

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

// CN: PASO 10
async function paso_10a(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                    paso10_indirectos = r.message,
                    console.log(paso10_indirectos)
                }
            })
        )
    })
    await guardar(tiempo)
}

async function paso_10b(tiempo) {
    await new Promise(resolve => {
        resolve(
            paso10_indirectos.forEach(function(g) {
                frappe.call({ 
                    method:"frappe.client.get_list", 
                    args: { 
                        doctype: "Coeficientes Regresores",
                        parent: "Rasgos de Personas", 
                        filters: { 
                            parent: g["rasgo_modelo"], 
                        },
                        order_by: "idx asc", 
                        limit_page_length: 500, 
                        fields: ["idx", "rasgo", "nombre", "tipo_de_variable", "descripcion", "grado_su", "coeficiente_su", "grado_el", "coeficiente_el", "grado_si", "coeficiente_si"] 
                    }, 
                    callback: function(s) { 
                        paso10_coeficientesIndirectos.push(s.message)
                    }
                })
            })
            //console.log(paso10_coeficientesIndirectos)
        )
    })
    await guardar(tiempo)
}

async function paso_10c(tiempo, index1, index2) {
    await new Promise(resolve => {
        resolve(
            paso10_coeficientesIndirectos.forEach(function(g,i){
                g.forEach(function(h){
                    if(h["idx"] >= index1 && h["idx"] <= index2){
                        frappe.call({ 			
                            method:"frappe.client.insert", 		
                            args: { 		
                                doc: {	
                                    "doctype": "Rasgos de Personas", 
                                    "rasgo_dependiente": paso10_indirectos[i]["name"],
                                    "n_pregunta": h["idx"],
                                    "psicotecnico": cur_frm.doc.name,
                                    "protocolo_de_psicotecnico": cur_frm.doc.protocolo_de_psicotecnico,
                                    "protocolo_de_periodo": cur_frm.doc.protocolo_de_periodo,
                                    "periodo": cur_frm.doc.periodo,
                                    "plan_de_periodo": cur_frm.doc.plan_de_periodo,
                                    "cuenta": cur_frm.doc.cuenta,
                                    "persona": cur_frm.doc.persona,
                                    "cuenta_analizo": frappe.session.user,
                                    "estado": "REALIZADO",
                                    "desarrollo": paso10_indirectos[i]["desarrollo"],
                                    "tipo_de_rasgo": "DIRECTO - COEFICIENTE",
                                    "inicio": frappe.datetime.now_datetime(),
                                    "fin": frappe.datetime.now_datetime(),
                                    "nombre": h["nombre"],
                                    "tipo_de_variable": h["tipo_de_variable"],
                                    "descripcion": h["descripcion"],
                                    "grado_su": h["grado_su"],
                                    "coeficiente_su": h["coeficiente_su"],
                                    "grado_el": h["grado_el"],
                                    "coeficiente_el": h["coeficiente_el"],
                                    "grado_si": h["grado_si"],
                                    "coeficiente_si": h["coeficiente_si"]
                                }
                            }
                        })
                    }
                })
        })
        )
    })
    await guardar(tiempo)
}

// CN: PASO 11
async function paso_11a(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                    console.log(r.message)
                    paso11_dirCoeficientes = r.message
                }
            })
        )
    })
}

async function paso_11b(tiempo, index1, index2) {
    await new Promise(resolve => {
        resolve(
            paso11_dirCoeficientes.forEach(function(element, i){
                if(i >= index1 && i <= index2){
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
            })
        )
    })
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

async function paso_12a(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                    fields: ["name", "nombre", "constante_del_superyo_c", "constante_del_ello_c", "constante_del_si_mismo_c", "tiempo_superyo_c", "tiempo_ello_c", "tiempo_si_mismo_c", "limitante_minimo_superyo", "minimo_superyo", "limitante_maximo_superyo", "maximo_superyo", "limitante_minimo_ello", "minimo_ello", "limitante_maximo_ello", "maximo_ello"] 
                }, 
                callback: function(r) { 
                    console.log(r.message)
                    paso12_indirPsicotecnico = r.message
                }
            })
        )
    })
    await guardar(tiempo)
}

async function paso_12b(tiempo,index1) {
    await new Promise(resolve => {
        resolve(
            paso12_indirPsicotecnico.forEach(function(v) {
                if(i === index1){
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
                }
            })
        )
    })	
    await guardar(tiempo)
}

async function paso_13(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 13 INICIADO')
                }),
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
						r.message.forEach(function(v) {
							var superyo_limitante = 0;
							if(v["limitante_minimo_superyo"]) {superyo_limitante = 1};
							if(v["limitante_maximo_superyo"]) {superyo_limitante = 1};
							var ello_limitante = 0;
							if(v["limitante_minimo_ello"]) {ello_limitante = 1};
							if(v["limitante_maximo_ello"]){ ello_limitante = 1};
							var si_mismo_limitante = 0;
							if(v["limitante_minimo_si_mismo"]){ si_mismo_limitante = 1};
							if(v["limitante_maximo_si_mismo"]){ si_mismo_limitante = 1};
							var si_su_limitante = 0;
							if(v["limitante_minimo_desajuste_si_su"]){ si_su_limitante = 1};
							if(v["limitante_maximo_desajuste_si_su"]){ si_su_limitante = 1};
							var si_el_limitante = 0;
							if(v["limitante_minimo_desajuste_si_el"]){ si_el_limitante = 1};
							if(v["limitante_maximo_desajuste_si_el"]){ si_el_limitante = 1};
							var su_el_limitante = 0;
							if(v["limitante_minimo_desajuste_su_el"]){ su_el_limitante = 1};
							if(v["limitante_maximo_desajuste_su_el"]){ su_el_limitante = 1};
							frappe.call({ 
								method:"frappe.client.set_value", 
								args: { 
									"doctype": "Rasgos de Personas", 
									"name": v["name"],
									"fieldname": {
											"parametros_limitantes_totales": superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante
									}
								} 
							})
		     			})
                        frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 13 TERMINADO')
						});
					}
     			})
        	)
        }	
    })
    await guardar(tiempo)
}

let paso14_indPsicotecnico = []

async function paso_14a(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                    paso14_indPsicotecnico = r.message
                    console.log(paso14_indPsicotecnico)
                }
            })
        )
    })
    await guardar(tiempo)
}

async function paso_14b(tiempo) {
    await new Promise(resolve => {
        resolve(
            paso14_indPsicotecnico.forEach(function(v){
                if(v["superyo"] > 0 && v["ello"] > 0 && v["si_mismo"] > 0){
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": v["name"],
                            "fieldname": {
                                "dimensiones": 3,
                                "desajustes": 3,
                                "parametros": 6
                            }
                        } 
                    });
                };
                if(v["superyo"] > 0 && v["ello"] == 0 && v["si_mismo"] > 0){
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": v["name"],
                            "fieldname": {
                                "dimensiones": 2,
                                "desajustes": 2,
                                "parametros": 4  
                            }
                        } 
                    });
                };
                if(v["superyo"] > 0 && v["ello"] > 0 && v["si_mismo"] == 0){
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": v["name"],
                            "fieldname": {
                                "dimensiones": 2,
                                "desajustes": 2,
                                "parametros": 4  
                            }
                        } 
                    });
                };
                if(v["superyo"] > 0 && v["ello"] == 0 && v["si_mismo"] == 0){
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": v["name"],
                            "fieldname": {
                                "dimensiones": 1,
                                "parametros": 1  
                            }
                        } 
                    });
                };
                if(v["superyo"] == 0 && v["ello"] > 0 && v["si_mismo"] == 0){
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": v["name"],
                            "fieldname": {
                                "dimensiones": 1,
                                "parametros": 1  
                            }
                        } 
                    });
                };
                if(v["superyo"] == 0 && v["ello"] == 0 && v["si_mismo"] > 0){
                    frappe.call({ 
                        method:"frappe.client.set_value", 
                        args: { 
                            "doctype": "Rasgos de Personas", 
                            "name": v["name"],
                            "fieldname": {
                                "dimensiones": 1,
                                "parametros": 1  
                            }
                        } 
                    });
                };
            })
        )
    })
    await guardar(tiempo)
}

let paso15_indPsicotecnico = []

async function paso_15a(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                    paso15_indPsicotecnico = r.message
                }
            })
        )
    })
    await guardar(tiempo)
}

async function paso_15b(tiempo) {
    await new Promise(resolve => {
        resolve(
            paso15_indPsicotecnico.forEach(function(v){
                var superyo_limitante = 0;
                if(v["resultado_superyo"] == "DESAPROBADO"){superyo_limitante = 1};
                var ello_limitante = 0;
                if(v["resultado_ello"] == "DESAPROBADO"){ello_limitante = 1};
                var si_mismo_limitante = 0;
                if(v["resultado_si_mismo"] == "DESAPROBADO"){ si_mismo_limitante = 1};
                var si_su_limitante = 0;
                if(v["resultado_desajuste_si_su"]){ si_su_limitante = 1};
                var si_el_limitante = 0;
                if(v["resultado_desajuste_si_el"]){ si_el_limitante = 1};
                var su_el_limitante = 0;
                if(v["resultado_desajuste_su_el"]){ su_el_limitante = 1};
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": v["name"],
                        "fieldname": {
                            "parametros_desaprobados": superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante

                        }
                    } 
                })
            })
        )
    })
    await guardar(tiempo)
}

let paso16_indPsicotecnico = []

async function paso_16a(tiempo) {
    await new Promise(resolve => {
        resolve(
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
					paso16_indPsicotecnico = r.message
				}
			})
		)
    })
    await guardar(tiempo)
}

async function paso_16b(tiempo) {
    await new Promise(resolve => {
        resolve(
			paso16_indPsicotecnico.forEach(function(v){
				var superyo_limitante = 0;
				if(v["resultado_superyo"] == "DESAPROBADO"){superyo_limitante = 1};
				var ello_limitante = 0;
				if(v["resultado_ello"] == "DESAPROBADO"){ello_limitante = 1};
				var si_mismo_limitante = 0;
				if(v["resultado_si_mismo"] == "DESAPROBADO"){ si_mismo_limitante = 1};
				var si_su_limitante = 0;
				if(v["resultado_desajuste_si_su"]){ si_su_limitante = 1};
				var si_el_limitante = 0;
				if(v["resultado_desajuste_si_el"]){ si_el_limitante = 1};
				var su_el_limitante = 0;
				if(v["resultado_desajuste_su_el"]){ su_el_limitante = 1};
				if(v["parametros_limitantes_totales"] > 0 && (superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante) > 0){
					frappe.call({ 
						method:"frappe.client.set_value", 
						args: { 
							"doctype": "Rasgos de Personas", 
							"name": v["name"],
							"fieldname": {
								"resultado": "DESAPROBADO"
							}
						} 
					});
				};
				if(v["parametros_limitantes_totales"] > 0 && (superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante) == 0){
					frappe.call({ 
						method:"frappe.client.set_value", 
						args: { 
							"doctype": "Rasgos de Personas", 
							"name": v["name"],
							"fieldname": {
								"resultado": "APROBADO"
							}
						} 
					});
				};
			})
		)
    })
    await guardar(tiempo)
}

let paso17_indPsicotecnico = []

async function paso_17a(tiempo) {
    await new Promise(resolve => {
    	resolve(
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
					paso17_indPsicotecnico = r.message
				}
			})
		)
	})
	await guardar(tiempo)
}

async function paso_17b(tiempo) {
    await new Promise(resolve => {
    	resolve(
			paso17_indPsicotecnico.forEach(function(v){
				var n = frappe.model.add_child(cur_frm.doc, "Rasgos Indirectos en Psicotecnicos", "table_166");	
				n.rasgo = v["name"];
				n.nombre = v["nombre"];
				n.tipo_de_variable = v["tipo_de_variable"];
				n.descripcion = v["descripcion"];
				n.superyo = v["superyo"];
				n.ello = v["ello"];
				n.si_mismo = v["si_mismo"];
				n.limitante_minimo_superyo = v["limitante_minimo_superyo"];
				n.limitante_maximo_superyo = v["limitante_maximo_superyo"];
				n.minimo_superyo = v["minimo_superyo"];
				n.maximo_superyo = v["maximo_superyo"];
				n.limitante_minimo_ello = v["limitante_minimo_ello"];
				n.limitante_maximo_ello = v["limitante_maximo_ello"];
				n.minimo_ello = v["minimo_ello"];
				n.maximo_ello = v["maximo_ello"];
				n.limitante_minimo_si_mismo = v["limitante_minimo_si_mismo"];
				n.limitante_maximo_si_mismo = v["limitante_maximo_si_mismo"];
				n.minimo_si_mismo = v["minimo_si_mismo"];
				n.maximo_si_mismo = v["maximo_si_mismo"];
				n.limitante_minimo_desajuste_su_el = v["limitante_minimo_desajuste_su_el"];
				n.limitante_maximo_desajuste_su_el = v["limitante_maximo_desajuste_su_el"];
				n.minimo_desajuste_su_el = v["minimo_desajuste_su_el"];
				n.maximo_desajuste_su_el = v["maximo_desajuste_su_el"];
				n.limitante_minimo_desajuste_si_el = v["limitante_minimo_desajuste_si_el"];
				n.limitante_maximo_desajuste_si_el = v["limitante_maximo_desajuste_si_el"];
				n.minimo_desajuste_si_el = v["minimo_desajuste_si_el"];
				n.maximo_desajuste_si_el = v["maximo_desajuste_si_el"];
				n.limitante_minimo_desajuste_si_su = v["limitante_minimo_desajuste_si_su"];
				n.limitante_maximo_desajuste_si_su = v["limitante_maximo_desajuste_si_su"];
				n.minimo_desajuste_si_su = v["minimo_desajuste_si_su"];
				n.maximo_desajuste_si_su = v["maximo_desajuste_si_su"];
				n.resultado_superyo = v["resultado_superyo"];
				n.resultado_ello = v["resultado_ello"];
				n.resultado_si_mismo = v["resultado_si_mismo"];
				n.valor_desajuste_si_su = v["valor_desajuste_si_su"];
				n.valor_desajuste_si_el = v["valor_desajuste_si_el"];
				n.valor_desajuste_su_el = v["valor_desajuste_su_el"];
				n.resultado_desajuste_si_su = v["resultado_desajuste_si_su"];
				n.resultado_desajuste_si_el = v["resultado_desajuste_si_el"];
				n.resultado_desajuste_su_el = v["resultado_desajuste_su_el"];
				n.dimensiones = v["dimensiones"];
				n.desajustes = v["desajustes"];
				n.parametros = v["parametros"];
				n.resultado = v["resultado"];
				n.parametros_limitantes_totales = v["parametros_limitantes_totales"];
				n.parametros_desaprobados = v["parametros_desaprobados"];
			}),
			refresh_field("table_166")
		)
	})
	await guardar(tiempo)
}

async function paso_18(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 18 INICIADO')
                }),
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
						var total_parametros = 0;
						var total_parametros_limitantes_totales = 0; 
						var total_parametros_desaprobados = 0; 
						$.each(r.message, function(i, row) {
							total_parametros += row.parametros;
							total_parametros_limitantes_totales += row.parametros_limitantes_totales;
							total_parametros_desaprobados += row.parametros_desaprobados;
						});
						cur_frm.set_value("parametros", total_parametros);
						cur_frm.set_value("parametros_limitantes_totales", total_parametros_limitantes_totales);
						cur_frm.set_value("parametros_desaprobados", total_parametros_desaprobados);
						if(total_parametros_desaprobados > 0) cur_frm.set_value("resultado", "DESAPROBADO");
						if(total_parametros_desaprobados > 0) cur_frm.set_value("explicacion_final_completa", cur_frm.doc.explicacion_final + "El mismo ha sido DESAPROBADO.");
						if(total_parametros_desaprobados == 0) cur_frm.set_value("resultado", "APROBADO");
						if(total_parametros_desaprobados == 0) cur_frm.set_value("explicacion_final_completa", cur_frm.doc.explicacion_final + "El mismo ha sido APROBADO.");
						frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 18 TERMINADO')
						});
					}
				})
        	)
        }	
    })
    await guardar(tiempo)
}

async function paso_19(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 19 INICIADO')
                }),
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
						cur_frm.set_value("rasgos_limitantes", r.message.length);
                        frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 19 TERMINADO')
						});
					} 
				})
        	)
        }	
    })
    await guardar(tiempo)
}

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
