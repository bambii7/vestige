
v.e({

    create: v.doc.createElement,
    /*
     * TODO: add object seralisation for ajax form submision
     * TODO: add element creation (with support for namespaced SVG)
     * /
     *
//    serializeObject: function( Object ) {
//        var o = {};
//        var a = this.serializeArray();
//        v.each(a, function() {
//            if (o[this.name] !== undefined) {
//                if (!o[this.name].push) {
//                    o[this.name] = [o[this.name]];
//                }
//                o[this.name].push(this.value || '');
//            } else {
//                o[this.name] = this.value || '';
//            }
//        });
//        return o;
//    },
//
//    $.fn.serializeArray: function() {
//        var result = [], el
//        $([].slice.call(this.get(0).elements)).each(function(){
//        el = $(this)
//        var type = el.attr('type')
//        if (this.nodeName.toLowerCase() != 'fieldset' &&
//        !this.disabled && type != 'submit' && type != 'reset' && type != 'button' &&
//        ((type != 'radio' && type != 'checkbox') || this.checked))
//        result.push({
//        name: el.attr('name'),
//        value: el.val()
//        })
//        })
//        return result
//    }

});
