define(['jquery', 'jquery-impromptu/dist/jquery-impromptu', 'domReady!'], function(){
	var tourSubmitFunc = function(e,v,m,f){
		if(v === -1){
			$.prompt.prevState();
			return false;
		}
		else if(v === 1){
			$.prompt.nextState();
			return false;
		}
	};
	var tourStates = [
		{
			title: 'Welcome to the new OCRegister.com!',
			html: "We've redesigned OCRegister.com from the ground up in order to get you more of what you want. Here you're find carefully curated news to let you know what's happening today in Orange County. You can also find today's most popular stories among readers. If you want to see a full snapshot of the current news, we've made that easy, too!",
			buttons: { 'Got it!': 2, 'Take the Tour': 1 },
			focus: 1,
			position: { container: '#flag img', x: -30, y: 90, width: 400, arrow: 'tc' },
			submit: tourSubmitFunc
		},
		{
			title: 'Sections',
			html: 'Click here to access all sections on OCRegister.com',
			buttons: { Prev: -1, Next: 1 },
			focus: 1,
			position: { container: '#toggle-side-panel', x: -7, y: 35, width: 200, arrow: 'tl' },
			submit: tourSubmitFunc
		},
		{
			title: 'Classifieds',
			html: 'Find great deals on cars, homes, etc. here!',
			buttons: { Prev: -1, Next: 1 },
			focus: 1,
			position: { container: '.classifieds', x: 50, y: 35, width: 200, arrow: 'tl' },
			submit: tourSubmitFunc
		},
		{
			title: 'User Account',
			html: 'Subscribe to the Orange County Register or access your existing account here!',
			buttons: { Prev: -1, Next: 1 },
			focus: 1,
			position: { container: '.user-access', x: -50, y: 35, width: 200, arrow: 'tr' },
			submit: tourSubmitFunc
		},
		{
			title: 'Most Popular',
			html: 'See a current snapshot of our most popular stories',
			buttons: { Prev: -1, Next: 1 },
			focus: 1,
			position: { container: '#most-popular', x: -210, y: 0, width: 200, arrow: 'rt' },
			submit: tourSubmitFunc
		},
		{
			title: 'Topics',
			html: 'Quick access to the hottest topics today',
			buttons: { Prev: -1, Next: 1 },
			focus: 1,
			position: { container: '#topics', x: 20, y: -155, width: 200, arrow: 'bl' },
			submit: tourSubmitFunc
		},
		{
			title: 'Top Sections',
			html: 'We keep today\'s most relevant sections within reach',
			buttons: { Prev: -1, Next: 1 },
			focus: 1,
			position: { container: '.brief-grid:eq(0)', x: 200, y: -155, width: 300, arrow: 'bc' },
			submit: tourSubmitFunc
		},
		{
			title: 'Personal Recommendations',
			html: 'News recommendations tailored to you',
			buttons: { Prev: -1, Next: 1 },
			focus: 1,
			position: { container: '#newstogram', x: -180, y: -155, width: 300, arrow: 'br' },
			submit: tourSubmitFunc
		},
		{
			title: 'Featured Multimedia',
			html: 'See some of the latest multimedia we\'ve been working on',
			buttons: { Prev: -1, Next: 1 },
			focus: 1,
			position: { container: '#multimedia-slider', x: 370, y: -155, width: 200, arrow: 'bc' },
			submit: tourSubmitFunc
		},
		{
			title: 'Sections Overview',
			html: 'Take quick glimpse of our top sections',
			buttons: { Prev: -1, Done: 2 },
			focus: 1,
			position: { container: '.brief-grid:eq(1)', x: 370, y: -155, width: 200, arrow: 'bc' },
			submit: tourSubmitFunc
		}
	];
	$.prompt(tourStates);
});