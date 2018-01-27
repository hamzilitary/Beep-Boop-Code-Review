var byThree = function(number) {
  parseInt(number);
  if (number % 3 === 0 && number !== 0) {
    return true;
  } else {
    return false;
  };
};
var beep = function(number) {
  number.split("");
  for (var i = 0; i <= number.length; i += 1) {
    if(number(i) === 0) {
      return true;
       {
      return false;
};
};
};
};
var boop = function(number) {
  number.split("");
  for (var i = 0; i <= number.length; i += 1) {
    if(number(i) === 0) {
      return true;
       {
      return false;
};
};
};
};
var rangeCount = function(number) {
  var newArray = [];
  for (var i = 0; i <= number.length; i += 1) {
    rangeCount[i] = i;
  };
  return rangeCount;
};
var otherEntry = function(number) {
  if (byThree(number) === true) {
    number = "Im sorry, Im afraid I can't do that.";
    return number;
}  else if (beep(number) === true) {
    number = "BEEP";
    return number;
}   else if (boop(number) === true) {
    number = "BOOP";
    return number;
}   else {
    return rangeCount(number);
};
};
//display logic
