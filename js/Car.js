export class Car {
    constructor(brand, model, fuelTankCapacity, fuelConsumption) {
        this.brand = brand;
        this.model = model;
        this.fuelTankCapacity = fuelTankCapacity;
        this.fuelConsumption = fuelConsumption;
        this.fuelInTank = 0;
        this.engineOn = false;
    }

    startEngine() {
        this.engineOn = true;
        return `${this.brand} ${this.model} variklis įjungtas.`;
    }

    stopEngine() {
        this.engineOn = false;
        return `${this.brand} ${this.model} variklis išjungtas.`;
    }

    addFuel(liters) {
        if (typeof liters !== 'number' || !isFinite(liters) || liters <= 0) {
            return `${this.brand} ${this.model} gali priimti tik teisingą kuro kiekį.`;
        }

        const maxFill = this.fuelTankCapacity - this.fuelInTank;
        if (liters > maxFill) {
            this.fuelInTank = this.fuelTankCapacity;
            return `Perpildymas! Buvo galima užpildyti tik ${maxFill} litrus.`;
        }

        this.fuelInTank += liters;
        return `${liters} litrų kuro pridėta. Dabar bake yra ${this.fuelInTank} litrai.`;
    }

    drive(distance) {
        if (!this.engineOn) {
            return `Variklis išjungtas. Negalima važiuoti.`;
        }

        const fuelNeeded = (this.fuelConsumption / 100) * distance;
        if (fuelNeeded > this.fuelInTank) {
            return `Nepakanka kuro. Galima nuvažiuoti tik ${this.getMaxDistance()} km.`;
        }

        this.fuelInTank -= fuelNeeded;
        return `${this.brand} ${this.model} nuvažiavo ${distance} km. Kuro likutis: ${this.fuelInTank} litrai.`;
    }

    getMaxDistance() {
        return (this.fuelInTank / this.fuelConsumption) * 100;
    }

    intro() {
        return `Automobilis yra ${this.brand} ${this.model}. Kuro bako talpa yra ${this.fuelTankCapacity} litrai. Šiuo metu bake yra ${this.fuelInTank} litrai kuro.`;
    }
}
