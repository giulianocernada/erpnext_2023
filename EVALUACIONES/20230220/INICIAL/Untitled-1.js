/*
PASO 1: BUSCO LOS RASGOS DIRECTOS DE LOS PROTOCOLOS (EJEMPLO 216). ESTO ME VA A DECIR CUANTOS SON EN TOTAL
PASO 2: BUSCO LOS RASGOS DIRECTOS DEL TIPO "DIRECTO - EVALUACION" PARA LA EVALUACION (EJEMPLO 189). ESTO ME VA A DECIR CUANTOS SE CREARON DESDE LAS PREGUNTAS 
        Y ME VA A PERMITIR DARME CUENTA SI FALTAN
PASO 2: BUSCO LOS RASGOS DIRECTOS EN LA EVALUACION (EJEMPLO 188). ESTO VA A DEPENDER DEL PASO ANTERIOR, PARA VER SI SE COMPLETO BIEN LA TABLA.
PASO 3: COMPARO Y EXTRAIGO LOS FALTANTES (EJEMPLO 28: "MERCADOS", "MERCADOS - A", "VIAJES - H", "VINCULACIONES", "VINCULACIONES - A")
PASO X: PASAR A UNA LISTA EN LIMPIO EL NOMBRE (SI ES "MERCADOS - A" QUE QUEDE COMO MERCADO)

OPCIONES:
A - LA TABLA ESTA INCOMPLETA PORQUE NO LA COMPLETO BIEN



*/

// BORRA DE TABLA

var tbl = cur_frm.doc.table_27 || []
var i = tbl.length

while (i--)
{
    if(tbl[i].nombre.includes('VINCULACIONES'))
    {
        console.log(tbl[i].tipo_de_variable)
        console.log(tbl[i].superyo)
        cur_frm.get_field("table_27").grid.grid_rows[i].remove();
    }
}
cur_frm.refresh_field("table_27")
cur_frm.set_value("rasgos_directos_realizados", cur_frm.doc.table_27.length)

// BORRAR DOCUMENTOS
// OBTENER LOS NOMBRES DE LOS DOCTYPES QUE INCLUYAN A ESE DOCUMENTO
frappe.call({ 
    method:"frappe.client.get_list", 
    args: { 
        doctype: "Rasgos de Personas",
        filters: { 
            evaluacion: cur_frm.doc.name,
            protocolo_de_evaluacion: cur_frm.doc.protocolo_de_evaluacion,
            tipo_de_rasgo: "DIRECTO - EVALUACION",
            nombre: "MERCADOS"
        },
        order_by: "name asc",
        limit_page_length: 999, 
        fields: ["name"]
    }, 
    callback: function(r) {
            documentos2 = r.message
            console.log(documentos2)
    }
})

//BORRAR


frappe.call({
    method: "frappe.client.delete",
    args: {
        doctype: "Rasgos de Personas",
        name: "RAS-CAP0043824"
    },
    callback: function(r) {
        console.log("RAS-CAP0043824")
    }
})

