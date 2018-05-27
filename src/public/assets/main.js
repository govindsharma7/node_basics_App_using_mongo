$(document).ready(function(){
  var data = {}
  $('form').on('submit', function(){
      var item = $('form input');
      $.each( item, function(i) {
        name = item.eq(i).attr('id');
        data[name] = item.eq(i).val();;
      });

      $.ajax({
        type: 'POST',
        url: '/adddata',
        data:  JSON.stringify(data),
        contentType: 'application/json',
        success: function(data){
          if (data['status'] == 200) {
            alert(data['massege'])
          } else {
            alert("server error")
          }
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/removedata/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
