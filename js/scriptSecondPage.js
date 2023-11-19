$(document).ready(function(){


  $(".content1").mouseenter(function(){
    $("#myVideo1").trigger('play');
    $("#myVideo1").css("filter" , "grayscale(10%)");
  });

  $(".content1").mouseleave(function(){
    $("#myVideo1").trigger('pause');
    $("#myVideo1").css("filter" , "grayscale(100%)");
  });

  $(".content2").mouseenter(function(){
    $("#myVideo2").trigger('play');
    $("#myVideo2").css("filter" , "grayscale(10%)");
  });

  $(".content2").mouseleave(function(){
    $("#myVideo2").trigger('pause')
    $("#myVideo2").css("filter" , "grayscale(100%)");
  });

  $(".content3").mouseenter(function(){
      $("#myVideo3").trigger('play');
      $("#myVideo3").css("filter" , "grayscale(10%)");
    });

    $(".content3").mouseleave(function(){
      $("#myVideo3").trigger('pause');
      $("#myVideo3").css("filter" , "grayscale(100%)");
    });

  $(".content4").mouseenter(function(){
      $("#myVideo4").trigger('play');
      $("#myVideo4").css("filter" , "grayscale(10%)");
    });

    $(".content4").mouseleave(function(){
      $("#myVideo4").trigger('pause');
      $("#myVideo4").css("filter" , "grayscale(100%)");
    });

  $(".content5").mouseenter(function(){
      $("#myVideo5").trigger('play');
      $("#myVideo5").css("filter" , "grayscale(10%)");
    });

    $(".content5").mouseleave(function(){
      $("#myVideo5").trigger('pause');
      $("#myVideo5").css("filter" , "grayscale(100%)");
    });

    $(".content6").mouseenter(function(){
      $("#myVideo6").trigger('play');
      $("#myVideo6").css("filter" , "grayscale(10%)");
    });

    $(".content6").mouseleave(function(){
      $("#myVideo6").trigger('pause');
      $("#myVideo6").css("filter" , "grayscale(100%)");
    });


});