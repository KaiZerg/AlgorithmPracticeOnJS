function findLongestWord(str) {
  var spl = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < spl.length; i++) {
    if(spl[i].length > longestWord) {
      longestWord = spl[i].length;
    }   
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");