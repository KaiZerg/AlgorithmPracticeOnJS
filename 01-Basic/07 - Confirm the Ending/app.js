function confirmEnding(str, target) {
  var check = str.substring(str.length - target.length);
  return check == target;
  
}

confirmEnding("Bastian", "n");