/**
 * XMLHttpRequest state codes
 * 0 (uninitialized)
 * 1 (loading)
 * 2 (loaded)
 * 3 (interactive)
 * 4 (complete)
 *
 * Event Summary
 * readystatechange
 * loadstart
 * progress
 * @TODO abort
 * error
 * load
 * @TODO timeout
 * loadend
 *
 **/
v.e({

    ajax: function( options, callback ) {
        var httpRequest, defaults;
        if (window.XMLHttpRequest) {
            httpRequest = new XMLHttpRequest();
        } else {
            console.log('Cannot create an XMLHTTP instance');
            return false;
        }

        // support short hand, assume options is a URL
        if (typeof options === 'string') {
            options = {url: options};
        }

        // allows success callback to be bundled with options
        if (typeof callback === 'function') {
            options.success = callback;
        }

        defaults = {
            url: "",
            REST: "GET",
            data: null,
            onerror: v.ajaxError
        }
        v.extend( defaults, options );


        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState == 4) {
                defaults.success( httpRequest );
            }
        };
        httpRequest.open( defaults.REST, defaults.url );

        // check if POST and data is not empty
        if( defaults.REST === "POST" && defaults.data !== null ) {
            // then set content type to JSON
            httpRequest.setRequestHeader( "Content-Type", "application/json;charset=UTF-8" );
            httpRequest.send( JSON.stringify( defaults.data ) );
        } else {
            // no data, just ping the URL
            httpRequest.send();
        }

    },

    ajaxError: function( error ) {
        console.log( 'V AJAX Error: ' + error );
    },

    // short hand for post
    post: function( url, data, callback ) {
        v.ajax( {url: url, data: data, REST: "POST"}, callback );
    }

});
