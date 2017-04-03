$(function() {
  // Dice roll function
  function roll() {
    // Random number generator
    return Math.floor(Math.random() * 6 + 1);
  }
 
  // Place your code here
 $("#roll-dice").click(function() {
    var roll1 = roll();
    var roll2 = roll();
     $("#first-die").attr("src", "images/" +roll1+ ".png");
     $("#second-die").attr("src", "images/" +roll2+ ".png");
     $("#result").html(roll1 + roll2);
  });
  
    
  

});
