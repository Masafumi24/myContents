$(function () {
  $('.headerLeft .fa-bars').click(function(){
    $('.drop').slideDown();
    $('.dropLeft').slideDown();
    $('.dropLeft .fa-times').click(function(){
      $('.drop').slideUp();
      $('.dropLeft').slideUp();
    })
  })
});