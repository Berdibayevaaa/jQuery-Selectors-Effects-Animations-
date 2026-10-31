$(document).ready(function() {
  $("#fadeout-btn").click(function() {
    $("#gallery img").fadeOut();
  });
  $("#fadein-btn").click(function() {
    $("#gallery img").fadeIn();
  });
  $("#fadetoggle-btn").click(function() {
    $("#gallery img").fadeToggle();
  });
});