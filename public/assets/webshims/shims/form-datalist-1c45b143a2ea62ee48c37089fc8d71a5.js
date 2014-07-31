webshims.register("form-datalist",function(t,i,e,a,s,o){"use strict";var r=function(t){t&&"string"==typeof t||(t="DOM"),r[t+"Loaded"]||(r[t+"Loaded"]=!0,i.ready(t,function(){i.loader.loadList(["form-datalist-lazy"])}))},d={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};i.modules["form-number-date-ui"].loaded&&t.extend(d,{number:1,time:1}),i.propTypes.element=function(e,s){i.createPropDefault(e,"attr"),e.prop||(e.prop={get:function(){var i=t.attr(this,s);return i&&(i=a.getElementById(i),i&&e.propNodeName&&!t.nodeName(i,e.propNodeName)&&(i=null)),i||null},writeable:!1})},function(){var l=i.cfg.forms,n=i.support.datalist;if(!n||l.customDatalist){var p=function(){var e=function(){var i;!t.data(this,"datalistWidgetData")&&(i=t.prop(this,"id"))?t('input[list="'+i+'"], input[data-wslist="'+i+'"]').eq(0).attr("list",i):t(this).triggerHandler("updateDatalist")},a={autocomplete:{attr:{get:function(){var i=this,e=t.data(i,"datalistWidget");return e?e._autocomplete:"autocomplete"in i?i.autocomplete:i.getAttribute("autocomplete")},set:function(i){var e=this,a=t.data(e,"datalistWidget");a?(a._autocomplete=i,"off"==i&&a.hideList()):"autocomplete"in e?e.autocomplete=i:e.setAttribute("autocomplete",i)}}}};n?((t("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||i.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var i=this.options||[];if(!i.length){var e=this,a=t("select",e);a[0]&&a[0].options&&a[0].options.length&&(i=a[0].options)}return i}}}),a.list={attr:{get:function(){var e=i.contentAttr(this,"list");return null!=e?(t.data(this,"datalistListAttr",e),d[t.prop(this,"type")]||d[t.attr(this,"type")]||this.removeAttribute("list")):e=t.data(this,"datalistListAttr"),null==e?s:e},set:function(e){var a=this;t.data(a,"datalistListAttr",e),d[t.prop(this,"type")]||d[t.attr(this,"type")]?a.setAttribute("list",e):(i.objectCreate(u,s,{input:a,id:e,datalist:t.prop(a,"list")}),a.setAttribute("data-wslist",e)),t(a).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):i.defineNodeNameProperties("input",{list:{attr:{get:function(){var t=i.contentAttr(this,"list");return null==t?s:t},set:function(e){var a=this;i.contentAttr(a,"list",e),i.objectCreate(o.shadowListProto,s,{input:a,id:e,datalist:t.prop(a,"list")}),t(a).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}}),i.defineNodeNameProperties("input",a),i.addReady(function(t,i){i.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(e)})},u={_create:function(a){if(!d[t.prop(a.input,"type")]&&!d[t.attr(a.input,"type")]){var s=a.datalist,o=t.data(a.input,"datalistWidget"),l=this;return s&&o&&o.datalist!==s?(o.datalist=s,o.id=a.id,t(o.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",t.proxy(o,"_resetListCached")),o._resetListCached(),void 0):s?(o&&o.datalist===s||(this.datalist=s,this.id=a.id,this.hasViewableData=!0,this._autocomplete=t.attr(a.input,"autocomplete"),t.data(a.input,"datalistWidget",this),t.data(s,"datalistWidgetData",this),r("WINDOWLOAD"),i.isReady("form-datalist-lazy")?e.QUnit?l._lazyCreate(a):setTimeout(function(){l._lazyCreate(a)},9):(t(a.input).one("focus",r),i.ready("form-datalist-lazy",function(){l._destroyed||l._lazyCreate(a)}))),void 0):(o&&o.destroy(),void 0)}},destroy:function(i){var o,r=t.attr(this.input,"autocomplete");t(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),t(a).off(".datalist"+this.id),t(e).off(".datalist"+this.id),this.input.form&&this.input.id&&t(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),r===s?this.input.removeAttribute("autocomplete"):t(this.input).attr("autocomplete",r),i&&"beforeunload"==i.type&&(o=this.input,setTimeout(function(){t.attr(o,"list",t.attr(o,"list"))},9)),this._destroyed=!0}};i.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:t.extend(o,{shadowListProto:u})}),o.list||(o.list={}),p()}}()});