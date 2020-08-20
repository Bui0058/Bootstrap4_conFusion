$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
          if ($("#carouselButton").children("span").hasClass('fa-pause')) {
              $("#mycarousel").carousel('pause');
              $("#carouselButton").children("span").removeClass('fa-pause');
              $("#carouselButton").children("span").addClass('fa-play');
              console.log("carousel click");
          }
          else if ($("#carouselButton").children("span").hasClass('fa-play')){
              $("#mycarousel").carousel('cycle');
              $("#carouselButton").children("span").removeClass('fa-play');
              $("#carouselButton").children("span").addClass('fa-pause');                    
          }
      });

      // Code for assignment 4

      // For reserveModal
     $('#reserveButton').click(function() {
          $("#reserveModal").modal("show");             
      });
      $("#cancelButton1").click(function () {
            $("#reserveModal").modal("hide");
      });
      $("#cancelButton2").click(function () {
            $("#reserveModal").modal("hide");
      });

      // For loginModal

      $('#loginButton').click(function() {
          $("#loginModal").modal("show");             
      });
      $("#cancelButton3").click(function () {
            $("#loginModal").modal("hide");
      });
      $("#cancelButton4").click(function () {
            $("#loginModal").modal("hide");
      });
});