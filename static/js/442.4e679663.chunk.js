"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[442],{442:function(t,r,e){e.r(r);var n=e(861),a=e(439),u=e(757),c=e.n(u),s=e(791),i=e(14),o=e(209),f=e(184);r.default=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],u=r[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.wr)();case 3:r=t.sent,u(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsxs)("div",{className:"Container",children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)("div",{children:0===e.length?alert("No movies"):(0,f.jsx)(o.Z,{films:e})})]})}},14:function(t,r,e){e.d(r,{uV:function(){return p},Y5:function(){return o},Hx:function(){return l},wr:function(){return i},o1:function(){return f}});var n=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"68756bc19b046f0067322cfee7014e71",language:"en-US"}},i=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day",s);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(r),s);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?query=".concat(r),s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/credits?"),s);case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/reviews?"),s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},209:function(t,r,e){e.d(r,{Z:function(){return u}});var n=e(689),a=e(184),u=function(t){var r=t.films,e=(0,n.TH)();return(0,a.jsx)("ul",{className:"List",children:r.map((function(t){return(0,a.jsx)("li",{className:"ListItem",children:(0,a.jsxs)("link",{className:"LinkDetails",to:"/movies/".concat(t.id),state:{from:e},cover:t.poster_path,children:[(0,a.jsx)("i",{className:"LogoIcon "})," ",t.title]})},t.id)}))})}}}]);
//# sourceMappingURL=442.4e679663.chunk.js.map