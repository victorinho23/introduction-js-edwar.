// //caudno se unen 2 objetos lo ideal  es no modificar ninguno de los 2 objetos

// const product = {
//     productname : "sensor de humedad",
//     price : 300,
//     available : true,}

// // object.freeze (product);

// //obejto que almacena las medidas 

// const measurements = {
//     weight : "1 kg",
//     measurement : "10 cm"
// }

// //rest operator, consta de 3 puntos (...) 

// const newproduct = {...product,...measurements
// };

// console.log (product);
// console.log (newproduct);

const playersoccer  ={
   name : "lucumi",
   team : "pereira",
   position : "defense"

}

const datesofplayer = {
    age : "19",
    heiht : "1.78cm",
    weiht : "75kg"
}

const descriptionplayer = {...playersoccer,...datesofplayer}
console.log (playersoccer)
console.log (descriptionplayer);
