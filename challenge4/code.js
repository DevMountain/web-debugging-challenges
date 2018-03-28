var _ = require('lodash')
// given the following array, randomize it.

var students = [
  'Dan'
  , 'Brack'
  , 'Erin'
  , 'Geordyn'
  , 'Jess'
  , 'Sarah'
  , 'Andrew'
  , 'Ryan'
  , 'Tim'
  , 'Stephen'
  , 'David'
  , 'Mark'
]

function randomArray(arr) {
  function randomNumber() {
    return Math.floor(Math.random() * arr.length)
  }
  var newArr = []
  while (arr.length >= 0) {
    newArr.push(arr.slice(randomNumber(), 1)[0])
  }
  return newArr
}

console.log(randomArray(students));


var puppyNames = [
  'Spot'
  , 'Socks'
  , 'Toast'
  , 'Sparky'
  , 'Furball'
  , 'Devil-dog'
  , 'Carl'
  , 'Kimmie'
  , 'Wolfie'
  , 'Rocket'
  , 'Jesse'
  , 'Jobe the nastiest'
]

function copyPuppy(puppy) {
  puppy.name = puppyNames[_.random(puppyNames.length - 1)];
  return puppy;
}

var puppy = {
  name: 'Jesse'
}

let { name } = copyPuppy(puppy);
name;

let name1 = puppy.name;
name1;
