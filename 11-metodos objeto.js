// Victor Manuel Cortes Castrillon, metodos para los objetos
// Con esta linea de codigo garantizo buenas practicas
"use strict";

const product = {
    productname : "sensor de humedad",
    price : 300,
    available : true,

}

const speedmax = 88;
//speedMax = 70
console.log (speedmax);

// Aunque el objeto product este declarado como constante permite agregar propiedades


product.quantity = 42;
console.log (product);



// Con el metodo o funcion freeze bloqueamos el objeto para que no se puedan agregar mas propiedades o eliminarlas.
// Object.freeze (product);

// Si usamos el metodo seal no podemos agregar ni elimnar pero si se puede modificar o editar una propiedad

Object.seal(product)

// Vamos a agregar una nueva propiedad color
// product.color = "red";


// console.log ("El objeto esta bloqueado?: " + Object.isFrozen (product))
// let response;
// if (Object.isFrozen(product)){
//     response = "Si"
// }else {
//     response = "No"
// }

// console.log ("¿el objeto esta bloqueado?: "+ response)

// Victor Manuel Cortes Castrillon, eliminar una propiedad de un objeto

// delete product.price;
// console.log(product)

//Victor Manuel Cortes Castrillon, modificar o editar las propiedades de un objeto

product.productname = "sensor de ph";
console.log (product);

//Victor Manuel Cortes Castrillon, saber si un objeto esta sellado

console.log ("¿Eel objeto esta sellado?: " + Object.isSealed (product) )






