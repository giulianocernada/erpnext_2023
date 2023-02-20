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