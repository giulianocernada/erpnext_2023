async function paso_6(tiempo) {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADA"){
            resolve(
                cur_frm.clear_table("table_20"),
                frappe.call({ 
                    method:"frappe.client.get_list", 
                    args: { 
                        doctype: "Rasgos de Personas",
                        filters: { 
                            evaluacion: cur_frm.doc.name, 
                            tipo_de_rasgo: "RESPUESTA - EVALUACION", 
                        },
                        order_by: "name asc",
                        limit_page_length: 999, 
                        fields: ["idx", "name", "nombre", "desarrollo", "dimension", "tipo_de_variable", "descripcion", "imagen", "respuesta", "valor", "opcion", "opcion_1", "opcion_2", "opcion_3", "opcion_4", "opcion_5", "opcion_6", "opcion_7", "opcion_8", "descripcion_a", "descripcion_b", "descripcion_c", "descripcion_d", "descripcion_e", "descripcion_f", "descripcion_g", "descripcion_h", "opciones"] 
                    }, 
                    callback: function(r) { 
                        r.message.forEach(function(v) {
                            var n = frappe.model.add_child(cur_frm.doc, "Preguntas en Evaluaciones", "table_20");	
                            n.pregunta = v["name"];
                            n.nombre = v["nombre"];
                            n.desarrollo = v["desarrollo"];
                            n.tipo_de_variable = v["tipo_de_variable"];
                            n.dimension = v["dimension"];
                            n.imagen = v["imagen"];
                            n.descripcion = v["descripcion"];
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 8 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"]+ "\n" + "H: " + v["descripcion_h"];
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 8 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"]+ "\n" + "H: " + v["descripcion_h"];
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 8 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"]+ "\n" + "H: " + v["descripcion_h"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 8 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"]+ "\n" + "H: " + v["descripcion_h"];
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 7 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"];
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 7 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"];
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 7 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 7 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"];
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 6 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"];
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 6 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"];
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 6 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 6 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"];
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 5 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"];
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 5 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"];
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 5 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 5 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"];
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 4 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"];
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 4 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"];
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 4 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 4 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"];
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 3 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"];
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 3 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"];
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 3 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 3 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"];
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 2 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"];
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 2 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"];
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 2 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 2 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"];
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 1 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"];
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 1 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"];
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 1 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 1 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"];
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 0 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 0 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 0 && v["descripcion_a"]) n.consigna = v["descripcion"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 0 && v["descripcion_a"]) n.consigna = "";
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 8 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 8 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 8 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 8 && !v["descripcion_a"]) n.consigna = "";
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 7 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 7 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 7 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 7 && !v["descripcion_a"]) n.consigna = "";
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 6 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 6 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 6 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 6 && !v["descripcion_a"]) n.consigna = "";
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 5 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 5 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 5 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 5 && !v["descripcion_a"]) n.consigna = "";
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 4 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 4 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 4 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 4 && !v["descripcion_a"]) n.consigna = "";
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 3 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 3 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 3 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 3 && !v["descripcion_a"]) n.consigna = "";
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 2 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 2 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 2 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 2 && !v["descripcion_a"]) n.consigna = "";
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 1 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 1 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 1 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 1 && !v["descripcion_a"]) n.consigna = "";
                            if(v["descripcion"] && v["imagen"] && v["opciones"] == 0 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                            if(!v["descripcion"] && v["imagen"] && v["opciones"] == 0 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                            if(v["descripcion"] && !v["imagen"] && v["opciones"] == 0 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                            if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 0 && !v["descripcion_a"]) n.consigna = "";
                            n.respuesta = v["respuesta"];
                            n.valor = v["valor"];
                            n.opcion = v["opcion"];
                            n.opcion_1 = v["opcion_1"];
                            n.opcion_2 = v["opcion_2"];
                            n.opcion_3 = v["opcion_3"];
                            n.opcion_4 = v["opcion_4"];
                            n.opcion_5 = v["opcion_5"];
                            n.opcion_6 = v["opcion_6"];
                            n.opcion_7 = v["opcion_7"];
                            n.opcion_8 = v["opcion_8"];
                        }); 
                    refresh_field("table_20");
                    cur_frm.set_value("realizadas", cur_frm.doc.table_20.length);
                    } 
                })
            )
        }
    })
    await guardar(tiempo)
}