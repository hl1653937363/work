function unique3(array){
    var n = [array[0]]; 
    for(var i = 1; i < array.length; i++) {
        if (array.indexOf(array[i]) == i) n.push(array[i]);
    }
    return n;
}
    