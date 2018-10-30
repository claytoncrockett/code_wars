function sqInRect(lng, wdth){
  if (lng === wdth) return null; 
  var sol = [];
  solution(lng, wdth, sol);
  return z
}

function solution(lng, wdth, sol){
  if (lng === wdth){
    sol.push(lng);
    z = sol
    return null
  }
  var min = findMin(lng, wdth);
  var max = findMax(lng, wdth);
  sol.push(min);
  max -= min;
  solution(min, max, sol)
}

function findMin(x, y){
    if (x < y){
      return x
    } else {
      return y
    }
}

function findMax(x, y){
    if (x > y){
      return x
    } else {
      return y
    }
}