/**
 * Created by alexis.hope on 24/03/14.
 */

v.extend( v, {
    select: function(i,f,s){f=i[0];s=i.substr(1);return document['getElement'+({'#':'ById','.':'sByClassName'}[f]||'sByTagName')]({'#':s,'.':s}[f]||i)}
});
