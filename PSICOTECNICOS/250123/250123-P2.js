// FUNCION PASO 2
async function paso_2(){
    await paso_2a(0)
    await paso_2Comprobar(0)
}

// FUNCIONES PASO 2
async function paso_2a(tiempo) {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADO"){
            resolve(
                console.log("PASO 2"),
                frappe.call({ 
                    method:"frappe.client.get_value", 
                    args: { 
                        doctype: "Periodos",
                        filters: { 
                            protocolo_de_periodo: cur_frm.doc.protocolo_de_periodo,
                            plan_de_periodo: cur_frm.doc.plan_de_periodo, 
                            owner: cur_frm.doc.owner
                        },
                        fieldname: ["name"] 
                    }, 
                    callback: function(r) {
                        cur_frm.set_value("periodo", r.message.name),
                        cur_frm.set_value("cuenta", cur_frm.doc.owner),
                        cur_frm.set_value("cuenta_analizo", frappe.session.user),
                        cur_frm.set_value("inicio", cur_frm.doc.creation),
                        cur_frm.set_value("fin", frappe.datetime.now_datetime())
                    } 
                })
            )
        }
    })
    await guardar(tiempo)
}

async function paso_2Comprobar() {
    let fechaPsicotecnico = cur_frm.doc.fin
    let fechaActual = frappe.datetime.now_datetime()
    fechaPsicotecnico = fechaPsicotecnico.split(' ')
    fechaPsicotecnico = fechaPsicotecnico[1].split(':')
    fechaPsicotecnico = fechaPsicotecnico[1]
    console.log(fechaPsicotecnico)
    fechaActual = fechaActual.split(' ')
    fechaActual = fechaActual[1].split(':')
    fechaActual = fechaActual[1]
    console.log("DIFERENCIA: " + (fechaActual - fechaPsicotecnico))
	if(fechaActual - fechaPsicotecnico > 10){
        await paso_2(2000)
        console.log("Comprobacion PASO 2: 2000")
        if(fechaActual - fechaPsicotecnico > 10){
            await paso_2(3000)
            console.log("Comprobacion PASO 2: 3000")
            if(fechaActual - fechaPsicotecnico > 10){
                await paso_2(5000)
                console.log("Comprobacion PASO 2: 5000")
                if(fechaActual - fechaPsicotecnico > 10){
                    await paso_2(10000)
                    console.log("Comprobacion PASO 2: 10000")
                    if(fechaActual - fechaPsicotecnico > 10){
                        await paso_2(20000)
                        console.log("Comprobacion PASO 2: 20000")
                        if(fechaActual - fechaPsicotecnico > 10){
                            await paso_2(30000)
                            console.log("Comprobacion PASO 2: 30000")
                            if(fechaActual - fechaPsicotecnico > 10){
                                await paso_2(60000)
                                console.log("Comprobacion PASO 2: 60000")
                            }
                        }
                    }
                }
            }
        }
    }
}