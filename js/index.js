$( document ).ready(function() {

    var url  = window.location.href;
    var title = $( "#author" ).text()

    $("#btnTweet").click(function() {
        window.open("https://twitter.com/intent/tweet?text=" + "Biografía de " +title + " "+url);
      });
      $("#btnFB").click(function() {
       /*  window.open("http://www.facebook.com/share.php?u=[URL]&title=[TITLE]"); */
        window.open("http://www.facebook.com/share.php?u="+url+"&title="+title);
      });
    
});