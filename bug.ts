function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5

console.log(result1, result2); // Output: 8, 5

// Uncommon error: Type narrowing with complex object types

interface Person {
  name: string;
  age?: number;
}

function greet(person: Person): string {
  if (person.age) {
    return `Hello, ${person.name}, you are ${person.age} years old!`;
  } else {
    return `Hello, ${person.name}!`;
  }
}

greet({ name: 'John', age: 30 }); // Output: Hello, John, you are 30 years old!
greet({ name: 'Jane' }); // Output: Hello, Jane!

//Another example
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
    return products.filter(product => product.isAvailable === true);
}

const availableProducts = findAvailableProducts(products);
console.log(availableProducts);

//The uncommon error here is that the type narrowing may not work properly when dealing with complex objects or when using more advanced TypeScript features, resulting in type errors or unexpected behavior. It's important to make sure that the type narrowing logic is correct and to test the code thoroughly.