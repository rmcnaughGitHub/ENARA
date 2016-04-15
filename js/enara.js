/* jshint browser: true, jquery: true, unused: false, devel: true */
/* globals TweenLite, Power4, Quint, Expo */
var run = (function (){
  //'use strict';

	//DEFINE MODULE GLOBAL VARIABLES
	var time = 1,
  	scrollerOffset = 0,
    $scrolloc = $(window).scrollTop(),
    $scrollTop = $('.header, .desktop').height(),
    openNav = false,
    //for anchor scroll, Adjusted when header becomes fixed in mobile view
    vid = document.getElementById('vid'),//video
    $navMenu = $('.navTop'),
    $navAbout = $('.navAbout'),
    $navAudio = $('.navAudio'),
    $navVideo = $('.navVideo'),
    $overlay = $('.overlay'),
    $navVideo = $('.navAudio'),
    navArr = [$('.navAbout'),$('.navAudio'),$('.navVideo')];

    ////DETECT WINDOW SIZE////
    mobileSize = $(window).width() <= 667,
    tabletSize = $(window).width() >= 728,
    desktopSize = $(window).width() >= 1200;


    //INTITIALIZE
    var init = function(){
      setupElements();
    };

    //SETUP ELEMENTS
    var setupElements = function(){
      //FIRE FUCTIONS
      mouseEvents();//mouse events
      touchSlider();//touch slider for image
    };


    ////MOUSE EVENTS////
    var mouseEvents = function(){

      ///NAV MENU
      $('.navTop').on('click', function (e){
          e.preventDefault();
          if( openNav == false ){
            openNav = true;
            $('#nav-hidden').animate({'margin-top': '0'}, 200, 'swing');
            $('.overlay').css({'display':'block'});
            $('body, html').css({'overflow':'hidden'});
            console.log('menu-open');
          }else {
            openNav = false;
            $('#nav-hidden').animate({'margin-top': '-230px'}, 200, 'swing');
            $('.overlay').css({'display':'none'});
            $('body, html').css({'overflow':'scroll'});
            console.log('menu-closed');
          }
      });

      $('#myDiv').animate(
      { opacity: 0 }, // what we are animating
      'fast', // how fast we are animating
      'swing', // the type of easing
      function() { // the callback
          alert('done');
      });

      ///SCROLL TO SECTIONS
      $('a').on('click', function(e){
        
        e.preventDefault();
        // store hash
        var hash = this.hash;
        // move
        $('html, body').animate({
          scrollTop: $(hash).offset().top - $navMenu.height()
        }, 500, 'swing', function(){
          //add hash to URl when finished scrolling
          window.location.hash = hash;
        } );
        //close nav
        if( openNav === true ){
          closeNav();
        }

      });
          
    };

    //TOUCH-SLIDER
    function touchSlider(){
      Slider = $('#slider').Swipe({
        startSlide: 0,
        speed: 800,
        auto: 5000,
        continuous: true,
        disableScroll: false,
        stopPropagation: false
      }).data('Swipe');

      $('.next').on('click', Slider.next);
      $('.prev').on('click', Slider.prev);
    }
        


    ////RANGE BETWEEN 2 NUMBERS FUNCTION
    function rangeRad(a,b){
      var min = Math.min.apply(Math, [a, b]);
      var max = Math.max.apply(Math, [a, b]);
      console.log('min ' + min + ' max '+max);
      return this > min && this < max;
    };


    ////CLOSE NAVIGATION////
    function closeNav(){
      openNav = false;
      $('#nav-hidden').animate({'margin-top': '-230px'}, 200, 'swing');
      $('.overlay').css({'display':'none'});
      $('body, html').css({'overflow':'scroll'});
      console.log('menu-closed');
    };


    ////DETECT USER SCROLL POSITION AND FIRE EVENTS////
    $(window).scroll(function(d, h){
      //fade();
    });


    return {
      init: init
    };

})();

run.init(); //Run object
