// Using typeof Type Guard
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let x: number | string = 10;
if (isNumber(x)) {
    console.log('x is a number', x);
} else {
  console.log('x is not a number');
}


// Using instanceof Type Guard
class MyClass {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

function isMyClass(instance: any): instance is MyClass {
  return instance instanceof MyClass;
}

let obj: MyClass | number = new MyClass('example');
if (isMyClass(obj)) {
    console.log('obj is an instance of MyClass:', obj.name);
} else {
    console.log('obj is not an instance of MyClass');
}


// Using in Type Guard
interface Car {
  make: string; 
  model: string; 
}

function isCar(obj: any): obj is Car {
  return 'make' in obj && 'model' in obj;
}

let vehicle: Car | { name: string } = { make: 'Toyota', model: 'Camry' };
if (isCar(vehicle)) {
    console.log('This is a car:', vehicle.make, vehicle.model);
} else {
    console.log('This is not a car');
}