$(document).ready(function() {
  $("#name").on("input", function() {
    $("#out-name").text($(this).val());
  });
  $("#email").on("input", function() {
    $("#out-email").text($(this).val());
  });
});