let preguntas = [
    {nombre: "VINCULACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VINCULACIONES", tipo_de_variable: "PRIORIZATIVA"},
    {nombre: "VINCULACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VINCULACIONES", tipo_de_variable: "PRIORIZATIVA"},  
    {nombre: "PRESTACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "PRESTACIONES", tipo_de_variable: "PRIORIZATIVA"}, 
    {nombre: "VIAJES", tipo_de_variable: "CUANTITATIVA"},
    {nombre: "VINCULACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VINCULACIONES", tipo_de_variable: "PRIORIZATIVA"},
    {nombre: "VINCULACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VINCULACIONES", tipo_de_variable: "PRIORIZATIVA"},  
    {nombre: "PRESTACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "PRESTACIONES", tipo_de_variable: "PRIORIZATIVA"}, 
    {nombre: "VIAJES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VIAJES", tipo_de_variable: "PRIORIZATIVA"}
]

let rasgos = [
    {nombre: "VINCULACIONES"}, 
    {nombre: "VINCULACIONES - A"}, 
    {nombre: "VINCULACIONES - B"}, 
    {nombre: "PRESTACIONES"}, 
    {nombre: "PRESTACIONES - A"}, 
    {nombre: "PRESTACIONES - B"}
]

let preguntas = [
    {nombre: "VINCULACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VINCULACIONES", tipo_de_variable: "PRIORIZATIVA"},
    {nombre: "VINCULACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VINCULACIONES", tipo_de_variable: "PRIORIZATIVA"},  
    {nombre: "PRESTACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "PRESTACIONES", tipo_de_variable: "PRIORIZATIVA"}, 
    {nombre: "VIAJES", tipo_de_variable: "CUANTITATIVA"},
    {nombre: "VINCULACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VINCULACIONES", tipo_de_variable: "PRIORIZATIVA"},
    {nombre: "VINCULACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VINCULACIONES", tipo_de_variable: "PRIORIZATIVA"},  
    {nombre: "PRESTACIONES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "PRESTACIONES", tipo_de_variable: "PRIORIZATIVA"}, 
    {nombre: "VIAJES", tipo_de_variable: "CUANTITATIVA"}, 
    {nombre: "VIAJES", tipo_de_variable: "PRIORIZATIVA"}
]

let rasgos = [
    {nombre: "VINCULACIONES"}, 
    {nombre: "VINCULACIONES - A"}, 
    {nombre: "VINCULACIONES - B"}, 
    {nombre: "PRESTACIONES"}, 
    {nombre: "PRESTACIONES - A"}, 
    {nombre: "PRESTACIONES - B"}
]

let listaPreguntas = []

preguntas.forEach(function(element){
    console.log(element)
    if(rasgos.some(x => x.nombre.includes(element["nombre"]))){
        if(listaPreguntas.some(y => y.nombre.includes(element["nombre"]) && y.tipo_de_variable.includes(element["tipo_de_variable"]))){

        } else {
            listaPreguntas.push(element)
        }
        
    }
})