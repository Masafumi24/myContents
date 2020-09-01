$(function(){
  function buildHTML(feeling){
    var html =
    `${feeling.feeling_name}`
    return html;
  }

  $('#new_feelings').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done(function(data){
      var html = buildHTML(data);
      $('.feelingsIndexFormBoxListName').append(html);
      $('form')[0].reset();
      $("#newFeelingSubmit").prop("disabled", false);
    })
  })
})