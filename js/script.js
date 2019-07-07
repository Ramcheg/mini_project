
$('.baner__bro').slick({
	slidesToShow: 1,
	dots: true,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 4000,
    arrows : false,
});
$('.testimonial').slick({
	slidesToShow: 1,
	dots: true,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2500,
    arrows : false,
});
$('.works__slaiders').slick({
	slidesToShow: 1,
	dots: true,
     slidesToScroll: 1,
    arrows : true,
})

$(document).ready(function(){
	$(".button__one").focus(function(){

		$(".button__one").parent().css("border", "2px solid #f39c12").css("color", "#f39c12");
	})

	$(".button__one").blur(function(){

		$(".button__one").parent().css("border", "2px solid #d9d9d9").css("color", "#808080");
	})

	$(".button__two").focus(function(){

		$(".button__two").parent().css("border", "2px solid #f39c12").css("color", "#f39c12");
	})

	$(".button__two").blur(function(){

		$(".button__two").parent().css("border", "2px solid #d9d9d9").css("color", "#808080");
	})

	$(".text__write").focus(function(){

		$(".text__write").parent().css("border", "2px solid #f39c12").css("color", "#f39c12");
	})

	$(".text__write").blur(function(){

		$(".text__write").parent().css("border", "2px solid #d9d9d9").css("color", "#808080");
	})


	// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {

  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  },
};

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});








});