"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[521],{521:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(689),o=r(551),p=r(184),f=function(){var t=(0,i.UO)().movieId,e=(0,s.useState)([]),r=(0,a.Z)(e,2),u=r[0],f=r[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.uV)(t);case 3:r=e.sent,f(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,p.jsxs)(p.Fragment,{children:[0!==u.length&&(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Movie Cast"}),(0,p.jsx)("ul",{className:"List",children:u.map((function(t){return(0,p.jsxs)("li",{className:"ListItem",children:[(0,p.jsx)("img",{width:"200px",height:"300px",src:t.profile_path?"https://image.tmdb.org/t/p/w300".concat(t.profile_path):"No actor profile ",alt:t.original_name}),(0,p.jsx)("p",{children:t.name})]},t.id)}))})]}),0===u.length&&(0,p.jsx)("div",{children:"We don't have any cast for this movie."})]})}},551:function(t,e,r){r.d(e,{Hx:function(){return h},Y5:function(){return o},o1:function(){return p},uV:function(){return f},wr:function(){return i}});var n=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"68756bc19b046f0067322cfee7014e71",language:"en-US"}},i=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e),s);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(e),s);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?"),s);case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?"),s);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=521.8f19e005.chunk.js.map