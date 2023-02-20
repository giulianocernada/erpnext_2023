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