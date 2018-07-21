function toWeirdCase(string){
  arr = string.split(" ")
  for(var j = 0; j < arr.length; j++){
  var arrWord = arr[j].split("")
    for(var i = 0; i < arrWord.length; i++){
      x = arrWord[i]
      i % 2 === 0 ? arrWord[i] = x.toUpperCase() : arrWord[i] = x.toLowerCase()
    }
    arr[j] = arrWord.join("")
  }
  string = arr.join(" ")
  return string
}

//turn something to weird case
// break up the words and capitalize even letter while lowercasing odd letters