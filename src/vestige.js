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
