angular.module('miniRouting')

.service('productService', function(){
  var shoeData = [
    {
      type: 'Nike',
      color: 'Red',
      size: 12
    },
    {
      type: 'Reebok',
      color: 'Blue',
      size: 9
    },
    {
      type: 'Adidas',
      color: 'Yellow',
      size: 6
    },
    {
      type: 'Puma',
      color: 'Green',
      size: 7
    }
  ];


  var sockData = [
    {
      type: 'Stance',
      color: 'Red',
      size: 'S'
    },
    {
      type: 'Nike',
      color: 'White',
      size: 'M'
    },
    {
      type: 'Reebok',
      color: 'Green',
      size: 'L'
    },
  ];

  var getShoeData = function() {
    return shoeData;
  }

   var getSockData = function () {
    return sockData;
  }

  return {
    getSocks: getSockData,
    getShoes: getShoeData
  }


});
