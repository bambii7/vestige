
v.e({

  // functions for the returned NodeList
  NodeList: {
    each: (callback) => {
      function jit(el, i, context) {
        v.extend(el, v.Elem)
        callback(el, i, context)
      }
      v.each(this, jit)
    },
    first: () => {
      let elem = this[0]
      v.e(elem, v.Elem)
      return elem
    }
  }

});
