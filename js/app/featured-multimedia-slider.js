define(['jquery', 'jquery.slides', 'domReady!'], function(){
    $("#multimedia-slider .scroll-wrapper").slidesjs({
        width: 940,
        height: 177,
        pagination: {
            active: false
        },
        navigation: {
            active: false
        }
    });
});
