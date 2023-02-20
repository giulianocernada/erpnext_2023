// FUNCION PASO 1
async function paso_1(){
    await paso_1a(0)
    await paso_1Comprobar(0)
}

// FUNCIONES PASO 1
async function paso_1a(tiempo) {
    await new Promise(resolve => {
        resolve(
            console.log("PASO 1"),
            frappe.call({ 
                method:"frappe.client.get_value", 
                args: { 
                    doctype: "Protocolos de Evaluaciones en Protocolos de Psicotecnicos",
                    parent: "Protocolos de Psicotecnicos",
                    filters: { 
                        parent: cur_frm.doc.protocolo_de_psicotecnico,
                        idx: cur_frm.doc.protocolos_de_evaluaciones 
                    },
                    fieldname: ["protocolo_de_evaluacion"] 
                }, 
                callback: function(r) {
                    frappe.call({ 
                        method:"frappe.client.get_list", 
                        args: { 
                            doctype: "Evaluaciones",
                            filters: { 
                                psicotecnico: cur_frm.doc.name,
                                protocolo_de_evaluacion: r.message.protocolo_de_evaluacion
                            },
                        fields: ["protocolo_de_evaluacion"] 
                        }, 
                        callback: function(t) {
                            if(t.message && cur_frm.doc.tipo == "EXTERNOS"){
                                cur_frm.set_value("estado", "FINALIZADO")
                            }
                        }
                    }) 
                } 
            })
        )
    })
    await guardar(tiempo)
}

async function paso_1Comprobar() {
	if(cur_frm.doc.estado != "FINALIZADO"){
        await paso_1(2000)
        console.log("Comprobacion PASO 1: 2000")
        if(cur_frm.doc.estado != "FINALIZADO"){
            await paso_1(3000)
            console.log("Comprobacion PASO 1: 3000")
            if(cur_frm.doc.estado != "FINALIZADO"){
                await paso_1(5000)
                console.log("Comprobacion PASO 1: 5000")
                if(cur_frm.doc.estado != "FINALIZADO"){
                    await paso_1(10000)
                    console.log("Comprobacion PASO 1: 10000")
                    if(cur_frm.doc.estado != "FINALIZADO"){
                        await paso_1(20000)
                        console.log("Comprobacion PASO 1: 20000")
                        if(cur_frm.doc.estado != "FINALIZADO"){
                            await paso_1(30000)
                            console.log("Comprobacion PASO 1: 30000")
                            if(cur_frm.doc.estado != "FINALIZADO"){
                                await paso_1(60000)
                                console.log("Comprobacion PASO 1: 60000")
                            }
                        }
                    }
                }
            }
        }
    }
}