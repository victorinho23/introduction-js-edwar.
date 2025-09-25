// Diferencian entre metodos y funciones 

const num1 = 10;
const num2 = "20"

console.log (num1);
console.log (num2);
console.log (typeof num1);
console.log (typeof num2);

// Parsear es convertir un tipo de variable a otro tipo
console.log (num1);
console.log (parseInt (num2));

// Este metodo convierte de numero a String
console.log (num1.toString());
console.log (num1);

//=====================================
// Funciòn: Bloque de codigo indenpediente que realiza una tarea 
function greet () {
    console.log ("Hello")

};

greet ()

//=====================================

const person = {
    username : "victor",
    greet : function (){
        console.log (`Hello, i'm ${this.username}`)
    }

}

// Mètodo es una funcion asociada a un obejto (Se llama a travès de un punto)
person.greet (); // Este es un mètodo porque pertenece a person
console.log (person)

// function add (){
//     let num1 = 100;
//     console.log (num20)
// }
// console.log (num20)
// add ();




