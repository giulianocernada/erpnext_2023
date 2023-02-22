async function evaluar() {

}

async function finalizado() {
    await new Promise(resolve => {

    })
}

/* 
1. BUSCAR EVALUACIONES, PSICOTECNICOS Y PERIODOS SIN ANALIZAR
A. PARA LAS EVALUACIONES LAS BUSCO TODAS Y LAS DEBERIA ANALIZAR
B. PARA LOS PSICOTECNICOS DEBERIA VERIFICAR QUE PARA CADA UNO DE ELLOS LAS EVALUACIONES CORRESPONDIENTES ESTEN ANALIZADAS Y RECIEN AHI PONER
    EL PSICOTECNICO PARA ANALIZAR.

*/

// BUSCA EVALUACIONES INICIADAS (SIN ANALIZAR)
frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Evaluaciones",
        filters: { 
            estado: "INICIADA", 
        },
        limit_page_length: 999, 
        fields: ["name"] 
    }, 
    callback: function(r) {
        console.log(r.message)
    }
})

// BUSCA PSICOTECNICOS INICIADOS (SIN ANALIZAR)
frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Psicotecnicos",
        filters: { 
            estado: "INICIADO", 
        },
        limit_page_length: 999, 
        fields: ["name"] 
    }, 
    callback: function(r) {
        console.log(r.message)
    }
})

// PSICOTECNICOS PULIDO 1
let psicotecnicos = []

frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Psicotecnicos",
        filters: { 
            estado: "INICIADO", 
        },
        limit_page_length: 999, 
        fields: ["name", "owner", "protocolo_de_psicotecnico"] 
    }, 
    callback: function(r) {
        psicotecnicos = r.message
    }
})

psicotecnicos.forEach(function(element){
    frappe.call({ 
        method:"frappe.client.get_list", 
        args: { 
            doctype: "Protocolos de Evaluaciones en Protocolos de Psicotecnicos",
            parent: "Protocolos de Psicotecnicos",
            filters: { 
                //name: "PRO.PSI.DVI-I", 
                parent: "PRO.PSI.DVI-I"
            },
            limit_page_length: 999, 
            fields: ["protocolo_de_evaluacion"] 
        }, 
        callback: function(r) {
            r.message.forEach(function(element2){
                frappe.call({ 
                    method:"frappe.client.get_list", 
                    args: { 
                        doctype: "Evaluaciones",
                        filters: { 
                            protocolo_de_evaluacion: element2.protocolo_de_evaluacion,
                            estado: "FINALIZADA",
                        },
                        limit_page_length: 999, 
                        fields: ["name"] 
                    }, 
                    callback: function(s) {
                        console.log(s.message)
                    }
                })
            })
        }
    })
})

let psicotecnicosAAnalizar = []

frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Protocolos de Evaluaciones en Protocolos de Psicotecnicos",
        parent: "Protocolos de Psicotecnicos",
        filters: { 
            //name: "PRO.PSI.DVI-I", 
            parent: cur_frm.doc.protocolo_de_psicotecnico
        },
        limit_page_length: 999, 
        fields: ["protocolo_de_evaluacion", "owner"] 
    }, 
    callback: function(r) {
        r.message.forEach(function(element2){
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Evaluaciones",
                    filters: {
                        owner: cur_frm.doc.owner, 
                        protocolo_de_evaluacion: element2.protocolo_de_evaluacion,
                        estado: "FINALIZADA",
                    },
                    limit_page_length: 999, 
                    fields: ["name"] 
                }, 
                callback: function(s) {
                    if(s.message != ""){
                        if(!psicotecnicosAAnalizar.includes(cur_frm.doc.name)){
                            psicotecnicosAAnalizar.push(cur_frm.doc.name)
                        }
                    }
                }
            })
        })
    }
})

frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Protocolos de Evaluaciones en Protocolos de Psicotecnicos",
        parent: "Protocolos de Psicotecnicos",
        filters: { 
            //name: "PRO.PSI.DVI-I", 
            parent: "PRO.PSI.DVI-I"
        },
        limit_page_length: 999, 
        fields: ["protocolo_de_evaluacion"] 
    }, 
    callback: function(r) {
        r.message.forEach(function(element2){
                        console.log(element2)
        })
    }
})

// BUSCA PERIODOS INICIADOS (SIN ANALIZAR)
frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Periodos",
        filters: { 
            estado: "INICIADO", 
        },
        limit_page_length: 999, 
        fields: ["name"] 
    }, 
    callback: function(r) {
        console.log(r.message)
    }
})
