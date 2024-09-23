// Creating Arrays
let array = []; // an empty array
let letters = ['a', 'b', 'c']; // a prepopulated array

// Adding items
let names = ['bar', 'foo', 'zorb'];
let x = names.push('blarg'); // add item at end of an array
// x-> lenth of the array
console.log(x);

x = names.unshift('beep', 'blarg'); // add item at start of an array
// x-> lenght of the array
console.log(x);

// Removing items
let numbers = [0, 1, 2, 3, 4, 5, 6];
x = numbers.pop(); // remove last item
//x-> removed item
console.log(x);

numbers = [];
x = numbers.pop();
console.log(x); // undefined

x = numbers.shift(); // remove first item
console.log(x); // undefined

// Reading Array Values

let fruits = ['🍑', '🍐'];
console.log(fruits[1]); // 🍐

console.log(fruits[9]); // undefined

// Setting/Replacing values
fruits[3] = '🥭';
for (let item = 0; item < fruits.length; item++) {
  console.log(item + ' ' + fruits[item]);
}

// Finding Values
console.log(fruits.indexOf('🥑')); // -1 not found
console.log(fruits.indexOf('🍐')); //  1 (index of pear) found

// Arrays can accept values of mixed types
let myArray = ['Hello', '🍕'];

myArray.forEach((element) => {
  console.log(element);
});

// For Approach (traditional)
let items = ['🍕', '🍔'];

for (let item = 0; item < items.length; item++) {
  console.log(items[item]);
}

// for...of
for (let item of items) {
  console.log(item);
}

for (let [i, item] of items.entries()) {
  console.log(i + ': ' + item);
}

// forEach
items.forEach((item) => console.log(item));
items.forEach((item, i) => console.log(i + ': ' + item));

// Access Array in Reverse Order
// For Approach (traditional)

for (let i = items.length - 1; i >= 0; i--) {
  console.log(i + ': ' + items[i]);
}

// for...of
let reverseItems = items.slice().reverse();
for (let [i, item] of reverseItems.entries()) {
  console.log(i + ': ' + item);
}

//forEach
reverseItems.forEach((item) => console.log(item));

// Inconsistencies
// break and continue can be used only with for and for...of
// forEach doesn't support break and contnue

// Iterating through sparse arrays
let sparse = [9, 1, 23, 4, 5];
sparse[9] = 10;

for (let i = 0; i < sparse.length; i++) {
  console.log(sparse[i]);
  // iterates undefined also
}

for (const item of sparse) {
  console.log(item);

  // iterates undefined also
}

sparse.forEach((item) => console.log(item)); // does not iterates undefined

// Old School Way

let students = ['marge', 'homer', 'bart', 'lisa', 'maggie'];

let students_names = [];

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const firstLetter = student.charAt(0).toUpperCase();
  students_names.push(firstLetter + student.slice(1));
}

console.log(students_names);

// Map

students_names = students.map(
  (item) => item.charAt(0).toUpperCase() + item.slice(1)
);
console.log(students_names);

// Filter
students_names = students
  .filter((item) => item.includes('s'))
  .map((item) => item.charAt(0).toUpperCase() + item.slice(1));

console.log(students_names);

// Reduce
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let total = nums.reduce((total, current) => total + current, 0);
console.log(total);

let words = ['Where', 'do', 'you', 'want', 'to', 'go', 'today?'];
let phrase = words.reduce((total, current, index) => {
  if (index == 0) return current;
  else return total + ' ' + current;
}, '');

console.log(phrase);

// Objects and Arrays
let greetings = ['hi', 'hello', 'hola', 'yo', 'hey'];
console.log(greetings[3]);

let foo = { a: 'hello', b: 'good bye' };

foo['c'] = 'blah';
console.log(foo['c']);

array = ['one', 'two', 'three'];
array['foo'] = "what's up?";

// using for...of
for (const value of array) {
  console.log(value);
}

// using for...in
for (const value in array) {
  console.log(value);
  
}
