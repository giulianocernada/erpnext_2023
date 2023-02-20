cur_frm.clear_table("table_23")
cur_frm.clear_table("table_25")
cur_frm.clear_table("table_27")
cur_frm.clear_table("table_30")
cur_frm.refresh_field("table_23")
cur_frm.refresh_field("table_25")
cur_frm.refresh_field("table_27")
cur_frm.refresh_field("table_30")
cur_frm.save()

frappe.call({
    method:"frappe.client.get_list",
    args: { 
        doctype: "Rasgos de Personas",
        filters: { 
            plan_de_periodo: cur_frm.doc.plan_de_periodo,
            protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
            owner: cur_frm.doc.owner,
            tipo_de_rasgo: "RESPUESTA - EVALUACION",
            evaluacion: ["!=", cur_frm.doc.name]
        },
        limit_page_length: 999,
        order_by: "name asc", 
        fields: ["name"] 
    },
    callback: function(r) {
        //resolve(
            paso_4respuestaEvaluacion = r.message,
            console.log(paso_4respuestaEvaluacion)
        //)
    }
})