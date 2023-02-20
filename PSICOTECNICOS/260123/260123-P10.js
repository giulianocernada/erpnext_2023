// FUNCION PASO 10
async function paso_10(){
    await paso_10a()
    await paso_10b(2000)
}

// VARIABLES PASO 10
let paso10_indirectoPsicotecnico
let paso10_coeficientesIndirectos = []
let paso10_rasgoIndirecto
let paso10_desarrollo

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
        resolve(
        console.log("PASO 10B"),
        paso10_indirectoPsicotecnico.forEach(function(g,i) {
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
                    console.log(s.message.length)
                    s.message.forEach(function(elemento){
                        paso10_rasgoIndirecto = g["name"]
                        paso10_desarrollo = g["desarrollo"]
                        paso_10c(paso10_rasgoIndirecto, paso10_desarrollo, elemento)
                    })
                }
            })
        })
        )
    })
    await guardar(tiempo)
}

async function paso_10c(rasgo, desarrollo, elemento) {
    await new Promise(resolve => {
        resolve(
            frappe.call({ 			
                method:"frappe.client.insert", 		
                args: { 		
                    doc: {	
                        "doctype": "Rasgos de Personas", 
                        "rasgo_dependiente": rasgo,
                        "n_pregunta": elemento["idx"],
                        "psicotecnico": cur_frm.doc.name,
                        "protocolo_de_psicotecnico": cur_frm.doc.protocolo_de_psicotecnico,
                        "protocolo_de_periodo": cur_frm.doc.protocolo_de_periodo,
                        "periodo": cur_frm.doc.periodo,
                        "plan_de_periodo": cur_frm.doc.plan_de_periodo,
                        "cuenta": cur_frm.doc.cuenta,
                        "persona": cur_frm.doc.persona,
                        "cuenta_analizo": frappe.session.user,
                        "estado": "REALIZADO",
                        "desarrollo": desarrollo,
                        "tipo_de_rasgo": "DIRECTO - COEFICIENTE",
                        "inicio": frappe.datetime.now_datetime(),
                        "fin": frappe.datetime.now_datetime(),
                        "nombre": elemento["nombre"],
                        "tipo_de_variable": elemento["tipo_de_variable"],
                        "descripcion": elemento["descripcion"],
                        "grado_su": elemento["grado_su"],
                        "coeficiente_su": elemento["coeficiente_su"],
                        "grado_el": elemento["grado_el"],
                        "coeficiente_el": elemento["coeficiente_el"],
                        "grado_si": elemento["grado_si"],
                        "coeficiente_si": elemento["coeficiente_si"]
                    }
                }
            })
        )
    })
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