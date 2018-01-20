function beepBoop(userInput) {
var beep = [0-9];
var newNumberString = userInput.toString();

  if (userInput.charAt(0) === "0") {
    return "beep";
}   else if (userInput.charAt(0) === "1") {
    return "boop";
}     else if (userInput % 3 === 0 && userInput > 0) {
      return "Im sorry, Dave. Im afraid I cant do that.";
  }     else if (userInput.charAt(0) % 3 === 0 && userInput > 0) {
          return "Im sorry, Dave. Im afraid I cant do that.";
    }       else if (userInput === "0") {
              return "beep";
      }         else if (userInput === "1") {
                  return "boop";
        }           else {
                      return userInput;
        }
};

$("#results").hide;
$(document).ready(function() {
   var newArray = [];
   $("#userInput").submit(function(event) {
     var userInput1 = $("#userInput1").val();
     for (i=0; i<userInput1.length; i++) {
       newArray.push(beepBoop(userInput1[i]));
 }
      $("#results").text(newArray.join());
      event.preventDefault();
});
});
