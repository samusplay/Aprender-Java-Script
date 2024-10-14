const numerosecreto=Math.floor(Math.random()*10+1) //numero aleatorio

const numeroJugador=parseInt(prompt('Adivina el numero secreto entre el 1 al 10'));

console.log('Este es el numero con el que juegas $ {numeroJugador}')

if (numerojugador===numerosecreto){
    console.log("Felicidades, adivinaste el numero secreto!")
}else if(numeroJugador<numerosecreto){
    console.log("El numero es demasiado bajo, intenta de nuevo");
    
}