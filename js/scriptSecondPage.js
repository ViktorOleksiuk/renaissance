
$(document).ready(function () {

        
        setTimeout(function () {
            
      
            setTimeout(function () {
            
            $("#idHeaderText").addClass("activeText"); 
            }, 50)

            setTimeout(function () {
                $("#idHeaderText").removeClass("activeText");
            }, 100)

            setTimeout(function () {
            
                $("#idHeaderText").addClass("activeText"); 
                }, 150)
    
                setTimeout(function () {
                    $("#idHeaderText").removeClass("activeText");
                }, 200)
     

                setTimeout(function () {
            
                    $("#idHeaderText").addClass("activeText"); 
                    }, 250)
        
                    setTimeout(function () {
                        $("#idHeaderText").removeClass("activeText");
                    }, 300)
                    
                    
                    setTimeout(function () {
            
                        $("#idHeaderText").addClass("activeText"); 
                        }, 350)
            
                        setTimeout(function () {
                            $("#idHeaderText").removeClass("activeText");
                        }, 400)

                        setTimeout(function () {
            
                            $("#idHeaderText").addClass("activeText"); 
                            }, 450)
                
                            setTimeout(function () {
                                $("#idHeaderText").removeClass("activeText");
                            }, 500)

                 
                    setTimeout(function () {
            
                        $("#idHeaderText").addClass("activeText"); 
                        }, 550)    


                    }, 2000)
        
            
       
             $(".massanger").click(function () {
                $("#openCloseMessange").addClass("activeMessanger");
                $("#openCloseMs").hide();
             });       

             $(".close").click(function () {
                $("#openCloseMessange").removeClass("activeMessanger");
                $("#openCloseMs").show();
             });       
    
})