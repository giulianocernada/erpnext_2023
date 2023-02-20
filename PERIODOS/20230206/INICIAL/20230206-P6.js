let paso_6indirectoPeriodo
let paso_6indirectoPsicotecnico

async function paso_6a() {
    await new Promise(resolve => {
        console.log("PASO 6A")
    	if(cur_frm.doc.estado == "FINALIZADO"){
            // LLAMADA: OBTENGO UN LISTADO DE LOS RASGOS INDIRECTOS CREADOS EN EL PASO ANTERIOR 
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        periodo: cur_frm.doc.name, 
                        tipo_de_rasgo: "INDIRECTO - PERIODO",
                    },
                    limit_page_length: 999,
                    order_by: "n_pregunta asc",
                    fields: ["name", "nombre", "desarrollo"] 
                }, 
                callback: function(r) { 
                    resolve(
                        paso_6indirectoPeriodo = r.message
                    )
                }
            })
        }
    })
}

async function paso_6ac() {
    await new Promise(resolve => {
        for(let i = 0; i < paso_6indirectoPeriodo.length; i++){
            var total_superyo = 0;
            var n_superyo = 0; 
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        periodo: cur_frm.doc.name, 
                        tipo_de_rasgo: "INDIRECTO - PSICOTECNICO",
                        superyo: [">", 0], 
                        nombre: paso_6indirectoPeriodo[i]["nombre"], 
                    },
                    limit_page_length: 999,
                    order_by: "n_pregunta asc", 
                    fields: ["superyo"] 
                }, 
                callback: function(t) {
                    $.each(t.message, function(row) {
                        console.log(row.superyo)
                        total_superyo += row.superyo
                        console.log(paso_6indirectoPeriodo[i]["nombre"])
                        console.log(total_superyo)
                    })
                    n_superyo = t.message.length
                    console.log(n_superyo)
                    if(paso_6indirectoPeriodo[i]["desarrollo"] == "VINCULAR" || paso_6indirectoPeriodo[i]["desarrollo"] == "INTELECTUAL" || paso_6indirectoPeriodo[i]["desarrollo"] == "SALUD"){
                        //resolve(
                            console.log("if 1"),
                            frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_6indirectoPeriodo[i]["name"],
                                    "fieldname": {
                                        "superyo":  total_superyo / n_superyo
                                    }
                                } 
                            })
                        //)
                    } else if(paso_6indirectoPeriodo[i]["desarrollo"] == "PROFESIONAL"){
                        //resolve(
                            console.log("if 2"),
                            frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_6indirectoPeriodo[i]["name"],
                                    "fieldname": {
                                        "superyo":  total_superyo
                                    }
                                } 
                            })
                        //)
                    }
                }
            })
        }
    })
}

async function paso_6a(tiempo) {
    await new Promise(resolve => {
        console.log("PASO 6A")
    	if(cur_frm.doc.estado == "FINALIZADO"){
            // LLAMADA: OBTENGO UN LISTADO DE LOS RASGOS INDIRECTOS CREADOS EN EL PASO ANTERIOR 
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        periodo: cur_frm.doc.name, 
                        tipo_de_rasgo: "INDIRECTO - PERIODO",
                    },
                    limit_page_length: 999,
                    order_by: "n_pregunta asc",
                    fields: ["name", "nombre", "desarrollo"] 
                }, 
                callback: function(r) { 
                    r.message.forEach(function(v) {
                        var total_superyo = 0;
                        var n_superyo = 0; 
                        // LLAMADA: OBTENGO LOS VALORES "superyo" PARA CADA UNO DE LOS RASGOS INDIRECTOS
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    periodo: cur_frm.doc.name, 
                                    tipo_de_rasgo: "INDIRECTO - PSICOTECNICO",
                                    superyo: [">", 0], 
                                    nombre: v["nombre"], 
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["superyo"] 
                            }, 
                            callback: function(t) {
                                // CALCULA LOS VALORES DE "superyo" DE LOS RASGOS INDIRECTOS DEL PERIODO
                                $.each(t.message, function(row) {
                                    total_superyo += row.superyo
                                })
                                n_superyo = t.message.length
                                if(v["desarrollo"] == "VINCULAR" || v["desarrollo"] == "INTELECTUAL" || v["desarrollo"] == "SALUD"){
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
                                } else if(v["desarrollo"] == "PROFESIONAL"){
                                    resolve(
                                        frappe.call({ 
                                            method:"frappe.client.set_value", 
                                            args: { 
                                                "doctype": "Rasgos de Personas", 
                                                "name": v["name"],
                                                "fieldname": {
                                                    "superyo":  total_superyo
                                                }
                                            } 
                                        })
                                    )
                                }
                            }
                        })
                    })
                }
            })
        }	
    })
    await guardar(tiempo)
}

async function paso_6b(tiempo) {
    await new Promise(resolve => {
        console.log("PASO 6B")
    	if(cur_frm.doc.estado == "FINALIZADO"){
            // LLAMADA: OBTENGO LOS VALORES "ello" PARA CADA UNO DE LOS RASGOS INDIRECTOS
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        periodo: cur_frm.doc.name, 
                        tipo_de_rasgo: "INDIRECTO - PERIODO",
                    },
                    limit_page_length: 999,
                    order_by: "n_pregunta asc",
                    fields: ["name", "nombre", "desarrollo"] 
                }, 
                callback: function(r) { 
                    r.message.forEach(function(v) {
                        var total_ello = 0;
                        var n_ello = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    periodo: cur_frm.doc.name, 
                                    tipo_de_rasgo: "INDIRECTO - PSICOTECNICO",
                                    ello: [">", 0], 
                                    nombre: v["nombre"], 
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["ello"] 
                            }, 
                            callback: function(t) {
                                // CALCULA LOS VALORES DE "ello" DE LOS RASGOS INDIRECTOS DEL PERIODO
                                $.each(t.message, function(row) {			
                                    total_ello += row.ello
                                })					
                                n_ello = t.message.length;
                                if(v["desarrollo"] == "VINCULAR" || v["desarrollo"] == "INTELECTUAL" || v["desarrollo"] == "SALUD"){
                                    resolve(
                                        frappe.call({ 
                                            method:"frappe.client.set_value", 
                                            args: { 
                                                "doctype": "Rasgos de Personas", 
                                                "name": v["name"],
                                                "fieldname": {
                                                    "ello": total_ello / n_ello
                                                }
                                            } 
                                        })
                                    )
                                } else if(v["desarrollo"] == "PROFESIONAL"){
                                    resolve(
                                        frappe.call({ 
                                            method:"frappe.client.set_value", 
                                            args: { 
                                                "doctype": "Rasgos de Personas", 
                                                "name": v["name"],
                                                "fieldname": {
                                                    "ello":  total_ello
                                                }
                                            } 
                                        })
                                    )
                                }
                            }
                        })
                    })
                }
            })
        }	
    })
    await guardar(tiempo)
}

async function paso_6c(tiempo) {
    await new Promise(resolve => {
        console.log("PASO 6C")
    	if(cur_frm.doc.estado == "FINALIZADO"){	
            // LLAMADA: OBTENGO LOS VALORES "si_mismo" PARA CADA UNO DE LOS RASGOS INDIRECTOS
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        periodo: cur_frm.doc.name, 
                        tipo_de_rasgo: "INDIRECTO - PERIODO",
                    },
                    limit_page_length: 999,
                    order_by: "n_pregunta asc",
                    fields: ["name", "nombre", "desarrollo"] 
                }, 
                callback: function(r) { 
                    r.message.forEach(function(v) {
                        var total_si_mismo = 0;
                        var n_si_mismo = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    periodo: cur_frm.doc.name, 
                                    tipo_de_rasgo: "INDIRECTO - PSICOTECNICO",
                                    superyo: [">", 0], 
                                    nombre: v["nombre"], 
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["si_mismo"] 
                            }, 
                            callback: function(t) {
                                // CALCULA LOS VALORES DE "si_mismo" DE LOS RASGOS INDIRECTOS DEL PERIODO
                                $.each(t.message, function(row) {
                                    total_si_mismo += row.si_mismo
                                });									
                                n_si_mismo = t.message.length
                                if(v["desarrollo"] == "VINCULAR" || v["desarrollo"] == "INTELECTUAL" || v["desarrollo"] == "SALUD"){
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
                                } else if(v["desarrollo"] == "PROFESIONAL"){
                                    resolve(
                                        frappe.call({ 
                                            method:"frappe.client.set_value", 
                                            args: { 
                                                "doctype": "Rasgos de Personas", 
                                                "name": v["name"],
                                                "fieldname": {
                                                    "si_mismo":  total_si_mismo
                                                }
                                            } 
                                        })
                                    )
                                }
                            }
                        })
                    })
                }
            })
        }	
    })
    await guardar(tiempo)
}