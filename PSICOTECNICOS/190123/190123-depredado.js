// CN: PASO 12
async function paso_12(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 12 INICIADO')
                }),
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
						r.message.forEach(function(v) {
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
     					})
                        frappe.msgprint({
                            title: __('Notificacion'),
                            indicator: 'green',
                            message: __('PASO 12 TERMINADO')
                        }); 
					}
     			})
        	)
        }	
    })
    await guardar(tiempo)
}

// CN: PASO 13
async function paso_13(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 13 INICIADO')
                }),
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
						fields: ["name", "superyo", "ello", "si_mismo", "limitante_minimo_superyo", "limitante_maximo_superyo", "limitante_minimo_ello", "limitante_maximo_ello", "limitante_minimo_si_mismo", "limitante_maximo_si_mismo", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "limitante_minimo_desajuste_su_el", "limitante_maximo_desajuste_su_el"] 
					}, 
					callback: function(r) { 
						r.message.forEach(function(v) {
							var superyo_limitante = 0;
							if(v["limitante_minimo_superyo"]) {superyo_limitante = 1};
							if(v["limitante_maximo_superyo"]) {superyo_limitante = 1};
							var ello_limitante = 0;
							if(v["limitante_minimo_ello"]) {ello_limitante = 1};
							if(v["limitante_maximo_ello"]){ ello_limitante = 1};
							var si_mismo_limitante = 0;
							if(v["limitante_minimo_si_mismo"]){ si_mismo_limitante = 1};
							if(v["limitante_maximo_si_mismo"]){ si_mismo_limitante = 1};
							var si_su_limitante = 0;
							if(v["limitante_minimo_desajuste_si_su"]){ si_su_limitante = 1};
							if(v["limitante_maximo_desajuste_si_su"]){ si_su_limitante = 1};
							var si_el_limitante = 0;
							if(v["limitante_minimo_desajuste_si_el"]){ si_el_limitante = 1};
							if(v["limitante_maximo_desajuste_si_el"]){ si_el_limitante = 1};
							var su_el_limitante = 0;
							if(v["limitante_minimo_desajuste_su_el"]){ su_el_limitante = 1};
							if(v["limitante_maximo_desajuste_su_el"]){ su_el_limitante = 1};
							frappe.call({ 
								method:"frappe.client.set_value", 
								args: { 
									"doctype": "Rasgos de Personas", 
									"name": v["name"],
									"fieldname": {
											"parametros_limitantes_totales": superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante
									}
								} 
							})
		     			})
                        frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 13 TERMINADO')
						});
					}
     			})
        	)
        }	
    })
    await guardar(tiempo)
}

// CN: PASO 14
async function paso_14(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 14 INICIADO')
                }),
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
						fields: ["name", "superyo", "ello", "si_mismo"] 
					}, 
					callback: function(r) { 
						r.message.forEach(function(v) {
							if(v["superyo"] > 0 && v["ello"] > 0 && v["si_mismo"] > 0){
								frappe.call({ 
									method:"frappe.client.set_value", 
									args: { 
										"doctype": "Rasgos de Personas", 
										"name": v["name"],
										"fieldname": {
											"dimensiones": 3,
											"desajustes": 3,
											"parametros": 6
										}
									} 
								});
							};
							if(v["superyo"] > 0 && v["ello"] == 0 && v["si_mismo"] > 0){
								frappe.call({ 
									method:"frappe.client.set_value", 
									args: { 
										"doctype": "Rasgos de Personas", 
										"name": v["name"],
										"fieldname": {
											"dimensiones": 2,
											"desajustes": 2,
											"parametros": 4  
										}
									} 
								});
							};
							if(v["superyo"] > 0 && v["ello"] > 0 && v["si_mismo"] == 0){
								frappe.call({ 
									method:"frappe.client.set_value", 
									args: { 
										"doctype": "Rasgos de Personas", 
										"name": v["name"],
										"fieldname": {
											"dimensiones": 2,
											"desajustes": 2,
											"parametros": 4  
										}
									} 
								});
							};
							if(v["superyo"] > 0 && v["ello"] == 0 && v["si_mismo"] == 0){
								frappe.call({ 
									method:"frappe.client.set_value", 
									args: { 
										"doctype": "Rasgos de Personas", 
										"name": v["name"],
										"fieldname": {
											"dimensiones": 1,
											"parametros": 1  
										}
									} 
								});
							};
							if(v["superyo"] == 0 && v["ello"] > 0 && v["si_mismo"] == 0){
								frappe.call({ 
									method:"frappe.client.set_value", 
									args: { 
										"doctype": "Rasgos de Personas", 
										"name": v["name"],
										"fieldname": {
											"dimensiones": 1,
											"parametros": 1  
										}
									} 
								});
							};
							if(v["superyo"] == 0 && v["ello"] == 0 && v["si_mismo"] > 0){
								frappe.call({ 
									method:"frappe.client.set_value", 
									args: { 
										"doctype": "Rasgos de Personas", 
										"name": v["name"],
										"fieldname": {
											"dimensiones": 1,
											"parametros": 1  
										}
									} 
								});
							};
		     			})
                         frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 14 TERMINADO')
						});
					}
     			})
        	)
        }	
    })
    await guardar(tiempo)
}

// CN: PASO 15
async function paso_15(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 15 INICIADO')
                }),
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
						r.message.forEach(function(v) {
							var superyo_limitante = 0;
							if(v["resultado_superyo"] == "DESAPROBADO"){superyo_limitante = 1};
							var ello_limitante = 0;
							if(v["resultado_ello"] == "DESAPROBADO"){ello_limitante = 1};
							var si_mismo_limitante = 0;
							if(v["resultado_si_mismo"] == "DESAPROBADO"){ si_mismo_limitante = 1};
							var si_su_limitante = 0;
							if(v["resultado_desajuste_si_su"]){ si_su_limitante = 1};
							var si_el_limitante = 0;
							if(v["resultado_desajuste_si_el"]){ si_el_limitante = 1};
							var su_el_limitante = 0;
							if(v["resultado_desajuste_su_el"]){ su_el_limitante = 1};
							frappe.call({ 
								method:"frappe.client.set_value", 
								args: { 
									"doctype": "Rasgos de Personas", 
									"name": v["name"],
									"fieldname": {
										"parametros_desaprobados": superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante

									}
								} 
							})
		     			})
                         frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 15 TERMINADO')
						});
					}
     			})	
        	)
        }	
    })
    await guardar(tiempo)
}

// CN: PASO 16
async function paso_16(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 16 INICIADO')
                }),
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
						r.message.forEach(function(v) {
							var superyo_limitante = 0;
							if(v["resultado_superyo"] == "DESAPROBADO"){superyo_limitante = 1};
							var ello_limitante = 0;
							if(v["resultado_ello"] == "DESAPROBADO"){ello_limitante = 1};
							var si_mismo_limitante = 0;
							if(v["resultado_si_mismo"] == "DESAPROBADO"){ si_mismo_limitante = 1};
							var si_su_limitante = 0;
							if(v["resultado_desajuste_si_su"]){ si_su_limitante = 1};
							var si_el_limitante = 0;
							if(v["resultado_desajuste_si_el"]){ si_el_limitante = 1};
							var su_el_limitante = 0;
							if(v["resultado_desajuste_su_el"]){ su_el_limitante = 1};
							if(v["parametros_limitantes_totales"] > 0 && (superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante) > 0){
								frappe.call({ 
									method:"frappe.client.set_value", 
									args: { 
										"doctype": "Rasgos de Personas", 
										"name": v["name"],
										"fieldname": {
											"resultado": "DESAPROBADO"
										}
									} 
								});
							};
							if(v["parametros_limitantes_totales"] > 0 && (superyo_limitante + ello_limitante + si_mismo_limitante + si_su_limitante + si_el_limitante + su_el_limitante) == 0){
								frappe.call({ 
									method:"frappe.client.set_value", 
									args: { 
										"doctype": "Rasgos de Personas", 
										"name": v["name"],
										"fieldname": {
											"resultado": "APROBADO"
										}
									} 
								});
							};
		     			})
                        frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 16 TERMINADO')
						});
					}
     			})
        	)
        }
    })
    await guardar(tiempo)
}

// CN: PASO 17
async function paso_17(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 17 INICIADO')
                }),
        		cur_frm.clear_table("table_166"),
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas",
						filters: { 
							psicotecnico: cur_frm.doc.name, 
							"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
						},
						limit_page_length: 999,
						order_by: "n_pregunta asc",
						fields: ["name", "nombre", "tipo_de_variable", "descripcion", "superyo", "ello", "si_mismo", "limitante_minimo_superyo", "limitante_maximo_superyo", "minimo_superyo", "maximo_superyo", "limitante_minimo_ello", "limitante_maximo_ello", "minimo_ello", "maximo_ello", "limitante_minimo_si_mismo", "limitante_maximo_si_mismo", "minimo_si_mismo", "maximo_si_mismo", "limitante_minimo_desajuste_su_el", "limitante_maximo_desajuste_su_el", "minimo_desajuste_su_el", "maximo_desajuste_su_el", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "minimo_desajuste_si_el", "maximo_desajuste_si_el", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "minimo_desajuste_si_su", "maximo_desajuste_si_su", "resultado_superyo", "resultado_ello", "resultado_si_mismo", "valor_desajuste_si_su", "valor_desajuste_si_el", "valor_desajuste_su_el", "resultado_desajuste_si_su", "resultado_desajuste_si_el", "resultado_desajuste_su_el", "dimensiones", "desajustes", "parametros", "resultado", "parametros_desaprobados", "parametros_limitantes_totales"] 
					}, 
					callback: function(r) { 
						r.message.forEach(function(v) {
	        				var n = frappe.model.add_child(cur_frm.doc, "Rasgos Indirectos en Psicotecnicos", "table_166");	
							n.rasgo = v["name"];
							n.nombre = v["nombre"];
							n.tipo_de_variable = v["tipo_de_variable"];
							n.descripcion = v["descripcion"];
							n.superyo = v["superyo"];
							n.ello = v["ello"];
							n.si_mismo = v["si_mismo"];
							n.limitante_minimo_superyo = v["limitante_minimo_superyo"];
							n.limitante_maximo_superyo = v["limitante_maximo_superyo"];
							n.minimo_superyo = v["minimo_superyo"];
							n.maximo_superyo = v["maximo_superyo"];
							n.limitante_minimo_ello = v["limitante_minimo_ello"];
							n.limitante_maximo_ello = v["limitante_maximo_ello"];
							n.minimo_ello = v["minimo_ello"];
							n.maximo_ello = v["maximo_ello"];
							n.limitante_minimo_si_mismo = v["limitante_minimo_si_mismo"];
							n.limitante_maximo_si_mismo = v["limitante_maximo_si_mismo"];
							n.minimo_si_mismo = v["minimo_si_mismo"];
							n.maximo_si_mismo = v["maximo_si_mismo"];
							n.limitante_minimo_desajuste_su_el = v["limitante_minimo_desajuste_su_el"];
							n.limitante_maximo_desajuste_su_el = v["limitante_maximo_desajuste_su_el"];
							n.minimo_desajuste_su_el = v["minimo_desajuste_su_el"];
							n.maximo_desajuste_su_el = v["maximo_desajuste_su_el"];
							n.limitante_minimo_desajuste_si_el = v["limitante_minimo_desajuste_si_el"];
							n.limitante_maximo_desajuste_si_el = v["limitante_maximo_desajuste_si_el"];
							n.minimo_desajuste_si_el = v["minimo_desajuste_si_el"];
							n.maximo_desajuste_si_el = v["maximo_desajuste_si_el"];
							n.limitante_minimo_desajuste_si_su = v["limitante_minimo_desajuste_si_su"];
							n.limitante_maximo_desajuste_si_su = v["limitante_maximo_desajuste_si_su"];
							n.minimo_desajuste_si_su = v["minimo_desajuste_si_su"];
							n.maximo_desajuste_si_su = v["maximo_desajuste_si_su"];
							n.resultado_superyo = v["resultado_superyo"];
							n.resultado_ello = v["resultado_ello"];
							n.resultado_si_mismo = v["resultado_si_mismo"];
							n.valor_desajuste_si_su = v["valor_desajuste_si_su"];
							n.valor_desajuste_si_el = v["valor_desajuste_si_el"];
							n.valor_desajuste_su_el = v["valor_desajuste_su_el"];
							n.resultado_desajuste_si_su = v["resultado_desajuste_si_su"];
							n.resultado_desajuste_si_el = v["resultado_desajuste_si_el"];
							n.resultado_desajuste_su_el = v["resultado_desajuste_su_el"];
							n.dimensiones = v["dimensiones"];
							n.desajustes = v["desajustes"];
							n.parametros = v["parametros"];
							n.resultado = v["resultado"];
							n.parametros_limitantes_totales = v["parametros_limitantes_totales"];
							n.parametros_desaprobados = v["parametros_desaprobados"];
		        		}); 
						refresh_field("table_166");
						frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 17 TERMINADO')
						});
					} 
				})
        	)
        }	
    })
    await guardar(tiempo)
}

// CN: PASO 18
async function paso_18(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 18 INICIADO')
                }),
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas",
						filters: { 
							psicotecnico: cur_frm.doc.name, 
							"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
						},
						limit_page_length: 999,
						order_by: "n_pregunta asc",
						fields: ["name", "nombre", "tipo_de_variable", "descripcion", "superyo", "ello", "si_mismo", "limitante_minimo_superyo", "limitante_maximo_superyo", "minimo_superyo", "maximo_superyo", "limitante_minimo_ello", "limitante_maximo_ello", "minimo_ello", "maximo_ello", "limitante_minimo_si_mismo", "limitante_maximo_si_mismo", "minimo_si_mismo", "maximo_si_mismo", "limitante_minimo_desajuste_su_el", "limitante_maximo_desajuste_su_el", "minimo_desajuste_su_el", "maximo_desajuste_su_el", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "minimo_desajuste_si_el", "maximo_desajuste_si_el", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "minimo_desajuste_si_su", "maximo_desajuste_si_su", "resultado_superyo", "resultado_ello", "resultado_si_mismo", "valor_desajuste_si_su", "valor_desajuste_si_el", "valor_desajuste_su_el", "resultado_desajuste_si_su", "resultado_desajuste_si_el", "resultado_desajuste_su_el", "dimensiones", "desajustes", "parametros", "resultado", "parametros_desaprobados", "parametros_limitantes_totales"] 
					}, 
					callback: function(r) { 
						var total_parametros = 0;
						var total_parametros_limitantes_totales = 0; 
						var total_parametros_desaprobados = 0; 
						$.each(r.message, function(i, row) {
							total_parametros += row.parametros;
							total_parametros_limitantes_totales += row.parametros_limitantes_totales;
							total_parametros_desaprobados += row.parametros_desaprobados;
						});
						cur_frm.set_value("parametros", total_parametros);
						cur_frm.set_value("parametros_limitantes_totales", total_parametros_limitantes_totales);
						cur_frm.set_value("parametros_desaprobados", total_parametros_desaprobados);
						if(total_parametros_desaprobados > 0) cur_frm.set_value("resultado", "DESAPROBADO");
						if(total_parametros_desaprobados > 0) cur_frm.set_value("explicacion_final_completa", cur_frm.doc.explicacion_final + "El mismo ha sido DESAPROBADO.");
						if(total_parametros_desaprobados == 0) cur_frm.set_value("resultado", "APROBADO");
						if(total_parametros_desaprobados == 0) cur_frm.set_value("explicacion_final_completa", cur_frm.doc.explicacion_final + "El mismo ha sido APROBADO.");
						frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 18 TERMINADO')
						});
					}
				})
        	)
        }	
    })
    await guardar(tiempo)
}

// CN: PASO 19
async function paso_19(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 19 INICIADO')
                }),
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas",
						filters: { 
							psicotecnico: cur_frm.doc.name, 
							"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
							"parametros_limitantes_totales": [">", 0]
						},
						limit_page_length: 999,
						order_by: "n_pregunta asc",
						fields: ["name"] 
					}, 
					callback: function(r) { 
						cur_frm.set_value("rasgos_limitantes", r.message.length);
                        frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 19 TERMINADO')
						});
					} 
				})
        	)
        }	
    })
    await guardar(tiempo)
}

// CN: PASO 20
async function paso_20(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                frappe.msgprint({
                    title: __('Notificacion'),
                    indicator: 'green',
                    message: __('PASO 20 INICIADO')
                }),
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas",
						filters: { 
							psicotecnico: cur_frm.doc.name, 
							"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
							"resultado": "DESAPROBADO"
						},
						limit_page_length: 999,
						order_by: "n_pregunta asc",
						fields: ["name"] 
					}, 
					callback: function(r) { 
						cur_frm.set_value("rasgos_desaprobados", r.message.length);
						frappe.msgprint({
							title: __('Notificacion'),
							indicator: 'green',
							message: __('PASO 20 TERMINADO')
						});
					} 
				})
        	)
        }	
    })
    await guardar(tiempo)
}
