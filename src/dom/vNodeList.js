
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

});