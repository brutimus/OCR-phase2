define(['jquery', 'jquery.fancybox', 'domReady!'], function(){
    $('.share-tools .comments-lightbox').fancybox({
        fitToView   : false,
        autoSize    : true,
        openEffect  : 'none',
        closeEffect : 'none',
        afterShow   : function(){
            // Check of FB comments have been loaded yet and if not, load them.
            // use: this.content.find('.class-name')
        }
    });
});