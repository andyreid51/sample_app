!function(e){if(webshims.support.texttrackapi&&document.addEventListener){var t=webshims.cfg.track,i=function(t){e(t.target).filter("track").each(s)},a=webshims.bugs.track,s=function(){return a||!t.override&&3==e.prop(this,"readyState")?(t.override=!0,webshims.reTest("track"),document.removeEventListener("error",i,!0),this&&e.nodeName(this,"track")?webshims.error("track support was overwritten. Please check your vtt including your vtt mime-type"):webshims.info("track support was overwritten. due to bad browser support"),!1):void 0},r=function(){document.addEventListener("error",i,!0),a?s():e("track").each(s),a||t.override||webshims.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}})};t.override||e(r)}}(webshims.$),webshims.register("track-ui",function(e,t){"use strict";function i(e,t){var i=!0,a=0,s=e.length;if(s!=t.length)i=!1;else for(;s>a;a++)if(e[a]!=t[a]){i=!1;break}return i}var a=t.cfg.track,s=t.support,r={subtitles:1,captions:1,descriptions:1},n=t.mediaelement,c=function(){return!a.override&&s.texttrackapi},u={update:function(a,s){a.activeCues.length?i(a.displayedActiveCues,a.activeCues)||(a.displayedActiveCues=a.activeCues,a.trackDisplay||(a.trackDisplay=e('<div class="cue-display '+t.shadowClass+'"><span class="description-cues" aria-live="assertive" /></div>').insertAfter(s),this.addEvents(a,s),t.docObserve()),a.hasDirtyTrackDisplay&&s.triggerHandler("forceupdatetrackdisplay"),this.showCues(a)):this.hide(a)},showCues:function(t){var i=e('<span class="cue-wrapper" />');e.each(t.displayedActiveCues,function(a,s){var r=s.id?'id="cue-id-'+s.id+'"':"",n=e('<span class="cue-line"><span '+r+' class="cue" /></span>').find("span").html(s.getCueAsHTML()).end();"descriptions"==s.track.kind?setTimeout(function(){e("span.description-cues",t.trackDisplay).html(n)},0):i.prepend(n)}),e("span.cue-wrapper",t.trackDisplay).remove(),t.trackDisplay.append(i)},addEvents:function(e,t){if(a.positionDisplay){var i,s=function(i){if(e.displayedActiveCues.length||i===!0){e.trackDisplay.css({display:"none"});var a=t.getShadowElement(),s=a.innerHeight(),r=a.innerWidth(),n=a.position();e.trackDisplay.css({left:n.left,width:r,height:s-45,top:n.top,display:"block"}),e.trackDisplay.css("fontSize",Math.max(Math.round(s/30),7)),e.hasDirtyTrackDisplay=!1}else e.hasDirtyTrackDisplay=!0},r=function(){clearTimeout(i),i=setTimeout(s,0)},n=function(){s(!0)};t.on("playerdimensionchange mediaelementapichange updatetrackdisplay updatemediaelementdimensions swfstageresize",r),t.on("forceupdatetrackdisplay",n).onWSOff("updateshadowdom",r),n()}},hide:function(t){t.trackDisplay&&t.displayedActiveCues.length&&(t.displayedActiveCues=[],e("span.cue-wrapper",t.trackDisplay).remove(),e("span.description-cues",t.trackDisplay).empty())}};if(n.trackDisplay=u,!n.createCueList){var o={getCueById:function(e){for(var t=null,i=0,a=this.length;a>i;i++)if(this[i].id===e){t=this[i];break}return t}};n.createCueList=function(){return e.extend([],o)}}n.getActiveCue=function(t,i,c,u){t._lastFoundCue||(t._lastFoundCue={index:0,time:0}),!s.texttrackapi||a.override||t._shimActiveCues||(t._shimActiveCues=n.createCueList());for(var o,d,p=0;p<t.shimActiveCues.length;p++)d=t.shimActiveCues[p],d.startTime>c||d.endTime<c?(t.shimActiveCues.splice(p,1),p--,d.pauseOnExit&&e(i).pause(),e(t).triggerHandler("cuechange"),e(d).triggerHandler("exit")):"showing"==t.mode&&r[t.kind]&&-1==e.inArray(d,u.activeCues)&&u.activeCues.push(d);for(o=t.cues.length,p=t._lastFoundCue.time<c?t._lastFoundCue.index:0;o>p&&(d=t.cues[p],d.startTime<=c&&d.endTime>=c&&-1==e.inArray(d,t.shimActiveCues)&&(t.shimActiveCues.push(d),"showing"==t.mode&&r[t.kind]&&u.activeCues.push(d),e(t).triggerHandler("cuechange"),e(d).triggerHandler("enter"),t._lastFoundCue.time=c,t._lastFoundCue.index=p),!(d.startTime>c));p++);},c()&&(function(){var i,a=function(t){i=!0,setTimeout(function(){e(t).triggerHandler("updatetrackdisplay"),i=!1},9)},s=function(s,r,n){var u,o="_sup"+n,d={prop:{}};d.prop[n]=function(){return!i&&c()&&a(e(this).closest("audio, video")),u.prop[o].apply(this,arguments)},u=t.defineNodeNameProperty(s,r,d)};s("track","track","get"),["audio","video"].forEach(function(e){s(e,"textTracks","get"),s("nodeName","addTextTrack","value")})}(),e.propHooks.activeCues={get:function(e){return e._shimActiveCues||e.activeCues}}),t.addReady(function(i,a){e("video, audio",i).add(a.filter("video, audio")).filter(function(){return t.implement(this,"trackui")}).each(function(){var i,a,s,r,o=e(this),d=function(){var e,s;if(a&&i||(a=o.prop("textTracks"),i=t.data(o[0],"mediaelementBase")||t.data(o[0],"mediaelementBase",{}),i.displayedActiveCues||(i.displayedActiveCues=[])),a&&(s=o.prop("currentTime"),s||0===s)){i.activeCues=[];for(var r=0,c=a.length;c>r;r++)e=a[r],"disabled"!=e.mode&&e.cues&&e.cues.length&&n.getActiveCue(e,o,s,i);u.update(i,o)}},p=function(e){clearTimeout(s),e?("timeupdate"==e.type&&d(),r=setTimeout(p,90)):s=setTimeout(d,9)},l=function(){a||(a=o.prop("textTracks")),e([a]).on("change",p),o.off(".trackview").on("play.trackview timeupdate.trackview updatetrackdisplay.trackview",p)};o.on("remove",function(e){!e.originalEvent&&i&&i.trackDisplay&&setTimeout(function(){i.trackDisplay.remove()},4)}),c()?(o.is(".nonnative-api-active")&&l(),o.on("mediaelementapichange trackapichange",function(){!c()||o.is(".nonnative-api-active")?l():(clearTimeout(s),clearTimeout(r),a=o.prop("textTracks"),i=t.data(o[0],"mediaelementBase")||t.data(o[0],"mediaelementBase",{}),e.each(a,function(e,t){t._shimActiveCues&&delete t._shimActiveCues}),u.hide(i),o.off(".trackview"))})):l()})})});