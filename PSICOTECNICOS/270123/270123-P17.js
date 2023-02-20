// FUNCION PASO 17
async function paso_17(){
    await paso_17a()
    await paso_17b(1000)
	await paso_17c()
	await paso_17Comprobacion()
}

// VARIABLES PASO 17
let paso_17indirectoPsicotecnico
let paso_17cantidadRasgosIndirectos

// FUNCIONES PASO 17
async function paso_17a() {
    await new Promise(resolve => {
		console.log("PASO 17A"),
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
				resolve(
					paso_17indirectoPsicotecnico = r.message
				)
			}
		})
	})
}

async function paso_17b(tiempo) {
	for(let i = 0; i < paso_17indirectoPsicotecnico.length; i++){
		await new Promise(resolve => {
			var n = frappe.model.add_child(cur_frm.doc, "Rasgos Indirectos en Psicotecnicos", "table_166")
			resolve(
			n.rasgo = paso_17indirectoPsicotecnico[i]["name"],
			n.nombre = paso_17indirectoPsicotecnico[i]["nombre"],
			n.tipo_de_variable = paso_17indirectoPsicotecnico[i]["tipo_de_variable"],
			n.descripcion = paso_17indirectoPsicotecnico[i]["descripcion"],
			n.superyo = paso_17indirectoPsicotecnico[i]["superyo"],
			n.ello = paso_17indirectoPsicotecnico[i]["ello"],
			n.si_mismo = paso_17indirectoPsicotecnico[i]["si_mismo"],
			n.limitante_minimo_superyo = paso_17indirectoPsicotecnico[i]["limitante_minimo_superyo"],
			n.limitante_maximo_superyo = paso_17indirectoPsicotecnico[i]["limitante_maximo_superyo"],
			n.minimo_superyo = paso_17indirectoPsicotecnico[i]["minimo_superyo"],
			n.maximo_superyo = paso_17indirectoPsicotecnico[i]["maximo_superyo"],
			n.limitante_minimo_ello = paso_17indirectoPsicotecnico[i]["limitante_minimo_ello"],
			n.limitante_maximo_ello = paso_17indirectoPsicotecnico[i]["limitante_maximo_ello"],
			n.minimo_ello = paso_17indirectoPsicotecnico[i]["minimo_ello"],
			n.maximo_ello = paso_17indirectoPsicotecnico[i]["maximo_ello"],
			n.limitante_minimo_si_mismo = paso_17indirectoPsicotecnico[i]["limitante_minimo_si_mismo"],
			n.limitante_maximo_si_mismo = paso_17indirectoPsicotecnico[i]["limitante_maximo_si_mismo"],
			n.minimo_si_mismo = paso_17indirectoPsicotecnico[i]["minimo_si_mismo"],
			n.maximo_si_mismo = paso_17indirectoPsicotecnico[i]["maximo_si_mismo"],
			n.limitante_minimo_desajuste_su_el = paso_17indirectoPsicotecnico[i]["limitante_minimo_desajuste_su_el"],
			n.limitante_maximo_desajuste_su_el = paso_17indirectoPsicotecnico[i]["limitante_maximo_desajuste_su_el"],
			n.minimo_desajuste_su_el = paso_17indirectoPsicotecnico[i]["minimo_desajuste_su_el"],
			n.maximo_desajuste_su_el = paso_17indirectoPsicotecnico[i]["maximo_desajuste_su_el"],
			n.limitante_minimo_desajuste_si_el = paso_17indirectoPsicotecnico[i]["limitante_minimo_desajuste_si_el"],
			n.limitante_maximo_desajuste_si_el = paso_17indirectoPsicotecnico[i]["limitante_maximo_desajuste_si_el"],
			n.minimo_desajuste_si_el = paso_17indirectoPsicotecnico[i]["minimo_desajuste_si_el"],
			n.maximo_desajuste_si_el = paso_17indirectoPsicotecnico[i]["maximo_desajuste_si_el"],
			n.limitante_minimo_desajuste_si_su = paso_17indirectoPsicotecnico[i]["limitante_minimo_desajuste_si_su"],
			n.limitante_maximo_desajuste_si_su = paso_17indirectoPsicotecnico[i]["limitante_maximo_desajuste_si_su"],
			n.minimo_desajuste_si_su = paso_17indirectoPsicotecnico[i]["minimo_desajuste_si_su"],
			n.maximo_desajuste_si_su = paso_17indirectoPsicotecnico[i]["maximo_desajuste_si_su"],
			n.resultado_superyo = paso_17indirectoPsicotecnico[i]["resultado_superyo"],
			n.resultado_ello = paso_17indirectoPsicotecnico[i]["resultado_ello"],
			n.resultado_si_mismo = paso_17indirectoPsicotecnico[i]["resultado_si_mismo"],
			n.valor_desajuste_si_su = paso_17indirectoPsicotecnico[i]["valor_desajuste_si_su"],
			n.valor_desajuste_si_el = paso_17indirectoPsicotecnico[i]["valor_desajuste_si_el"],
			n.valor_desajuste_su_el = paso_17indirectoPsicotecnico[i]["valor_desajuste_su_el"],
			n.resultado_desajuste_si_su = paso_17indirectoPsicotecnico[i]["resultado_desajuste_si_su"],
			n.resultado_desajuste_si_el = paso_17indirectoPsicotecnico[i]["resultado_desajuste_si_el"],
			n.resultado_desajuste_su_el = paso_17indirectoPsicotecnico[i]["resultado_desajuste_su_el"],
			n.dimensiones = paso_17indirectoPsicotecnico[i]["dimensiones"],
			n.desajustes = paso_17indirectoPsicotecnico[i]["desajustes"],
			n.parametros = paso_17indirectoPsicotecnico[i]["parametros"],
			n.resultado = paso_17indirectoPsicotecnico[i]["resultado"],
			n.parametros_limitantes_totales = paso_17indirectoPsicotecnico[i]["parametros_limitantes_totales"],
			n.parametros_desaprobados = paso_17indirectoPsicotecnico[i]["parametros_desaprobados"]
			)
		})
	}
	refresh_field("table_166")
	await guardar(tiempo)
}

async function paso_17c() {
	await new Promise(resolve => {
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Protocolos de Psicotecnicos",
				filters: {
					name: cur_frm.doc.protocolo_de_psicotecnico
				},
				fieldname: "rasgos_indirectos"
			},
			callback: function(r){
				resolve(
				paso_17cantidadRasgosIndirectos = r.message.rasgos_indirectos
				)
			}
		})
	})
}

async function paso_17Comprobacion() {
	if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
		await paso_17b(2000)
		if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
			await paso_17b(3000)
			if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
				await paso_17b(5000)
				if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
					await paso_17b(10000)
					if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
						await paso_17b(15000)
						if(cur_frm.doc.table_166.length != paso_17cantidadRasgosIndirectos) {
							await paso_17b(30000)
						}
					}
				}
			}
		}
	}
} 