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
    await paso_1(1000)
    await paso_2(0)
    await paso_3(0)
    await paso_4()
    await paso_4comprobacion()
    await paso_5(5000)
    await paso_5comprobacion()
    await paso_6(2000)
    await paso_7()
    await paso_final(1000)
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

//PASO 1
async function paso_1(tiempo) {
    await new Promise(resolve => {
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
    })
    await guardar(tiempo)
}

//PASO 2
async function paso_2(tiempo) {
    await new Promise(resolve => {
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
                resolve(
                    cur_frm.set_value("psicotecnico", r.message.name)
                )
            } 
        })
    })
    await guardar(tiempo)
}

//PASO 3
async function paso_3(tiempo) {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADA"){
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
                    resolve(
                        cur_frm.set_value("periodo", r.message.name)
                    )
                } 
            })
        }
    })
    await guardar(tiempo)
}

//PASO 4
async function paso_4() {
    await paso_4a() 
    await paso_4b(paso_4respuestaEvaluacion, 5000);
    await paso_4d(paso_4documentoActual, 5000);
}

let paso_4documentoActual = ""
let paso_4respuestaEvaluacion = []

async function paso_4a() {
    return new Promise(resolve => {
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
            callback: function(r) {
                resolve(
                    paso_4documentoActual = cur_frm.doc.name,
                    paso_4respuestaEvaluacion = r.message,
                    console.log(paso_4respuestaEvaluacion)
                )
            }
        })
    })
}

async function paso_4b(lista, tiempo) {
    for(let doc in lista){
        await new Promise(resolve => {
            resolve(
                frappe.set_route("Form", "Rasgos de Personas", lista[doc]["name"])
            )
        })
        await paso_4c()
        await guardar(tiempo)
    }
}

async function paso_4c() {
    await new Promise(resolve => {
        resolve(
            cur_frm.set_value("estado", "ANALIZADO")
        )
    })
}

async function paso_4d(origen, tiempo) {
    await new Promise(resolve => {
        resolve(
            frappe.set_route("Form", "Evaluaciones", origen)
        )
    })
    await guardar(tiempo)
}

// PASO 4 COMPROBACION
let paso_4comprobacionRespuestaEvaluacion = []

async function paso_4comprobacion(){
    await paso_4comprobacion_a()
    if(paso_4comprobacionRespuestaEvaluacion.length > 0){
        await paso_4b(paso_4comprobacionRespuestaEvaluacion, 5000);
        await paso_4d(paso_4comprobacionRocumentoActual, 5000);
    }
}

async function paso_4comprobacion_a() {
    await new Promise(resolve => {
        paso_4comprobacionRespuestaEvaluacion = []
        frappe.call({
            method:"frappe.client.get_list",
            args: { 
                doctype: "Rasgos de Personas",
                filters: { 
                    plan_de_periodo: cur_frm.doc.plan_de_periodo,
                    protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                    owner: cur_frm.doc.owner,
                    tipo_de_rasgo: "RESPUESTA - EVALUACION",
                    evaluacion: ["!=", cur_frm.doc.name]
                },
                limit_page_length: 999,
                order_by: "name asc", 
                fields: ["name"] 
            },
            callback: function(r) {
                resolve(
                    paso_4comprobacionRespuestaEvaluacion = r.message,
                    console.log(paso_4respuestaEvaluacion)
                )
            }
        })
    })
}

//PASO 5
async function paso_5(tiempo) {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADA"){
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
                    } 
                })
            )
        }
    })
    await guardar(tiempo)
}

// PASO 5 COMPROBACION
let paso_5preguntasPlanificadas  = []
let paso_5preguntasRealizadas = []
let paso_5preguntasFaltantes = []
let paso_5comprobacionRealizada = false

async function paso_5comprobacion(){
    await paso_5comprobacion_a()
    await paso_5comprobacion_b()
    await paso_5comprobacion_c()
    await paso_5comprobacion_d(2000)
}

async function paso_5comprobacion_a() {
    await new Promise(resolve => {
        paso_5preguntasPlanificadas  = []
        paso_5preguntasRealizadas = []
        paso_5preguntasFaltantes = []
        paso_5comprobacionRealizada = false
        resolve(
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Preguntas en Protocolos de Evaluaciones",
                    parent: "Protocolos de Evaluaciones",
                    filters: { 
                        parent: cur_frm.doc.protocolo_de_evaluacion, 
                    },
                    order_by: "name asc",
                    limit_page_length: 999, 
                    fields: ["nombre"] 
                }, 
                callback: function(r) {
                    r.message.forEach(element => {
                        paso_5preguntasPlanificadas.push(element)
                    })
                    console.log(paso_5preguntasPlanificadas)
                }
            })
        )
    })
}

async function paso_5comprobacion_b() {
    await new Promise(resolve => {
        resolve(
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Preguntas en Evaluaciones",
                    parent: "Evaluaciones",
                    filters: { 
                        parent: cur_frm.doc.name, 
                    },
                    order_by: "name asc",
                    limit_page_length: 999, 
                    fields: ["nombre"] 
                }, 
                callback: function(r) {
                    r.message.forEach(element => {
                        paso_5preguntasRealizadas.push(element)
                    })
                    console.log(paso_5preguntasRealizadas)
                }
            })
        )
    })
}

async function paso_5comprobacion_c() {
    await new Promise(resolve => {
        if(paso_5preguntasRealizadas.length != paso_5preguntasPlanificadas.length){
            resolve(
                paso_5comprobacionRealizada = true,
                paso_5preguntasPlanificadas.forEach(function(element){
                    if(paso_5preguntasRealizadas.some(x => x.nombre === element["nombre"])){
                        console.log("presente")
                    } else {
                        paso_5preguntasFaltantes.push(element["nombre"])
                    }
                })
            )
        } else {
            resolve(
                console.log("sigue")
            )
        }
        console.log(paso_5preguntasFaltantes)
    })
}

async function paso_5comprobacion_d(tiempo) {
    await new Promise(resolve => {
        if(paso_5comprobacionRealizada === true){
            paso_5preguntasFaltantes.forEach(function(element){
                resolve(
                    frappe.call({ 
                    method:"frappe.client.get_list", 
                    args: { 
                        doctype: "Rasgos de Personas",
                        filters: { 
                            evaluacion: cur_frm.doc.name, 
                            tipo_de_rasgo: "RESPUESTA - EVALUACION", 
                            nombre: element
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
                    } 
                    })
                )
            })
        } else {
            resolve(
                console.log("finaliza")
            )
        }
    })
    await guardar(tiempo)
}

//PASO 6
async function paso_6(tiempo) {
    await new Promise(resolve => {
        if(cur_frm.doc.estado == "FINALIZADA"){
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
                        } 
                    })
                )
        }
    })
    await guardar(tiempo)
}

// PASO 7: COMPROBACION PASO 6
async function paso_7(){
    await paso_7a()
    await paso_7b()
    await paso_7c()
    await paso_7d()
    await paso_7e()
    await paso_7f()
    await paso_7g()
    await paso_7h(1000)
    await paso_7i(1000)
    await paso_7j(1000)
    await paso_7k(5000)
    await paso_7l(1000)
    await paso_7m()
    await paso_6(2000)
}

let paso_7rasgosDirectosPlanificados = []
let paso_7rasgosDirectosCreados = []
let paso_7rasgosDirectosTraidos = []
let paso_7respuestasEvaluacion = []
let paso_7listaFaltantes = []
let paso_7comprobacionRealizada = false
let paso_7listaPreguntasFaltantes = []
let paso_7listaFinalPreguntasFaltantes = []
let paso_7filtro = []
let paso_7listaFiltrada = []
let paso_7tabla = cur_frm.doc.table_27
let paso_7in = paso_7tabla.length
let paso_7eliminables = []
let paso_7listaAplanada = []

// PASO A: BUSCO LA CANTIDAD Y NOMBRES DE RASGOS DIRECTOS SEGUN PROTOCOLO
async function paso_7a() {
    await new Promise(resolve => {
        paso_7rasgosDirectosPlanificados = []
        paso_7rasgosDirectosCreados = []
        paso_7rasgosDirectosTraidos = []
        paso_7respuestasEvaluacion = []
        paso_7listaFaltantes = []
        paso_7comprobacionRealizada = false
        paso_7listaPreguntasFaltantes = []
        paso_7listaFinalPreguntasFaltantes = []
        paso_7filtro = []
        paso_7listaFiltrada = []
        paso_7in = paso_7tabla.length
        paso_7eliminables = []
        resolve(
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos Directos en Protocolos de Evaluaciones",
                    parent: "Protocolos de Evaluaciones",
                    filters: { 
                        parent: cur_frm.doc.protocolo_de_evaluacion, 
                    },
                    order_by: "name asc",
                    limit_page_length: 999, 
                    fields: ["nombre"] 
                }, 
                callback: function(r) {
                    r.message.forEach(element => {
                        paso_7rasgosDirectosPlanificados.push(element)
                    })
                    console.log(paso_7rasgosDirectosPlanificados)
                }
            })
        )
    })
}

// PASO B: BUSCO LA CANTIDAD Y NOMBRES DE RASGOS CREADOS DEL TIPO "DIRECTO - EVALUACION"
async function paso_7b() {
    await new Promise(resolve => {
        resolve(
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        evaluacion: cur_frm.doc.name,
                        protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                        tipo_de_rasgo: "DIRECTO - EVALUACION"
                    },
                    order_by: "name asc",
                    limit_page_length: 999, 
                    fields: ["nombre"] 
                }, 
                callback: function(r) {
                    r.message.forEach(element => {
                        paso_7rasgosDirectosCreados.push(element)
                    })
                    console.log(paso_7rasgosDirectosCreados)
                }
            })
        )
    })
}

// PASO C: BUSCO LA CANTIDAD Y NOMBRES DE RASGOS DIRECTOS COMPLETADOS EN LA TABLA
async function paso_7c() {
    await new Promise(resolve => {
        resolve(
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos Directos en Evaluaciones",
                    parent: "Evaluaciones",
                    filters: { 
                        parent: cur_frm.doc.name, 
                    },
                    order_by: "name asc",
                    limit_page_length: 999, 
                    fields: ["nombre"] 
                }, 
                callback: function(r) {
                    r.message.forEach(element => {
                        paso_7rasgosDirectosTraidos.push(element)
                    })
                    console.log(paso_7rasgosDirectosTraidos)
                }
            })
        )
    })
}

// PASO D: ENTRE LAS LISTAS DE LOS PASOS 1 Y 2 BUSCO CUALES SON LOS FALTANTES
async function paso_7d() {
    await new Promise(resolve => {
        if(paso_7rasgosDirectosPlanificados.length != paso_7rasgosDirectosCreados.length){
            resolve(
                paso_7comprobacionRealizada = true,
                paso_7rasgosDirectosPlanificados.forEach(function(element){
                    if(paso_7rasgosDirectosCreados.some(x => x.nombre.includes(element["nombre"]))){
                        resolve(
                            
                        )
                    } else {
                        resolve(
                            paso_7listaFaltantes.push(element) 
                        )
                    }
                }),
                console.log(paso_7listaFaltantes)
            )
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO E: BUSCO LOS NOMBRES DE LAS RESPUESTAS
async function paso_7e() {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            frappe.call({ 
                method:"frappe.client.get_list", 
                args: { 
                    doctype: "Rasgos de Personas",
                    filters: { 
                        owner: cur_frm.doc.owner,
                        protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                        tipo_de_rasgo: "RESPUESTA - EVALUACION",
                    },
                    order_by: "name asc",
                    limit_page_length: 999, 
                    fields: ["name", "nombre", "tipo_de_variable"] 
                }, 
                callback: function(r) {
                    resolve(
                        paso_7respuestasEvaluacion = r.message,
                        console.log(paso_7respuestasEvaluacion)
                    )
                }
            })
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO F: FILTRO LAS RESPUESTAS QUE FALTAN
async function paso_7f() {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            paso_7respuestasEvaluacion.forEach(function(element){
                if(paso_7listaFaltantes.some(x => x.nombre.includes(element["nombre"]))){
                    if(paso_7listaPreguntasFaltantes.some(y => y.nombre == element["nombre"] && y.tipo_de_variable == element["tipo_de_variable"])){
                        resolve(
                            
                        )
                    } else {
                        resolve(
                            paso_7listaPreguntasFaltantes.push(element)
                        )
                    }
                } else {
                    resolve(
                        
                    )
                }
            })
            console.log(paso_7listaPreguntasFaltantes)
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO G: OBTENGO LA LISTA DE NOMBRES DE LOS RASGOS DIRECTOS ASOCIADOS A ESAS RESPUESTAS
async function paso_7g() {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            paso_7listaPreguntasFaltantes.forEach(function(element){
                paso_7filtro = paso_7rasgosDirectosPlanificados.filter(x => x.nombre.includes(element["nombre"]))
                if(paso_7listaFiltrada.includes(paso_7filtro)){
                    resolve(

                    )
                } else {
                    resolve(
                        paso_7listaFiltrada.push(paso_7filtro)
                    )
                }
                console.log(paso_7filtro)
            })
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
}

// PASO H: APLANO LA LISTA Y CREO UNA NUEVA
async function paso_7h(tiempo) {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            resolve(
                paso_7listaFiltrada = paso_7listaFiltrada.flat(),
                paso_7listaFiltrada.forEach(function(element){
                    if(paso_7listaAplanada.includes(element.nombre)){

                    } else {
                        paso_7listaAplanada.push(element.nombre)
                    }
                    console.log(paso_7listaAplanada)
                })
            )
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
    if(paso_7comprobacionRealizada === true){
    await guardar(tiempo)
    }
}

// PASO I: REMUEVO LAS FILAS DE LA TABLA SECUNDARIA DE RASGOS DIRECTOS EN EVALUACIONES
async function paso_7i(tiempo) {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            while (paso_7in--){   
                resolve(
                    paso_7listaAplanada.forEach(function(element){
                        if(paso_7tabla[paso_7in].nombre === element){
                            cur_frm.get_field("table_27").grid.grid_rows[paso_7in].remove()
                        } else {

                        }
                    })
                )
            }
            cur_frm.refresh_field("table_27")
            cur_frm.set_value("rasgos_directos_realizados", cur_frm.doc.table_27.length)
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
    if(paso_7comprobacionRealizada === true){
        await guardar(tiempo)
    }
}

// PASO J: ELIMINO LOS DOCUMENTOS QUE HAY EN RASGOS DIRECTOS ASI CUANDO SE GENERAN NUEVOS NO HAY DUPLICADOS
async function paso_7j(tiempo) {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            resolve(
                paso_7listaAplanada.forEach(function(element){
                        frappe.call({ 
                            method:"frappe.client.get_list", 
                            args: { 
                                doctype: "Rasgos de Personas",
                                filters: { 
                                    evaluacion: cur_frm.doc.name,
                                    protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                                    tipo_de_rasgo: "DIRECTO - EVALUACION",
                                    nombre: ["like", element]
                                },
                                order_by: "name asc",
                                limit_page_length: 999, 
                                fields: ["name", "nombre"]
                            }, 
                            callback: function(r) {
                                if(r.message != ""){
                                    if(paso_7eliminables.includes(r.message[0].name)){

                                    } else {
                                            paso_7eliminables.push(r.message[0].name)
                                    }
                                } else {
                                    console.log("sigue")
                                }
                            }
                        })
                })
            )
            console.log(paso_7eliminables)
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
    if(paso_7comprobacionRealizada === true){
        await guardar(tiempo)
    }
}

// PASO K: ELIMINO
async function paso_7k(tiempo) {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            resolve(
                console.log("eliminables" + paso_7eliminables),
                paso_7eliminables.forEach(function(element){
                    frappe.call({ 
                        method: "frappe.client.delete",
                        args: {
                            doctype: "Rasgos de Personas",
                            name: element
                        },
                        callback: function(r) {
                            console.log(element + " eliminado.")
                        }
                    })
                })
            )
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
    if(paso_7comprobacionRealizada === true){
        await guardar(tiempo)
    }
}

// PASO L
async function paso_7l(tiempo) {
    await new Promise(resolve => {
        if(paso_7comprobacionRealizada === true){
            resolve(
                paso_7listaPreguntasFaltantes.forEach(function(element){
                    frappe.call({ 
                        method:"frappe.client.get_list", 
                        args: { 
                            doctype: "Rasgos de Personas",
                            filters: { 
                                owner: cur_frm.doc.owner,
                                protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
                                tipo_de_rasgo: "RESPUESTA - EVALUACION",
                                tipo_de_variable: element["tipo_de_variable"],
                                nombre: element["nombre"]
                            },
                            order_by: "name asc",
                            limit_page_length: 999, 
                            fields: ["name"] 
                        }, 
                        callback: function(r) {
                                paso_7listaFinalPreguntasFaltantes.push(r.message[0].name)
                        }
                    })
                }),
                console.log(paso_7listaFinalPreguntasFaltantes)    
            )    
        } else {
            resolve(
                console.log("sigue")
            )
        }
    })
    if(paso_7comprobacionRealizada === true){
        await guardar(tiempo)
    }
}

// PASO M:
let paso_7documentoActual = ""
let paso_7respuestaEvaluacion = []

async function paso_7m() {
    if(paso_7comprobacionRealizada === true){
        paso_7documentoActual = cur_frm.doc.name,
        await paso_7n(paso_7listaFinalPreguntasFaltantes, 1000, 5000),
        await paso_7o(paso_7documentoActual, 5000)
    }
}

async function paso_7n(lista, tiempo, tiempo2) {
    for(let doc in lista){
        await new Promise(resolve => {
            resolve(
                frappe.set_route("Form", "Rasgos de Personas", lista[doc])
            )
        })
        await paso_7p()
        await guardar(tiempo)
        await paso_7q()
        await guardar(tiempo2)
    }
}

async function paso_7p() {
    await new Promise(resolve => {
        resolve(
            cur_frm.set_value("estado", "REALIZADO")
        )
    })
}

async function paso_7q() {
    await new Promise(resolve => {
        resolve(
            cur_frm.set_value("estado", "ANALIZADO")
        )
    })
}

async function paso_7o(origen, tiempo) {
    await new Promise(resolve => {
        resolve(
            frappe.set_route("Form", "Evaluaciones", origen)
        )
    })
    await guardar(tiempo)
}

// PASO 8: PASO FINAL
async function paso_final(tiempo){
    await new Promise(resolve => {
            if(paso_5preguntasRealizadas.length != paso_5preguntasPlanificadas.length){
                resolve(
                    cur_frm.set_value("analisis_automatico", "COMPLETADO CON ERRORES")
                )
            } else {
                resolve(
                    cur_frm.set_value("analisis_automatico", "COMPLETADO")
                )
            }
    })
    await guardar(tiempo)
}