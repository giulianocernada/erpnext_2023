// FUNCION PASO 7
async function paso_7(){
    await paso_7a(1000)
	await paso_7b(1000)
	await paso_7c(1000)
	await paso_7Comprobar(1000)
}

// VARIABLES PASO 7
let paso_7directoPsicotecnico = []
let paso_7cantidadRasgosDirectos

// FUNCIONES PASO 7
async function paso_7a(tiempo) {
    await new Promise(resolve => {
		resolve(
			console.log("PASO 7A"),
			cur_frm.clear_table("table_28"),
			frappe.call({ 
				method:"frappe.client.get_list", 
				args: { 
					doctype: "Rasgos de Personas",
					filters: { 
						psicotecnico: cur_frm.doc.name, 
						tipo_de_rasgo: "DIRECTO - PSICOTECNICO"
					},
					limit_page_length: 999, 
					order_by: "n_pregunta asc",
					fields: ["name", "nombre", "tipo_de_variable", "descripcion", "superyo", "ello", "si_mismo"] 
				}, 
				callback: function(r) { 
					paso_7directoPsicotecnico = r.message
				} 
			})
		)
    })
    await guardar(tiempo)
}

async function paso_7b(tiempo) {
    await new Promise(resolve => {
		resolve(
            console.log("PASO 7B"),
			paso_7directoPsicotecnico.forEach(function(element){
				var n = frappe.model.add_child(cur_frm.doc, "Rasgos Directos de Psicotecnicos", "table_28");	
				n.rasgo = element["name"];
				n.nombre = element["nombre"];
				n.tipo_de_variable = element["tipo_de_variable"];
				n.descripcion = element["descripcion"];
				n.superyo = element["superyo"];
				n.ello = element["ello"];
				n.si_mismo = element["si_mismo"];
			}),
			refresh_field("table_28")
		)
	})
	await guardar(tiempo)
}

async function paso_7c(tiempo) {
    await new Promise(resolve => {
		resolve(
			console.log("PASO 7C"),
			frappe.call({ 
				method:"frappe.client.get_value", 
				args: { 
					doctype: "Protocolos de Psicotecnicos",
					filters: {
						name: cur_frm.doc.protocolo_de_psicotecnico
					},
					fieldname: "rasgos_directos_del_modelo"
				},
				callback: function(r){
					paso_7cantidadRasgosDirectos = r.message.rasgos_directos_del_modelo
				}
			})
		)
	})
	await guardar(tiempo)
}

async function paso_7Comprobar() {
	if(cur_frm.doc.table_28.length != paso_7cantidadRasgosDirectos) {
		await paso_7b(2000)
		if(cur_frm.doc.table_28.length != paso_7cantidadRasgosDirectos) {
			await paso_7b(3000)
			if(cur_frm.doc.table_28.length != paso_7cantidadRasgosDirectos) {
				await paso_7b(5000)
				if(cur_frm.doc.table_28.length != paso_7cantidadRasgosDirectos) {
					await paso_7b(10000)
				}
			}
		}
	}
}
