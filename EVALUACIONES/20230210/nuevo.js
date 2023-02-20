let paso_6respuestasEvaluacion = [
    {nombre: "VINCULACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VINCULACIONES", tipo_de_variable: "PRIORIZATIVA"},
    {nombre: "PRESTACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "PRESTACIONES", tipo_de_variable: "PRIORIZATIVA"}, 
    {nombre: "VIAJES", tipo_de_variable: "CUANTITATIVA"},
    {nombre: "VIAJES", tipo_de_variable: "PRIORIZATIVA"},
]

let rasgosProtocolo = [
    {nombre: "VINCULACIONES"}, 
    {nombre: "VINCULACIONES - A"}, 
    {nombre: "VINCULACIONES - B"}, 
    {nombre: "PRESTACIONES"}, 
    {nombre: "PRESTACIONES - A"}, 
    {nombre: "PRESTACIONES - B"},
    {nombre: "VIAJES"}, 
    {nombre: "VIAJES - A"}, 
    {nombre: "VIAJES - B"}
]

let rasgosContestados = [
    {nombre: "VINCULACIONES"}, 
    {nombre: "VINCULACIONES - A"}, 
    {nombre: "VINCULACIONES - B"}, 
    {nombre: "PRESTACIONES"}, 
    {nombre: "PRESTACIONES - A"}, 
    {nombre: "PRESTACIONES - B"}
]

let paso_6rasgosDirectosPlanificados  = []
let paso_6rasgosDirectosRealizados = []
let paso_6respuestasEvaluacion = []

let listaFaltantes = []
let listaPreguntasFaltantes = []
let listaFinalPreguntasFaltantes = []

/*
1. traigo rasgos directos del protocolo
2. traigo los rasgos directos contestados
3. veo los faltantes comparando ambos objetos
4. traigo las paso_6respuestasEvaluacion (nombre y tipo de variables) y las asigno a variable pregunta
5. creo una lista con los rasgos faltantes y sus variables nombre y tipo de variable
6. con esos valores como filtro obtengo los name de los rasgos
*/
// PASO 1
async function paso1() {
    await new Promise(resolve => {
        paso_6rasgosDirectosPlanificados  = []
        paso_6rasgosDirectosRealizados = []
        //paso_6rasgosFaltantes = []
        //paso_6listaRasgosFaltantes = []
        //paso_6comprobacionDocumentoActual
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

// PASO 2
async function paso2() {
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

// PASO 3
async function paso3() {
    await new Promise(resolve => {
        paso_6rasgosDirectosPlanificados.forEach(function(element){
            if(paso_6rasgosDirectosRealizados.some(x => x.nombre.includes(element["nombre"]))){
                resolve(
                        
                )
            } else {
                resolve(
                    listaFaltantes.push(element) 
                )
            }
        })
    })
}

// PASO 4
async function paso4b() {
    await new Promise(resolve => {
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
                fields: ["name", "nombre", "tipo_de_variable"] 
            }, 
            callback: function(r) {
                resolve(
                    paso_6respuestasEvaluacion = r.message
                )
            }
        })
    })
}

// PASO 5
async function paso5b() {
    await new Promise(resolve => {
        paso_6respuestasEvaluacion.forEach(function(element){
            if(listaFaltantes.some(x => x.nombre.includes(element["nombre"]))){
                if(listaPreguntasFaltantes.some(y => y.nombre == element["nombre"] && y.tipo_de_variable == element["tipo_de_variable"])){

                } else {
                    listaPreguntasFaltantes.push(element)
                }
            } else {
                resolve(
                    
                )
            }
        })
    })
}

// PASO 6
async function paso6b() {
    await new Promise(resolve => {
        //if(paso_6comprobacionRealizada === true){
            listaPreguntasFaltantes.forEach(function(element){
                frappe.call({ 
                    method:"frappe.client.get_list", 
                    args: { 
                        doctype: "Rasgos de Personas",
                        filters: { 
                            owner: cur_frm.doc.owner,
                            protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                            tipo_de_rasgo: "RESPUESTA - EVALUACION",
                            tipo_de_variable: element["tipo_de_variable"],
                            nombre: element["nombre"]
                        },
                        order_by: "name asc",
                        limit_page_length: 999, 
                        fields: ["name"] 
                    }, 
                    callback: function(r) {
                        //resolve(
                            console.log(r.message[0].name)
                            listaFinalPreguntasFaltantes.push(r.message[0].name)
                        //)
                    }
                })
            })  
            /*       
        } else {
            resolve(
                console.log("sigue")
            )
        }
        */
    })
}