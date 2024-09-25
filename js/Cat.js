export class Cat {
    constructor(name, furColor) {
        this.name = name;
        this.furColor = furColor;
        this.legsCount = 4;
        this.eyesCount = 2;
        this.sound = 'meow';
        this.catchedFish = 0;
    }

    hi() {
        return `Sveiki, mano vardas yra ${this.name}!`;
    }

    intro() {
        return `Sveiki, mano vardas yra ${this.name}. Mano kailio spalva yra ${this.furColor}. Turiu ${this.legsCount} kojas ir ${this.eyesCount} akis. Jei reikia, moku pasakyti ${this.sound}!`;
    }

    catchFish(count) {
        if (count === undefined) {
            this.catchedFish++;
            return `${this.name} pagavo zuvi.`;
        }

        if (typeof count !== 'number'
            || !isFinite(count)
            || count < 0
        ) {
            return `${this.name} gali gaudyti tik normalu kieki zuvi.`;
        }

        return `${this.name} pagavo ${count} zuvis.`;
    }
}