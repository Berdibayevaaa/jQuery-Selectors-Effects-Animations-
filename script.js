$(document).ready(function() {
  console.log("jQuery is ready!");

  // Part 1
  $("#theme-btn").click(function() {
    $("body").toggleClass("dark-mode");
  });
  $("#change-text-btn").click(function() {
    $("#headline").text("Updated Headline");
    $(".intro").css("color", "blue");
    $("h1").css("color", "red");
  });

  // Part 2
  $("#hide-btn").click(function() { $("#status-text, #facts-list").hide(); });
  $("#show-btn").click(function() { $("#status-text, #facts-list").show(); });
  $("#toggle-btn").click(function() { $("#status-text, #facts-list").toggle(); });

  $("#fadeout-btn").click(function() { $("#gallery img").fadeOut(); });
  $("#fadein-btn").click(function() { $("#gallery img").fadeIn(); });
  $("#fadetoggle-btn").click(function() { $("#gallery img").fadeToggle(); });

  $(".panel-title").click(function() {
    const current = $(this).next(".panel-content");
    $(".panel-content").not(current).slideUp();
    current.slideToggle();
  });

  // Part 3
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

  $("#change-link-btn").click(function() {
    $("#my-link").attr("href", "https://linkedin.com").text("LinkedIn");
  });

  $("#name-box").on("input", function() {
    $("#live-name").text($(this).val());
  });
  $("#email-box").on("input", function() {
    $("#live-email").text($(this).val());
  });

  // Part 4
  let isAnimated = false;
  $("#animate-btn").click(function() {
    if (!isAnimated) {
      $(".bar").each(function() {
        $(this).animate({ width: $(this).data("width") }, 500);
      });
      isAnimated = true;
    } else {
      $(".bar").animate({ width: "0%" }, 500);
      isAnimated = false;
    }
  });
});