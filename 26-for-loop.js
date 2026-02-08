// ForEach map son metodos exclusivos de arreglos
    
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

];

// Recorrer un arreglo por cada elemento 

shoppingcart.forEach(function(product){
  console.log(product)
}); 



// Acceder a un elemento especifico 

// shoppingcart.forEach(function(product){
//   console.log(product.price)
// }); 

// Acceder a un elemento especifico 

// shoppingcart.forEach(function(product){
//   console.log(product.productName)
// }); 

// Acceder a un elemento especifico 

// shoppingcart.forEach(function(product){
//   console.log(product.productcolor)
// }); 



// Ahora forEach con arrow function

shoppingcart.forEach((product)=> 
  console.log(product)
); 

// Arrow function acceder a un elemnto especifico
shoppingcart.forEach((product)=>
  console.log(product.price)
); 

// Arrow function acceder a un elemnto especifico
shoppingcart.forEach((product)=>
  console.log(product.productName)
); 

// Arrow function acceder a un elemnto especifico
shoppingcart.forEach((product)=>
  console.log(product.productocolor)
); 


