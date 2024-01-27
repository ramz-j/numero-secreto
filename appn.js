let listaGenerica = [];

console.log(listaGenerica);

let lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);

function mostrarLista(lista){
    for(i=0; i<lista.length; i++){
        console.log(lista[i]);
    }
}

mostrarLista(lenguajesDeProgramacion);
console.log('');

function mostrarListaInversa(lista){
    for(i=lista.length-1; i>=0; i--){
        console.log(lista[i]);
    }
}

mostrarListaInversa(lenguajesDeProgramacion);

let notas = [17, 15, 19, 9, 20];

function promedioNotas(listaNotas){
    let acum = listaNotas.reduce((a,b) => a+b,0);
    console.log(acum);
    let promedio = acum/listaNotas.length;
    console.log(`El promedio de las notas es ${promedio}`);
}

promedioNotas(notas);

function notaMayorMenor(notas){
    let mayor = Math.max(...notas);
    let menor = Math.min(...notas);
    console.log(`La mayor nota es ${mayor}`);
    console.log(`La menor nota es ${menor}`);
}

notaMayorMenor(notas);

let frutas = ['manzanas', 'uvas', 'guanabanas', 'fresas'];

function buscarElemento(fruta, listaFrutas){
    let index = listaFrutas.indexOf(fruta);
    console.log(`${fruta} en la posición ${index}`);
}

buscarElemento('manzanas', frutas);

let listaA = [2,3,4];
let listaB = [1,5,6];

function sumaListas(listasA, listasB){
    for(let i in listaA){
        console.log(listaA[i]+listaB[i]);
    }
}

sumaListas(listaA, listaB);

function numerosAlCuadrado(lista){
    let nuevaLista = [];
    for(let i in lista){
        nuevaLista[i] = lista[i]*lista[i];
    }
    return nuevaLista;
}
let listaAlCuadrado = numerosAlCuadrado(listaA);
console.log(listaAlCuadrado);