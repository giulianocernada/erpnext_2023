// FUNCION PASO 11
async function paso_11(){
    await paso_11a()
    await paso_11b()
}

// VARIABLES PASO 11
let paso_11directoCoeficientes

// FUNCIONES PASO 11
async function paso_11a(tiempo) {
    await new Promise(resolve => {
        resolve(
            console.log("PASO 11A"),
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
                    paso_11directoCoeficientes = r.message
                }
            })
        )
    })
    await guardar(tiempo)
}

async function paso_11b(tiempo, index1, index2) {
    await new Promise(resolve => {
        resolve(
            console.log("PASO 11B"),
            paso_11directoCoeficientes.forEach(function(element, i){
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
    await guardar(tiempo)
}