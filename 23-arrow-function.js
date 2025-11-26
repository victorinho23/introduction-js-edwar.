// Arrow funcution
// Es JS es una forma mas corta de escribir funciones usando la sintaxis ()=>    

// Sintaxis mas breve, ideal para funciones pequeñas
// No tiene su propio this, hereda el this del contexto donde se define.

//funcion sin parametros

const add = function () {
    console.log (16+3);
}

add ();

// Fucnion con parametros.

const add2 = function (num1,num2){
    console.log (num1 + num2)
}

add2 (4,8)

// Las llaves son opcionales cuando despues de la flecha solo tengo una sentencia

const add3 = (num3, num4) =>
    console.log (num3+num4);
add3 (6,9)

// Otro ejemplo

const learn = (tecnology) => {
    
console.log (`Aprendiendo ${tecnology}`)
}

const months =  ["may","january", "july", "june", "December", "November", "February"];
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

months.forEach (month =>  {
    if (month == "November" || month == "December"){
        console.log ("Se verifico en el arreglo y el mes si existe")
    }else{
        console.log ("el mes no existe");
    }

    
});

// const result = shoppingcart.some (function(product){
//     return product.price === 800
// })

// console.log (result)

const result = shoppingcart.some (product => product.price === 800);
   
console.log (result)

const resultado = shoppingcart.reduce(function(total, product){
    return total + product.price;
}, 0)

console.log (resultado)

const result3 = shoppingcart.reduce ((total, product)  =>
    total + product.price,
0)

console.log (result3)



const result4 = shoppingcart.filter (function(product){
    return product.price < 600;

})

const result5 = shoppingcart.filter (product => 
    product.price < 600

)

// console.log (result5)

// function greet (userName){
//     console.log (`Hello ${userName}`);
// }

// console.log (greet ("victor"));

const greet = userName => (`Hello ${userName}`);
    
 console.log (greet ("victor"));

 //Arrow function con un solo parametros

 const boost = num => num * num;
 
 const boost2 = num => Math.pow(num,2);
 console.log (boost2(100));

// Arrow function con retorno explicito

// Se usa cuando el cuerpo de una funcion tiene llaves {}

const add4 = (num4, num5) => {
    const result7 = num4 * num5;
    return result7
}

console.log (add4 (15, 7));

// Arrow function con retorno implicito, cuando la funcion NO tien llaves realiza el retorno explicitamente.


const add5 = (num6, num7) => num6 + num7;
console.log (add5 (10, 5))