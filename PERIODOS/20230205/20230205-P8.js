// FUNCION PASO 8
async function paso_8(){
    await paso_8a(0)
    await paso_8b()
    await paso_8Comprobar()
}

// VARIABLES PASO 8
let paso_8cantidadRasgosIndirectosPeriodo

// FUNCIONES PASO 8
async function paso_8a() {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
        		cur_frm.clear_table("table_30"),
                // LLAMADA: OBTENGO LOS RASGOS INDIRECTOS DEL PERIODO
				frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas",
						filters: { 
							periodo: cur_frm.doc.name, 
							tipo_de_rasgo: "INDIRECTO - PERIODO"
						},
						limit_page_length: 999, 
						fields: ["name", "nombre", "tipo_de_variable", "descripcion", "desarrollo", "superyo", "ello", "si_mismo", "valor_desajuste_si_su", "valor_desajuste_si_el", "valor_desajuste_su_el"]
					}, 
                    //COMPLETA LA TABLA CON LOS VALORES OBTENIDOS
					callback: function(r) { 
						r.message.forEach(function(v) {
		        			var n = frappe.model.add_child(cur_frm.doc, "Rasgos Indirectos en Periodos", "table_30")
							n.rasgo = v["name"]
							n.nombre = v["nombre"]
							n.tipo_de_variable = v["tipo_de_variable"]
							n.desarrollo = v["desarrollo"]
							n.descripcion = v["descripcion"]
							n.superyo = v["superyo"]
							n.ello = v["ello"]
							n.si_mismo = v["si_mismo"]
							n.valor_desajuste_si_su = v["valor_desajuste_si_su"]
							n.valor_desajuste_si_el = v["valor_desajuste_si_el"]
							n.valor_desajuste_su_el = v["valor_desajuste_su_el"]
		        		}); 
		 				cur_frm.set_value("rasgos_indirectos_del_periodo", r.message.length)
						refresh_field("table_30")
					} 
				})
        	)
        }	
    })
}

async function paso_8b() {
    await new Promise(resolve => {
        frappe.call({ 
            method:"frappe.client.get_value", 
            args: { 
                doctype: "Protocolos de Periodos",
                filters: {
                    name: cur_frm.doc.protocolo_de_periodo
                },
                fieldname: "rasgos_indirectos_del_periodo"
            },
            callback: function(r){
                resolve(
                    paso_8cantidadRasgosIndirectosPeriodo = r.message.rasgos_indirectos_del_periodo,
                    console.log(paso_8cantidadRasgosIndirectosPeriodo)
                )
            }
        })
	})
}

async function paso_8Comprobar() {
	if(cur_frm.doc.table_30.length != paso_8cantidadRasgosIndirectosPeriodo) {
		await paso_8a(2000)
		if(cur_frm.doc.table_30.length != paso_8cantidadRasgosIndirectosPeriodo) {
			await paso_8a(3000)
			if(cur_frm.doc.table_30.length != paso_8cantidadRasgosIndirectosPeriodo) {
				await paso_8a(5000)
				if(cur_frm.doc.table_30.length != paso_8cantidadRasgosIndirectosPeriodo) {
					await paso_8a(10000)
				}
			}
		}
	}
}