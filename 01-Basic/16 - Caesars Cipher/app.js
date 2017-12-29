function rot13(str) { 
  var newString = '';
  var code;
  for(var i = 0; i < str.length; i++){
    code = str.charCodeAt(i);
    if(65 <= code && code <= 77){
      newString = newString + String.fromCharCode(code + 13);
    } else if (78 <= code && code <= 90) {
      newString = newString + String.fromCharCode(code - 13);
    } else {
      newString = newString + String.fromCharCode(code);
    }
  }
  return newString;
}
rot13("SERR CVMMN!");
