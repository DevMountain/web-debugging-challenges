
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
  console.log(arr.length)
  function randomNumber () {
    return Math.floor(Math.random() * arr.length)
  }
	
  var newArr = []
  while(newArr.length<= arr.length) {
  	var x = randomNumber();
    newArr.push(arr.slice(x, x+1)[0])
  }
  return newArr
}

console.log(randomArray(students));