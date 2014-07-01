/**
 * Created by alexis.hope on 25/03/14.
 */
describe("vNode", function() {

    var body = "<div><header id='header'><ul>" +
        "<li><a><span class='icon home'>Home</span></a></li>" +
        "<li><a><span class='icon news'>News</span></a></li>" +
        "<li><a><span class='icon blog'>Blog</span></a></li>" +
        "<li><a><span class='icon help'>Help</span></a></li>" +
        "<li><a><span class='icon about'>About</span></a></li>" +
        "</ul></header>" +
        "<section id='content'>Here is some body content</section>" +
        "<footer></footer>" +
        "</div>";

    beforeEach(function() {
        document.body.innerHTML = body;
    });

    it( "should be able to iterate over a collection", function(){
        var i = 0;
        v("#header .icon").each( function( item, key ) {
            i++;
            expect( item.tagName ).toEqual( 'SPAN' );
        } );
        expect( i ).toEqual( 5 );
    } );
    
    it( "should convert iteration elements to vElem", function(){
        var i = 0;
        v("#header .icon").each( function( item, key ) {
            item.addClass( 'test' );
            expect( item.tagName ).toEqual( 'SPAN' );
        } );
    } );
    
    xit( "should be able to set and get html attributes", function(){
        v("#header").set('title', 'this is a title');
        console.log( v.keys( v('#header') ) );
        expect( 1 ).toEqual( 1 );
    } );
    
    xit("",function(){
        expect().toEqual(1);
    });

});    
