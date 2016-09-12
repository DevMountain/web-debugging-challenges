
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

// console.log(students)

function randomArray (arr) {
  function randomNumber () {
    return Math.floor(Math.random() * arr.length)
  }
  // console.log(randomNumber())
  var newArr = []

  var length = arr.length;
  // console.log(length)

  for (var i = 0; i < length; i++) {
    // console.log('arr', arr);
    newArr.push(arr.splice(randomNumber(), 1)[0])
  }

  // while(arr.length > 0){
  //   newArr.push(arr.slice(randomNumber(), 1)[0])
  // }
  return newArr
}

console.log(randomArray(students));
