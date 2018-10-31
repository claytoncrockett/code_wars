function tickets(peopleInLine){
  if (peopleInLine[0] !== 25) return "NO";
  var count = 1;
  var count2 = 0;
  var count3 = 0;
  for(var i = 1; i < peopleInLine.length; i++){
    if (peopleInLine[i] === 50){
      count--;
      count2++;
    } else if(peopleInLine[i] === 100){
      if (count2 > 0){
        count2--;
        count--;
      } else {
        count -= 3;
      }
    }
    if (count < 0) return "NO";
    if (peopleInLine[i] === 25) count++;

  }
  return "YES";
}