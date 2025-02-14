function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5

console.log(result1, result2); // Output: 8, 5

//Improved type handling
interface Person {
  name: string;
  age?: number;
}

function greet(person: Person): string {
  let message = `Hello, ${person.name}!`;
  if (person.age !== undefined) {
    message += ` You are ${person.age} years old!`;
  }
  return message;
}

greet({ name: 'John', age: 30 }); // Output: Hello, John! You are 30 years old!
greet({ name: 'Jane' }); // Output: Hello, Jane!

//Improved type handling
interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
}

const products: Product[] = [
    { name: "Product A", price: 10, isAvailable: true },
    { name: "Product B", price: 20, isAvailable: false },
    { name: "Product C", price: 15, isAvailable: true },
];

function findAvailableProducts(products: Product[]):Product[]{
    return products.filter(product => product.isAvailable);
}

const availableProducts = findAvailableProducts(products);
console.log(availableProducts); 