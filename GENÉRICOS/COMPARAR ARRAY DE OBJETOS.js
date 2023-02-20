let ejemplo_a = [{nombre: "1"}, {nombre: "2"}, {nombre: "3"}, {nombre: "4"}, {nombre: "5"}, {nombre: "6"}, {nombre: "7"}, {nombre: "8"}, {nombre: "9"}, {nombre: "10"}]
let ejemplo_b = [{nombre: "1"}, {nombre: "2"}, {nombre: "3"}, {nombre: "5"}, {nombre: "6"}, {nombre: "8"}, {nombre: "9"}, {nombre: "10"}]

if(ejemplo_b.length != ejemplo_a.length){
    ejemplo_a.forEach(function(element){
        if(ejemplo_b.some(x => x.nombre === element["nombre"])){
            console.log("PRESENTE: " + element["nombre"])
        } else {
            console.log("FALTANTE: " + element["nombre"])
        }
    })
}