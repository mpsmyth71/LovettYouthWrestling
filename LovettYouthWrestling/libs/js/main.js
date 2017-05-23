// THEME OPTIONS.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is JS file that contains principal fuctions of theme */
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Sports Cup- Responsive HTML5  soccer and sports Template.
// Author: Iwthemes.
// Name File: main.js
// Version 1.0 - Created on 20 May 2014
// Website: http://www.iwthemes.com 
// Email: support@iwthemes.com
// Copyright: (C) 2014

$(document).ready(function($) {

	'use strict';

	//=================================== Twitter Feed  ===============================//

  $("#twitter").tweet({
      modpath: 'js/twitter/index.php',
      username: "envato", // Change for Your Username
      count: 5,
      loading_text: "Loading tweets..."
  });

  //=================================== Google Map  ==============================//
  
  /*
    Map Settings
    Find the Latitude and Longitude of your address:  
    - http://universimmedia.pagesperso-orange.fr/geo/loc.htm  
    - http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude/
  */

  // Map Markers
  var mapMarkers = [{
    address: "217 Summit Boulevard, Birmingham, AL 35243",
    html: "<strong>Alabama Office</strong><br>217 Summit Boulevard, Birmingham, AL 35243<br><br><a href='#' onclick='mapCenterAt({latitude: 33.44792, longitude: -86.72963, zoom: 16}, event)'>[+] zoom here</a>",
    icon: {
      image: "img/img-theme/pin.png",
      iconsize: [26, 46],
      iconanchor: [12, 46]
    }
  },{
    address: "645 E. Shaw Avenue, Fresno, CA 93710",
    html: "<strong>California Office</strong><br>645 E. Shaw Avenue, Fresno, CA 93710<br><br><a href='#' onclick='mapCenterAt({latitude: 36.80948, longitude: -119.77598, zoom: 16}, event)'>[+] zoom here</a>",
    icon: {
      image: "img/img-theme/pin.png",
      iconsize: [26, 46],
      iconanchor: [12, 46]
    }
  },{
    address: "New York, NY 10017",
    html: "<strong>New York Office</strong><br>New York, NY 10017<br><br><a href='#' onclick='mapCenterAt({latitude: 40.75198, longitude: -73.96978, zoom: 16}, event)'>[+] zoom here</a>",
    icon: {
      image: "img/img-theme/pin.png",
      iconsize: [26, 46],
      iconanchor: [12, 46]
    }
  }];

  // Map Initial Location
  var initLatitude = 38.09024;
  var initLongitude = -98.71289;

  // Map Extended Settings
  var mapSettings = {
    controls: {
      panControl: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      overviewMapControl: true
    },
    scrollwheel: false,
    markers: mapMarkers,
    latitude: initLatitude,
    longitude: initLongitude,
    zoom: 5
  };
  
  $("#map").gMap(mapSettings);
 
	//=================================== Nav Responsive =============================//

  $('#menu').tinyNav({
      active: 'selected'
  });

  //=================================== Sticky nav ===================================//

  $(".mainmenu").sticky({topSpacing:0});

  //=================================== Nav Superfish ===============================//

	$('ul.sf-menu').superfish();

  //=================================== Counter  ==============================//

   $('#event-one').countdown('2017/11/13', function(event) {
      var $this = $(this).html(event.strftime(''
      + '<span>%D <br> <small>days</small></span>  '
      + '<span>%H <br> <small>hr</small> </span>  '
      + '<span>%M <br> <small>min</small> </span>  '
      + '<span>%S <br> <small>sec</small></span> '));
   });

   $('#event-two').countdown('2014/09/10', function(event) {
      var $this = $(this).html(event.strftime(''
      + '<span>%D <br> <small>days</small></span>  '
      + '<span>%H <br> <small>hr</small> </span>  '
      + '<span>%M <br> <small>min</small> </span>  '
      + '<span>%S <br> <small>sec</small></span> '));
   });
   $('#event-three').countdown('2014/12/24', function(event) {
      var $this = $(this).html(event.strftime(''
      + '<span>%D <br> <small>days</small></span>  '
      + '<span>%H <br> <small>hr</small> </span>  '
      + '<span>%M <br> <small>min</small> </span>  '
      + '<span>%S <br> <small>sec</small></span> '));
   });
 	
	//=================================== Slide Services  ==============================//
	 
   $(".single-carousel").owlCarousel({
       loop: true,
       autoplay: false,
       autoplayTimeout: 3000,
       items : 1,
       nav: true,
       autoHeight: true
	});

  //=================================== Carousel Blog  ==================================//

	$("#events-carousel").owlCarousel({
	    loop: true,
	    items: 3,
        mouseDrag: true,
        margin: 10,
        dots: true,
	    autoplay:true,
	    autoplayTimeout: 3000,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$('.owl-carousel .owl-item').on('mouseenter', function (e) {
	    $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
	})
	$('.owl-carousel .owl-item').on('mouseleave', function (e) {
	    $(this).closest('.owl-carousel').trigger('play.owl.autoplay', [500]);
	})

  //=================================== Carousel Players  ==================================//

	$("#players-carousel").owlCarousel({
	    loop: true,
	    items: 3,
	    mouseDrag: true,
	    margin: 10,
	    dots: true,
	    autoplay:true,
	    autoplayTimeout: 3000,
	    autoplayHoverPause: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	$('.owl-carousel .owl-item').on('mouseenter', function (e) {
	    $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
	})
	$('.owl-carousel .owl-item').on('mouseleave', function (e) {
	    $(this).closest('.owl-carousel').trigger('play.owl.autoplay', [500]);
	})

  //=================================== Carousel Programs  ==================================//

	$("#programs-carousel").owlCarousel({
	   loop: true,
       autoplay: true,
       autoplayTimeout: 3000,
       items : 1,
       nav: false
   });

   //=================================== Carousel Sponsor  ==================================//

   $("#sponsors").owlCarousel({
        loop: true,
        items: 6,
        mouseDrag: true,
        margin: 10,
        dots: true,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            }
        }
   });

   //=================================== Carousel Testimonials  ============================//

   $("#testimonials").owlCarousel({
       loop: true,
       items: 3,
       mouseDrag: true,
       margin: 10,
       dots: true,
       autoplay:true,
       autoplayTimeout: 3000,
       autoplayHoverPause: true,
       responsive: {
           0: {
               items: 1
           },
           600: {
               items: 2
           },
           1000: {
               items: 3
           },
           1200: {
               items: 3
           }
       }
  });

	//=================================== Carousel Twitter  ===============================//
	 
   $(".tweet_list").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoHeight : true
	});

	//=================================== Subtmit Form  ===================================//

	$('.form-theme').submit(function(event) {  
	     event.preventDefault();  
	     var url = $(this).attr('action');  
	     var datos = $(this).serialize();  
	     	$.get(url, datos, function(resultado) {  
	     	$('.result').html(resultado);  
		});  
 	});

  //=================================== Form Newslleter  =================================//

  $('#newsletterForm').submit(function(event) {  
       event.preventDefault();  
       var url = $(this).attr('action');  
       var datos = $(this).serialize();  
        $.get(url, datos, function(resultado) {  
        $('#result-newsletter').html(resultado);  
    });  
  });  

  //=================================== Ligbox  ===========================================//	

  $(".fancybox").fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',

      helpers : {
        title : {
          type : 'inside'
        }
      }
  });
	
	//=============================  tooltip demo ===========================================//

  $('.tooltip-hover').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
   });

	//=================================== Totop  ============================================//

  $().UItoTop({
		scrollSpeed:500,
		easingType:'linear'
	});	

  //=================================== Portfolio Filters  ==============================//

  $(window).load(function(){
      var $container = $('.portfolioContainer');
      $container.isotope({
      filter: '*',
          animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
  	}
  });
	 
  $('.portfolioFilter a').click(function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');
       var selector = $(this).attr('data-filter');
       $container.isotope({
        filter: selector,
              animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
            }
        });
       return false;
      }); 
   });
 
});	

  //=================================== Slide Home =====================================//

$('#slide').camera({
    height: '30%',        
    thumbnails: true
  });  