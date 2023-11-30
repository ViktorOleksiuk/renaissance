
$("#spin").show();

$(document).ready(function(){

  $("#spin").hide();

  $(".massanger").click(function(){
    $("#messag").addClass("show");
  });

  $(".close").click(function(){
    $("#messag").removeClass("show");
  });


});