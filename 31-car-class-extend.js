class Fullcar {
    constructor(brand, color, model, id,airConditiend, sounruof){
      this.brand = brand;
      this.color = color;
      this.model = model;
      this.id = id;
      this.airConditiend = airConditiend;
      this.sounruof = sounruof;

    }
 
    run(){
        return`El vehiculo ${this.brand} esta arrancando y ¿ este carro tiene aire acondicionado?: ${this.airConditiend}`
    }
};
const car1 = new Fullcar("kia","grey","Ev5",123454,true,);
console.log(car1.run());
class BasicCar extends Fullcar{
    constructor(brand,color,model,id,electric){
        super(brand,color,model,id,"","")
        this.electric=electric
    };
    runBassicCar(){
        return`${super.run()}`
    }
}
const car2 = new BasicCar("Ford","pink","fiesta",454,false,true);
console.log(car2.run());
class MiddleCar extends Fullcar{
    constructor(brand,color,model,id,airConditiend){
        super(brand,color,model,id,airConditiend,"")
        
    };
    runMiddleCar(){
        return`${super.run()}`
    }
}
const car3 = new MiddleCar("hyundai","white","I10",3454,true);
console.log(car3.run());
