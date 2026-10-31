$(document).ready(function() {
  $("#hide-btn").click(function() {
    $("#status, #facts").hide();
  });
  $("#show-btn").click(function() {
    $("#status, #facts").show();
  });
  $("#toggle-btn").click(function() {
    $("#status, #facts").toggle();
  });
});