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
            $('body').css('overflow', 'hidden');
        },
        afterClose: function(){
            $(this.href).removeClass('fullscreen');
            $(this.href).show();
            $('.lead-slideshow').slick('setPosition');
            $('body').css('overflow', 'auto');
        }
    });
});
