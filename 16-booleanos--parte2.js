//Los boleanos tienen 2  valores, falso y verdadero

let age = 42;
//Mayor que
let isolderthan = age > 18;

console.log (isolderthan);

// ====================================

let username = "victor"

let havename = username !== "";

console.log (havename);

// ====================================
// En JS 0 es falsy pero cualquier numero distinto de 0 es truthy.

console.log (Boolean(0));
console.log (Boolean(1));
console.log (Boolean(10));
console.log (Boolean(-5));
console.log (typeof Boolean(-5));

// ====================================
//En JS null or undefined se convierte siempre en false.

let nullvalue = null;
let undefinedvalue = undefined;


console.log ( Boolean (nullvalue));
console.log ( Boolean (undefinedvalue));

// ====================================
// Los booleanos son las bases de las deciciones en los programas

let haveacces = false;
 
if (haveacces) {
    console.log ("Welcome to system");
 } else 
 {
    console.log ("Denied acces")
 }






