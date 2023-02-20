cur_frm.clear_table("table_23")
cur_frm.clear_table("table_25")
cur_frm.clear_table("table_27")
cur_frm.clear_table("table_30")
cur_frm.refresh_field("table_23")
cur_frm.refresh_field("table_25")
cur_frm.refresh_field("table_27")
cur_frm.refresh_field("table_30")
cur_frm.save()

let nombres = []
let nombres2 = []
let faltantes = []

frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Rasgos Directos en Evaluaciones",
        parent: "Evaluaciones",
        filters: { 
            parent: cur_frm.doc.name, 
        },
        order_by: "name asc",
        limit_page_length: 999, 
        fields: ["nombre"] 
    }, 
    callback: function(r) {
        r.message.forEach(element => {
            nombres.push(element)
        })
        console.log(nombres)
    }
})

frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Rasgos Directos en Protocolos de Evaluaciones",
        parent: "Protocolos de Evaluaciones",
        filters: { 
            parent: cur_frm.doc.protocolo_de_evaluacion, 
        },
        order_by: "name asc",
        limit_page_length: 999, 
        fields: ["nombre"] 
    }, 
    callback: function(r) {
        r.message.forEach(element => {
            nombres2.push(element)
        })
        console.log(nombres2)
    }
})

let faltantes = []
let faltantesName = []
let nombres2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
let nombres = ["1", "2", "3", "5", "6", "8", "9", "10"]

nombres2.forEach(function(element,i){
    if(nombres.includes(element.nombre)){
        console.log(".")
    } else {
        console.log("else " + element)
        //faltantes.push(element)
    }
})

faltantes.forEach(function(element){
    frappe.call({
        method:"frappe.client.get_list",
        args: { 
            doctype: "Rasgos de Personas",
            filters: { 
                plan_de_periodo: cur_frm.doc.plan_de_periodo,
                protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                owner: cur_frm.doc.owner,
                tipo_de_rasgo: "RESPUESTA - EVALUACION",
                nombre: element
            },
            fields: ["name"] 
        },
        callback: function(r) {
            resolve(
                faltantesName.push(r.message.name)
            )
        }
    })
})



callback: function(r) {
    let listaObtenida = r.message
    if(listaPaso5.length != listaObtenida.length){
        let listaFaltantes = []
        listaPaso5.forEach(function(element, i) {
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
        console.log(listaFaltantes)
    }
}