// More methods for arrays

const months =  new Array ("may","january", "july", "june");
const shoppingcart = [
    
        {productName : "Smart tv 60", price : 900,},
        {productName : "Smart tv 50", price : 700},
        {productName : "Tablet", price : 500},
        {productName : "Smart phone", price : 900},
        {productName : "Google assistand", price : 600,},
        {productName : "Sound-bar", price : 400,},
         {productName : "Sound-bar", price : 700,},
        {productName : "Play station", price : 800,},
        {productName : "Wii", price: 450,},
        {productName : "Mouse", price: 50,}

]

// Recooreer un  arreglo con el ForEach para que muestre todos los elementos
// En este caso month es un parametro
months.forEach (function(month){
    console.log (month)
}
);

//verificar si un mes existe con ForEach
// months.forEach (function(month1){
    
//     if (month1 == "june"){
//         console.log("the month of june exist in the array");
//     } else {
//         console.log ("Doesn`t exist")
//     }
//     console.log (month1)
// });

//Buscar en un arreglo si algo existe, si existe devuelve true si no te devuleve un false

const result = months.includes ("june")
console.log (result)

// ==============================================

// En JS includes no fundciona con los objetos.

const result2 = shoppingcart.includes ("Tablet")
console.log (result2)

const num = 5 == 5;
console.log ("igualacion doble", num);

// Con igualcion doble solo compara el valor por eso en el navegador tenemoas un true.
const num2 = 5 == "5";
console.log ("igualacion doble", num2);

// Con igualacion triple verifica si es de el mismo valor y tipo.
const num3 = 5 === "5";
console.log ("igualacion doble", num3);

// ==============================================
// En conclusion para un arreglo plano se usa includes y para un arreglo con pobjetos se usa some.
// const result4 = shoppingcar.some (function(product){
//     return product.productName === "Mouse"
// })

// console.log (result4)

// Hace lo mismo que el codigo anterior pero màs corto con arrow function 
let result4 = shoppingcart.some (product => product.productName === "Play station")
console.log (result4)

//================================================
// Sumar todos los precios del carrito de compras
result5 = shoppingcart.reduce (function(total, product){
    return total + product.price
}, 0 ); 

console.log (result5)

// Lo mismo pero con fucnion flecha
result6 = shoppingcart.reduce ((total, product) => total + product.price, 0)
console.log (result6);

//================================================
result5 = shoppingcart.filter (function(product){
    return product.price < 700
}); 

result5 = shoppingcart.filter (function(product){
    return product.productName === "Sound-bar"
}); 

console.log (result5)

result5 = shoppingcart.filter (product => product.price > 50);

console.table (result5)

// Lo mismo pero con funcipon flecha
result5 = shoppingcart.filter (product => product.productName === "Sound-bar")
console.log (result5)

// Todos excepto un tipo
result5 = shoppingcart.filter (function(product){
    return product.productName != "Sound-bar"
}); 
console.table (result5)

result5 = shoppingcart.filter ( product => product.productName != "Sound-bar")
console.table (result5)







