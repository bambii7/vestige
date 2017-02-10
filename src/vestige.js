
(function( win, doc ) {
    "use strict";

    function v(expression) {
        return new v.select(expression);
    }

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
     * Helper function forEach/each uses native if present on array
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
     * @param obj
     * @return {*}
     */
    v.size = function( obj ) {
        return (obj.length === +obj.length) ? obj.length : v.keys(obj).length;
    };
    
    /**
     * return boolean if obj is iterable
     * @param obj
     * @return boolean
     */
    v.isIterable = function (obj) {
      if (obj == null) {
        return false;
      }
      return typeof obj[Symbol.iterator] === 'function';
    };

    /**
     * Simple extend functionality currently doesn't offer deep support
     * main purpose is for simple vestige extension
     * @type {e}
     */
    v.extend = v.e = function() {
        var i = 1, target = arguments[0];
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
