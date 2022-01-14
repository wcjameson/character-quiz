$(document).ready(function() {
  $("button#submit-form").click(function(event) {
    event.preventDefault();
    let userSelection = $("input:radio[name=answer1Radio]:checked").val();
    console.log("User selection is " + userSelection);
     if(userSelection === "option1") {
       $("#answer-hobbit").show();
     } else if(userSelection === "option2") {
       $("#answer-orc").show(); 
     } else {
       $("#answer-elf").show();
     }
  });
});