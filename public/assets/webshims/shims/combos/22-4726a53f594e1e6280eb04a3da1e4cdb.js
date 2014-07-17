webshims.register("details",function(e,t,a,r,i,n){var s=function(t){var a=e(t).parent("details");return a[0]&&a.children(":first").get(0)===t?a:void 0},o=function(t,a){t=e(t),a=e(a);var r=e.data(a[0],"summaryElement");e.data(t[0],"detailsElement",a),r&&t[0]===r[0]||(r&&(r.hasClass("fallback-summary")?r.remove():r.off(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),e.data(a[0],"summaryElement",t),a.prop("open",a.prop("open")))},c=function(t){var a=e.data(t,"summaryElement");return a||(a=e(t).children("summary:first-child"),a[0]?o(a,t):(e(t).prependPolyfill('<summary class="fallback-summary">'+n.text+"</summary>"),a=e.data(t,"summaryElement"))),a};t.createElement("summary",function(){var a=s(this);if(a&&!e.data(this,"detailsElement")){var r,i,n=e.attr(this,"tabIndex")||"0";o(this,a),e(this).on({"focus.summaryPolyfill":function(){e(this).addClass("summary-has-focus")},"blur.summaryPolyfill":function(){e(this).removeClass("summary-has-focus")},"mouseenter.summaryPolyfill":function(){e(this).addClass("summary-has-hover")},"mouseleave.summaryPolyfill":function(){e(this).removeClass("summary-has-hover")},"click.summaryPolyfill":function(t){var a=s(this);if(a){if(!i&&t.originalEvent)return i=!0,t.stopImmediatePropagation(),t.preventDefault(),e(this).trigger("click"),i=!1,!1;clearTimeout(r),r=setTimeout(function(){t.isDefaultPrevented()||a.prop("open",!a.prop("open"))},0)}},"keydown.summaryPolyfill":function(t){13!=t.keyCode&&32!=t.keyCode||t.isDefaultPrevented()||(i=!0,t.preventDefault(),e(this).trigger("click"),i=!1)}}).attr({tabindex:n,role:"button"}).prepend('<span class="details-open-indicator" />'),t.moveToFirstEvent(this,"click")}});var d;t.defineNodeNamesBooleanProperty("details","open",function(t){var a=e(e.data(this,"summaryElement"));if(a){var r=t?"removeClass":"addClass",i=e(this);if(!d&&n.animate){i.stop().css({width:"",height:""});var s={width:i.width(),height:i.height()}}if(a.attr("aria-expanded",""+t),i[r]("closed-details-summary").children().not(a[0])[r]("closed-details-child"),!d&&n.animate){var o={width:i.width(),height:i.height()};i.css(s).animate(o,{complete:function(){e(this).css({width:"",height:""})}})}}}),t.createElement("details",function(){d=!0,c(this),e.prop(this,"open",e.prop(this,"open")),d=!1})}),webshims.register("track",function(e,t,a,r){"use strict";function i(e,a,i){3!=arguments.length&&t.error("wrong arguments.length for VTTCue.constructor"),this.startTime=e,this.endTime=a,this.text=i,this.onenter=null,this.onexit=null,this.pauseOnExit=!1,this.track=null,this.id=null,this.getCueAsHTML=function(){var e,t="",a="";return function(){var i,s;if(e||(e=r.createDocumentFragment()),t!=this.text)for(t=this.text,a=n.parseCueTextToHTML(t),T.innerHTML=a,i=0,s=T.childNodes.length;s>i;i++)e.appendChild(T.childNodes[i].cloneNode(!0));return e.cloneNode(!0)}}()}var n=t.mediaelement;(new Date).getTime();var s={subtitles:1,captions:1,descriptions:1},o=e("<track />"),c=t.support,d=c.ES5&&c.objectAccessor,u=function(e){var a={};return e.addEventListener=function(e,r){a[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+a[e]+" your fn was: "+r),a[e]=r},e.removeEventListener=function(e,r){a[e]&&a[e]!=r&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+a[e]+" your fn was: "+r),a[e]&&delete a[e]},e},l={getCueById:function(e){for(var t=null,a=0,r=this.length;r>a;a++)if(this[a].id===e){t=this[a];break}return t}},p={0:"disabled",1:"hidden",2:"showing"},m={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",id:"",mode:"disabled",oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var a=this.cues[this.cues.length-1];a&&a.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=n.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var a=this.cues||[],r=0,i=a.length;if(e.track!=this)return t.error("cue not part of track"),void 0;for(;i>r;r++)if(a[r]===e){a.splice(r,1),e.track=null;break}return e.track?(t.error("cue not part of track"),void 0):void 0}},h=["kind","label","srclang"],f={srclang:"language"},k=function(a,r){var i,n,s=[],o=[],c=[];if(a||(a=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),r||(a.blockTrackListUpdate=!0,r=e.prop(this,"textTracks"),a.blockTrackListUpdate=!1),clearTimeout(a.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");c.push(t),-1==r.indexOf(t)&&o.push(t)}),a.scriptedTextTracks)for(i=0,n=a.scriptedTextTracks.length;n>i;i++)c.push(a.scriptedTextTracks[i]),-1==r.indexOf(a.scriptedTextTracks[i])&&o.push(a.scriptedTextTracks[i]);for(i=0,n=r.length;n>i;i++)-1==c.indexOf(r[i])&&s.push(r[i]);if(s.length||o.length){for(r.splice(0),i=0,n=c.length;n>i;i++)r.push(c[i]);for(i=0,n=s.length;n>i;i++)e([r]).triggerHandler(e.Event({type:"removetrack",track:s[i]}));for(i=0,n=o.length;n>i;i++)e([r]).triggerHandler(e.Event({type:"addtrack",track:o[i]}));(a.scriptedTextTracks||s.length)&&e(this).triggerHandler("updatetrackdisplay")}},g=function(a,r){r||(r=t.data(a,"trackData")),r&&!r.isTriggering&&(r.isTriggering=!0,setTimeout(function(){e(a).closest("audio, video").triggerHandler("updatetrackdisplay"),r.isTriggering=!1},1))},v=function(){var a={subtitles:{subtitles:1,captions:1},descriptions:{descriptions:1},chapters:{chapters:1}};return a.captions=a.subtitles,function(r){var i,n,s=e.prop(r,"default");return s&&"metadata"!=(i=e.prop(r,"kind"))&&(n=e(r).parent().find("track[default]").filter(function(){return!!a[i][e.prop(this,"kind")]})[0],n!=r&&(s=!1,t.error("more than one default track of a specific kind detected. Fall back to default = false"))),s}}(),T=e("<div />")[0];a.VTTCue=i,a.TextTrackCue=function(){t.error("Use VTTCue constructor instead of abstract TextTrackCue constructor."),i.apply(this,arguments)},a.TextTrackCue.prototype=i.prototype,n.createCueList=function(){return e.extend([],l)},n.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,a=/\<\s*\//,r=function(e,t,r,i){var n;return a.test(i)?n="</"+e+">":(r.splice(0,1),n="<"+e+" "+t+'="'+r.join(" ").replace(/\"/g,"&#34;")+'">'),n},i=function(e){var a=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return a[0]&&(a[0]=a[0].toLowerCase(),t.test(a[0])?"c"==a[0]?e=r("span","class",a,e):"v"==a[0]&&(e=r("q","title",a,e)):e=""),e};return function(t){return t.replace(e,i)}}();var y=function(t){var a=t+"",r=this.getAttribute("begin")||"",i=this.getAttribute("end")||"",n=e.trim(e.text(this));return/\./.test(r)||(r+=".000"),/\./.test(i)||(i+=".000"),a+="\n",a+=r+" --> "+i+"\n",a+=n},x=function(t){return t=e.parseXML(t)||[],e(t).find("[begin][end]").map(y).get().join("\n\n")||""},b=0;n.loadTextTrack=function(a,r,i,o){var c="play playing loadedmetadata loadstart",d=i.track,u=function(){var s,o,l,p="disabled"==d.mode,m=!(!(e.prop(a,"readyState")>0||2==e.prop(a,"networkState"))&&e.prop(a,"paused")),h=(!p||m)&&e.attr(r,"src")&&e.prop(r,"src");if(h&&(e(a).off(c,u).off("updatetrackdisplay",u),!i.readyState)){s=function(){b--,i.readyState=3,d.cues=null,d.activeCues=d.shimActiveCues=d._shimActiveCues=null,e(r).triggerHandler("error")},i.readyState=1;try{d.cues=n.createCueList(),d.activeCues=d.shimActiveCues=d._shimActiveCues=n.createCueList(),b++,l=function(){o=e.ajax({dataType:"text",url:h,success:function(c){b--;var u=o.getResponseHeader("content-type")||"";u.indexOf("application/xml")?u.indexOf("text/vtt")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"):c=x(c),n.parseCaptions(c,d,function(t){t&&"length"in t?(i.readyState=2,e(r).triggerHandler("load"),e(a).triggerHandler("updatetrackdisplay")):s()})},error:s})},e.ajax&&e.ajaxSettings.xhr?p?setTimeout(l,2*b):l():(t.ready("jajax",l),t.loader.loadList(["jajax"]))}catch(f){s(),t.error(f)}}};i.readyState=0,d.shimActiveCues=null,d._shimActiveCues=null,d.activeCues=null,d.cues=null,e(a).on(c,u),o?(d.mode=s[d.kind]?"showing":"hidden",u()):e(a).on("updatetrackdisplay",u)},n.createTextTrack=function(a,r){var i,s;return r.nodeName&&(s=t.data(r,"trackData"),s&&(g(r,s),i=s.track)),i||(i=u(t.objectCreate(m)),d||h.forEach(function(t){var a=e.prop(r,t);a&&(i[f[t]||t]=a)}),r.nodeName?(d&&h.forEach(function(a){t.defineProperty(i,f[a]||a,{get:function(){return e.prop(r,a)}})}),i.id=e(r).prop("id"),s=t.data(r,"trackData",{track:i}),n.loadTextTrack(a,r,s,v(r))):(d&&h.forEach(function(e){t.defineProperty(i,f[e]||e,{value:r[e],writeable:!1})}),i.cues=n.createCueList(),i.activeCues=i._shimActiveCues=i.shimActiveCues=n.createCueList(),i.mode="hidden",i.readyState=2),"subtitles"!=i.kind||i.language||t.error("you must provide a language for track in subtitles state"),i.__wsmode=i.mode),i},n.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,a=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,r=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,n=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g,s=/^(\d{2})?:?(\d{2}):(\d{2})[\.\,](\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})[\.\,](\d+)\s*(.*)/;return function(o){var c,d,u,l,p,m,h,f,k;if(a.exec(o)||n.exec(o)||r.exec(o))return null;for(c=o.split(/\n/g);!c[0].replace(/\s+/gi,"").length&&c.length>0;)c.shift();for(c[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(h=String(c.shift().replace(/\s*/gi,""))),m=0;m<c.length;m++){var g=c[m];((f=e.exec(g))||(f=s.exec(g)))&&(p=f.slice(1),d=parseInt(60*60*(p[0]||0),10)+parseInt(60*(p[1]||0),10)+parseInt(p[2]||0,10)+parseFloat("0."+(p[3]||0)),u=parseInt(60*60*(p[4]||0),10)+parseInt(60*(p[5]||0),10)+parseInt(p[6]||0,10)+parseFloat("0."+(p[7]||0))),c=c.slice(0,m).concat(c.slice(m+1));break}return d||u?(l=c.join("\n"),k=new i(d,u,l),h&&(k.id=h),k):(t.warn("couldn't extract time information: "+[d,u,c.join("\n"),h].join(" ; ")),null)}}(),n.parseCaptions=function(e,a,r){var i,s,o,c,d;n.createCueList(),e?(o=/^WEBVTT(\s*FILE)?/gi,s=function(u,l){for(;l>u;u++)if(i=e[u],o.test(i)?d=!0:i.replace(/\s*/gi,"").length&&(i=n.parseCaptionChunk(i,u),i&&a.addCue(i)),c<(new Date).getTime()-30){u++,setTimeout(function(){c=(new Date).getTime(),s(u,l)},90);break}u>=l&&(d||t.error("please use WebVTT format. This is the standard"),r(a.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){c=(new Date).getTime(),e=e.split(/\n\n+/g),s(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},n.createTrackList=function(a,r){return r=r||t.data(a,"mediaelementBase")||t.data(a,"mediaelementBase",{}),r.textTracks||(r.textTracks=[],t.defineProperties(r.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null},onchange:{value:null},getTrackById:{value:function(e){for(var t=null,a=0;a<r.textTracks.length;a++)if(e==r.textTracks[a].id){t=r.textTracks[a];break}return t}}}),u(r.textTracks),e(a).on("updatetrackdisplay",function(){for(var t,a=0;a<r.textTracks.length;a++)t=r.textTracks[a],t.__wsmode!=t.mode&&(t.__wsmode=t.mode,e([r.textTracks]).triggerHandler("change"))})),r.textTracks},c.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:c.track?{set:function(e){var a=t.data(this,"trackData");this.setAttribute("data-kind",e),a&&(a.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(h,function(a,r){var i=f[r]||r;t.onNodeNamesPropertyModify("track",r,function(){var a=t.data(this,"trackData");a&&("kind"==r&&g(this,a),d||(a.track[i]=e.prop(this,r)))})}),t.onNodeNamesPropertyModify("track","src",function(a){if(a){var r,i=t.data(this,"trackData");i&&(r=e(this).closest("video, audio"),r[0]&&n.loadTextTrack(r,this,i))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(t.data(this,"trackData")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return n.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,a=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),r=n.createTrackList(e,a);return a.blockTrackListUpdate||k.call(e,a,r),r},writeable:!1},addTextTrack:{value:function(e,a,r){var i=n.createTextTrack(this,{kind:o.prop("kind",e||"").prop("kind"),label:a||"",srclang:r||""}),s=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return s.scriptedTextTracks||(s.scriptedTextTracks=[]),s.scriptedTextTracks.push(i),k.call(this),i}}},"prop");var C=function(a){if(e(a.target).is("audio, video")){var r=t.data(a.target,"mediaelementBase");r&&(clearTimeout(r.updateTrackListTimer),r.updateTrackListTimer=setTimeout(function(){k.call(a.target,r)},0))}},w=function(e,t){return t.readyState||e.readyState},E=function(e){e.originalEvent&&e.stopImmediatePropagation()},L=function(){if(t.implement(this,"track")){var a,r=this.track;r&&(t.bugs.track||!r.mode&&!w(this,r)||(e.prop(this,"track").mode=p[r.mode]||r.mode),a=e.prop(this,"kind"),r.mode="string"==typeof r.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:a})),e(this).on("load error",E)}};t.addReady(function(a,r){var i=r.filter("video, audio, track").closest("audio, video");e("video, audio",a).add(i).each(function(){k.call(this)}).on("emptied updatetracklist wsmediareload",C).each(function(){if(c.track){var a=e.prop(this,"textTracks"),r=this.textTracks;a.length!=r.length&&t.warn("textTracks couldn't be copied"),e("track",this).each(L)}}),i.each(function(){var e=this,a=t.data(e,"mediaelementBase");a&&(clearTimeout(a.updateTrackListTimer),a.updateTrackListTimer=setTimeout(function(){k.call(e,a)},9))})}),c.texttrackapi&&e("video, audio").trigger("trackapichange")});