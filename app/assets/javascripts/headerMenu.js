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

$(function () {
  $('.headerRight .fa-angle-double-down').click(function(){
    $('.drop').slideDown();
    $('.dropTop').slideDown();
    $('.dropTop .fa-times').click(function(){
      $('.drop').slideUp();
      $('.dropTop').slideUp();
    })
  })
});