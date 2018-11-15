function anagrams(word, words) {
  var letters = {};
  var results = [];
  for (var i = 0; i < word.length; i++) {
    if (letters[word[i]]) {
      letters[word[i]]++;
    } else {
      letters[word[i]] = 1;
    }
  }

  for (var k = 0; k < words.length; k++) {
    var lettersCheck = {};
    for (var j = 0; j < words[k].length; j++) {
      if (lettersCheck[words[k][j]]) {
        lettersCheck[words[k][j]]++;
      } else {
        lettersCheck[words[k][j]] = 1;
      }
    }
    if (checkObjects(letters, lettersCheck)) results.push(words[k]);
  }

  return results;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));

function checkObjects(one, two) {
  for (var test in one) {
    if (one[test] !== two[test]) return false;
  }
  return true;
}
