const leapYears = function(arg) {
const year = arg
//if year is divisible by 4, 4 and 400, and not divisible by 100, then return true
if (year % 400 == 0 && year && year % 4 == 0) {
return true
} else if (year % 4 == 0 && year % 100 !== 0) {
return true
} else {
    return false
}
}
// Do not edit below this line
module.exports = leapYears;
