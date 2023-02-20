paso_6listaAplanada

async function paso8ac() {
    await new Promise(resolve => {
        if(paso_6comprobacionRealizada === true){
            while (paso_6i--){   
                resolve(
                    paso_6listaAplanada.forEach(function(element){
                        if(paso_6tabla[paso_6i].nombre === element){
                            console.log(element)
                            cur_frm.get_field("table_27").grid.grid_rows[paso_6i].remove()
                        } else {

                        }
                    })
                )
            }
            cur_frm.refresh_field("table_27")
            cur_frm.set_value("rasgos_directos_realizados", cur_frm.doc.table_27.length)
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}


//





frappe.call({
    method: "frappe.client.delete",
    args: {
        doctype: "Rasgos de Personas",
        name: "RAS-CAP0043824"
    },
    callback: function(r) {
        console.log("RAS-CAP0043824")
    }
})


paso_6listaAplanada.forEach(function(element){
    frappe.call({ 
        method:"frappe.client.get_list", 
        args: { 
            doctype: "Rasgos de Personas",
            filters: { 
                evaluacion: cur_frm.doc.name,
                protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                tipo_de_rasgo: "DIRECTO - EVALUACION",
                nombre: ["like", element]
            },
            order_by: "name asc",
            limit_page_length: 999, 
            fields: ["name", "nombre"]
        }, 
        callback: function(r) {