function beepBoop(userInput) {




    var beep = [0-9]
    var boop = [0]
    if (userInput === "1"){
      return "boop";
   }  else if (userInput === "0") {
     return "beep";
   }   else if (userInput % 3 ===0) {
        return "Im sorry, Dave I'm afraid I can't do that."
   }
 }
 $(document).ready(function() {
   $("#userInput").submit(function(event) {
 var userInput1 = $("#userInput1").val();
 var newArray = [];
 for (i=0; i<userInput1.length; i++) {
   newArray.push(beepBoop(userInput1[i]));
 }
 alert(newArray);
 event.preventDefault();







});
});
