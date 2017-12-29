function palindrome(str) {
  var newStr = str.replace(/[\W_-]/g, '');
  var lowerStr = newStr.toLowerCase();
  var revStr = lowerStr.split('').reverse().join('');
  return lowerStr == revStr;
}
palindrome("not a palindrome") ;