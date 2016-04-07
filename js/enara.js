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
    $navMenu = $('.navMenu'),
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
  };


  ////MOUSE EVENTS////
  var mouseEvents = function(){

    ///NAV MENU
    $('.navMenu').on('click', function (e){
        e.preventDefault();
        if( openNav == false ){
          openNav = true;
          $('.sticky-nav-menu').removeClass('nav-hidden');
          $('.overlay').css({'display':'block'});
          $('body, html').css({'overflow':'hidden'});
          navOpen();
          console.log('menu-open');
        }else {
          openNav = false;
          $('.sticky-nav-menu').addClass('nav-hidden');
          $('.overlay').css({'display':'none'});
          $('body, html').css({'overflow':'scroll'});
          console.log('menu-closed');
        }
    });
        
  };


  ////OPEN CLOSE NAVIGATION////
  function navOpen(){
    /*for( var i=0; i<navArr.length; i++ ){
      navArr[i].position().top = $navMenu.height() * i;
     //TweenLite.to(navArr[i], time - .3, {delay: 0, scrollTo: {y: i.height()}, ease:Expo.easeOut}, 0.2);
    }*/
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
