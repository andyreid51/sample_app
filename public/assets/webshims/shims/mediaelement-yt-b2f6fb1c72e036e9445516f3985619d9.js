webshims.register("mediaelement-yt",function(e,t,a,i,r){"use strict";var n=t.mediaelement,d=e.Deferred();a.onYouTubePlayerAPIReady=function(){d.resolve()},a.YT&&YT.Player&&a.onYouTubePlayerAPIReady();var o={paused:!0,ended:!1,currentSrc:"",duration:a.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),void 0):0},end:function(e){return e?(t.error("buffered index size error"),void 0):0},length:0}},l=Object.keys(o),u={currentTime:0,volume:1,muted:!1};Object.keys(u);var h=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_metadata:!1,_callMeta:!1,currentTime:0,_buffered:0,_ppFlag:r},o,u),s=function(t,a){a=e.Event(a),a.preventDefault(),e.event.trigger(a,r,t)},c=function(){var e=["_buffered","_metadata","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth","_callMeta"],t=e.length;return function(a){if(a){var i=t,r=a.networkState;for(a.readyState=0;--i;)delete a[e[i]];a.buffered.length=0,clearInterval(a._timeInterval),r&&s(a._elem,"emptied")}}}(),m=function(){var t={},r=function(a){var r,n,d;return t[a.currentSrc]?r=t[a.currentSrc]:a.videoHeight&&a.videoWidth?(t[a.currentSrc]={width:a.videoWidth,height:a.videoHeight},r=t[a.currentSrc]):(n=e.attr(a._elem,"poster"))&&(r=t[n],r||(d=i.createElement("img"),d.onload=function(){t[n]={width:this.width,height:this.height},t[n].height&&t[n].width?g(a,e.prop(a._elem,"controls")):delete t[n],d.onload=null},d.src=n,d.complete&&d.onload&&d.onload())),r||{width:300,height:"video"==a._elemNodeName?150:50}},n=function(e,t){return e.style[t]||e.currentStyle&&e.currentStyle[t]||a.getComputedStyle&&(a.getComputedStyle(e,null)||{})[t]||""},d=["minWidth","maxWidth","minHeight","maxHeight"],o=function(e,t){var a,i,r=!1;for(a=0;4>a;a++)i=n(e,d[a]),parseFloat(i,10)&&(r=!0,t[d[a]]=i);return r},l=function(t){var a,i,d=t._elem,l={width:"auto"==n(d,"width"),height:"auto"==n(d,"height")},u={width:!l.width&&e(d).width(),height:!l.height&&e(d).height()};return(l.width||l.height)&&(a=r(t),i=a.width/a.height,l.width&&l.height?(u.width=a.width,u.height=a.height):l.width?u.width=u.height*i:l.height&&(u.height=u.width/i),o(d,u)&&(t.shadowElem.css(u),l.width&&(u.width=t.shadowElem.height()*i),l.height&&(u.height=(l.width?u.width:t.shadowElem.width())/i),l.width&&l.height&&(t.shadowElem.css(u),u.height=t.shadowElem.width()/i,u.width=u.height*i,t.shadowElem.css(u),u.width=t.shadowElem.height()*i,u.height=u.width/i))),u};return l}(),g=function(e){var t;e._elem;var i=e.shadowElem;"third"==e.isActive&&(e&&e._ytAPI&&e._ytAPI.getPlaybackQuality&&(a.ytapi=e._ytAPI),e._elem.style.display="",t=m(e),e._elem.style.display="none",i.css(t))},v=function(e){try{e.nodeName}catch(a){return null}var i=t.data(e,"mediaelement");return i&&"third"==i.isActive?i:null},f=/vq\=(small|medium|large|hd720|hd1080|highres)/i,p=function(a){var i,r=(a.match(f)||["",""])[1].toLowerCase();return a=a.split("?"),-1!=a[0].indexOf("youtube.com/watch")&&a[1]?(a=a[1].split("&"),e.each(a,function(e,t){return t=t.split("="),"v"==t[0]?(a=t[1],i=!0,!1):void 0})):-1!=a[0].indexOf("youtube.com/v/")&&(a=a[0].split("/"),e.each(a,function(e,t){return i?(a=t,!1):("v"==t&&(i=!0),void 0)})),i||t.error("no youtube id found: "+a),{videoId:a,suggestedQuality:r}},y=function(t){t&&(t._ppFlag===r&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===r||!t.paused))try{e(t._elem).play()}catch(a){}},1)},w=e.noop;!function(){var a={play:1,playing:1},r=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","loadstart","durationchange","emptied"],n=r.map(function(e){return e+".webshimspolyfill"}).join(" "),d=function(i){var r=t.data(i.target,"mediaelement");if(r){var n=i.originalEvent&&i.originalEvent.type===i.type;n==("third"==r.activating)&&(i.stopImmediatePropagation(),a[i.type]&&r.isActive!=r.activating&&e(i.target).pause())}};w=function(a){e(a).off(n).on(n,d),r.forEach(function(e){t.moveToFirstEvent(a,e)})},w(i)}(),e(i).on("emptied",function(e){var t=v(e.target);y(t)}),n.setActive=function(a,i,r){if(r||(r=t.data(a,"mediaelement")),r&&r.isActive!=i){"html5"!=i&&"third"!=i&&t.warn("wrong type for mediaelement activating: "+i);var n=t.data(a,"shadowData");r.activating=i,e(a).pause(),r.isActive=i,"third"==i?(n.shadowElement=n.shadowFocusElement=r.shadowElem[0],e(a).addClass("yt-api-active nonnative-api-active").hide().getShadowElement().show()):(clearInterval(r._timeInterval),e(a).removeClass("yt-api-active nonnative-api-active").show().getShadowElement().hide(),n.shadowElement=n.shadowFocusElement=!1),e(a).trigger("mediaelementapichange")}};var _=function(t,a){a._ppFlag=!0,"playing"==t&&(_("play",a),a.readyState<3&&(a.readyState=3,s(a._elem,"canplay")),e(a._elem).trigger("playing")),"play"==t&&a.paused?(a.paused=!1,s(a._elem,"play")):"pause"!=t||a.paused||(a.paused=!0,s(a._elem,"pause"))},I={small:{height:240,width:320},medium:{height:360,width:640},large:{height:480,width:853},hd720:{height:720,width:1280},hd1080:{height:1080,width:1920},highres:{height:1080,width:1920}},P=function(t,a,i,r){d.done(function(){var n=function(){var a,r;i._metadata&&i._ytAPI.getVideoLoadedFraction&&(r=i._ytAPI.getVideoLoadedFraction(),a=r*i.duration,i._buffered!==a&&(i._buffered=a,i.buffered.length=1,e(t).trigger("progress")),r>.99&&(i.networkState=1),i.readyState<4&&i.currentTime&&(i._buffered-i.currentTime>9||r>.9)&&(i.readyState=4,s(i._elem,"canplaythrough")))},d=function(){if(i._ytAPI&&i._ytAPI.getCurrentTime){var a=i._ytAPI.getCurrentTime();i.currentTime!=a&&(i.currentTime=a,e(t).trigger("timeupdate")),n()}},o=function(){if("third"==i.isActive&&i._ytAPI&&i._ytAPI.getVolume){var a,r=i._ytAPI.getVolume()/100,o=i._ytAPI.isMuted();r!=i.volume&&(i.volume=r,a=!0),o!=i.muted&&(i.muted=o,a=!0),d(),n(),a&&e(t).trigger("volumechange")}},l=function(){clearInterval(i._timeInterval),i._timeInterval=setInterval(function(){var a=i._ytAPI.getCurrentTime();i.currentTime!=a&&(i.currentTime=a,e(t).trigger("timeupdate"))},350)};i._metatrys=0,i._ytAPI=new YT.Player(a,{height:"100%",width:"100%",allowfullscreen:"allowfullscreen",webkitallowfullscreen:"allowfullscreen",playerVars:{allowfullscreen:!0,fs:1,rel:0,showinfo:0,autohide:1,controls:e.prop(t,"controls")?1:0},videoId:r.videoId,events:{onReady:function(){y(i),setTimeout(o,9),setInterval(o,5e3)},onStateChange:function(a){if(a.target.getDuration){var n;if(!i._metadata){r.suggestedQuality&&i._ytAPI.setPlaybackQuality(r.suggestedQuality);var d=a.target.getDuration(),u=a.target.getPlaybackQuality();d&&(i._metadata=!0,i.duration=d,i.readyState<1&&(i.readyState=1),i.networkState<1&&(i.networkState=2),n=!0,I[u]||(u="medium"),i.videoHeight=I[u].height,i.videoWidth=I[u].width),d&&i._metatrys<3&&("unknown"==u||r.suggestedQuality&&u!=r.suggestedQuality)?(i._metatrys++,i._metadata=!1,n=!1):i._metatrys=0}n&&e(t).trigger("durationchange").trigger("loadedmetadata"),setTimeout(o,9),1==a.data?(_("playing",i),l()):2==a.data?(clearInterval(i._timeInterval),_("pause",i)):3==a.data?(i.readyState>2&&(i.readyState=2),i.networkState=2,e(t).trigger("waiting")):0===a.data&&(i.readyState>4&&(i.readyState=4),i.networkState=1,clearInterval(i._timeInterval),e(t).trigger("ended"))}}}}),e(t).on("updateytdata",o)})};if("matchMedia"in a){var A=!1;try{A=a.matchMedia("only all").matches}catch(S){}A&&(n.sortMedia=function(e,t){return e=!e.media||matchMedia(e.media).matches,t=!t.media||matchMedia(t.media).matches,e==t?0:e?-1:1})}n.createSWF=function(a,i,r){r||(r=t.data(a,"mediaelement"));var o="yt-"+t.getID(a),l=p(i.src),u=e.prop(a,"controls"),m={};if(((m.height=e.attr(a,"height")||"")||(m.width=e.attr(a,"width")||""))&&(e(a).css(m),t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.")),r)return n.setActive(a,"third",r),r.currentSrc="",c(r),r.currentSrc=i.srcProp,u!=r._hasControls?(r.shadowElem.html('<div id="'+o+'">'),P(a,o,r,l)):d.done(function(){r._ytAPI.cueVideoById&&r._ytAPI.cueVideoById(l)}),r._hasControls=u,s(r._elem,"loadstart"),void 0;var v=e('<div class="polyfill-video polyfill-mediaelement '+t.shadowClass+'" id="wrapper-'+o+'"><div id="'+o+'"></div>').css({position:"relative",overflow:"hidden"}),f=function(){g(r)};r=t.data(a,"mediaelement",t.objectCreate(h,{shadowElem:{value:v},_elem:{value:a},_hasControls:{value:u},currentSrc:{value:i.srcProp},buffered:{value:{start:function(e){return e>=r.buffered.length?(t.error("buffered index size error"),void 0):0},end:function(e){return e>=r.buffered.length?(t.error("buffered index size error"),void 0):r._buffered},length:0}}})),t.addShadowDom(a,v),n.setActive(a,"third",r),w(a),v.insertBefore(a),g(r),P(a,o,r,l),e(a).on("updatemediaelementdimensions loadedmetadata emptied",f).onWSOff("updateshadowdom",f),s(r._elem,"loadstart")},function(){var a,i=function(t){clearTimeout(t.updateDataTimer),t.updateDataTimer=setTimeout(function(){e(t._elem).triggerHandler("updateytdata")},9)},r={},n=function(e){r[e]={get:function(){var t=v(this);return t?t[e]:a[e].prop._supget.apply(this)},writeable:!1}},d=function(e,t){n(e),delete r[e].writeable,r[e].set=t};l.forEach(n),d("currentTime",function(e){var t=v(this);return t?(e*=1,!isNaN(e)&&t._ytAPI&&t._ytAPI.seekTo&&(t._ytAPI.seekTo(e),i(t)),void 0):a.currentTime.prop._supset.apply(this,arguments)}),d("muted",function(e){var t=v(this);return t?(t._ytAPI&&t._ytAPI.mute&&(t._ytAPI[e?"mute":"unMute"](),i(t)),void 0):a.muted.prop._supset.apply(this,arguments)}),d("volume",function(e){var r=v(this);return r?(e*=100,!isNaN(e)&&r._ytAPI&&r._ytAPI.setVolume&&((0>e||e>100)&&t.error("volume greater or less than allowed "+e/100),r._ytAPI.setVolume(e),i(r)),void 0):a.volume.prop._supset.apply(this,arguments)}),e.each(["play","pause"],function(e,t){var i=t+"Video";r[t]={value:function(){var e=v(this);return e?(e._ytAPI&&e._ytAPI[i]&&(e._ytAPI[i](),_(t,e)),void 0):a[t].prop._supvalue.apply(this,arguments)}}}),a=t.defineNodeNameProperties("video",r,"prop"),t.onNodeNamesPropertyModify("video","controls",function(t,a){var i=v(this);e(this)[a?"addClass":"removeClass"]("webshims-controls"),i&&i._ytAPI&&!i.readyState&&e(this).mediaLoad()})}()});