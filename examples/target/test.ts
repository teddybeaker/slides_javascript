interface Animal {
  name: string;
}

class Bear implements Animal {
  name: string;
  weight: number;

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }

  print() {
    return `A heavy ${this.name} weights ${this.weight}kg`;
  }
}

const animal: Bear = new Bear('Koala', 15);

(<HTMLElement> document.querySelector('.animal')).innerHTML = animal.print();
