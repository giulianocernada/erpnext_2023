let paso11_dirCoeficientes = []

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
                    //fields: ["name", "nombre", "grado_su", "grado_el", "grado_si", "coeficiente_su", "coeficiente_el", "coeficiente_si"]
                    fields: ["name", "nombre", "coeficiente_su", "grado_su"]
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
                                "nombre": element["nombre"]
                            },
                            limit_page_length: 999,
                            fieldname: ["name", "superyo"] 
                            //fieldname: ["name", "superyo", "ello", "si_mismo"] 
                        }, 
                        callback: function(s) {
                            console.log(i)
                            listaBien.push(s.message)
                            /*
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
                            */
                        }
                    })
                }
            })
        )
    })
}

let listaBien = []
let paso11_dirCoeficientes = []

frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Rasgos de Personas", 
        filters: { 
            "psicotecnico": cur_frm.doc.name,
            "tipo_de_rasgo": "DIRECTO - COEFICIENTE",
        },
        limit_page_length: 999, 
        //fields: ["name", "nombre", "grado_su", "grado_el", "grado_si", "coeficiente_su", "coeficiente_el", "coeficiente_si"]
        fields: ["name", "nombre", "coeficiente_su", "grado_su"]
    }, 
    callback: function(r) {
        console.log(r.message)
        paso11_dirCoeficientes = r.message
    }
})

paso11_dirCoeficientes.forEach(function(element, i){
    frappe.call({ 
        method:"frappe.client.get_value", 
        args: { 
            doctype: "Rasgos de Personas", 
            filters: { 
                "psicotecnico": cur_frm.doc.psicotecnico,
                "tipo_de_rasgo": "DIRECTO - PSICOTECNICO",
                "nombre": element["nombre"]
            },
            limit_page_length: 999,
            fieldname: ["name", "nombre", "superyo"] 
        }, 
        callback: function(s) {
            listaBien.push(s.message)
        }
    })
})

paso11_dirCoeficientes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
listaBien.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
listaFinal = []

function calculo5(listaA, listaB){
    for(let i = 0; i < listaA.length; i++){
        let calculo = Math.pow(listaA[i].superyo, listaB[i].grado_su * listaB[i].coeficiente_su)
        if(calculo == 0){
            listaFinal.push(listaB[i].nombre)
        }
    }
}