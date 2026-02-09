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

const product2 = {
    productname1 : "Ferrari",
    price1 : 500.000,
    avaliable1 : true,
};

const {price1, avaliable1, productname1} = product2;
console.table (product2)

