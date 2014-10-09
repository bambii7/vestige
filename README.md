### vestige
[**ves**-tij]
*"a very slight trace or amount of something"*

----------

About
---------
Vestige is a lite DOM helper option. Tested with Jasmine & Karma.

Built to offer an alternative to jQuery or Zepto where file size is critical. In the development of mobile ads typically the creative is loaded inside an iframe.
And without knowing the target domain, it's unsafe to rely on familiar libraries being available in the `window` scope. And exsessive to include larger libs, which are a full featured but bloated with  edge case support.

I recommend using Vestige with other light weight libs like [sole/tween.js](https://github.com/sole/tween.js).

> Note: The use variable `v` was used for ease of typing. I find this easier than typing than `R-shift + 4` .

Aims
---
* Stay below 10kb minified (not gzipped)
* IE9 Support and up
* Support for all other major HTML5 browsers (Chrome, FireFox, IE11, IOS, Android)
* DOM selection expressions `v('#mydiv li')`
* Element attribute manipulation `v('#username').attr('value')`
* Element css manipulation `v('#container').css('background','red')`
* Ajax support `v.post('http://example.com', {myvar:true}, function(){concole.log('complete')})`
*  Safe forEach on Arrays or Objects
