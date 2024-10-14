const greeting=function(name){
    return `Hi,${name}`
} // funcion normal

const newGreeting =(name)=>{
    return `Hi, ${name}`
}
// Arow function -implicit return

const newGreetingImplicit =name=> `hi, ${name}` // de manera mas implicita se le pone mas parantesis para mas parametros
    

// Lexical Biding

// crear objetos y Metdos

const functionalCharacter = {
    name: 'Uncle Ben',
    messagewithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    messagewithTraditionalFunction: message => {
        console.log(`${this.name} says: ${message}`)
    }
};

// Ejemplo de uso:
functionalCharacter.messagewithTraditionalFunction("With great power comes great responsibility");
functionalCharacter .messagewithTraditionalFunction(" beacrful this doctor octupus")
