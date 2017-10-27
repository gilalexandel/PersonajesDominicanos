$( document ).ready(function() {

    var url  = window.location.href;
    var title = $( "#author" ).text()

   
    $("#btnTweet").click(function() {
        window.open("https://twitter.com/intent/tweet?text=" + "Biografía de " +title + " "+url);
      });
      $("#btnFB").click(function() {
       /*  window.open("http://www.facebook.com/share.php?u=[URL]&title=[TITLE]"); */
        window.open("http://www.facebook.com/share.php?u=https://gilalexandel.github.io/PersonajesDominicanos/pages/liborio.html");
      });

    //Function to get bio from json file
    function getbio(){

      var bio = "../content/bio.json";
      
      //Pull data from json file
      $.getJSON(bio, function(data){

        $("#bioContent").append(data.caamaño);

      });
      
    }
    getbio();
    
    //Back to top btn 
    if ($('#back-to-top').length) {
      var scrollTrigger = 100, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
          };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
  }
});