define([
	'app/tooltip-menu',
    'jquery'
], function(tooltip) {
	// Menu for navbar tool button
    tooltip('nav .tools.tooltip-menu .button', 'nav .tools.tooltip-menu .menu');

    // Menu for the navbar search button
	tooltip('nav .search.tooltip-menu .button', 'nav .search.tooltip-menu .menu');

	// Menu for the newstogram widget help button
	tooltip('.newstogram .tooltip-menu .button', '.newstogram .tooltip-menu .menu');

	// Menu for article share tools more button
	tooltip('.share-tools:nth-of-type(1) .tooltip-menu .button', '.share-tools:nth-of-type(1) .tooltip-menu .menu');
	tooltip('.share-tools:nth-of-type(2) .tooltip-menu .button', '.share-tools:nth-of-type(2) .tooltip-menu  .menu');

	// Menu for section page flex unit
	tooltip('.box-menu','.box-menu .menu');

	// Menu for archive page
	// TODO: align this one with the rest of them
	tooltip('.archive-header .tooltip-menu','.archive-header .tooltip-menu .menu');
});