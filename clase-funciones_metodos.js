// 1. Pasar funciones como argumentos (callback)
function sayHello() {
    console.log("Hola, mundo!");
}
function executeCallback(callback) {
    callback();
}
executeCallback(sayHello);

// 2. Retornar funciones (closure)
function createGreeting(name) {
    return function() {
        console.log(`Hola, ${name}!`);
    };
}
const greetJuan = createGreeting("Juan");
greetJuan();

// 3. Asignar funciones a variables (expresión de función)
const greetFunction = function() {
    console.log("Hola desde una función asignada a una variable!");
};
greetFunction();

// Usando arrow function con un nombre diferente para evitar conflicto
const greetWithArrow = () => {
    console.log("Hola desde una función flecha!");
};
greetWithArrow();

// 4. Métodos de las funciones (usando `call`)
function greet() {
    console.log(`Hola desde el objeto ${this.name}`);
}
const obj = { name: "Objeto A" };
greet.call(obj);

// 5. Anidar funciones (nested functions)
function outerFunction() {
    const outerVar = "Variable de la función externa";
    function innerFunction() {
        console.log(outerVar);
    }
    innerFunction();
}
outerFunction();

// 6. Almacenar funciones en objetos
const rocket = {
    name: 'Falcon 9',
    launchMessage() {
        console.log(`${this.name} está despegando... ¡Pum!`);
    }
};
rocket.launchMessage();


