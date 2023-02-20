let listaPaso5 = []
let cantidadDeRasgosProtocolo
let cantidadDeRasgosPsicotecnico
let rasgosPsicotecnico = []
let rasgos
let valorPaso5
let listaPaso6 = []
let listaPaso7 = []
let paso10_indirectos = []
let paso10_coeficientesIndirectos = []
let paso11_dirCoeficientes = []
let hola = []



async function guardar(tiempo) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(
              cur_frm.save()
            );
        }, tiempo)
    })
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
        console.log(rasgosPsicotecnico)
    }
})

rasgosPsicotecnico.forEach(function(v, i) {
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
                $.each(t.message, function(i,row) {
                    total_superyo += row.superyo;
                    console.log(v["name"] + " - superyo: " + total_superyo)
                })
                
                /*									
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
                */
            }
        })
})