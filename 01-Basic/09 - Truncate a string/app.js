function truncateString(str, num) {
  if(num <= 3) {
    return str.slice(0, num).concat("...");
  } else if(str.length > num) {
    return str.slice(0, num-3).concat("...");
  } else {
    return str;
  }
}

truncateString("Absolutely Longer", 2);