!function(e){if("function"==typeof define&&define.amd)define(["jquery","moment"],e);else{if(!jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if(!moment)throw"bootstrap-datetimepicker requires moment.js to be loaded first";e(jQuery,moment)}}(function(e,t){if("undefined"==typeof t)throw alert("momentjs is required"),new Error("momentjs is required");var a=0,n=t,o=function(t,o){var s=e.fn.datetimepicker.defaults,d={time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down"},r=this,c=function(){var i,c=!1;if(r.options=e.extend({},s,o),r.options.icons=e.extend({},d,r.options.icons),r.element=e(t),l(),!r.options.pickTime&&!r.options.pickDate)throw new Error("Must choose at least one picker");if(r.id=a++,n.lang(r.options.language),r.date=n(),r.unset=!1,r.isInput=r.element.is("input"),r.component=!1,r.element.hasClass("input-group")&&(r.component=0==r.element.find(".datepickerbutton").size()?r.element.find("[class^='input-group-']"):r.element.find(".datepickerbutton")),r.format=r.options.format,i=n()._lang._longDateFormat,r.format||(r.format=r.options.pickDate?i.L:"",r.options.pickDate&&r.options.pickTime&&(r.format+=" "),r.format+=r.options.pickTime?i.LT:"",r.options.useSeconds&&(~i.LT.indexOf(" A")?r.format=r.format.split(" A")[0]+":ss A":r.format+=":ss")),r.use24hours=r.format.toLowerCase().indexOf("a")<1,r.component&&(c=r.component.find("span")),r.options.pickTime&&c&&c.addClass(r.options.icons.time),r.options.pickDate&&c&&(c.removeClass(r.options.icons.time),c.addClass(r.options.icons.date)),r.widget=e(W()).appendTo("body"),r.options.useSeconds&&!r.use24hours&&r.widget.width(300),r.minViewMode=r.options.minViewMode||0,"string"==typeof r.minViewMode)switch(r.minViewMode){case"months":r.minViewMode=1;break;case"years":r.minViewMode=2;break;default:r.minViewMode=0}if(r.viewMode=r.options.viewMode||0,"string"==typeof r.viewMode)switch(r.viewMode){case"months":r.viewMode=1;break;case"years":r.viewMode=2;break;default:r.viewMode=0}if(r.options.disabledDates=E(r.options.disabledDates),r.options.enabledDates=E(r.options.enabledDates),r.startViewMode=r.viewMode,r.setMinDate(r.options.minDate),r.setMaxDate(r.options.maxDate),g(),w(),k(),b(),y(),h(),V(),q(),""!==r.options.defaultDate&&""==p().val()&&r.setValue(r.options.defaultDate),1!==r.options.minuteStepping){var m=r.options.minuteStepping;r.date.minutes(Math.round(r.date.minutes()/m)*m%60).seconds(0)}},p=function(){var e;if(r.isInput)return r.element;if(e=r.element.find(".datepickerinput"),0===e.size())e=r.element.find("input");else if(!e.is("input"))throw new Error('CSS class "datepickerinput" cannot be applied to non input element');return e},l=function(){var e;e=r.element.is("input")?r.element.data():r.element.data(),void 0!==e.dateFormat&&(r.options.format=e.dateFormat),void 0!==e.datePickdate&&(r.options.pickDate=e.datePickdate),void 0!==e.datePicktime&&(r.options.pickTime=e.datePicktime),void 0!==e.dateUseminutes&&(r.options.useMinutes=e.dateUseminutes),void 0!==e.dateUseseconds&&(r.options.useSeconds=e.dateUseseconds),void 0!==e.dateUsecurrent&&(r.options.useCurrent=e.dateUsecurrent),void 0!==e.dateMinutestepping&&(r.options.minuteStepping=e.dateMinutestepping),void 0!==e.dateMindate&&(r.options.minDate=e.dateMindate),void 0!==e.dateMaxdate&&(r.options.maxDate=e.dateMaxdate),void 0!==e.dateShowtoday&&(r.options.showToday=e.dateShowtoday),void 0!==e.dateCollapse&&(r.options.collapse=e.dateCollapse),void 0!==e.dateLanguage&&(r.options.language=e.dateLanguage),void 0!==e.dateDefaultdate&&(r.options.defaultDate=e.dateDefaultdate),void 0!==e.dateDisableddates&&(r.options.disabledDates=e.dateDisableddates),void 0!==e.dateEnableddates&&(r.options.enabledDates=e.dateEnableddates),void 0!==e.dateIcons&&(r.options.icons=e.dateIcons),void 0!==e.dateUsestrict&&(r.options.useStrict=e.dateUsestrict),void 0!==e.dateDirection&&(r.options.direction=e.dateDirection),void 0!==e.dateSidebyside&&(r.options.sideBySide=e.dateSidebyside)},m=function(){var t="absolute",i=r.component?r.component.offset():r.element.offset(),a=e(window);r.width=r.component?r.component.outerWidth():r.element.outerWidth(),i.top=i.top+r.element.outerHeight();var n;"up"===r.options.direction?n="top":"bottom"===r.options.direction?n="bottom":"auto"===r.options.direction&&(n=i.top+r.widget.height()>a.height()+a.scrollTop()&&r.widget.height()+r.element.outerHeight()<i.top?"top":"bottom"),"top"===n?(i.top-=r.widget.height()+r.element.outerHeight()+15,r.widget.addClass("top").removeClass("bottom")):(i.top+=1,r.widget.addClass("bottom").removeClass("top")),void 0!==r.options.width&&r.widget.width(r.options.width),"left"===r.options.orientation&&(r.widget.addClass("left-oriented"),i.left=i.left-r.widget.width()+20),O()&&(t="fixed",i.top-=a.scrollTop(),i.left-=a.scrollLeft()),a.width()<i.left+r.widget.outerWidth()?(i.right=a.width()-i.left-r.width,i.left="auto",r.widget.addClass("pull-right")):(i.right="auto",r.widget.removeClass("pull-right")),r.widget.css({position:t,top:i.top,left:i.left,right:i.right})},u=function(e,t){n(r.date).isSame(n(e))||(r.element.trigger({type:"dp.change",date:n(r.date),oldDate:n(e)}),"change"!==t&&r.element.change())},f=function(e){r.element.trigger({type:"dp.error",date:n(e)})},h=function(e){n.lang(r.options.language);var t=e;t||(t=p().val(),t&&(r.date=n(t,r.format,r.options.useStrict)),r.date||(r.date=n())),r.viewDate=n(r.date).startOf("month"),v(),D()},g=function(){n.lang(r.options.language);var t,i=e("<tr>"),a=n.weekdaysMin();if(0==n()._lang._week.dow)for(t=0;7>t;t++)i.append('<th class="dow">'+a[t]+"</th>");else for(t=1;8>t;t++)7==t?i.append('<th class="dow">'+a[0]+"</th>"):i.append('<th class="dow">'+a[t]+"</th>");r.widget.find(".datepicker-days thead").append(i)},w=function(){n.lang(r.options.language);for(var e="",t=0,i=n.monthsShort();12>t;)e+='<span class="month">'+i[t++]+"</span>";r.widget.find(".datepicker-months td").append(e)},v=function(){if(r.options.pickDate){n.lang(r.options.language);var t,i,a,o,s,d,c,p,l,m=r.viewDate.year(),u=r.viewDate.month(),f=r.options.minDate.year(),h=r.options.minDate.month(),g=r.options.maxDate.year(),w=r.options.maxDate.month(),v=[],k=n.months();for(r.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"),r.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"),r.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"),r.widget.find(".datepicker-days th:eq(1)").text(k[u]+" "+m),i=n(r.viewDate).subtract("months",1),c=i.daysInMonth(),i.date(c).startOf("week"),(m==f&&h>=u||f>m)&&r.widget.find(".datepicker-days th:eq(0)").addClass("disabled"),(m==g&&u>=w||m>g)&&r.widget.find(".datepicker-days th:eq(2)").addClass("disabled"),a=n(i).add(42,"d");i.isBefore(a);){if(i.weekday()===n().startOf("week").weekday()&&(o=e("<tr>"),v.push(o)),s="",i.year()<m||i.year()==m&&i.month()<u?s+=" old":(i.year()>m||i.year()==m&&i.month()>u)&&(s+=" new"),i.isSame(n({y:r.date.year(),M:r.date.month(),d:r.date.date()}))&&(s+=" active"),(U(i,"day")||!j(i))&&(s+=" disabled"),r.options.showToday===!0&&i.isSame(n(),"day")&&(s+=" today"),r.options.daysOfWeekDisabled)for(d in r.options.daysOfWeekDisabled)if(i.day()==r.options.daysOfWeekDisabled[d]){s+=" disabled";break}o.append('<td class="day'+s+'">'+i.date()+"</td>"),t=i.date(),i.add(1,"d"),t==i.date()&&i.add(1,"d")}for(r.widget.find(".datepicker-days tbody").empty().append(v),l=r.date.year(),k=r.widget.find(".datepicker-months").find("th:eq(1)").text(m).end().find("span").removeClass("active"),l===m&&k.eq(r.date.month()).addClass("active"),f>l-1&&r.widget.find(".datepicker-months th:eq(0)").addClass("disabled"),l+1>g&&r.widget.find(".datepicker-months th:eq(2)").addClass("disabled"),d=0;12>d;d++)m==f&&h>d||f>m?e(k[d]).addClass("disabled"):(m==g&&d>w||m>g)&&e(k[d]).addClass("disabled");for(v="",m=10*parseInt(m/10,10),p=r.widget.find(".datepicker-years").find("th:eq(1)").text(m+"-"+(m+9)).end().find("td"),r.widget.find(".datepicker-years").find("th").removeClass("disabled"),f>m&&r.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"),m+9>g&&r.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"),m-=1,d=-1;11>d;d++)v+='<span class="year'+(-1===d||10===d?" old":"")+(l===m?" active":"")+(f>m||m>g?" disabled":"")+'">'+m+"</span>",m+=1;p.html(v)}},k=function(){n.lang(r.options.language);var e,t,i,a=r.widget.find(".timepicker .timepicker-hours table"),o="";if(a.parent().hide(),r.use24hours)for(e=0,t=0;6>t;t+=1){for(o+="<tr>",i=0;4>i;i+=1)o+='<td class="hour">'+F(e.toString())+"</td>",e++;o+="</tr>"}else for(e=1,t=0;3>t;t+=1){for(o+="<tr>",i=0;4>i;i+=1)o+='<td class="hour">'+F(e.toString())+"</td>",e++;o+="</tr>"}a.html(o)},b=function(){var e,t,i=r.widget.find(".timepicker .timepicker-minutes table"),a="",n=0,o=r.options.minuteStepping;for(i.parent().hide(),1==o&&(o=5),e=0;e<Math.ceil(60/o/4);e++){for(a+="<tr>",t=0;4>t;t+=1)60>n?(a+='<td class="minute">'+F(n.toString())+"</td>",n+=o):a+="<td></td>";a+="</tr>"}i.html(a)},y=function(){var e,t,i=r.widget.find(".timepicker .timepicker-seconds table"),a="",n=0;for(i.parent().hide(),e=0;3>e;e++){for(a+="<tr>",t=0;4>t;t+=1)a+='<td class="second">'+F(n.toString())+"</td>",n+=5;a+="</tr>"}i.html(a)},D=function(){if(r.date){var e=r.widget.find(".timepicker span[data-time-component]"),t=r.date.hours(),i="AM";r.use24hours||(t>=12&&(i="PM"),0===t?t=12:12!=t&&(t%=12),r.widget.find(".timepicker [data-action=togglePeriod]").text(i)),e.filter("[data-time-component=hours]").text(F(t)),e.filter("[data-time-component=minutes]").text(F(r.date.minutes())),e.filter("[data-time-component=seconds]").text(F(r.date.second()))}},M=function(t){t.stopPropagation(),t.preventDefault(),r.unset=!1;var i,a,o,s,d=e(t.target).closest("span, td, th"),c=n(r.date);if(1===d.length&&!d.is(".disabled"))switch(d[0].nodeName.toLowerCase()){case"th":switch(d[0].className){case"switch":V(1);break;case"prev":case"next":o=B.modes[r.viewMode].navStep,"prev"===d[0].className&&(o=-1*o),r.viewDate.add(o,B.modes[r.viewMode].navFnc),v()}break;case"span":d.is(".month")?(i=d.parent().find("span").index(d),r.viewDate.month(i)):(a=parseInt(d.text(),10)||0,r.viewDate.year(a)),r.viewMode===r.minViewMode&&(r.date=n({y:r.viewDate.year(),M:r.viewDate.month(),d:r.viewDate.date(),h:r.date.hours(),m:r.date.minutes(),s:r.date.seconds()}),u(c,t.type),L()),V(-1),v();break;case"td":d.is(".day")&&(s=parseInt(d.text(),10)||1,i=r.viewDate.month(),a=r.viewDate.year(),d.is(".old")?0===i?(i=11,a-=1):i-=1:d.is(".new")&&(11==i?(i=0,a+=1):i+=1),r.date=n({y:a,M:i,d:s,h:r.date.hours(),m:r.date.minutes(),s:r.date.seconds()}),r.viewDate=n({y:a,M:i,d:Math.min(28,s)}),v(),L(),u(c,t.type))}},S={incrementHours:function(){N("add","hours",1)},incrementMinutes:function(){N("add","minutes",r.options.minuteStepping)},incrementSeconds:function(){N("add","seconds",1)},decrementHours:function(){N("subtract","hours",1)},decrementMinutes:function(){N("subtract","minutes",r.options.minuteStepping)},decrementSeconds:function(){N("subtract","seconds",1)},togglePeriod:function(){var e=r.date.hours();e>=12?e-=12:e+=12,r.date.hours(e)},showPicker:function(){r.widget.find(".timepicker > div:not(.timepicker-picker)").hide(),r.widget.find(".timepicker .timepicker-picker").show()},showHours:function(){r.widget.find(".timepicker .timepicker-picker").hide(),r.widget.find(".timepicker .timepicker-hours").show()},showMinutes:function(){r.widget.find(".timepicker .timepicker-picker").hide(),r.widget.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){r.widget.find(".timepicker .timepicker-picker").hide(),r.widget.find(".timepicker .timepicker-seconds").show()},selectHour:function(t){var i=r.widget.find(".timepicker [data-action=togglePeriod]").text(),a=parseInt(e(t.target).text(),10);"PM"==i&&(a+=12),r.date.hours(a),S.showPicker.call(r)},selectMinute:function(t){r.date.minutes(parseInt(e(t.target).text(),10)),S.showPicker.call(r)},selectSecond:function(t){r.date.seconds(parseInt(e(t.target).text(),10)),S.showPicker.call(r)}},x=function(t){var i=n(r.date),a=e(t.currentTarget).data("action"),o=S[a].apply(r,arguments);return T(t),r.date||(r.date=n({y:1970})),L(),D(),u(i,t.type),o},T=function(e){e.stopPropagation(),e.preventDefault()},C=function(e){27===e.keyCode&&r.hide()},P=function(t){n.lang(r.options.language);var i=e(t.target),a=n(r.date),o=n(i.val(),r.format,r.options.useStrict);o.isValid()&&!U(o)&&j(o)?(h(),r.setValue(o),u(a,t.type),L()):(r.viewDate=a,u(a,t.type),f(o),r.unset=!0)},V=function(e){e&&(r.viewMode=Math.max(r.minViewMode,Math.min(2,r.viewMode+e))),B.modes[r.viewMode].clsName,r.widget.find(".datepicker > div").hide().filter(".datepicker-"+B.modes[r.viewMode].clsName).show()},q=function(){var t,i,a,n,o;r.widget.on("click",".datepicker *",e.proxy(M,this)),r.widget.on("click","[data-action]",e.proxy(x,this)),r.widget.on("mousedown",e.proxy(T,this)),r.element.on("keydown",e.proxy(C,this)),r.options.pickDate&&r.options.pickTime&&r.widget.on("click.togglePicker",".accordion-toggle",function(s){if(s.stopPropagation(),t=e(this),i=t.closest("ul"),a=i.find(".in"),n=i.find(".collapse:not(.in)"),a&&a.length){if(o=a.data("collapse"),o&&o.transitioning)return;a.collapse("hide"),n.collapse("show"),t.find("span").toggleClass(r.options.icons.time+" "+r.options.icons.date),r.element.find(".input-group-addon span").toggleClass(r.options.icons.time+" "+r.options.icons.date)}}),r.isInput?r.element.on({focus:e.proxy(r.show,this),change:e.proxy(P,this),blur:e.proxy(r.hide,this)}):(r.element.on({change:e.proxy(P,this)},"input"),r.component?r.component.on("click",e.proxy(r.show,this)):r.element.on("click",e.proxy(r.show,this)))},I=function(){e(window).on("resize.datetimepicker"+r.id,e.proxy(m,this)),r.isInput||e(document).on("mousedown.datetimepicker"+r.id,e.proxy(r.hide,this))},H=function(){r.widget.off("click",".datepicker *",r.click),r.widget.off("click","[data-action]"),r.widget.off("mousedown",r.stopEvent),r.options.pickDate&&r.options.pickTime&&r.widget.off("click.togglePicker"),r.isInput?r.element.off({focus:r.show,change:r.change}):(r.element.off({change:r.change},"input"),r.component?r.component.off("click",r.show):r.element.off("click",r.show))},Y=function(){e(window).off("resize.datetimepicker"+r.id),r.isInput||e(document).off("mousedown.datetimepicker"+r.id)},O=function(){if(r.element){var t,i=r.element.parents(),a=!1;for(t=0;t<i.length;t++)if("fixed"==e(i[t]).css("position")){a=!0;break}return a}return!1},L=function(){n.lang(r.options.language);var e="";r.unset||(e=n(r.date).format(r.format)),p().val(e),r.element.data("date",e),r.options.pickTime||r.hide()},N=function(e,t,i){n.lang(r.options.language);var a;return"add"==e?(a=n(r.date),23==a.hours()&&a.add(i,t),a.add(i,t)):a=n(r.date).subtract(i,t),U(n(a.subtract(i,t)))||U(a)?(f(a.format(r.format)),void 0):("add"==e?r.date.add(i,t):r.date.subtract(i,t),r.unset=!1,void 0)},U=function(e,t){n.lang(r.options.language);var i=r.options.maxDate,a=r.options.minDate;return t&&(i=n(i).endOf(t),a=n(a).startOf(t)),e.isAfter(i)||e.isBefore(a)?!0:r.options.disabledDates===!1?!1:r.options.disabledDates[n(e).format("YYYY-MM-DD")]===!0},j=function(e){return n.lang(r.options.language),r.options.enabledDates===!1?!0:r.options.enabledDates[n(e).format("YYYY-MM-DD")]===!0},E=function(e){var t={},a=0;for(i=0;i<e.length;i++)dDate=n(e[i]),dDate.isValid()&&(t[dDate.format("YYYY-MM-DD")]=!0,a++);return a>0?t:!1},F=function(e){return e=e.toString(),e.length>=2?e:"0"+e},W=function(){if(r.options.pickDate&&r.options.pickTime){var e="";return e='<div class="bootstrap-datetimepicker-widget'+(r.options.sideBySide?" timepicker-sbs":"")+' dropdown-menu" style="z-index:9999 !important;">',e+=r.options.sideBySide?'<div class="row"><div class="col-sm-6 datepicker">'+B.template+"</div>"+'<div class="col-sm-6 timepicker">'+z.getTemplate()+"</div>"+"</div>":'<ul class="list-unstyled"><li'+(r.options.collapse?' class="collapse in"':"")+">"+'<div class="datepicker">'+B.template+"</div>"+"</li>"+'<li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="'+r.options.icons.time+'"></span></a></li>'+"<li"+(r.options.collapse?' class="collapse"':"")+">"+'<div class="timepicker">'+z.getTemplate()+"</div>"+"</li>"+"</ul>",e+="</div>"}return r.options.pickTime?'<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">'+z.getTemplate()+"</div>"+"</div>":'<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">'+B.template+"</div>"+"</div>"},B={modes:[{clsName:"days",navFnc:"month",navStep:1},{clsName:"months",navFnc:"year",navStep:1},{clsName:"years",navFnc:"year",navStep:10}],headTemplate:'<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'},z={hourTemplate:'<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',minuteTemplate:'<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',secondTemplate:'<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'};B.template='<div class="datepicker-days"><table class="table-condensed">'+B.headTemplate+"<tbody></tbody></table>"+"</div>"+'<div class="datepicker-months">'+'<table class="table-condensed">'+B.headTemplate+B.contTemplate+"</table>"+"</div>"+'<div class="datepicker-years">'+'<table class="table-condensed">'+B.headTemplate+B.contTemplate+"</table>"+"</div>",z.getTemplate=function(){return'<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="'+r.options.icons.up+'"></span></a></td>'+'<td class="separator"></td>'+"<td>"+(r.options.useMinutes?'<a href="#" class="btn" data-action="incrementMinutes"><span class="'+r.options.icons.up+'"></span></a>':"")+"</td>"+(r.options.useSeconds?'<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="'+r.options.icons.up+'"></span></a></td>':"")+(r.use24hours?"":'<td class="separator"></td>')+"</tr>"+"<tr>"+"<td>"+z.hourTemplate+"</td> "+'<td class="separator">:</td>'+"<td>"+(r.options.useMinutes?z.minuteTemplate:'<span class="timepicker-minute">00</span>')+"</td> "+(r.options.useSeconds?'<td class="separator">:</td><td>'+z.secondTemplate+"</td>":"")+(r.use24hours?"":'<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>')+"</tr>"+"<tr>"+'<td><a href="#" class="btn" data-action="decrementHours"><span class="'+r.options.icons.down+'"></span></a></td>'+'<td class="separator"></td>'+"<td>"+(r.options.useMinutes?'<a href="#" class="btn" data-action="decrementMinutes"><span class="'+r.options.icons.down+'"></span></a>':"")+"</td>"+(r.options.useSeconds?'<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="'+r.options.icons.down+'"></span></a></td>':"")+(r.use24hours?"":'<td class="separator"></td>')+"</tr>"+"</table>"+"</div>"+'<div class="timepicker-hours" data-action="selectHour">'+'<table class="table-condensed"></table>'+"</div>"+'<div class="timepicker-minutes" data-action="selectMinute">'+'<table class="table-condensed"></table>'+"</div>"+(r.options.useSeconds?'<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>':"")},r.destroy=function(){H(),Y(),r.widget.remove(),r.element.removeData("DateTimePicker"),r.component&&r.component.removeData("DateTimePicker")},r.show=function(e){if(r.options.useCurrent&&""==p().val())if(1!==r.options.minuteStepping){var t=n(),i=r.options.minuteStepping;t.minutes(Math.round(t.minutes()/i)*i%60).seconds(0),r.setValue(t.format(r.format))}else r.setValue(n().format(r.format));r.widget.hasClass("picker-open")?(r.widget.hide(),r.widget.removeClass("picker-open")):(r.widget.show(),r.widget.addClass("picker-open")),r.height=r.component?r.component.outerHeight():r.element.outerHeight(),m(),r.element.trigger({type:"dp.show",date:n(r.date)}),I(),e&&T(e)},r.disable=function(){var e=r.element.find("input");e.prop("disabled")||(e.prop("disabled",!0),H())},r.enable=function(){var e=r.element.find("input");e.prop("disabled")&&(e.prop("disabled",!1),q())},r.hide=function(t){if(!t||!e(t.target).is(r.element.attr("id"))){var i,a,o=r.widget.find(".collapse");for(i=0;i<o.length;i++)if(a=o.eq(i).data("collapse"),a&&a.transitioning)return;r.widget.hide(),r.widget.removeClass("picker-open"),r.viewMode=r.startViewMode,V(),r.element.trigger({type:"dp.hide",date:n(r.date)}),Y()}},r.setValue=function(e){n.lang(r.options.language),e?r.unset=!1:(r.unset=!0,L()),n.isMoment(e)||(e=e instanceof Date?n(e):n(e,r.format)),e.isValid()?(r.date=e,L(),r.viewDate=n({y:r.date.year(),M:r.date.month()}),v(),D()):f(e)},r.getDate=function(){return r.unset?null:r.date},r.setDate=function(e){var t=n(r.date);e?r.setValue(e):r.setValue(null),u(t,"function")},r.setDisabledDates=function(e){r.options.disabledDates=E(e),r.viewDate&&h()},r.setEnabledDates=function(e){r.options.enabledDates=E(e),r.viewDate&&h()},r.setMaxDate=function(e){void 0!=e&&(r.options.maxDate=n(e),r.viewDate&&h())},r.setMinDate=function(e){void 0!=e&&(r.options.minDate=n(e),r.viewDate&&h())},c()};e.fn.datetimepicker=function(t){return this.each(function(){var i=e(this),a=i.data("DateTimePicker");a||i.data("DateTimePicker",new o(this,t))})},e.fn.datetimepicker.defaults={pickDate:!0,pickTime:!0,useMinutes:!0,useSeconds:!1,useCurrent:!0,minuteStepping:1,minDate:new n({y:1900}),maxDate:(new n).add(100,"y"),showToday:!0,collapse:!0,language:"en",defaultDate:"",disabledDates:!1,enabledDates:!1,icons:{},useStrict:!1,direction:"auto",sideBySide:!1,daysOfWeekDisabled:!1}});