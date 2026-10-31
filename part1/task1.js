$(document).ready(function() {
  $("#change-btn").click(function() {
    $("#headline").text("Updated Headline");
    $(".intro").css("color", "blue");
    $("h1").css("color", "red");
  });

  $("#theme-btn").click(function() {
    $("body").toggleClass("dark-mode");
  });
});