(function ($) {
  'use strict';

  $(document).ready(function () {    
          
   function siteMenu(){
        var $trigger = $('.trigger-nav'),// все объекты, которые имеют класс .trigger-nav
            $menu = $('.trigger-victim');//все объекты, которые имеют класс .trigger-victim
        
        $trigger.click(function(){ //по клику запускается анонимная функция
            $(this).next($menu).slideToggle();//находим именно тот триггер, по которому кликнул пользователь
        });
        //когда меняется размер окна, запускаем функцию
        $(window).resize(function(){
           if($(window).width() > 992){//если ширина окна больше 992 
               $menu.removeAttr('style');//убираем атрибут style
           } 
        });        
    }
      siteMenu();
      
    var $mainslider   = $('.main-slider'),
            $bottomslider = $('.bottom-slider'),  
            $current      = $('.current-number'),
            $carousel     = $('.carousel'),
            $team         = $('.carousel-team');
        
      
            $mainslider.slick({
            arrows: false,                      
            speed: 700,
            fade: true,
            rows: 0,           
            draggable: false,
            useTransform: false,
            infinite: false
        });
        
        $bottomslider.slick({            
            dots: true,
            dotsClass: "custom-dots",
            appendDots: $('.dots'),
            arrows: false,
            asNavFor: $mainslider,            
            infinite: false,            
        }); 
        $carousel.slick({            
            dots: true,
            dotsClass: "custom-dots",
            appendDots: $('.dots2'),
            arrows: false,            
        }); 
        $team.slick({
            infinite: true,
            slidesToShow: 4,            
            slidesToScroll: 3,
            arrows: true,
            prevArrow: $('.prev-arrow'),
            nextArrow: $('.next-arrow'),
            responsive: [
            {
                breakpoint: 1170,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2
                }
            }, {
                breakpoint: 992,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,                    
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }       
        ] 
    });    
    $mainslider.on('afterChange', function(event, slick, currentSlide){
     $(".current-number").text(currentSlide + 1);
  });    
    $(function(){
       $('.minimized').click(function(event) {
       var i_path = $(this).attr('src');
       $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup" class="close"><i>X</i></div></div>');       
        $('#overlay, #magnify').fadeIn('fast');
        });
  
        $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
 
        $('#overlay, #magnify').fadeOut('fast', function() {
          $('#close-popup, #magnify, #overlay').remove();
        });
        });
    });
      
   $('.uppload-progress').progressCircle({
        nPercent        : 25,
        showPercentText : true,
        circleSize      : 50,
        thickness       : 3
    });

}); //end ready

}(jQuery));
