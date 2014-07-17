webshims.register("jmebase",function(e,t,a,r,n){"use strict";var i={},s={},o=Array.prototype.slice,d=0,l=e.extend({selector:".mediaplayer"},t.cfg.mediaelement.jme),u=l.selector;t.cfg.mediaelement.jme=l,e.jme||(e.jme={}),e.extend(e.jme,{pluginsClasses:[],pluginsSel:"",plugins:{},props:i,fns:s,data:function(t,a,r){var i=e(t).data("jme")||e.data(t,"jme",{});return r===n?a?i[a]:i:(i[a]=r,void 0)},runPlugin:function(t){d&&e(document.querySelectorAll(u)).each(function(){var a=this.querySelectorAll(t);a.length&&e(this).jmeFn("addControls",a)})},registerPlugin:function(t,a){this.plugins[t]=a,a.nodeName||(a.nodeName=""),a.className||(a.className=t),this.pluginsClasses.push("."+a.className),this.pluginsSel=this.pluginsClasses.join(", "),l[t]=e.extend(a.options||{},l[t]),l[t]&&l[t].text?a.text=l[t].text:l.i18n&&l.i18n[t]&&(a.text=l.i18n[t]),this.runPlugin("."+a.className)},configmenuPlugins:{},addToConfigmenu:function(e,t){this.configmenuPlugins[e]=t},defineMethod:function(e,t){s[e]=t},defineProp:function(t,a){a||(a={}),a.set||(a.set=a.readonly?function(){throw t+" is readonly"}:e.noop),a.get||(a.get=function(a){return e.jme.data(a,t)}),i[t]=a},prop:function(t,a,r){if(!i[a])return e.prop(t,a,r);if(r===n)return i[a].get(t);var s=i[a].set(t,r);s===n&&(s=r),"noDataSet"!=s&&e.jme.data(t,a,s)}}),e.fn.jmeProp=function(t,a){return e.access(this,e.jme.prop,t,a,arguments.length>1)},e.fn.jmeFn=function(a){var r,i=o.call(arguments,1);return this.each(function(){return e.jme.data(this).media||(e(this).closest(u).jmePlayer(),t.warn("jmeFn called to early or on wrong element!")),r=(s[a]||e.prop(this,a)).apply(this,i),r!==n?!1:void 0}),r!==n?r:this};var c={emptied:1,pause:1},p={canplay:1,canplaythrough:1};e.jme.initJME=function(t,a){d+=e(t.querySelectorAll(u)).add(a.filter(u)).jmePlayer().length},e.jme.getDOMList=function(t){var a=[];return t||(t=[]),"string"==typeof t&&(t=t.split(" ")),e.each(t,function(e,t){t&&(t=document.getElementById(t),t&&a.push(t))}),a},e.jme.getButtonText=function(t,a){var r,n,i=function(i){n!==i&&(n=i,t.removeClass(a[i?0:1]).addClass(a[i]),r&&(t.prop("checked",!!i),(t.data("checkboxradio")||{refresh:e.noop}).refresh()))};return t.is('[type="checkbox"], [type="radio"]')?(t.prop("checked",function(){return this.defaultChecked}),r=!0):t.is("a")&&t.on("click",function(e){e.preventDefault()}),i},e.fn.jmePlayer=function(){return this.each(function(){var t,a,r,n,i,s,o,d=e("audio, video",this).eq(0),u=e(this),m=e.jme.data(this),f=e.jme.data(d[0]);u.addClass(d.prop("nodeName").toLowerCase()+"player"),f.player=u,f.media=d,m.media||(o=function(){u[0].className=u[0].className},r=function(){d.off("canplay",a),clearTimeout(n)},a=function(){var e=d.prop("paused")?"idle":"playing";u.attr("data-state",e)},t=function(t){var l,m,f=t.type;r(),p[f]&&"waiting"!=i||s&&"emptied"==f||("ended"==f||e.prop(this,"ended")?f="ended":"waiting"==f?e.prop(this,"readyState")>2?f="":(n=setTimeout(function(){d.prop("readyState")>2&&a()},9),d.on("canPlay",a)):c[f]?f="idle":(l=e.prop(this,"readyState"),m=e.prop(this,"paused"),f=!m&&3>l?"waiting":!m&&l>2?"playing":"idle"),"idle"==f&&u._seekpause&&(f=!1),f&&(i=f,u.attr("data-state",f),setTimeout(o)))},m.media=d,m.player=u,d.on("ended emptied play",function(){var e,t=function(){s=!1},a=function(){r(),d.jmeFn("pause"),l.noReload||!d.prop("ended")||!d.prop("paused")||d.prop("autoplay")||d.prop("loop")||d.hasClass("no-reload")||(s=!0,d.jmeFn("load"),u.attr("data-state","ended"),setTimeout(t))};return function(t){clearTimeout(e),"ended"!=t.type||l.noReload||d.prop("autoplay")||d.prop("loop")||d.hasClass("no-reload")||(e=setTimeout(a))}}()).on("emptied waiting canplay canplaythrough playing ended pause mediaerror",t).on("volumechange updateJMEState",function(){var t=e.prop(this,"volume");u[!t||e.prop(this,"muted")?"addClass":"removeClass"]("state-muted"),t=.01>t?"no":.36>t?"low":.7>t?"medium":"high",u.attr("data-volume",t)}),e.jme.pluginsSel&&u.jmeFn("addControls",e(u[0].querySelectorAll(e.jme.pluginsSel))),t&&d.on("updateJMEState",t).triggerHandler("updateJMEState"))})},e.jme.defineProp("isPlaying",{get:function(t){return!e.prop(t,"ended")&&!e.prop(t,"paused")&&e.prop(t,"readyState")>1&&!e.data(t,"mediaerror")},readonly:!0}),e.jme.defineProp("player",{readonly:!0}),e.jme.defineProp("media",{readonly:!0}),e.jme.defineProp("srces",{get:function(t){var a,r=e.jme.data(t),n=r.media.prop("src");return n?[{src:n}]:a=e.map(e("source",r.media).get(),function(t){var a,r,n={src:e.prop(t,"src")},i=t.attributes;for(a=0,r=i.length;r>a;a++)"specified"in i[a]&&!i[a].specified||(n[i[a].nodeName]=i[a].nodeValue);return n})},set:function(t,a){var r=e.jme.data(t),n=function(t,a){"string"==typeof a&&(a={src:a}),e(document.createElement("source")).attr(a).appendTo(r.media)};return r.media.removeAttr("src").find("source").remove(),e.isArray(a)?e.each(a,n):n(0,a),r.media.jmeFn("load"),"noDataSet"}}),e.jme.defineMethod("togglePlay",function(){e(this).jmeFn(i.isPlaying.get(this)?"pause":"play")}),e.jme.defineMethod("addControls",function(t){var a=e.jme.data(this)||{};if(a.media){var r=e.jme.data(a.player[0],"controlElements")||e([]);t=e(t),e.jme.pluginsSel&&(t=t.find(e.jme.pluginsSel).add(t.filter(e.jme.pluginsSel))),t.length&&(e.each(e.jme.plugins,function(r,n){var i,s,o,d,l=t.filter("."+n.className);for(o=0;o<l.length;o++)if(i=e(l[o]),s=e.jme.data(l[o]),s.player=a.player,s.media=a.media,!s._rendered){if(s._rendered=!0,n.options)for(d in n.options)d in s||(s[d]=n.options[d]);n._create(i,a.media,a.player,s)}}),e.jme.data(a.player[0],"controlElements",r.add(t)),a.player.triggerHandler("controlsadded"))}}),t.ready("DOM mediaelement",function(){t.isReady("jme",!0),t.addReady(e.jme.initJME),t.isReady("jme-base",!0),t.cfg.debug!==!1&&document.getElementsByTagName("video").length&&!document.querySelector(u)&&t.warn("found video element but video wasn't wrapped inside a ."+u+" element. Will not add control UI")})}),webshims.register("mediacontrols",function(e,t,a){"use strict";var r=t.cfg.mediaelement.jme,n=r.selector,i=e.jme,s='<div class="{%class%}"></div>',o='<button class="{%class%}" type="button" aria-label="{%text%}"></button>',d='<div class="{%class%} media-range" aria-label="{%text%}"></div>',l='<div  class="{%class%}">00:00</div>',u=function(){var e,t="";if(a.Audio)try{e=new Audio,e.volume=.55,t=.55==Math.round(100*e.volume)/100?"":" no-volume-api"}catch(r){}return t}(),c=function(){var e={},a=/\{\{(.+?)\}\}/gim;return function(n,o){return n||(n=r.barTemplate),(!e[n]||o)&&(e[n]=n.replace(a,function(e,a){var r=i.plugins[a];return r?(r.structure||(t.warn("no structure option provided for plugin: "+a+". Fallback to standard div"),r.structure=s),r.structure.replace("{%class%}",a).replace("{%text%}",r.text||"")):e})),e[n]||""}}(),p=/iP(hone|od|ad)/i.test(navigator.platform)&&parseInt((navigator.appVersion.match(/OS (\d+)_\d+/)||["","8"])[1],10)<7,m=function(){m.loaded||(m.loaded=!0,t.loader.loadList(["mediacontrols-lazy","range-ui"]))},f=function(a){a||(a="_create");var r=function(n,i){var s=this,o=arguments;m(),t.ready("mediacontrols-lazy",function(){return r!=s[a]&&e.data(i[0])?s[a].apply(s,o):(t.error("stop too much recursion"),void 0)})};return r};t.loader.addModule("mediacontrols-lazy",{src:"jme/mediacontrols-lazy"});var g={_create:f()};i.plugins.useractivity=g,i.defineProp("controlbar",{set:function(n,s){s=!!s;var o,d,l=i.data(n),u=e("div.jme-mediaoverlay, div.jme-controlbar",l.player),m="";if(s&&!u[0])if(l._controlbar)l._controlbar.appendTo(l.player);else{p&&(l.media.removeAttr("controls"),l.media.mediaLoad()),l.media.prop("controls",!1),m=c(),l._controlbar=e(r.barStructure),u=l._controlbar.find("div.jme-cb-box").addClass("media-controls"),o=l._controlbar.filter(".jme-media-overlay"),o=o.add(u),e(m).appendTo(u),l._controlbar.appendTo(l.player),l.player.jmeFn("addControls",o),d=function(){var e={},t=[{size:290,name:"xx-small",names:"s xs xxs"},{size:380,name:"x-small",names:"s xs"},{size:478,name:"small",names:"s"},{size:756,name:"medium",names:"m"},{size:1024,name:"large",names:"l"},{size:Number.MAX_VALUE,name:"x-large",names:"l xl"}],a=t.length;return function(){var r,n=0,i=l.player.outerWidth(),s=Math.max(parseInt(l.player.css("fontSize"),10)||16,13);for(i*=16/s;a>n;n++)if(t[n].size>=i){r=t[n];break}e.name!=r.name&&(e=r,l.player.attr("data-playersize",r.name),l.player.attr("data-playersizes",r.names))}}();var f=e('<div class="ws-poster" />').insertAfter(l.media),y=function(){var e,t,r,n=a.swfmini&&swfmini.hasFlashPlayerVersion("10.0.3"),i=/youtube\.com\/[watch\?|v\/]+/i,s=l.media.prop("paused");return s&&l.player.addClass("initial-state"),"backgroundSize"in f[0].style||l.player.addClass("no-backgroundsize"),l.media.on("playing waiting seeked seeking",function(){s&&(s=!1,l.player.removeClass("initial-state"))}),function(){var a=l.media.attr("poster"),o=!!a,d=l.media.prop("currentSrc")||"",u=i.test(d),c=n&&o?!1:u;!o&&u&&(a=d.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i)||"",a&&(a="https://img.youtube.com/vi/"+a[1]+"/0.jpg",o=!!a)),r!==a&&(r=a,f[0].style.backgroundImage=a?"url("+a+")":""),e!==o&&(e=o,l.player[o?"removeClass":"addClass"]("no-poster")),l.media.prop("paused")&&(l.player.addClass("initial-state"),s=!0),t!==c&&(t=c,l.player[c?"addClass":"removeClass"]("has-ytposter"))}}();g._create(l.player,l.media,l.player),l.media.on("emptied loadstart",function(){setTimeout(y)}),d(),y(),t.ready("dom-support",function(){l.player.onWSOff("updateshadowdom",d),o.add(l._controlbar).add(f).addClass(t.shadowClass),t.addShadowDom()})}else s||u.detach();return s}}),i.registerPlugin("play-pause",{structure:o,text:"play / pause",_create:f()}),i.registerPlugin("mute-unmute",{structure:o,text:"mute / unmute",_create:f()}),i.registerPlugin("jme-media-overlay",{_create:f()}),i.registerPlugin("volume-slider",{structure:d,text:"volume level",_create:f()}),i.registerPlugin("time-slider",{structure:d,options:{format:["mm","ss"]},text:"time position",_create:f()}),i.defineProp("format",{set:function(t,a){e.isArray(a)||(a=a.split(":"));var r=i.data(t);return r.format=a,e(t).triggerHandler("updatetimeformat"),r.player.triggerHandler("updatetimeformat"),"noDataSet"}}),i.registerPlugin("duration-display",{structure:l,options:{format:"mm:ss"},_create:f()}),i.defineProp("countdown",{set:function(t,a){var r=i.data(t);return r.countdown=!!a,e(t).triggerHandler("updatetimeformat"),r.player.triggerHandler("updatetimeformat"),"noDataSet"}}),i.registerPlugin("currenttime-display",{structure:l,options:{format:"mm:ss",countdown:!1},_create:f()}),i.registerPlugin("poster-display",{structure:"<div />",options:{},_create:f()}),i.registerPlugin("fullscreen",{options:{fullscreen:!0,autoplayfs:!1},structure:o,text:"enter fullscreen / exit fullscreen",_create:f()}),i.registerPlugin("mediaconfigmenu",{structure:o,text:"configuration",_create:f()}),i.registerPlugin("captions",{structure:o,text:"subtitles",_create:function(t,a,r){var n=a.find("track").filter(':not([kind]), [kind="subtitles"], [data-kind="subtitles"], [kind="captions"], [data-kind="captions"]');t.wsclonedcheckbox=e(t).clone().attr({role:"checkbox"}).insertBefore(t),r.attr("data-tracks",n.length>1?"many":n.length),t.attr("aria-haspopup","true"),f().apply(this,arguments)}}),i.registerPlugin("chapters",{structure:o,text:"chapters",_create:function(e,a,r){var n=a.find("track").filter('[kind="chapters"], [data-kind="chapters"]');e.attr("aria-haspopup","true"),n.length&&(t._polyfill(["track"]),r.addClass("has-chapter-tracks")),f().apply(this,arguments)}}),t.ready(t.cfg.mediaelement.plugins.concat(["mediaelement","jme-base"]),function(){r.barTemplate||(r.barTemplate='<div class="play-pause-container">{{play-pause}}</div><div class="playlist-container"><div class="playlist-box"><div class="playlist-button-container">{{playlist-prev}}</div><div class="playlist-button-container">{{playlist-next}}</div></div></div><div class="currenttime-container">{{currenttime-display}}</div><div class="progress-container">{{time-slider}}</div><div class="duration-container">{{duration-display}}</div><div class="mute-container">{{mute-unmute}}</div><div class="volume-container">{{volume-slider}}</div><div class="chapters-container"><div class="chapters-controls mediamenu-wrapper">{{chapters}}</div></div><div class="subtitle-container mediamenu-wrapper"><div class="subtitle-controls">{{captions}}</div></div><div class="mediaconfig-container"><div class="mediaconfig-controls mediamenu-wrapper">{{mediaconfigmenu}}</div></div><div class="fullscreen-container">{{fullscreen}}</div>'),r.barStructure||(r.barStructure='<div class="jme-media-overlay"></div><div class="jme-controlbar'+u+'" tabindex="-1"><div class="jme-cb-box"></div></div>'),t.addReady(function(t,a){e(n,t).add(a.filter(n)).jmeProp("controlbar",!0)})}),t.ready("WINDOWLOAD",m)});