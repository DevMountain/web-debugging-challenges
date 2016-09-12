
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
    return ( (Math.random() * arr.length - 1) + 1 )
  }
  var newArr = []
  for(var i = 0; i < arr.length; i++) {
    console.log('STUDENTS', arr);  
    newArr.push(arr.splice(randomNumber(), 1)[0])
  }
  return newArr
}

console.log(randomArray(students));
