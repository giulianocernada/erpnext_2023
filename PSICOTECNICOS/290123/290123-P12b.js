//NUEVO NUEVO NUEVO
let paso_12indirectoPsicotecnico
let paso_12directoCoeficiente

async function paso_12a(){
    await new Promise(resolve => {
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
                fields: ["name", "nombre", "constante_del_superyo_c", "constante_del_ello_c", "constante_del_si_mismo_c", "tiempo_superyo_c", "tiempo_ello_c", "tiempo_si_mismo_c",
                 "limitante_minimo_superyo", "minimo_superyo", "limitante_maximo_superyo", "maximo_superyo", "limitante_minimo_ello", "minimo_ello", "limitante_maximo_ello", "maximo_ello","limitante_minimo_si_mismo",
                 "minimo_si_mismo", "maximo_si_mismo", "limitante_maximo_si_mismo", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "limitante_minimo_desajuste_su_el",
                 "limitante_maximo_desajuste_su_el","minimo_desajuste_si_su","maximo_desajuste_si_su","minimo_desajuste_si_el","maximo_desajuste_si_el","minimo_desajuste_su_el", "maximo_desajuste_su_el"]
            }, 
            callback: function(r) {
                resolve(
                    paso_12indirectoPsicotecnico = r.message
                )
            }
        })
    })
}

async function paso_12b(tiempo){
    for(let i = 0; i < paso_12indirectoPsicotecnico.length; i++){
        var total_superyo = 0;
            var total_ello = 0; 
            var total_si_mismo = 0;
        await new Promise(resolve => {
            
            //resolve(
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        psicotecnico: cur_frm.doc.name, 
                        tipo_de_rasgo: "DIRECTO - COEFICIENTE",
                        rasgo_dependiente: paso_12indirectoPsicotecnico[i]["name"]
                    },
                    limit_page_length: 999,
                    order_by: "n_pregunta asc", 
                    fields: ["superyo", "ello", "si_mismo"] 
                }, 
                callback: function(t) {
                        total_superyo = 0
                        total_ello = 0
                        total_si_mismo = 0
                        //console.log(paso_12indirectoPsicotecnico[i]["name"])
                        //console.log(paso_12indirectoPsicotecnico[i]["nombre"])
                        resolve(
                        $.each(t.message, function(i, row) {
                            total_superyo += row.superyo;
                            total_ello += row.ello;
                            total_si_mismo += row.si_mismo;
                        }),
                        )
                        //console.log(total_superyo, paso_12indirectoPsicotecnico[i])
                    }
            })
        })
        await paso_12c(total_superyo, total_si_mismo, total_ello, paso_12indirectoPsicotecnico[i])
        await guardar(tiempo)
    }
}




async function paso_12c(total_superyo, total_si_mismo, total_ello, paso_12indirectoPsicotecnico){
    await new Promise(resolve => {
            if(total_superyo != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnico["tiempo_superyo_c"] != 1 && paso_12indirectoPsicotecnico["tiempo_si_mismo_c"] != 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_ desajuste_si_su"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnico["constante_del_superyo_c"]) > paso_12indirectoPsicotecnico["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnico["limitante_maximo_ desajuste_si_su"] == 1 && (total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnico["constante_del_superyo_c"]) < paso_12indirectoPsicotecnico["maximo_desajuste_si_su"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]),
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnico["constante_del_superyo_c"]) < paso_12indirectoPsicotecnico["maximo_desajuste_si_su"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]),
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnico["constante_del_superyo_c"]) > paso_12indirectoPsicotecnico["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]),
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnico["constante_del_superyo_c"]) < paso_12indirectoPsicotecnico["minimo_desajuste_si_su"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]),
                            "resultado_desajuste_si_su": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnico["constante_del_superyo_c"]) > paso_12indirectoPsicotecnico["maximo_desajuste_si_su"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]),
                            "resultado_desajuste_si_su": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_superyo != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnico["tiempo_superyo_c"] == 1 && paso_12indirectoPsicotecnico["tiempo_si_mismo_c"] != 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_ desajuste_si_su"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion

                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && (((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["minimo_desajuste_si_su"]) && paso_12indirectoPsicotecnico["limitante_maximo_ desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["maximo_desajuste_si_su"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["maximo_desajuste_si_su"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["minimo_desajuste_si_su"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_su": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion)  > paso_12indirectoPsicotecnico["maximo_desajuste_si_su"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_si_su": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_superyo != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnico["tiempo_superyo_c"] != 1 && paso_12indirectoPsicotecnico["tiempo_si_mismo_c"] == 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] != 1 &&  paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]))
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])) > paso_12indirectoPsicotecnico["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])) < paso_12indirectoPsicotecnico["maximo_desajuste_si_su"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])),
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])) < paso_12indirectoPsicotecnico["maximo_desajuste_si_su"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])),
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])) > paso_12indirectoPsicotecnico["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])),
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])) < paso_12indirectoPsicotecnico["minimo_desajuste_si_su"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])),
                            "resultado_desajuste_si_su": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])) > paso_12indirectoPsicotecnico["maximo_desajuste_si_su"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])),
                            "resultado_desajuste_si_su": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_superyo != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnico["tiempo_superyo_c"] == 1 && paso_12indirectoPsicotecnico["tiempo_si_mismo_c"] == 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion)
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["maximo_desajuste_si_su"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["maximo_desajuste_si_su"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_su": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["minimo_desajuste_si_su"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_su": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["maximo_desajuste_si_su"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_su": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_ello != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnico["tiempo_ello_c"] != 1 && paso_12indirectoPsicotecnico["tiempo_si_mismo_c"] != 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])

                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) > paso_12indirectoPsicotecnico["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) < paso_12indirectoPsicotecnico["maximo_desajuste_si_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]),
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) < paso_12indirectoPsicotecnico["maximo_desajuste_si_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]),
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) > paso_12indirectoPsicotecnico["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]),
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) < paso_12indirectoPsicotecnico["minimo_desajuste_si_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]),
                            "resultado_desajuste_si_el": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) > paso_12indirectoPsicotecnico["maximo_desajuste_si_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]),
                            "resultado_desajuste_si_el": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_ello != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnico["tiempo_ello_c"] == 1 && paso_12indirectoPsicotecnico["tiempo_si_mismo_c"] != 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion

                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion)  > paso_12indirectoPsicotecnico["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion)  < paso_12indirectoPsicotecnico["maximo_desajuste_si_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["maximo_desajuste_si_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion)  < paso_12indirectoPsicotecnico["minimo_desajuste_si_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_el": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion)  > paso_12indirectoPsicotecnico["maximo_desajuste_si_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_si_el": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_ello != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnico["tiempo_ello_c"] != 1 && paso_12indirectoPsicotecnico["tiempo_si_mismo_c"] == 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]))

                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])) > paso_12indirectoPsicotecnico["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])) < paso_12indirectoPsicotecnico["maximo_desajuste_si_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])),
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]))  < paso_12indirectoPsicotecnico["maximo_desajuste_si_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])),
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])) > paso_12indirectoPsicotecnico["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])),
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])) < paso_12indirectoPsicotecnico["minimo_desajuste_si_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])),
                            "resultado_desajuste_si_el": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])) > paso_12indirectoPsicotecnico["maximo_desajuste_si_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])),
                            "resultado_desajuste_si_el": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_ello != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnico["tiempo_ello_c"] == 1 && paso_12indirectoPsicotecnico["tiempo_si_mismo_c"] == 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_ desajuste_si_el"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion)
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnico["limitante_maximo_ desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["maximo_desajuste_si_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["maximo_desajuste_si_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["minimo_desajuste_si_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_el": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["maximo_desajuste_si_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_si_el": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_ello != 0 && total_superyo != 0 && paso_12indirectoPsicotecnico["tiempo_ello_c"] != 1 && paso_12indirectoPsicotecnico["tiempo_superyo_c"] != 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) > paso_12indirectoPsicotecnico["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) < paso_12indirectoPsicotecnico["maximo_desajuste_su_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]),
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) < paso_12indirectoPsicotecnico["maximo_desajuste_su_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]),
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) > paso_12indirectoPsicotecnico["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]),
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"] - total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"]) < paso_12indirectoPsicotecnico["minimo_desajuste_su_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]),
                            "resultado_desajuste_su_el": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"] - total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) > paso_12indirectoPsicotecnico["maximo_desajuste_su_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]),
                            "resultado_desajuste_su_el": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_ello != 0 && total_superyo != 0 && paso_12indirectoPsicotecnico["tiempo_ello_c"] == 1 && paso_12indirectoPsicotecnico["tiempo_superyo_c"] != 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion)  > paso_12indirectoPsicotecnico["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion)  < paso_12indirectoPsicotecnico["maximo_desajuste_su_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["maximo_desajuste_su_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion)  < paso_12indirectoPsicotecnico["minimo_desajuste_su_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_su_el": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion)  > paso_12indirectoPsicotecnico["maximo_desajuste_su_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion,
                            "resultado_desajuste_su_el": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_ello != 0 && total_superyo != 0 && paso_12indirectoPsicotecnico["tiempo_ello_c"] != 1 && paso_12indirectoPsicotecnico["tiempo_superyo_c"] == 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]))
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])) > paso_12indirectoPsicotecnico["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])) < paso_12indirectoPsicotecnico["maximo_desajuste_su_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])),
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]))  < paso_12indirectoPsicotecnico["maximo_desajuste_su_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])),
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])) > paso_12indirectoPsicotecnico["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])),
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])) < paso_12indirectoPsicotecnico["minimo_desajuste_su_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])),
                            "resultado_desajuste_su_el": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])) > paso_12indirectoPsicotecnico["maximo_desajuste_su_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])),
                            "resultado_desajuste_su_el": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_ello != 0 && total_superyo != 0 && paso_12indirectoPsicotecnico["tiempo_ello_c"] == 1 && paso_12indirectoPsicotecnico["tiempo_superyo_c"] == 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion)				
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["maximo_desajuste_su_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello - paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["maximo_desajuste_su_el"]) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_su_el": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnico["minimo_desajuste_su_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_su_el": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnico["maximo_desajuste_su_el"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"])/cur_frm.doc.duracion),
                            "resultado_desajuste_su_el": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_superyo != 0 && paso_12indirectoPsicotecnico["tiempo_superyo_c"] != 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_superyo"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_superyo"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"]
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) > paso_12indirectoPsicotecnico["minimo_superyo"] && paso_12indirectoPsicotecnico["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) < paso_12indirectoPsicotecnico["maximo_superyo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"],
                            "resultado_superyo": "APROBADO"
                        }
                    } 
                }))				
                if(paso_12indirectoPsicotecnico["limitante_minimo_superyo"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) < paso_12indirectoPsicotecnico["maximo_superyo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"],
                            "resultado_superyo": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) > paso_12indirectoPsicotecnico["minimo_superyo"] && paso_12indirectoPsicotecnico["limitante_maximo_superyo"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"],
                            "resultado_superyo": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) < paso_12indirectoPsicotecnico["minimo_superyo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"],
                            "resultado_superyo": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) > paso_12indirectoPsicotecnico["maximo_superyo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": total_superyo +  paso_12indirectoPsicotecnico["constante_del_superyo_c"],
                            "resultado_superyo": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_superyo != 0 && paso_12indirectoPsicotecnico["tiempo_superyo_c"] == 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_superyo"] != 1 &&  paso_12indirectoPsicotecnico["limitante_maximo_superyo"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) / cur_frm.doc.duracion
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnico["minimo_superyo"] && paso_12indirectoPsicotecnico["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnico["maximo_superyo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                            "resultado_superyo": "APROBADO"
                        }
                    } 
                }))				
                if(paso_12indirectoPsicotecnico["limitante_minimo_superyo"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnico["maximo_superyo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                            "resultado_superyo": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnico["minimo_superyo"] && paso_12indirectoPsicotecnico["limitante_maximo_superyo"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                            "resultado_superyo": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion  < paso_12indirectoPsicotecnico["minimo_superyo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo": (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                            "resultado_superyo": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnico["maximo_superyo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "superyo":(total_superyo + paso_12indirectoPsicotecnico["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                            "resultado_superyo": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_ello != 0 && paso_12indirectoPsicotecnico["tiempo_ello_c"] != 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_ello"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_ello"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": total_ello +  paso_12indirectoPsicotecnico["constante_del_ello_c"]
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) > paso_12indirectoPsicotecnico["minimo_ello"] && paso_12indirectoPsicotecnico["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) < paso_12indirectoPsicotecnico["maximo_ello"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": total_ello +  paso_12indirectoPsicotecnico["constante_del_ello_c"],
                            "resultado_ello": "APROBADO"
                        }
                    } 
                }))				
                if(paso_12indirectoPsicotecnico["limitante_minimo_ello"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) < paso_12indirectoPsicotecnico["maximo_ello"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": total_ello +  paso_12indirectoPsicotecnico["constante_del_ello_c"],
                            "resultado_ello": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) > paso_12indirectoPsicotecnico["minimo_ello"] && paso_12indirectoPsicotecnico["limitante_maximo_ello"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": total_ello +  paso_12indirectoPsicotecnico["constante_del_ello_c"],
                            "resultado_ello": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) < paso_12indirectoPsicotecnico["minimo_ello"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": total_ello +  paso_12indirectoPsicotecnico["constante_del_ello_c"],
                            "resultado_ello": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) > paso_12indirectoPsicotecnico["maximo_ello"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": total_ello +  paso_12indirectoPsicotecnico["constante_del_ello_c"],
                            "resultado_ello": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_ello != 0 && paso_12indirectoPsicotecnico["tiempo_ello_c"] == 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_ello"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_ello"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnico["minimo_ello"] && paso_12indirectoPsicotecnico["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnico["maximo_ello"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion,
                            "resultado_ello": "APROBADO"
                        }
                    } 
                }))				
                if(paso_12indirectoPsicotecnico["limitante_minimo_ello"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnico["maximo_ello"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion,
                            "resultado_ello": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnico["minimo_ello"] && paso_12indirectoPsicotecnico["limitante_maximo_ello"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion,
                            "resultado_ello": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion  < paso_12indirectoPsicotecnico["minimo_ello"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion,
                            "resultado_ello": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnico["maximo_ello"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "ello": (total_ello + paso_12indirectoPsicotecnico["constante_del_ello_c"]) /cur_frm.doc.duracion,
                            "resultado_ello": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_si_mismo != 0 && paso_12indirectoPsicotecnico["tiempo_si_mismo_c"] != 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_si_mismo"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_si_mismo"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]
                        }
                    } 
                }))	
                if(paso_12indirectoPsicotecnico["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) > paso_12indirectoPsicotecnico["minimo_si_mismo"] && paso_12indirectoPsicotecnico["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) < paso_12indirectoPsicotecnico["maximo_si_mismo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"],
                            "resultado_si_mismo": "APROBADO"
                        }
                    } 
                }))				
                if(paso_12indirectoPsicotecnico["limitante_minimo_si_mismo"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) < paso_12indirectoPsicotecnico["maximo_si_mismo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"],
                            "resultado_si_mismo": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) > paso_12indirectoPsicotecnico["minimo_si_mismo"] && paso_12indirectoPsicotecnico["limitante_maximo_si_mismo"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"],
                            "resultado_si_mismo": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) < paso_12indirectoPsicotecnico["minimo_si_mismo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"],
                            "resultado_si_mismo": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) > paso_12indirectoPsicotecnico["maximo_si_mismo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnico["constante_del_si_mismo_c"],
                            "resultado_si_mismo": "DESAPROBADO"
                        }
                    } 
                }))
            };
            if(total_si_mismo != 0 && paso_12indirectoPsicotecnico["tiempo_si_mismo_c"] == 1){
                if(paso_12indirectoPsicotecnico["limitante_minimo_si_mismo"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_si_mismo"] != 1)
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo": (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion
                        }
                    } 
                }))
                if(paso_12indirectoPsicotecnico["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnico["minimo_si_mismo"] && paso_12indirectoPsicotecnico["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnico["maximo_si_mismo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo": (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                            "resultado_si_mismo": "APROBADO"
                        }
                    } 
                }))				
                if(paso_12indirectoPsicotecnico["limitante_minimo_si_mismo"] != 1 && paso_12indirectoPsicotecnico["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnico["maximo_si_mismo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo": (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                            "resultado_si_mismo": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnico["minimo_si_mismo"] && paso_12indirectoPsicotecnico["limitante_maximo_si_mismo"] != 1) 
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo": (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                            "resultado_si_mismo": "APROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  < paso_12indirectoPsicotecnico["minimo_si_mismo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo":  (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                            "resultado_si_mismo": "DESAPROBADO"
                        }
                    } 
                }))
                if (paso_12indirectoPsicotecnico["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnico["maximo_si_mismo"])
                resolve(
                frappe.call({ 
                    method:"frappe.client.set_value", 
                    args: { 
                        "doctype": "Rasgos de Personas", 
                        "name": paso_12indirectoPsicotecnico["name"],
                        "fieldname": {
                            "si_mismo":(total_si_mismo + paso_12indirectoPsicotecnico["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                            "resultado_si_mismo": "DESAPROBADO"
                        }
                    } 
                }))
            }
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