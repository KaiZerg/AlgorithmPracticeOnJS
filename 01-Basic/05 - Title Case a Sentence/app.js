function titleCase(str) {
  var myArray = str.toLowerCase().split(' ');  //convert the sentence to lower case and split it into an array
  for(var i=0;i<myArray.length;i++){
     myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].substring(1);
  }
  myArray = myArray.join(' ');
  return myArray;
}

titleCase("I'm a little tea pot");