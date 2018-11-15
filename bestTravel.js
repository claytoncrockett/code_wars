// this solution works with k always being 3, need variable number of for loops though. trying imperative iteration next

function chooseBestSumSometimes(t, k, ls) {
  if (ls.length < k) return null;
  var max = 0;
  var a = 0;
  for (var i = a; i < ls.length - 2; i++) {
    for (var j = i + 1; j < ls.length - 1; j++) {
      for (var l = j + 1; l < ls.length; l++) {
        var check = ls[i] + ls[j] + ls[l];
        if (check > max && check <= t) max = check;
      }
    }
  }
  return max;
}

// SO ugly, but works. recursion next

function chooseBestSum(t, k, ls) {
  if (ls.length < k || ls.length < 1 || t < 0 || k < 1) return null;
  if (ls.length === k) {
    var sum = 0;
    for (var i = 0; i < ls.length; i++) {
      sum += ls[i];
    }
    return sum;
  }
  switch (k) {
    case 1:
      return withOne(t, ls);
    case 2:
      return withTwo(t, ls);
    case 3:
      return withThree(t, ls);
    case 4:
      return withFour(t, ls);
    case 5:
      return withFive(t, ls);
    case 6:
      return withSix(t, ls);
    case 7:
      return withSeven(t, ls);
    case 8:
      return withEight(t, ls);
    case 9:
      return withNine(t, ls);
    case 10:
      return withTen(t, ls);
    case 15:
      return withFifteen(t, ls);

    default:
      return 9;
  }
}

function withOne(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length; i++) {
    var check = ls[i];
    if (check > max && check <= t) max = check;
  }
  if (max === 0) return null;
  return max;
}

function withTwo(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length - 1; i++) {
    for (var j = i + 1; j < ls.length; j++) {
      var check = ls[i] + ls[j];
      if (check > max && check <= t) max = check;
    }
  }
  if (max === 0) return null;
  return max;
}

function withThree(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length - 2; i++) {
    for (var j = i + 1; j < ls.length - 1; j++) {
      for (var l = j + 1; l < ls.length; l++) {
        var check = ls[i] + ls[j] + ls[l];
        if (check > max && check <= t) max = check;
      }
    }
  }
  if (max === 0) return null;
  return max;
}

function withFour(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length - 3; i++) {
    for (var j = i + 1; j < ls.length - 2; j++) {
      for (var l = j + 1; l < ls.length - 1; l++) {
        for (var m = l + 1; m < ls.length; m++) {
          var check = ls[i] + ls[j] + ls[l] + ls[m];
          if (check > max && check <= t) max = check;
        }
      }
    }
  }
  if (max === 0) return null;
  return max;
}

function withFive(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length - 4; i++) {
    for (var j = i + 1; j < ls.length - 3; j++) {
      for (var l = j + 1; l < ls.length - 2; l++) {
        for (var m = l + 1; m < ls.length - 1; m++) {
          for (var n = m + 1; n < ls.length; n++) {
            var check = ls[i] + ls[j] + ls[l] + ls[m] + ls[n];
            if (check > max && check <= t) max = check;
          }
        }
      }
    }
  }
  if (max === 0) return null;
  return max;
}

function withSix(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length - 5; i++) {
    for (var j = i + 1; j < ls.length - 4; j++) {
      for (var l = j + 1; l < ls.length - 3; l++) {
        for (var m = l + 1; m < ls.length - 2; m++) {
          for (var n = m + 1; n < ls.length - 1; n++) {
            for (var o = n + 1; o < ls.length; o++) {
              var check = ls[i] + ls[j] + ls[l] + ls[m] + ls[n] + ls[o];
              if (check > max && check <= t) max = check;
            }
          }
        }
      }
    }
  }
  if (max === 0) return null;
  return max;
}

function withSeven(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length - 6; i++) {
    for (var j = i + 1; j < ls.length - 5; j++) {
      for (var l = j + 1; l < ls.length - 4; l++) {
        for (var m = l + 1; m < ls.length - 3; m++) {
          for (var n = m + 1; n < ls.length - 2; n++) {
            for (var o = n + 1; o < ls.length - 1; o++) {
              for (var p = o + 1; p < ls.length; p++) {
                var check =
                  ls[i] + ls[j] + ls[l] + ls[m] + ls[n] + ls[o] + ls[p];
                if (check > max && check <= t) max = check;
              }
            }
          }
        }
      }
    }
  }
  if (max === 0) return null;
  return max;
}

function withEight(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length - 7; i++) {
    for (var j = i + 1; j < ls.length - 6; j++) {
      for (var l = j + 1; l < ls.length - 5; l++) {
        for (var m = l + 1; m < ls.length - 4; m++) {
          for (var n = m + 1; n < ls.length - 3; n++) {
            for (var o = n + 1; o < ls.length - 2; o++) {
              for (var p = o + 1; p < ls.length - 1; p++) {
                for (var q = p + 1; q < ls.length; q++) {
                  var check =
                    ls[i] +
                    ls[j] +
                    ls[l] +
                    ls[m] +
                    ls[n] +
                    ls[o] +
                    ls[p] +
                    ls[q];
                  if (check > max && check <= t) max = check;
                }
              }
            }
          }
        }
      }
    }
  }
  if (max === 0) return null;
  return max;
}

function withNine(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length - 8; i++) {
    for (var j = i + 1; j < ls.length - 7; j++) {
      for (var l = j + 1; l < ls.length - 6; l++) {
        for (var m = l + 1; m < ls.length - 5; m++) {
          for (var n = m + 1; n < ls.length - 4; n++) {
            for (var o = n + 1; o < ls.length - 3; o++) {
              for (var p = o + 1; p < ls.length - 2; p++) {
                for (var q = p + 1; q < ls.length - 1; q++) {
                  for (var r = q + 1; r < ls.length; r++) {
                    var check =
                      ls[i] +
                      ls[j] +
                      ls[l] +
                      ls[m] +
                      ls[n] +
                      ls[o] +
                      ls[p] +
                      ls[q] +
                      ls[r];
                    if (check > max && check <= t) max = check;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (max === 0) return null;
  return max;
}

function withTen(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length - 9; i++) {
    for (var j = i + 1; j < ls.length - 8; j++) {
      for (var l = j + 1; l < ls.length - 7; l++) {
        for (var m = l + 1; m < ls.length - 6; m++) {
          for (var n = m + 1; n < ls.length - 5; n++) {
            for (var o = n + 1; o < ls.length - 4; o++) {
              for (var p = o + 1; p < ls.length - 3; p++) {
                for (var q = p + 1; q < ls.length - 2; q++) {
                  for (var r = q + 1; r < ls.length - 1; r++) {
                    for (var s = r + 1; s < ls.length; s++) {
                      var check =
                        ls[i] +
                        ls[j] +
                        ls[l] +
                        ls[m] +
                        ls[n] +
                        ls[o] +
                        ls[p] +
                        ls[q] +
                        ls[r] +
                        ls[s];
                      if (check > max && check <= t) max = check;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (max === 0) return null;
  return max;
}

function withFifteen(t, ls) {
  var max = 0;
  for (var i = 0; i < ls.length - 14; i++) {
    for (var j = i + 1; j < ls.length - 13; j++) {
      for (var l = j + 1; l < ls.length - 12; l++) {
        for (var m = l + 1; m < ls.length - 11; m++) {
          for (var n = m + 1; n < ls.length - 10; n++) {
            for (var o = n + 1; o < ls.length - 9; o++) {
              for (var p = o + 1; p < ls.length - 8; p++) {
                for (var q = p + 1; q < ls.length - 7; q++) {
                  for (var r = q + 1; r < ls.length - 6; r++) {
                    for (var s = r + 1; s < ls.length - 5; s++) {
                      for (var ab = s + 1; ab < ls.length - 4; ab++) {
                        for (var ac = ab + 1; ac < ls.length - 3; ac++) {
                          for (var ad = ac + 1; ad < ls.length - 2; ad++) {
                            for (var ae = ad + 1; ae < ls.length - 1; ae++) {
                              for (var af = ae + 1; af < ls.length; af++) {
                                var check =
                                  ls[i] +
                                  ls[j] +
                                  ls[l] +
                                  ls[m] +
                                  ls[n] +
                                  ls[o] +
                                  ls[p] +
                                  ls[q] +
                                  ls[r] +
                                  ls[s] +
                                  ls[ab] +
                                  ls[ac] +
                                  ls[ad] +
                                  ls[ae] +
                                  ls[af];
                                if (check > max && check <= t) max = check;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (max === 0) return null;
  return max;
}

// recursion below here
