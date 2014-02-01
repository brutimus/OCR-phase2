define(['jquery', 'domReady!'], function(){
    return function(button, menu){
        var button  = $(button),
            menu    = $(menu),
            body    = $('body'),
            cls     = 'ttm-active',
            timer   = null,
            mstate  = 0,
            mouser  = function(el){
                el.mouseenter(function(){
                    mstate++;
                    clearTimeout(timer);
                });
                el.mouseleave(function(){
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
                menu.unbind('mouseenter mouseleave click');
                button.unbind('mouseenter mouseleave');
                body.unbind('click');
                mstate = 0;
            };
        button.click(function(event){
            event.preventDefault();
            if (menu.hasClass(cls)) {
                deconstruct();
            } else{
                menu.addClass(cls);
                setTimeout(function(){
                    body.click(deconstruct);
                    menu.click(function(e){
                        e.stopPropagation();
                    })
                }, 50);
                mouser(menu);
                mouser(button);
                mstate++;
            };
            
        })
    }
});