webshims.register("mediacontrols-lazy",function(e,t,n,a,i){"use strict";function r(e){var t,n;e.release===!0&&(e.release=e.set);var a={start:function(){n||(n=!0,e.start&&e.start())},release:function(){n&&(n=!1,e.release&&e.release())},get:function(){return n?void 0:e.get.apply(this,arguments)},set:function(){var n=this,i=arguments;a.start(),clearTimeout(t),t=setTimeout(function(){e.set.apply(n,i)},33)}};return a.fns=e,a}function s(t){var n=e.grep(t,T.chapters),a=n;return n.length>1&&(n=e.grep(n,T.chapters)),n.length?n.length>1&&(n=e.grep(n,T.notDisabled)):n=a,n.length?n.length>1&&(n=e.grep(n,T.activeLang)):n=a,n.length?n.length>1&&(n=e.grep(n,T.activePartialLang)):n=a,n[0]||a[0]||null}function o(e){var t='<li role="presentation">'+this.html.replace("{{startTime}}",e.startTime).replace("{{endTime}}",e.endTime).replace("{{title}}",e.title);return e.list&&e.list.length&&(t+='\n<ul role="presentation">'+e.list.map(o,this).join("\n	")+"</ul>\n"),t+="</li>"}function l(e){var t,n,a,i;if(e.length)for(n=e[0].startTime,a=e[e.length-1].endTime,i=100/(a-n),t=0;t<e.length;t++)e[t].rel=(e[t].endTime-e[t].startTime)*i,t==e.length-1?(e[t].last=!0,e[t].style="overflow: hidden;"):e[t].style="float: left; width: "+e[t].rel+"%;",l(e[t].list)}function u(e){var t="__chaptertree"+e.cues.length;if(e[t])return e[t];var n,a,i,r=[],s=null;for(a=0;a<e.cues.length;a++)n=e.cues[a],s&&s.startTime>n.startTime||(s&&n.startTime>=s.endTime&&(s=s.parent),s&&n.endTime>s.endTime||(i={startTime:n.startTime,endTime:n.endTime,parent:s,list:[],title:n.text,cue:n},s?s.list.push(i):(s=i,r.push(i))));return l(r),e[t]=r,r}function c(e,t){var n,a,i=!1;if(t[e]&&(i=e),!i)for(e=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<j.length;n++)if(a=j[n]+e,a in t){i=a;break}return i}var m=e.jme.plugins,d="pseudoClasses",f={play:1,playing:1},p={pause:1,ended:1},h=function(){t.loader.loadList(["range-ui"])},g=function(e){h(),t.ready("range-ui",e)},v={subtitles:1,caption:1},y=function(t){var n=e.map(t,function(e){var t="caption"==e.kind?"caption-type":"subtitle-type",n=e.language;return n=n?' <span class="track-lang">'+n+"</span>":"",'<li class="'+t+'" role="presentation"><button role="menuitemcheckbox" type="button" tabindex="-1">'+e.label+n+"</button></li>"});return'<div><ul role="presentation">'+n.join("")+"</ul></div>"};e.fn.wsTouchClick||(e.fn.wsTouchClick=function(){var t="touchAction"in document.documentElement.style,a=!t&&"ontouchstart"in n&&document.addEventListener;return function(n,i){var r,s,o,l,u,c=function(){return l?void 0:i.apply(this,arguments)};return a?(u=function(){l=!1},s=function(t){var n,a;t=t.originalEvent||{},e(this).off("touchend touchcancel",s);var o=t.changedTouches||t.touches;return"touchcancel"==t.type||!r||!o||1!=o.length||(a=o[0],Math.abs(r.x-a.pageX)>40||Math.abs(r.y-a.pageY)>40||Date.now()-r.now>300)?void 0:(t.preventDefault(),l=!0,setTimeout(u,400),n=i.apply(this,arguments))},o=function(t){var a,i;t&&1==t.touches.length&&(a=t.touches[0],i=n?e(a.target).closest(n):e(this),i.length&&(r={x:a.pageX,y:a.pageY,now:Date.now()},i.on("touchend touchcancel",s)))},this.each(function(){this.addEventListener("touchstart",o,!0)})):t&&this.css("touch-action","manipulation"),e.isFunction(n)?(i=n,n=!1,this.on("click",c)):this.on("click",n,c),this}}()),e.extend(!0,m,{useractivity:{_create:function(e,t,n){n.on({useractive:function(){n.attr("data-useractivity","true")}}).on("userinactive",{idletime:3500},function(){n.attr("data-useractivity","false")}).triggerHandler("userinactive")}},"play-pause":{pseudoClasses:{play:"state-paused",pause:"state-playing"},_create:function(t,n){var a=e.jme.getButtonText(t,[this[d].play,this[d].pause]);n.on("play playing ended pause updateJMEState",function(e){var t=e.type;t=f[t]?1:p[t]?0:n.jmeProp("isPlaying")?1:0,a(t)}).triggerHandler("updateJMEState"),t.wsTouchClick(function(e){n.jmeFn("togglePlay"),e.stopPropagation()})}},"mute-unmute":{pseudoClasses:{mute:"state-mute",unmute:"state-unmute"},_create:function(t,n){var a=e.jme.getButtonText(t,[this[d].mute,this[d].unmute]);n.on("volumechange updateJMEState",function(){a(n.prop("muted")?1:0)}).triggerHandler("updateJMEState"),t.wsTouchClick(function(e){n.prop("muted",!n.prop("muted")),e.stopPropagation()})}},"jme-media-overlay":{_create:function(t,n,a){var i,r,s,o={touchend:1,click:1},l=function(){i=!1};t.wsTouchClick(function(){n.jmeProp("isPlaying")&&"false"!=a.attr("data-useractivity")?n.pause():n.play()}),a.on({"touchstart touchend mousedown click mouseover":function(e){var t=500;i=!0,clearTimeout(r),s&&o[e.type]&&-1!=e.target.className.indexOf("ws-a11y-focus")&&(t=1),r=setTimeout(l,t)},focusin:function(t){!i&&t.originalEvent&&(e.prop(t.target,"tabIndex")>-1||e.attr(t.target,"role"))&&setTimeout(function(){i||(s=!0,e(t.target).addClass("ws-a11y-focus"))},20)},focusout:function(t){s&&(s=!1,e(t.target).removeClass("ws-a11y-focus"))}})}},"volume-slider":{_create:function(e,t){var n=function(){var n,a;a=r({get:function(){var e=t.prop("volume");e!==i&&n.value(e)},set:function(){t.prop({muted:!1,volume:n.options.value})},release:!0}),n=e.rangeUI({min:0,max:1,step:"any",input:a.set,change:a.release,baseClass:"media-range"}).data("rangeUi"),t.on("volumechange",a.get)};g(n)}},"time-slider":{pseudoClasses:{no:"no-duration"},_create:function(t,n,a){var i=this,s=function(){var s,o,l,u,c,m,f="has-duration",p=n.prop("duration");s=r({get:function(){var e=n.prop("currentTime");if(!isNaN(e))try{l.value(e)}catch(t){}},set:function(){try{n.prop("currentTime",l.options.value).triggerHandler("timechanged",[l.options.value])}catch(e){}},start:function(){null==c&&(c=n.prop("paused"),c?a._seekpause=!1:(a._seekpause=!0,n.pause()))},release:function(){s.fns.set(),c===!1&&n.play(),"_seekpause"in a&&delete a._seekpause,c=null}}),o=function(){p=n.prop("duration"),f=p&&isFinite(p)&&!isNaN(p),f?(l.disabled(!1),l.max(p),a.removeClass(i[d].no)):(l.disabled(!0),l.max(Number.MAX_VALUE),a.addClass(i[d].no))},m=function(){setTimeout(function(){u.removeClass("show-time-select"),t.off(".jmetimeselect"),document.removeEventListener&&document.removeEventListener("touchend",m,!0)})},l=t.rangeUI({min:0,value:n.prop("currentTime")||0,step:"any",input:s.set,change:s.release,textValue:function(e){return n.jmeFn("formatTime",e)},baseClass:"media-range"}).data("rangeUi"),u=e('<span class="time-select" />').appendTo(t),t.on({"mouseenter touchstart":function(a){if(f&&"touchstart"!=a.type||a.originalEvent&&a.originalEvent.touches&&1==a.originalEvent.touches.length){var i=(t.offset()||{left:0}).left,r=t.innerWidth(),s=function(e){var t=100*((e-i)/r),a=-(u.outerWidth()/2);u[0].innerHTML=n.jmeFn("formatTime",p*t/100),u[0].style.left=t+"%",u[0].style.marginLeft=a+"px"};e.fn.rangeUI.normalizeTouch(a),setTimeout(function(){u.addClass("show-time-select"),s(a.pageX)}),document.addEventListener&&document.addEventListener("touchend",m,!0),t.off(".jmetimeselect").on("mousemove.jmetimeselect touchmove.jmetimeselect",function(t){e.fn.rangeUI.normalizeTouch(t),s(t.pageX)})}},"mouseleave touchend":m}),n.on({timeupdate:s.get,emptied:function(){o(),l.value(0)},durationchange:o}),a.jmeFn("addControls",e('<div class="buffer-progress" />').prependTo(t)),o()};g(s)}},"duration-display":{_create:function(e,t,n,a){"string"==typeof a.format&&(a.format=a.format.split(":"));var i=function(){e.html(w(t.prop("duration"),a.format))};t.on("durationchange emptied",i),e.on("updatetimeformat",i).jmeProp("format",a.format)}},"currenttime-display":{_create:function(e,t,n,a){"string"==typeof a.format&&(a.format=a.format.split(":"));var i=function(){var n=t.prop("currentTime");a.countdown&&(n=(t.prop("duration")||0)-n,.7>n&&(n=0)),e.html(w(n,a.format))};t.on("timeupdate emptied durationchange",i),e.on("updatetimeformat",i).jmeProp("format",a.format)}},"poster-display":{_create:function(e,t){var n=function(){var n=t.prop("poster");n?e.html('<span></span><img src="'+n+'" class="poster-image" />'):e.empty()};t.on("emptied",n),n()}},fullscreen:{pseudoClasses:{enter:"state-enterfullscreen",exit:"state-exitfullscreen"},_create:function(t,n,a){var i=e.jme.getButtonText(t,[this[d].enter,this[d].exit]),r=function(){i(a.hasClass("player-fullscreen")?1:0)},s=this.options,o=function(){e(a.data("jme").controlElements).filter(".jme-media-overlay").off(".dblfullscreen").on("dblclick.dblfullscreen",function(){a.jmeProp("fullscreen",!a.jmeProp("fullscreen"))})};a.on("controlsadded",o),a.on("playerdimensionchange",r),t.wsTouchClick(function(){var e=a.hasClass("player-fullscreen")?!1:s.fullscreen;a.jmeProp("fullscreen",e),e&&s.autoplayfs&&n.jmeFn("play")}),o(),r()}},chapters:{_create:function(n,a,i){var r=this;t.ready("track",function(){var s,l,u,c,m,d=function(){clearTimeout(c),c=setTimeout(f,999)},f=function(){var e;u&&!a.prop("readyState")&&(e=a.attr("preload"),"auto"!=e&&(e="auto",a.prop("preload",e)))},p=function(){s||(s=new e.jme.ButtonMenu(n,'<div class="mediamenu chapter-menu" />',function(t,n){var i=a.prop("paused"),r=a.prop("readyState");(!l||2>r)&&(a.play(),i&&a.pause()),2>r&&setTimeout(function(){a.prop("currentTime",e(n).data("starttime"))},99),r&&a.prop("currentTime",e(n).data("starttime"))}))},h=function(e,t){if(m&&(m.remove(),m=null),e&&t.length){var a=t.map(o,{html:'<button type="button" data-starttime="{{startTime}}" data-endtime="{{endTime}}" role="menuitem" tabindex="-1">{{title}}</button>'}),l=e.label||r.text;u=!0,i.addClass("has-chapter-tracks"),p(),n.attr("aria-label",l),s.addMenu('<div class="mediamenu chapter-menu" aria-label="'+l+'"><div><h5>'+l+'</h5><ul role="presentation">'+a.join("\n")+"</div></ul></div>")}else u=!1,n.attr("aria-label",r.text),i.removeClass("has-chapter-tracks")};a.on({play:function(){l=!0},"emptied loadstart":function(){l=!1,d()}}),t.ready("WINDOWLOAD",d),i.jmeFn("getMediaChapters",h)})}},mediaconfigmenu:{_create:function(t,n,a){var i,r=new e.jme.ButtonMenu(t,'<div class="mediamenu" ><div /></div>'),s=r.menu.find("div"),o=function(){a[s[0].getElementsByTagName("*").length?"addClass":"removeClass"]("has-config-menu")},l=function(){clearTimeout(i),i=setTimeout(o)};e.each(e.jme.configmenuPlugins,function(e,t){t(s,n,a,r)}),o(),n.on("loadstart emptied loadedmetadata",l)}},captions:{pseudoClasses:{menu:"subtitle-menu"},_create:function(n,a,i){var r,s=this,o=n.wsclonedcheckbox;o||(r=a.find("track"),o=e(n).clone().attr({role:"checkbox"}).insertBefore(n),i.attr("data-tracks",r.length>1?"many":r.length),n.attr("aria-haspopup","true")),t.ready("track",function(){function t(t){var i;u?u.addMenu(t):(i=function(t,n){"true"==e.attr(n,"aria-checked")?m[t].mode="disabled":e.each(m,function(e,n){n.mode=e==t?"showing":"disabled"}),a.prop("textTracks"),r()},u=new e.jme.ButtonMenu(n,t,i),o.wsTouchClick(function(){return i(0,this),!1})),r()}function r(){u&&u.menu&&u.menu.length&&e("button",u.menu).each(function(t){if(!m[t])return!1;var n="showing"==m[t].mode?"true":"false";t||o.attr("aria-checked",n),e.attr(this,"aria-checked",n)})}function l(){m=[],e.each(f,function(e,t){v[t.kind]&&3!=t.readyState&&m.push(t)}),i.attr("data-tracks",m.length>1?"many":m.length),m.length?(t('<div class="mediamenu '+s[d].menu+'" >'+y(m)+"</div>"),e("span.jme-text, label span.jme-text",o).text((m[0].label||" ")+(m[0].lang||"")),(!i.hasClass(s[d].hasTrack)||i.hasClass(s[d].noTrack))&&n.prop("disabled",!1)):(!i.hasClass(s[d].noTrack)||i.hasClass(s[d].hasTrack))&&n.prop("disabled",!0)}var u,c,m=[],f=a.prop("textTracks"),p=function(){var e,t;return function(n){clearTimeout(e),clearTimeout(t),"updatesubtitlestate"==n.type&&(t=setTimeout(function(){a.trigger("updatetracklist")},0)),e=setTimeout(l,19)}}();f?(c=function(){var e;return function(){clearTimeout(e),e=setTimeout(r,20)}}(),l(),e([f]).on("addtrack removetrack",p).on("change",c),i.on("updatesubtitlestate",p),a.on("updatetrackdisplay",c)):(f=[],l())})}}});var T={chapters:function(e){return"chapters"==e.kind},notDisabled:function(e){return"disabled"!=e.mode},activeLang:function(e){return e.language==t.activeLang()},activePartialLang:function(e){return e.language==t.activeLang().split("-")[0]}},b={captions:"showing",subtitles:"showing"};e.jme.defineMethod("activateTrack",function(t,n){var a=e.jme.data(this);if(a.media){var i,r,s=0,o=function(){clearTimeout(r),i&&i.cues&&i.cues.length?(n(i),n=e.noop,a.media.find("track").off("load",o)):9>s&&(r=setTimeout(o,100*s),s++)};t.jquery&&(t=t[0]),i=t.nodeName?e.prop(t,"track"):t,"disabled"==e.prop(i,"mode")&&e.prop(i,"mode",b[e.prop(i,"mode")]||"hidden"),a.media.prop("textTracks"),a.media.find("track").on("load",o),setTimeout(o)}}),e.jme.defineMethod("getMediaChapters",function(t){var n=e.jme.data(this);if(n.media){var a,i=n.media.prop("textTracks"),r=function(){var e,r=function(){var e,r=s(i);a!==r&&(e=a,a=r,r?n.media.jmeFn("activateTrack",a,function(){var n=u(a);t(a,n,e)}):t(a,[],e))};return function(){clearTimeout(e),e=setTimeout(r)}}();r(),e([i]).on("addtrack removetrack change",r),n.player.on("updatesubtitlestate",r),n.media.on("updatetrackdisplay emptied",r)}});var j=["webkit","moz","o","ms"];e.jme.defineMethod("getChapterTree",u),e.jme.defineMethod("concerningRange",function(t,n){var a=this,i={start:0,end:0};if(t||(t="buffered"),t=e.prop(a,t),null==n&&(n=e.prop(a,"currentTime")),!(t&&"length"in t))return i;for(var r=0,s=t.length;s>r&&(i.start=t.start(r),i.end=t.end(r),!(i.start<=n&&i.end>=n));r++);return i}),e.jme.defineProp("progress",{get:function(t){var n=e.jme.data(t);if(!n.media)return 0;var a=100*(n.media.jmeFn("concerningRange").end/n.media.prop("duration"));return a>99.4&&(a=100),a||0},readonly:!0});var k={hh:6e4,mm:60,ss:1,ms:.001},w=function(t,n){var a;n||(n=["mm","ss"]),null==t&&(a=e.jme.data(this),t=e.prop(a.media,"duration")),t||(t=0);for(var i,r=[],s=0,o=n.length;o>s;s++)"ms"==n[s]&&s==o-1?i=Math.round(t/k[n[s]]/10):(i=parseInt(t/k[n[s]],10),t%=k[n[s]]),10>i&&(i="0"+i),r.push(i);return r.join(":")};e.jme.defineMethod("formatTime",w),e.jme.fullscreen=function(){var t,a,i=document.documentElement,r={supportsFullScreen:c("fullscreenEnabled",document)||c("fullScreenEnabled",document),isFullScreen:function(){return!1},requestFullScreen:function(n){var i;t=[],e(n).parentsUntil("body").each(function(){var n,a=e.css(this,"position"),r=this.scrollLeft,s=this.scrollTop;i={elemStyle:this.style,elem:this},"static"!==a&&(n=!0,i.pos=i.elemStyle.position,this.style.position="static"),r&&(n=!0,i.left=r),s&&(n=!0,i.top=s),n&&t.push(i)}),a=!1;try{a={elemStyle:frameElement.style,elem:frameElement,css:{}},a.css.position=a.elemStyle.position,a.elemStyle.position="fixed",e.each(["top","left","right","bottom"],function(e,t){a.css[t]=a.elemStyle[t],a.elemStyle[t]="0px"}),e.each(["height","width"],function(e,t){a.css[t]=a.elemStyle[t],a.elemStyle[t]="100%"})}catch(r){a=!1}i=null},cancelFullScreen:function(){t&&(e.each(t,function(e,t){"pos"in t&&(t.elemStyle.position=t.pos),t.left&&(t.elem.scrollLeft=t.left),t.top&&(t.elem.scrollTop=t.top),t=null}),t=[]),a&&(e.each(a.css,function(e,t){a.elemStyle[e]=t}),a=!1)},eventName:"fullscreenchange",exitName:"exitFullscreen",requestName:"requestFullscreen",elementName:"fullscreenElement",enabledName:""};return r.cancelFullWindow=r.cancelFullScreen,r.requestFullWindow=r.requestFullScreen,r.supportsFullScreen&&(r.enabledName=r.supportsFullScreen,r.exitName=c("exitFullscreen",document)||c("cancelFullScreen",document),r.elementName=c("fullscreenElement",document)||c("fullScreenElement",document),r.supportsFullScreen=!!r.supportsFullScreen,("fullscreenElement"!=r.elementName||"exitFullscreen"!=r.exitName||"fullscreenEnabled"!=r.enabledName)&&e.each(j,function(e,t){var n=t+"RequestFullscreen";return n in i||(n=t+"RequestFullScreen")&&n in i?(r.eventName=t+"fullscreenchange",r.requestName=n,!1):void 0}),r.isFullScreen=function(){return document[r.elementName]},r.requestFullScreen=function(e){return e[r.requestName]()},r.cancelFullScreen=function(){return document[r.exitName]()}),n.parent!=n&&function(){try{var t=n.frameElement;r.supportsFullScreen&&("allowfullscreen"in t&&!t.allowfullscreen?t.allowfullscreen=!0:(null==t.getAttribute("webkitallowfullscreen")&&t.setAttribute("webkitallowfullscreen",""),null==t.getAttribute("allowfullscreen")&&t.setAttribute("allowfullscreen","allowfullscreen")))}catch(a){r.supportsFullScreen||e("html").addClass("no-fullwindow")}}(),r}(),e.jme.defineProp("fullscreen",{set:function(t,a){var i=e.jme.data(t);if(!(i&&i.player||e(t).hasClass("player-fullscreen")))return"noDataSet";if(a){if(i.player.hasClass("player-fullscreen"))return"noDataSet";if(i.scrollPos={top:e(n).scrollTop(),left:e(n).scrollLeft()},e(document).off(".jmefullscreen").on("keydown.jmefullscreen",function(e){return 27==e.keyCode?(i.player.jmeProp("fullscreen",!1),!1):32!==e.keyCode||"form"in e.target?void 0:(i.media.jmeFn("togglePlay"),!1)}),"fullwindow"==a)e.jme.fullscreen.requestFullWindow(i.player[0]);else try{e.jme.fullscreen.requestFullScreen(i.player[0])}catch(r){}e("html").addClass("has-media-fullscreen"),i.player.addClass("player-fullscreen"),i.media.addClass("media-fullscreen"),e("button.play-pause",i.player).trigger("focus"),e.jme.fullscreen.supportsFullScreen&&e(document).on(e.jme.fullscreen.eventName+".jmefullscreen",function(){var n=e.jme.fullscreen.isFullScreen();n&&t==n?i.media.trigger("playerdimensionchange",["fullscreen"]):i.player.jmeProp("fullscreen",!1)}),i.media.trigger("playerdimensionchange",["fullwindow"])}else{if(i.player&&!i.player.hasClass("player-fullscreen"))return"noDataSet";if(e(document).off(".jmefullscreen"),e("html").removeClass("has-media-fullscreen"),i.player&&i.media&&(i.player.removeClass("player-fullscreen"),i.media.removeClass("media-fullscreen")),e.jme.fullscreen.isFullScreen())try{e.jme.fullscreen.cancelFullScreen()}catch(r){}else e.jme.fullscreen.cancelFullWindow();i.scrollPos&&(e(n).scrollTop(i.scrollPos.top),e(n).scrollLeft(i.scrollPos.left),delete i.scrollPos),i.media&&i.media.trigger("playerdimensionchange")}return"noDataSet"},get:function(t){var n=e.jme.data(t);if(n&&n.player){var a=n.player.hasClass("player-fullscreen");return a?e.jme.fullscreen.isFullScreen()||"fullwindow":!1}}}),e.jme.defineProp("autoplayfs"),e.jme.registerPlugin("buffer-progress",{_create:function(t,n,a,i){var r=e('<div class="buffer-progress-indicator" />').appendTo(t),s=function(){var e=n.jmeProp("progress");i.progress!==e&&(i.progress=e,r.css("width",e+"%"))};n.on({progress:s,emptied:function(){r.css("width",0),i.progress=0},playing:s}),s()}}),e.jme.ButtonMenu=function(t,n,a){var i=this;this.button=e(t).attr({"aria-haspopup":"true"}),this.clickHandler=a,this.toggle=e.proxy(this,"toggle"),this.keyIndex=e.proxy(this,"keyIndex"),this._buttonClick=e.proxy(this,"_buttonClick"),this.addMenu(n),this._closeFocusOut(),this.button.wsTouchClick(this.toggle).on("keydown",function(e){return i.isVisible||38!=e.keyCode&&40!=e.keyCode?void 0:(i.show(),!1)})},e.jme.ButtonMenu.prototype={addMenu:function(t){this.menu&&this.menu.remove(),this.menu=e(t),this.menu.insertAfter(this.button),this.clickHandler&&(this.buttons=e("button",this.menu),this.menu.attr("role","menu").on("keydown",this.keyIndex).wsTouchClick("button",this._buttonClick))},_closeFocusOut:function(){var e,t=this,n=function(){clearTimeout(e),setTimeout(function(){clearTimeout(e)},9)};this.menu.parent().on("focusin mousedown click touchend",n).on("focusout",function(){e=setTimeout(function(){t.activeElement=!1,t.hide()},40)})},_buttonClick:function(e){this.clickHandler&&(this.clickHandler(this.buttons.index(e.currentTarget),e.currentTarget),this.hide())},keyIndex:function(e){var t=40==e.keyCode?1:38==e.keyCode?-1:0;if(27==e.keyCode&&this.hide(),t){var n=this.buttons.not(":disabled"),a=n.filter(":focus");a=n[n.index(a)+t]||n.filter(t>0?":first":":last"),a.trigger("focus"),e.preventDefault()}},show:function(){if(!this.isVisible){var t=e("button, select, input, textarea",this.menu).not(':disabled, [aria-diabled="true"]');this.isVisible=!0,this.menu.addClass("visible-menu");try{this.activeElement=document.activeElement||this.button[0]}catch(n){this.activeElement=this.button[0]}setTimeout(function(){e(t.filter('[aria-checked="true"]').last()[0]||t[0]).trigger("focus")},60)}},toggle:function(){this[this.isVisible?"hide":"show"]()},hide:function(){if(this.isVisible){if(this.isVisible=!1,this.menu.removeClass("visible-menu"),this.activeElement)try{this.activeElement.focus()}catch(e){}this.activeElement=!1}}},function(){var t={add:function(t,n,a){var i,r,s=e.data(t,"jmeuseractivity")||e.data(t,"jmeuseractivity",{idletime:2500,idle:!0,trigger:{}}),o=e(t),l=function(){s.idle||(s.idle=!0,s.trigger.userinactive&&o.trigger("userinactive"))},u=function(e){!e||"mousemove"===e.type&&e.pageX===i&&e.pageY===r||("mousemove"===e.type&&(i=e.pageX,r=e.pageY),s.idleTimer&&clearTimeout(s.idleTimer),s.idleTimer=setTimeout(l,s.idletime),s.idle&&(s.idle=!1,s.trigger.useractive&&o.trigger("useractive")))};s.idletime=(n||{}).idletime||s.idletime,n&&"idle"in n&&(s.idle=n.idle),s.trigger[a]=!0,s.bound||(o.on("mouseleave.jmeuseractivity",l).on("touchend.jmeuseractivity setuseractive.jmeuseractivity mousemove.jmeuseractivity focusin.jmeuseractivity mouseenter.jmeuseractivity keydown.jmeuseractivity keyup.jmeuseractivity mousedown.jmeuseractivity",u),s.bound=!0),s.idle||u({type:"initunidled"})},remove:function(t,n){var a=e.data(t,"jmeuseractivity")||e.data(t,"jmeuseractivity",{idletime:2500,idle:!0,trigger:{}});a.trigger[n]=!1,a.trigger.useractive||a.trigger.userinactive||(e(t).off(".jmeuseractivity"),a.bound=!1)}};e.each(["useractive","userinactive"],function(n,a){e.event.special[a]={setup:function(e){t.add(this,e,a)},teardown:function(){t.remove(this,a)}}})}()});