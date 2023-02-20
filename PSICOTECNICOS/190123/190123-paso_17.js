let paso17_indPsicotecnico = []

async function paso_17a(tiempo) {
    await new Promise(resolve => {
    	resolve(
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
					paso17_indPsicotecnico = r.message
				}
			})
		)
	})
	await guardar(tiempo)
}

async function paso_17b(tiempo) {
    await new Promise(resolve => {
    	resolve(
			paso17_indPsicotecnico.forEach(function(v){
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
			}),
			refresh_field("table_166");
		)
	})
	await guardar(tiempo)
}