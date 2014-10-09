### vestige
[**ves**-tij]
*"a very slight trace or amount of something"*

----------

About
---------

Built to offer a lite weight alternative to jQuery or Zepto where file size is critical. In the development of mobile ads typically the creative is loaded inside an iframe.
And without knowing the target domain, it's unsafe to rely on familiar libraries being available in the `window` scope.
Vestige is a lite DOM helper option.

Aims
---
* Stay below 10kb minified (not gzipped)
* IE9 Support and up
* IOS Support
* Android Support
* Support for all other major HTML5 browsers (Chrome, FireFox, IE11)
* DOM selection expressions `v('#mydiv li')`
* Element attribute manipulation `v('#username').attr('value')`
* Element css manipulation `v('#container').css('background','red')`
* Ajax support `v.post('http://example.com', {myvar:true}, function(){concole.log('complete')})`
