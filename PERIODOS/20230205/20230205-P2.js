// FUNCION PASO 2
async function paso_2(){
    await paso_2a(0)
    await paso_2b()
    await paso_2Comprobar()
}

// VARIABLES PASO 2
let paso_2cantidadPsicotecnicos

// FUNCIONES PASO 2
async function paso_2a(tiempo) {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
        		cur_frm.clear_table("table_23"),
                //1RA LLAMADA: TRAE LOS PSICOTECNICOS DEL PERIODO
    			frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Psicotecnicos",
						filters: { 
							periodo: cur_frm.doc.name, 
						},
						order_by: "idx asc", 
						limit_page_length: 999, 
						fields: ["name", "persona", "descripcion", "estado", "inicio", "fin", "parametros", "rasgos_limitantes", "parametros_limitantes_totales", "rasgos_desaprobados", "parametros_desaprobados", "resultado"] 
					}, 
					callback: function(r) { 
                        //COMPLETA LA TABLA CON LOS VALORES OBTENIDOS
						r.message.forEach(function(v) {
		        			var n = frappe.model.add_child(cur_frm.doc, "Psicotecnicos en Periodos", "table_23");
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
                        //CON TODOS LOS PSICOTECNICOS CALCULA RASGOS Y PARAMETROS LIMITANTES/DESAPROBADOS
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
						if(total_parametros_desaprobados > 0) cur_frm.set_value("explicacion_final_completa", cur_frm.doc.explicacion_final + "El mismo ha sido DESAPROBADO.");
						if(total_parametros_desaprobados == 0) cur_frm.set_value("resultado", "APROBADO");
						if(total_parametros_desaprobados == 0) cur_frm.set_value("explicacion_final_completa", cur_frm.doc.explicacion_final + "El mismo ha sido APROBADO.");
						refresh_field("table_23");
					} 
				})
        	)
        }	
    })
    await guardar(tiempo)
}

async function paso_2b() {
    await new Promise(resolve => {
        frappe.call({ 
            method:"frappe.client.get_value", 
            args: { 
                doctype: "Protocolos de Periodos",
                filters: {
                    name: cur_frm.doc.protocolo_de_periodo
                },
                fieldname: "protocolos_de_psicotecnicos"
            },
            callback: function(r){
               resolve(
                    paso_2cantidadPsicotecnicos = r.message.protocolos_de_psicotecnicos,
                    console.log(paso_2cantidadPsicotecnicos)
                )
            }
        })
	})
}

async function paso_2Comprobar() {
	if(cur_frm.doc.table_23.length != paso_2cantidadPsicotecnicos) {
		await paso_2a(2000)
		if(cur_frm.doc.table_23.length != paso_2cantidadPsicotecnicos) {
			await paso_2a(3000)
			if(cur_frm.doc.table_23.length != paso_2cantidadPsicotecnicos) {
				await paso_2a(5000)
				if(cur_frm.doc.table_23.length != paso_2cantidadPsicotecnicos) {
					await paso_2a(10000)
				}
			}
		}
	}
}