function suma (a,b){
    return a+b
}

suma(3,5)

function calculateDiscountPrice(price, discountPercentage){
    const disccount=(price*discountPercentage/100)
    const priceWhitDiscount= price-disccount

    return priceWhitDiscount
}

 const originalprice=100
 const discountPercentage=20
 const finalPrice= calculateDiscountPrice(originalprice,discountPercentage)

console.log(`Original Price: $`+originalprice)
console.log(`Discount:`+ discountPercentage+'%')
console.log('price With discount: $'+finalPrice)