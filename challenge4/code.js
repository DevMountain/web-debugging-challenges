// given the following array, randomize it.

var students = [
    'Dan', 'Brack', 'Erin', 'Geordyn', 'Jess', 'Sarah', 'Andrew', 'Ryan', 'Tim', 'Stephen', 'David', 'Mark'
];

function randomArray(arr) {
    // function randomNumber() {
    //     return Math.floor(Math.random() * arr.length);
    // }
    var indx = arr.length, temp, randIndx;

    // console.log(randomNumber());
    // var newArr = [];
    for (var i = arr.length -1; i > 0; i--) {
      // newArr.push(arr[randomNumber()]);
      randIndx = Math.floor(Math.random() * i);
      temp = arr[i];
      arr[i] = arr[randIndx];
      arr[randIndx] = temp;
    }
    return arr;
}

console.log(randomArray(students));
