define(['jquery', 'jquery.slides', 'domReady!'], function(){
    $(".news-rail .scroll-wrapper").slidesjs({
        width: 940,
        height: 84,
        pagination: {
            active: false
        },
        navigation: {
            active: false
        }
    });
});
