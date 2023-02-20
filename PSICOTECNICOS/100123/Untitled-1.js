function tablaFiltrada() {
    let originales = []
    let creados = []
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
            r.message.forEach(function(v) {
                originales.push(v)
            })
        }
    })
    frappe.call({ 
        method:"frappe.client.get_list",
        args: { 
            doctype: "Rasgos de Personas",
            filters: { 
                psicotecnico: cur_frm.doc.name,
                tipo_de_rasgo: "DIRECTO - PSICOTECNICO"
            },	
            limit_page_length: 999,
            fields: ["nombre"] 
        }, 
        callback: function(r) { 
            r.message.forEach(function(v) {
                creados.push(v["nombre"])
            })
        }
    })
    console.log(originales)
    console.log(creados)

      const filtered = Object.keys(originales)
        .filter(nombre => creados.includes(nombre))
        .reduce((obj, nombre) => {
          obj[nombre] = originales[nombre];
          return obj;
        }, {});
      
      console.log(filtered);
}


frappe.call({ 
    method:"frappe.client.get_list",
    freeze: true,
    freeze_message: "PASO 5",  
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
        if(r.message.length <= 100){
            r.message.forEach(function(v) {
                console.log("funcion normal")
            }) 
        }
        else {
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        psicotecnico: cur_frm.doc.name, 
                        tipo_de_rasgo: "DIRECTO - PSICOTECNICO"
                    },
                    limit_page_length: 999, 
                }, 
                callback: function(z) { 
                    if(z.message.length == 0){
                        r.message.forEach(function(v) {
                            if(v["idx"] <= 200){
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
                                            "n_pregunta": v["idx"],
                                            "estado": "REALIZADO",
                                            "inicio": cur_frm.doc.inicio,
                                            "fin": cur_frm.doc.fin,
                                            "tipo_de_rasgo": "DIRECTO - PSICOTECNICO",
                                            "desarrollo": v["desarrollo"],
                                            "tipo_de_variable": v["tipo_de_variable"],
                                            "nombre": v["nombre"],
                                            "descripcion": v["descripcion"]
                                        }
                                    } 
                                })
                            }
                        })
                    } else if(z.message.length == 200){
                        r.message.forEach(function(v) {
                            if(v["idx"] > 200 && v["idx"] <= 400){
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
                                            "n_pregunta": v["idx"],
                                            "estado": "REALIZADO",
                                            "inicio": cur_frm.doc.inicio,
                                            "fin": cur_frm.doc.fin,
                                            "tipo_de_rasgo": "DIRECTO - PSICOTECNICO",
                                            "desarrollo": v["desarrollo"],
                                            "tipo_de_variable": v["tipo_de_variable"],
                                            "nombre": v["nombre"],
                                            "descripcion": v["descripcion"]
                                        }
                                    } 
                                })
                            }
                        })
                    } else if(z.message.length == 400){
                        r.message.forEach(function(v) {
                            if(v["idx"] > 400){
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
                                            "n_pregunta": v["idx"],
                                            "estado": "REALIZADO",
                                            "inicio": cur_frm.doc.inicio,
                                            "fin": cur_frm.doc.fin,
                                            "tipo_de_rasgo": "DIRECTO - PSICOTECNICO",
                                            "desarrollo": v["desarrollo"],
                                            "tipo_de_variable": v["tipo_de_variable"],
                                            "nombre": v["nombre"],
                                            "descripcion": v["descripcion"]
                                        }
                                    } 
                                })
                            }
                        })
                    }
                }
            })
        }
    }
})

frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Rasgos de Personas",
        filters: { 
            psicotecnico: cur_frm.doc.name, 
            tipo_de_rasgo: "DIRECTO - PSICOTECNICO"
        },
        limit_page_length: 999, 
    }, 
    callback: function(z) { 
        console.log(z.message.length)
    }
})

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
            "n_pregunta": v["idx"],
            "estado": "REALIZADO",
            "inicio": cur_frm.doc.inicio,
            "fin": cur_frm.doc.fin,
            "tipo_de_rasgo": "DIRECTO - PSICOTECNICO",
            "desarrollo": v["desarrollo"],
            "tipo_de_variable": v["tipo_de_variable"],
            "nombre": v["nombre"],
            "descripcion": v["descripcion"]
        }
    } 
})

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
        console.log(r.message)
    }
})

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
        r.message.forEach(function(g) {
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Coeficientes Regresores",
                    parent: "Rasgos de Personas", 
                    filters: { 
                        parent: g["rasgo_modelo"], 
                    },
                    order_by: "idx asc", 
                    limit_page_length: 100, 
                    fields: ["idx", "rasgo", "nombre", "tipo_de_variable", "descripcion", "grado_su", "coeficiente_su", "grado_el", "coeficiente_el", "grado_si", "coeficiente_si"] 
                }, 
                callback: function(s) { 
                    console.log(s.message);
                }
            })
        })
    }
})