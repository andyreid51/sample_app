!function(e){var t=window.webshims;setTimeout(function(){t.isReady("geolocation",!0)});var a=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatible with this plugin"},1)},r=0,i=t.cfg.geolocation||{};navigator.geolocation||(navigator.geolocation={}),e.extend(navigator.geolocation,function(){var n,o={getCurrentPosition:function(r,o,s){var d,u,l,c,m=2,p=function(){if(!l)if(n){if(l=!0,r(e.extend({timestamp:(new Date).getTime()},n)),f(),window.JSON&&window.sessionStorage)try{sessionStorage.setItem("storedGeolocationData654321",JSON.stringify(n))}catch(t){}}else o&&!m&&(l=!0,f(),o({code:2,message:"POSITION_UNAVAILABLE"}))},h=function(){m--,g(),p()},f=function(){e(document).off("google-loader",f),clearTimeout(u),clearTimeout(d)},g=function(){if(n||!window.google||!google.loader||!google.loader.ClientLocation)return!1;var t=google.loader.ClientLocation;return n={coords:{latitude:t.latitude,longitude:t.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:e.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},t.address)},!0},v=function(){if(!n&&(g(),!n&&window.JSON&&window.sessionStorage))try{n=sessionStorage.getItem("storedGeolocationData654321"),n=n?JSON.parse(n):!1,n.coords||(n=!1)}catch(e){n=!1}};return v(),n?(setTimeout(p,1),void 0):i.confirmText&&!confirm(i.confirmText.replace("{location}",location.hostname))?(o&&o({code:1,message:"PERMISSION_DENIED"}),void 0):(c=function(){e.ajax({url:"http://freegeoip.net/json/",dataType:"jsonp",cache:!0,jsonp:"callback",success:function(e){m--,e&&(n=n||{coords:{latitude:e.latitude,longitude:e.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:{city:e.city,country:e.country_name,countryCode:e.country_code,county:"",postalCode:e.zipcode,premises:"",region:e.region_name,street:"",streetNumber:""}},p())},error:function(){m--,p()}})},e.ajax?c():(t.ready("jajax",c),t.loader.loadList(["jajax"])),clearTimeout(u),window.google&&window.google.loader?m--:u=setTimeout(function(){i.destroyWrite&&(document.write=a,document.writeln=a),e(document).one("google-loader",h),t.loader.loadScript("http://www.google.com/jsapi",!1,"google-loader")},800),d=s&&s.timeout?setTimeout(function(){f(),o&&o({code:3,message:"TIMEOUT"})},s.timeout):setTimeout(function(){m=0,p()},1e4),void 0)},clearWatch:e.noop};return o.watchPosition=function(e,t,a){return o.getCurrentPosition(e,t,a),r++,r},o}()),t.ready("WINDOWLOAD",function(){t.loader.loadList(["jajax"])}),t.isReady("geolocation",!0)}(webshims.$),webshims.register("details",function(e,t,a,r,i,n){var o=function(t){var a=e(t).parent("details");return a[0]&&a.children(":first").get(0)===t?a:void 0},s=function(t,a){t=e(t),a=e(a);var r=e.data(a[0],"summaryElement");e.data(t[0],"detailsElement",a),r&&t[0]===r[0]||(r&&(r.hasClass("fallback-summary")?r.remove():r.off(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),e.data(a[0],"summaryElement",t),a.prop("open",a.prop("open")))},d=function(t){var a=e.data(t,"summaryElement");return a||(a=e(t).children("summary:first-child"),a[0]?s(a,t):(e(t).prependPolyfill('<summary class="fallback-summary">'+n.text+"</summary>"),a=e.data(t,"summaryElement"))),a};t.createElement("summary",function(){var a=o(this);if(a&&!e.data(this,"detailsElement")){var r,i,n=e.attr(this,"tabIndex")||"0";s(this,a),e(this).on({"focus.summaryPolyfill":function(){e(this).addClass("summary-has-focus")},"blur.summaryPolyfill":function(){e(this).removeClass("summary-has-focus")},"mouseenter.summaryPolyfill":function(){e(this).addClass("summary-has-hover")},"mouseleave.summaryPolyfill":function(){e(this).removeClass("summary-has-hover")},"click.summaryPolyfill":function(t){var a=o(this);if(a){if(!i&&t.originalEvent)return i=!0,t.stopImmediatePropagation(),t.preventDefault(),e(this).trigger("click"),i=!1,!1;clearTimeout(r),r=setTimeout(function(){t.isDefaultPrevented()||a.prop("open",!a.prop("open"))},0)}},"keydown.summaryPolyfill":function(t){13!=t.keyCode&&32!=t.keyCode||t.isDefaultPrevented()||(i=!0,t.preventDefault(),e(this).trigger("click"),i=!1)}}).attr({tabindex:n,role:"button"}).prepend('<span class="details-open-indicator" />'),t.moveToFirstEvent(this,"click")}});var u;t.defineNodeNamesBooleanProperty("details","open",function(t){var a=e(e.data(this,"summaryElement"));if(a){var r=t?"removeClass":"addClass",i=e(this);if(!u&&n.animate){i.stop().css({width:"",height:""});var o={width:i.width(),height:i.height()}}if(a.attr("aria-expanded",""+t),i[r]("closed-details-summary").children().not(a[0])[r]("closed-details-child"),!u&&n.animate){var s={width:i.width(),height:i.height()};i.css(o).animate(s,{complete:function(){e(this).css({width:"",height:""})}})}}}),t.createElement("details",function(){u=!0,d(this),e.prop(this,"open",e.prop(this,"open")),u=!1})}),webshims.register("mediaelement-jaris",function(e,t,a,r,i,n){"use strict";var o=t.mediaelement,s=a.swfmini,d=t.support,u=d.mediaelement,l=s.hasFlashPlayerVersion("9.0.115"),c=0,m="ActiveXObject"in a&&u,p={paused:!0,ended:!1,currentSrc:"",duration:a.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,seeking:!1,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),void 0):0},end:function(e){return e?(t.error("buffered index size error"),void 0):0},length:0}},h=Object.keys(p),f={currentTime:0,volume:1,muted:!1};Object.keys(f);var g=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,lastCalledTime:-500,_ppFlag:i,_calledMeta:!1,lastDuration:0,_timeDif:.3},p,f),v=function(e){try{e.nodeName}catch(a){return null}var r=t.data(e,"mediaelement");return r&&"third"==r.isActive?r:null},y=function(t,a){a=e.Event(a),a.preventDefault(),e.event.trigger(a,i,t)},T=n.playerPath||t.cfg.basePath+"swf/"+(n.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(n.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(n.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(n.attrs,{bgcolor:"#000000"});var w=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&t.readyState<3&&(t.readyState=e,y(t._elem,"canplay"),t.paused||y(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){w(4,t)},4e3)),e>=4&&t.readyState<4&&(t.readyState=e,y(t._elem,"canplaythrough")),t.readyState=e},k=function(t){t.seeking&&Math.abs(t.currentTime-t._lastSeektime)<2&&(t.seeking=!1,e(t._elem).triggerHandler("seeked"))};o.jarisEvent={};var _,b={onPlayPause:function(e,t,a){var r,i;if(null==a)try{r=t.api.api_get("isPlaying")}catch(n){}else r=a;r==t.paused&&(t.paused=!r,i=t.paused?"pause":"play",t._ppFlag=!0,y(t._elem,i),t.readyState<3&&w(3,t),t.paused||y(t._elem,"playing"))},onSeek:function(t,a){a._lastSeektime=t.seekTime,a.seeking=!0,e(a._elem).triggerHandler("seeking"),clearTimeout(a._seekedTimer),a._seekedTimer=setTimeout(function(){k(a),a.seeking=!1},300)},onConnectionFailed:function(e,t){o.setError(t._elem,"flash connection error")},onNotBuffering:function(e,t){w(3,t)},onDataInitialized:function(e,t){var a,r=t.duration;t.duration=e.duration,r==t.duration||isNaN(t.duration)||t._calledMeta&&(a=Math.abs(t.lastDuration-t.duration))<2||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),t.readyState<1&&w(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,y(t._elem,"durationchange")},a>50?0:a>9?9:99):(t.lastDuration=t.duration,t.duration&&y(t._elem,"durationchange"),t._calledMeta||y(t._elem,"loadedmetadata"),t._timeDif=t.duration>1&&t.duration<140?.2:t.duration<600?.25:.3),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),w(1,t),y(t._elem,"waiting")},onTimeUpdate:function(t,a){var r=a.currentTime-a.lastCalledTime;a.ended&&(a.ended=!1),a.readyState<3&&(w(3,a),y(a._elem,"playing")),a.seeking&&k(a),(r>a._timeDif||-.3>r)&&(a.lastCalledTime=a.currentTime,e.event.trigger("timeupdate",i,a._elem,!0))},onProgress:function(t,a){if(a.ended&&(a.ended=!1),a.duration&&!isNaN(a.duration)){var r=t.loaded/t.total;r>.02&&.2>r?w(3,a):r>.2&&(r>.95&&(r=1,a.networkState=1),w(4,a)),a._bufferedEnd&&a._bufferedEnd>r&&(a._bufferedStart=a.currentTime||0),a._bufferedEnd=r,a.buffered.length=1,e.event.trigger("progress",i,a._elem,!0)}},onPlaybackFinished:function(e,t){t.readyState<4&&w(4,t),t.ended=!0,y(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,y(t._elem,"volumechange"))},ready:function(){var a=function(e){var t=!0;try{e.api.api_get("volume")}catch(a){t=!1}return t};return function(r,i){var n=0,o=function(){return n>9?(i.tryedReframeing=0,void 0):(n++,i.tryedReframeing++,a(i)?(i.wasSwfReady=!0,i.tryedReframeing=0,x(i),E(i)):i.tryedReframeing<6?i.tryedReframeing<3?(i.reframeTimer=setTimeout(o,9),i.shadowElem.css({overflow:"visible"}),setTimeout(function(){i.shadowElem.css({overflow:"hidden"})},1)):(i.shadowElem.css({overflow:"hidden"}),e(i._elem).mediaLoad()):(clearTimeout(i.reframeTimer),t.error("reframing error")),void 0)};i&&i.api&&(i.tryedReframeing||(i.tryedReframeing=0),clearTimeout(_),clearTimeout(i.reframeTimer),i.shadowElem.removeClass("flashblocker-assumed"),n?i.reframeTimer=setTimeout(o,9):o())}}()};b.onMute=b.onVolumeChange;var E=function(e){var a,r=e.actionQueue.length,i=0;if(r&&"third"==e.isActive)for(;e.actionQueue.length&&r>i;){i++,a=e.actionQueue.shift();try{e.api[a.fn].apply(e.api,a.args)}catch(n){t.warn(n)}}e.actionQueue.length&&(e.actionQueue=[])},x=function(t){t&&((t._ppFlag===i&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===i||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(a){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},N=e.noop;if(u){var C={play:1,playing:1},S=["play","pause","playing","loadstart","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],P=S.map(function(e){return e+".webshimspolyfill"}).join(" "),A=function(a){var r=t.data(a.target,"mediaelement");if(r){var i=a.originalEvent&&a.originalEvent.type===a.type;i==("third"==r.activating)&&(a.stopImmediatePropagation(),C[a.type]&&(r.isActive!=r.activating?e(a.target).pause():i&&(e.prop(a.target,"pause")._supvalue||e.noop).apply(a.target)))}};N=function(a){e(a).off(P).on(P,A),S.forEach(function(e){t.moveToFirstEvent(a,e)})},N(r)}o.setActive=function(a,r,i){if(i||(i=t.data(a,"mediaelement")),i&&i.isActive!=r){"html5"!=r&&"third"!=r&&t.warn("wrong type for mediaelement activating: "+r);var n=t.data(a,"shadowData");i.activating=r,e(a).pause(),i.isActive=r,"third"==r?(n.shadowElement=n.shadowFocusElement=i.shadowElem[0],e(a).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(a).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),n.shadowElement=n.shadowFocusElement=!1),e(a).trigger("mediaelementapichange")}};var D=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","lastCalledTime","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","seeking","videoHeight","videoWidth"],t=e.length;return function(a){if(a){clearTimeout(a._seekedTimer);var r=t,i=a.networkState;for(w(0,a),clearTimeout(a._durationChangeTimer);--r>-1;)delete a[e[r]];a.actionQueue=[],a.buffered.length=0,i&&y(a._elem,"emptied")}}}(),L=function(){var i={},n=function(t){var a,n,o;return i[t.currentSrc]?a=i[t.currentSrc]:t.videoHeight&&t.videoWidth?(i[t.currentSrc]={width:t.videoWidth,height:t.videoHeight},a=i[t.currentSrc]):(n=e.attr(t._elem,"poster"))&&(a=i[n],a||(o=r.createElement("img"),o.onload=function(){i[n]={width:this.width,height:this.height},i[n].height&&i[n].width?j(t,e.prop(t._elem,"controls")):delete i[n],o.onload=null},o.src=n,o.complete&&o.onload&&o.onload())),a||{width:300,height:"video"==t._elemNodeName?150:50}},o=function(e,t){return e.style[t]||e.currentStyle&&e.currentStyle[t]||a.getComputedStyle&&(a.getComputedStyle(e,null)||{})[t]||""},s=["minWidth","maxWidth","minHeight","maxHeight"],d=function(e,t){var a,r,i=!1;for(a=0;4>a;a++)r=o(e,s[a]),parseFloat(r,10)&&(i=!0,t[s[a]]=r);return i},u=function(a){var r,i,s=a._elem,u={width:"auto"==o(s,"width"),height:"auto"==o(s,"height")},l={width:!u.width&&e(s).width(),height:!u.height&&e(s).height()};return(u.width||u.height)&&(r=n(a),i=r.width/r.height,u.width&&u.height?(l.width=r.width,l.height=r.height):u.width?l.width=l.height*i:u.height&&(l.height=l.width/i),d(s,l)&&(a.shadowElem.css(l),u.width&&(l.width=a.shadowElem.height()*i),u.height&&(l.height=(u.width?l.width:a.shadowElem.width())/i),u.width&&u.height&&(a.shadowElem.css(l),l.height=a.shadowElem.width()/i,l.width=l.height*i,a.shadowElem.css(l),l.width=a.shadowElem.height()*i,l.height=l.width/i),t.support.mediaelement||(l.width=a.shadowElem.width(),l.height=a.shadowElem.height()))),l};return u}(),j=function(t,a){var r,i=t.shadowElem;e(t._elem)[a?"addClass":"removeClass"]("webshims-controls"),("third"==t.isActive||"third"==t.activating)&&("audio"!=t._elemNodeName||a?(t._elem.style.display="",r=L(t),t._elem.style.display="none",i.css(r)):i.css({width:0,height:0}))},O=function(){var t={"":1,auto:1};return function(a){var r=e.attr(a,"preload");return null==r||"none"==r||e.prop(a,"autoplay")?!1:(r=e.prop(a,"preload"),!!(t[r]||"metadata"==r&&e(a).is(".preload-in-doubt, video:not([poster])")))}}(),I={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},F=function(e){return e.replace?e.replace(I.A,"%26").replace(I.a,"%26").replace(I.e,"%3D").replace(I.q,"%3F"):e};if("matchMedia"in a){var M=!1;try{M=a.matchMedia("only all").matches}catch(H){}M&&(o.sortMedia=function(e,t){try{e=!e.media||matchMedia(e.media).matches,t=!t.media||matchMedia(t.media).matches}catch(a){return 0}return e==t?0:e?-1:1})}o.createSWF=function(a,i,d){if(!l)return setTimeout(function(){e(a).mediaLoad()},1),void 0;var m={};1>c?c=1:c++,d||(d=t.data(a,"mediaelement")),((m.height=e.attr(a,"height")||"")||(m.width=e.attr(a,"width")||""))&&(e(a).css(m),t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull."));var p,h="audio/rtmp"==i.type||"video/rtmp"==i.type,f=e.extend({},n.vars,{poster:F(e.attr(a,"poster")&&e.prop(a,"poster")||""),source:F(i.streamId||i.srcProp),server:F(i.server||"")}),v=e(a).data("vars")||{},w=e.prop(a,"controls"),k="jarisplayer-"+t.getID(a),E=e.extend({},n.params,e(a).data("params")),x=a.nodeName.toLowerCase(),C=e.extend({},n.attrs,{name:k,id:k},e(a).data("attrs")),S=function(){"third"==d.isActive&&j(d,e.prop(a,"controls"))};return d&&d.swfCreated?(o.setActive(a,"third",d),d.currentSrc="",d.shadowElem.html('<div id="'+k+'">'),d.api=!1,d.actionQueue=[],p=d.shadowElem,D(d),d.currentSrc=i.srcProp):(e(r.getElementById("wrapper-"+k)).remove(),p=e('<div class="polyfill-'+x+" polyfill-mediaelement "+t.shadowClass+'" id="wrapper-'+k+'"><div id="'+k+'"></div>').css({position:"relative",overflow:"hidden"}),d=t.data(a,"mediaelement",t.objectCreate(g,{actionQueue:{value:[]},shadowElem:{value:p},_elemNodeName:{value:x},_elem:{value:a},currentSrc:{value:i.srcProp},swfCreated:{value:!0},id:{value:k.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),void 0):0},end:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),void 0):(d.duration-d._bufferedStart)*d._bufferedEnd+d._bufferedStart},length:0}}})),p.insertBefore(a),u&&e.extend(d,{volume:e.prop(a,"volume"),muted:e.prop(a,"muted"),paused:e.prop(a,"paused")}),t.addShadowDom(a,p),t.data(a,"mediaelement")||t.data(a,"mediaelement",d),N(a),o.setActive(a,"third",d),j(d,w),e(a).on({"updatemediaelementdimensions loadedmetadata emptied":S,remove:function(e){!e.originalEvent&&o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==a&&(delete o.jarisEvent[d.id],clearTimeout(_),clearTimeout(d.flashBlock))}}).onWSOff("updateshadowdom",S)),o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem!=a?(t.error("something went wrong"),void 0):(o.jarisEvent[d.id]||(o.jarisEvent[d.id]=function(e){if("ready"==e.type){var t=function(){d.api&&(d.paused||d.api.api_play(),O(a)&&d.api.api_preload(),b.ready(e,d))};d.api?t():setTimeout(t,9)}else d.currentTime=e.position,d.api&&(!d._calledMeta&&isNaN(e.duration)&&d.duration!=e.duration&&isNaN(d.duration)&&b.onDataInitialized(e,d),d._ppFlag||"onPlayPause"==e.type||b.onPlayPause(e,d),b[e.type]&&b[e.type](e,d)),d.duration=e.duration},o.jarisEvent[d.id].elem=a),e.extend(f,{id:k,evtId:d.id,controls:""+w,autostart:"false",nodename:x},v),h?f.streamtype="rtmp":"audio/mpeg"==i.type||"audio/mp3"==i.type?(f.type="audio",f.streamtype="file"):"video/youtube"==i.type&&(f.streamtype="youtube"),n.changeSWF(f,a,i,d,"embed"),clearTimeout(d.flashBlock),s.embedSWF(T,k,"100%","100%","9.0.115",!1,f,E,C,function(r){if(r.success){var i=function(){(!r.ref.parentNode&&p[0].parentNode||"none"==r.ref.style.display)&&(p.addClass("flashblocker-assumed"),e(a).trigger("flashblocker"),t.warn("flashblocker assumed")),e(r.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};d.api=r.ref,w||e(r.ref).attr("tabindex","-1").css("outline","none"),d.flashBlock=setTimeout(i,99),_||(clearTimeout(_),_=setTimeout(function(){i();var a=e(r.ref);a[0].offsetWidth>1&&a[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(a[0].offsetWidth<2||a[0].offsetHeight<2)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),a=null},8e3))}}),y(d._elem,"loadstart"),void 0)};var W=function(e,t,a,r){return r=r||v(e),r?(r.api&&r.api[t]?r.api[t].apply(r.api,a||[]):(r.actionQueue.push({fn:t,args:a}),r.actionQueue.length>10&&setTimeout(function(){r.actionQueue.length>5&&r.actionQueue.shift()},99)),r):!1};if(["audio","video"].forEach(function(a){var r,i={},n=function(e){("audio"!=a||"videoHeight"!=e&&"videoWidth"!=e)&&(i[e]={get:function(){var t=v(this);return t?t[e]:u&&r[e].prop._supget?r[e].prop._supget.apply(this):g[e]},writeable:!1})},o=function(e,t){n(e),delete i[e].writeable,i[e].set=t};o("seeking"),o("volume",function(e){var a=v(this);if(a)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),W(this,"api_volume",[e],a),a.volume!=e&&(a.volume=e,y(a._elem,"volumechange")),a=null);else if(r.volume.prop._supset)return r.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=v(this);if(t)e=!!e,W(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,y(t._elem,"volumechange")),t=null;else if(r.muted.prop._supset)return r.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=v(this);if(t)e*=1,isNaN(e)||W(this,"api_seek",[e],t);else if(r.currentTime.prop._supset)return r.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){i[e]={value:function(){var t=v(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),W(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,y(t._elem,e));else if(r[e].prop._supvalue)return r[e].prop._supvalue.apply(this,arguments)}}}),h.forEach(n),t.onNodeNamesPropertyModify(a,"controls",function(t,r){var i=v(this);e(this)[r?"addClass":"removeClass"]("webshims-controls"),i&&("audio"==a&&j(i,r),W(this,"api_controls",[r],i))}),t.onNodeNamesPropertyModify(a,"preload",function(){var a,r,i;O(this)&&(a=v(this),a?W(this,"api_preload",[],a):!m||!this.paused||this.error||e.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!e(this).is(":not(.nonnative-api-active)")||(i=this,r=t.data(i,"mediaelementBase")||t.data(i,"mediaelementBase",{}),clearTimeout(r.loadTimer),r.loadTimer=setTimeout(function(){e(i).mediaLoad()},9)))}),r=t.defineNodeNameProperties(a,i,"prop"),d.mediaDefaultMuted||t.defineNodeNameProperties(a,{defaultMuted:{get:function(){return null!=e.attr(this,"muted")},set:function(t){t?e.attr(this,"muted",""):e(this).removeAttr("muted")}}},"prop")}),l&&e.cleanData){var R=e.cleanData,B=r.createElement("object"),V={SetVariable:1,GetVariable:1,SetReturnValue:1,GetReturnValue:1},U={object:1,OBJECT:1};e.cleanData=function(e){var t,a,r,i=R.apply(this,arguments);if(e&&(a=e.length)&&c)for(t=0;a>t;t++)if(U[e[t].nodeName]&&"api_destroy"in e[t]){c--;try{if(e[t].api_destroy(),4==e[t].readyState)for(r in e[t])V[r]||B[r]||"function"!=typeof e[t][r]||(e[t][r]=null)}catch(n){console.log(n)}}return i}}if(u?"media"in r.createElement("source")||t.reflectProperties("source",["media"]):(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),t.reflectProperties("source",["type","media"]),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"),l&&t.ready("WINDOWLOAD",function(){setTimeout(function(){c||(r.createElement("img").src=T)},9)})),u&&l&&!n.preferFlash){var Q={3:1,4:1},z=function(a){var i,o,s;(e(a.target).is("audio, video")||(s=a.target.parentNode)&&e("source",s).last()[0]==a.target)&&(i=e(a.target).closest("audio, video"))&&!i.is(".nonnative-api-active")&&(o=i.prop("error"),setTimeout(function(){i.is(".nonnative-api-active")||(o&&Q[o.code]&&(n.preferFlash=!0,r.removeEventListener("error",z,!0),e("audio, video").each(function(){t.mediaelement.selectSource(this)}),t.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+a.target.currentSrc+" Mediaerror: "+i.prop("error")+" error.code: "+o.code)),t.warn("There was a mediaelement error. Run the following line in your console to get more info: webshim.mediaelement.loadDebugger();"))}))};r.addEventListener("error",z,!0),setTimeout(function(){e("audio, video").each(function(){var t=e.prop(this,"error");t&&Q[t]&&z({target:this})})})}}),webshims.register("track",function(e,t,a,r){"use strict";function i(e,a,i){3!=arguments.length&&t.error("wrong arguments.length for VTTCue.constructor"),this.startTime=e,this.endTime=a,this.text=i,this.onenter=null,this.onexit=null,this.pauseOnExit=!1,this.track=null,this.id=null,this.getCueAsHTML=function(){var e,t="",a="";return function(){var i,o;if(e||(e=r.createDocumentFragment()),t!=this.text)for(t=this.text,a=n.parseCueTextToHTML(t),T.innerHTML=a,i=0,o=T.childNodes.length;o>i;i++)e.appendChild(T.childNodes[i].cloneNode(!0));return e.cloneNode(!0)}}()}var n=t.mediaelement;(new Date).getTime();var o={subtitles:1,captions:1,descriptions:1},s=e("<track />"),d=t.support,u=d.ES5&&d.objectAccessor,l=function(e){var a={};return e.addEventListener=function(e,r){a[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+a[e]+" your fn was: "+r),a[e]=r},e.removeEventListener=function(e,r){a[e]&&a[e]!=r&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+a[e]+" your fn was: "+r),a[e]&&delete a[e]},e},c={getCueById:function(e){for(var t=null,a=0,r=this.length;r>a;a++)if(this[a].id===e){t=this[a];break}return t}},m={0:"disabled",1:"hidden",2:"showing"},p={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var a=this.cues[this.cues.length-1];a&&a.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=n.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var a=this.cues||[],r=0,i=a.length;if(e.track!=this)return t.error("cue not part of track"),void 0;for(;i>r;r++)if(a[r]===e){a.splice(r,1),e.track=null;break}return e.track?(t.error("cue not part of track"),void 0):void 0}},h=["kind","label","srclang"],f={srclang:"language"},g=function(a,r){var i,n,o=[],s=[],d=[];if(a||(a=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),r||(a.blockTrackListUpdate=!0,r=e.prop(this,"textTracks"),a.blockTrackListUpdate=!1),clearTimeout(a.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");d.push(t),-1==r.indexOf(t)&&s.push(t)}),a.scriptedTextTracks)for(i=0,n=a.scriptedTextTracks.length;n>i;i++)d.push(a.scriptedTextTracks[i]),-1==r.indexOf(a.scriptedTextTracks[i])&&s.push(a.scriptedTextTracks[i]);for(i=0,n=r.length;n>i;i++)-1==d.indexOf(r[i])&&o.push(r[i]);if(o.length||s.length){for(r.splice(0),i=0,n=d.length;n>i;i++)r.push(d[i]);for(i=0,n=o.length;n>i;i++)e([r]).triggerHandler(e.Event({type:"removetrack",track:o[i]}));for(i=0,n=s.length;n>i;i++)e([r]).triggerHandler(e.Event({type:"addtrack",track:s[i]}));(a.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},v=function(a,r){r||(r=t.data(a,"trackData")),r&&!r.isTriggering&&(r.isTriggering=!0,setTimeout(function(){e(a).closest("audio, video").triggerHandler("updatetrackdisplay"),r.isTriggering=!1},1))},y=function(){var a={subtitles:{subtitles:1,captions:1},descriptions:{descriptions:1},chapters:{chapters:1}};return a.captions=a.subtitles,function(r){var i,n,o=e.prop(r,"default");return o&&"metadata"!=(i=e.prop(r,"kind"))&&(n=e(r).parent().find("track[default]").filter(function(){return!!a[i][e.prop(this,"kind")]})[0],n!=r&&(o=!1,t.error("more than one default track of a specific kind detected. Fall back to default = false"))),o}}(),T=e("<div />")[0];a.VTTCue=i,a.TextTrackCue=function(){t.error("Use VTTCue constructor instead of abstract TextTrackCue constructor."),i.apply(this,arguments)},a.TextTrackCue.prototype=i.prototype,n.createCueList=function(){return e.extend([],c)},n.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,a=/\<\s*\//,r=function(e,t,r,i){var n;return a.test(i)?n="</"+e+">":(r.splice(0,1),n="<"+e+" "+t+'="'+r.join(" ").replace(/\"/g,"&#34;")+'">'),n},i=function(e){var a=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return a[0]&&(a[0]=a[0].toLowerCase(),t.test(a[0])?"c"==a[0]?e=r("span","class",a,e):"v"==a[0]&&(e=r("q","title",a,e)):e=""),e};return function(t){return t.replace(e,i)}}();var w=function(t){var a=t+"",r=this.getAttribute("begin")||"",i=this.getAttribute("end")||"",n=e.trim(e.text(this));return/\./.test(r)||(r+=".000"),/\./.test(i)||(i+=".000"),a+="\n",a+=r+" --> "+i+"\n",a+=n},k=function(t){return t=e.parseXML(t)||[],e(t).find("[begin][end]").map(w).get().join("\n\n")||""},_=0;n.loadTextTrack=function(a,r,i,s){var d="play playing loadedmetadata loadstart",u=i.track,l=function(){var o,s,c,m="disabled"==u.mode,p=!(!(e.prop(a,"readyState")>0||2==e.prop(a,"networkState"))&&e.prop(a,"paused")),h=(!m||p)&&e.attr(r,"src")&&e.prop(r,"src");if(h&&(e(a).off(d,l).off("updatetrackdisplay",l),!i.readyState)){o=function(){_--,i.readyState=3,u.cues=null,u.activeCues=u.shimActiveCues=u._shimActiveCues=null,e(r).triggerHandler("error")},i.readyState=1;try{u.cues=n.createCueList(),u.activeCues=u.shimActiveCues=u._shimActiveCues=n.createCueList(),_++,c=function(){s=e.ajax({dataType:"text",url:h,success:function(d){_--;var l=s.getResponseHeader("content-type")||"";l.indexOf("application/xml")?l.indexOf("text/vtt")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"):d=k(d),n.parseCaptions(d,u,function(t){t&&"length"in t?(i.readyState=2,e(r).triggerHandler("load"),e(a).triggerHandler("updatetrackdisplay")):o()})},error:o})},e.ajax&&e.ajaxSettings.xhr?m?setTimeout(c,2*_):c():(t.ready("jajax",c),t.loader.loadList(["jajax"]))}catch(f){o(),t.error(f)}}};i.readyState=0,u.shimActiveCues=null,u._shimActiveCues=null,u.activeCues=null,u.cues=null,e(a).on(d,l),s?(u.mode=o[u.kind]?"showing":"hidden",l()):e(a).on("updatetrackdisplay",l)},n.createTextTrack=function(a,r){var i,o;return r.nodeName&&(o=t.data(r,"trackData"),o&&(v(r,o),i=o.track)),i||(i=l(t.objectCreate(p)),u||h.forEach(function(t){var a=e.prop(r,t);a&&(i[f[t]||t]=a)}),r.nodeName?(u&&h.forEach(function(a){t.defineProperty(i,f[a]||a,{get:function(){return e.prop(r,a)}})}),i.id=e(r).prop("id"),o=t.data(r,"trackData",{track:i}),n.loadTextTrack(a,r,o,y(r))):(u&&h.forEach(function(e){t.defineProperty(i,f[e]||e,{value:r[e],writeable:!1})}),i.cues=n.createCueList(),i.activeCues=i._shimActiveCues=i.shimActiveCues=n.createCueList(),i.mode="hidden",i.readyState=2),"subtitles"!=i.kind||i.language||t.error("you must provide a language for track in subtitles state"),i.__wsmode=i.mode),i},n.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,a=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,r=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,n=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g,o=/^(\d{2})?:?(\d{2}):(\d{2})[\.\,](\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})[\.\,](\d+)\s*(.*)/;return function(s){var d,u,l,c,m,p,h,f,g;if(a.exec(s)||n.exec(s)||r.exec(s))return null;for(d=s.split(/\n/g);!d[0].replace(/\s+/gi,"").length&&d.length>0;)d.shift();for(d[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(h=String(d.shift().replace(/\s*/gi,""))),p=0;p<d.length;p++){var v=d[p];((f=e.exec(v))||(f=o.exec(v)))&&(m=f.slice(1),u=parseInt(60*60*(m[0]||0),10)+parseInt(60*(m[1]||0),10)+parseInt(m[2]||0,10)+parseFloat("0."+(m[3]||0)),l=parseInt(60*60*(m[4]||0),10)+parseInt(60*(m[5]||0),10)+parseInt(m[6]||0,10)+parseFloat("0."+(m[7]||0))),d=d.slice(0,p).concat(d.slice(p+1));break}return u||l?(c=d.join("\n"),g=new i(u,l,c),h&&(g.id=h),g):(t.warn("couldn't extract time information: "+[u,l,d.join("\n"),h].join(" ; ")),null)}}(),n.parseCaptions=function(e,a,r){var i,o,s,d,u;n.createCueList(),e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(l,c){for(;c>l;l++)if(i=e[l],s.test(i)?u=!0:i.replace(/\s*/gi,"").length&&(i=n.parseCaptionChunk(i,l),i&&a.addCue(i)),d<(new Date).getTime()-30){l++,setTimeout(function(){d=(new Date).getTime(),o(l,c)},90);break}l>=c&&(u||t.error("please use WebVTT format. This is the standard"),r(a.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){d=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},n.createTrackList=function(a,r){return r=r||t.data(a,"mediaelementBase")||t.data(a,"mediaelementBase",{}),r.textTracks||(r.textTracks=[],t.defineProperties(r.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:{value:function(e){for(var t=null,a=0;a<r.textTracks.length;a++)if(e==r.textTracks[a].id){t=r.textTracks[a];break}return t}}}),l(r.textTracks),e(a).on("updatetrackdisplay",function(){for(var t,a=0;a<r.textTracks.length;a++)t=r.textTracks[a],t.__wsmode!=t.mode&&(t.__wsmode=t.mode,e([r.textTracks]).triggerHandler("change"))})),r.textTracks},d.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:d.track?{set:function(e){var a=t.data(this,"trackData");this.setAttribute("data-kind",e),a&&(a.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(h,function(a,r){var i=f[r]||r;t.onNodeNamesPropertyModify("track",r,function(){var a=t.data(this,"trackData");a&&("kind"==r&&v(this,a),u||(a.track[i]=e.prop(this,r)))})}),t.onNodeNamesPropertyModify("track","src",function(a){if(a){var r,i=t.data(this,"trackData");i&&(r=e(this).closest("video, audio"),r[0]&&n.loadTextTrack(r,this,i))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(t.data(this,"trackData")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return n.createTextTrack(e(this).closest("audio, video")[0],this)
},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,a=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),r=n.createTrackList(e,a);return a.blockTrackListUpdate||g.call(e,a,r),r},writeable:!1},addTextTrack:{value:function(e,a,r){var i=n.createTextTrack(this,{kind:s.prop("kind",e||"").prop("kind"),label:a||"",srclang:r||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(i),g.call(this),i}}},"prop");var b=function(a){if(e(a.target).is("audio, video")){var r=t.data(a.target,"mediaelementBase");r&&(clearTimeout(r.updateTrackListTimer),r.updateTrackListTimer=setTimeout(function(){g.call(a.target,r)},0))}},E=function(e,t){return t.readyState||e.readyState},x=function(e){e.originalEvent&&e.stopImmediatePropagation()},N=function(){if(t.implement(this,"track")){var a,r=this.track;r&&(t.bugs.track||!r.mode&&!E(this,r)||(e.prop(this,"track").mode=m[r.mode]||r.mode),a=e.prop(this,"kind"),r.mode="string"==typeof r.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:a})),e(this).on("load error",x)}};t.addReady(function(a,r){var i=r.filter("video, audio, track").closest("audio, video");e("video, audio",a).add(i).each(function(){g.call(this)}).on("emptied updatetracklist wsmediareload",b).each(function(){if(d.track){var a=e.prop(this,"textTracks"),r=this.textTracks;a.length!=r.length&&t.warn("textTracks couldn't be copied"),e("track",this).each(N)}}),i.each(function(){var e=this,a=t.data(e,"mediaelementBase");a&&(clearTimeout(a.updateTrackListTimer),a.updateTrackListTimer=setTimeout(function(){g.call(e,a)},9))})}),d.texttrackapi&&e("video, audio").trigger("trackapichange")});