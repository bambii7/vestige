//
//xdescribe( "Basic Vestige Specs", function(){
//    it( "should have basic css expression selection", function(){} );
//    it( "should be easily extendable", function(){} );
//    it( "should be chainable", function(){} );
//    it( "should have onload helpers");
//    it( "should have elem creation ability for light add generation" );
//    it( "should have getters and setters for css properties", function(){} );
//    it( "should have getters and setters for element properties", function(){} );
//    it( "should have event delegation and triggers", function(){} );
//    it( "should have drag & drop + touch events (hammerjs)", function(){} );
//    it( "should have helper functions for sizeof, throttling, debounce", function(){} );
//    it( "should have animation ability", function(){} );
    // ideally will have a compiler to intelligently select the components used
    // compiler could also adopt project name space to keep the variables (&css classes away from the global document)
//});

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

    it( "should be able to safely implement forEach", function() {
        v.each([1,2,3], function( key, index ) {
            expect( typeof index ).toEqual("number");
        });

        v.each({a: 'one', b: 'two', c: 'three'}, function( prop ) {
            console.log( prop );
        });
    });

});