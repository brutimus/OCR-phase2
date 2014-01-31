define(['jquery', 'jquery.fancybox', 'jquery.slides', 'domReady!'], function(){
    
    // Slideshow lightbox
    $(".slideshow-lightbox").fancybox({
        fitToView   : false,
        autoSize    : true,
        openEffect  : 'none',
        closeEffect : 'none',
        leftRatio   : 0.66,
        afterShow   : function(){
            if (this.content) {
                var ss = this.content.find(".slideshow");
                ss.slidesjs({
                    width: ss.width(),
                    height: ss.height(),
                    pagination: {
                        active: false
                    },
                    navigation: {
                        active: false
                    },
                    callback: {
                        complete: function(current){
                            jQuery('.current-slide').html(current);
                        }
                    }
                });
                var total = jQuery('.slideshow figure').length;
                jQuery('.total-slides').html(total);
            }
        }
    });

    // Photo lightbox
    $(".photo-lightbox").fancybox({
        fitToView   : false,
        autoSize    : true,
        openEffect  : 'none',
        closeEffect : 'none',
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
});