
(function(win, doc) {
    "use strict"

    function v(expression) {
        return new v.select(expression)
    }

    // Create quick reference variables for speed access to core prototypes.
    let arr              = Array.prototype,
        obj              = Object.prototype,
        slice            = arr.slice,
        hasOwnProperty   = obj.hasOwnProperty,

    // **ECMAScript 5** native function (mainly IE8 support)
        nativeForEach    = arr.forEach,
        nativeKeys       = obj.keys

    v.doc = doc
    v.win = win
    v.arr = Array.prototype
    v.push = arr.push
    v.slice = arr.slice

    /**
     * Helper function forEach/each uses native if present on array
     * and work around for objects
     * @type {each}
     */
    v.each = v.forEach = (obj, iterator, context) => {
      let i = obj.length || v.keys( obj ).length
      if (nativeForEach && nativeForEach === obj.forEach) {
        obj.forEach(iterator, context)
      } else {
        while(i--) {
          iterator.call(context, obj[i], i, obj)
        }
      }
      return obj
    }

    v.keys = (obj) => {
      let keys = []
      if (nativeKeys) {
        return nativeKeys(obj)
      }
      for (let key in obj) if (v.has(obj, key)) {
        keys.push(key)
      }
      return keys
    }

    v.has = (obj, key) => {
      return hasOwnProperty.call(obj, key)
    }

    /**
     * return the size of Array or Object
     * @param obj
     * @return {*}
     */
    v.size = (obj) => {
      return (obj.length === +obj.length) ? obj.length : v.keys(obj).length
    }
    
    /**
     * return boolean if obj is iterable
     * @param obj
     * @return boolean
     */
    v.isIterable = (obj) => {
      if (obj == null) {
        return false
      }
      return typeof obj[Symbol.iterator] === 'function'
    }

    /**
     * Simple extend functionality currently doesn't offer deep support
     * main purpose is for simple vestige extension
     * @type {e}
     */
    v.extend = v.e = () => {
      let i = 1, target = arguments[0]
      // extend self if only one arg
      if(arguments.length === i) {
        target = this
        i--
      }
      v.each(slice.call(arguments, i), function(source) {
        for (let prop in source) {
          target[prop] = source[prop]
        }
      })
      return target
    }

    // EXPOSE
    window.v = v

})(this, document)
