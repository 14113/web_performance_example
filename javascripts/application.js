document.addEventListener("DOMContentLoaded", function(event) {
  // alert("DOM fully loaded and parsed");
});

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-xxxx']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/cs_CZ/all.js#xfbml=1&appId=364591973639751";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(function() {
  var names = [ "Adam Martinik", "Scott González", "John Resig" ];

  var accentMap = {
    "á": "a",
    "ö": "o"
  };
  var normalize = function( term ) {
    var ret = "";
    for ( var i = 0; i < term.length; i++ ) {
      ret += accentMap[ term.charAt(i) ] || term.charAt(i);
    }
    return ret;
  };

  $( "#search" ).autocomplete({
    source: function( request, response ) {
      var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
      response( $.grep( names, function( value ) {
        value = value.label || value.value || value;
        return matcher.test( value ) || matcher.test( normalize( value ) );
      }) );
    }
  });
});