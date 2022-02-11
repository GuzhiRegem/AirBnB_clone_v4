$(document).ready(function () {
  let lis = [];
  let lis_n = [];
  $('li input').on('click', function (data) {
    const id = $(this).data('id');
    if ($(this).is(':checked')) {
      lis.push(id);
      lis_n.push($(this).data('name'));
    } else {
      const idx = lis.indexOf(id);
      if (idx !== -1) {
        lis.splice(idx, 1);
        lis_n.splice(idx, 1);
      }
    }
    $('.amenities h4').text(String(lis_n));
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('')
    }
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    success: function(data){ 
      $('div#api_status').addClass('available');
    },
    error: function(data) {
      $('div#api_status').removeClass('available');
    }
  });
});
