function mutation(arr) {
    var first = arr[0].toLowerCase().split('');
    var second = arr[1].toLowerCase().split('');
    var temp = 0;
    // Check every character and if the index is found add one
    for (var s in second){
        if (first.indexOf(second[s]) > -1) {
            temp+= 0;
        } else
            temp+=1;
        }
    if (temp === 0)
        return true;
    else
        return false;
}
mutation(["hello", "hey"]);