function chooseBestSum(t, k, ls) {
  
  if (ls.length < k) return null;
  var max = 0;
  var a = 0;
  for(var i = a; i < ls.length - 2; i++){
    for(var j = i + 1; j < ls.length - 1; j++){
      for(var l = j + 1; l < ls.length; l++){
        var check = ls[i] + ls[j] + ls[l]
        if ( (check > max) && check <= t ) max = check;
      }
    }
  }
  return max
}

// this solution works with k always being 3, need variable number of for loops though. trying recursion next