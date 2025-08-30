//string o cadena de texto

const sensor1 = "temperatura";
const sensor2 = "ph";

console.log (sensor1);
console.log (sensor2);

//estas dos formas no son tan comunes
const sensor3 = String("presion");
const sensor4 = new String("humedad");

console.log (sensor3);
console.log (sensor4);

//para saber el tipo de dato de la variable

console.log (typeof sensor3);

let product = ("televisor 32\"")
let product2 = ("televisor de 58\"")

console.log (product);
console.log (product2);

//metodos con strings
console.log (product2.length)

let Name = "Victor Manuel Cortes Castrillon"
console.log (Name.length);

//sirve para saber si una cdena de texto existe en una frase
//indexof nos muestra la posicion donde se encuentra la cadena de texto
//si la cadena no eiste muestra un resultado menor que 0
let phrase = "aqui vamos a buscar la palabra SENA"

console.log ( phrase.indexOf("SENA") );

//hacer lo mismo de una forma mas moderna, el resultado es un true o un false

let phrases = "aqui vamos a buscar la palabra SENA";

console.log ( phrases.includes("SENA") );

console.log ( phrases.includes("victor") );






