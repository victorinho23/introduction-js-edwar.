// Victor Manuel Cortes Castrillon, objeto en js

// Aqui tenemos tres variables 
const productName = "sensor de humedad";
const price = 300;
const available = true

// Victor Manuel Cortes Castrillon, Este es un objeto llamado producto que almacena las gtres variables en una sola

const product = {
    productname : "sensor de humedad",
    price : 300,
    available : true,

}

console.log (product)
console.log (typeof productName)
console.log (typeof price )
console.log (typeof available)

// Victor Manuel Cortes Castrillon, Para acceder a las diferentes propiedades de un objeto lo hacemos de la siguiente manera:

console.log ("el nombre del producto es: " + product.productname);
console.log ("el precio del producto es: " + product.price);
console.log ("el producto esta disponible: " + product.available);

// Victor Manuel Cortes Castrillon, Agregar propiedades al objeto

product.image = "image.jpg";

console.log (product);