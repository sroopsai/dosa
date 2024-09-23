// Copying / cloning an array
let foo = ['fee', 'fi', 'fo', 'fum'];
let fooClone = foo.slice();
console.log(fooClone);

// Checking if an Object is an Array
let numbers = [1, 2, 3, 4, 5, 6];
console.log(Array.isArray(numbers));

let person = {
  name: 'Cat',
  height: '5ft 6 in',
  age: 56,
};

console.log(Array.isArray(person));

console.log(person.constructor === Array);

// Deleting an Array Item
// Using splice
let evenNumbers = [0, 2, 4, 5, 6, 7, 8, 10];
console.log(evenNumbers.length);

let removeIndex = evenNumbers.indexOf(7);
if (removeIndex > -1) {
  evenNumbers.splice(removeIndex, 1);
}

console.log(evenNumbers);
// Using delete
console.log(evenNumbers.length);
removeIndex = evenNumbers.indexOf(5);
if (removeIndex > -1) {
  delete evenNumbers[removeIndex];
}

console.log(evenNumbers);

// Emptying an array
// Nonintuitive approach

const myItems = ['🍐', '🍎'];
myItems[2] = '🥭';
console.log(myItems);

// Making array items unique
let names = ['Joe', 'Joe', 'Joe', 'Peter', 'Peter'];
let uniqueNames = [...new Set(names)];
console.log(uniqueNames);

// Sorting items

numbers = [3, 10, 2, 14, 7, 2, 9, 5];
let beatles = ['Ringo', 'George', 'Paul', 'John'];
numbers.sort((a, b) => {
  if (a < b) return -1;
  else return 1;
});

beatles.sort((a, b) => {
  if (a.length < b.length) return -1;
  else return 1;
});
console.log(numbers);
console.log(beatles);

let shows = [
  {
    name: 'Frasier',
    seasons: 11,
  },
  {
    name: 'Seinfeld',
    seasons: 9,
  },
  {
    name: 'Friends',
    seasons: 10,
  },
  {
    name: 'Cheers',
    seasons: 11,
  },
  {
    name: 'Animaniacs',
    seasons: 5,
  },
  {
    name: 'Everybody Loves Raymond',
    seasons: 9,
  },
];

shows.sort((a, b) => {
  if (a.seasons < b.seasons) return -1;
  else return 1;
});
console.log(shows);

// Picking a Random Item

cities = ['rjy', 'kkd', 'hyd', 'vizag'];

console.log(cities[Math.floor(Math.random() * cities.length)]);

// Merging Arrays
let smileys = ['😀', '🤣', '😆'];
let animals = ['🐙', '🏇'];
let combined = [...smileys, ...animals];
console.log(combined);

// Turning an Array into an Object
let codes = ['HTML', 'CSS', 'JS'];
let codesObject = { ...codes };
console.log(codesObject);

// Reversing an Array
numbers.reverse();

console.log(numbers);

// using spread operator
console.log([...numbers].reverse());

// Check if all array elements pass a test
nums = [2, 4, 14, 6, 8, 20];
console.log(nums.every((item) => item % 2 == 0));

// Flattening an array
let cool = [1, 2, [1, 2, [1, 2]]];
console.log(cool.flat(1));
console.log(cool.flat(Infinity));

// Convert an array of Strings into numbers

let original = ['1', '2', '3', '4'];
numbers = original.map(Number);

console.log(numbers.map(String));

// Find the middle element of an array
// middle = Math.floor((start + end)/2)

let oddArray = [1, 2, 3, 4, 5, 6, 7];
let evenArray = [1, 2, 3, 4, 5, 6, 7, 8];
let start = 0;
let end = oddArray.length - 1;
middleIndex = Math.floor((start + end) / 2);
console.log(oddArray[middleIndex]);
end = evenArray.length - 1;
middleIndex = Math.floor((start + end) / 2);
console.log(middleIndex);

console.log(evenArray[middleIndex]);

Array.prototype.swap = function (index_A, index_B) {
  let input = this;
  let temp = input[index_A];
  input[index_A] = input[index_B];
  input[index_B] = temp;
};

let myData = ['a', 'b', 'c', 'd', 'e', 'f'];
myData.swap(2, 5);
console.log(myData);


