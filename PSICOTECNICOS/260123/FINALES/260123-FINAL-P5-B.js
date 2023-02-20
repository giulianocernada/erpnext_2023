// FUNCION PASO 5
async function paso_5(){
    await paso_5a()
    await paso_5b()
    await paso_5c(paso_5acumulador, 5000)
}

// VARIABLES PASO 5
let paso_5lista = []
let paso_5largoLista
let paso_5i1 = 0
let paso_5i2 = 50
let paso_5acumulador = 0

// FUNCIONES PASO 5
async function paso_5a() {
    await new Promise(resolve => {
		resolve(
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
        )
    })
}

async function paso_5b(){
    await new Promise(resolve => {
        paso_5largoLista = paso_5lista.length
        while(paso_5largoLista > 50){
            if(paso_5largoLista > 50){
                resolve(
                    paso_5acumulador += 1,
                    paso_5largoLista -= 50
                )
            }
            console.log(paso_5largoLista + " - " + paso_5acumulador)
        }
        if(paso_5largoLista<50){
            resolve(
            paso_5acumulador += 1,
            console.log(paso_5acumulador)
            )
        }
    })
}

async function paso_5c(veces, tiempo){
    for(let i=0; i < veces; i++){
        await new Promise(resolve => {
        resolve(
            paso_5lista.forEach(function(element, i){
                if(element["idx"] >= paso_5i1 && element["idx"] < paso_5i2){
                    console.log(element["idx"])
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
                                "n_pregunta": element["idx"],
                                "estado": "REALIZADO",
                                "inicio": cur_frm.doc.inicio,
                                "fin": cur_frm.doc.fin,
                                "tipo_de_rasgo": "DIRECTO - PSICOTECNICO",
                                "desarrollo": element["desarrollo"],
                                "tipo_de_variable": element["tipo_de_variable"],
                                "nombre": element["nombre"],
                                "descripcion": element["descripcion"]
                            }
                        } 
                    })
                }
            }),
            paso_5i1 += 50,
            paso_5i2 += 50
        )
        })
        await guardar(tiempo)
    }
}