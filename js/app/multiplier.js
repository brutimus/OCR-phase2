define(['jquery', 'jquery.bxslider', 'domReady!'], function(){
    Array.max = function( array ){
        return Math.max.apply( Math, array );
    };
    $('.multiplier-slides').each(function(index, el) {
        var slider = $(el).bxSlider({
            infiniteLoop: false,
            onSlideBefore: $.proxy(function(e, old_i, new_i){
                $('.bx-controls-bottom .bx-pager').eq(this.index).find('a').removeClass('active');
                $('.bx-controls-bottom .bx-pager').eq(this.index).find('a').eq(new_i).addClass('active');
            }, {index:index})
        });
        var bx = $('.bx-wrapper').eq(index);
        bx.append(bx.find('.bx-controls').clone(true).addClass('bx-controls-bottom'));
    });
});
