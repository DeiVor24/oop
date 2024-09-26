import { dalmuo, Matematika, sandauga, skirtumas, suma } from "./js/Matematika.js";

class Car {
    constructor() {
        this.engineOn = false;
    }

    ride() {
        if (this.engineOn) {
            console.log('vaziuojam...');
        } else {
            console.log('stovim vietoj - ijunk varykli');
        }
    }

    turnOnEngine() {
        this.engineOn = true;
    }

    turnOffEngine() {
        this.engineOn = false;
    }

    static kilometersToMiles(distance) {
        return distance / 1.61;
    }

    static milesToKilometers(distance) {
        return distance * 1.61;
    }

    static fuelConsumptionAverage(distance, fuel) {
        return fuel / distance * 100;
    }
}

const masiniukas = new Car();

masiniukas.ride();
masiniukas.turnOnEngine();
masiniukas.ride();
masiniukas.ride();
masiniukas.ride();
masiniukas.ride();
masiniukas.turnOffEngine();
masiniukas.ride();

console.log(Car.kilometersToMiles(100));
console.log(Car.milesToKilometers(100));
console.log(Car.fuelConsumptionAverage(100, 5));
console.log(Car.fuelConsumptionAverage(200, 10));

console.log(Math.abs(-69));
console.log(Math.abs(69));

// kaip galetu atrodyti Math alternatyva?

console.clear();

console.log(Matematika);
console.log(Matematika.suma(7, 5));
console.log(Matematika.skirtumas(7, 5));
console.log(Matematika.dalmuo(7, 5));
console.log(Matematika.sandauga(7, 5));
console.log('----------');
console.log(suma(7, 5));
console.log(skirtumas(7, 5));
console.log(dalmuo(7, 5));
console.log(sandauga(7, 5));


const Tekstas = {
    pirmaRaide: s => s[0],
    zodziuKiekis: s => s.split(' ').length,
};

console.log(Tekstas.pirmaRaide('Labas'));
console.log(Tekstas.pirmaRaide('As'));
console.log(Tekstas.pirmaRaide('Krabas'));
console.log(Tekstas.zodziuKiekis('Krabas'));
console.log(Tekstas.zodziuKiekis('Labas rytas, Lietuva'));