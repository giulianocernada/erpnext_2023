async function paso_7(){
    await paso_7a()
    await paso_7b()
    await paso_7c()
    await paso_7d()
    await paso_7e()
    await paso_7f()
    await paso_7g()
    await paso_7h()
    await paso_7i(1000)
    await paso_7j()
    await paso_7k(5000)
    await paso_7l()
    await paso_7m()
}

let paso_7rasgosDirectosPlanificados = []
let paso_7rasgosDirectosCreados = []
let paso_7rasgosDirectosTraidos = []
let paso_7respuestasEvaluacion = []
let paso_7listaFaltantes = []
let paso_7comprobacionRealizada = false
let paso_7listaPreguntasFaltantes = []
let paso_7listaFinalPreguntasFaltantes = []
let paso_7filtro = []
let paso_7listaFiltrada = []
let paso_7tabla = cur_frm.doc.table_27
let paso_7i = paso_7tabla.length
let paso_7eliminables = []
let paso_7listaAplanada = []

// PASO A: BUSCO LA CANTIDAD Y NOMBRES DE RASGOS DIRECTOS SEGUN PROTOCOLO
async function paso_7a() {
    await new Promise(resolve => {
        paso_7rasgosDirectosPlanificados = []
        paso_7rasgosDirectosCreados = []
        paso_7rasgosDirectosTraidos = []
        paso_7respuestasEvaluacion = []
        paso_7listaFaltantes = []
        paso_7comprobacionRealizada = false
        paso_7listaPreguntasFaltantes = []
        paso_7listaFinalPreguntasFaltantes = []
        paso_7filtro = []
        paso_7listaFiltrada = []
        paso_7tabla = cur_frm.doc.table_27
        paso_7i = paso_7tabla.length
        paso_7eliminables = []
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
                        paso_7rasgosDirectosPlanificados.push(element)
                    })
                    console.log(paso_7rasgosDirectosPlanificados)
                }
            })
        )
    })
}

// PASO B: BUSCO LA CANTIDAD Y NOMBRES DE RASGOS CREADOS DEL TIPO "DIRECTO - EVALUACION"
async function paso_7b() {
    await new Promise(resolve => {
        resolve(
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        evaluacion: cur_frm.doc.name,
                        protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                        tipo_de_rasgo: "DIRECTO - EVALUACION"
                    },
                    order_by: "name asc",
                    limit_page_length: 999, 
                    fields: ["nombre"] 
                }, 
                callback: function(r) {
                    r.message.forEach(element => {
                        paso_7rasgosDirectosCreados.push(element)
                    })
                    console.log(paso_7rasgosDirectosCreados)
                }
            })
        )
    })
}

// PASO C: BUSCO LA CANTIDAD Y NOMBRES DE RASGOS DIRECTOS COMPLETADOS EN LA TABLA
async function paso_7c() {
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
                        paso_7rasgosDirectosTraidos.push(element)
                    })
                    console.log(paso_7rasgosDirectosTraidos)
                }
            })
        )
    })
}

// PASO D: ENTRE LAS LISTAS DE LOS PASOS 1 Y 2 BUSCO CUALES SON LOS FALTANTES
async function paso_7d() {
    await new Promise(resolve => {
        if(paso_7rasgosDirectosPlanificados.length != paso_7rasgosDirectosCreados.length){
            resolve(
                paso_7comprobacionRealizada = true,
                paso_7rasgosDirectosPlanificados.forEach(function(element){
                    if(paso_7rasgosDirectosCreados.some(x => x.nombre.includes(element["nombre"]))){
                        resolve(
                            
                        )
                    } else {
                        resolve(
                            paso_7listaFaltantes.push(element) 
                        )
                    }
                }),
                console.log(paso_7listaFaltantes)
            )
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO E: BUSCO LOS NOMBRES DE LAS RESPUESTAS
async function paso_7e() {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
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
                        paso_7respuestasEvaluacion = r.message,
                        console.log(paso_7respuestasEvaluacion)
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

// PASO F: FILTRO LAS RESPUESTAS QUE FALTAN
async function paso_7f() {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            paso_7respuestasEvaluacion.forEach(function(element){
                if(paso_7listaFaltantes.some(x => x.nombre.includes(element["nombre"]))){
                    if(paso_7listaPreguntasFaltantes.some(y => y.nombre == element["nombre"] && y.tipo_de_variable == element["tipo_de_variable"])){
                        resolve(
                            
                        )
                    } else {
                        resolve(
                            paso_7listaPreguntasFaltantes.push(element)
                        )
                    }
                } else {
                    resolve(
                        
                    )
                }
            })
            console.log(paso_7listaPreguntasFaltantes)
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO G: OBTENGO LA LISTA DE NOMBRES DE LOS RASGOS DIRECTOS ASOCIADOS A ESAS RESPUESTAS
async function paso_7g() {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            paso_7listaPreguntasFaltantes.forEach(function(element){
                paso_7filtro = paso_7rasgosDirectosPlanificados.filter(x => x.nombre.includes(element["nombre"]))
                if(paso_7listaFiltrada.includes(paso_7filtro)){
                    resolve(

                    )
                } else {
                    resolve(
                        paso_7listaFiltrada.push(paso_7filtro)
                    )
                }
                console.log(paso_7filtro)
            })
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO H: APLANO LA LISTA Y CREO UNA NUEVA
async function paso_7h() {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            paso_7listaFiltrada = paso_7listaFiltrada.flat()
            paso_7listaFiltrada.forEach(function(element){
                if(paso_7listaAplanada.includes(element.nombre)){
                    resolve(

                    )
                } else {
                    resolve(
                        paso_7listaAplanada.push(element.nombre)
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

// PASO I: REMUEVO LAS FILAS DE LA TABLA SECUNDARIA DE RASGOS DIRECTOS EN EVALUACIONES
async function paso_7i(tiempo) {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            while (paso_7i--){   
                resolve(
                    paso_7listaAplanada.forEach(function(element){
                        if(paso_7tabla[paso_7i].nombre === element){
                            cur_frm.get_field("table_27").grid.grid_rows[paso_7i].remove()
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
    await guardar(tiempo)
}

// PASO J: ELIMINO LOS DOCUMENTOS QUE HAY EN RASGOS DIRECTOS ASI CUANDO SE GENERAN NUEVOS NO HAY DUPLICADOS
async function paso_7j() {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            paso_7listaAplanada.forEach(function(element){
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
                            if(r.message != ""){
                                if(paso_7eliminables.includes(r.message[0].name)){
                                    resolve(
                                        
                                    )
                                } else {
                                    resolve(
                                        paso_7eliminables.push(r.message[0].name)
                                    )
                                }
                            } else {
                                resolve(
                                    
                                )
                            }
                                
                        }
                    })
            })
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO K: ELIMINO
async function paso_7k(tiempo) {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            paso_7eliminables.forEach(function(element){
                frappe.call({ 
                    method: "frappe.client.delete",
                    args: {
                        doctype: "Rasgos de Personas",
                        name: element
                    },
                    callback: function(r) {
                        console.log(element + " eliminado.")
                    }
                })
            })
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
    await guardar(tiempo)
}

// PASO L
async function paso_7l() {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            paso_7listaPreguntasFaltantes.forEach(function(element){
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
                        resolve(
                            paso_7listaFinalPreguntasFaltantes.push(r.message[0].name)
                        )
                    }
                })
            })
            console.log(paso_7listaFinalPreguntasFaltantes)        
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO M:
let paso_7documentoActual = ""
let paso_7respuestaEvaluacion = []

async function paso_7m() {
    paso_7documentoActual = cur_frm.doc.name
    await paso_7n(paso_7listaFinalPreguntasFaltantes, 1000, 5000)
    await paso_7o(paso_7documentoActual, 5000)
}

async function paso_7n(lista, tiempo, tiempo2) {
    for(let doc in lista){
        await new Promise(resolve => {
            resolve(
                frappe.set_route("Form", "Rasgos de Personas", lista[doc])
            )
        })
        await paso_7p()
        await guardar(tiempo)
        await paso_7q()
        await guardar(tiempo2)
    }
}

async function paso_7p() {
    await new Promise(resolve => {
        resolve(
            cur_frm.set_value("estado", "REALIZADO")
        )
    })
}

async function paso_7q() {
    await new Promise(resolve => {
        resolve(
            cur_frm.set_value("estado", "ANALIZADO")
        )
    })
}

async function paso_7o(origen, tiempo) {
    await new Promise(resolve => {
        resolve(
            frappe.set_route("Form", "Evaluaciones", origen)
        )
    })
    await guardar(tiempo)
}