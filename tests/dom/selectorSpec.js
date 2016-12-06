/**
 * Created by alexis.hope on 25/03/14.
 */
describe("select DOM", function() {

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
      var div = document.createElement("div");
      div.id = 'header';
      document.body.appendChild(div);
      var elem = v.select("#header");
      expect(elem.tagName).toEqual("HEADER");
    });

    it("should be able to select an Element via Class", function() {
      var div = document.createElement("div");
      div.classList.add('home');
      document.body.appendChild(div);
      var elems = v.select(".home");
      expect(elems[0].tagName).toEqual("SPAN");
    });

    it("should be able to select a group by class",function(){
        var elems = v.select(".icon");
        v.each( elems, function( item ) {
            expect(item.tagName).toEqual("SPAN");
        });
    });

    it("should be able to handle simple css expressions",function(){
        var elems = v.select("#header a");
        v.each( elems, function( item ) {
            expect(item.tagName).toEqual("A");
        });
    });

});
