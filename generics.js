var ArrayOfNumber = /** @class */ (function () {
    function ArrayOfNumber(collection) {
        this.collection = collection;
    }
    ArrayOfNumber.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumber;
}());
var ArrayOfString = /** @class */ (function () {
    function ArrayOfString(collection) {
        this.collection = collection;
    }
    ArrayOfString.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfString;
}());
var ArrayOfAnythings = /** @class */ (function () {
    function ArrayOfAnythings(collection) {
        this.collection = collection;
    }
    ArrayOfAnythings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnythings;
}());
var arr = new ArrayOfAnythings(['a', 'phoebe', 'c', 'd']);
console.log(arr.get(1));
//example of generic with functions
function printArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumber(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything(['cliff', 'janet', 'joanne', 'phoebe']);
//generic constraints
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log('i am a car');
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.print = function () {
        console.log('i am a house');
    };
    return House;
}());
function printHouseOrCar(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHouseOrCar([new Car(), new Car(), new Car()]);
printHouseOrCar([new House(), new House(), new House()]);
