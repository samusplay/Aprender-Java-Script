// funciones puras

// side Effects efectos secundarios

//1. Modificar varibales globales

//2. modificar parametros
//3. Llamados http osea solictudes
// 4.imprimir mensajes en pantalla o consola
//5. Manipulacion del DOM
// 6.oBbtener la hora actual

function sum(a,b){
    return a+b

} // esta funcion es pura

// funcion impura ya que se tiene un efecto secudnarios 
function sum(a,b){
    console.log('A',a)
    return a+b

}

let total=0

function sumWhithSideEffect(a){
    total +=a
    return total
}

// funcion pura 
function square(x){
    return x*x
}

function addTen(y){
    return y+10
}

const number= 5
const finalResult=addTen(square(number)) // combiancion de funciones
console.log(finalResult)