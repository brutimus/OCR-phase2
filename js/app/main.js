define([
    'jquery',
    'jquery-ui',
    'jquery.fancybox',
    'jquery.slides',
    'jquery.sticky-kit'
], function($) {
    $(document).ready(function() {
        var $window = $(window),
            $navAnchor = $('#nav-anchor'),
            $nav = $('#nav-sticky');
            // $header = $('header');

        $window.scroll(function() {
            var window_top = $window.scrollTop();
            var nav_top = $navAnchor.offset().top;
            if (window_top > nav_top) {
                $nav.addClass('fixed');
                $navAnchor.height($nav.height());
            } else {
                $nav.removeClass('fixed');
                $navAnchor.height(0);
            }
        });


        $('#toggle-side-panel').click(function() {
            $('#side-panel').addClass('active');
        });

        // Slideshow lightbox
        $(".slideshow-lightbox").fancybox({
            fitToView   : false,
            autoSize    : true,
            openEffect  : 'none',
            closeEffect : 'none',
            afterShow   : function(){
                if (this.content) {
                    this.content.find(".slideshow").slidesjs({
                        width: 600,
                        height: 500,
                        pagination: {
                            active: false
                        },
                        navigation: {
                            active: false
                        }
                    });
                }
            }
        });

        // Video lightbox

        // Graphic lightbox
        $(".graphic-lightbox").fancybox({
            fitToView   : false,
            // width       : '90%',
            // height      : '90%',
            autoSize    : true,
            openEffect  : 'none',
            closeEffect : 'none'
        });
        
        
        // DOCS: http://www.slidesjs.com/


        $('#classifieds').tabs();
        $("#multimedia-slider .scroll-wrapper").slidesjs({
            width: 940,
            height: 177,
            pagination: {
                active: false
            }
        });

    });
});