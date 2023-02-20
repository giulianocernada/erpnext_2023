// FUNCION PASO 10
async function paso_10(){
    await paso_10a(1000)
    await paso_10b(1000)
    await paso_10c(5000, 1, 20)
    await paso_10c(5000, 21, 40)
    await paso_10c(5000, 41, 60)
}

// VARIABLES PASO 10
let paso10_indirectoPsicotecnico

// FUNCIONES PASO 10
async function paso_10a(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                    paso10_indirectoPsicotecnico = r.message,
                    console.log(paso10_indirectoPsicotecnico)
                }
            })
        )
    })
    await guardar(tiempo)
}

async function paso_10b(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                        paso10_coeficientesIndirectos.push(s.message)
                    }
                })
            })
            //console.log(paso10_coeficientesIndirectos)
        )
    })
    await guardar(tiempo)
}

async function paso_10c(tiempo, index1, index2) {
    await new Promise(resolve => {
        resolve(
            console.log("PASO 10C"),
            paso10_coeficientesIndirectos.forEach(function(g,i){
                g.forEach(function(h){
                    if(h["idx"] >= index1 && h["idx"] <= index2){
                        frappe.call({ 			
                            method:"frappe.client.insert", 		
                            args: { 		
                                doc: {	
                                    "doctype": "Rasgos de Personas", 
                                    "rasgo_dependiente": paso10_indirectoPsicotecnico[i]["name"],
                                    "n_pregunta": h["idx"],
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
                                    "nombre": h["nombre"],
                                    "tipo_de_variable": h["tipo_de_variable"],
                                    "descripcion": h["descripcion"],
                                    "grado_su": h["grado_su"],
                                    "coeficiente_su": h["coeficiente_su"],
                                    "grado_el": h["grado_el"],
                                    "coeficiente_el": h["coeficiente_el"],
                                    "grado_si": h["grado_si"],
                                    "coeficiente_si": h["coeficiente_si"]
                                }
                            }
                        })
                    }
                })
        })
        )
    })
    await guardar(tiempo)
}