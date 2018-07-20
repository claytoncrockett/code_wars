function longestConsec(strarr, k) {
  var n = strarr.length
  var l = ""
  if (n < 1 || n < k || k < 1)
    return ""
  for (var j = 0; j < n; j++) {
    var q = strarr[j]
    if (k === 1) {
      for (var z = 0; z < strarr.length; z++) {
        if (strarr[z].length > l.length)
          l = strarr[z]
      }
    }
    else {
      for (var i = 1; i < k; i++) {
        if (j + i < strarr.length) {
          q += strarr[j + i]
          if (q.length > l.length)
            l = q
        }
      }
    }
  }
  return l
}

//You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"