$(document).ready(function() {
  $(".panel-title").click(function() {
    const nextPanel = $(this).next(".panel-content");
    $(".panel-content").not(nextPanel).slideUp();
    nextPanel.slideToggle();
  });
});