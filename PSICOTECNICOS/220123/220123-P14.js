// FUNCION PASO 14
async function paso_14(){
    await paso_14a(1000)
    await paso_14b(1000)
}

// VARIABLES PASO 14
let paso_14indirectoPsicotecnico = []

// FUNCIONES PASO 14
async function paso_14a(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                    paso_14indirectoPsicotecnico = r.message
                    console.log(paso_14indirectoPsicotecnico)
                }
            })
        )
    })
    await guardar(tiempo)
}

async function paso_14b(tiempo) {
    await new Promise(resolve => {
        resolve(
            console.log("PASO 14B"),
            paso_14indirectoPsicotecnico.forEach(function(v){
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