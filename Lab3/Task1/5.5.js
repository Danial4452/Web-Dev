function filterRange(arr, a, b) {
 
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); 

alert( arr ); 

//sort
let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => b - a);

alert( arr2 );

//sort slice
function copySorted(arr3) {
  return arr3.slice().sort();
}

let arr3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr3);

alert( sorted );
alert( arr3 );

//calc
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

//obj
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names );


let users1 = [ vasya, petya, masha ];

let usersMapped = users1.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

//age
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

//shuffle
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr5 = [1, 2, 3];
shuffle(arr);
alert(arr);

//avg

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}


alert( getAverageAge(arr) );

//unqie
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

//group
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}