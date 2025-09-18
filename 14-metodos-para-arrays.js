"use strict"
const numbers = [0, 5, 8, 9, 5, 8, 70, 120];
const  numberslength = numbers.length
//Agregar elementos a mi arreglo pero con este metodo se requiere conocer la longitud de el arreglo.
// numbers [numbers.length] = 100;

// console.log (numbers);

// console.log (numberslength);

numbers.push (700,800);
console.log (numbers);

//Mètodo unshift para agrgar elementos a un arreglo al inicio.
numbers.unshift (-3,-2,-1)

//Mètodo pop para eliminar el ultimo elemento de  mi arreglo.
// numbers.pop ()

//Mètodo shift para eliminar el primer elemento de mi arreglo.
// numbers.shift ();

//Mètodo splice elimina todos los elemetos a partir de el indice asignado.

numbers.splice (2)

console.table (numbers)


