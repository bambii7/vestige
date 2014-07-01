
(function(v){
    
    var nativeClassList = ("classList" in document.createElement("_"));
    
    function classReg( className ) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    
    
    function vElem() {
        
    }
    
    // classie functions inspired by bonzo https://github.com/ded/bonzo a great lib
    vElem.prototype.addClass = function( classString ) {
        if( nativeClassList ) {
            this.classList.add( classString );
        } else {
            if ( !this.hasClass( classString ) ) {
                this.className = this.className + ' ' + classString;
            }
        }
        return this;
    };
    vElem.prototype.removeClass = function( classString ) {
        if( nativeClassList ) {
            this.classList.remove( classString );
        } else {
            this.className = this.className.replace( classReg( classString ), ' ' );
        }
        return this;
    };
    vElem.prototype.toggleClass = function( classString ) {
        (this.hasClass( classString ) ? this.removeClass : this.addClass).call( this, classString );
        return this;
    };
    vElem.prototype.hasClass = function( classString ) {
        if( nativeClassList ) {
           return this.classList.contains( classString );
        } else {
            return classReg( classString ).test( this.className );
        }
    };
    
    v.e({vElem: vElem.prototype});
    
})(v)