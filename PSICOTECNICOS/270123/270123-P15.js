// FUNCION PASO 15
async function paso_15(){
    await paso_15a()
    await paso_15b(1000)
}

// VARIABLES PASO 15
let paso_15indirectoPsicotecnico

// FUNCIONES PASO 15
async function paso_15a() {
    await new Promise(resolve => {
        console.log("PASO 15A"),
        frappe.call({ 
            method:"frappe.client.get_list", 
            args: { 
                doctype: "Rasgos de Personas",
                filters: { 
                    psicotecnico: cur_frm.doc.name, 
                    tipo_de_rasgo: "INDIRECTO - PSICOTECNICO",
                },
                limit_page_length: 999,
                order_by: "n_pregunta asc",
                fields: ["name", "parametros_limitantes_totales", "resultado_superyo", "resultado_ello", "resultado_si_mismo", "resultado_desajuste_si_su", "resultado_desajuste_si_el", "resultado_desajuste_su_el"] 
            }, 
            callback: function(r) { 
                resolve(
                    paso_15indirectoPsicotecnico = r.message
                )
            }
        })
    })
}

async function paso_15b(tiempo) {
    for(let i = 0; i < paso_15indirectoPsicotecnico.length; i++){
        await new Promise(resolve => {
            var superyo_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_superyo"] == "DESAPROBADO"){superyo_limitante = 1};
            var ello_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_ello"] == "DESAPROBADO"){ello_limitante = 1};
            var si_mismo_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_si_mismo"] == "DESAPROBADO"){ si_mismo_limitante = 1};
            var si_su_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_desajuste_si_su"]){ si_su_limitante = 1};
            var si_el_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_desajuste_si_el"]){ si_el_limitante = 1};
            var su_el_limitante = 0;
            if(paso_15indirectoPsicotecnico[i]["resultado_desajuste_su_el"]){ su_el_limitante = 1};
            resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_15indirectoPsicotecnico[i]["name"],
                        "fieldname": {
                            "parametros_desaprobados": superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante
                        }
                    } 
                })
            )
        })
        await guardar(tiempo)
    }
}