async function paso_prueba() {
    await new Promise(resolve => {
if(cur_frm.doc.estado == "FINALIZADA"){
    do {
        resolve(
            cur_frm.clear_table("table_27"),
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        evaluacion: cur_frm.doc.name,
                        tipo_de_rasgo: "DIRECTO - EVALUACION",
                    },
                    order_by: "n_pregunta asc", 
                    limit_page_length: 999, 
                    fields: ["name", "nombre", "desarrollo", "dimension", "tipo_de_variable", "descripcion", "superyo", "ello", "si_mismo"] 
                }, 
                callback: function(r) { 
                    r.message.forEach(function(v) {
                        var n = frappe.model.add_child(cur_frm.doc, "Rasgos Directos en Evaluaciones", "table_27");	
                        n.rasgo = v["name"];
                        n.nombre = v["nombre"];
                        n.desarrollo = v["desarrollo"];
                        n.tipo_de_variable = v["tipo_de_variable"];
                        n.descripcion = v["descripcion"];
                        n.dimension = v["dimension"];
                        n.superyo = v["superyo"];
                        n.ello = v["ello"];
                        n.si_mismo = v["si_mismo"];
                    }); 
                    refresh_field("table_27");
                    cur_frm.set_value("rasgos_directos_realizados", cur_frm.doc.table_27.length);
                    console.log("PASO 7 TERMINADO")
                } 
            })
        )
    } while (cur_frm.doc.table_27.length != cur_frm.doc.rasgos_directos_planificados)
}
})
}