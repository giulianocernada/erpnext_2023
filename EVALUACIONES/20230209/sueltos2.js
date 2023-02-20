// PASO 4 COMPROBACION
async function paso_4comprobacion(){
    await paso_4comprobacion_a()
    await paso_4b(paso_4respuestaEvaluacion, 5000);
    await paso_4d(paso_4documentoActual, 5000);
}

async function paso_4comprobacion_a() {
    await new Promise(resolve => {
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
                resolve(
                    paso_4documentoActual = cur_frm.doc.name,
                    paso_4respuestaEvaluacion = r.message,
                    console.log(paso_4respuestaEvaluacion)
                )
            }
        })
    })
}