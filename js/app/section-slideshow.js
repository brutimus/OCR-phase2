define(['jquery', 'jquery.slides', 'domReady!'], function(){
    var ss = $(".section-slideshow .slideshow");
    ss.slidesjs({
        width: ss.width(),
        height: ss.height(),
        pagination: {
            active: false
        },
        navigation: {
            active: false
        }
    });
});
