describe( "string", function() {
    
    it("should convert a css dashed property into a js camelcase string",function(){
        expect( v.str.camelize('font-size') ).toEqual('fontSize');
        expect( v.str.camelize('border-top') ).toEqual('borderTop');
        expect( v.str.camelize('margin-bottom') ).toEqual('marginBottom');
    });   
    
    it("should covert a js camelcase to a css dashed string",function(){
        expect( v.str.dasherize('fontSize') ).toEqual('font-size');
        expect( v.str.dasherize('borderTop') ).toEqual('border-top');
        expect( v.str.dasherize('marginBottom') ).toEqual('margin-bottom');
    });    
    
    xit("",function(){
        expect().toEqual(1);
    });

});