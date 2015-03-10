define(['jquery', 'jquery.fancybox', 'jquery.slides', 'domReady!'], function(){
    $('.lead-slideshow').slick({
        dots: true,
        respondTo: 'slider'
    });
    $('article#story .slideshows-wrapper .fullscreen-button a').fancybox({
        margin: 0,
        padding: 0,
        autoSize: false,
        width: 'auto',
        height: 'auto',
        afterShow: function(){
            $('.slideshows-wrapper').addClass('fullscreen');
            $('.lead-slideshow').slick('setPosition');
        },
        afterClose: function(){
            $(this.href).removeClass('fullscreen');
            $(this.href).show();
            $('.lead-slideshow').slick('setPosition');
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
});
