// CN: PASO 1
async function paso_1() {
    await new Promise(resolve => {
    	cur_frm.set_value("cuenta", cur_frm.doc.owner);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		cur_frm.set_value("inicio", cur_frm.doc.creation);
		if(cur_frm.doc.finalizacion == "CUMPLIMIENTO"){
			//1ERA LLAMADA: VA AL PROTOCOLO DEL PERIODO Y BUSCA EL ULTIMO PSICOTECNICO UTILIZANDO COMO FILTRO LA CANTIDAD DE PSICOTECNICOS PARA EL PERIODO
			frappe.call({ 
				method:"frappe.client.get_value", 
				args: { 
					doctype: "Protocolos de Psicotecnicos en Protocolos de Periodos",
					parent: "Protocolos de Periodos",
					filters: { 
						parent: cur_frm.doc.protocolo_de_periodo,
						idx: cur_frm.doc.psicotecnicos, 
					},
					fieldname: ["protocolo_de_psicotecnico"] 
				}, 
				callback: function(r) {
					//2DA LLAMADA: CON EL NOMBRE DEL PERIODO Y EL NOMBRE DEL PSICOTECNICO BUSCA EL PSICOTECNICO Y DE AHI EXTRAE LOS VALORES DE ESTADO Y FIN
					frappe.call({ 
						method:"frappe.client.get_value", 
						args: { 
							doctype: "Psicotecnicos",
							filters: { 
								periodo: cur_frm.doc.name,
								protocolo_de_psicotecnico: r.message.protocolo_de_psicotecnico,
							},
							fieldname: ["estado", "fin"] 
						}, 
						//3RA LLAMADA: CON LOS VALORES OBTENIDOS SETEA VALORES PARA CAMPOS "fin" Y "estado"
						callback: function(t) {
							cur_frm.set_value("fin", t.message.fin)
							if(t.message.estado == "FINALIZADO"){
								resolve(
									cur_frm.set_value("estado", "FINALIZADO")
								)
							}
						}
					}) 
				} 
			})
        }
        if(cur_frm.doc.finalizacion == "DURACION"){
			cur_frm.set_value("fin", frappe.datetime.add_months(cur_frm.doc.inicio, parseInt(cur_frm.doc.meses)))
			if(cur_frm.doc.fin < frappe.datetime.now_datetime()){
				resolve(
					cur_frm.set_value("estado", "FINALIZADO")
				)
			}
		}
    })
}