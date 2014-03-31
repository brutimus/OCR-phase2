require.config({
    baseUrl: 'js/vendor',
    paths: {
        app: '../app',
        jquery: 'jquery-1.11.0',
        'jquery-ui': 'jquery-ui-1.10.4.custom',
        'jquery.bxslider': 'jquery.bxslider/jquery.bxslider'
    },
    'shim': {
        'jquery-ui': ['jquery'],
        'jquery.fancybox': ['jquery'],
        'jquery.slides': ['jquery'],
        'jquery.sticky-kit': ['jquery'],
        'jquery.bxslider': ['jquery']
    }
});

require([
    'app/main',
    'app/sticky-nav',
    'app/news-rail-slider',
    'app/classifieds-tabs',
    'app/article-inlines',
    'app/side-panel',
    'app/comments',
    'app/section-slideshow',
    'app/multiplier'
]);