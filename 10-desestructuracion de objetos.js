// Victor Manuel Cortes Castrillon, Desestructaracion de objetos

const product = {
    productname : "sensor de humedad",
    price : 300,
    available : true,

}

// Victor Manuel Cortes Castrillon Aqui un ejemplo de destructuracion de objetos

const productprice = product.price;
const productName = product.productname;


console.log (productprice);
console.log (productName);


// Victor Manuel Cortes Castrillon ¿para que sirve el Destructuring? Sirve para extraer los valores de un objeto

const {price, available, productname} = product;
console.log (price, available, productname)



