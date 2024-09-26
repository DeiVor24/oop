/*
- gyvunai:
    - naminiai
        - suo
        - kate
        - ziurkenas
    - zuvys
        - lydeka
        - auksine zuvele
        - ryklys
    - pauksciai
        - gandras
        - balandis
        - vanagas
*/

class Animal { }

class Pet extends Animal {
    // animal + pet unique
}
class Fish extends Animal {
    // animal + fish unique
}
class Bird extends Animal {
    // animal + bird unique
}

class Dog extends Pet {
    // animal + pet unique + dog unique
}
class Cat extends Pet { }
class Hamster extends Pet { }

class Shark extends Fish { }
class GoldenFish extends Fish { }
class Pike extends Fish { }

class Eagle extends Bird { }
class Pigeon extends Bird { }
class Stork extends Bird { }