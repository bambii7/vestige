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

    create: v.doc.createElement,
    
//    serializeObject: function( Object ) {
//        var o = {};
//        var a = this.serializeArray();
//        v.each(a, function() {
//            if (o[this.name] !== undefined) {
//                if (!o[this.name].push) {
//                    o[this.name] = [o[this.name]];
//                }
//                o[this.name].push(this.value || '');
//            } else {
//                o[this.name] = this.value || '';
//            }
//        });
//        return o;
//    },
//        
//    $.fn.serializeArray: function() {
//        var result = [], el
//        $([].slice.call(this.get(0).elements)).each(function(){
//        el = $(this)
//        var type = el.attr('type')
//        if (this.nodeName.toLowerCase() != 'fieldset' &&
//        !this.disabled && type != 'submit' && type != 'reset' && type != 'button' &&
//        ((type != 'radio' && type != 'checkbox') || this.checked))
//        result.push({
//        name: el.attr('name'),
//        value: el.val()
//        })
//        })
//        return result
//    }
    
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
        dom.__proto__ = ( dom.tagName === undefined ) ? v.NodeList : v.Elem
        dom.selector = expression || ''
        return dom
    }
    
});
;
(function(v){
    
    var nativeClassList = ("classList" in document.createElement("_"));
    
    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    
    
    function vElem() {
        
    }
    
    // classie functions inspired by bonzo https://github.com/ded/bonzo a great lib
    vElem.prototype.addClass = function( classString ) {
        if( nativeClassList ) {
            this.classList.add( classString );
        } else {
            if ( !this.hasClass( classString ) ) {
                this.className = this.className + ' ' + classString;
            }
        }
        return this;
    };
    vElem.prototype.removeClass = function( classString ) {
        if( nativeClassList ) {
            this.classList.remove( classString );
        } else {
            this.className = this.className.replace( classReg( classString ), ' ' );
        }
        return this;
    };
    vElem.prototype.toggleClass = function( classString ) {
        (this.hasClass( classString ) ? this.removeClass : this.addClass).call( this, classString );
        return this;
    };
    vElem.prototype.hasClass = function( classString ) {
        if( nativeClassList ) {
           return this.classList.contains( classString );
        } else {
            return classReg( classString ).test( this.className );
        }
    };
    
    // zepto inspired css property setter & getter
    vElem.prototype.css = function(property, value){
        if(arguments.length < 2) {
            // one arg, user must want a getter
            return this.style[v.str.camelize(property)];
        }
        this.style[v.str.camelize(property)] = value;
        return this;
    }
    
    v.e({Elem: vElem.prototype});
    
})(v);
v.e({
    
    // functions for the returned NodeList
    NodeList: {
        each: function( callback ) {
            // jit convert elem to vElem
            function jit( el, i, context ) {
                el.__proto__ = v.Elem;
                callback( el, i, context )
            }
            v.each( this, jit )
        }
    }

});;/**
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
        if( typeof options === 'string' ) {
            options = {url: options};
        }
        
        // allows success callback to be bundled with options
        if ( typeof callback === 'function' ) {
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

});;(function(v){
    
    function vStr() {
        
    }
    
    // zepto camlize
    vStr.prototype.camelize = function( str ){
        return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' })
    }
    
    vStr.prototype.dasherize = function(str) {
        return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
    }
    
    v.e({str: vStr.prototype});
    
})(v)