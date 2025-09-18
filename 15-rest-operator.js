// Rest operator o spread operator
// Lo que se busca es NO NO NO modificar el arreglo original.

const months = ["december","November", "march"];
console.table (months);

// Se crea un nuevo arreglo y lo unimos con todo
const newArray = [...months, "january"];
// El nuevo arreglo se puede agregar al final o al inicio.

const newArray2 = ["january",...months];
console.table (newArray);
console.table (newArray2);

months.push ("january")
months.unshift ("january")

console.table (months)