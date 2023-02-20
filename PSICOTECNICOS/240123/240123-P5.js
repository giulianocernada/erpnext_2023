// FUNCION PASO 5
async function paso_5(){
    await paso_5a(0)
    await paso_5b(0, 0, 100)
    await paso_5b(0, 100, 200)
    await paso_5b(0, 200, 300)
    await paso_5b(0, 300, 400)
    await paso_5b(0, 400, 500)
    await paso_5Comprobacion(1000)
}

// VARIABLES PASO 5
let paso5_rasgosDirectos = []

// FUNCIONES PASO 5
async function paso_5a(tiempo) {
    await new Promise(resolve => {
		resolve(
            console.log("PASO 5A"),
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
                    paso5_rasgosDirectos = r.message
                }
            })
        )
    })
    await guardar(tiempo)
}

async function paso_5b(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(paso5_rasgosDirectos.length > index2 || (paso5_rasgosDirectos.length >= index1 && paso5_rasgosDirectos.length <= index2)){
            resolve(
                paso5_rasgosDirectos.forEach(function(element){
                    if(element["idx"] >= index1 && element["idx"] < index2){
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
                })
            )
        }
    })
    await guardar(tiempo)
}

async function paso_5Comprobacion(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                    let listaObtenida = r.message
                    if(paso5_rasgosDirectos.length != listaObtenida.length){
                        paso5_rasgosDirectos.forEach(function(element, i) {
                            if(listaObtenida.some(x => x.nombre === element["nombre"])){
                                
                            } else {
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
                        })
                    }
                }
            })
        )
    })
    await guardar(tiempo)
}