/*
OOP - object oriented programming
- turi savybes
- turi funkcionaluma, kuris manipuliuoja savo savybemis
*/

import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";
import { Car } from "./Car.js"; 

const reksas = new Dog('Rex', 'black');
console.log(reksas.takeBones(1.5));

console.log(reksas.eatBone());
console.log(reksas.bonesLeft());

console.log(reksas.eatBone());
console.log(reksas.bonesLeft());

console.log(reksas.eatBone());
console.log(reksas.bonesLeft());

console.clear();

const rainis = new Cat('Rainis', 'grey');
console.log(rainis);
console.log(rainis.hi());
console.log(rainis.intro());

console.log(rainis.catchFish());
console.log(rainis.catchFish(4));
console.log(rainis.catchFish(true));
console.log(rainis.catchFish(undefined));

/*
CAR
- brandas
- modelis
- kuro bako talpa
- kuro sanaudos 100km

- ijungtiVarykli()
- isjungtiVarykli()
- vaziuoti(atstumas)
- uzpiltiKuro(litrai)
- kiekLikoKuroBake()
- kokiAtstumaGaliDarNuvaziuoti()
- arGaliPrivaziuotiDegaline(atstumas km)
*/





const myCar = new Car('FORD', 'Corolla', 60, 8);

console.log(myCar.addFuel(30)); 
console.log(myCar.startEngine());
console.log(myCar.drive(100));
console.log(myCar.intro()); 
console.log(myCar.stopEngine());
