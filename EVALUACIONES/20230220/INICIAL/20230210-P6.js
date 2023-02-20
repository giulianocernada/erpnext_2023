// PASO 6 COMPROBACION
let paso_6rasgosDirectosPlanificados  = []
let paso_6rasgosDirectosRealizados = []
let paso_6respuestasEvaluacion = []
let paso_6rasgosFaltantes = []
let paso_6listaRasgosFaltantes = []
let paso_6comprobacionDocumentoActual
let paso_6comprobacionRealizada = false

async function paso_6comprobacion(){
    await paso_6comprobacion_a()
    await paso_6comprobacion_b()
    await paso_6comprobacion_c()
    await paso_6comprobacion_d()
    
    await paso_6comprobacion_e()
    /*
    await paso_6comprobacion_f(paso_6listaRasgosFaltantes, 5000)
    await paso_6comprobacion_i(paso_6comprobacionDocumentoActual, 5000)
    await paso_6comprobacion_j(0)
    */
}

/*
1. traigo rasgos directos del protocolo
2. traigo los rasgos directos contestados
3. comparo el largo de los arrays (falta) y veo cuales son los faltantes en casos de haberlos, pusheando a una lista
    */

async function paso_6comprobacion_a() {
    await new Promise(resolve => {
        paso_6rasgosDirectosPlanificados  = []
        paso_6rasgosDirectosRealizados = []
        paso_6rasgosFaltantes = []
        paso_6listaRasgosFaltantes = []
        paso_6comprobacionDocumentoActual
        paso_6comprobacionRealizada = false
        // traigo rasgos directos del protocolo
        resolve(
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
                        paso_6rasgosDirectosPlanificados.push(element)
                    })
                    console.log(paso_6rasgosDirectosPlanificados)
                }
            })
        )
    })
}

async function paso_6comprobacion_b() {
    await new Promise(resolve => {
        resolve(
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
                        paso_6rasgosDirectosRealizados.push(element)
                    })
                    console.log(paso_6rasgosDirectosRealizados)
                }
            })
        )
    })
}

async function paso_6comprobacion_c() {
    await new Promise(resolve => {
        resolve(
            paso_6comprobacionRealizada = true,
            paso_6rasgosDirectosRealizados.forEach(function(element){
                if(paso_6rasgosDirectosPlanificados.some(x => x.nombre.includes(element["nombre"]))){
                    console.log(element["nombre"])
                } else {
                    paso_6rasgosFaltantes.push(element["nombre"])
                }
            })
        )
    })
}

async function paso_6comprobacion_d() {
    await new Promise(resolve => {
        if(paso_6comprobacionRealizada === true){
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        owner: cur_frm.doc.owner,
                        protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                        tipo_de_rasgo: "RESPUESTA - EVALUACION",
                    },
                    order_by: "name asc",
                    limit_page_length: 999, 
                    fields: ["name", "tipo_de_variable"] 
                }, 
                callback: function(r) {
                    resolve(
                        paso_6respuestasEvaluacion = r.message
                    )
                }
            })
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

async function paso_6comprobacion_e() {
    await new Promise(resolve => {
        resolve(
        paso_6respuestasEvaluacion.forEach(function(element){
            if(paso_6rasgosFaltantes.some(x => x.nombre.includes(element["nombre"]))){

            } else {
                if(paso_6listaRasgosFaltantes.some(y => y.nombre.includes(element["nombre"]) && y.tipo_de_variable.includes(element["tipo_de_variable"]))){

                } else {
                    paso_6listaRasgosFaltantes.push(element)
                }
            }
        }),
        console.log(paso_6listaRasgosFaltantes)
        )
    })
}