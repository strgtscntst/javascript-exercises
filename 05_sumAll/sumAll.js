const sumAll = function(arg1, arg2) {
    if(typeof(arg1) !== "number" || typeof(arg2) !== "number" || arg1 == arg2 || arg1 < 0 || arg2 < 0){
        return "ERROR"
    }else{
        let i;
        let end;
        let total = 0;
        i = (arg1 < arg2) ? arg1 : arg2;
        end = (arg1 < arg2) ? arg2 : arg1;
        while(i <= end){
            total += i++;
        }
        return total
    }
};

// Do not edit below this line
module.exports = sumAll;
