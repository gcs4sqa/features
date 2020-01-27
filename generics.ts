class ArrayOfNumber {

    constructor(public collection:number[]) {}

    get (index:number):number{
        return this.collection[index];
    }    

}

class ArrayOfString {

    constructor(public collection:string[]) {}

    get (index:number):string{
        return this.collection[index];
    }    

}

class ArrayOfAnythings<T> {

    constructor(public collection: T[]){}

    get (index:number ):T{
        return this.collection[index];
    }    

}
const arr = new ArrayOfAnythings<string>(['a', 'phoebe', 'c','d']);

console.log(arr.get(1));

//example of generic with functions

function printArray(arr: string[]):void{
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printNumber(arr: number[]):void{
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

printAnything<string>(['cliff', 'janet', 'joanne', 'phoebe']);

//generic constraints

class Car {
    print(){
        console.log('i am a car');
    }
}

class House {
    print(){
        console.log('i am a house');
    }
}

interface printable{
    print() :void;
}

function printHouseOrCar<T extends printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++){
        arr[i].print();
    }

}

printHouseOrCar<Car>([new Car(), new Car(), new Car()]);

printHouseOrCar<House>([new House(), new House(), new House()]);