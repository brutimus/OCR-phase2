define(['jquery', 'jquery.fancybox', 'domReady!'], function(){

    // Add in logic to only fire this once per user per day

    $(".free .free-overlay").fancybox({
        fitToView   : false,
        autoSize    : true,
        openEffect  : 'fade',
        closeEffect : 'fade',
        topRatio    : 0.25,
        afterShow   : function(){
            $( ".progress-bar-value" ).animate({'width': '100%'}, 5000, 'linear', function(){
                $.fancybox.close();
            });
        }
    }).trigger('click');
});