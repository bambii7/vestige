"use strict";

(function (win, doc) {
  "use strict";

  var _arguments = arguments,
      _this = this;

  function v(expression) {
    return new v.select(expression);
  }

  // Create quick reference variables for speed access to core prototypes.
  var arr = Array.prototype,
      obj = Object.prototype,
      slice = arr.slice,
      hasOwnProperty = obj.hasOwnProperty,


  // **ECMAScript 5** native function (mainly IE8 support)
  nativeForEach = arr.forEach,
      nativeKeys = obj.keys;

  v.doc = doc;
  v.win = win;
  v.arr = Array.prototype;
  v.push = arr.push;
  v.slice = arr.slice;

  /**
   * Helper function forEach/each uses native if present on array
   * and work around for objects
   * @type {each}
   */
  v.each = v.forEach = function (obj, iterator, context) {
    var i = obj.length || v.keys(obj).length;
    if (nativeForEach && nativeForEach === obj.forEach) {
      obj.forEach(iterator, context);
    } else {
      while (i--) {
        iterator.call(context, obj[i], i, obj);
      }
    }
    return obj;
  };

  v.keys = function (obj) {
    var keys = [];
    if (nativeKeys) {
      return nativeKeys(obj);
    }
    for (var key in obj) {
      if (v.has(obj, key)) {
        keys.push(key);
      }
    }return keys;
  };

  v.has = function (obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  /**
   * return the size of Array or Object
   * @param obj
   * @return {*}
   */
  v.size = function (obj) {
    return obj.length === +obj.length ? obj.length : v.keys(obj).length;
  };

  /**
   * return boolean if obj is iterable
   * @param obj
   * @return boolean
   */
  v.isIterable = function (obj) {
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  };

  /**
   * Simple extend functionality currently doesn't offer deep support
   * main purpose is for simple vestige extension
   * @type {e}
   */
  v.extend = v.e = function () {
    var i = 1,
        target = _arguments[0];
    // extend self if only one arg
    if (_arguments.length === i) {
      target = _this;
      i--;
    }
    v.each(slice.call(_arguments, i), function (source) {
      for (var prop in source) {
        target[prop] = source[prop];
      }
    });
    return target;
  };

  // EXPOSE
  window.v = v;
})(undefined, document); /**
                         * Created by alexis.hope on 24/03/14.
                         */

v.e({

  /**
   * select function simplifies dom selection by identifing differences between
   * class id or tag selections. And always returns an Array rather than a NodeList
   *
   * Assumptions, these help keep the selector function lean
   *      1: context is always document
   *      2: context is always HTML
   *      3: selectors are never document rooted
   * @param selector:String
   * @return Array | Node
   **/
  select: function select(selector) {
    var match = void 0,
        m = void 0,
        // matching expression
    // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        results = [],
        dom = void 0;

    if (!selector || typeof selector !== "string") {
      throw "Must select with a valid string";
    }

    // Shortcuts
    if (match = rquickExpr.exec(selector)) {
      // Speed-up: #ID
      if (m = match[1]) {
        results = document.getElementById(m);
        // Speed-up: TAG
      } else if (match[2]) {
        v.push.apply(results, document.getElementsByTagName(selector));
        // Speed-up: .CLASS
      } else if ((m = match[3]) && document.getElementsByClassName) {
        v.push.apply(results, document.getElementsByClassName(m));
      }
    } else {
      v.push.apply(results, document.querySelectorAll(selector));
    }

    // wrap the selection in helper functions
    dom = results || [];
    v.isIterable(dom) ? v.extend(dom, v.NodeList) : v.extend(dom, v.Elem);

    dom.selector = selector || '';

    return dom;
  }

});
;
(function (v) {
  var _this2 = this,
      _arguments2 = arguments;

  var nativeClassList = "classList" in document.createElement("_");

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  var vElem = {};

  // classie functions inspired by bonzo https://github.com/ded/bonzo a great lib
  vElem.addClass = function (classString) {
    if (nativeClassList) {
      _this2.classList.add(classString);
    } else {
      if (!_this2.hasClass(classString)) {
        _this2.className = _this2.className + ' ' + classString;
      }
    }
    return _this2;
  };

  vElem.removeClass = function (classString) {
    if (nativeClassList) {
      _this2.classList.remove(classString);
    } else {
      _this2.className = _this2.className.replace(classReg(classString), ' ');
    }
    return _this2;
  };

  vElem.toggleClass = function (classString) {
    (_this2.hasClass(classString) ? _this2.removeClass : _this2.addClass).call(_this2, classString);
    return _this2;
  };

  vElem.hasClass = function (classString) {
    if (nativeClassList) {
      return _this2.classList.contains(classString);
    } else {
      return classReg(classString).test(_this2.className);
    }
  };

  // zepto inspired css property setter & getter
  vElem.css = function (property, value) {
    if (_arguments2.length < 2) {
      // one arg, user must want a getter
      return _this2.style[v.str.camelize(property)];
    }
    _this2.style[v.str.camelize(property)] = value;
    return _this2;
  };

  // basic attr get & setter using paleo html
  vElem.attr = function (attr, value) {
    if (_arguments2.length < 2) {
      return _this2.getAttribute(attr);
    } else {
      _this2.setAttribute(attr, value);
    }
    return _this2;
  };

  // TODO: add support for html getter setter

  v.e({ Elem: vElem });
})(v);
v.e({

  // functions for the returned NodeList
  NodeList: {
    each: function each(callback) {
      function jit(el, i, context) {
        v.extend(el, v.Elem);
        callback(el, i, context);
      }
      v.each(undefined, jit);
    },
    first: function first() {
      var elem = undefined[0];
      v.e(elem, v.Elem);
      return elem;
    }
  }

});
; /**
  * XMLHttpRequest state codes
  * 0 (uninitialized)
  * 1 (loading)
  * 2 (loaded)
  * 3 (interactive)
  * 4 (complete)
  *
  * Event Summary
  * readystatechange
  * loadstart
  * progress
  * @TODO abort
  * error
  * load
  * @TODO timeout
  * loadend
  *
  **/
v.e({

  ajax: function ajax(options, callback) {
    var httpRequest = void 0,
        defaults = void 0;
    if (window.XMLHttpRequest) {
      httpRequest = new XMLHttpRequest();
    } else {
      throw 'Cannot create an XMLHTTP instance';
    }

    // support short hand, assume options is a URL
    if (typeof options === 'string') options = { url: options

      // allows success callback to be bundled with options
    };if (typeof callback === 'function') options.success = callback;

    defaults = {
      url: "",
      REST: "GET",
      data: null,
      onerror: v.ajaxError
    };
    v.extend(defaults, options);

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState == 4) defaults.success(httpRequest);
    };
    httpRequest.open(defaults.REST, defaults.url);

    // check if POST and data is not empty
    if (defaults.REST === "POST" && defaults.data !== null) {
      // then set content type to JSON
      httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      httpRequest.send(JSON.stringify(defaults.data));
    } else {
      // no data, just ping the URL
      httpRequest.send();
    }
  },

  ajaxError: function ajaxError(error) {
    throw "V AJAX Error: " + error;
  },

  // short hand for post
  post: function post(url, data, callback) {
    v.ajax({ url: url, data: data, REST: "POST" }, callback);
  }

});(function (v) {

  /**
   * @class vStr
   * vStr is used as css manipulator helpers. Javascript doesn't support dashed variables
   * These functions translate css properties like font-size into js FontSize
   **/
  var vStr = {};

  /**
   * Camelcases a dash string
   * v.str.camelize('something-dark-side') -> 'SomethingDarkSide'
   * @param string
   * @return string
   **/
  vStr.camelize = function (str) {
    return str.replace(/-+(.)?/g, function (match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
  };

  /**
   * Camelcases a string
   * v.str.dasherize('somethingDarkSide') -> 'something-dark-side'
   * @param string
   * @return string
   **/
  vStr.dasherize = function (str) {
    return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
  };

  v.e({ str: vStr });
})(v);
//# sourceMappingURL=vestige-v0.0.0.js.map
