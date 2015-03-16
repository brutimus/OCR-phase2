define(['jquery', 'jquery.fancybox', 'jquery.slides', 'domReady!'], function(){



    $('.slick-slideshow').slick({
        dots: true,
        lazyLoad: 'ondemand',
        respondTo: 'slider'

    });
    $('article#story .slideshows-wrapper .fullscreen-button a').fancybox({
        margin: 0,
        padding: 0,
        autoSize: false,
        width: 'auto',
        height: 'auto',
        afterShow: function(){
            $(this.href).addClass('fullscreen').find('.slick-list').focus();
            $(this.href).find('.slick-slideshow').slick('setPosition');
            $('body').css('overflow', 'hidden');
        },
        afterClose: function(){
            $(this.href).removeClass('fullscreen').show();
            $(this.href).find('.slick-slideshow').slick('setPosition');
            $('body').css('overflow', 'auto');
        }
    });
});
