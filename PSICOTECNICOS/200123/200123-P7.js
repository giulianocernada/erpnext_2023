// FUNCION PASO 7
async function paso_7(){
    await paso_7(1000)

}

// VARIABLES PASO 7
paso_7directoPsicotecnico = []

// FUNCIONES PASO 7


// PASO 7
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

async function paso_7Comprobar() {
	if(cur_frm.doc.protocolo_de_psicotecnico === "PRO.PSI.DVI-I"){
		if(cur_frm.doc.table_28.length != 112) {
            await paso_7(2000)
            if(cur_frm.doc.table_28.length != 112) {
                await paso_7(3000)
                if(cur_frm.doc.table_28.length != 112) {
                    await paso_7(5000)
                    if(cur_frm.doc.table_28.length != 112) {
                        await paso_7(10000)
                    }
                }
            }
	    }
    }
}

//PARA PASO 7
let hola
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
        hola = r.message.rasgos_directos_del_modelo
    }
})