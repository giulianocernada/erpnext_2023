// FUNCION PASO 6
async function paso_6(){
    await paso_6a(1000)
    await paso_6b(1000)
    //await paso_6c(1000)
    await paso_6d(5000, 0, 200)
    await paso_6d(5000, 200, 400)
    await paso_6d(5000, 400, 500)
    await paso_6e(5000, 0, 200)
    await paso_6e(5000, 200, 400)
    await paso_6e(5000, 400, 500)
    await paso_6f(5000, 0, 200)
    await paso_6f(5000, 200, 400)
    await paso_6f(5000, 400, 500)
}

// VARIABLES PASO 6
let paso_6cantidadDeRasgosProtocolo
let paso_6cantidadDeRasgosPsicotecnico
let paso_6rasgosPsicotecnico

// FUNCIONES PASO 6
async function paso_6a(tiempo) {
    await new Promise(resolve => {
		resolve(
            console.log("PASO 6A"),
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
					paso_6cantidadDeRasgosProtocolo = r.message.length
				}
			})
		)
	})
    //await guardar(tiempo)
}

async function paso_6b(tiempo) {
    await new Promise(resolve => {
		resolve(
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
					paso_6cantidadDeRasgosPsicotecnico = r.message.length
                    paso_6rasgosPsicotecnico = r.message
				}
			})
		)
	})
    //await guardar(tiempo)
}
/*
async function paso_6c(tiempo) {
    await new Promise(resolve => {
		if(paso_6cantidadDeRasgosProtocolo === paso_6cantidadDeRasgosPsicotecnico){
			resolve(
                console.log("PASO 6C"),
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
    //await guardar(tiempo)
}
*/

// SUPERYO NUEVO
async function paso_6d(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(paso_6rasgosPsicotecnico.length > index2 || (paso_6rasgosPsicotecnico.length >= index1 && paso_6rasgosPsicotecnico.length <= index2)){
            if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DVI-I" || cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DPR-I"){
                resolve(
                    paso_6rasgosPsicotecnico.forEach(function(v, i) {
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
async function paso_6e(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(paso_6rasgosPsicotecnico.length > index2 || (paso_6rasgosPsicotecnico.length >= index1 && paso_6rasgosPsicotecnico.length <= index2)){
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
                    paso_6rasgosPsicotecnico.forEach(function(v, i) {
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
async function paso_6f(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(paso_6rasgosPsicotecnico.length > index2 || (paso_6rasgosPsicotecnico.length >= index1 && paso_6rasgosPsicotecnico.length <= index2)){
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
                    paso_6rasgosPsicotecnico.forEach(function(v, i) {
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