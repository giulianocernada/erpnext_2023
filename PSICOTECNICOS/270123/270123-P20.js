// FUNCION PASO 20
async function paso_20() {
    await new Promise(resolve => {
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
				resolve(
					cur_frm.set_value("rasgos_desaprobados", r.message.length)
				)
			} 
		})
    })
}
