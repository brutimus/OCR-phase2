define(['jquery', 'jquery.fancybox', 'jquery.slides', 'domReady!'], function(){
    var ss = $("article#story .slideshows-wrapper .slideshow");
    var total = jQuery('article#story .slideshows-wrapper .slideshow figure').length;
    jQuery('article#story .slideshows-wrapper .total-slides').html(total);
    ss.slidesjs({
        // width: 600,
        // height: 575,
        pagination: {
            active: false
        },
        navigation: {
            active: false
        },
        callback: {
            complete: function(current){
                jQuery('article#story .slideshows-wrapper .current-slide').html(current);
            }
        }
    });
    $('article#story .slideshows-wrapper .fullscreen a').click(
        function(){$('.slideshows-wrapper')[0].webkitRequestFullscreen()}
    )

    // // Slideshow lightbox
    // $("article#story .slideshows-wrapper .fullscreen a").fancybox({
    //     fitToView   : false,
    //     autoSize    : false,
    //     openEffect  : 'none',
    //     closeEffect : 'none',
    //     width: $(window).width(),
    //     height: $(window).height(),
    //     // leftRatio   : 0.66,
    //     afterShow   : function(){
    //         if (this.content) {
    //             var ss = this.content.find(".slideshow"),
    //                 dom = this.content;
    //             ss.slidesjs({
    //                 width: $(window).width(),
    //                 height: $(window).height(),
    //                 pagination: {
    //                     active: false
    //                 },
    //                 navigation: {
    //                     active: false
    //                 },
    //                 callback: {
    //                     complete: function(current){
    //                         dom.find('.current-slide').html(current);
    //                     }
    //                 }
    //             });
    //             var total = this.content.find('.slideshow figure').length;
    //             this.content.find('.total-slides').html(total);
    //         }
    //     }
    // });
});
