
$(document).ready(function(){



  $(".massanger").click(function(){
    $("#messag").addClass("massageWindowAfter");
  });

  $(".close").click(function(){
    $("#messag").removeClass("massageWindowAfter");
  });


});