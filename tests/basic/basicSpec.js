
xdescribe( "Basic Vestige Specs", function(){
    it( "should have basic css expression selection", function(){} );
    it( "should be easily extendable", function(){} );
    it( "should be chainable", function(){} );
    it( "should have getters and setters for css properties", function(){} );
    it( "should have getters and setters for element properties", function(){} );
    it( "should have event delegation and triggers", function(){} );
    it( "should have helper functions for sizeof and throttling", function(){} );
    it( "should have animation ability", function(){} );
    // ideally will have a compiler to intelligently select the components used
});

describe( "core vestige", function() {

    it( "should be able to extend objects", function() {
        var a = {foo: "bar"};
        var b = {hello: "world"};

        // short hand
        var result = v.e( a, b );
        expect( Object.keys(a) ).toEqual( ['foo', 'hello'] );
        // long hand
        var result = v.extend( a, b );
        expect( Object.keys(a) ).toEqual( ['foo', 'hello'] );
    });


    it( "should be able to extend itself if only one object supplied", function() {
        v.e( {foo: "bar", increment: function( num ) { return ++num; }} );
        expect( v.foo ).toEqual( 'bar' );
        expect(v.increment( 1 )).toEqual(2);
    });

});