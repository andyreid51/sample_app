var swfmini=function(){function e(){if(!y){y=!0;for(var e=g.length,t=0;e>t;t++)g[t]()}}function t(e){y?e():g[g.length]=e}function a(){h&&n()}function n(){var e=m.getElementsByTagName("body")[0],t=r(l);t.setAttribute("type",p);var a=e.appendChild(t);if(a){var n=0;!function(){if(typeof a.GetVariable!=s){var r=a.GetVariable("$version");r&&(r=r.split(" ")[1].split(","),w.pv=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)])}else if(10>n)return n++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),a=null}()}}function r(e){return m.createElement(e)}function i(e){var t=w.pv,a=e.split(".");return a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10)||0,a[2]=parseInt(a[2],10)||0,t[0]>a[0]||t[0]==a[0]&&t[1]>a[1]||t[0]==a[0]&&t[1]==a[1]&&t[2]>=a[2]?!0:!1}var o=function(){u.error("This method was removed from swfmini")},s="undefined",l="object",u=window.webshims,d="Shockwave Flash",c="ShockwaveFlash.ShockwaveFlash",p="application/x-shockwave-flash",f=window,m=document,v=navigator,h=!1,g=[a],y=!1,b=!0,w=function(){var e=typeof m.getElementById!=s&&typeof m.getElementsByTagName!=s&&typeof m.createElement!=s,t=v.userAgent.toLowerCase(),a=v.platform.toLowerCase(),n=a?/win/.test(a):/win/.test(t),r=a?/mac/.test(a):/mac/.test(t),i=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,u=[0,0,0],g=null;if(typeof v.plugins!=s&&typeof v.plugins[d]==l)g=v.plugins[d].description,!g||typeof v.mimeTypes!=s&&v.mimeTypes[p]&&!v.mimeTypes[p].enabledPlugin||(h=!0,o=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),u[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),u[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),u[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof f.ActiveXObject!=s)try{var y=new ActiveXObject(c);y&&(g=y.GetVariable("$version"),g&&(o=!0,g=g.split(" ")[1].split(","),u=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]))}catch(b){}return{w3:e,pv:u,wk:i,ie:o,win:n,mac:r}}();u.ready("DOM",e),u.loader.addModule("swfmini-embed",{d:["swfmini"]});var E=i("9.0.0")?function(){return u.loader.loadList(["swfmini-embed"]),!0}:u.$.noop;return u.support.mediaelement?u.ready("WINDOWLOAD",E):E(),{registerObject:o,getObjectById:o,embedSWF:function(e,t,a,n,r,i,o,s,l,d){var c=arguments;E()?u.ready("swfmini-embed",function(){swfmini.embedSWF.apply(swfmini,c)}):d&&d({success:!1,id:t})},switchOffAutoHideShow:function(){b=!1},ua:w,getFlashPlayerVersion:function(){return{major:w.pv[0],minor:w.pv[1],release:w.pv[2]}},hasFlashPlayerVersion:i,createSWF:function(e,t,a){return w.w3?createSWF(e,t,a):void 0},showExpressInstall:o,removeSWF:o,createCSS:o,addDomLoadEvent:t,addLoadEvent:o,expressInstallCallback:o}}();webshims.isReady("swfmini",!0),function(e){"use strict";var t=window.webshims;if(!t.defineProperties){var a="defineProperty",n=Object.prototype.hasOwnProperty,r=["configurable","enumerable","writable"],i=function(e){for(var t=0;3>t;t++)void 0!==e[r[t]]||"writable"===r[t]&&void 0===e.value||(e[r[t]]=!0)},o=function(e){if(e)for(var t in e)n.call(e,t)&&i(e[t])};Object.create&&(t.objectCreate=function(t,a,n){o(a);var r=Object.create(t,a);return n&&(r.options=e.extend(!0,{},r.options||{},n),n=r.options),r._create&&e.isFunction(r._create)&&r._create(n),r}),Object[a]&&(t[a]=function(e,t,n){return i(n),Object[a](e,t,n)}),Object.defineProperties&&(t.defineProperties=function(e,t){return o(t),Object.defineProperties(e,t)}),t.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,t.getPrototypeOf=Object.getPrototypeOf}}(window.webshims.$),webshims.register("dom-extend",function(e,t,a,n,r){"use strict";function i(a,n,r){var i=e.clone(a,n,!1);return e(i.querySelectorAll("."+t.shadowClass)).detach(),r?(y++,e(i.querySelectorAll("[id]")).prop("id",function(e,t){return t+y})):e(i.querySelectorAll('audio[id^="ID-"], video[id^="ID-"], label[id^="ID-"]')).removeAttr("id"),i}var o=!("hrefNormalized"in e.support)||e.support.hrefNormalized;!("getSetAttribute"in e.support)||e.support.getSetAttribute;var s=Object.prototype.hasOwnProperty;if(t.assumeARIA=!0,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10+. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),"debug"in t&&t.error('Use webshims.setOptions("debug", true||false||"noCombo"); to debug flag'),!t.cfg.no$Switch){var l=function(){!a.jQuery||a.$&&a.jQuery!=a.$||a.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),a.$&&(a.$=t.$),a.jQuery=t.$)};l(),setTimeout(l,90),t.ready("DOM",l),e(l),t.ready("WINDOWLOAD",l)}t.modules;var u=/\s*,\s*/,d={},c={},p={},f={},m={},v={},h=e.fn.val,g=function(t,a,n,r,i){return i?h.call(e(t)):h.call(e(t),n)};e.widget||function(){var t=e.cleanData;e.cleanData=function(a){if(!e.widget)for(var n,r=0;null!=(n=a[r]);r++)try{e(n).triggerHandler("remove")}catch(i){}t(a)}}(),e.fn.val=function(t){var a=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return a&&1===a.nodeType?e.prop(a,"value",t,"val",!0):h.call(this);if(e.isArray(t))return h.apply(this,arguments);var n=e.isFunction(t);return this.each(function(i){if(a=this,1===a.nodeType)if(n){var o=t.call(a,i,e.prop(a,"value",r,"val",!0));null==o&&(o=""),e.prop(a,"value",o,"val")}else e.prop(a,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,a,r,i){return i||(i=n),e(i)[r?"onTrigger":"on"](t,a),this.on("remove",function(n){n.originalEvent||e(i).off(t,a)}),this};var y=0,b="_webshims"+Math.round(1e3*Math.random()),w=function(t,a,n){if(t=t.jquery?t[0]:t,!t)return n||{};var i=e.data(t,b);return n!==r&&(i||(i=e.data(t,b,{})),a&&(i[a]=n)),a?i&&i[a]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var a=[];return this.each(function(){var n=w(this,"shadowData"),r=n&&n[t.prop]||this;-1==e.inArray(r,a)&&a.push(r)}),this.pushStack(a)}}),e.fn.clonePolyfill=function(t,a){return t=t||!1,this.map(function(){var r=i(this,t,a);return setTimeout(function(){e.contains(n.body,r)&&e(r).updatePolyfill()}),r})},t.cfg.extendNative||t.cfg.noTriggerOverride||function(t){e.event.trigger=function(a,n,r,i){if(!p[a]||i||!r||1!==r.nodeType)return t.apply(this,arguments);var o,l,u,d=r[a],c=e.prop(r,a),f=c&&d!=c;return f&&(u="__ws"+a,l=a in r&&s.call(r,a),r[a]=c,r[u]=d),o=t.apply(this,arguments),f&&(l?r[a]=d:delete r[a],delete r[u]),o}}(e.event.trigger),["removeAttr","prop","attr"].forEach(function(a){d[a]=e[a],e[a]=function(t,n,i,o,s){var l="val"==o,u=l?g:d[a];if(!t||!c[n]||1!==t.nodeType||!l&&o&&"attr"==a&&e.attrFn[n])return u(t,n,i,o,s);var p,m,h,y=(t.nodeName||"").toLowerCase(),b=f[y],w="attr"!=a||i!==!1&&null!==i?a:"removeAttr";if(b||(b=f["*"]),b&&(b=b[n]),b&&(p=b[w]),p){if("value"==n&&(m=p.isVal,p.isVal=l),"removeAttr"===w)return p.value.call(t);if(i===r)return p.get?p.get.call(t):p.value;p.set&&("attr"==a&&i===!0&&(i=n),h=p.set.call(t,i)),"value"==n&&(p.isVal=m)}else h=u(t,n,i,o,s);if((i!==r||"removeAttr"===w)&&v[y]&&v[y][n]){var E;E="removeAttr"==w?!1:"prop"==w?!!i:!0,v[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==a)||"attr"==e.only&&"prop"!=a)&&e.call(t,i,E,l?"val":w,a)})}return h},m[a]=function(e,n,i){f[e]||(f[e]={}),f[e][n]||(f[e][n]={});var o=f[e][n][a],s=function(e,t,r){var o;return t&&t[e]?t[e]:r&&r[e]?r[e]:"prop"==a&&"value"==n?function(e){var t=this;return i.isVal?g(t,n,e,!1,0===arguments.length):d[a](t,n,e)}:"prop"==a&&"value"==e&&i.value.apply?(o="__ws"+n,p[n]=!0,function(){var e=this[o]||d[a](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}):function(e){return d[a](this,n,e)}};f[e][n][a]=i,i.value===r&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var E=function(){var e=t.getPrototypeOf(n.createElement("foobar")),a=t.support.advancedObjectProperties&&t.support.objectAccessor;return function(r,i,o){var l,u;if(!(a&&(l=n.createElement(r))&&(u=t.getPrototypeOf(l))&&e!==u)||l[i]&&s.call(l,i))o._supvalue=function(){var e=w(this,"propValue");return e&&e[i]&&e[i].apply?e[i].apply(this,arguments):e&&e[i]},T.extendValue(r,i,o.value);else{var d=l[i];o._supvalue=function(){return d&&d.apply?d.apply(this,arguments):d},u[i]=o.value}o.value._supvalue=o._supvalue}}(),T=function(){var a={};t.addReady(function(n,r){var i={},o=function(t){i[t]||(i[t]=e(n.getElementsByTagName(t)),r[0]&&e.nodeName(r[0],t)&&(i[t]=i[t].add(r)))};e.each(a,function(e,a){return o(e),a&&a.forEach?(a.forEach(function(t){i[e].each(t)}),void 0):(t.warn("Error: with "+e+"-property. methods: "+a),void 0)}),i=null});var r,i=e([]),o=function(t,i){a[t]?a[t].push(i):a[t]=[i],e.isDOMReady&&(r||e(n.getElementsByTagName(t))).each(i)};return{createTmpCache:function(t){return e.isDOMReady&&(r=r||e(n.getElementsByTagName(t))),r||i},flushTmpCache:function(){r=null},content:function(t,a){o(t,function(){var t=e.attr(this,a);null!=t&&e.attr(this,a,t)})},createElement:function(e,t){o(e,t)},extendValue:function(t,a,n){o(t,function(){e(this).each(function(){var e=w(this,"propValue",{});e[a]=this[a],this[a]=n})})}}}(),x=function(e,t){e.defaultValue===r&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(a){a=e(a);var n=a.prop("id");return n||(t++,n="ID-"+t,a.eq(0).prop("id",n)),n}}(),shadowClass:"wsshadow-"+Date.now(),implement:function(e,a){var n=w(e,"implemented")||w(e,"implemented",{});return n[a]?(t.warn(a+" already implemented for element #"+e.id),!1):(n[a]=!0,!0)},extendUNDEFProp:function(t,a){e.each(a,function(e,a){e in t||(t[e]=a)})},getOptions:function(){var a=/\-([a-z])/g,n={},r={},i=function(e,t){return t.toLowerCase()},o=function(e,t){return t.toUpperCase()};return function(s,l,u,d){r[l]?l=r[l]:(r[l]=l.replace(a,o),l=r[l]);var c,p=w(s,"cfg"+l),f={};if(p)return p;if(p=e(s).data(),p&&"string"==typeof p[l]){if(d)return w(s,"cfg"+l,p[l]);t.error("data-"+l+" attribute has to be a valid JSON, was: "+p[l])}u?Array.isArray(u)?u.unshift(!0,{}):u=[!0,{},u]:u=[!0,{}],p&&"object"==typeof p[l]&&u.push(p[l]),n[l]||(n[l]=new RegExp("^"+l+"([A-Z])"));for(c in p)n[l].test(c)&&(f[c.replace(n[l],i)]=p[c]);return u.push(f),w(s,"cfg"+l,e.extend.apply(e,u))}}(),createPropDefault:x,data:w,moveToFirstEvent:function(t,a,n){var r,i=(e._data(t,"events")||{})[a];i&&i.length>1&&(r=i.pop(),n||(n="bind"),"bind"==n&&i.delegateCount?i.splice(i.delegateCount,0,r):i.unshift(r)),t=null},addShadowDom:function(){var r,i,o,s=e(a),l={init:!1,runs:0,test:function(){var e=l.getHeight(),t=l.getWidth();e!=l.height||t!=l.width?(l.height=e,l.width=t,l.handler({type:"docresize"}),l.runs++,l.runs<9&&setTimeout(l.test,90)):l.runs=0},handler:function(){var t=function(){e(n).triggerHandler("updateshadowdom")};return function(e){clearTimeout(r),r=setTimeout(function(){if("resize"==e.type){var n=s.width(),r=s.width();if(r==i&&n==o)return;i=r,o=n,l.height=l.getHeight(),l.width=l.getWidth()}a.requestAnimationFrame?requestAnimationFrame(t):setTimeout(t,0)},"resize"!=e.type||a.requestAnimationFrame?9:50)}}(),_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var a=n.body,r=n.documentElement;l[t]=function(){return Math.max(a["scroll"+e],r["scroll"+e],a["offset"+e],r["offset"+e],r["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=l.getHeight(),this.width=l.getWidth(),setInterval(this.test,999),e(this.test),null==e.support.boxSizing&&e(function(){e.support.boxSizing&&l.handler({type:"boxsizing"})}),t.ready("WINDOWLOAD",this.test),e(n).on("updatelayout.webshim pageinit popupafteropen panelbeforeopen tabsactivate collapsibleexpand shown.bs.modal shown.bs.collapse slid.bs.carousel playerdimensionchange",this.handler),e(a).on("resize",this.handler))}};return t.docObserve=function(){t.ready("DOM",function(){l.start()})},function(a,n,r){if(a&&n){r=r||{},a.jquery&&(a=a[0]),n.jquery&&(n=n[0]);var i=e.data(a,b)||e.data(a,b,{}),o=e.data(n,b)||e.data(n,b,{}),s={};r.shadowFocusElement?r.shadowFocusElement&&(r.shadowFocusElement.jquery&&(r.shadowFocusElement=r.shadowFocusElement[0]),s=e.data(r.shadowFocusElement,b)||e.data(r.shadowFocusElement,b,s)):r.shadowFocusElement=n,e(a).on("remove",function(t){t.originalEvent||setTimeout(function(){e(n).remove()},4)}),i.hasShadow=n,s.nativeElement=o.nativeElement=a,s.shadowData=o.shadowData=i.shadowData={nativeElement:a,shadowElement:n,shadowFocusElement:r.shadowFocusElement},r.shadowChilds&&r.shadowChilds.each(function(){w(this,"shadowData",o.shadowData)}),r.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=r.data),r=null}t.docObserve()}}(),propTypes:{standard:function(e){x(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){x(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(a,n){x(a),a.prop||(a.prop={set:function(e){a.attr.set.call(this,e)},get:function(){var a,r=this.getAttribute(n);if(null==r)return"";if(t.setAttribute("href",r+""),!o){try{e(t).insertAfter(this),a=t.getAttribute("href",4)}catch(i){a=t.getAttribute("href",4)}e(t).detach()}return a||t.href}})}}(),enumarated:function(e){x(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(a,n){"string"==typeof n&&(n=n.split(u)),n.forEach(function(n){t.defineNodeNamesProperty(a,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(a,n,r){return c[n]=!0,r.reflect&&(r.propType&&!t.propTypes[r.propType]?t.error("could not finde propType "+r.propType):t.propTypes[r.propType||"standard"](r,n)),["prop","attr","removeAttr"].forEach(function(i){var o=r[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),m[i](a,n,o),"*"!=a&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&E(a,n,o),r[i]=o)}),r.initAttr&&T.content(a,n),r},defineNodeNameProperties:function(e,a,n,r){for(var i in a)!r&&a[i].initAttr&&T.createTmpCache(e),n&&(a[i][n]||(a[i][n]={},["value","set","get"].forEach(function(e){e in a[i]&&(a[i][n][e]=a[i][e],delete a[i][e])}))),a[i]=t.defineNodeNameProperty(e,i,a[i]);return r||T.flushTmpCache(),a},createElement:function(a,n,r){var i;return e.isFunction(n)&&(n={after:n}),T.createTmpCache(a),n.before&&T.createElement(a,n.before),r&&(i=t.defineNodeNameProperties(a,r,!1,!0)),n.after&&T.createElement(a,n.after),T.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,a,n,r){"string"==typeof t&&(t=t.split(u)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){v[e]||(v[e]={}),"string"==typeof a&&(a=a.split(u)),n.initAttr&&T.createTmpCache(e),a.forEach(function(t){v[e][t]||(v[e][t]=[],c[t]=!0),n.set&&(r&&(n.set.only=r),v[e][t].push(n.set)),n.initAttr&&T.content(e,t)}),T.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,n,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(a,n,{attr:{set:function(e){i.useContentAttribute?t.contentAttr(this,n,e):this.setAttribute(n,e),i.set&&i.set.call(this,!0)},get:function(){var e=i.useContentAttribute?t.contentAttr(this,n):this.getAttribute(n);return null==e?r:n}},removeAttr:{value:function(){this.removeAttribute(n),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,a){if(e.nodeName){var n;return a===r?(n=e.attributes[t]||{},a=n.specified?n.value:null,null==a?r:a):("boolean"==typeof a?a?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,a),void 0)}},activeLang:function(){var a=[],n=[],r={},i=function(n,i,s){i._isLoading=!0,r[n]?r[n].push(i):(r[n]=[i],t.loader.loadScript(n,function(){s==a.join()&&e.each(r[n],function(e,t){o(t)}),delete r[n]}))},o=function(t){var n=t.__active,r=function(e,n){return t._isLoading=!1,t[n]||-1!=t.availableLangs.indexOf(n)?(t[n]?(t.__active=t[n],t.__activeName=n):i(t.langSrc+n,t,a.join()),!1):void 0};e.each(a,r),t.__active||(t.__active=t[""],t.__activeName=""),n!=t.__active&&e(t).trigger("change")};return function(e){var t;if("string"==typeof e)a[0]!=e&&(a=[e],t=a[0].split("-")[0],t&&t!=e&&a.push(t),n.forEach(o));else if("object"==typeof e)return e.__active||(n.push(e),o(e)),e.__active;return a[0]}}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,a){t[e]=function(e,n,r,i){"string"==typeof e&&(e=e.split(u));var o={};return e.forEach(function(e){o[e]=t[a](e,n,r,i)}),o}}),t.isReady("webshimLocalization",!0),function(){if(!("content"in n.createElement("template")||(e(function(){var a=e("main").attr({role:"main"});a.length>1?t.error("only one main element allowed in document"):a.is("article *, section *")&&t.error("main not allowed inside of article/section elements")}),"hidden"in n.createElement("a")))){t.defineNodeNamesBooleanProperty(["*"],"hidden");var a={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var a=e.getAttribute("role");a||e.setAttribute("role",t)};e.webshims.addReady(function(t,i){if(e.each(a,function(a,n){for(var o=e(a,t).add(i.filter(a)),s=0,l=o.length;l>s;s++)r(o[s],n)}),t===n){var o=n.getElementsByTagName("header")[0],s=n.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&r(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||r(u,"contentinfo")}})}}()}),webshims.register("form-core",function(e,t,a,n,r,i){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var a=t.isDefaultPrevented,n=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),n.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!a.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}};var o=t.modules,s=t.support,l=function(t){return(e.prop(t,"validity")||{valid:1}).valid},u=function(){var a=["form-validation"];i.lazyCustomMessages&&(i.customMessages=!0,a.push("form-message")),t._getAutoEnhance(i.customDatalist)&&(i.fD=!0,a.push("form-datalist")),i.addValidators&&a.push("form-validators"),t.reTest(a),e(n).off(".lazyloadvalidation")},d=function(){var a,r,o=e.expr[":"],u=/^(?:form|fieldset)$/i,d=function(t){var a=!1;return e(t).jProp("elements").each(function(){return!u.test(this.nodeName||"")&&(a=o.invalid(this))?!1:void 0}),a};if(e.extend(o,{"valid-element":function(t){return u.test(t.nodeName||"")?!d(t):!(!e.prop(t,"willValidate")||!l(t))},"invalid-element":function(t){return u.test(t.nodeName||"")?d(t):!(!e.prop(t,"willValidate")||l(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).getShadowElement().hasClass(i.iVal.errorClass||"user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){o[t]=e.expr[":"][t+"-element"]}),s.fieldsetdisabled&&!e('<fieldset disabled=""><input /><input /></fieldset>').find(":disabled").filter(":disabled").is(":disabled")&&(a=e.find.matches,r={":disabled":1,":enabled":1},e.find.matches=function(e,t){return r[e]?a.call(this,"*"+e,t):a.apply(this,arguments)},e.extend(o,{enabled:function(t){return t.disabled===!1&&!e(t).is("fieldset[disabled] *")},disabled:function(t){return t.disabled===!0||"disabled"in t&&e(t).is("fieldset[disabled] *")}})),"unknown"==typeof n.activeElement){var c=o.focus;o.focus=function(){try{return c.apply(this,arguments)}catch(e){t.error(e)}return!1}}},c={noAutoCallback:!0,options:i},p=t.loader.addModule,f=function(e,a,n){u(),t.ready("form-validation",function(){e[a].apply(e,n)})},m="transitionDelay"in n.documentElement.style?"":" no-transition",v=t.cfg.wspopover;p("form-validation",e.extend({d:["form-message"]},c)),p("form-validators",e.extend({},c)),s.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0),e.expr.filters?d():t.ready("sizzle",d),t.triggerInlineForm=function(t,a){e(t).trigger(a)},v.position||v.position===!1||(v.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},v,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+m+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){f(this,"show",arguments)}},t.validityAlert={showFor:function(){f(this,"showFor",arguments)}},t.getContentValidationMessage=function(a,n,r){var i;t.errorbox&&t.errorbox.initIvalContentMessage&&t.errorbox.initIvalContentMessage(a);var o=(t.getOptions&&t.errorbox?t.getOptions(a,"errormessage",!1,!0):e(a).data("errormessage"))||a.getAttribute("x-moz-errormessage")||"";return r&&o[r]?o=o[r]:o&&(n=n||e.prop(a,"validity")||{valid:1},n.valid&&(o="")),"object"==typeof o&&(n=n||e.prop(a,"validity")||{valid:1},n.customError&&(i=e.data(a,"customMismatchedRule"))&&o[i]&&"string"==typeof o[i]?o=o[i]:n.valid||(e.each(n,function(e,t){return t&&"valid"!=e&&o[e]?(o=o[e],!1):void 0}),"object"==typeof o&&(n.typeMismatch&&o.badInput&&(o=o.badInput),n.badInput&&o.typeMismatch&&(o=o.typeMismatch)))),"object"==typeof o&&(o=o.defaultMessage),t.replaceValidationplaceholder&&(o=t.replaceValidationplaceholder(a,o)),o||""},e.fn.getErrorMessage=function(a){var n="",r=this[0];return r&&(n=t.getContentValidationMessage(r,!1,a)||e.prop(r,"customValidationMessage")||e.prop(r,"validationMessage")),n},e.event.special.valuevalidation={setup:function(){t.error("valuevalidation was renamed to validatevalue!")}},e.event.special.validatevalue={setup:function(){var t=e(this).data()||e.data(this,{});"validatevalue"in t||(t.validatevalue=!0)}},e(n).on("focusin.lazyloadvalidation",function(e){"form"in e.target&&u()}),t.ready("WINDOWLOAD",u),o["form-number-date-ui"].loaded&&!i.customMessages&&(o["form-number-date-api"].test()||s.inputtypes.range&&s.inputtypes.color)&&t.isReady("form-number-date-ui",!0),t.ready("DOM",function(){n.querySelector(".ws-custom-file")&&t.reTest(["form-validation"])}),e(function(){var e="FileReader"in a&&"FormData"in a;e||t.addReady(function(a){e||o.filereader.loaded||o.moxie.loaded||a.querySelector("input.ws-filereader")&&(t.reTest(["filereader","moxie"]),e=!0)})})}),webshims.register("form-message",function(e,t,a,n,r,i){"use strict";i.lazyCustomMessages&&(i.customMessages=!0);var o=t.validityMessages,s=i.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL."},badInput:{defaultMessage:"Please enter a valid value.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",tooShort:"Please enter at least {%minlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]||(o["en-US"]=e.extend(!0,{},o.en)),o["en-GB"]||(o["en-GB"]=e.extend(!0,{},o.en)),o["en-AU"]||(o["en-AU"]=e.extend(!0,{},o.en)),o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zulässig.",email:"{%value} ist keine gültige E-Mail-Adresse.",url:"{%value} ist kein(e) gültige(r) Webadresse/Pfad."},badInput:{defaultMessage:"Geben Sie einen zulässigen Wert ein.",number:"Geben Sie eine Nummer ein.",date:"Geben Sie ein Datum ein.",time:"Geben Sie eine Uhrzeit ein.",month:"Geben Sie einen Monat mit Jahr ein.",range:"Geben Sie eine Nummer.","datetime-local":"Geben Sie ein Datum mit Uhrzeit ein."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen können."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen können."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zulässig. Hier sind nur bestimmte Werte zulässig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",tooShort:"Der eingegebene Text ist zu kurz! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%minlength} das Minimum.",patternMismatch:"{%value} hat für dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das Kästchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte wählen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu früh. {%min} ist die früheste Zeit, die Sie benutzen können."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu spät. {%max} ist die späteste Zeit, die Sie benutzen können."});var l=o[""],u=function(t,a){return t&&"string"!=typeof t&&(t=t[e.prop(a,"type")]||t[(a.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},d=/</g,c=/>/g,p={value:1,min:1,max:1},f=function(){var n,r={number:function(e){var t=1*e;return t.toLocaleString&&!isNaN(t)&&(e=t.toLocaleString()||e),e}},i=function(t,a,n){var i,o;return p[n]&&(i=e.prop(a,"type"),o=e(a).getShadowElement().data("wsWidget"+i),o&&o.formatValue?t=o.formatValue(t,!1):r[i]&&(t=r[i](t))),t};return[{n:"date",f:"toLocaleDateString"},{n:"time",f:"toLocaleTimeString"},{n:"datetime-local",f:"toLocaleString"}].forEach(function(e){r[e.n]=function(t){var a=new Date(t);return a&&a[e.f]&&(t=a[e.f]()||t),t}}),a.Intl&&Intl.DateTimeFormat&&(n=new Intl.DateTimeFormat(navigator.browserLanguage||navigator.language,{year:"numeric",month:"2-digit"}).format(new Date),n&&n.format&&(r.month=function(e){var t=new Date(e);return t&&(e=n.format(t)||e),e})),t.format={},["date","number","month","time","datetime-local"].forEach(function(e){t.format[e]=function(a,n){return n&&n.nodeType?i(a,n,e):("number"==e&&n&&n.toFixed&&(a=1*a,(!n.fixOnlyFloat||a%1)&&(a=a.toFixed(n.toFixed))),t._format&&t._format[e]?t._format[e](a,n):r[e](a))}}),i}();t.replaceValidationplaceholder=function(a,n,r){var i=e.prop(a,"title");return n&&("patternMismatch"!=r||i||t.error("no title for patternMismatch provided. Always add a title attribute."),i&&(i='<span class="ws-titlevalue">'+i.replace(d,"&lt;").replace(c,"&gt;")+"</span>"),-1!=n.indexOf("{%title}")?n=n.replace("{%title}",i):i&&(n=n+" "+i)),n&&-1!=n.indexOf("{%")&&["value","min","max","maxlength","minlength","label"].forEach(function(t){if(-1!==n.indexOf("{%"+t)){var r=("label"==t?e.trim(e('label[for="'+a.id+'"]',a.form).text()).replace(/\*$|:$/,""):e.prop(a,t)||e.attr(a,t)||"")||"";r=""+r,r=f(r,a,t),n=n.replace("{%"+t+"}",r.replace(d,"&lt;").replace(c,"&gt;")),"value"==t&&(n=n.replace("{%valueLen}",r.length))}}),n},t.createValidationMessage=function(a,n){var r=u(l[n],a);return r||"badInput"!=n||(r=u(l.typeMismatch,a)),r||"typeMismatch"!=n||(r=u(l.badInput,a)),r||(r=u(o[""][n],a)||e.prop(a,"validationMessage"),"customError"!=n&&t.info("could not find errormessage for: "+n+" / "+e.prop(a,"type")+". in language: "+t.activeLang())),r=t.replaceValidationplaceholder(a,r,n),r||""},(!t.support.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),l=t.activeLang(o),e(o).on("change",function(){l=o.__active}),s.forEach(function(a){t.defineNodeNamesProperty(["fieldset","output","button"],a,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(n){var r=t.defineNodeNameProperty(n,a,{prop:{get:function(){var a=this,n="";if(!e.prop(a,"willValidate"))return n;var i=e.prop(a,"validity")||{valid:1};return i.valid?n:(n=t.getContentValidationMessage(a,i))?n:i.customError&&a.nodeName&&(n=t.support.formvalidation&&!t.bugs.bustedValidity&&r.prop._supget?r.prop._supget.call(a):t.data(a,"customvalidationMessage"))?n:(e.each(i,function(e,r){return"valid"!=e&&r?(n=t.createValidationMessage(a,e),n?!1:void 0):void 0}),n||"")},writeable:!1}})})})}),function(e){"use strict";var t=e.support,a=t.mediaelement,n=!1,r=e.bugs,i="mediaelement-jaris",o=function(){e.ready(i,function(){e.mediaelement.createSWF||(e.mediaelement.loadSwf=!0,e.reTest([i],a))})},s=e.cfg,l=s.mediaelement,u=-1!=navigator.userAgent.indexOf("MSIE");if(!l)return e.error("mediaelement wasn't implemented but loaded"),void 0;if(a){var d=document.createElement("video");t.videoBuffered="buffered"in d,t.mediaDefaultMuted="defaultMuted"in d,n="loop"in d,t.mediaLoop=n,e.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),(!t.videoBuffered||!n||!t.mediaDefaultMuted&&u&&"ActiveXObject"in window)&&(e.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),e.loader.loadList(["mediaelement-native-fix"]))}t.track&&!r.track&&function(){if(!r.track){window.VTTCue&&!window.TextTrackCue?window.TextTrackCue=window.VTTCue:window.VTTCue||(window.VTTCue=window.TextTrackCue);try{new VTTCue(2,3,"")}catch(e){r.track=!0}}}(),e.register("mediaelement-core",function(e,r,s,l,u,d){var c=swfmini.hasFlashPlayerVersion("10.0.3"),p=r.mediaelement;p.parseRtmp=function(e){var t,a,n,i=e.src.split("://"),o=i[1].split("/");for(e.server=i[0]+"://"+o[0]+"/",e.streamId=[],t=1,a=o.length;a>t;t++)n||-1===o[t].indexOf(":")||(o[t]=o[t].split(":")[1],n=!0),n?e.streamId.push(o[t]):e.server+=o[t]+"/";e.streamId.length||r.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,a){t=e(t);var n,r={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return r.src?(n=t.attr("data-server"),null!=n&&(r.server=n),n=t.attr("type")||t.attr("data-type"),n?(r.type=n,r.container=e.trim(n.split(";")[0])):(a||(a=t[0].nodeName.toLowerCase(),"source"==a&&(a=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),r.server?(r.type=a+"/rtmp",r.container=a+"/rtmp"):(n=p.getTypeForSrc(r.src,a,r),n&&(r.type=n,r.container=n))),n=t.attr("media"),n&&(r.media=n),("audio/rtmp"==r.type||"video/rtmp"==r.type)&&(r.server?r.streamId=r.src:p.parseRtmp(r)),r):r},m=!c&&"postMessage"in s&&a,v=function(){v.loaded||(v.loaded=!0,d.noAutoTrack||r.ready("WINDOWLOAD",function(){g(),r.loader.loadList(["track-ui"])}))},h=function(){var t;return function(){!t&&m&&(t=!0,r.loader.loadScript("https://www.youtube.com/player_api"),e(function(){r._polyfill(["mediaelement-yt"])
}))}}(),g=function(){c?o():h()};r.addPolyfill("mediaelement-yt",{test:!m,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,a){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return a+"/rtmp";t=t.split("?")[0].split("#")[0].split("."),t=t[t.length-1];var n;return e.each(p.mimeTypes[a],function(e,a){return-1!==a.indexOf(t)?(n=e,!1):void 0}),n},p.srces=function(t,a){if(t=e(t),!a){a=[];var n=t[0].nodeName.toLowerCase(),i=f(t,n);return i.src?a.push(i):e("source",t).each(function(){i=f(this,n),i.src&&a.push(i)}),a}r.error("setting sources was removed.")},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,a){var n="";return(c||m)&&(t=e(t),a=a||p.srces(t),e.each(a,function(e,t){return t.container&&t.src&&(c&&-1!=p.swfMimeTypes.indexOf(t.container)||m&&"video/youtube"==t.container)?(n=t,!1):void 0})),n};var y={};p.canNativePlaySrces=function(t,n){var r="";if(a){t=e(t);var i=(t[0].nodeName||"").toLowerCase(),o=(y[i]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return r;n=n||p.srces(t),e.each(n,function(e,a){return a.type&&o.call(t[0],a.type)?(r=a,!1):void 0})}return r};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};p.setError=function(t,a){if(e("source",t).filter(w).length){r.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(t).mediaLoad()}catch(n){}}else a||(a="can't play sources"),e(t).pause().data("mediaerror",a),r.error("mediaelementError: "+a+". Run the following line in your console to get more info: webshim.mediaelement.loadDebugger();"),setTimeout(function(){e(t).data("mediaerror")&&e(t).addClass("media-error").trigger("mediaerror")},1)};var E=function(){var t,a=c?i:"mediaelement-yt";return function(n,i,o){r.ready(a,function(){p.createSWF&&e(n).parent()[0]?p.createSWF(n,i,o):t||(t=!0,g(),E(n,i,o))}),t||!m||p.createSWF||h()}}(),T={"native":function(e,t,a){a&&"third"==a.isActive&&p.setActive(e,"html5",a)},third:E},x=function(e,t,a){var n,r,i=[{test:"canNativePlaySrces",activate:"native"},{test:"canThirdPlaySrces",activate:"third"}];for((d.preferFlash||t&&"third"==t.isActive)&&i.reverse(),n=0;2>n;n++)if(r=p[i[n].test](e,a)){T[i[n].activate](e,r,t);break}r||(p.setError(e,!1),t&&"third"==t.isActive&&p.setActive(e,"html5",t))},M=/^(?:embed|object|datalist|picture)$/i,A=function(t,a){var n=r.data(t,"mediaelementBase")||r.data(t,"mediaelementBase",{}),i=p.srces(t),o=t.parentNode;clearTimeout(n.loadTimer),e(t).removeClass("media-error"),e.data(t,"mediaerror",!1),i.length&&o&&1==o.nodeType&&!M.test(o.nodeName||"")&&(a=a||r.data(t,"mediaelement"),p.sortMedia&&i.sort(p.sortMedia),x(t,a,i))};p.selectSource=A,e(l).on("ended",function(t){var a=r.data(t.target,"mediaelement");(!n||a&&"html5"!=a.isActive||e.prop(t.target,"loop"))&&setTimeout(function(){!e.prop(t.target,"paused")&&e.prop(t.target,"loop")&&e(t.target).prop("currentTime",0).play()})});var P=!1,S=function(){var i=function(){r.implement(this,"mediaelement")&&(A(this),t.mediaDefaultMuted||null==e.attr(this,"muted")||e.prop(this,"muted",!0))};r.ready("dom-support",function(){P=!0,n||r.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(t){var n;n=r.defineNodeNameProperty(t,"load",{prop:{value:function(){var t=r.data(this,"mediaelement");A(this,t),!a||t&&"html5"!=t.isActive||!n.prop._supvalue||n.prop._supvalue.apply(this,arguments),!v.loaded&&this.querySelector("track")&&v(),e(this).triggerHandler("wsmediareload")}}}),y[t]=r.defineNodeNameProperty(t,"canPlayType",{prop:{value:function(n){var r="";return a&&y[t].prop._supvalue&&(r=y[t].prop._supvalue.call(this,n),"no"==r&&(r="")),!r&&c&&(n=e.trim((n||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(n)&&(r="maybe")),!r&&m&&"video/youtube"==n&&(r="maybe"),r}}})}),r.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=r.data(e,"mediaelementBase")||r.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){A(e),e=null},9)}}),r.addReady(function(t,a){var n=e("video, audio",t).add(a.filter("video, audio")).each(i);!v.loaded&&e("track",n).length&&v(),n=null})}),a&&!P&&r.addReady(function(t,a){P||e("video, audio",t).add(a.filter("video, audio")).each(function(){return p.canNativePlaySrces(this)?void 0:(g(),P=!0,!1)})})};p.loadDebugger=function(){r.ready("dom-support",function(){r.loader.loadScript("mediaelement-debug")})},{noCombo:1,media:1}[r.cfg.debug]&&e(l).on("mediaerror",function(){p.loadDebugger()}),a?(r.isReady("mediaelement-core",!0),S(),r.ready("WINDOWLOAD mediaelement",g)):r.ready(i,S),r.ready("track",v)})}(webshims);