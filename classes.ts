class Vehicle {



    constructor(public color: string){

    }
    protected drive(): void {
        console.log('chugga chugga');
    }

    public honk():void {
        console.log('beep');
    }
}

class Car extends Vehicle {

    constructor(public wheels: number, color: string){
        super('red');
    }
    public drive(): void {
        console.log('vroom vroom');
    }
}

const vehicle = new Vehicle('orange');

//vehicle.drive();  //this cannot be called as the method in Vehicle is protected which mean that it can only be called by a method within the same class or a child class
vehicle.honk();

const car = new Car(4, 'blue');

car.drive();
car.honk();
console.log(car.color);
console.log(car.wheels);