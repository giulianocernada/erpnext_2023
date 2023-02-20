let paso12_indirPsicotecnico = []

async function guardar(tiempo) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(
              cur_frm.save()
            );
        }, tiempo)
    })
}

async function paso_12a(tiempo) {
    await new Promise(resolve => {
        resolve(
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
                    fields: ["name", "nombre", "constante_del_superyo_c", "constante_del_ello_c", "constante_del_si_mismo_c", "tiempo_superyo_c", "tiempo_ello_c", "tiempo_si_mismo_c", "limitante_minimo_superyo", "minimo_superyo", "limitante_maximo_superyo", "maximo_superyo", "limitante_minimo_ello", "minimo_ello", "limitante_maximo_ello", "maximo_ello"] 
                }, 
                callback: function(r) { 
                    console.log(r.message)
                    paso12_indirPsicotecnico = r.message
                }
            })
        )
    })
    await guardar(tiempo)
}

async function paso_12b(tiempo,index1) {
    await new Promise(resolve => {
        resolve(
            paso12_indirPsicotecnico.forEach(function(v,i) {
                if(i === index1){
                    var total_superyo = 0;
                    var total_ello = 0; 
                    var total_si_mismo = 0; 
                    frappe.call({ 
                        method:"frappe.client.get_list", 
                        args: { 
                            doctype: "Rasgos de Personas",
                            filters: { 
                                psicotecnico: cur_frm.doc.name, 
                                tipo_de_rasgo: "DIRECTO - COEFICIENTE",
                                rasgo_dependiente: v["name"] 
                            },
                            limit_page_length: 999,
                            order_by: "n_pregunta asc", 
                            fields: ["superyo", "ello", "si_mismo"] 
                        }, 
                        callback: function(t) {
                            $.each(t.message, function(i, row) {
                                total_superyo += row.superyo;
                                total_ello += row.ello;
                                total_si_mismo += row.si_mismo;
                            });
                            if(total_superyo != 0 && total_si_mismo != 0 && v["tiempo_superyo_c"] != 1 && v["tiempo_si_mismo_c"] != 1){
                                if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_ desajuste_si_su"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) > v["minimo_desajuste_si_su"] && v["limitante_maximo_ desajuste_si_su"] == 1 && (total_si_mismo +  v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) < v["maximo_desajuste_si_su"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]),
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_desajuste_si_su"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) < v["maximo_desajuste_si_su"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]),
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]),
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) < v["minimo_desajuste_si_su"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]),
                                            "resultado_desajuste_si_su": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_si_su"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_superyo - v["constante_del_superyo_c"]) > v["maximo_desajuste_si_su"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]),
                                            "resultado_desajuste_si_su": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_superyo != 0 && total_si_mismo != 0 && v["tiempo_superyo_c"] == 1 && v["tiempo_si_mismo_c"] != 1){
                                if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_ desajuste_si_su"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion

                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_su"] == 1 && (((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_su"]) && v["limitante_maximo_ desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_su"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_su"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["minimo_desajuste_si_su"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_su": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion)  > v["maximo_desajuste_si_su"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_si_su": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_superyo != 0 && total_si_mismo != 0 && v["tiempo_superyo_c"] != 1 && v["tiempo_si_mismo_c"] == 1){
                                if(v["limitante_minimo_desajuste_si_su"] != 1 &&  v["limitante_maximo_desajuste_si_su"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"]))
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) < v["maximo_desajuste_si_su"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])),
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) < v["maximo_desajuste_si_su"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])),
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])),
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) < v["minimo_desajuste_si_su"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])),
                                            "resultado_desajuste_si_su": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])) > v["maximo_desajuste_si_su"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])),
                                            "resultado_desajuste_si_su": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_superyo != 0 && total_si_mismo != 0 && v["tiempo_superyo_c"] == 1 && v["tiempo_si_mismo_c"] == 1){
                                if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_desajuste_si_su"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion)
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_su"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_su"] != 1 && v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_su"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_su"] && v["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_su": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) < v["minimo_desajuste_si_su"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_su": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion) > v["maximo_desajuste_si_su"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_su":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_su": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_ello != 0 && total_si_mismo != 0 && v["tiempo_ello_c"] != 1 && v["tiempo_si_mismo_c"] != 1){
                                if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])

                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo +  v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo +  v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) < v["maximo_desajuste_si_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"]),
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) < v["maximo_desajuste_si_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"]),
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo +  v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"]),
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) < v["minimo_desajuste_si_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"]),
                                            "resultado_desajuste_si_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo +  v["constante_del_si_mismo_c"] - total_ello - v["constante_del_ello_c"]) > v["maximo_desajuste_si_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"]),
                                            "resultado_desajuste_si_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_ello != 0 && total_si_mismo != 0 && v["tiempo_ello_c"] == 1 && v["tiempo_si_mismo_c"] != 1){
                                if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion

                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo +  v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  < v["maximo_desajuste_si_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  < v["minimo_desajuste_si_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  > v["maximo_desajuste_si_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  (total_si_mismo + v["constante_del_si_mismo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_si_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_ello != 0 && total_si_mismo != 0 && v["tiempo_ello_c"] != 1 && v["tiempo_si_mismo_c"] == 1){
                                if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + v["constante_del_ello_c"]))

                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) < v["maximo_desajuste_si_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + v["constante_del_ello_c"])),
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"]))  < v["maximo_desajuste_si_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) < v["minimo_desajuste_si_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
                                            "resultado_desajuste_si_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["maximo_desajuste_si_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
                                            "resultado_desajuste_si_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_ello != 0 && total_si_mismo != 0 && v["tiempo_ello_c"] == 1 && v["tiempo_si_mismo_c"] == 1){
                                if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_ desajuste_si_el"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_el"] && v["limitante_maximo_ desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_si_el"] != 1 && v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_si_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_si_el"] && v["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["minimo_desajuste_si_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo +  v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["maximo_desajuste_si_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_si_el":  ((total_si_mismo + v["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_si_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_ello != 0 && total_superyo != 0 && v["tiempo_ello_c"] != 1 && v["tiempo_superyo_c"] != 1){
                                if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo +  v["constante_del_superyo_c"] - total_ello - v["constante_del_ello_c"]) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo +  v["constante_del_superyo_c"] - total_ello - v["constante_del_ello_c"]) < v["maximo_desajuste_su_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"]),
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo + v["constante_del_superyo_c"] - total_ello - v["constante_del_ello_c"]) < v["maximo_desajuste_su_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"]),
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo + v["constante_del_superyo_c"] - total_ello - v["constante_del_ello_c"]) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"]),
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo + v["constante_del_superyo_c"] - total_ello - v["constante_del_ello_c"]) < v["minimo_desajuste_su_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"]),
                                            "resultado_desajuste_su_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo + v["constante_del_superyo_c"] - total_ello + v["constante_del_ello_c"]) > v["maximo_desajuste_su_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"]),
                                            "resultado_desajuste_su_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_ello != 0 && total_superyo != 0 && v["tiempo_ello_c"] == 1 && v["tiempo_superyo_c"] != 1){
                                if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  < v["maximo_desajuste_su_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_su_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo +  v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  < v["minimo_desajuste_su_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_su_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion)  > v["maximo_desajuste_su_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  (total_superyo + v["constante_del_superyo_c"]) - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion,
                                            "resultado_desajuste_su_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_ello != 0 && total_superyo != 0 && v["tiempo_ello_c"] != 1 && v["tiempo_superyo_c"] == 1){
                                if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"]))
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) < v["maximo_desajuste_su_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo + v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"]))  < v["maximo_desajuste_su_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) < v["minimo_desajuste_su_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
                                            "resultado_desajuste_su_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])) > v["maximo_desajuste_su_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])),
                                            "resultado_desajuste_su_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_ello != 0 && total_superyo != 0 && v["tiempo_ello_c"] == 1 && v["tiempo_superyo_c"] == 1){
                                if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion)				
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_su_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_desajuste_su_el"] != 1 && v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello - v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["maximo_desajuste_su_el"]) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["minimo_desajuste_su_el"] && v["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_su_el": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) < v["minimo_desajuste_su_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_su_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion) > v["maximo_desajuste_su_el"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "valor_desajuste_su_el":  ((total_superyo +  v["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + v["constante_del_ello_c"])/cur_frm.doc.duracion),
                                            "resultado_desajuste_su_el": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_superyo != 0 && v["tiempo_superyo_c"] != 1){
                                if(v["limitante_minimo_superyo"] != 1 && v["limitante_maximo_superyo"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": total_superyo +  v["constante_del_superyo_c"]
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) > v["minimo_superyo"] && v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) < v["maximo_superyo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": total_superyo +  v["constante_del_superyo_c"],
                                            "resultado_superyo": "APROBADO"
                                        }
                                    } 
                                });				
                                if(v["limitante_minimo_superyo"] != 1 && v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) < v["maximo_superyo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": total_superyo +  v["constante_del_superyo_c"],
                                            "resultado_superyo": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) > v["minimo_superyo"] && v["limitante_maximo_superyo"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": total_superyo +  v["constante_del_superyo_c"],
                                            "resultado_superyo": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) < v["minimo_superyo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": total_superyo +  v["constante_del_superyo_c"],
                                            "resultado_superyo": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) > v["maximo_superyo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": total_superyo +  v["constante_del_superyo_c"],
                                            "resultado_superyo": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_superyo != 0 && v["tiempo_superyo_c"] == 1){
                                if(v["limitante_minimo_superyo"] != 1 &&  v["limitante_maximo_superyo"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": (total_superyo + v["constante_del_superyo_c"]) / cur_frm.doc.duracion
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion  > v["minimo_superyo"] && v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion < v["maximo_superyo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                            "resultado_superyo": "APROBADO"
                                        }
                                    } 
                                });				
                                if(v["limitante_minimo_superyo"] != 1 && v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion < v["maximo_superyo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                            "resultado_superyo": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion  > v["minimo_superyo"] && v["limitante_maximo_superyo"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                            "resultado_superyo": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion  < v["minimo_superyo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo": (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                            "resultado_superyo": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_superyo"] == 1 && (total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion  > v["maximo_superyo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo":(total_superyo + v["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                            "resultado_superyo": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_ello != 0 && v["tiempo_ello_c"] != 1){
                                if(v["limitante_minimo_ello"] != 1 && v["limitante_maximo_ello"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": total_ello +  v["constante_del_ello_c"]
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) > v["minimo_ello"] && v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) < v["maximo_ello"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": total_ello +  v["constante_del_ello_c"],
                                            "resultado_ello": "APROBADO"
                                        }
                                    } 
                                });				
                                if(v["limitante_minimo_ello"] != 1 && v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) < v["maximo_ello"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": total_ello +  v["constante_del_ello_c"],
                                            "resultado_ello": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) > v["minimo_ello"] && v["limitante_maximo_ello"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": total_ello +  v["constante_del_ello_c"],
                                            "resultado_ello": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) < v["minimo_ello"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": total_ello +  v["constante_del_ello_c"],
                                            "resultado_ello": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) > v["maximo_ello"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": total_ello +  v["constante_del_ello_c"],
                                            "resultado_ello": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_ello != 0 && v["tiempo_ello_c"] == 1){
                                if(v["limitante_minimo_ello"] != 1 && v["limitante_maximo_ello"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion  > v["minimo_ello"] && v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion < v["maximo_ello"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion,
                                            "resultado_ello": "APROBADO"
                                        }
                                    } 
                                });				
                                if(v["limitante_minimo_ello"] != 1 && v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion < v["maximo_ello"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion,
                                            "resultado_ello": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion  > v["minimo_ello"] && v["limitante_maximo_ello"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion,
                                            "resultado_ello": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion  < v["minimo_ello"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion,
                                            "resultado_ello": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_ello"] == 1 && (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion  > v["maximo_ello"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "ello": (total_ello + v["constante_del_ello_c"]) /cur_frm.doc.duracion,
                                            "resultado_ello": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_si_mismo != 0 && v["tiempo_si_mismo_c"] != 1){
                                if(v["limitante_minimo_si_mismo"] != 1 && v["limitante_maximo_si_mismo"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"]
                                        }
                                    } 
                                });	
                                if(v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) > v["minimo_si_mismo"] && v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) < v["maximo_si_mismo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"],
                                            "resultado_si_mismo": "APROBADO"
                                        }
                                    } 
                                });				
                                if(v["limitante_minimo_si_mismo"] != 1 && v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) < v["maximo_si_mismo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"],
                                            "resultado_si_mismo": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) > v["minimo_si_mismo"] && v["limitante_maximo_si_mismo"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"],
                                            "resultado_si_mismo": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) < v["minimo_si_mismo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"],
                                            "resultado_si_mismo": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) > v["maximo_si_mismo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo": total_si_mismo +  v["constante_del_si_mismo_c"],
                                            "resultado_si_mismo": "DESAPROBADO"
                                        }
                                    } 
                                });
                            };
                            if(total_si_mismo != 0 && v["tiempo_si_mismo_c"] == 1){
                                if(v["limitante_minimo_si_mismo"] != 1 && v["limitante_maximo_si_mismo"] != 1)frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo": (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion
                                        }
                                    } 
                                });
                                if(v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > v["minimo_si_mismo"] && v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion < v["maximo_si_mismo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo": (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                                            "resultado_si_mismo": "APROBADO"
                                        }
                                    } 
                                });				
                                if(v["limitante_minimo_si_mismo"] != 1 && v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion < v["maximo_si_mismo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo": (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                                            "resultado_si_mismo": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > v["minimo_si_mismo"] && v["limitante_maximo_si_mismo"] != 1) frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo": (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                                            "resultado_si_mismo": "APROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  < v["minimo_si_mismo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo":  (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                                            "resultado_si_mismo": "DESAPROBADO"
                                        }
                                    } 
                                });
                                if (v["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > v["maximo_si_mismo"])frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "si_mismo":(total_si_mismo + v["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                                            "resultado_si_mismo": "DESAPROBADO"
                                        }
                                    } 
                                })
                            }
                        }
                    })
                }
            })
        )
    })	
    await guardar(tiempo)
}