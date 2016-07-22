
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

function randomArray (arr) {

  function randomNumber () {
    return Math.floor(Math.random() * arr.length)
  }

  var newArr = []

  while(arr.length !== newArr.length){ // this caused an infinite loop.. needed to be until newArr was the same length as the original arr
		var rand = randomNumber();
    newArr.push(arr.slice(rand, rand + 1)[0]) // the second argument of .slice needed to be the index after the random number
  }

  return newArr
}

console.log(randomArray(students));
