const sumAll = function(num1, num2) {
    let lowEnd = num1;
    let highEnd = num2;
    let list = (0);
    if (typeof lowEnd === 'number' && typeof highEnd === 'number' && lowEnd >= 0 && highEnd >= 0) {
        const loopSum = function() {
            if (lowEnd < highEnd) {
            for (i = lowEnd; i <= highEnd; i++) {
                list += i;
            } 
        } else {
            for (i = lowEnd; i >= highEnd; i--) {
                list += i;
        }   
        }
        }
        loopSum()
        return(list);
    } else {
        return('ERROR');
    }
}
// Do not edit below this line
module.exports = sumAll;
