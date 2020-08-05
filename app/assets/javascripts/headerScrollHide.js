var _window = $(window),
    _header = $('.header'),
    heroBottom,
    startPos,
    winScrollTop;
 
_window.on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    heroBottom = $('.g').height();
    if (winScrollTop >= startPos) {
        if(winScrollTop >= heroBottom){
            _header.addClass('hide');
        }
    } else {
        _header.removeClass('hide');
    }
    startPos = winScrollTop;
});
 
_window.trigger('scroll');