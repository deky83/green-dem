
$(window).on('load', function(){
  $('.side').addClass('loaded')
});
$("#leftside-navigation .sub-menu > a").click(function(e) {
  $("#leftside-navigation ul li ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
  e.stopPropagation()
});
$("#leftside-navigation .sub-menu2 > a").click(function(e) {
  $("#leftside-navigation .sub-menu2 ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
  e.stopPropagation()
});


$('.side li a').click( function() {
    $(".side li ul").toggleClass("active-cat");
} );


$(document).ready(function(){
	$("#cssmenu li").hover(
		function(){
			//$(this).find("a:first").addClass("hover");
			$(this).find("a:first").addClass("activeSubmenu");//dodajemo clasu da ovaj item bude aktivan kada se predje misem preko dd menia
			//$(this).find("ul:first").stop(true, true).slideDown(300);
		},
		function(){
			//$(this).find("a:first").removeClass("hover");
			$(this).find("a:first").removeClass("activeSubmenu");//uklanjamo dodatu klasu
			//$(this).find("ul:first").stop(false, true).slideUp(100);
		});
	 
});

$('#hidden-form').click(function(e){
    e.stopPropagation();
});
  $('.form-btn').click(function(e){
    e.preventDefault();
    e.stopPropagation();
         $('.hidden-form').show('slow'); 
     });
  $(document).click(function() {
    $('#hidden-form').hide('slow');
});

$('#hidden-form-mob').click(function(e){
    e.stopPropagation();
});
  $('.form-btn-mob').click(function(e){
    e.preventDefault();
    e.stopPropagation();
         $('.hidden-form-mob').show(); 
     });
  $(document).click(function() {
    $('#hidden-form-mob').hide();
});
$(function(){
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 90) {
          $('.bottom-header').addClass('stickytop');
      }
      else {
          $('.bottom-header').removeClass('stickytop');
      }
  });
});
