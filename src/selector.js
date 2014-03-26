/**
 * Created by alexis.hope on 24/03/14.
 */

v.e({
    select: function( selector ) {
        var found,
            simpleSelectorRE = /^[\w-]*$/,
            maybeID = selector[0] == '#',
            maybeClass = !maybeID && selector[0] == '.',
            nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
            isSimple = simpleSelectorRE.test(nameOnly)
        return (isSimple && maybeID) ?
            ( (found = document.getElementById(nameOnly)) ? [found] : [] ) :
            (document.nodeType !== 1 && document.nodeType !== 9) ? [] :
                v.slice.call(
                    isSimple && !maybeID ?
                    maybeClass ? document.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
                        document.getElementsByTagName(selector) : // Or a tag
                        document.querySelectorAll(selector) // Or it's not simple, and we need to query all
            )
    }
});
