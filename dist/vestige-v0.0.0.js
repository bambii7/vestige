/**
 * Created by alexis.hope on 25/03/14.
 */
(function( win, doc ) {
    "use strict";

    function v( expression ) {
        return new v.init( expression );
    }
    
    v.init = function( expression ) {
        return this
    };

    // Create quick reference variables for speed access to core prototypes.
    var arr              = Array.prototype,
        obj              = Object.prototype,
        slice            = arr.slice,
        hasOwnProperty   = obj.hasOwnProperty;

    // **ECMAScript 5** native function (mainly IE8 support)
    var nativeForEach    = arr.forEach,
        nativeKeys       = obj.keys;
    
    v.doc = doc;
    v.win = win;
    v.arr = Array.prototype;
    v.push = arr.push;
    v.slice = arr.slice;
    
    /**
     * Helper function forEach/each
     * uses native if present on array
     * and work around for objects
     * @type {each}
     */
    v.each = v.forEach = function( obj, iterator, context ) {
        var i = obj.length || v.keys( obj ).length;
        if ( nativeForEach && nativeForEach === obj.forEach ) {
            obj.forEach(iterator, context);
        } else {
            while(i--) {
                iterator.call(context, obj[i], i, obj);
            }
        }
        return obj;
    };
    
    ;

    v.keys = function( obj ) {
        var keys = [];
        if ( nativeKeys ) {
            return nativeKeys(obj);
        }
        for (var key in obj) if (v.has(obj, key)) {
            keys.push(key);
        }
        return keys;
    };

    v.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };

    /**
     * return the size of Array or Object
     * @from _.underscore
     * @param obj
     * @returns {*}
     */
    v.size = function( obj ) {
        return (obj.length === +obj.length) ? obj.length : v.keys(obj).length;
    };

    /**
     * Simple extend functionality
     * currently doesn't offer deep support
     * main purpose is for simple vestige extension
     * @type {e}
     */
    v.extend = v.e = function() {
        var i = 1, target = arguments[0] || {};
        // extend self if only one arg
        if(arguments.length === i) {
            target = this;
            i--;
        }
        v.each(slice.call(arguments, i), function(source) {
            for (var prop in source) {
                target[prop] = source[prop];
            }
        });
        return target;
    };

    // EXPOSE
    window.v = v;

})( this, document );
;
v.e({

    create: v.doc.createElement
    
});;/**
 * Created by alexis.hope on 24/03/14.
 */

v.e({
    
    /**
     * Selector function from Sizzle lib
     * Assumptions
     *      1: context is always document
     *      2: context is always HTML
     *      3: selectors are never document rooted
     * @param selector:String
     * @return Array | Node
     **/
    select: function ( selector ) {
        //return document.querySelectorAll( selector );
        var match,
            m, // matching expression
            // Easily-parseable/retrievable ID or TAG or CLASS selectors
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            results = [];

        if ( !selector || typeof selector !== "string" ) {
            throw "Must select with a valid string";
        }

        // Shortcuts
        if ( (match = rquickExpr.exec( selector )) ) {
            // Speed-up: #ID
            if ( (m = match[1]) ) {
                results = document.getElementById( m );
            // Speed-up: TAG
            } else if ( match[2] ) {
                v.push.apply( results, document.getElementsByTagName( selector ) );
            // Speed-up: .CLASS
            } else if ( (m = match[3]) && document.getElementsByClassName ) {
                v.push.apply( results, document.getElementsByClassName( m ) );
            }
        } else {
            v.push.apply( results,
                document.querySelectorAll( selector )
            );
        }
        return results;
    },
    
    init: function( expression ) {
        dom = v.select( expression ) || []
        dom.__proto__ = ( dom.tagName === undefined ) ? v.vNodeList : v.vElem
        dom.selector = expression || ''
        return dom
    }
    
});
;
v.e({
    
    vElem: {
        set: function( name, value) {
            console.log( v.keys( this ) );
//            this.setAttribute( name, value )
        }
//        set: function( name, value) {
//            console.log( name + value )
//        }
//        get: v.doc.getAttribute
    }

});;
v.e({
    
    // functions for the returned NodeList
    vNodeList: {
        // each: v.arr.forEach // this work fine for above ie8
        each: function( callback ) {
            v.each( this, callback )
        }
    }

});;/**
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