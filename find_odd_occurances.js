function findOdd(arr) {
  for(var i = 0; i < arr.length; i++){
    var count = 0
    var number = arr[i]
      for(var j = 0; j < arr.length; j++){
        if (arr[j] === number)
          count++
      }
    if (count % 2 !== 0)
      return number
  }
}

// find the number that occurs an odd number of times
//input: [5,5,2,2,3,3,4,4,4,1,1] expected: 4