$(document).ready(function($){
	"use strict";

	$('.owl-carousel').owlCarousel({
		items:4,
		loop:true,
		margin:60,
		nav:true,
		dots:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:false,
		//navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
		navText : ['<i class="far fa-hand-point-left" style="font-size:40px;color:cyan;padding-left: 10%;"></i>','<i class="far fa-hand-point-right" style="font-size:40px;color:cyan;padding-left: 10%;"></i>'],
		mouseDrag: false,
		responsiveClass:true,
	});
	$('.owl-prev').on('click',function(){
		$(this).addClass('navActive');
		$('.owl-prev').removeClass('navActive');
	})
	$('.owl-next').on('click',function(){
		$(this).addClass('navActive');
		$('.owl-prev').removeClass('navActive');
	})

}(jQuery));