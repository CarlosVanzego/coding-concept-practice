interface Cat {
  name: string;
  meow: () => void;
}

interface Dog {
  name: string;
  bark: () => void;
}

function isCat(animal: any): animal is Cat {
  return typeof animal.meow === 'function';
}

function makeSound(animal: Cat | Dog) {
  if (isCat(animal)) {
      animal.meow();
  } else {
      animal.bark();
  }
}

const fluffy: Cat = {
  name: 'Fluffy',
  meow: () => console.log('Meow!')
};

const rover: Dog = {
  name: 'Rover',
  bark: () => console.log('Woof!')
};

makeSound(fluffy); // Output: "Meow!"
makeSound(rover); // Output: "Woof!"