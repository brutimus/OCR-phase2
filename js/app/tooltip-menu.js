define(['jquery', 'domReady!'], function(){
    return function(button, menu){
        var button  = $(button),
            menu    = $(menu),
            cls     = 'ttm-active',
            timer   = null,
            mstate  = 0,
            me      = null,
            ml      = null,
            mouser  = function(el){
                me = el.mouseenter(function(){
                    mstate++;
                    clearTimeout(timer);
                });
                ml = el.mouseleave(function(){
                    mstate--;
                    if (mstate == 0) {
                        timer = setTimeout(function(){
                            deconstruct();
                        }, 1000);
                    }
                });
            },
            deconstruct = function(){
                clearTimeout(timer);
                menu.removeClass(cls);
                menu.unbind('mouseenter mouseleave');
                button.unbind('mouseenter mouseleave');
                mstate = 0;
            };
        button.click(function(event){
            event.preventDefault();
            if (menu.hasClass(cls)) {
                deconstruct();
            } else{
                menu.addClass(cls);
                mouser(menu);
                mouser(button);
                mstate++;
            };
            
        })
    }
});