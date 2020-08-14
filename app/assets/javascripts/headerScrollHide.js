$(function () {
    var _window = $(window),
        header = $('.header'),
        pankuzu = $('.pankuzu'),
        heroBottom,
        startPos,
        winScrollTop;
    
    _window.on('scroll',function(){
        winScrollTop = $(this).scrollTop();
        heroBottom = $('.backImageFeelingsIndex').height();
        if (winScrollTop >= startPos) {
            if(winScrollTop >= heroBottom){
                header.addClass('hide');
                pankuzu.addClass('top');
            }
        } else {
            header.removeClass('hide');
            pankuzu.removeClass('top');
        }
        startPos = winScrollTop;
    });
    
    _window.trigger('scroll');
});