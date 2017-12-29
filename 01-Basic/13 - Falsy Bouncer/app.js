function bouncer(arr) {
  function good(value){
    if(Boolean(value) == true){
     return value; 
    }    
  }
  var result = arr.filter(good);
  return result;
}

bouncer([7, "ate", "", false, 9]);