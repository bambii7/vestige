/**
 * Created by alexis.hope on 25/03/14.
 */
describe("select DOM elements", function() {

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

    it("should be able to select en Element via ID",function(){
//        console.log(  typeof v );
//        console.log(v.toString() );
        var elem = v.select("#header");
        expect( elem.tagName ).toEqual( "HEADER" );
    });

    xit("",function(){
        expect().toEqual(1);
    });

});