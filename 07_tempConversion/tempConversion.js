const ftoc = function(F) {
  let faren = ((F-32) * 5 / 9)
    if (faren % 1 == 0) {
      return(faren)
    } else {
      faren = +faren.toFixed(1)
      return(faren)
    }

};

const ctof = function(C) {
  let celcius = (C *(9/5) + 32)
  if (celcius % 1 == 0) {
    return(celcius)
  } else {
    celcius = +celcius.toFixed(1)
  return(celcius);
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
