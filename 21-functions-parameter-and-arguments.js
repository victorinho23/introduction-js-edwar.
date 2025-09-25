// Funciones paràmetros y argumentos 
// Los parametros se pasan en los parentesis de la funcion
function add (num1, num2) {
    return console.log (num1 + num2);

}

add (5,15); // Estos valores que se envian a la funciòn se llaman argumentos
add (7, 85);
add (3,20);
add (7,7);
add (5,5);
 
// Ejercicio con la expresion de una funciòn.
const add2 = function (num1, num2) {
    return console.log (num1 + num2)
}
console.log ("segunda parte con expresion")

add2 ( 7, 85);
add2 (3,20);
add2 (7,7);
add2 (5,5);

// Ejemplo cuando No se colocan argumentos, se coloca por defecto los valores en los paràmetros.
function add3 (num3= 35,num4 = 10) {
    return console.log (num3 - num4)
}


add3 ()

// Funciòn que retorna un valor

function add4 (num5,num6){
    return num5 * num6
};

const result = add4 (4, 5);
console.log (result);

// 

let total = 0;
//Funciòn para sumar productos
function addshoppingcart (price) {
    return total += price;


}
total = addshoppingcart (800);
total = addshoppingcart (500);
total = addshoppingcart (200);
total = addshoppingcart (900);

console.log (`la suma de los productos es ${total}`)

// Funciòn para agregar el impuesto a pagar 
function calculatetax (total){
    return 1.19 * total;
};

const totaltopay = calculatetax (total)
console.log (`La suma de los productos màs el impuesto es: ${totaltopay}`);



