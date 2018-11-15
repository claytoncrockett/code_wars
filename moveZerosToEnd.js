var moveZeros = function (arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === 0){
      arr.splice(i, 1);
      count++
      i--
    }
  }
  
  while (count > 0){
    arr.push(0)
    count--
  }
  return arr
}