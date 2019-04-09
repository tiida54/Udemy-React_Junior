class Car {
    constructor(color = "red") {
        this.color = color;
        this.speed = 0;
        console.log("constructor", color);
    }
    run(speed) {
        this.speed = speed;
        console.log(`Running! ${this.color} Car ${this.speed} KM/HR`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.color} Car Stopped`);
    }
}

let car1 = new Car("blue");
let car2 = new Car("green");
car1.run(50);
car1.stop();

console.log("4------------end")