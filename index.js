 /* estructura swicth

switch(expresion){
    case valor1:
        // codigo a ejecutar
        break; // ya no se va ejecutar
    case valor2:
        // codigo a ejecutar
        break;
    default:
        //codigo por defecto
                
}
*/

let expr = "papayas";

switch(expr) { // hace una comparacion el swicht por eso decia que no habia papayas
    case "Naranjas":
        console.log("Las naranjas cuestan $ 20 pesos el kilo");
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $ 43 pesos el kilo");
        break;
    case "Platanos":
        console.log("El plátano cuesta $ 30 pesos el kilo");
        break;
    default:
        console.log(`Lo siento, no contamos con ${expr}`);
}

console.log("¿Hay algo más que desees?");
