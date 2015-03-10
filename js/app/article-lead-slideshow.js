define(['jquery', 'jquery.fancybox', 'jquery.slides', 'domReady!'], function(){
    $('.slideshow2').slick({
        dots: true,
        respondTo: 'slider'
        // centerMode: true,
    });
    // var ss = $("article#story .slideshows-wrapper .slideshow");
    // var total = jQuery('article#story .slideshows-wrapper .slideshow figure').length;
    // jQuery('article#story .slideshows-wrapper .total-slides').html(total);
    // ss.slidesjs({
    //     // width: 600,
    //     // height: 575,
    //     pagination: {
    //         active: false
    //     },
    //     navigation: {
    //         active: false
    //     },
    //     callback: {
    //         complete: function(current){
    //             jQuery('article#story .slideshows-wrapper .current-slide').html(current);
    //         }
    //     }
    // });
    $('article#story .slideshows-wrapper .fullscreen-button a').fancybox({
        margin: 0,
        padding: 0,
        autoSize: false,
        width: 'auto',
        height: 'auto',
        afterShow: function(){
            $('.slideshows-wrapper').addClass('fullscreen');
            $('.slideshow2').slick('setPosition');
        },
        afterClose: function(){
            $(this.href).removeClass('fullscreen');
            $(this.href).show();
            $('.slideshow2').slick('setPosition');
        }
    });
    // $('article#story .slideshows-wrapper .fullscreen a').click(function(){
    //     var wrapper = $('.slideshows-wrapper');
    //     function exitFullScreen(){
    //         if (document.exitFullscreen) {
    //             document.exitFullscreen();
    //         } else if (document.msExitFullscreen) {
    //             document.msExitFullscreen();
    //         } else if (document.mozCancelFullScreen) {
    //             document.mozCancelFullScreen();
    //         } else if (document.webkitExitFullscreen) {
    //             document.webkitExitFullscreen();
    //         }
    //     }
    //     function toggleFullScreen(el) {
    //         if (!document.fullscreenElement &&    // alternative standard method
    //             !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    //             if (el.requestFullscreen) {
    //                 el.requestFullscreen();
    //             } else if (el.msRequestFullscreen) {
    //                 el.msRequestFullscreen();
    //             } else if (el.mozRequestFullScreen) {
    //                 el.mozRequestFullScreen();
    //             } else if (el.webkitRequestFullscreen) {
    //                 el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    //             }
    //         } else {
    //             exitFullScreen()
    //         }
    //     }
    //     // if (wrapper.hasClass('fullscreen')) {
    //     //     wrapper.removeClass('fullscreen')
    //     // } else {
    //     //     wrapper.addClass('fullscreen')[0].webkitRequestFullscreen()
    //     // }
    //     toggleFullScreen(wrapper[0])
    //     $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(){
    //         wrapper.toggleClass('fullscreen');
    //     });
    //     $('.close-button').click(exitFullScreen);
    // });

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
