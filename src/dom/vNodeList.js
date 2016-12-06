
v.e({

    // functions for the returned NodeList
    NodeList: {
        each: function( callback ) {
            function jit( el, i, context ) {
                el.__proto__ = v.Elem;
                callback( el, i, context )
            }
            v.each( this, jit )
        },
        first: function() {
            var elem = this[0];
            v.e(elem, v.Elem);
            return elem;
        }
    }

});
