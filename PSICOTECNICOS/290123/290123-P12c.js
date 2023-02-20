async function paso_12d(tiempo){
    for(let i = 0; i < paso_12indirectoPsicotecnicoB.length; i++){
        await new Promise(resolve => {
            var total_superyo = 0;
            var total_ello = 0; 
            var total_si_mismo = 0;
            resolve(
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        psicotecnico: cur_frm.doc.name, 
                        tipo_de_rasgo: "DIRECTO - COEFICIENTE",
                        rasgo_dependiente: paso_12indirectoPsicotecnicoB[i]["name"]
                    },
                    limit_page_length: 999,
                    order_by: "n_pregunta asc", 
                    fields: ["superyo", "ello", "si_mismo"] 
                }, 
                callback: function(t) {
                        total_superyo = 0
                        total_ello = 0
                        total_si_mismo = 0
                        console.log(paso_12indirectoPsicotecnicoB[i]["name"])
                        console.log(paso_12indirectoPsicotecnicoB[i]["nombre"])
                        $.each(t.message, function(i, row) {
                            total_superyo += row.superyo;
                            total_ello += row.ello;
                            total_si_mismo += row.si_mismo;
                        }),
                        console.log(total_superyo)
                        if(total_superyo != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_superyo_c"] != 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_si_mismo_c"] != 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ desajuste_si_su"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ desajuste_si_su"] == 1 && (total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]),
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]),
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]),
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]),
                                        "resultado_desajuste_si_su": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_superyo - paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]),
                                        "resultado_desajuste_si_su": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_superyo != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_superyo_c"] == 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_si_mismo_c"] != 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ desajuste_si_su"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion

                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && (((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"]) && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_su": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion)  > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_si_su": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_superyo != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_superyo_c"] != 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_si_mismo_c"] == 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] != 1 &&  paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]))
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])),
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])),
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])),
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])) < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])),
                                        "resultado_desajuste_si_su": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])) > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])),
                                        "resultado_desajuste_si_su": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_superyo != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_superyo_c"] == 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_si_mismo_c"] == 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion)
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_su": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_su"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_su": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_su"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_su"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_su":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_su": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_ello != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_ello_c"] != 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_si_mismo_c"] != 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])

                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]),
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]),
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]),
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]),
                                        "resultado_desajuste_si_el": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && (total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]),
                                        "resultado_desajuste_si_el": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_ello != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_ello_c"] == 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_si_mismo_c"] != 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion

                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion)  > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion)  < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion)  < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_el": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion)  > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_si_el": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_ello != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_ello_c"] != 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_si_mismo_c"] == 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]))

                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])),
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]))  < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])),
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])),
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])) < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])),
                                        "resultado_desajuste_si_el": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])) > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])),
                                        "resultado_desajuste_si_el": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_ello != 0 && total_si_mismo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_ello_c"] == 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_si_mismo_c"] == 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ desajuste_si_el"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion)
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_si_el"] == 1 && ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_si_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_el": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_si_el"] == 1 && ((total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_si_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_si_el":  ((total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_si_el": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_ello != 0 && total_superyo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_ello_c"] != 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_superyo_c"] != 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]),
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]),
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]),
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"] - total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]),
                                        "resultado_desajuste_su_el": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"] - total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]),
                                        "resultado_desajuste_su_el": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_ello != 0 && total_superyo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_ello_c"] == 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_superyo_c"] != 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion)  > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion)  < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion)  < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_su_el": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion)  > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion,
                                        "resultado_desajuste_su_el": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_ello != 0 && total_superyo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_ello_c"] != 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_superyo_c"] == 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]))
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])),
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]))  < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])),
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])),
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])) < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])),
                                        "resultado_desajuste_su_el": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])) > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])),
                                        "resultado_desajuste_su_el": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_ello != 0 && total_superyo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_ello_c"] == 1 && paso_12indirectoPsicotecnicoB[i]["tiempo_superyo_c"] == 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion)				
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello - paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"]) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_su_el": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) < paso_12indirectoPsicotecnicoB[i]["minimo_desajuste_su_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_su_el": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_desajuste_su_el"] == 1 && ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion) > paso_12indirectoPsicotecnicoB[i]["maximo_desajuste_su_el"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "valor_desajuste_su_el":  ((total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"])/cur_frm.doc.duracion  - (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"])/cur_frm.doc.duracion),
                                        "resultado_desajuste_su_el": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_superyo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_superyo_c"] != 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_superyo"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_superyo"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_superyo"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_superyo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"],
                                        "resultado_superyo": "APROBADO"
                                    }
                                } 
                            });				
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_superyo"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_superyo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"],
                                        "resultado_superyo": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_superyo"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_superyo"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"],
                                        "resultado_superyo": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) < paso_12indirectoPsicotecnicoB[i]["minimo_superyo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"],
                                        "resultado_superyo": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) > paso_12indirectoPsicotecnicoB[i]["maximo_superyo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": total_superyo +  paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"],
                                        "resultado_superyo": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_superyo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_superyo_c"] == 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_superyo"] != 1 &&  paso_12indirectoPsicotecnicoB[i]["limitante_maximo_superyo"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) / cur_frm.doc.duracion
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnicoB[i]["minimo_superyo"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnicoB[i]["maximo_superyo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                        "resultado_superyo": "APROBADO"
                                    }
                                } 
                            });				
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_superyo"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnicoB[i]["maximo_superyo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                        "resultado_superyo": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnicoB[i]["minimo_superyo"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_superyo"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                        "resultado_superyo": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion  < paso_12indirectoPsicotecnicoB[i]["minimo_superyo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo": (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                        "resultado_superyo": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_superyo"] == 1 && (total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnicoB[i]["maximo_superyo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "superyo":(total_superyo + paso_12indirectoPsicotecnicoB[i]["constante_del_superyo_c"]) /cur_frm.doc.duracion,
                                        "resultado_superyo": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_ello != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_ello_c"] != 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_ello"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ello"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": total_ello +  paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_ello"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_ello"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": total_ello +  paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"],
                                        "resultado_ello": "APROBADO"
                                    }
                                } 
                            });				
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_ello"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_ello"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": total_ello +  paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"],
                                        "resultado_ello": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_ello"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ello"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": total_ello +  paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"],
                                        "resultado_ello": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) < paso_12indirectoPsicotecnicoB[i]["minimo_ello"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": total_ello +  paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"],
                                        "resultado_ello": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) > paso_12indirectoPsicotecnicoB[i]["maximo_ello"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": total_ello +  paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"],
                                        "resultado_ello": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_ello != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_ello_c"] == 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_ello"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ello"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnicoB[i]["minimo_ello"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnicoB[i]["maximo_ello"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion,
                                        "resultado_ello": "APROBADO"
                                    }
                                } 
                            });				
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_ello"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnicoB[i]["maximo_ello"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion,
                                        "resultado_ello": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnicoB[i]["minimo_ello"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ello"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion,
                                        "resultado_ello": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion  < paso_12indirectoPsicotecnicoB[i]["minimo_ello"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion,
                                        "resultado_ello": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_ello"] == 1 && (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnicoB[i]["maximo_ello"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "ello": (total_ello + paso_12indirectoPsicotecnicoB[i]["constante_del_ello_c"]) /cur_frm.doc.duracion,
                                        "resultado_ello": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_si_mismo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_si_mismo_c"] != 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_si_mismo"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_si_mismo"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]
                                    }
                                } 
                            });	
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_si_mismo"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_si_mismo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"],
                                        "resultado_si_mismo": "APROBADO"
                                    }
                                } 
                            });				
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_si_mismo"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) < paso_12indirectoPsicotecnicoB[i]["maximo_si_mismo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"],
                                        "resultado_si_mismo": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) > paso_12indirectoPsicotecnicoB[i]["minimo_si_mismo"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_si_mismo"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"],
                                        "resultado_si_mismo": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) < paso_12indirectoPsicotecnicoB[i]["minimo_si_mismo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"],
                                        "resultado_si_mismo": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) > paso_12indirectoPsicotecnicoB[i]["maximo_si_mismo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo": total_si_mismo +  paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"],
                                        "resultado_si_mismo": "DESAPROBADO"
                                    }
                                } 
                            });
                        };
                        if(total_si_mismo != 0 && paso_12indirectoPsicotecnicoB[i]["tiempo_si_mismo_c"] == 1){
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_si_mismo"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_si_mismo"] != 1)frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo": (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion
                                    }
                                } 
                            });
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnicoB[i]["minimo_si_mismo"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnicoB[i]["maximo_si_mismo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo": (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                                        "resultado_si_mismo": "APROBADO"
                                    }
                                } 
                            });				
                            if(paso_12indirectoPsicotecnicoB[i]["limitante_minimo_si_mismo"] != 1 && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion < paso_12indirectoPsicotecnicoB[i]["maximo_si_mismo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo": (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                                        "resultado_si_mismo": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnicoB[i]["minimo_si_mismo"] && paso_12indirectoPsicotecnicoB[i]["limitante_maximo_si_mismo"] != 1) frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo": (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                                        "resultado_si_mismo": "APROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_minimo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  < paso_12indirectoPsicotecnicoB[i]["minimo_si_mismo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo":  (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                                        "resultado_si_mismo": "DESAPROBADO"
                                    }
                                } 
                            });
                            if (paso_12indirectoPsicotecnicoB[i]["limitante_maximo_si_mismo"] == 1 && (total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion  > paso_12indirectoPsicotecnicoB[i]["maximo_si_mismo"])frappe.call({ 
                                method:"frappe.client.set_value", 
                                args: { 
                                    "doctype": "Rasgos de Personas", 
                                    "name": paso_12indirectoPsicotecnicoB[i]["name"],
                                    "fieldname": {
                                        "si_mismo":(total_si_mismo + paso_12indirectoPsicotecnicoB[i]["constante_del_si_mismo_c"]) /cur_frm.doc.duracion,
                                        "resultado_si_mismo": "DESAPROBADO"
                                    }
                                } 
                            })
                        }
                }
            })
            )
        })
        await guardar(tiempo)
    }
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



