$(function() {
  $("#changer").click(function(){
    $("#articles div").each(function(index){
      $(this).animate({width: $('#size').width()},2000);
    });
  });
});