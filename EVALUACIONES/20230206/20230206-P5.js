async function paso_5() {
    await paso_5a() 
    await paso_5b(paso_5respuestaEvaluacion, 5000);
    await paso_5d(paso_5documentoActual, 5000);
}

let paso_5documentoActual = ""
let paso_5respuestaEvaluacion = []

async function paso_5a() {
    return new Promise(resolve => {
        frappe.call({
            method:"frappe.client.get_list",
            args: { 
                doctype: "Rasgos de Personas",
                filters: { 
                    plan_de_periodo: cur_frm.doc.plan_de_periodo,
                    protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                    owner: cur_frm.doc.owner,
                    tipo_de_rasgo: "RESPUESTA - EVALUACION"
                },
                limit_page_length: 999,
                order_by: "name asc", 
                fields: ["name"] 
            },
            callback: function(r) {
                resolve(
                    paso_5documentoActual = cur_frm.doc.name,
                    paso_5respuestaEvaluacion = r.message,
                    console.log(paso_5respuestaEvaluacion)
                )
            }
        })
    })
}

async function paso_5b(lista, tiempo) {
    for(let doc in lista){
        await new Promise(resolve => {
            resolve(
                frappe.set_route("Form", "Rasgos de Personas", lista[doc]["name"])
            )
        })
        await paso_5c()
        await guardar(tiempo)
    }
}

async function paso_5c() {
    await new Promise(resolve => {
        resolve(
            cur_frm.set_value("estado", "ANALIZADO")
        )
    })
}

async function paso_5d(origen, tiempo) {
    await new Promise(resolve => {
        resolve(
            frappe.set_route("Form", "Evaluaciones", origen)
        )
    })
    await guardar(tiempo)
}