/*Header*/
$(document).ready(function(){
    $('.header').height($(window).height());
})

/*Scroll effect*/
 $(".nav-link").click(function(e){
    e.preventDefault(); // stop default jump
    let target = $(this).data("value"); // get data-value
    $("html, body").animate({
      scrollTop: $("#" + target).offset().top
    }, 1000);
  });
