$(document).ready(function(){
  $('.dropdown-trigger').dropdown();

  $('.collapsible').collapsible();
});

$(".callBtn").on("click", function(e) {
  $(".popupSection").show();
});

var notClose = 0;
$(".popupSection").on("click", function() {
  if (notClose == 1) {
    notClose = 0;
  } else {
    $(".popupSection").hide();
    notClose = 0;
  }

});
$(".popupFormBlock").on("click", function() {
  notClose = 1;
});
$(".closeIcon").on("click", function() {
  notClose = 1;
});
