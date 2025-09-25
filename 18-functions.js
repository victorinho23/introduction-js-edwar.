// Fucntions in JS
// ¿Què es hoisting?
// Hoisting en JS es el comportamiento por defecto en el que el interprete "MUEVE" las declaraciones (de variables y funciones) a la parte superior de su àmbito (scope) antes de ejecutar el codigò.
// Esto siginifica que puedes usar una funcion o variable declarada antes de escribirla en el codigo. 

// Declaracion de una funcion
// Como esta funcion esta declarada se puede llamar antes o despuès de su creacion.
add ();

function add () {
    console.log (10 + 10)


};

// ==================================

// La expresion de una funcion 
// La expresion de la funcion solo puede llamarse despues de su creacion.


// const  add2 = function () {
//     console.log (3 + 3)}
    
// add2 ()

// ==================================

// IIFE (Inmmediately Invoked Function Expression), esta funcion se llama a si misma.

// Son utiles para proteger las variables para que no se mezclen con las variables de otros archivos
(function(){
    console.log ("esta es una funcion IIFE");
}) (); 

(function (name) {
    console.log (`Hello  ${name}`);
}

)("victor");

console.log(client);




    




