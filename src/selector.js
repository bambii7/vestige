/**
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
            elem,
            m, // matching expression
            // Easily-parseable/retrievable ID or TAG or CLASS selectors
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            context = document,
            results = [];

        if ( !selector || typeof selector !== "string" ) {
            throw "Must select with a valid string";
        }

        // Shortcuts
        if ( (match = rquickExpr.exec( selector )) ) {
            // Speed-up: #ID
            if ( (m = match[1]) ) {
                return context.getElementById( m );
            // Speed-up: TAG
            } else if ( match[2] ) {
                v.push.apply( results, context.getElementsByTagName( selector ) );
                return results;

            // Speed-up: .CLASS
            } else if ( (m = match[3]) && context.getElementsByClassName ) {
                v.push.apply( results, context.getElementsByClassName( m ) );
                return results;
            }
        }
        v.push.apply( results,
            context.querySelectorAll( selector )
        );
        return results;
    },
    init: function( selector ) {
        console.log('test');
    }
});
