async function paso_6a() {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
                // LLAMADA: OBTENGO UN LISTADO DE LOS RASGOS INDIRECTOS CREADOS EN EL PASO ANTERIOR 
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas",
						filters: { 
							periodo: cur_frm.doc.name, 
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
                            // LLAMADA: OBTENGO LOS VALORES "superyo" PARA CADA UNO DE LOS RASGOS INDIRECTOS
							frappe.call({ 
								method:"frappe.client.get_list", 
								args: { 
									doctype: "Rasgos de Personas",
									filters: { 
										periodo: cur_frm.doc.name, 
										tipo_de_rasgo: "INDIRECTO - PSICOTECNICO",
										superyo: [">", 0], 
										nombre: v["nombre"], 
									},
									limit_page_length: 999,
									order_by: "n_pregunta asc", 
									fields: ["superyo"] 
								}, 
								callback: function(t) {
                                    // CALCULA LOS VALORES DE "superyo" DE LOS RASGOS INDIRECTOS DEL PERIODO
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
        	)
        }	
    })
}

async function paso_6b() {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas",
						filters: { 
							periodo: cur_frm.doc.name, 
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
										periodo: cur_frm.doc.name, 
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
        	)
        }	
    })
}

async function paso_6c() {
    await new Promise(resolve => {
    	if(cur_frm.doc.estado == "FINALIZADO"){
        	resolve(
        		frappe.call({ 
					method:"frappe.client.get_list", 
					args: { 
						doctype: "Rasgos de Personas",
						filters: { 
							periodo: cur_frm.doc.name, 
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
										periodo: cur_frm.doc.name, 
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
        	)
        }	
    })
}