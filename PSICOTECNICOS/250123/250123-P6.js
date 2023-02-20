// FUNCION PASO 6
async function paso_6(){
    await paso_6a()
    await paso_6b()
    await paso_6c(paso_6acumulador, 2000)
    await paso_6d(paso_6acumulador, 2000)
    await paso_6e(paso_6acumulador, 2000)
}

// VARIABLES PASO 6
let paso_6lista = []
let paso_6largoLista
let paso_6i1 = 0
let paso_6i2 = 100
let paso_6acumulador = 0


// FUNCIONES PASO 6
async function paso_6a() {
    await new Promise(resolve => {
		//resolve(
            console.log("PASO 6B"),
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
					fields: ["name", "nombre"] 
				}, 
				callback: function(r) {
                    resolve(
                        paso_6lista = r.message
                    )
				}
			})
            console.log(paso_6lista)
		//)
	})
    //await guardar(tiempo)
}

async function paso_6b(){
    await new Promise(resolve => {
        paso_6largoLista = paso_6lista.length
        while(paso_6largoLista > 100){
            if(paso_6largoLista > 100){
                resolve(
                    paso_6acumulador += 1,
                    paso_6largoLista -= 100
                )
            }
            console.log(paso_6largoLista + " - " + paso_6acumulador)
        }
        if(paso_6largoLista < 100){
            resolve(
            paso_6acumulador += 1,
            console.log(paso_6acumulador)
            )
        }
    })
}

// SUPERYO
async function paso_6c(veces, tiempo) {
    await new Promise(resolve => {
        for(let i = 0; i < veces; i++){
            //resolve(
                paso_6lista.forEach(function(v, i) {
                    if(i >= paso_6i1 && i < paso_6i2){
                        console.log(i + "SUPERYO. i1: " + paso_6i1 + ".i2: " + paso_6i2)
                        var total_superyo = 0;
                        var n_superyo = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "SUPERYO",
                                    nombre: v["nombre"]
                                },
                                limit_page_length: 999,
                                order_by: "n_pregunta asc", 
                                fields: ["superyo"] 
                            }, 
                            callback: function(t) {
                                $.each(t.message, function(i, row) {
                                    total_superyo += row.superyo;
                                })									
                                n_superyo = t.message.length;
                                resolve(
                                frappe.call({ 
                                    method:"frappe.client.set_value", 
                                    args: { 
                                        "doctype": "Rasgos de Personas", 
                                        "name": v["name"],
                                        "fieldname": {
                                            "superyo":  total_superyo / n_superyo
                                        }
                                    } 
                                })
                                )
                            }
                        })
                    }
                }),
                paso_6i1 += 100,
                paso_6i2 += 100
            //)
        }
        paso_6i1 = 0
        paso_6i2 = 100
	})
    await guardar(tiempo)
}

// ELLO
async function paso_6d(veces, tiempo) {
    await new Promise(resolve => {
        for(let i = 0; i < veces; i++){
            //resolve(
                paso_6lista.forEach(function(v, i) {
                    if(i >= paso_6i1 && i < paso_6i2){
                        console.log(i + "ELLO. i1: " + paso_6i1 + ".i2: " + paso_6i2)
                        var total_ello = 0;
                        var n_ello = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "ELLO",
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
                                resolve(
                                    frappe.call({ 
                                        method:"frappe.client.set_value", 
                                        args: { 
                                            "doctype": "Rasgos de Personas", 
                                            "name": v["name"],
                                            "fieldname": {
                                                "ello":  total_ello / n_ello
                                            }
                                        } 
                                    })
                                )
                            }
                        })
                    }
                }),
                paso_6i1 += 100,
                paso_6i2 += 100
            //)
        }
        paso_6i1 = 0
        paso_6i2 = 100
	})
    await guardar(tiempo)
}

//SI MISMO
async function paso_6e(veces, tiempo) {
    await new Promise(resolve => {
        for(let i = 0; i < veces; i++){
            //resolve(
                paso_6lista.forEach(function(v, i) {
                    if(i >= paso_6i1 && i < paso_6i2){
                        console.log(i + "SI MISMO. i1: " + paso_6i1 + ".i2: " + paso_6i2)
                        var total_si_mismo = 0;
                        var n_si_mismo = 0; 
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    psicotecnico: cur_frm.doc.name, 
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    dimension: "SI-MISMO",
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
                                resolve(
                                    frappe.call({ 
                                        method:"frappe.client.set_value", 
                                        args: { 
                                            "doctype": "Rasgos de Personas", 
                                            "name": v["name"],
                                            "fieldname": {
                                                "si_mismo":  total_si_mismo / n_si_mismo
                                            }
                                        } 
                                    })
                                )
                            }
                        })
                    }
                }),
                paso_6i1 += 100,
                paso_6i2 += 100
            //)
        }
        paso_6i1 = 0
        paso_6i2 = 100
	})
    await guardar(tiempo)
}