function repeatStringNumTimes(str, num) {
  if(num > 0){
     return (new Array(num + 1)).join(str);
     
  } else {
    return str = "";
  }
}

repeatStringNumTimes("abc", -2);