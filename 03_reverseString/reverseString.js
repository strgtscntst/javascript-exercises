const reverseString = function(str) {
    let newStr = "";
    for(let count = str.length-1; count >= 0; count--){
        newStr +=  str[count];


    }
    return newStr
};

// Do not edit below this line
module.exports = reverseString;
