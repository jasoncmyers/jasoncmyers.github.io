$(document).ready(function() {
  
  $("#navbar-about").click(function(event) {
    event.preventDefault();
    $(window).scrollTo($("#about"), 500);
  });
  
  $("#navbar-portfolio").click(function(event) {
    event.preventDefault();
    $(window).scrollTo($("#portfolio"), 500);
  });
  
  $("#navbar-contact").click(function(event) {
    event.preventDefault();
    $(window).scrollTo($("#contact"), 500);
  });
  
  $(".navbar-brand").click(function(event) {
    event.preventDefault();
    $(window).scrollTo(0, 500);
  })
  
  $("#navbar-top").click(function(event) {
    event.preventDefault();
    $(window).scrollTo(0, 500);
  })
  
})