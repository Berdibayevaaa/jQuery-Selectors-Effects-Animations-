$(document).ready(function() {
  $("#add-btn").click(function() {
    const val = $("#skill-input").val().trim();
    if (val !== "") {
      $("#skill-list").append("<li>" + val + "</li>");
      $("#skill-input").val("");
    }
  });

  $("#prepend-btn").click(function() {
    const val = $("#skill-input").val().trim();
    if (val !== "") {
      $("#skill-list").prepend("<li>" + val + "</li>");
      $("#skill-input").val("");
    }
  });

  $("#remove-btn").click(function() {
    $("#skill-list li:last").remove();
  });
});