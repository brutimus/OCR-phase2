define([
	'app/tooltip-menu',
    'jquery'
], function(tooltip) {
	// Menu for navbar tool button
    tooltip('nav .tools a', 'nav .tools ul');

    // Menu for the navbar search button
	tooltip('nav .search a', 'nav .search .input-group');

	// Menu for the newstogram widget help button
	tooltip('.newstogram .help-button', '.newstogram .help');

	// Menu for article share tools more button
	tooltip('.share-tools:nth-of-type(1) .more > a', '.share-tools:nth-of-type(1) .more  ul');
	tooltip('.share-tools:nth-of-type(2) .more > a', '.share-tools:nth-of-type(2) .more  ul');
});