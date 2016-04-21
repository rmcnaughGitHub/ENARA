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
    navArr = [$('.navAbout'),$('.navAudio'),$('.navVideo')],
    colorFade = $('.color-lerp'),
    backtoTop = $('#back-to-top'),
    backToTopFadeinPosition = 600,// position for backtop button to fade in,



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
      touchSliderImg();//touch slider for image
      touchSliderVid();//touch slider for video
      touchSlider();
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
            colorLerp();//color pulse
            console.log('menu-open ' + ' openNav = ' +openNav);
          }else {
            openNav = false;
            $('#nav-hidden').animate({'margin-top': '-230px'}, 200, 'swing');
            $('.overlay').css({'display':'none'});
            $('body, html').css({'overflow':'scroll'});
            console.log('menu-closed ' + ' openNav = ' +openNav);
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
          scrollTop: $(hash).offset().top -$navMenu.height()
        }, 500, 'swing', function(){
          //add hash to URl when finished scrolling
          window.location.hash = hash;
          //console.log('Window Position =  ' + $(window).scrollTop() + '  hash = ' + hash);
        });
        //close nav
        if( openNav === true ){
          closeNav();
        }

      });

      //BACK TO TOP BUTTON
      backtoTop.on('click', function(e){
        
        e.preventDefault();
        // store hash
        var hash = this.hash;
        // move
        bodyScroll(0, 800, window.location.hash = hash);

      });
          
    };

    //SCROLL BODY AND HTML
    function bodyScroll($element, $timeToScroll, $callBack){
      $('html, body').animate({
          scrollTop: $element
        }, $timeToScroll, 'swing', function(){
            $callBack;
            console.log($callBack);
        });
          console.log('Window Position =  ' + $(window).scrollTop());
    }

    //TOUCH-SLIDER IMAGE
    function touchSliderImg(){
      var imgSlider = $('#slider').Swipe({
        startSlide: 0,
        speed: 800,
        auto: 5000,
        continuous: true,
        disableScroll: false,
        stopPropagation: false
      }).data('Swipe');

      $('.next').on('click', imgSlider.next);
      $('.prev').on('click', imgSlider.prev);
    };


    //TOUCH-SLIDER VIDEO
    function touchSliderVid(){
      var vidSlider = $('#sliderVideo').Swipe({
        startSlide: 0,
        speed: 800,
      }).data('Swipe');

      $('.nextVid').on('click', vidSlider.next);
      $('.prevVid').on('click', vidSlider.prev);
    }

    //TOUCH-SLIDER All
    function touchSlider(){
      /*var currentSliderId = $(this).find('.touch-swipe').attr('id');
      console.log("currentSliderId = "+currentSliderId);

      var currentSliderControl = $('#' + currentSliderId).siblings('id');
      console.log("currentSliderControl = "+currentSliderControl);

      window[currentSliderId] = $('#' + currentSliderId).Swipe.data('Swipe');
      window[currentSliderId].setup();

      $('.prev', currentslidercontrol).click(function() {
        window[currentSliderid].prev();
      });
      $('.next', currentslidercontrol).click(function() {
          window[currentSliderid].next();
      }); */
      
      
      /*$('.touch-swipe').each(function(index, element){
          $(this).addClass('s'+index);
          var currentSliderId = index;
          var swipeArr = [],
            speedNum = 800,//Math.random(rangeRad(800,1000)),
            autoNum = 5000;
          
          //fire function for multiple slides       
          swipeArr[index] = $('.s' + index).Swipe({
            startSlide: 0,
            speed: speedNum,
            auto: autoNum,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            nextButton: index,
            prevButton: index
          }).data('Swipe');
          //console.log('swipeArr[index] = ' + swipeArr[index]);

          if( swipeArr[1] ){
            autoNum = 0;
            console.log('swipeArr[index] = ' + '.s' + index);
            console.log('speedNum ' + speedNum);
            console.log('autoNum ' + speedNum);
            swipeArr[1].update();
          }

          $('.prev').on('click', swipeArr[index].next);
          $('.next').on('click', swipeArr[index].prev);
          swipeArr[0].update();
        });*/


    }
        

    //COLOR LERP
    function colorLerp(){
      colorFade.colorRotator({
        colors: ['#ffff00','#efefef'],
        property: 'background',
        //easing: 'swing',
        delay: 1100
      });

      if( openNav == true ){
        colorFade.colorRotator('start');//start
        console.log("color-lerp on");
      }else{
        colorFade.colorRotator('stop');//stop
        console.log("color-lerp off");
      }
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


    ////SHOW/HIDE BACK TO TOP BUTTON
    function showBackToTopButton(){
      if( $(window).scrollTop() >= backToTopFadeinPosition){
        backtoTop.css({'display':'inline-block'});
      }else{
        backtoTop.css({'display':'none'});
      }
      console.log('Window Position =  ' + $(window).scrollTop());   
    }


    ////DETECT USER SCROLL POSITION AND FIRE EVENTS////
    $(window).scroll(function(d, h){
      //watch back-to-top button
      showBackToTopButton();
    });


    return {
      init: init
    };

})();

run.init(); //Run object
