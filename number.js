// 1. Tipo Entero y decimal

const Entero=42
const decimal= 3.14

console.log(typeof Entero, typeof decimal)

// 2. Notacion Cientifica

const cientifico=5e3

// 3. Infinitos Y NaN

const infinito= Infinity

const noEsUnNumero=NaN

// Operaciones aritmeticas

// 1.Suma , Resta , Multiplicacion y Division 

const suma= 3+4
const resta=4-4
const Multiplicacion= 4*7
const Division=16/2

// Modulo Y exponenciacion

const modulo= 15 % 8

const exponenciacion =2**3

// precision le falta preciison tener cuidado

const resultado= 0.1+0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado===0.3)

// operaciones avanzadas

const raizCuadrada=Math.sqrt(16)
const ValorAbsoluto=Math.abs(-7)
const aleatorio= Math.random()

console.log(raizCuadrada)
console.log(ValorAbsoluto)
console.log(aleatorio)