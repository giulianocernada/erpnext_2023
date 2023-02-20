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


let nombress = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
let nombress2 = ["1", "2", "3", "5", "6", "8", "9", "10"]

nombress.forEach(function(element, i){
    if(nombress2.includes(element)){
        console.log("lo incluye")
    } else {
        console.log("no incluye a: " + element)
    }
})