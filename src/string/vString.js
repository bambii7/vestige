(function(v){

    function vStr() {

    }

    // zepto camlize
    vStr.prototype.camelize = function( str ){
        return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' })
    }

    vStr.prototype.dasherize = function(str) {
        return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
    }

    v.e({str: vStr.prototype});

})(v)
