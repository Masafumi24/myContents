$(function () {
    var _window = $(window),
        header = $('.header'),
        heroBottom,
        startPos,
        winScrollTop;
    
    _window.on('scroll',function(){
        winScrollTop = $(this).scrollTop();
        heroBottom = $('.g').height();
        if (winScrollTop >= startPos) {
            if(winScrollTop >= heroBottom){
                header.addClass('hide');
            }
        } else {
            header.removeClass('hide');
        }
        startPos = winScrollTop;
    });
    
    _window.trigger('scroll');
});