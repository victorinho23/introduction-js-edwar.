//arrays en JS

const numbers = [10,20,30,80,100,7,8];

console.log(numbers);

// //otra forma de visualizacion en tabla
console.table (numbers);

//crear un arreglo con el constructor

const months =  new Array ("may","january", "july", "june");

// console.table (months)

const myArray = ["hello", 42, true, false, null, {myName: "Victor",myjob:"aprendiz"}, [317293, 3147206,3036193]]

//consultar un elemnto de un arreglo
console.log (typeof numbers[2])
console.log (myArray[5])

//metodo patra conocer la longitud de un arreglo

console.log ("vcitor tu arreglo tiene: " + numbers.length + " elementos")

//un iterador foreach (para recorrer los arreglos)
numbers.forEach (function(number) {
     console.log (number);
});

months.forEach (function(month){
    console.log (month)
})

myArray.forEach (function(element){
    console.log(element)
});

