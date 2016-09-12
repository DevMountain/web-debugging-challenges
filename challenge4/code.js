// given the following array, randomize it.

var students = [
  'Dan', 'Brack', 'Erin', 'Geordyn', 'Jess', 'Sarah', 'Andrew', 'Ryan', 'Tim', 'Stephen', 'David', 'Mark'
];

function randomArray(arr) {
  function randomNumber() {
    return Math.floor(Math.random() * arr.length);
  }
  var newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(randomNumber(), 1)[0]);
  }
  return newArr;
}

console.log(randomArray(students));
