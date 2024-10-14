// How to create an Array

// 1.new Array() or Array()

const fruits=Array('apple','banana','orange')
console.log(fruits)

const data=Array("factura","pago","consumo")
console.log(data) // Array en funcion al modelo

//2. Array literal syntax

const oneNumber=[4]
console.log(oneNumber)

const emptyarray=[]
console.log(emptyarray) // array Vacio

const sports=['soccer','tenis','rugbhy']

const recipeIngredinets=[
    'flour',
    true,
    2,
    {
        ingredient:'milk',quantity:'1 cup'
    },
    false
    
]

console.log(recipeIngredinets)

// Accesing array elemnts

const firstFruit=fruits[0]
console.log(firstFruit)

//length property

const numberOfFruits=fruits.length
console.log(numberOfFruits)

// Mutability

fruits.push('watermelon') // pueden transfromar el array original
console.log(fruits)

const newFruits=fruits.concat(['grape','kiwi'])
console.log()