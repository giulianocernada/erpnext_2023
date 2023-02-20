//// PREGUNTAS GENERALES

/// Crear HTML

frappe.ui.form.on("Rasgos de Personas", {
	imagen: function (frm, cdt, cdn) {

if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );

	},

	descripcion: function (frm, cdt, cdn) {

if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );


	},

	onload: function (frm, cdt, cdn) {

if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g + "\n" + "H: " + frm.doc.descripcion_h  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f + "\n" + "G: " + frm.doc.descripcion_g  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e + "\n" + "F: " + frm.doc.descripcion_f  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d + "\n" + "E: " + frm.doc.descripcion_e  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c + "\n" + "D: " + frm.doc.descripcion_d  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b + "\n" + "C: " + frm.doc.descripcion_c  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a + "\n" + "B: " + frm.doc.descripcion_b  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a  );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' + "\n" + "A: " + frm.doc.descripcion_a  );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + "A: " + frm.doc.descripcion_a  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "A: " + frm.doc.descripcion_a  );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 8 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 7 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 6 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 5 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 4 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 3 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 2 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 1 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );
if(frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  + "\n" + '<img src="' + frm.doc.imagen  + '">' );
if(!frm.doc.descripcion  && frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", '<img src="' + frm.doc.imagen  + '">' );
if(frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", frm.doc.descripcion  );
if(!frm.doc.descripcion  && !frm.doc.imagen  && frm.doc.opciones  == 0 && !frm.doc.descripcion_a ) frm.set_df_property("html", "options", "" );

	}
});

/// Opciones de la Pregunta

/// Filtros de Tabla de Preguntas del Protocolo

frappe.ui.form.on("Rasgos de Personas", {
	tipo_de_variable: function(frm, cdt, cdn) {
		if(frm.doc.tipo_de_variable == "CUALITATIVA")frm.set_query("rasgo", "table_31", function(doc, cdt, cdn) {
		         var d = locals[cdt][cdn]; 
		         return {
		                filters: {
		                       "tipo_de_rasgo": "PREGUNTA - GENERAL",
		                       "tipo_de_variable": ["like", "BINARIA"],
  		                }
		        }
		});
		if(frm.doc.tipo_de_variable == "PRIORIZATIVA")frm.set_query("rasgo", "table_31", function(doc, cdt, cdn) {
		         var d = locals[cdt][cdn]; 
		         return {
		                filters: {
		                       "tipo_de_rasgo": "PREGUNTA - GENERAL",
		                       "tipo_de_variable": ["like", "CUANTITATIVA"],
  		                }
		        }
		});
	}
});

frappe.ui.form.on("Opciones en Rasgos", {
	rasgo: function(frm, cdt, cdn) {
		var d = locals[cdt][cdn]; 
		cur_frm.save();
		setTimeout(()=>{


		frappe.call({ 
			method:"frappe.client.set_value", 
			args: { 
				"doctype": "Rasgos de Personas", 
				"name": d.rasgo,
				"fieldname": {
					"rasgo_complejo": frm.doc.name				
				}
			} 
		})
   		}, 1000);
	}
});



//// RASGOS INDIRECTOS DEL PSICOTECNICO

/// Traer coeficientes del Protocolo el Psicotecnico

frappe.ui.form.on("Rasgos de Personas", {
	traer_coeficientes: function(frm, cdt, cdn) {
		cur_frm.clear_table("table_34");
		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos Directos del Protocolo de Psicotecnico",
				parent: "Protocolos de Psicotecnicos", 
				filters: { 
					parent: frm.doc.protocolo_de_psicotecnico, 
				},
				order_by: "idx asc", 
				limit_page_length: 999, 
				fields: ["rasgo", "nombre", "tipo_de_variable", "descripcion"] 
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {
        				var n = frappe.model.add_child(frm.doc, "Coeficientes Regresores", "table_34");
					n.rasgo = v["rasgo"];
					n.nombre = v["nombre"];
					n.tipo_de_variable = v["tipo_de_variable"];
					n.descripcion = v["descripcion"];

					n.grado_su = 1;
					n.coeficiente_su = 0;

					n.grado_el = 1;
					n.coeficiente_el = 0;

					n.grado_si = 1;
					n.coeficiente_si = 0;

        			}); 
				refresh_field("table_34");
				cur_frm.set_value("coeficientes", frm.doc.table_34.length);
			} 
		})
	}
});

/// Contar coeficientes del Rasgo Indirecto

frappe.ui.form.on("Coeficientes Regresores", {
	table_34_add: function(frm, cdt, cdn) {
		cur_frm.set_value("coeficientes", frm.doc.table_34.length);
	},
	table_34_remove: function(frm, cdt, cdn) {
		cur_frm.set_value("coeficientes", frm.doc.table_34.length);
	}

});

//// REALIZAR EVALUACION


/// Cargar la Pregunta


frappe.ui.form.on("Rasgos de Personas", {
	onload: function(frm, cdt, cdn) {
		if (frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION") frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Preguntas en Protocolos de Evaluaciones",
				parent: "Protocolos de Evaluaciones",
				filters: { 
					parent: frm.doc.protocolo_de_evaluacion, 
					idx: parseInt(frm.doc.anterior) + 1, 
				}, 
				fieldname: ["idx", "descripcion", "imagen",  "dimension", "opciones"] 
			}, 
			callback: function(r) {
				cur_frm.set_value("descripcion", r.message.descripcion);
				cur_frm.set_value("imagen", r.message.imagen);
				cur_frm.set_value("opciones", r.message.opciones);
				cur_frm.set_value("n_pregunta", r.message.idx);

				if(frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "CUANTITATIVA") frm.set_df_property("valor", "reqd", true);
				if(frm.doc.tipo_de_rasgo != "RESPUESTA - EVALUACION" || frm.doc.tipo_de_variable != "CUANTITATIVA") frm.set_df_property("valor", "reqd", false);

				if(frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "CUALITATIVA") frm.set_df_property("opcion", "reqd", true);
				if(frm.doc.tipo_de_rasgo != "RESPUESTA - EVALUACION" || frm.doc.tipo_de_variable != "CUALITATIVA") frm.set_df_property("opcion", "reqd", false);

				if(frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA" && frm.doc.opciones >= 1) frm.set_df_property("opcion_1", "reqd", true);
				if(frm.doc.tipo_de_rasgo != "RESPUESTA - EVALUACION" || frm.doc.tipo_de_variable != "PRIORIZATIVA" || frm.doc.opciones < 1) frm.set_df_property("opcion_1", "reqd", false);

				if(frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA" && frm.doc.opciones >= 2) frm.set_df_property("opcion_2", "reqd", true);
				if(frm.doc.tipo_de_rasgo != "RESPUESTA - EVALUACION" || frm.doc.tipo_de_variable != "PRIORIZATIVA" || frm.doc.opciones < 2) frm.set_df_property("opcion_2", "reqd", false);

				if(frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA" && frm.doc.opciones >= 3) frm.set_df_property("opcion_3", "reqd", true);
				if(frm.doc.tipo_de_rasgo != "RESPUESTA - EVALUACION" || frm.doc.tipo_de_variable != "PRIORIZATIVA" || frm.doc.opciones < 3) frm.set_df_property("opcion_3", "reqd", false);

				if(frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA" && frm.doc.opciones >= 4) frm.set_df_property("opcion_4", "reqd", true);
				if(frm.doc.tipo_de_rasgo != "RESPUESTA - EVALUACION" || frm.doc.tipo_de_variable != "PRIORIZATIVA" || frm.doc.opciones < 4) frm.set_df_property("opcion_4", "reqd", false);

				if(frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA" && frm.doc.opciones >= 5) frm.set_df_property("opcion_5", "reqd", true);
				if(frm.doc.tipo_de_rasgo != "RESPUESTA - EVALUACION" || frm.doc.tipo_de_variable != "PRIORIZATIVA" || frm.doc.opciones < 5) frm.set_df_property("opcion_5", "reqd", false);

				if(frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA" && frm.doc.opciones >= 6) frm.set_df_property("opcion_6", "reqd", true);
				if(frm.doc.tipo_de_rasgo != "RESPUESTA - EVALUACION" || frm.doc.tipo_de_variable != "PRIORIZATIVA" || frm.doc.opciones < 6) frm.set_df_property("opcion_6", "reqd", false);

				if(frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA" && frm.doc.opciones >= 7) frm.set_df_property("opcion_7", "reqd", true);
				if(frm.doc.tipo_de_rasgo != "RESPUESTA - EVALUACION" || frm.doc.tipo_de_variable != "PRIORIZATIVA" || frm.doc.opciones < 7) frm.set_df_property("opcion_7", "reqd", false);

				if(frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA" && frm.doc.opciones >= 8) frm.set_df_property("opcion_8", "reqd", true);
				if(frm.doc.tipo_de_rasgo != "RESPUESTA - EVALUACION" || frm.doc.tipo_de_variable != "PRIORIZATIVA" || frm.doc.opciones < 8) frm.set_df_property("opcion_8", "reqd", false);

			}
		})
	}

});

/// Pasar a la pregunta que sigue

frappe.ui.form.on("Rasgos de Personas", {
	continuar: function(frm, cdt, cdn) {

		cur_frm.save();

		setTimeout(()=>{
		if (frm.doc.total_de_preguntas != frm.doc.n_pregunta) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Preguntas en Protocolos de Evaluaciones",
				parent: "Protocolos de Evaluaciones",
				filters: { 
					parent: frm.doc.protocolo_de_evaluacion, 
					idx: frm.doc.n_pregunta + 1, 
				}, 
				fieldname: ["idx", "pregunta", "nombre", "tipo_de_variable", "desarrollo", "descripcion", "imagen",  "dimension", "opciones", "a", "b", "c", "d", "e", "f", "g", "h", "opcion_a", "opcion_b", "opcion_c", "opcion_d", "opcion_e", "opcion_f", "opcion_g", "opcion_h"] 
			}, 
			callback: function(r) {
				frappe.new_doc("Rasgos de Personas", {

					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion,
					"psicotecnico": frm.doc.psicotecnico,
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo,
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"cuenta": frm.doc.cuenta,
					"persona": frm.doc.persona,

					"analizo": frm.doc.analizo,
					"cuenta_analizo": frm.doc.cuenta_analizo,

					"estado": "REALIZADO",

					"desarrollo": r.message.desarrollo,
					"tipo_de_rasgo": "RESPUESTA - EVALUACION",
					"dimension": r.message.dimension,
					"tipo_de_variable": r.message.tipo_de_variable,

					"nombre": r.message.nombre,
					"descripcion": r.message.descripcion,
					"imagen": r.message.imagen,
					"total_de_preguntas": frm.doc.total_de_preguntas,
					"opciones": r.message.opciones,
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
		});
		if (frm.doc.total_de_preguntas == frm.doc.n_pregunta) frappe.set_route("Form", "Evaluaciones", cur_frm.doc.evaluacion);
   		}, 1000);
	}
});


//// ANALIZAR RESPUESTAS

/// Crear rasgos directos CUANTITATIVOS SUPERYO

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.dimension == "SUPERYO" && frm.doc.estado == "ANALIZADO" && frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "CUANTITATIVA"){ 
		cur_frm.set_value("cuenta", frm.doc.owner);
		cur_frm.set_value("fin", frm.doc.creation);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion, 
				},
				fieldname: ["name", "psicotecnico", "periodo"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("evaluacion", r.message.name);
				cur_frm.set_value("psicotecnico", r.message.psicotecnico);
				cur_frm.set_value("periodo", r.message.periodo);

			}
		});
		if (frm.doc.n_pregunta == 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion, 
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		if (frm.doc.n_pregunta > 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
					n_pregunta: parseInt(frm.doc.n_pregunta) - 1,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		setTimeout(()=>{
		frappe.call({ 
			method:"frappe.client.insert", 
			args: { 
				doc: {
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.nombre,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": frm.doc.valor,
				}
			} 
		});
   		}, 1000);
		}
	}
});

/// Crear rasgos directos CUANTITATIVOS ELLO

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.dimension == "ELLO" && frm.doc.estado == "ANALIZADO" && frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "CUANTITATIVA"){ 
		cur_frm.set_value("cuenta", frm.doc.owner);
		cur_frm.set_value("fin", frm.doc.creation);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["name", "psicotecnico", "periodo"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("evaluacion", r.message.name);
				cur_frm.set_value("psicotecnico", r.message.psicotecnico);
				cur_frm.set_value("periodo", r.message.periodo);

			}
		});
		if (frm.doc.n_pregunta == 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		if (frm.doc.n_pregunta > 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
					n_pregunta: parseInt(frm.doc.n_pregunta) - 1,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		setTimeout(()=>{
		frappe.call({ 
			method:"frappe.client.insert", 
			args: { 
				doc: {
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.nombre,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": frm.doc.valor,
				}
			} 
		});
   		}, 1000);
		}
	}
});

/// Crear rasgos directos CUANTITATIVOS SI-MISMO

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.dimension == "SI-MISMO" && frm.doc.estado == "ANALIZADO" && frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "CUANTITATIVA"){ 
		cur_frm.set_value("cuenta", frm.doc.owner);
		cur_frm.set_value("fin", frm.doc.creation);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["name", "psicotecnico", "periodo"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("evaluacion", r.message.name);
				cur_frm.set_value("psicotecnico", r.message.psicotecnico);
				cur_frm.set_value("periodo", r.message.periodo);

			}
		});
		if (frm.doc.n_pregunta == 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		if (frm.doc.n_pregunta > 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
					n_pregunta: parseInt(frm.doc.n_pregunta) - 1,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		setTimeout(()=>{
		frappe.call({ 
			method:"frappe.client.insert", 
			args: { 
				doc: {
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.nombre,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": frm.doc.valor,
				}
			} 
		});
   		}, 1000);
		}
	}
});

/// Crear rasgos directos PRIORIZATIVOS SUPERYO

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.dimension == "SUPERYO" && frm.doc.estado == "ANALIZADO" && frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA"){ 
		cur_frm.set_value("cuenta", frm.doc.owner);
		cur_frm.set_value("fin", frm.doc.creation);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["name", "psicotecnico", "periodo"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("evaluacion", r.message.name);
				cur_frm.set_value("psicotecnico", r.message.psicotecnico);
				cur_frm.set_value("periodo", r.message.periodo);

			}
		});
		if (frm.doc.n_pregunta == 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		if (frm.doc.n_pregunta > 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
					n_pregunta: parseInt(frm.doc.n_pregunta) - 1,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Preguntas en Protocolos de Evaluaciones",
				parent: "Protocolos de Evaluaciones",
				filters: { 
					parent: frm.doc.protocolo_de_evaluacion, 
					idx: frm.doc.n_pregunta, 
				}, 
				fieldname: ["opciones"] 
			}, 
			callback: function(r) {
				cur_frm.set_value("opciones", r.message.opciones);
			}
		});
		setTimeout(()=>{
		if (frm.doc.opcion_1 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo":  parseInt(frm.doc.opciones),
					
				}	
			} 		
		});
		if (frm.doc.opcion_2 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo":  parseInt(frm.doc.opciones) - 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion_3 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo":  parseInt(frm.doc.opciones) - 2,
					
				}	
			} 		
		});
		if (frm.doc.opcion_4 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo":  parseInt(frm.doc.opciones) - 3,
					
				}	
			} 		
		});
		if (frm.doc.opcion_5 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo":  parseInt(frm.doc.opciones) - 4,
					
				}	
			} 		
		});
		if (frm.doc.opcion_6 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo":  parseInt(frm.doc.opciones) - 5,
					
				}	
			} 		
		});

		if (frm.doc.opcion_7 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo":  parseInt(frm.doc.opciones) - 6,
					
				}	
			} 		
		});

		if (frm.doc.opcion_8 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo":  parseInt(frm.doc.opciones) - 7,
					
				}	
			} 		
		});
		if (frm.doc.opcion_1 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
					
					
		if (frm.doc.opcion_1 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"superyo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
   		}, 1000);			
		}
	}
});

/// Crear rasgos directos PRIORIZATIVOS ELLO

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.dimension == "ELLO" && frm.doc.estado == "ANALIZADO" && frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA"){ 
		cur_frm.set_value("cuenta", frm.doc.owner);
		cur_frm.set_value("fin", frm.doc.creation);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["name", "psicotecnico", "periodo"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("evaluacion", r.message.name);
				cur_frm.set_value("psicotecnico", r.message.psicotecnico);
				cur_frm.set_value("periodo", r.message.periodo);

			}
		});
		if (frm.doc.n_pregunta == 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		if (frm.doc.n_pregunta > 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
					n_pregunta: parseInt(frm.doc.n_pregunta) - 1,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Preguntas en Protocolos de Evaluaciones",
				parent: "Protocolos de Evaluaciones",
				filters: { 
					parent: frm.doc.protocolo_de_evaluacion, 
					idx: frm.doc.n_pregunta, 
				}, 
				fieldname: ["opciones"] 
			}, 
			callback: function(r) {
				cur_frm.set_value("opciones", r.message.opciones);
			}
		});
		setTimeout(()=>{
		if (frm.doc.opcion_1 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello":  parseInt(frm.doc.opciones),
					
				}	
			} 		
		});
		if (frm.doc.opcion_2 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello":  parseInt(frm.doc.opciones) - 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion_3 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello":  parseInt(frm.doc.opciones) - 2,
					
				}	
			} 		
		});
		if (frm.doc.opcion_4 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello":  parseInt(frm.doc.opciones) - 3,
					
				}	
			} 		
		});
		if (frm.doc.opcion_5 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello":  parseInt(frm.doc.opciones) - 4,
					
				}	
			} 		
		});
		if (frm.doc.opcion_6 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello":  parseInt(frm.doc.opciones) - 5,
					
				}	
			} 		
		});

		if (frm.doc.opcion_7 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello":  parseInt(frm.doc.opciones) - 6,
					
				}	
			} 		
		});

		if (frm.doc.opcion_8 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello":  parseInt(frm.doc.opciones) - 7,
					
				}	
			} 		
		});
		if (frm.doc.opcion_1 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
					
					
		if (frm.doc.opcion_1 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"ello":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});
  		}, 1000);			
		}
	}
});

/// Crear rasgos directos PRIORIZATIVOS SI-MISMO

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.dimension == "SI-MISMO" && frm.doc.estado == "ANALIZADO" && frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "PRIORIZATIVA"){ 
		cur_frm.set_value("cuenta", frm.doc.owner);
		cur_frm.set_value("fin", frm.doc.creation);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["name", "psicotecnico", "periodo"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("evaluacion", r.message.name);
				cur_frm.set_value("psicotecnico", r.message.psicotecnico);
				cur_frm.set_value("periodo", r.message.periodo);

			}
		});
		if (frm.doc.n_pregunta == 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		if (frm.doc.n_pregunta > 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
					n_pregunta: parseInt(frm.doc.n_pregunta) - 1,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Preguntas en Protocolos de Evaluaciones",
				parent: "Protocolos de Evaluaciones",
				filters: { 
					parent: frm.doc.protocolo_de_evaluacion, 
					idx: frm.doc.n_pregunta, 
				}, 
				fieldname: ["opciones"] 
			}, 
			callback: function(r) {
				cur_frm.set_value("opciones", r.message.opciones);
			}
		});
		setTimeout(()=>{
		if (frm.doc.opcion_1 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo":  parseInt(frm.doc.opciones),
					
				}	
			} 		
		});
		if (frm.doc.opcion_2 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo":  parseInt(frm.doc.opciones) - 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion_3 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo":  parseInt(frm.doc.opciones) - 2,
					
				}	
			} 		
		});
		if (frm.doc.opcion_4 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo":  parseInt(frm.doc.opciones) - 3,
					
				}	
			} 		
		});
		if (frm.doc.opcion_5 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo":  parseInt(frm.doc.opciones) - 4,
					
				}	
			} 		
		});
		if (frm.doc.opcion_6 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo":  parseInt(frm.doc.opciones) - 5,
					
				}	
			} 		
		});

		if (frm.doc.opcion_7 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo":  parseInt(frm.doc.opciones) - 6,
					
				}	
			} 		
		});

		if (frm.doc.opcion_8 == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo":  parseInt(frm.doc.opciones) - 7,
					
				}	
			} 		
		});
		if (frm.doc.opcion_1 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_b,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
					
					
		if (frm.doc.opcion_1 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_c,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_d,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_e,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_f,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_g,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});			
		if (frm.doc.opcion_1 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones),
				}	
			} 		
		});			
		if (frm.doc.opcion_2 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 1,
				}	
			} 		
		});			
		if (frm.doc.opcion_3 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 2,
				}	
			} 		
		});			
		if (frm.doc.opcion_4 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 3,
				}	
			} 		
		});			
		if (frm.doc.opcion_5 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 4,
				}	
			} 		
		});			
		if (frm.doc.opcion_6 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 5,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_7 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 6,
				}	
			} 		
		});			
					
		if (frm.doc.opcion_8 == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 
					
					"nombre": frm.doc.opcion_h,
					
					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "CUANTITATIVA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,
					
					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,
					
					"cuenta_analizo": frappe.session.user,
					
					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,
					
					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,
					
					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,
					
					"si_mismo":  parseInt(frm.doc.opciones) - 7,
				}	
			} 		
		});

  		}, 1000);			
		}
	}
});


/// Crear rasgos directos CUALITATIVOS SUPERYO

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.dimension == "SUPERYO" && frm.doc.estado == "ANALIZADO" && frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "CUALITATIVA"){ 
		cur_frm.set_value("cuenta", frm.doc.owner);
		cur_frm.set_value("fin", frm.doc.creation);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["name", "psicotecnico", "periodo"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("evaluacion", r.message.name);
				cur_frm.set_value("psicotecnico", r.message.psicotecnico);
				cur_frm.set_value("periodo", r.message.periodo);

			}
		});
		if (frm.doc.n_pregunta == 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		if (frm.doc.n_pregunta > 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
					n_pregunta: parseInt(frm.doc.n_pregunta) - 1,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Preguntas en Protocolos de Evaluaciones",
				parent: "Protocolos de Evaluaciones",
				filters: { 
					parent: frm.doc.protocolo_de_evaluacion, 
					idx: frm.doc.n_pregunta, 
				}, 
				fieldname: ["opciones"] 
			}, 
			callback: function(r) {
				cur_frm.set_value("opciones", r.message.opciones);
			}
		});
		setTimeout(()=>{

		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});


		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});

		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});

		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});

		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"superyo": 1,
					
				}	
			} 		
		});
  		}, 1000);			
		}
	}
});

/// Crear rasgos directos CUALITATIVOS ELLO

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.dimension == "ELLO" && frm.doc.estado == "ANALIZADO" && frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "CUALITATIVA"){ 
		cur_frm.set_value("cuenta", frm.doc.owner);
		cur_frm.set_value("fin", frm.doc.creation);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["name", "psicotecnico", "periodo"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("evaluacion", r.message.name);
				cur_frm.set_value("psicotecnico", r.message.psicotecnico);
				cur_frm.set_value("periodo", r.message.periodo);

			}
		});
		if (frm.doc.n_pregunta == 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		if (frm.doc.n_pregunta > 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
					n_pregunta: parseInt(frm.doc.n_pregunta) - 1,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Preguntas en Protocolos de Evaluaciones",
				parent: "Protocolos de Evaluaciones",
				filters: { 
					parent: frm.doc.protocolo_de_evaluacion, 
					idx: frm.doc.n_pregunta, 
				}, 
				fieldname: ["opciones"] 
			}, 
			callback: function(r) {
				cur_frm.set_value("opciones", r.message.opciones);
			}
		});
		setTimeout(()=>{

		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});


		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});

		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});

		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});

		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"ello": 1,
					
				}	
			} 		
		});
  		}, 1000);			
		}
	}
});

/// Crear rasgos directos CUALITATIVOS SI-MISMO

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.dimension == "SI-MISMO" && frm.doc.estado == "ANALIZADO" && frm.doc.tipo_de_rasgo == "RESPUESTA - EVALUACION" && frm.doc.tipo_de_variable == "CUALITATIVA"){ 
		cur_frm.set_value("cuenta", frm.doc.owner);
		cur_frm.set_value("fin", frm.doc.creation);
		cur_frm.set_value("cuenta_analizo", frappe.session.user);
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion, 
				},
				fieldname: ["name", "psicotecnico", "periodo"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("evaluacion", r.message.name);
				cur_frm.set_value("psicotecnico", r.message.psicotecnico);
				cur_frm.set_value("periodo", r.message.periodo);

			}
		});
		if (frm.doc.n_pregunta == 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Evaluaciones",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		if (frm.doc.n_pregunta > 1) frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					cuenta: frm.doc.owner, 
					plan_de_periodo: frm.doc.plan_de_periodo,
					protocolo_de_evaluacion: frm.doc.protocolo_de_evaluacion,
					n_pregunta: parseInt(frm.doc.n_pregunta) - 1,
				},
				fieldname: ["creation"] 
			}, 
			callback: function(r) { 
				cur_frm.set_value("inicio", r.message.creation);
			}
		});
		frappe.call({ 
			method:"frappe.client.get_value", 
			args: { 
				doctype: "Preguntas en Protocolos de Evaluaciones",
				parent: "Protocolos de Evaluaciones",
				filters: { 
					parent: frm.doc.protocolo_de_evaluacion, 
					idx: frm.doc.n_pregunta, 
				}, 
				fieldname: ["opciones"] 
			}, 
			callback: function(r) {
				cur_frm.set_value("opciones", r.message.opciones);
			}
		});
		setTimeout(()=>{

		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "A") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "B") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});


		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "C") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "D") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});

		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "E") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});

		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "F") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 1,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "G") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});

		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_a,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_b,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_c,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_d,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_e,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_f,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_g,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 0,
					
				}	
			} 		
		});
		if (frm.doc.opcion == "H") frappe.call({ 			
			method:"frappe.client.insert", 		
			args: { 		
				doc: {	
					"doctype": "Rasgos de Personas", 

					"nombre": frm.doc.opcion_h,

					"tipo_de_rasgo": "DIRECTO - EVALUACION",
					"tipo_de_variable": "BINARIA",
					"desarrollo": frm.doc.desarrollo,
					"dimension": frm.doc.dimension,

					"persona": frm.doc.persona,
					"cuenta": frm.doc.cuenta,

					"cuenta_analizo": frappe.session.user,

					"estado": "ANALIZADO",
					"inicio": frm.doc.inicio,
					"fin": frm.doc.fin,

					"n_pregunta": frm.doc.n_pregunta,
					"evaluacion": frm.doc.evaluacion,
					"protocolo_de_evaluacion": frm.doc.protocolo_de_evaluacion, 
					"psicotecnico": frm.doc.psicotecnico, 
					"protocolo_de_psicotecnico": frm.doc.protocolo_de_psicotecnico,
					"periodo": frm.doc.periodo, 
					"protocolo_de_periodo": frm.doc.protocolo_de_periodo,
					"plan_de_periodo": frm.doc.plan_de_periodo,

					"descripcion": frm.doc.descripcion,
					"imagen": frm.doc.imagen,

					"si_mismo": 1,
					
				}	
			} 		
		});
  		}, 1000);			
		}
	}
});

/// Calcular Rasgos Directos del Psicotecnico

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.tipo_de_rasgo == "DIRECTO - PSICOTECNICO" && frm.doc.estado == "ANALIZADO"){

		cur_frm.clear_table("table_110");
		var total_superyo = 0; 	
		var total_ello = 0; 
		var total_si_mismo = 0;

		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					psicotecnico: frm.doc.psicotecnico, 
					tipo_de_rasgo: "DIRECTO - EVALUACION",
					nombre: frm.doc.nombre, 
				},
				limit_page_length: 999, 
				fields: ["name", "nombre", "tipo_de_variable", "descripcion", "superyo", "ello", "si_mismo"] 
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {
        				var n = frappe.model.add_child(frm.doc, "Rasgos Directos de Psicotecnicos", "table_110");	

					n.rasgo = v["name"];
					n.nombre = v["nombre"];
					n.tipo_de_variable = v["tipo_de_variable"];
					n.descripcion = v["descripcion"];
					n.superyo = v["superyo"];
					n.ello = v["ello"];
					n.si_mismo = v["si_mismo"];
		
					total_superyo += v["superyo"]; 
					total_ello += v["ello"];
					total_si_mismo += v["si_mismo"];
        			}); 
				refresh_field("table_110");
				cur_frm.set_value("superyo", total_superyo / frm.doc.table_110.length); 
				cur_frm.set_value("ello", total_ello / frm.doc.table_110.length); 
				cur_frm.set_value("si_mismo", total_si_mismo / frm.doc.table_110.length); 

			} 
		})
		}
	}
});

/// Calcular Rasgos Indirectos del Psicotecnico

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {

		if (frm.doc.tipo_de_rasgo == "INDIRECTO - PSICOTECNICO" && frm.doc.estado == "ANALIZADO"){



		cur_frm.clear_table("table_105");
		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					psicotecnico: frm.doc.psicotecnico, 
					tipo_de_rasgo: "DIRECTO - COEFICIENTE", 
					rasgo_dependiente: frm.doc.name, 
				},
				limit_page_length: 999, 
				fields: ["name", "nombre", "tipo_de_variable", "descripcion", "grado_su", "coeficiente_su", "grado_el", "coeficiente_el", "grado_si", "coeficiente_si", "respuesta_su", "respuesta_el", "respuesta_si", "superyo", "ello", "si_mismo"] 
			}, 
			callback: function(r) { 
					var total_superyo = 0; 	
					var total_ello = 0; 
					var total_si_mismo = 0; 

				r.message.forEach(function(v) {

        				var n = frappe.model.add_child(frm.doc, "Resultado Regresoras", "table_105");	

					n.rasgo = v["name"];
					n.nombre = v["nombre"];
					n.tipo_de_variable = v["tipo_de_variable"];
					n.descripcion = v["descripcion"];

					n.grado_su = v["grado_su"];
					n.coeficiente_su = v["coeficiente_su"];
					n.grado_el = v["grado_el"];
					n.coeficiente_el = v["coeficiente_el"];
					n.grado_si = v["grado_si"];
					n.coeficiente_si = v["coeficiente_si"];

					n.respuesta_su = v["respuesta_su"];
					n.respuesta_el = v["respuesta_el"];
					n.respuesta_si = v["respuesta_si"];

					n.resultado_su = v["superyo"];
					n.resultado_el = v["ello"];
					n.resultado_si = v["si_mismo"];

					total_superyo += v["superyo"]; 
					total_ello += v["ello"];
					total_si_mismo += v["si_mismo"];
        			}) 
				refresh_field("table_105");
				cur_frm.set_value("superyo", total_superyo); 
				cur_frm.set_value("ello", total_ello); 
				cur_frm.set_value("si_mismo", total_si_mismo); 


				if (frm.doc.limitante_minimo_superyo == 1 && total_superyo > frm.doc.minimo_superyo && frm.doc.limitante_maximo_superyo == 1 && total_superyo < frm.doc.maximo_superyo) cur_frm.set_value("resultado_superyo", "APROBADO"); 
				if (frm.doc.limitante_minimo_superyo == 0 && frm.doc.limitante_maximo_superyo == 1 && total_superyo < frm.doc.maximo_superyo) cur_frm.set_value("resultado_superyo", "APROBADO"); 
				if (frm.doc.limitante_minimo_superyo == 1 && total_superyo > frm.doc.minimo_superyo && frm.doc.limitante_maximo_superyo == 0) cur_frm.set_value("resultado_superyo", "APROBADO");
				if (frm.doc.limitante_minimo_superyo == 1 && total_superyo < frm.doc.minimo_superyo) cur_frm.set_value("resultado_superyo", "DESAPROBADO"); 
				if (frm.doc.limitante_maximo_superyo == 1 && total_superyo > frm.doc.maximo_superyo) cur_frm.set_value("resultado_superyo", "DESAPROBADO"); 

				if (frm.doc.limitante_minimo_ello == 1 && total_ello > frm.doc.minimo_ello && frm.doc.limitante_maximo_ello == 1 && total_ello < frm.doc.maximo_ello) cur_frm.set_value("resultado_ello", "APROBADO"); 
				if (frm.doc.limitante_minimo_ello == 0 && frm.doc.limitante_maximo_ello == 1 && total_ello < frm.doc.maximo_ello) cur_frm.set_value("resultado_ello", "APROBADO"); 
				if (frm.doc.limitante_minimo_ello == 1 && total_ello > frm.doc.minimo_ello && frm.doc.limitante_maximo_ello == 0) cur_frm.set_value("resultado_ello", "APROBADO");
				if (frm.doc.limitante_minimo_ello == 1 && total_ello < frm.doc.minimo_ello) cur_frm.set_value("resultado_ello", "DESAPROBADO"); 
				if (frm.doc.limitante_maximo_ello == 1 && total_ello > frm.doc.maximo_ello) cur_frm.set_value("resultado_ello", "DESAPROBADO");

				if (frm.doc.limitante_minimo_si_mismo == 1 && total_si_mismo > frm.doc.minimo_si_mismo && frm.doc.limitante_maximo_si_mismo == 1 && total_si_mismo < frm.doc.maximo_si_mismo) cur_frm.set_value("resultado_si_mismo", "APROBADO"); 
				if (frm.doc.limitante_minimo_si_mismo == 0 && frm.doc.limitante_maximo_si_mismo == 1 && total_si_mismo < frm.doc.maximo_si_mismo) cur_frm.set_value("resultado_si_mismo", "APROBADO"); 
				if (frm.doc.limitante_minimo_si_mismo == 1 && total_si_mismo > frm.doc.minimo_si_mismo && frm.doc.limitante_maximo_si_mismo == 0) cur_frm.set_value("resultado_si_mismo", "APROBADO");
				if (frm.doc.limitante_minimo_si_mismo == 1 && total_si_mismo < frm.doc.minimo_si_mismo) cur_frm.set_value("resultado_si_mismo", "DESAPROBADO"); 
				if (frm.doc.limitante_maximo_si_mismo == 1 && total_si_mismo > frm.doc.maximo_si_mismo) cur_frm.set_value("resultado_si_mismo", "DESAPROBADO")


			} 
		})
		}
	}
});

/// Calcular Rasgos Indirectos del Periodo

frappe.ui.form.on("Rasgos de Personas", {
	estado: function(frm, cdt, cdn) {
		if (frm.doc.tipo_de_rasgo == "INDIRECTO - PERIODO" && frm.doc.estado == "ANALIZADO"){ 	

		cur_frm.clear_table("table_110");
		var total_superyo = 0; 	
		var total_ello = 0; 
		var total_si_mismo = 0; 
		frappe.call({ 
			method:"frappe.client.get_list", 
			args: { 
				doctype: "Rasgos de Personas",
				filters: { 
					periodo: frm.doc.periodo, 
					tipo_de_rasgo: "INDIRECTO - PSICOTECNICO", 
					nombre: frm.doc.nombre, 
				},
				limit_page_length: 999, 
				fields: ["name", "nombre", "tipo_de_variable", "desarrollo", "descripcion", "superyo", "ello", "si_mismo"] 
			}, 
			callback: function(r) { 
				r.message.forEach(function(v) {
        				var n = frappe.model.add_child(frm.doc, "Rasgos Directos de Psicotecnicos", "table_110");	

					n.rasgo = v["name"];
					n.nombre = v["nombre"];
					n.tipo_de_variable = v["tipo_de_variable"];
					n.desarrollo = v["desarrollo"];
					n.descripcion = v["descripcion"];


					n.superyo = v["superyo"];
					n.ello = v["ello"];
					n.si_mismo = v["si_mismo"];
		
					total_superyo += v["superyo"]; 
					total_ello += v["ello"];
					total_si_mismo += v["si_mismo"];
        			}); 
				refresh_field("table_110");
				cur_frm.set_value("superyo", total_superyo / frm.doc.table_110.length); 
				cur_frm.set_value("ello", total_ello / frm.doc.table_110.length); 
				cur_frm.set_value("si_mismo", total_si_mismo / frm.doc.table_110.length); 

			} 
		})
		}
	}
});

