/**
 * Created by alexis.hope on 25/03/14.
 */
describe("vElem", function() {

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

    it ("should be able to add a class", function() {
        var elem = v("#header");
        console.log(elem)
        elem.addClass('test');
        expect(elem.className).toEqual('test');
    });

    it ( "should be able to remove a class", function() {
        var elem = v("#header");
        elem.addClass('test1');
        elem.addClass('test2');
        elem.addClass('test3');
        elem.removeClass('test2');
        expect(elem.className).toEqual('test1 test3');
    });

    it ( "should be able to toggle a class", function() {
        var elem = v("#header");
        elem.addClass('test1');
        elem.addClass('test2');
        elem.addClass('test3');
        elem.toggleClass('test2');
        elem.toggleClass('test1');
        expect(elem.className).toEqual('test3');
    });

    it("should return true|false if it contains a class", function() {
        var elem = v("#header");
        elem.addClass('test1');
        elem.addClass('test3');
        expect(elem.hasClass('test1')).toEqual(true);
        expect(elem.hasClass('test2')).toEqual(false);
    });

    it("should have chainable class functions", function () {
        var elem = v("#header");
        elem.addClass('test1').addClass('test2').addClass('test3').removeClass('test2').toggleClass('test1');
        expect(elem.className).toEqual('test3');
    });

    xit("should be able to get attributes of an element via helper function attr", function() {
        var elem = v('input').first();
        expect(elem.attr('value')).toEqual('mostmeaningful');
    });

});
