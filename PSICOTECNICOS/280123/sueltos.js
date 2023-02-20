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
        fields: ["name", "superyo"] 
    }, 
    callback: function(r) { 
        console.log(r.message)
    }
})

//PASO 12
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
                        console.log(v["name"] + " - " + total_superyo)
                    })
                }
            })
        })
    }
})

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
        /*
        fields: ["name", "nombre", "constante_del_superyo_c", "constante_del_ello_c", "constante_del_si_mismo_c", "tiempo_superyo_c", "tiempo_ello_c", "tiempo_si_mismo_c",
         "limitante_minimo_superyo", "minimo_superyo", "limitante_maximo_superyo", "maximo_superyo", "limitante_minimo_ello", "minimo_ello", "limitante_maximo_ello", "maximo_ello","limitante_minimo_si_mismo",
         "minimo_si_mismo", "maximo_si_mismo", "limitante_maximo_si_mismo", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "limitante_minimo_desajuste_su_el",
         "limitante_maximo_desajuste_su_el","minimo_desajuste_si_su","maximo_desajuste_si_su","minimo_desajuste_si_el","maximo_desajuste_si_el","minimo_desajuste_su_el", "maximo_desajuste_su_el"]
         */
         fields: ["name", "nombre", "tiempo_superyo_c"]
    }, 
    callback: function(r) { 
        console.log(r.message)
    }
})



let paso_5lista = []
let paso_5largoLista
let paso_5i1 = 0
let paso_5i2 = 100
let paso_5acumulador = 0

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
        console.log(r.message)
    }
})


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
                    console.log(v["nombre"]);
                    console.log(t.message)
                }
            })})}})



            // VARIABLES PASO 10
let paso10_indirectoPsicotecnico

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
                    paso10_indirectoPsicotecnico = r.message,
                    console.log(paso10_indirectoPsicotecnico)
            }
        })

    for(let i = 0; i < paso10_indirectoPsicotecnico.length; i++) {
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
                    
                        console.log(s.message)
                }
            })
        }


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
                                //console.log(v["name"] + " - " + row.superyo + " - Tiempo superyoc: " + v["tiempo_superyo_c"])
                                console.log(v["name"] + " - " + total_superyo)
                            })
                        }
                    })
                })
            }
        })

        
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
                                console.log(v["name"] + " - " + row.superyo + " - Tiempo superyoc: " + v["tiempo_superyo_c"] + " - Constante superyoc: " + v["constante_del_superyo_c"])
                            })
                        }
                    })
                })
            }
        })



    //PASO 11
    frappe.call({ 
        method:"frappe.client.get_list", 
        args: { 
            doctype: "Rasgos de Personas", 
            filters: { 
                "psicotecnico": cur_frm.doc.name,
                "tipo_de_rasgo": "DIRECTO - COEFICIENTE",
            },
            order_by: "name",
            limit_page_length: 999, 
            fields: ["name", "nombre", "coeficiente_su"]
        }, 
        callback: function(r) {
                paso_11lista = r.message
                console.log(paso_11lista)
        }
    })

    let paso_11lista = []

    paso_11lista.forEach(function(element, i){
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
                    order_by: "name",
                    fieldname: ["superyo", "ello", "si_mismo"] 
                }, 
                callback: function(s) {
                    console.log(element["name"])
                    console.log(s.message)
                }
            })
    })


// CALCULO DEL RASGO INDIRECTO
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
                        console.log(v["nombre"] + ": " + total_superyo)
                    }
                })
            })
        }
    })

    