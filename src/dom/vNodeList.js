
v.e({
    
    // functions for the returned NodeList
    NodeList: {
        // each: v.arr.forEach // this work fine for above ie8
        each: function( callback ) {
            v.each( this, callback )
        }
    }

});