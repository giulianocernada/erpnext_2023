// Iniciar Evaluacion

frappe.ui.form.on("Evaluaciones", {
	iniciar: function(frm, cdt, cdn) {
      	cur_frm.set_value("estado", "INICIADA");
      	cur_frm.set_value("inicio", frappe.datetime.now_datetime());
		cur_frm.save();
		setTimeout(()=>{
            frappe.call({ 
                method:"frappe.client.get_value", 
                args: { 
                    doctype: "Preguntas en Protocolos de Evaluaciones",
                    parent: "Protocolos de Evaluaciones", 
                    filters: { 
                        parent: frm.doc.protocolo_de_evaluacion, 
                        "idx": "1", 
                    },
                    fieldname: ["idx", "pregunta", "nombre", "desarrollo", "tipo_de_variable", "descripcion", "imagen",  "dimension", "opciones", "a", "b", "c", "d", "e", "f", "g", "h", "opcion_a", "opcion_b", "opcion_c", "opcion_d", "opcion_e", "opcion_f", "opcion_g", "opcion_h"] 
                }, 
                callback: function(r) { 
                    frappe.new_doc("Rasgos de Personas", {
                        "evaluacion": frm.doc.name,
                        "protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion,
                        "psicotecnico": frm.doc.psicotecnico,
                        "protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
                        "periodo": frm.doc.periodo,
                        "protocolo_de_periodo": frm.doc.protocolo_de_periodo,
                        "plan_de_periodo": frm.doc.plan_de_periodo,
                        "estado": "REALIZADO",
                        "desarrollo": r.message.desarrollo,
                        "tipo_de_rasgo": "RESPUESTA - EVALUACION",
                        "dimension": r.message.dimension,
                        "tipo_de_variable": r.message.tipo_de_variable,
                        "nombre": r.message.nombre,
                        "descripcion": r.message.descripcion,
                        "imagen": r.message.imagen,
                        "total_de_preguntas": frm.doc.planificadas,
                        "opciones": r.message.opciones,
                        "n_pregunta": 1,
                        "anterior": r.message.idx - 1,
                        "a": r.message.a,
                        "b": r.message.b,
                        "c": r.message.c,
                        "d": r.message.d,
                        "e": r.message.e,
                        "f": r.message.f,
                        "g": r.message.g,
                        "h": r.message.h,
                        "opcion_a": r.message.opcion_a,
                        "opcion_b": r.message.opcion_b,
                        "opcion_c": r.message.opcion_c,
                        "opcion_d": r.message.opcion_d,
                        "opcion_e": r.message.opcion_e,
                        "opcion_f": r.message.opcion_f,
                        "opcion_g": r.message.opcion_g,
                        "opcion_h": r.message.opcion_h,
                    })
                }
            })
   		}, 1000);
	}
});

//CÓDIGO NUEVO
//FINALIZAR
frappe.ui.form.on("Evaluaciones", {
	finalizar: function(frm) {
		correrFunciones()
	}
})

async function correrFunciones(){
    await paso_1();
    await paso_2();
    await paso_3();
    await paso_4();
    await paso_5();
    await paso_intermedio();
    await paso_6();
    await paso_7();
    await finalizado();
}

async function finalizado() {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(
          frappe.msgprint(__('Ejecución finalizada'))
        );
      }, 2000)
    })
}


//PASO 1
async function paso_1() {
    await new Promise(resolve => {
        setTimeout(() => {
        try {
            resolve(
                frappe.call({ 
                    method:"frappe.client.get_value", 
                    freeze: true,
                    freeze_message: "PASO 1",
                    args: { 
                        doctype: "Rasgos de Personas",
                        filters: { 
                            protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                            plan_de_periodo: cur_frm.doc.plan_de_periodo, 
                            tipo_de_rasgo: "RESPUESTA - EVALUACION", 
                            n_pregunta: cur_frm.doc.planificadas,
                            owner: cur_frm.doc.owner
                        },
                        fieldname: ["creation"] 
                    }, 
                    callback: function(r) {
                        if(r.message){
                            cur_frm.set_value("estado", "FINALIZADA");
                            cur_frm.set_value("inicio", cur_frm.doc.creation);
                            cur_frm.set_value("fin", r.message.creation);
                            if(cur_frm.doc.registro == "EVALUADO") cur_frm.set_value("cuenta", cur_frm.doc.owner);
                            if(cur_frm.doc.registro == "EVALUADO") cur_frm.set_value("cuenta_analizo", frappe.session.user);
                            if(cur_frm.doc.registro == "EVALUADOR") cur_frm.set_value("cuenta_analizo", cur_frm.doc.owner)
                            var entry_datetime = cur_frm.doc.creation.split(" ")[1];
                            var exit_datetime = r.message.creation.split(" ")[1];
                            var splitEntryDatetime= entry_datetime.split(':');
                            var splitExitDatetime= exit_datetime.split(':');
                            var totalMinsOfEntry= splitEntryDatetime[0] * 60 + parseInt(splitEntryDatetime[1]) + splitEntryDatetime[0] / 60;
                            var totalMinsOfExit= splitExitDatetime[0] * 60 + parseInt(splitExitDatetime[1]) + splitExitDatetime[0] / 60;
                            var entry_date = new Date(cur_frm.doc.inicio.split(" ")[0]);
                            var exit_date = new Date(cur_frm.doc.fin.split(" ")[0]);
                            var diffTime = Math.abs(exit_date - entry_date);
                            var diffDays = Math.ceil(diffTime/ (1000 * 60 * 60 * 24));
                            cur_frm.set_value("duracion",parseInt(((diffDays*(24*60)) +totalMinsOfExit) - totalMinsOfEntry));
                            cur_frm.refresh_field("duracion");
                            console.log("PASO 1 TERMINADO");
                        }			 
                    } 
                })
            )
        } catch(err) {
            console.log("Problema: " + err)
        }
        }, 5000)
    })
}

//PASO 2
async function paso_2() {
    await new Promise(resolve => {
        setTimeout(() => {
        resolve(
            frappe.call({ 
                method:"frappe.client.get_value", 
                freeze: true,
                freeze_message: "PASO 2",
                args: { 
                    doctype: "Psicotecnicos",
                    filters: { 
                        protocolo_de_psicotecnico: cur_frm.doc.protocolo_de_psicotecnico,
                        plan_de_periodo: cur_frm.doc.plan_de_periodo, 
                        owner: cur_frm.doc.owner
                    },
                    fieldname: ["name"] 
                }, 
                callback: function(r) {
                    cur_frm.set_value("psicotecnico", r.message.name)
                    console.log("PASO 2 TERMINADO")
                } 
            })
        )
        }, 5000)
    })
}

//PASO 3
async function paso_3() {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADA"){
            setTimeout(() => {
            resolve(
                frappe.call({ 
                    method:"frappe.client.get_value",
                    freeze: true,
                    freeze_message: "PASO 3", 
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
                        cur_frm.set_value("periodo", r.message.name)
                        console.log("PASO 3 TERMINADO")
                    } 
                })
            )
            }, 5000)
        }
    })
}

//PASO 4
async function paso_4() {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADA"){
            setTimeout(() => {
            resolve(
                cur_frm.save(),
                console.log("PASO 4 TERMINADO")
            )
            }, 5000)
        }
    })
}

async function paso_intermedio() {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADA"){
            setTimeout(() => {
            resolve(
                console.log("PASO 5 TERMINADO")
            )
            }, 2000)
        }
    })
}

//PASO 5
//1. OBTENER LISTA DE DOCUMENTOS A VISITAR
//2. OBTENER DOCUMENTO ACTUAL PARA PODER VOLVER
//3. RECORRER UNO A UNO LOS DOCUMENTOS, MODIFICANDO EL VALOR Y ESPERANDO PARA GUARDAR
//4. VOLVER AL ORIGEN
async function paso_5() {
    await obtenerLista();
    console.log(listaObtenida);
    await redirigir(listaObtenida);
    await redirigirAOrigen(documentoActual);
}

let documentoActual = ""
let listaObtenida = []

function obtenerLista() {
  return new Promise(resolve => {
        resolve(
            frappe.call({
                method:"frappe.client.get_list",
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        plan_de_periodo: cur_frm.doc.plan_de_periodo,
                        protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                        owner: cur_frm.doc.owner,
                        tipo_de_rasgo: "RESPUESTA - EVALUACION"
                    },
                    limit_page_length: 999,
                    order_by: "name asc", 
                    fields: ["name"] 
                },
                // args: { 
                //     doctype: "GMC11",
                //     limit_page_length: 999,
                //     fields: ["name"] 
                // },
                callback: function(r) {
                        documentoActual = cur_frm.doc.name
                        console.log(documentoActual)
                        listaObtenida = r.message
                }
            })
        );
  });
}

async function redirigir(lista) {
    for(let doc in lista){
        await new Promise(resolve => {
                resolve(
                    frappe.set_route("Form", "Rasgos de Personas", lista[doc]["name"])
                    //frappe.set_route("Form", "GMC11", lista[doc]["name"])
                );
        })
        await modificar()
        await guardar()
    }
}

async function redirigirAOrigen(origen) {
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(
                    //frappe.set_route("Form", "Evaluaciones", origen),
                    frappe.set_route("Form", "Evaluaciones", origen)
                    //modificar(),
                    //cur_frm.save()
                );
            }, 1000)
        })
        //modificar(),
        guardar()
}

async function modificar() {
    await new Promise(resolve => {
        resolve(
            cur_frm.set_value("estado", "ANALIZADO")
        )
    })
}

async function guardar() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(
              cur_frm.save()
            );
          }, 5000)
    })
}

/**
//Paso 5 viejo


function redirigir(ruta){
    return new Promise(resolve => {
            resolve(
                frappe.set_route("Form", "Rasgos de Personas", ruta)
            )
    })
}

function modificar(){
    return new Promise(resolve => {
            resolve(
                cur_frm.set_value("estado", "ANALIZADO")
            )
    })
}

function guardar(){
    return new Promise(resolve => {
    	setTimeout(() => {
	      resolve(
	        cur_frm.save()
	      );
    	}, 5000)
    })
}

frappe.ui.form.on("Evaluaciones", {
    paso_5: function(frm){
		if(frm.doc.estado == "FINALIZADA"){
        	paso5()
		}
    }
})
**/
/** //PASO 5 ANTERIOR
function paso_5(){
    try {
        frappe.call({
            method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					plan_de_periodo: cur_frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
					owner: cur_frm.doc.owner,
					tipo_de_rasgo: "RESPUESTA - EVALUACION"
				},
				limit_page_length: 999,
				order_by: "name asc", 
				fields: ["name"] 
			}, 
            callback: async function(r) {
                var lista = []
                lista = r.message
                const docActual = cur_frm.doc.name
                for(let i = 0; i < lista.length; i++){
                    let ir = await redirigir(lista[i]["name"]).then(modificar).then(guardar)
                }
                await frappe.set_route("Form", "Evaluaciones", docActual)
				cur_frm.save()
            }
        })
    } catch(err) {
        console.log("Problema: " + err)
    }
}

function redirigir(ruta){
    return new Promise(resolve => {
            resolve(
                frappe.set_route("Form", "Rasgos de Personas", ruta)
            )
    })
}

function modificar(){
    return new Promise(resolve => {
            resolve(
                cur_frm.set_value("estado", "ANALIZADO")
            )
    })
}

function guardar(){
    return new Promise(resolve => {
    	setTimeout(() => {
	      resolve(
	        cur_frm.save()
	      );
    	}, 5000)
    })
}
**/

//PASO 6
async function paso_6() {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADA"){
            //setTimeout(() => {
                resolve(
                    cur_frm.clear_table("table_20"),
                    frappe.call({ 
                        method:"frappe.client.get_list", 
                        args: { 
                            doctype: "Rasgos de Personas",
                            filters: { 
                                evaluacion: cur_frm.doc.name, 
                                tipo_de_rasgo: "RESPUESTA - EVALUACION", 
                            },
                            order_by: "name asc",
                            limit_page_length: 999, 
                            fields: ["idx", "name", "nombre", "desarrollo", "dimension", "tipo_de_variable", "descripcion", "imagen", "respuesta", "valor", "opcion", "opcion_1", "opcion_2", "opcion_3", "opcion_4", "opcion_5", "opcion_6", "opcion_7", "opcion_8", "descripcion_a", "descripcion_b", "descripcion_c", "descripcion_d", "descripcion_e", "descripcion_f", "descripcion_g", "descripcion_h", "opciones"] 
                        }, 
                        callback: function(r) { 
                            r.message.forEach(function(v) {
                                var n = frappe.model.add_child(cur_frm.doc, "Preguntas en Evaluaciones", "table_20");	
                                n.pregunta = v["name"];
                                n.nombre = v["nombre"];
                                n.desarrollo = v["desarrollo"];
                                n.tipo_de_variable = v["tipo_de_variable"];
                                n.dimension = v["dimension"];
                                n.imagen = v["imagen"];
                                n.descripcion = v["descripcion"];
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 8 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"]+ "\n" + "H: " + v["descripcion_h"];
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 8 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"]+ "\n" + "H: " + v["descripcion_h"];
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 8 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"]+ "\n" + "H: " + v["descripcion_h"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 8 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"]+ "\n" + "H: " + v["descripcion_h"];
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 7 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"];
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 7 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"];
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 7 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 7 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"]+ "\n" + "G: " + v["descripcion_g"];
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 6 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"];
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 6 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"];
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 6 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 6 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"]+ "\n" + "F: " + v["descripcion_f"];
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 5 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"];
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 5 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"];
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 5 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 5 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"]+ "\n" + "E: " + v["descripcion_e"];
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 4 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"];
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 4 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"];
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 4 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 4 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"]+ "\n" + "D: " + v["descripcion_d"];
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 3 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"];
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 3 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"];
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 3 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 3 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"]+ "\n" + "C: " + v["descripcion_c"];
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 2 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"];
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 2 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"];
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 2 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 2 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"]+ "\n" + "B: " + v["descripcion_b"];
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 1 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"];
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 1 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">' + "\n" + "A: " + v["descripcion_a"];
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 1 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + "A: " + v["descripcion_a"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 1 && v["descripcion_a"]) n.consigna = "A: " + v["descripcion_a"];
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 0 && v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 0 && v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 0 && v["descripcion_a"]) n.consigna = v["descripcion"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 0 && v["descripcion_a"]) n.consigna = "";
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 8 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 8 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 8 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 8 && !v["descripcion_a"]) n.consigna = "";
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 7 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 7 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 7 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 7 && !v["descripcion_a"]) n.consigna = "";
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 6 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 6 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 6 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 6 && !v["descripcion_a"]) n.consigna = "";
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 5 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 5 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 5 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 5 && !v["descripcion_a"]) n.consigna = "";
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 4 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 4 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 4 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 4 && !v["descripcion_a"]) n.consigna = "";
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 3 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 3 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 3 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 3 && !v["descripcion_a"]) n.consigna = "";
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 2 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 2 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 2 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 2 && !v["descripcion_a"]) n.consigna = "";
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 1 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 1 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 1 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 1 && !v["descripcion_a"]) n.consigna = "";
                                if(v["descripcion"] && v["imagen"] && v["opciones"] == 0 && !v["descripcion_a"]) n.consigna = v["descripcion"] + "\n" + '<img src="' + v["imagen"] + '">';
                                if(!v["descripcion"] && v["imagen"] && v["opciones"] == 0 && !v["descripcion_a"]) n.consigna = '<img src="' + v["imagen"] + '">';
                                if(v["descripcion"] && !v["imagen"] && v["opciones"] == 0 && !v["descripcion_a"]) n.consigna = v["descripcion"];
                                if(!v["descripcion"] && !v["imagen"] && v["opciones"] == 0 && !v["descripcion_a"]) n.consigna = "";
                                n.respuesta = v["respuesta"];
                                n.valor = v["valor"];
                                n.opcion = v["opcion"];
                                n.opcion_1 = v["opcion_1"];
                                n.opcion_2 = v["opcion_2"];
                                n.opcion_3 = v["opcion_3"];
                                n.opcion_4 = v["opcion_4"];
                                n.opcion_5 = v["opcion_5"];
                                n.opcion_6 = v["opcion_6"];
                                n.opcion_7 = v["opcion_7"];
                                n.opcion_8 = v["opcion_8"];
                            }); 
                        refresh_field("table_20");
                        cur_frm.set_value("realizadas", cur_frm.doc.table_20.length);
                        console.log("PASO 6 TERMINADO")
                        } 
                    })
                )
            //}, 2000)
        }
    })
}

//PASO 7
async function paso_7() {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADA"){
            //setTimeout(() => {
                resolve(
                    cur_frm.clear_table("table_27"),
                    frappe.call({ 
                        method:"frappe.client.get_list", 
                        args: { 
                            doctype: "Rasgos de Personas",
                            filters: { 
                                evaluacion: cur_frm.doc.name,
                                tipo_de_rasgo: "DIRECTO - EVALUACION",
                            },
                            order_by: "n_pregunta asc", 
                            limit_page_length: 999, 
                            fields: ["name", "nombre", "desarrollo", "dimension", "tipo_de_variable", "descripcion", "superyo", "ello", "si_mismo"] 
                        }, 
                        callback: function(r) { 
                            r.message.forEach(function(v) {
                                var n = frappe.model.add_child(cur_frm.doc, "Rasgos Directos en Evaluaciones", "table_27");	
                                n.rasgo = v["name"];
                                n.nombre = v["nombre"];
                                n.desarrollo = v["desarrollo"];
                                n.tipo_de_variable = v["tipo_de_variable"];
                                n.descripcion = v["descripcion"];
                                n.dimension = v["dimension"];
                                n.superyo = v["superyo"];
                                n.ello = v["ello"];
                                n.si_mismo = v["si_mismo"];
                            }); 
                            refresh_field("table_27");
                            cur_frm.set_value("rasgos_directos_realizados", cur_frm.doc.table_27.length);
                            console.log("PASO 7 TERMINADO")
                        } 
                    })
                )
            //}, 2000)
        }
    })
    //guardar()
}