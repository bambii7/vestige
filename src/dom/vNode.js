
v.e({

    init: function( expression ) {
        dom = v.select( expression ) || []
        dom.__proto__ = v.vNode
        dom.selector = expression || ''
        return dom
    },
    
    // functions for the returned NodeList
    vNode: {
        // each: v.arr.forEach // this work fine for above ie8
        each: function( callback ) {
            v.each( this, callback )
        }
    }

});