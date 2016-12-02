(function(v){

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
    vStr.camelize = function( str ){
        return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' })
    }

    /**
     * Camelcases a string
     * v.str.dasherize('somethingDarkSide') -> 'something-dark-side'
     * @param string
     * @return string
     **/
    vStr.dasherize = function(str) {
        return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
    }

    v.e({str: vStr});

})(v)
