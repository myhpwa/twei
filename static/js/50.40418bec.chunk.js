(this.webpackJsonptwei=this.webpackJsonptwei||[]).push([[50],{224:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",(function(){return d}));var n=i(4),r=i(18),s=i(16),o="item",l="header",h="footer",a=function(t,e){var i=c(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},c=function(t,e){switch(e){case o:return t.querySelector("template:not([name])");case l:return t.querySelector("template[name=header]");case h:return t.querySelector("template[name=footer]")}},u=function(t,e,i,n,r,s,a,c,u,d,p,f){for(var g=[],v=f+p,m=p;m<v;m++){var b,y=t[m];if(r)null!=(b=r(y,m,t))&&g.push({i:d++,type:l,value:b,index:m,height:i?i(b,m):a,reads:i?0:2,visible:!!i});if(g.push({i:d++,type:o,value:y,index:m,height:e?e(y,m):u,reads:e?0:2,visible:!!e}),s)null!=(b=s(y,m,t))&&g.push({i:d++,type:h,value:b,index:m,height:n?n(b,m):c,reads:n?0:2,visible:!!n})}return g},d=function(){function t(t){var e=this;Object(r.o)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){e.updateVirtualScroll()}}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.connectedCallback=function(){return Object(n.a)(this,void 0,void 0,(function(){var t,e;return Object(n.c)(this,(function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):(console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),[2]);case 1:return e.scrollEl=i.sent(),this.contentEl=t,this.calcCells(),this.updateState(),[2]}}))}))},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.disconnectedCallback=function(){this.scrollEl=void 0},t.prototype.onResize=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(function(t,e,i){var n=e.find((function(e){return e.type===o&&e.index===t}));return n?i[n.i]:-1}(t,this.cells,this.getHeightIndex()))},t.prototype.checkRange=function(t,e){return void 0===e&&(e=-1),Object(n.a)(this,void 0,void 0,(function(){var i,r,s;return Object(n.c)(this,(function(n){return this.items?(i=-1===e?this.items.length-t:e,r=function(t,e){var i=t.length>0?t[t.length-1].index:0;return 0===e?0:e===i+1?t.length:t.findIndex((function(t){return t.index===e}))}(this.cells,t),s=u(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,t,i),this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t}(this.cells,s,r),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate(),[2]):[2]}))}))},t.prototype.checkEnd=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(t){return this.items&&this.checkRange(this.lastItemLen),[2]}))}))},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(r.h)(this.readVS.bind(this)),Object(r.f)(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this,e=t.contentEl,i=t.scrollEl,n=0,r=t.el;r&&r!==e;)n+=r.offsetTop,r=r.offsetParent;this.viewportOffset=n,i&&(this.viewportHeight=i.offsetHeight,this.currentScrollTop=i.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,e=function(t,e,i){return{top:Math.max(t-i,0),bottom:t+e+i}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight,100),i=this.getHeightIndex(),n=function(t,e,i){for(var n=e.top,r=e.bottom,s=0;s<t.length&&!(t[s]>n);s++);for(var o=Math.max(s-i-1,0);s<t.length&&!(t[s]>=r);s++);return{offset:o,length:Math.min(s+i,t.length)-o}}(i,e,2);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(t,this.range,n)&&(this.range=n,function(t,e,i,n){for(var r=0,s=t;r<s.length;r++){var o=s[r];o.change=0,o.d=!0}for(var l=[],h=n.offset+n.length,a=function(n){var r=i[n],s=t.find((function(t){return t.d&&t.cell===r}));if(s){var o=e[n];o!==s.top&&(s.top=o,s.change=1),s.d=!1}else l.push(r)},c=n.offset;c<h;c++)a(c);for(var u=t.filter((function(t){return t.d})),d=function(i){var n=u.find((function(t){return t.d&&t.cell.type===i.type})),r=i.i;n?(n.d=!1,n.change=2,n.cell=i,n.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[r]})},p=0,f=l;p<f.length;p++)d(f[p]);t.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=1,t.top=-9999}))}(this.virtualDom,i,this.cells,n),this.nodeRender?function(t,e,i,n){for(var r,s=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),o=s.length,l=0;l<i.length;l++){var h=i[l],c=h.cell;if(2===h.change){if(l<o)e(r=s[l],c,l);else{var u=a(t,c.type);(r=e(u,c,l)||u).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=c}else r=s[l];0!==h.change&&(r.style.transform="translate3d(0,"+h.top+"px,0)");var d=c.visible;h.visible!==d&&(d?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),h.visible=d),c.reads>0&&(n(c,r),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(r.l)(this))},t.prototype.updateCellHeight=function(t,e){var i=this,n=function(){if(e.$ionCell===t){var n=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e?Object(s.c)(e,n):n()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=u(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n}(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.type,n=e.value,r=e.index;switch(i){case o:return this.renderItem(n,r);case l:return this.renderHeader(n,r);case h:return this.renderFooter(n,r)}},t.prototype.render=function(){var t=this;return Object(r.j)(r.c,{style:{height:this.totalHeight+"px"}},this.renderItem&&Object(r.j)(p,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.k)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:!1,configurable:!0}),t}(),p=function(t,e,i){var n=t.dom;return i.map(e,(function(t,e){var i=n[e],r=t.vattrs||{},s=r.class||"";return s+="virtual-item ",i.visible||(s+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},r),{class:s,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,"+i.top+"px,0)"})})})}))};d.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);
//# sourceMappingURL=50.40418bec.chunk.js.map