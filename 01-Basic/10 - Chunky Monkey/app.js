function chunkArrayInGroups(arr, size) {
  var group = [];
  while(arr.length > 0) {
    group.push(arr.splice(0, size));
  }
  return group;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
