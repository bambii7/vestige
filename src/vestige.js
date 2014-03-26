/**
 * Created by alexis.hope on 25/03/14.
 */
(function( window ) {

    function vestige( expression ) {

    };

    // Establish the root object, `window` in the browser, or `exports` on the server.
    var d = document;

    // Save bytes in the minified (but not gzipped) version:
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

    // Create quick reference variables for speed access to core prototypes.
//        push             = ArrayProto.push,
        vestige.slice            = ArrayProto.slice;
//        concat           = ArrayProto.concat,
//        toString         = ObjProto.toString,
//        hasOwnProperty   = ObjProto.hasOwnProperty;
        vestige.keys            = Object.keys;

    // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    var
        nativeForEach      = ArrayProto.forEach;
//        nativeMap          = ArrayProto.map,
//        nativeReduce       = ArrayProto.reduce,
//        nativeReduceRight  = ArrayProto.reduceRight,
//        nativeFilter       = ArrayProto.filter,
//        nativeEvery        = ArrayProto.every,
//        nativeSome         = ArrayProto.some,
//        nativeIndexOf      = ArrayProto.indexOf,
//        nativeLastIndexOf  = ArrayProto.lastIndexOf,
//        nativeIsArray      = Array.isArray,
//        nativeKeys         = Object.keys,
//        nativeBind         = FuncProto.bind;



    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles objects with the built-in `forEach`, arrays, and raw objects.
    // Delegates to **ECMAScript 5**'s native `forEach` if available.
    var each = vestige.each = vestige.forEach = function(obj, iterator, context) {
        if (obj == null) return obj;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            var keys = keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            }
        }
        return obj;
    };

    // Extend a given object with all the properties in passed-in object(s).
    vestige.extend = vestige.e = function() {
        var i = 1, target = arguments[0] || {};
        if(arguments.length === i) {
            target = this;
            i--;
        }
        each(slice.call(arguments, i), function(source) {
            if (source) {
                for (var prop in source) {
                    target[prop] = source[prop];
                }
            }
        });
        return target;
    };

    // EXPOSE
    if ( typeof define === "function" && define.amd ) {
        define(function() { return vestige; });
    } else if ( typeof module !== "undefined" && module.exports ) {
        module.v = vestige;
    } else {
        window.v = vestige;
    }
    // EXPOSE

})( window );
