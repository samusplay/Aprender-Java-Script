

/*
Clousure: Funcion que tiene acceso a variables de un ambito externo,incluso despues de que esa fucion haya terminado de ejcutarse

Ambito lexico: Cada vez que se declara una funcion crea su propio ambito lexico, y puede acceder a las variables dentro de ese ambito

*/

function outherFunction(){
    let outerVariable="I am from outer fuction"
    function innterFuction(){
        console.log(outerVariable)
    }

    return innterFuction
}

const ClousureExample=outherFunction()
ClousureExample()

function createCounter(){
    let count=0

    return function(){
        count++
        console.log(count)
    }
}
const counterA=createCounter()
counterA()
counterA()

const counterB=createCounter()

counterB()
// Tine problemas de almacenamiento de memoria, tener cuidado en eso

function outer(){
    let message ="Hello,"

    function innter(name){
        console.log(message+name)
        

    }
    return innter
}

const ClousureA =outer()
const ClousureB=outer()

ClousureA("Alicie")
ClousureA("Bob")