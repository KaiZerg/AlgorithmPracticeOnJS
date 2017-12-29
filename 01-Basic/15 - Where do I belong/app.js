function getIndexToIns(arr, num) {
  arr.sort();
  var counter=0;
  for(var i = 0; i < arr.length; i++) {
    if((arr[i] - num) < 0) {
      counter= counter + 1;
    }     
  }  
  return counter;
}
getIndexToIns([2, 5, 10], 15);