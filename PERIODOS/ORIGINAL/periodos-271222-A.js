// Iniciar Periodo

frappe.ui.form.on("Periodos", {
	plan_de_periodo: function(frm, cdt, cdn) {
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Protocolos de Periodos", 
				filters: { 
					name: frm.doc.protocolo_de_periodo, 
				},
				fieldname: ["explicacion_inicial"] 
			}, 
			callback: function(r) { 

				cur_frm.set_value("explicacion_inicial", r.message.explicacion_inicial); 
			}
		})
	}
});

frappe.ui.form.on("Periodos", {
	iniciar: function(frm, cdt, cdn) {
      		cur_frm.set_value("estado", "INICIADO");
      		cur_frm.set_value("inicio", frappe.datetime.now_datetime());
		cur_frm.save();
		setTimeout(()=>{
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Protocolos de Psicotecnicos en Protocolos de Periodos",
				parent: "Protocolos de Periodos", 
				filters: { 
					parent: frm.doc.protocolo_de_periodo, 
					"idx": "1", 
				},
				fieldname: ["idx", "protocolo_de_psicotecnico"] 
			}, 
			callback: function(r) { 
				frappe.new_doc("Psicotecnicos", {
					"protocolo_de_psicotecnico": r.message.protocolo_de_psicotecnico,
					"periodo": frm.doc.name,
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

				})
			}
		})
   		}, 1000);
	}
});


//// Finalizar Periodo


/// Paso n°1: Chequear si esta completo

frappe.ui.form.on("Periodos", {
	paso_1: function(frm, cdt, cdn) {

		cur_frm.set_value("cuenta", frm.doc.owner);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		cur_frm.set_value("inicio", frm.doc.creation);

		if(frm.doc.finalizacion == "CUMPLIMIENTO"){

		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Protocolos de Psicotecnicos en Protocolos de Periodos",
				parent: "Protocolos de Periodos",
				filters: { 
					parent: frm.doc.protocolo_de_periodo,
					idx: frm.doc.psicotecnicos, 
				},
				fieldname: ["protocolo_de_psicotecnico"] 
			}, 
			callback: function(r) {
				frappe.call({ 
					method:"frappe.client.get_value", 
					args: { 
						doctype: "Psicotecnicos",
						filters: { 
							periodo: frm.doc.name,
 							protocolo_de_psicotecnico: r.message.protocolo_de_psicotecnico,
						},


						fieldname: ["estado", "fin"] 
					}, 
					callback: function(t) {
						cur_frm.set_value("fin", t.message.fin);
						if(t.message.estado == "FINALIZADO")cur_frm.set_value("estado", "FINALIZADO");
					}
        			}); 
			} 
		})
		};
		if(frm.doc.finalizacion == "DURACION"){
			cur_frm.set_value("fin", frappe.datetime.add_months(frm.doc.inicio, parseInt(frm.doc.meses)));
			if(frm.doc.fin < frappe.datetime.now_datetime())cur_frm.set_value("estado", "FINALIZADO");

		}
	}
});


/// Paso n°2: Traer Psicotecnicos

frappe.ui.form.on("Periodos", {
	paso_2: function(frm, cdt, cdn) {

		if(frm.doc.estado == "FINALIZADO"){

		cur_frm.clear_table("table_23");
		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Psicotecnicos",
				filters: { 
					periodo: frm.doc.name, 
				},
				order_by: "idx asc", 
				limit_page_length: 999, 
				fields: ["name", "persona", "descripcion", "estado", "inicio", "fin", "parametros", "rasgos_limitantes", "parametros_limitantes_totales", "rasgos_desaprobados", "parametros_desaprobados", "resultado"] 
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {
        				var n = frappe.model.add_child(frm.doc, "Psicotecnicos en Periodos", "table_23");
					n.psicotecnico = v["name"];
					n.persona = v["persona"];
					n.estado = v["estado"];
					n.inicio = v["inicio"];
					n.fin = v["fin"];

					n.parametros = v["parametros"];
					n.rasgos_limitantes = v["rasgos_limitantes"]; 
					n.parametros_limitantes_totales = v["parametros_limitantes_totales"]; 
					n.rasgos_desaprobados = v["rasgos_desaprobados"]; 
					n.parametros_desaprobados = v["parametros_desaprobados"]; 
					n.resultado = v["resultado"]

        			}); 
					var total_parametros = 0;
					var total_rasgos_limitantes = 0;
					var total_parametros_limitantes_totales = 0;
					var total_rasgos_desaprobados = 0;
					var total_parametros_desaprobados = 0; 

				$.each(r.message, function(i, row) {


					total_parametros += row.parametros;
					total_rasgos_limitantes += row.rasgos_limitantes;
					total_parametros_limitantes_totales += row.parametros_limitantes_totales;
					total_rasgos_desaprobados += row.rasgos_desaprobados;
					total_parametros_desaprobados += row.parametros_desaprobados;
				});

				cur_frm.set_value("psicotecnicos_realizados", r.message.length);

				cur_frm.set_value("parametros", total_parametros);
				cur_frm.set_value("rasgos_limitantes", total_rasgos_limitantes);
				cur_frm.set_value("parametros_limitantes_totales", total_parametros_limitantes_totales);
				cur_frm.set_value("rasgos_desaprobados", total_rasgos_desaprobados);
				cur_frm.set_value("parametros_desaprobados", total_parametros_desaprobados);

				if(total_parametros_desaprobados > 0) cur_frm.set_value("resultado", "DESAPROBADO");
				if(total_parametros_desaprobados > 0) cur_frm.set_value("explicacion_final_completa", frm.doc.explicacion_final + "El mismo ha sido DESAPROBADO.");
				if(total_parametros_desaprobados == 0) cur_frm.set_value("resultado", "APROBADO");
				if(total_parametros_desaprobados == 0) cur_frm.set_value("explicacion_final_completa", frm.doc.explicacion_final + "El mismo ha sido APROBADO.");

				refresh_field("table_23");
			} 
		})
		}
	}
});




/// Paso n°3: Traer Evaluaciones

frappe.ui.form.on("Periodos", {
	paso_3: function(frm, cdt, cdn) {

		if(frm.doc.estado == "FINALIZADO"){

		cur_frm.clear_table("table_25");
		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					periodo: frm.doc.name, 
				},
				order_by: "idx asc", 
				limit_page_length: 999, 
				fields: ["name", "psicotecnico", "persona", "descripcion", "estado", "inicio", "fin"] 
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {
        				var n = frappe.model.add_child(frm.doc, "Evaluaciones en Periodos", "table_25");
					n.psicotecnico = v["psicotecnico"];
					n.evaluacion = v["name"];
					n.persona = v["persona"];
					n.estado = v["estado"];
					n.inicio = v["inicio"];
					n.fin = v["fin"];

        			});
				cur_frm.set_value("evaluaciones", r.message.length);
				refresh_field("table_25");
			} 
		})
		}
	}
});


/// Paso n°4: Traer Rasgos Indirectos del Psicotecnico

frappe.ui.form.on("Periodos", {

	paso_4: function(frm, cdt, cdn) {

		if(frm.doc.estado == "FINALIZADO"){

		cur_frm.clear_table("table_27");
		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					periodo: frm.doc.name, 
					"tipo_de_rasgo": "INDIRECTO - PSICOTECNICO",
				},
				limit_page_length: 999,
				order_by: "creation asc",
				fields: ["name", "nombre", "tipo_de_variable", "descripcion", "superyo", "ello", "si_mismo", "limitante_minimo_superyo", "limitante_maximo_superyo", "minimo_superyo", "maximo_superyo", "limitante_minimo_ello", "limitante_maximo_ello", "minimo_ello", "maximo_ello", "limitante_minimo_si_mismo", "limitante_maximo_si_mismo", "minimo_si_mismo", "maximo_si_mismo", "limitante_minimo_desajuste_su_el", "limitante_maximo_desajuste_su_el", "minimo_desajuste_su_el", "maximo_desajuste_su_el", "limitante_minimo_desajuste_si_el", "limitante_maximo_desajuste_si_el", "minimo_desajuste_si_el", "maximo_desajuste_si_el", "limitante_minimo_desajuste_si_su", "limitante_maximo_desajuste_si_su", "minimo_desajuste_si_su", "maximo_desajuste_si_su", "resultado_superyo", "resultado_ello", "resultado_si_mismo", "valor_desajuste_si_su", "valor_desajuste_si_el", "valor_desajuste_su_el", "resultado_desajuste_si_su", "resultado_desajuste_si_el", "resultado_desajuste_su_el", "dimensiones", "desajustes", "parametros", "resultado", "parametros_desaprobados", "parametros_limitantes_totales"] 
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {

        				var n = frappe.model.add_child(frm.doc, "Rasgos Indirectos en Psicotecnicos", "table_27");	

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
 				cur_frm.set_value("rasgos_indirectos_de_psicotecnicos", r.message.length);
				refresh_field("table_27");
			} 
		})
		}
	}
});


/// Paso n°5: Crear rasgos Indirectos del Periodo

frappe.ui.form.on("Periodos", {
	paso_5: function(frm, cdt, cdn) {

		if(frm.doc.estado == "FINALIZADO"){

		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos Indirectos del Protocolo de Periodo",
				parent: "Protocolos de Periodos", 
				filters: { 
					parent: frm.doc.protocolo_de_periodo, 
				},
				order_by: "idx asc", 
				limit_page_length: 500,
				fields: ["rasgo", "nombre", "tipo_de_variable", "desarrollo", "descripcion"] 
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {
					frappe.call({ 
						method:"frappe.client.insert", 
						args: { 
							doc: {
								"doctype": "Rasgos de Personas", 
								"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
								"periodo": frm.doc.name,
								"plan_de_periodo": frm.doc.plan_de_periodo,

								"cuenta": frm.doc.cuenta,
								"persona": frm.doc.persona,
								"cuenta_analizo": frappe.session.user,

								"estado": "REALIZADO",

								"inicio": frm.doc.inicio,
								"fin": frm.doc.fin,

								"tipo_de_rasgo": "INDIRECTO - PERIODO",
								"desarrollo": v["desarrollo"],

								"nombre": v["nombre"],
								"tipo_de_variable": v["tipo_de_variable"],
								"descripcion": v["descripcion"],

							}
						} 
					});
				});
			} 
		})
		}
	}
});

/// Paso n°6: Calcular rasgos Directos del Psicotecnico

// Superyo

frappe.ui.form.on("Periodos", {
	paso_6: function(frm, cdt, cdn) {

		if(frm.doc.estado == "FINALIZADO"){

		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					periodo: frm.doc.name, 
					tipo_de_rasgo: "INDIRECTO - PERIODO",
				},
				limit_page_length: 999,
				order_by: "n_pregunta asc",
				fields: ["name", "nombre", "desarrollo"] 
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {
					var total_superyo = 0;
					var n_superyo = 0; 
					frappe.call({ 
						method:"frappe.client.get_list", 
						args: { 
							doctype: "Rasgos de Personas",
							filters: { 
								periodo: frm.doc.name, 
								tipo_de_rasgo: "INDIRECTO - PSICOTECNICO",
								superyo: [">", 0], 
								nombre: v["nombre"], 
							},
							limit_page_length: 999,
							order_by: "n_pregunta asc", 
							fields: ["superyo"] 
						}, 
						callback: function(t) {
							
							$.each(t.message, function(i, row) {
								
		
								total_superyo += row.superyo;
							});

							
							n_superyo = t.message.length;

							if(v["desarrollo"] == "VINCULAR" || v["desarrollo"] == "INTELECTUAL" || v["desarrollo"] == "SALUD")frappe.call({ 
								method:"frappe.client.set_value", 
								args: { 
									"doctype": "Rasgos de Personas", 
									"name": v["name"],
									"fieldname": {
										"superyo":  total_superyo / n_superyo
									}
								} 
							});

							if(v["desarrollo"] == "PROFESIONAL")frappe.call({ 
								method:"frappe.client.set_value", 
								args: { 
									"doctype": "Rasgos de Personas", 
									"name": v["name"],
									"fieldname": {
										"superyo":  total_superyo
									}
								} 
							});
    						}
     					})
     				})
			}
     		})
     		}

	}
});

// Ello

frappe.ui.form.on("Periodos", {
	paso_6: function(frm, cdt, cdn) {

		if(frm.doc.estado == "FINALIZADO"){

		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					periodo: frm.doc.name, 
					tipo_de_rasgo: "INDIRECTO - PERIODO",
				},
				limit_page_length: 999,
				order_by: "n_pregunta asc",
				fields: ["name", "nombre", "desarrollo"] 
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {
					var total_ello = 0;
					var n_ello = 0; 
					frappe.call({ 
						method:"frappe.client.get_list", 
						args: { 
							doctype: "Rasgos de Personas",
							filters: { 
								periodo: frm.doc.name, 
								tipo_de_rasgo: "INDIRECTO - PSICOTECNICO",
								ello: [">", 0], 
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

							if(v["desarrollo"] == "VINCULAR" || v["desarrollo"] == "INTELECTUAL" || v["desarrollo"] == "SALUD")frappe.call({ 
								method:"frappe.client.set_value", 
								args: { 
									"doctype": "Rasgos de Personas", 
									"name": v["name"],
									"fieldname": {
										"ello": total_ello / n_ello
									}
								} 
							});

							if(v["desarrollo"] == "PROFESIONAL")frappe.call({ 
								method:"frappe.client.set_value", 
								args: { 
									"doctype": "Rasgos de Personas", 
									"name": v["name"],
									"fieldname": {
										"ello":  total_ello
									}
								} 
							});
    						}
     					})
     				})
			}
     		})
     		}

	}
});


// Si-Mismo

frappe.ui.form.on("Periodos", {
	paso_6: function(frm, cdt, cdn) {

		if(frm.doc.estado == "FINALIZADO"){

		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					periodo: frm.doc.name, 
					tipo_de_rasgo: "INDIRECTO - PERIODO",
				},
				limit_page_length: 999,
				order_by: "n_pregunta asc",
				fields: ["name", "nombre", "desarrollo"] 
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {
					var total_si_mismo = 0;
					var n_si_mismo = 0; 
					frappe.call({ 
						method:"frappe.client.get_list", 
						args: { 
							doctype: "Rasgos de Personas",
							filters: { 
								periodo: frm.doc.name, 
								tipo_de_rasgo: "INDIRECTO - PSICOTECNICO",
								superyo: [">", 0], 
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

							if(v["desarrollo"] == "VINCULAR" || v["desarrollo"] == "INTELECTUAL" || v["desarrollo"] == "SALUD")frappe.call({ 
								method:"frappe.client.set_value", 
								args: { 
									"doctype": "Rasgos de Personas", 
									"name": v["name"],
									"fieldname": {
										"si_mismo":  total_si_mismo / n_si_mismo
									}
								} 
							});

							if(v["desarrollo"] == "PROFESIONAL")frappe.call({ 
								method:"frappe.client.set_value", 
								args: { 
									"doctype": "Rasgos de Personas", 
									"name": v["name"],
									"fieldname": {
										"si_mismo":  total_si_mismo
									}
								} 
							});
    						}
     					})
     				})
			}
     		})
     		}

	}
});

/// Paso n°7: Calcular desajustes

frappe.ui.form.on("Periodos", {

	paso_7: function(frm, cdt, cdn) {

		if(frm.doc.estado == "FINALIZADO"){

		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					periodo: frm.doc.name, 
					tipo_de_rasgo: "INDIRECTO - PERIODO",
				},
				limit_page_length: 999,
				order_by: "n_pregunta asc",
				fields: ["name", "nombre", "desarrollo", "superyo", "ello", "si_mismo"] 
			}, 
			callback: function(r) {
				r.message.forEach(function(v) {
					if(v["superyo"] > 0 && v["ello"] > 0 && v["si_mismo"] > 0)frappe.call({ 
						method:"frappe.client.set_value", 
						args: { 
							"doctype": "Rasgos de Personas", 
							"name": v["name"],
							"fieldname": {
								"valor_desajuste_si_su":  v["si_mismo"] - v["superyo"],
								"valor_desajuste_si_el":  v["si_mismo"] - v["ello"],
								"valor_desajuste_su_el":  v["superyo"] - v["ello"],
							}
						} 
					});

					if(v["superyo"] > 0 && v["ello"] > 0 && v["si_mismo"] == 0)frappe.call({ 
						method:"frappe.client.set_value", 
						args: { 
							"doctype": "Rasgos de Personas", 
							"name": v["name"],
							"fieldname": {
								"valor_desajuste_su_el":  v["superyo"] - v["ello"],
							}
						} 
					});

					if(v["superyo"] > 0 && v["ello"] == 0 && v["si_mismo"] > 0)frappe.call({ 
						method:"frappe.client.set_value", 
						args: { 
							"doctype": "Rasgos de Personas", 
							"name": v["name"],
							"fieldname": {
								"valor_desajuste_si_su":  v["si_mismo"] - v["superyo"],
							}
						} 
					});

					if(v["superyo"] == 0 && v["ello"] > 0 && v["si_mismo"] > 0)frappe.call({ 
						method:"frappe.client.set_value", 
						args: { 
							"doctype": "Rasgos de Personas", 
							"name": v["name"],
							"fieldname": {
								"valor_desajuste_si_el":  v["si_mismo"] - v["ello"],
							}
						} 
					});
				});
			}
     		})
     		}

	}
});

/// Paso n°8: Traer Rasgos Indirectos del Periodo

frappe.ui.form.on("Periodos", {

	paso_8: function(frm, cdt, cdn) {

		if(frm.doc.estado == "FINALIZADO"){

		cur_frm.clear_table("table_30");
		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					periodo: frm.doc.name, 

					tipo_de_rasgo: "INDIRECTO - PERIODO", 
				},
				limit_page_length: 999, 
				fields: ["name", "nombre", "tipo_de_variable", "descripcion", "desarrollo", "superyo", "ello", "si_mismo", "valor_desajuste_si_su", "valor_desajuste_si_el", "valor_desajuste_su_el"]
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {
        				var n = frappe.model.add_child(frm.doc, "Rasgos Indirectos en Periodos", "table_30");	

					n.rasgo = v["name"];
					n.nombre = v["nombre"];
					n.tipo_de_variable = v["tipo_de_variable"];
					n.desarrollo = v["desarrollo"];
					n.descripcion = v["descripcion"];
					n.superyo = v["superyo"];
					n.ello = v["ello"];
					n.si_mismo = v["si_mismo"];

					n.valor_desajuste_si_su = v["valor_desajuste_si_su"];
					n.valor_desajuste_si_el = v["valor_desajuste_si_el"];
					n.valor_desajuste_su_el = v["valor_desajuste_su_el"];


        			}); 
 				cur_frm.set_value("rasgos_indirectos_del_periodo", r.message.length);
				refresh_field("table_30");
			} 
		})
		}
	}
});

