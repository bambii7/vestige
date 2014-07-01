//
//xdescribe( "Basic Vestige Specs", function(){
//    it( "should have basic css expression selection", function(){} );
//    it( "should be easily extendable", function(){} );
//    it( "should be chainable", function(){} );
//    xit( "should have onload helpers");
//    xit( "should have elem creation ability for light add generation" );
//    it( "should have classList like support", function(){} );
//    xit( "should have getters and setters for css properties", function(){} );
//    xit( "should have getters and setters for element properties", function(){} );
//    xit( "should have event delegation and triggers", function(){} );
//    xit( "should have helper functions for sizeof, throttling, debounce", function(){} );
//    xit( "should have drag & drop + touch events (hammerjs)", function(){} );
//    it( "should have animation ability", function(){} );
    // ideally will have a compiler to intelligently select the components used
    // compiler could also adopt project name space to keep the variables (&css classes away from the global document)
//});

describe( "core vestige", function() {

    it( "should be able to extend objects", function() {
        var a = {foo: "bar"};
        var b = {hello: "world"};
        var c = {baba: "motown"};

        // short hand
        v.e( a, b );
        expect( Object.keys(a) ).toEqual( ['foo', 'hello'] );
        // long hand
        v.extend( a, c );
        expect( Object.keys(a) ).toEqual( ['foo', 'hello', 'baba'] );
    });
    
    it( "should be able to overide default objects", function() {
        var defaults = {
            foo: 'bar',
            url: 'http://test.com',
            type: 'json'
        };
        var props = {
            hello: "world",
            foo: 'pinkty pop'
        };
        v.extend( props, defaults );
        expect( props.foo ).toEqual( 'bar' );
        
    } );


    it( "should be able to extend itself if only one object supplied", function() {
        v.e( {foo: 'bar', increment: function( num ) { return ++num; }} );
        expect( v.foo ).toEqual( 'bar' );
        expect( v.increment( 1 ) ).toEqual( 2 );
    });
    it( "should compress multiple objects into a new object if more than one argument supplied", function() {
        var obj = v.e( {foo: 'bar'}, {mo: 'fo'}, {toto: 'dorothy'} );
        expect( obj.foo ).toEqual( 'bar' );
        expect( obj.mo ).toEqual( 'fo' );
        expect( obj.toto ).toEqual( 'dorothy' );
    });

    it( "should be able to safely implement forEach", function() {
        v.each([1,2,3], function( key, index ) {
            expect( typeof index ).toEqual("number");
        });

        v.each({a: 'one', b: 'two', c: 'three', d: 'four'}, function( prop, key, object ) {
            console.log(  );
        });
    });

});