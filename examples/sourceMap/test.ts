interface Animal {
  name: string;
}

const animal: Animal = {
  name: 'Koala'
};

(<HTMLElement> document.querySelector('.animal')).innerHTML = animal.name;
