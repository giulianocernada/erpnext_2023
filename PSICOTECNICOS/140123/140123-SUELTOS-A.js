async function paso_6superyo(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(rasgosPsicotecnico.length > index2 || (rasgosPsicotecnico.length >= index1 && rasgosPsicotecnico.length <= index2)){
            resolve(
                rasgosPsicotecnico.forEach(function(v, i) {
                    if(i >= index1 && i < index2){
                        var total_superyo = 0;
                        var n_superyo = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "SUPERYO",
                                    nombre: v["nombre"]
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["superyo"] 
                            }, 
                            callback: function(t) {
                                $.each(t.message, function(i, row) {
                                    total_superyo += row.superyo;
                                })									
                                n_superyo = t.message.length;
                                frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo":  total_superyo / n_superyo
                                        }
                                    } 
                                })
                            }
                        })
                    }
                })
            )
        }
	})
    await delay(tiempo)
}

async function paso_6ello(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(rasgosPsicotecnico.length > index2 || (rasgosPsicotecnico.length >= index1 && rasgosPsicotecnico.length <= index2)){
            resolve(
                rasgosPsicotecnico.forEach(function(v, i) {
                    if(i >= index1 && i < index2){
                        var total_ello = 0;
                        var n_ello = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "ELLO",
                                    nombre: v["nombre"], 
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["ello"] 
                            }, 
                            callback: function(t) {
                                $.each(t.message, function(i, row) {				
                                    total_ello += row.ello;
                                });									
                                n_ello = t.message.length;
                                frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello":  total_ello / n_ello
                                        }
                                    } 
                                })
                            }
                        })
                    }
                })
            )
        }
    })
    await delay(tiempo)
}

async function paso_6simismo(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(rasgosPsicotecnico.length > index2 || (rasgosPsicotecnico.length >= index1 && rasgosPsicotecnico.length <= index2)){
            resolve(
                rasgosPsicotecnico.forEach(function(v, i) {
                    if(i >= index1 && i < index2){
                        var total_si_mismo = 0;
                        var n_si_mismo = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "SI-MISMO",
                                    nombre: v["nombre"], 
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["si_mismo"] 
                            }, 
                            callback: function(t) {								
                                $.each(t.message, function(i, row) {				
                                    total_si_mismo += row.si_mismo;
                                });
                                n_si_mismo = t.message.length;
                                frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo":  total_si_mismo / n_si_mismo
                                        }
                                    } 
                                })
                            }
                         })
                    }
                })
            )
        }
    })
    await delay(tiempo)
}

async function paso_6ses(tiempo, index1, index2) {
    await new Promise(resolve => {
        if(rasgosPsicotecnico.length > index2 || (rasgosPsicotecnico.length >= index1 && rasgosPsicotecnico.length <= index2)){
            resolve(
                rasgosPsicotecnico.forEach(function(v, i) {
                    if(i >= index1 && i < index2){
                        var total_superyo = 0;
                        var n_superyo = 0; 
                        var total_ello = 0;
                        var n_ello = 0; 
                        var total_si_mismo = 0;
                        var n_si_mismo = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "SUPERYO",
                                    nombre: v["nombre"]
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["superyo"] 
                            }, 
                            callback: function(t) {
                                $.each(t.message, function(i, row) {
                                    total_superyo += row.superyo;
                                })									
                                n_superyo = t.message.length;
                                frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo":  total_superyo / n_superyo
                                        }
                                    } 
                                })
                            }
                        })
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "ELLO",
                                    nombre: v["nombre"], 
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["ello"] 
                            }, 
                            callback: function(t) {
                                $.each(t.message, function(i, row) {				
                                    total_ello += row.ello;
                                });									
                                n_ello = t.message.length;
                                frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello":  total_ello / n_ello
                                        }
                                    } 
                                })
                            }
                        })
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "SI-MISMO",
                                    nombre: v["nombre"], 
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["si_mismo"] 
                            }, 
                            callback: function(t) {								
                                $.each(t.message, function(i, row) {				
                                    total_si_mismo += row.si_mismo;
                                });
                                n_si_mismo = t.message.length;
                                frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo":  total_si_mismo / n_si_mismo
                                        }
                                    } 
                                })
                            }
                        })
                    }
                })
            )
        }
    })
    await delay(tiempo)
}

async function paso_6_comprobacion_superyo(tiempo) {
    await new Promise(resolve => {
            resolve(
                frappe.call({ 
                    method:"frappe.client.get_list", 
                    args: { 
                        doctype: "Rasgos de Personas",
                        filters: { 
                            psicotecnico: cur_frm.doc.name, 
                            tipo_de_rasgo: "DIRECTO - PSICOTECNICO",
                            superyo: 1,
                        },
                        limit_page_length: 999,
                        fields: ["superyo"] 
                    }, 
                    callback: async function(t) {
                        console.log(t.message.length)
                        if(t.message.length != 60){
                            await paso_6superyo(5000, 0, 100)
                            await paso_6superyo(5000, 100, 200)
                            await paso_6superyo(5000, 200, 300)
                            await paso_6superyo(5000, 300, 400)
                            await paso_6superyo(5000, 400, 500)
                        }
                    }
                })
            )
	})
    await delay(tiempo)
}




let a = [{"nombre": "a"}, {"nombre":"b"}, {"nombre":"c"}, {"nombre":"d"}, {"nombre":"e"}, {"nombre":"f"}, {"nombre":"g"}, {"nombre":"h"}, {"nombre":"i"}]
let b = [{"nombre": "a"}, {"nombre":"b"}, {"nombre":"d"}, {"nombre":"e"}, {"nombre":"g"}, {"nombre":"h"}, {"nombre":"i"}]
let listaFaltante = []

function hola(){
    a.forEach(function(element){
        if(b.some(x => x.nombre === element["nombre"])){
            
        } else {
            listaFaltante.push(element)
        }
    })
    console.log(listaFaltante)
}


async function paso_5_comprobacion() {
    await new Promise(resolve => {
        resolve(
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        psicotecnico: cur_frm.doc.name, 
                        tipo_de_rasgo: "DIRECTO - PSICOTECNICO"
                    },
                    limit_page_length: 999,
                    order_by: "n_pregunta asc",
                    fields: ["name", "nombre"] 
                }, 
                callback: function(r) {
                    let listaObtenida = r.message
                    if(listaPaso5.length != listaObtenida.length){
                        let listaFaltantes = []
                        listaPaso5.forEach(function(element) {
                            if(listaObtenida.some(x => x.nombre === element["nombre"])){
                                
                            } else {
                                listaFaltante.push(element)
                            }
                        })
                        console.log(listaFaltante)
                    }
                }
            })
        )
    })
    //await delay(tiempo)
}

frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Rasgos de Personas",
        filters: { 
            psicotecnico: cur_frm.doc.name, 
            tipo_de_rasgo: "DIRECTO - PSICOTECNICO"
        },
        limit_page_length: 999,
        order_by: "n_pregunta asc",
        fields: ["name", "nombre"] 
    }, 
    callback: function(r) {
        cantidadDeRasgosPsicotecnico = r.message.length
        console.log(cantidadDeRasgosPsicotecnico)
    }
})