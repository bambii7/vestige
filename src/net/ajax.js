/**
 * XMLHttpRequest state codes
 * 0 (uninitialized)
 * 1 (loading)
 * 2 (loaded)
 * 3 (interactive)
 * 4 (complete)
 **/
v.e({
    
    ajax: function( options ) {
        var httpRequest, defaults;
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpRequest = new XMLHttpRequest();
        } else {
            console.log('Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

});