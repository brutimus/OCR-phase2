define([
	'app/tooltip-menu',
    'jquery'
], function(tooltip) {
	// Menu for navbar tool button
    tooltip('nav .tools a', 'nav .tools ul');

    // Menu for the navbar search button
	tooltip('nav .search a', 'nav .search span');

	// Menu for the newstogram widget help button
	tooltip('.newstogram .help-button', '.newstogram .help');
});