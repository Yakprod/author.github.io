$(function() {

	// Custom JS
	$('.main').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		margin: 0,
		nav: true,
		navText: ['', ''],
		// navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	});

	$(document).ready(function(){
		var link = $('.menu-link');
		var link_active = $('.menu-link_active');
		var menu = $('.menu');

		link.click(function(){
			link.toggleClass('menu-link_active');
			menu.toggleClass('menu_active');
		});
		link_active.click(function(){
			link.removeClass('menu-link_active');
		});
	});

	$(".mmenu a").mPageScroll2id({
		offset: 0
	})

});
