$(function() {
  // Dice roll function
  function roll() {
    // Random number generator
    return Math.floor(Math.random() * 6 + 1);
  }
 
  // Place your code here
  $("#roll-dice").click(function() {
    $("#content").append(roll);
    
  });
    
    
  

});
