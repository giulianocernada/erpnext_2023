let paso_6rasgosDirectosPlanificados = []
let paso_6rasgosDirectosCreados = []
let paso_6rasgosDirectosTraidos = []
let paso_6respuestasEvaluacion = []
let paso_6listaFaltantes = []
let paso_6comprobacionRealizada = false
let paso_6listaPreguntasFaltantes = []
let paso_6listaFinalPreguntasFaltantes = []
let paso_6filtro = []
let paso_6listaFiltrada = []
let paso_6tabla = cur_frm.doc.table_27
let paso_6i = paso_6tabla.length
let paso_6eliminables = []
let paso_6listaAplanada = []

// PASO 1: BUSCO LA CANTIDAD Y NOMBRES DE RASGOS DIRECTOS SEGUN PROTOCOLO
async function paso1() {
    await new Promise(resolve => {
        paso_6rasgosDirectosPlanificados = []
        paso_6rasgosDirectosCreados = []
        paso_6rasgosDirectosTraidos = []
        paso_6respuestasEvaluacion = []
        paso_6listaFaltantes = []
        paso_6comprobacionRealizada = false
        paso_6listaPreguntasFaltantes = []
        paso_6listaFinalPreguntasFaltantes = []
        paso_6filtro = []
        paso_6listaFiltrada = []
        paso_6tabla = cur_frm.doc.table_27
        paso_6i = paso_6tabla.length
        paso_6eliminables = []
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

// PASO 2: BUSCO LA CANTIDAD Y NOMBRES DE RASGOS CREADOS DEL TIPO "DIRECTO - EVALUACION"
async function paso2() {
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
                        paso_6rasgosDirectosCreados.push(element)
                    })
                    console.log(paso_6rasgosDirectosCreados)
                }
            })
        )
    })
}

// PASO 3: BUSCO LA CANTIDAD Y NOMBRES DE RASGOS DIRECTOS COMPLETADOS EN LA TABLA
async function paso3() {
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
                        paso_6rasgosDirectosTraidos.push(element)
                    })
                    console.log(paso_6rasgosDirectosTraidos)
                }
            })
        )
    })
}

// PASO 4: ENTRE LAS LISTAS DE LOS PASOS 1 Y 2 BUSCO CUALES SON LOS FALTANTES
async function paso4() {
    await new Promise(resolve => {
        if(paso_6rasgosDirectosPlanificados.length != paso_6rasgosDirectosCreados.length){
            resolve(
                paso_6comprobacionRealizada = true,
                paso_6rasgosDirectosPlanificados.forEach(function(element){
                    if(paso_6rasgosDirectosCreados.some(x => x.nombre.includes(element["nombre"]))){
                        resolve(
                            
                        )
                    } else {
                        resolve(
                            paso_6listaFaltantes.push(element) 
                        )
                    }
                }),
                console.log(paso_6listaFaltantes)
            )
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO 5: BUSCO LOS NOMBRES DE LAS RESPUESTAS
async function paso5() {
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
                    fields: ["name", "nombre", "tipo_de_variable"] 
                }, 
                callback: function(r) {
                    resolve(
                        paso_6respuestasEvaluacion = r.message,
                        console.log(paso_6respuestasEvaluacion)
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

// PASO 6: FILTRO LAS RESPUESTAS QUE FALTAN
async function paso6() {
    await new Promise(resolve => {
        if(paso_6comprobacionRealizada === true){
            paso_6respuestasEvaluacion.forEach(function(element){
                if(paso_6listaFaltantes.some(x => x.nombre.includes(element["nombre"]))){
                    if(paso_6listaPreguntasFaltantes.some(y => y.nombre == element["nombre"] && y.tipo_de_variable == element["tipo_de_variable"])){
                        resolve(
                            
                        )
                    } else {
                        resolve(
                            paso_6listaPreguntasFaltantes.push(element)
                        )
                    }
                } else {
                    resolve(
                        
                    )
                }
            })
            console.log(paso_6listaPreguntasFaltantes)
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO 7: OBTENGO LA LISTA DE NOMBRES DE LOS RASGOS DIRECTOS ASOCIADOS A ESAS RESPUESTAS
async function paso7() {
    await new Promise(resolve => {
        if(paso_6comprobacionRealizada === true){
            paso_6listaPreguntasFaltantes.forEach(function(element){
                paso_6filtro = paso_6rasgosDirectosPlanificados.filter(x => x.nombre.includes(element["nombre"]))
                if(paso_6listaFiltrada.includes(paso_6filtro)){
                    resolve(

                    )
                } else {
                    resolve(
                        paso_6listaFiltrada.push(paso_6filtro)
                    )
                }
                console.log(paso_6filtro)
            })
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO 8: APLANO LA LISTA Y CREO UNA NUEVA
async function paso8() {
    await new Promise(resolve => {
        if(paso_6comprobacionRealizada === true){
            paso_6listaFiltrada = paso_6listaFiltrada.flat()
            paso_6listaFiltrada.forEach(function(element){
                if(paso_6listaAplanada.includes(element.nombre)){
                    resolve(

                    )
                } else {
                    resolve(
                        paso_6listaAplanada.push(element.nombre)
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

// PASO 9: REMUEVO LAS FILAS DE LA TABLA SECUNDARIA DE RASGOS DIRECTOS EN EVALUACIONES
async function paso9() {
    await new Promise(resolve => {
        if(paso_6comprobacionRealizada === true){
            while (paso_6i--){   
                resolve(
                    paso_6listaAplanada.forEach(function(element){
                        if(paso_6tabla[paso_6i].nombre === element){
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

// PASO 9: ELIMINO LOS DOCUMENTOS QUE HAY EN RASGOS DIRECTOS ASI CUANDO SE GENERAN NUEVOS NO HAY DUPLICADOS
async function paso9() {
    await new Promise(resolve => {
        if(paso_6comprobacionRealizada === true){
            paso_6listaFiltrada.forEach(function(element){
                element.forEach(function(element2){
                    frappe.call({ 
                        method:"frappe.client.get_list", 
                        args: { 
                            doctype: "Rasgos de Personas",
                            filters: { 
                                evaluacion: cur_frm.doc.name,
                                protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                                tipo_de_rasgo: "DIRECTO - EVALUACION",
                                nombre: ["like", element2["nombre"]]
                            },
                            order_by: "name asc",
                            limit_page_length: 999, 
                            fields: ["name", "nombre"]
                        }, 
                        callback: function(r) {
                            if(r.message != ""){
                                if(paso_6eliminables.includes(r.message[0].name)){
                                    resolve(
                                        
                                    )
                                } else {
                                    resolve(
                                        paso_6eliminables.push(r.message[0].name)
                                    )
                                }
                            } else {
                                resolve(
                                    
                                )
                            }
                                
                        }
                    })
                })
            })
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO 7
async function paso17() {
    await new Promise(resolve => {
        //if(paso_6comprobacionRealizada === true){
            paso_6listaPreguntasFaltantes.forEach(function(element){
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
                            paso_6listaFinalPreguntasFaltantes.push(r.message[0].name)
                        )
                    }
                })
            })
            console.log(paso_6listaFinalPreguntasFaltantes)  
            /*       
        } else {
            resolve(
                console.log("sigue")
            )
        }
        */
    })
}

async function paso_4z() {
    paso_4documentoActual = cur_frm.doc.name
    await paso_4a(paso_6listaFinalPreguntasFaltantes, 1000, 5000)
    await paso_4d(paso_4documentoActual, 5000)
}

let paso_4documentoActual = ""
let paso_4respuestaEvaluacion = []

async function paso_4a(lista, tiempo, tiempo2) {
    for(let doc in lista){
        await new Promise(resolve => {
            resolve(
                frappe.set_route("Form", "Rasgos de Personas", lista[doc])
            )
        })
        await paso_4b()
        await guardar(tiempo)
        await paso_4c()
        await guardar(tiempo2)
    }
}

async function paso_4b() {
    await new Promise(resolve => {
        resolve(
            cur_frm.set_value("estado", "REALIZADO")
        )
    })
}

async function paso_4c() {
    await new Promise(resolve => {
        resolve(
            cur_frm.set_value("estado", "ANALIZADO")
        )
    })
}

async function paso_4d(origen, tiempo) {
    await new Promise(resolve => {
        resolve(
            frappe.set_route("Form", "Evaluaciones", origen)
        )
    })
    await guardar(tiempo)
}

async function guardar(tiempo) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(
              cur_frm.save()
            );
        }, tiempo)
    })
}

/* HASTA ACA FUNCIONO BIEN

COMO HACER EN CASO DE QUE NO SE HAYAN CREADO TODOS? 

*/