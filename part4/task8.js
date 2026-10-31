$(document).ready(function() {
  let isOpen = false;

  $("#animate-btn").click(function() {
    if (!isOpen) {
      $(".bar").each(function() {
        $(this).animate({ width: $(this).data("width") }, 500);
      });
      isOpen = true;
    } else {
      $(".bar").animate({ width: "0%" }, 500);
      isOpen = false;
    }
  });
});