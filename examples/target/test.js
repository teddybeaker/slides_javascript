class Bear {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    print() {
        return `A heavy ${this.name} weights ${this.weight}kg`;
    }
}
const animal = new Bear('Koala', 15);
document.querySelector('.animal').innerHTML = animal.print();
