/*!
loadCSS: load a CSS file asynchronously.
[c]2014 @scottjehl, Filament Group, Inc.
Licensed MIT
*/

/* exported loadCSS */
function loadCSS( href, before, media ){
  "use strict";
  // Arguments explained:
  // `href` is the URL for your CSS file.
  // `before` optionally defines the element we'll use as a reference for injecting our <link> before
  // By default, loadCSS attempts to inject the link after the last stylesheet or script in the DOM
  // However, you might desire a more specific location in your document.
  // If so, pass a different reference element to the `before` argument and it'll insert before that instead
  // note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
  var ss = window.document.createElement( "link" );
  var ref;
  if( before ){
    ref = before;
  }
  else if( window.document.querySelectorAll ){
    var refs = window.document.querySelectorAll(  "style,link[rel=stylesheet],script" );
    // no need to check length - this script has a parent element, at least
    ref = refs[ refs.length - 1];
  }
  else {
    ref = window.document.getElementsByTagName( "script" )[ 0 ];
  }

  var sheets = window.document.styleSheets;
  ss.rel = "stylesheet";
  ss.href = href;
  // temporarily, set media to something non-matching to ensure it'll fetch without blocking render
  ss.media = "only x";

  // inject link
  // Note: the ternary preserves the existing behavior of "before" argument, but we could choose to change the argument to "after" in a later release and standardize on ref.nextSibling for all refs
  ref.parentNode.insertBefore( ss, ref );
  // This function sets the link's media back to `all` so that the stylesheet applies once it loads
  // It is designed to poll until window.document.styleSheets includes the new sheet.
  ss.onloadcssdefined = function( cb ){
    var defined;
    for( var i = 0; i < sheets.length; i++ ){
      if( sheets[ i ].href && sheets[ i ].href === ss.href ){
        defined = true;
      }
    }
    if( defined ){
      cb();
    } else {
      setTimeout(function() {
        ss.onloadcssdefined( cb );
      });
    }
  };
  ss.onloadcssdefined(function() {
    ss.media = media || "all";
  });
  return ss;
};