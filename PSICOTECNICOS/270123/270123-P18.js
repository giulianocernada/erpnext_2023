// FUNCION PASO 18
async function paso_18(){
	await paso_18a()
	await paso_18b(1000)
}

// VARIABLES PASO 18
let paso_18indirectoPsicotecnico
let paso_17cantidadRasgosIndirectos

// FUNCIONES PASO 18
async function paso_18a() {
    await new Promise(resolve => {
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
				resolve(
					paso_18indirectoPsicotecnico = r.message
				)
			}
		})
    })
}

async function paso_18b(tiempo) {
    await new Promise(resolve => {
		var total_parametros = 0;
		var total_parametros_limitantes_totales = 0; 
		var total_parametros_desaprobados = 0; 
		paso18_indirectoPsicotecnico.forEach(function(element){
			total_parametros += element.parametros;
			total_parametros_limitantes_totales += element.parametros_limitantes_totales;
			total_parametros_desaprobados += element.parametros_desaprobados;
		}),
		cur_frm.set_value("parametros", total_parametros)
		cur_frm.set_value("parametros_limitantes_totales", total_parametros_limitantes_totales)
		cur_frm.set_value("parametros_desaprobados", total_parametros_desaprobados)
		if(total_parametros_desaprobados > 0){
			resolve(
				cur_frm.set_value("resultado", "DESAPROBADO"),
				cur_frm.set_value("explicacion_final_completa", cur_frm.doc.explicacion_final + "El mismo ha sido DESAPROBADO.")
			)
		}  
		if(total_parametros_desaprobados == 0){
			resolve(
				cur_frm.set_value("resultado", "APROBADO"),
				cur_frm.set_value("explicacion_final_completa", cur_frm.doc.explicacion_final + "El mismo ha sido APROBADO.")
			)
		}
	})
	await guardar(tiempo)
}