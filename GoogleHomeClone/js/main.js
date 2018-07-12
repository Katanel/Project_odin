//jQuery tranformations
$(document).ready(function(){

  $('.it').hide();
  $('#result').hide();

  $('#en').click(function(){
    $('.en').toggle();
    $('.it').toggle();
  });

  $('#it').click(function(){
    $('.it').toggle();
    $('.en').toggle();
  });

  $(".access").click(function () {
    alert(
      'You can\'t log in from here, please visit "www.google.com" to access'
    );
  });

$('.back').click(function(){
  $('#outcome').empty();
  $("#main").show();
  $("#result").hide();

});

$('.cerca').click(function(search){

  var term = $("#bar").val();

  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + term + "&callback=?";
  
  if( term.lenght == '' ){
   return false;
  } else {
    console.log(url);
    console.log(term);
    $('#outcome').html('');
          $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: 'json',
            success: function(data) {
              for (var i = 0; i < data[1].length; i++) {
                $("#output").prepend("<li><a href=" + data[3][i] + " target='_blank' >" + data[1][i] + " </a><p>" + data[2][i] + "</p></li>");
              }
            },
            error: function(error){
              alert("Something went wrong :(");
            } 
          });
          
          search.preventDefault();
          $("#main").toggle();
          $("#result").toggle();
        }

});

}); 
