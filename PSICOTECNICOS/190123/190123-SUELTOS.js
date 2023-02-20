async function paso_5() {
    await new Promise(resolve => {
		resolve(
            console.log("PASO 5A"),
            frappe.call({ 
                method:"frappe.client.get_list",
                args: { 
                    doctype: "Rasgos Directos del Protocolo de Psicotecnico",
                    parent: "Protocolos de Psicotecnicos", 
                    filters: { 
                        parent: cur_frm.doc.protocolo_de_psicotecnico, 
                    },	
                    order_by: "idx asc", 
                    limit_page_length: 999,
                    fields: ["rasgo", "idx", "nombre", "desarrollo", "tipo_de_variable", "descripcion"] 
                }, 
                callback: function(r) { 
                    paso5_rasgosDirectos = r.message
                    paso_5largo = r.message.length
                }
            })
        )
    })
}

function repetirFunciones(){
if(paso_5largo > 500){
    repetirFuncion(6)
} else if(paso_5largo >= 400 && paso_5largo < 500){
    repetirFuncion(5)
} else if(paso_5largo >= 300 && paso_5largo < 400){
    repetirFuncion(4)
} else if(paso_5largo >= 200 && paso_5largo < 300){
    repetirFuncion(3)
} else if(paso_5largo >= 100 && paso_5largo < 200){
    repetirFuncion(2)
} else {
    repetirFuncion(1)
}
}

async function repetirFuncion(veces){
    await new Promise(resolve => {
        for(let i = 0; i < veces; i++){
            let index1 = i*100
            let index2 = index1 + 100
            if(i == 0){
                resolve(
                    mostarNumeros(0,100)
                )
            } else {
                resolve(
                    mostarNumeros(index1,index2)
                )
            }
            guardar(2000)
        }
    })
}

function mostarNumeros(i1, i2){
    for(let i = 0; i < paso5_rasgosDirectos.length; i++){
        if(i >= i1 && i < i2){
            console.log(paso5_rasgosDirectos[i])
        }
    }
}

async function guardar(tiempo) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(
              cur_frm.save()
            );
        }, tiempo)
    })
}



