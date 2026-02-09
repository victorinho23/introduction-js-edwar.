// Prototype
// El prototipo es como un molde o modelo base 
// Para este ejemplo, voy a guardar las funciones comunes en un lugar llmado prototype, asi los objetos del mismo tipo pueden heredarlas, las clases van en singular.

function Car (brand, model, color) {
    this.brand = brand;
     this.model = model;
      this.color = color;

};

const car1 = new Car ("Suzuki", "Frons", "Yellow");
const car2 = new Car ("Honda", "Mars", "Blue");
console.log (car1)

// Se define como funcionan los vehiculos
Car.prototype.stop = function(){
    console.log (`El carro ${this.brand} está frenando`);

};

car1.stop ();
car2.stop ();