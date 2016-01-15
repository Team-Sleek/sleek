(function($) {
  'use strict';
  
  $.fn.sleekSlider = function() {
    return this.each(function(idx, el) {
      var $slideshow = $(el);
      
      // base page styles
      $slideshow.css({
        position: 'relative',
        height: '100%',
        minHeight: '100%',
        margin: '0 0',
        paddingTop: '2%'
      });
      $slideshow.find('img').css({
        maxWidth: '100%',
        margin: "0 auto",
        height: "auto",
        border: "2px solid #333",
        backgroundColor: "#333"
      });
      $slideshow.find('#slides img').css("display", "none");
      $slideshow.find('#slide-navigation').css({
        position: 'absolute',
        top: '0',
        left: '50%',
        paddingTop: '10px',
        cursor: 'pointer',
        fontSize: '.75em',
        transform: 'translate(-50%, 0)'
      });  

      //create array of slides
      var image, imageCounter = 0, imageCache = [];
      $slideshow.find('#slides img').each(function(){
        image = new Image();
        image.src = $(this).attr("src");
        imageCache[imageCounter] = image;
        imageCounter ++;
      });

      // create navigation
      for(var i = 1; i <= imageCounter; i++) {
        $slideshow.find('#slide-navigation').append('<span>' + i + '</span>');
      };

      $slideshow.find('#slide-navigation span').css({
        backgroundColor: 'rgba(255,255,255,.2)',
        padding: '0 5px',
      });

      $slideshow.find('#slide-navigation span:eq(0)').css({
        color: '#000',
        fontStyle: 'bold',
        textDecoration: 'underline'
      });

      // slide selection logic
      $slideshow.find('#slide-navigation span').on("click mouseover", function(event){
        var btnChoice = $(this).text();
        var slideNumber = parseInt(btnChoice) - 1;
        var slideSelect = imageCache[slideNumber].src;

        $('#slide').fadeOut(1000, function(){
          $('#slide').attr("src", slideSelect).fadeIn(1000);
        });

        //toggles navigation select styles
        if(event != this){
          $('#slide-navigation span').css({
            color: '#333',
            fontStyle: 'regular',
            textDecoration: 'none'
          })
        };
        if(this){  
          $(this).css({
            color: '#000',
            fontStyle: 'bold',
            textDecoration: 'underline'
          })
        };
      }); //end click     
    });
  };  
}(jQuery));
