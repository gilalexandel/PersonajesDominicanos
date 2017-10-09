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
      

      $.getJSON(bio, function(data){
        
        var results = JSON.stringify(data);
        //Addung
        $( "#content" ).append( "<h4> <strong"+results.firstName+"</strong></h4>" );



      });

      

    }
    getbio();
    
});