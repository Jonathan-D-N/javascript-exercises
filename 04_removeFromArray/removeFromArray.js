const removeFromArray = function(...args) {
    const arr = args[0];
    const myArray = [];

    arr.forEach((item) => {
        if (!args.includes(item)) {
            myArray.push(item);
        }
    }); return myArray;
}
// Do not edit below this line
module.exports = removeFromArray;
