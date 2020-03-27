function xo(str) {
    // you can only write your code here!
    var a = 0
    var b = 0
    var c = str.length-1
    
    for(y = 0; c >= y; c--){
        var klmt = str[c]
       
        if(klmt == 'x'){
            a++
        }else if (klmt == 'o'){
            b++
        }
    }

    if(a === b){
        return true
    }else {
        return false
    }
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true