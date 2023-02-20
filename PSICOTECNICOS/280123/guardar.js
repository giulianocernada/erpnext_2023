async function guardar(tiempo) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(
              cur_frm.save()
            );
        }, tiempo)
    })
}

cur_frm.clear_table("table_23")
cur_frm.clear_table("table_25")
cur_frm.clear_table("table_28")
cur_frm.clear_table("table_166")
cur_frm.refresh_field("table_23")
cur_frm.refresh_field("table_25")
cur_frm.refresh_field("table_28")
cur_frm.refresh_field("table_166")
cur_frm.set_value("estado", "INICIADO")