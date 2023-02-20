// FUNCION PASO 11
async function paso_11(){
    await paso_11a()
    await paso_11b()
    //await paso_11c(paso_11acumulador, 5000)
    //MODIFICACION 29-01-23
    await paso_11c(paso_11acumulador, 5000)
}

// VARIABLES PASO 11
let paso_11lista = []
let paso_11largoLista
let paso_11acumulador = 0
let paso_11i1 = 0
let paso_11i2 = 100

// FUNCIONES PASO 11
async function paso_11a() {
    await new Promise(resolve => {
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
                    resolve(
                        console.log("a"),
                        console.log(r.message),
                        paso_11lista = r.message
                    )
                }
            })
    })
    //await guardar(tiempo)
}

async function paso_11b(){
    await new Promise(resolve => {
        console.log("PASO 11B")
        paso_11largoLista = paso_11lista.length
        while(paso_11largoLista > 100){
            if(paso_11largoLista > 100){
                resolve(
                    paso_11acumulador += 1,
                    paso_11largoLista -= 100
                )
            }
            console.log(paso_11largoLista + " - " + paso_11acumulador)
        }
        if(paso_11largoLista<100){
            resolve(
            paso_11acumulador += 1,
            console.log("b"),
            console.log(paso_11acumulador)
            )
        }
    })
}

async function paso_11c(veces, tiempo){
    for(let i=0; i < veces; i++){
        await new Promise(resolve => {
            console.log("PASO 11C")
            //resolve(
            paso_11lista.forEach(function(element, i){
                if(i >= paso_11i1 && i <= paso_11i2){
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
                                resolve(
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
                                )
                        }
                    })
                }
            }),
            paso_11i1 += 100,
            paso_11i2 += 100
            //)
        })
        await guardar(tiempo)
    }
}