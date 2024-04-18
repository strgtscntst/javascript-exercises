const removeFromArray = function(array, ...items) {
    let newArray = [];
    while(array != 0){
        checker = array.shift();
        if(!items.includes(checker)){
            newArray.push(checker);
        }
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
