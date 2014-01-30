define(['jquery', 'domReady!'], function(){
	$('#toggle-side-panel').click(function() {
        $('#side-panel-wrapper').addClass('active');

        $('#side-panel-wrapper').click(function() {
            $(this).removeClass('active');
        }).children().click(function(e) {
            e.stopPropagation();
        });
    });
});