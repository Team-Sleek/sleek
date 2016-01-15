(function ($) {
    'use strict';
  
    // SLIDER PLUGIN
    $.fn.sleekSlider = function () {
        return this.each(function (idx, el) {
            var $slideshow = $(el);
      
            // base page styles
            $slideshow.css({
                position: 'relative',
                height: '100%',
                minHeight: '100%',
                margin: '0 0',
            });
            $slideshow.find('img').css({
                maxWidth: '100%',
                margin: "0 auto",
                height: "auto",
                border: "2px solid #333",
                backgroundColor: "#333"
            });
            $slideshow.find('.slides img').css("display", "none");
            $slideshow.find('.slide-navigation').css({
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
            $slideshow.find('.slides img').each(function () {
                image = new Image();
                image.src = $(this).attr("src");
                imageCache[imageCounter] = image;
                imageCounter ++;
            });

            // create navigation
            for (var i = 1; i <= imageCounter; i++) {
                $slideshow.find('.slide-navigation').append('<span>' + i + '</span>');
            };

            $slideshow.find('.slide-navigation span').css({
                backgroundColor: 'rgba(255,255,255,.2)',
                padding: '0 5px',
            });

            $slideshow.find('.slide-navigation span:eq(0)').css({
                color: '#000',
                fontStyle: 'bold',
                textDecoration: 'underline'
            });

            // slide selection logic
            $slideshow.find('.slide-navigation span').on("click mouseover", function(event){
                var btnChoice = $(this).text();
                var slideNumber = parseInt(btnChoice) - 1;
                var slideSelect = imageCache[slideNumber].src;

            $('.slide').fadeOut(1000, function(){
                $('.slide').attr("src", slideSelect).fadeIn(1000);
            });

            //toggles navigation select styles
            if(event != this){
              $('.slide-navigation span').css({
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
    
    //ACCORDION PLUGIN
    $.fn.sleekAccordion = function () {
        return this.each(function (idx, el) {
            var $accordval = $(el);
            
            $accordval.css({
                marginTop: "5px",
                overflow: "auto"
            });
            $accordval.find("ul").css({
                padding: "0",
                margin: "0"
            });
            $accordval.find("li").css({
                listStyleType: "none",
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                margin: "0"
            });
            $accordval.find("a").css({
                textDecoration: "none",
                backgroundColor: "#d9d9d9",
                display: "block",
                width: "100%",
                height: "30px",
                borderRadius: "5px",
                paddingTop: "10px",
                paddingLeft: "10px",
                color: "#333",
                fontWeight: "bold"
            });
            $accordval.find("h1").css({
                fontSize: "1em",
                padding: "0",
                margin: "0"
            });
            $accordval.find("p").css({
                paddingLeft: "10px"
            });
            $accordval.find("div").hide();
            function closeSection() {
                $accordval.find('a').removeClass("minus");
                $accordval.find('div').slideUp(800).removeClass("open");
                $accordval.find("li span").replaceWith("<span>+</span>");
            }
            $accordval.find('a').click(function (e) {
                e.preventDefault();
                var selection = $(this).attr("href");
                if ($(e.target).is(".minus")) {
                    closeSection();
                } else {
                    closeSection();
                    $(this).addClass("minus");
                    $(this).children("span").replaceWith("<span>-</span>");
                    $accordval.find(selection).slideDown(800).addClass("open");
                }
            });
        });
    };
    
    //TABS PLUGIN
    $.fn.sleekTabs = function () {
        return this.each(function (idx, el) {
            var $tabsval = $(el);

            $tabsval.css({
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                marginTop: "5px"
            });
            $tabsval.find("ul").css({
                listStyleType: "none",
                height: "50px",
                backgroundColor: "#d9d9d9",
                borderRadius: "5px",
                marginBottom: "0",
                padding: "10px 0",
                margin: "5px 5px 15px 5px"
            });
            $tabsval.find("li").css({
                display: "inline"
            });
            $tabsval.find("section").css({
                padding: "0 30px"
            });
            $tabsval.find("a").css({
                float: "left",
                textDecoration: "none",
                color: "#333",
                backgroundColor: "#fff",
                border: "1px solid #fff",
                height: "35px",
                textAlign: "center",
                padding: "5px 20px",
                margin: "0 2px",
                borderRadius: "5px"
            });

            $tabsval.find("p").hide();
            $tabsval.find(".activetxt").show();
            $tabsval.find("a:first").css({
                borderRadius: "5px 5px 0 0",
                height: "40px"
            });
            $tabsval.delegate('a', 'click', function(e){
                 e.preventDefault();
                 return false;
            });  
            $tabsval.find("a").each(function () {
                $(this).on("click", function () {
                    $tabsval.find(".activetxt").hide()
                                       .removeClass();
                    $tabsval.find("a").css({
                        borderRadius: "5px",
                        height: "35px"
                    });
                    $(this.hash).show()
                                .addClass("activetxt");
                    $(this).css({
                        borderRadius: "5px 5px 0 0",
                        height: "40px"
                    });
                });
            });
        });
    };
}(jQuery));
