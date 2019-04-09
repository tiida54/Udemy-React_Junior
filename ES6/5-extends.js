// class Car{
//     constructor(){
//         console.log("constructor Car")
//     }
// }

class ElectricCar extends Car {
    constructor(color) {
        super(color);
        this.battery = 100;
        console.log(`super ElectricCar ${this.battery} battery`)
    }
    run(distance) {
        this.battery = this.battery - distance;
        console.log(`super ElectricCar now ${this.battery} battery`)
    }
    charge() {
        this.battery = 100;
    }
    static showColors(){
        console.log("static  showColors")
    }
}
let car3 = new ElectricCar("orange");

car3.name = "BMW"
car3.test = function () {
    console.log(`car3 name ${this.name}`);
}
car3.test();

car3.run("30");
car3.charge();

ElectricCar.showColors();
console.log(`charge now ${car3.battery} battery`)

//== Prototype Chain
let carProto = Object.getPrototypeOf(Car);
// console.log(carProto);
let objProto = Object.getPrototypeOf(carProto);
console.log(objProto);

console.log("5------------end")