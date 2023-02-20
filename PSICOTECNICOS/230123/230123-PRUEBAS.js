let lista = []
let largoLista
let acumulador = 0
let index1 = 0
let index2 = 100

function generarLista(){
    for(let i=0; i < 432; i++){
        lista.push(i)
    }
}

function contarItems(){
    largoLista = lista.length
    while(largoLista > 100){
        if(largoLista > 100){
            acumulador += 1
            largoLista -= 100
        }
        console.log(largoLista + " - " + acumulador)
    }
    if(largoLista<100){
        acumulador += 1
        console.log(acumulador)
    }
    //})
}

async function mostrarItems(veces){
    for(let i=0; i < veces; i++){
        lista.forEach(function(element, i){
            if(i >= index1 && i < index2){
                mostrar(element)
            }
        })
        index1 += 100
        index2 += 100
    }
}

async function mostrar(elemento){
    setTimeout(() => {
    console.log(elemento)
    }, 1000)
}