/**
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
    select: function (selector) {
        let match,
            m, // matching expression
            // Easily-parseable/retrievable ID or TAG or CLASS selectors
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            results = [],
            dom

        if (!selector || typeof selector !== "string") {
          throw "Must select with a valid string"
        }

        // Shortcuts
        if ((match = rquickExpr.exec(selector))) {
          // Speed-up: #ID
          if ((m = match[1])) {
            results = document.getElementById(m)
          // Speed-up: TAG
          } else if (match[2]) {
            v.push.apply(results, document.getElementsByTagName(selector))
          // Speed-up: .CLASS
          } else if ((m = match[3]) && document.getElementsByClassName) {
            v.push.apply(results, document.getElementsByClassName(m))
          }
        } else {
          v.push.apply(results,
            document.querySelectorAll(selector)
          )
        }

        // wrap the selection in helper functions
        dom = results || []
        v.isIterable(dom) ? v.extend(dom, v.NodeList) : v.extend(dom, v.Elem)
        
        dom.selector = selector || ''

        return dom
    }

});
