window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css",t.id="matchmediajs-test",i.parentNode.insertBefore(t,i),n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=i:t.textContent=i,"1px"===n.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(){if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var e=window.matchMedia,t=e("only all").matches,i=!1,n=0,a=[],d=function(){clearTimeout(n),n=setTimeout(function(){for(var t=0,i=a.length;i>t;t++){var n=a[t].mql,d=a[t].listeners||[],r=e(n.media).matches;if(r!==n.matches){n.matches=r;for(var m=0,s=d.length;s>m;m++)d[m].call(window,n)}}},30)};window.matchMedia=function(n){var r=e(n),m=[],s=0;return r.addListener=function(e){t&&(i||(i=!0,window.addEventListener("resize",d,!0)),0===s&&(s=a.push({mql:r,listeners:m})),m.push(e))},r.removeListener=function(e){for(var t=0,i=m.length;i>t;t++)m[t]===e&&m.splice(t,1)},r}}(),webshim.isReady("matchMedia",!0);