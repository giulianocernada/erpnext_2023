// FUNCION PASO 10
async function paso_10(){
    await paso_10a()
    await paso_10b(1000)
    await paso_10c()
    await paso_10e()
    await paso_10f(paso_10acumulador, 2000)
}

// VARIABLES PASO 10
let paso10_indirectoPsicotecnico
let paso10_coeficientesIndirectos = []
let paso_10lista = []
let paso_10largoLista
let paso_10acumulador = 0
let paso_10i1 = 0
let paso_10i2 = 50

// FUNCIONES PASO 10
async function paso_10a() {
    await new Promise(resolve => {
        //resolve(
            console.log("PASO 10A"),
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas", 
                    filters: { 
                        "psicotecnico": cur_frm.doc.name,
                        "tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
                    }, 
                    fields: ["name", "nombre", "rasgo_modelo", "persona", "desarrollo"] 
                }, 
                callback: function(r) {
                    resolve(
                    paso10_indirectoPsicotecnico = r.message,
                    console.log(paso10_indirectoPsicotecnico)
                    )
                }
            })
        //)
    })
}

async function paso_10b(tiempo) {
    await new Promise(resolve => {
            console.log("PASO 10B"),
            paso10_indirectoPsicotecnico.forEach(function(g) {
                frappe.call({ 
                    method:"frappe.client.get_list", 
                    args: { 
                        doctype: "Coeficientes Regresores",
                        parent: "Rasgos de Personas", 
                        filters: { 
                            parent: g["rasgo_modelo"], 
                        },
                        order_by: "idx asc", 
                        limit_page_length: 500, 
                        fields: ["idx", "rasgo", "nombre", "tipo_de_variable", "descripcion", "grado_su", "coeficiente_su", "grado_el", "coeficiente_el", "grado_si", "coeficiente_si"] 
                    }, 
                    callback: function(s) {
                        resolve(
                        paso10_coeficientesIndirectos.push(s.message)
                        )
                    }
                })
            })
    })
    await guardar(tiempo)
}

async function paso_10c() {
    await new Promise(resolve => {
        resolve(
            console.log("PASO 10C"),
            paso10_coeficientesIndirectos.forEach(function(g,i){
                paso_10d(i)
                console.log(paso_10lista)
            })
        )
    })
}

async function paso_10d(i) {
    await new Promise(resolve => {
        //resolve(
            console.log("PASO 10D"),
            paso10_coeficientesIndirectos[i].forEach(function(h){
                resolve(
                //console.log(h)
                paso_10lista.push(h)
                )
            })
        //)
    })
    //await guardar(tiempo)
}

async function paso_10e(){
    await new Promise(resolve => {
        paso_10largoLista = paso_10lista.length
        while(paso_10largoLista > 50){
            if(paso_10largoLista > 50){
                resolve(
                    paso_10acumulador += 1,
                    paso_10largoLista -= 50
                )
            }
            console.log(paso_10largoLista + " - " + paso_10acumulador)
        }
        if(paso_10largoLista<50){
            resolve(
            paso_10acumulador += 1,
            console.log("Acumulador: " + paso_10acumulador)
            )
        }
    })
}

async function paso_10f(veces, tiempo){
    await new Promise(resolve => {
        for(let i=0; i < veces; i++){
            resolve(
                paso_10lista.forEach(function(element, i){
                    if(i >= paso_10i1 && i < paso_10i2){
                        console.log(element["idx"])
                        frappe.call({ 			
                            method:"frappe.client.insert", 		
                            args: { 		
                                doc: {	
                                    "doctype": "Rasgos de Personas", 
                                    "rasgo_dependiente": paso10_indirectoPsicotecnico[i]["name"],
                                    "n_pregunta": element["idx"],
                                    "psicotecnico": cur_frm.doc.name,
                                    "protocolo_de_psicotecnico": cur_frm.doc.protocolo_de_psicotecnico,
                                    "protocolo_de_periodo": cur_frm.doc.protocolo_de_periodo,
                                    "periodo": cur_frm.doc.periodo,
                                    "plan_de_periodo": cur_frm.doc.plan_de_periodo,
                                    "cuenta": cur_frm.doc.cuenta,
                                    "persona": cur_frm.doc.persona,
                                    "cuenta_analizo": frappe.session.user,
                                    "estado": "REALIZADO",
                                    "desarrollo": paso10_indirectoPsicotecnico[i]["desarrollo"],
                                    "tipo_de_rasgo": "DIRECTO - COEFICIENTE",
                                    "inicio": frappe.datetime.now_datetime(),
                                    "fin": frappe.datetime.now_datetime(),
                                    "nombre": element["nombre"],
                                    "tipo_de_variable": element["tipo_de_variable"],
                                    "descripcion": element["descripcion"],
                                    "grado_su": element["grado_su"],
                                    "coeficiente_su": element["coeficiente_su"],
                                    "grado_el": element["grado_el"],
                                    "coeficiente_el": element["coeficiente_el"],
                                    "grado_si": element["grado_si"],
                                    "coeficiente_si": element["coeficiente_si"]
                                }
                            }
                        })
                    }
                }),
                paso_10i1 += 50,
                paso_10i2 += 50
            )
        }
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
