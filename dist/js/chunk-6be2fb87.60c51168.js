(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6be2fb87"],{"17a7":function(t,e,i){"use strict";i("ffe8")},"221d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("Layout",[e("main",{staticStyle:{"flex-grow":"1"}},[e("div",{staticClass:"body"},[e("div",{staticClass:"title"},[t._v("TỦ SÁCH")]),e("div",{staticClass:"container-book"},[e("div",{staticClass:"menu-sidebarFT"},[e("div",{staticClass:"filter"},[e("div",{staticClass:"filter-service"},[e("div",{staticClass:"titleFT"},[t._v("BỘ LỌC")]),e("div",{staticClass:"itemFilter"},[e("div",{staticClass:"titleFilter"},[t._v("Theo dịch vụ")]),e("div",{staticClass:"groupFilter"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],attrs:{name:"type",type:"radio",value:"All",checked:""},domProps:{checked:t._q(t.filter1,"All")},on:{change:[function(e){t.filter1="All"},t.HandleFilter]}}),t._v(" Tất cả ")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],attrs:{name:"type",type:"radio",value:"Exchange"},domProps:{checked:t._q(t.filter1,"Exchange")},on:{change:[function(e){t.filter1="Exchange"},t.HandleFilter]}}),t._v(" Trao đổi ")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter1,expression:"filter1"}],attrs:{name:"type",type:"radio",value:"Rent"},domProps:{checked:t._q(t.filter1,"Rent")},on:{change:[function(e){t.filter1="Rent"},t.HandleFilter]}}),t._v(" Thuê ")])]),e("hr"),e("div",{staticClass:"titleFilter"},[t._v("Theo danh mục")]),e("div",{staticClass:"groupFilter"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter2,expression:"filter2"}],attrs:{type:"radio",name:"category",value:"0"},domProps:{checked:t._q(t.filter2,"0")},on:{change:[function(e){t.filter2="0"},t.HandleFilter]}}),t._v(" Tất cả ")]),t._l(t.listCategory,(function(i){return e("div",{key:i.id},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter2,expression:"filter2"}],attrs:{type:"radio",name:"category"},domProps:{value:i.id,checked:t._q(t.filter2,i.id)},on:{change:[function(e){t.filter2=i.id},t.HandleFilter]}}),t._v(" "+t._s(i.name)+" ")])])}))],2),e("hr"),e("div",{staticClass:"titleFilter"},[t._v("Theo giá cọc")]),e("div",{staticClass:"groupFilter"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter3,expression:"filter3"}],attrs:{name:"price",type:"radio",value:"All"},domProps:{checked:t._q(t.filter3,"All")},on:{change:[function(e){t.filter3="All"},t.HandleFilter]}}),t._v(" Tất cả ")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter3,expression:"filter3"}],attrs:{name:"price",type:"radio",value:"0-100000"},domProps:{checked:t._q(t.filter3,"0-100000")},on:{change:[function(e){t.filter3="0-100000"},t.HandleFilter]}}),t._v(" 0đ - 100,000đ ")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter3,expression:"filter3"}],attrs:{name:"price",type:"radio",value:"100000-250000"},domProps:{checked:t._q(t.filter3,"100000-250000")},on:{change:[function(e){t.filter3="100000-250000"},t.HandleFilter]}}),t._v(" 100,000đ - 250,000đ ")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter3,expression:"filter3"}],attrs:{name:"price",type:"radio",value:"250000-500000"},domProps:{checked:t._q(t.filter3,"250000-500000")},on:{change:[function(e){t.filter3="250000-500000"},t.HandleFilter]}}),t._v(" 250,000đ - 500,000đ ")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter3,expression:"filter3"}],attrs:{name:"price",type:"radio",value:"500000-10000000"},domProps:{checked:t._q(t.filter3,"500000-10000000")},on:{change:[function(e){t.filter3="500000-10000000"},t.HandleFilter]}}),t._v(" Trên 500,000đ ")])]),e("div",{staticClass:"titleFilter"},[t._v("Theo ngôn ngữ")]),e("div",{staticClass:"groupFilter"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter4,expression:"filter4"}],attrs:{type:"radio",name:"language",value:"All"},domProps:{checked:t._q(t.filter4,"All")},on:{change:[function(e){t.filter4="All"},t.HandleFilter]}}),t._v(" Tất cả ")]),t._l(t.listLanguage,(function(i){return e("div",{key:i},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter4,expression:"filter4"}],attrs:{type:"radio",name:"language"},domProps:{value:i,checked:t._q(t.filter4,i)},on:{change:[function(e){t.filter4=i},t.HandleFilter]}}),t._v(" "+t._s(i)+" ")])])}))],2)])])])]),e("div",{staticClass:"content"},[e("div",{staticClass:"search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Nhập tên sản phẩm"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),e("button",{on:{click:t.HandleSearch}},[t._v("Tìm")])]),e("hr"),e("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[e("div",{staticClass:"grid"},t._l(9,(function(t){return e("div",{key:t,staticClass:"item"},[e("b-card",{staticStyle:{height:"450px"},attrs:{"no-body":"","img-top":""}},[e("b-skeleton-img",{attrs:{"card-img":"top",aspect:"3:1",height:"290px"}}),e("b-card",{staticStyle:{height:"170px"}},[e("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),e("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),e("b-skeleton",{attrs:{animation:"wave",width:"70%"}}),e("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),e("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),e("b-skeleton",{attrs:{animation:"wave",width:"70%"}})],1)],1)],1)})),0)]},proxy:!0}])},[e("div",{staticClass:"grid"},t._l(t.listBook,(function(i){return e("div",{key:i.id,staticClass:"item"},[e("router-link",{staticStyle:{position:"relative"},attrs:{to:{name:"BookDetail",query:{id:i.id}}}},[e("img",{attrs:{src:i.image}}),i.isTrade?e("label",{staticClass:"layerR"},[t._v("Đang giao dịch")]):e("label",{staticClass:"layerG"},[t._v("Sẵn sàng")])]),e("div",{staticClass:"info"},[e("div",{staticClass:"book-title"},[e("strong",[t._v(t._s(i.title))])]),e("div",{staticClass:"book-status"},[t._v("Thể loại: "),e("strong",[t._v(t._s(i.category.name))])]),e("div",{staticClass:"book-status"},[t._v("Đăng bởi: "),e("strong",[t._v(t._s(i.user.fullname))])]),e("label",{staticClass:"book-status"},[t._v("Giá cọc: "),e("strong",[t._v(t._s(i.depositPrice.toLocaleString())+"đ")])]),e("label",{staticClass:"book-status"},[t._v("Dịch vụ: "),e("strong",[i.isExchange&&i.isRent?e("span",[t._v("Trao đổi & Thuê")]):t._e(),!i.isRent&&i.isExchange?e("span",[t._v("Trao đổi")]):t._e(),i.isRent&&!i.isExchange?e("span",[t._v("Thuê")]):t._e()])]),e("label",{staticClass:"book-status"},[t._v(t._s(i.statusBook))])])],1)})),0)]),e("div",{staticClass:"paging"},[t.isSearch&&!t.fromUser?e("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalBook,"per-page":9},on:{input:t.searchBook},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:i,active:n}){return[n?e("b",{staticStyle:{color:"white"}},[t._v(t._s(i)+" ")]):e("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(i))])]}}],null,!1,1684021845),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e(),t.isSearch||t.fromUser?t._e():e("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalBook,"per-page":9},on:{input:t.getAllBookByFilter},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:i,active:n}){return[n?e("b",{staticStyle:{color:"white"}},[t._v(t._s(i)+" ")]):e("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(i))])]}}],null,!1,1684021845),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),t.fromUser?e("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalBook,"per-page":9},on:{input:t.getAllBookFromLikeUser},scopedSlots:t._u([{key:"first-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[e("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:i,active:n}){return[n?e("b",{staticStyle:{color:"white"}},[t._v(t._s(i)+" ")]):e("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(i))])]}}],null,!1,1684021845),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)],1)])])])])},a=[],r=i("cde1"),s=i("fbfb"),o=i("ebad"),l=i("48ac"),c=i.n(l),u={name:"AllBooks",components:{Layout:o["a"]},data(){return{filter1:"All",filter2:0,filter3:"All",filter4:"All",userByToken:"",listCategory:"",listLanguage:["Tiếng Việt","Tiếng Anh","Tiếng Hán","Tiếng Hàn","Tiếng Nhật","Tiếng Tây Ban Nha","Tiếng Pháp","Tiếng Đức","Tiếng Nga","Tiếng Bồ Đào Nha","Tiếng Hindi","Khác"],listBook:"",totalBook:"",search:"",isSearch:!1,loading:!1,fromUser:!1,page:1}},created(){this.isSearch=!1,this.HandleFilter(1),this.getListCategories()},methods:{searchBook(t){this.loading=!0;const e=s["a"].SEARCH_BOOK+t;r["a"].callApi(e,"POST",{search:this.search}).then(e=>{this.listBook=e.data.data,this.totalBook=e.data.numberOfRecords,this.loading=!1,this.page=t}).catch(()=>{})},getAllBookFromLikeUser(t){this.fromUser=!0,this.loading=!0,this.userByToken=c.a.decode(this.$cookies.get("token"),"utf-8"),window.scrollTo(0,0);const e=s["a"].LIST_BOOK_FOLLOW+"?page="+t;r["a"].callApi(e,"POST",{userId:this.userByToken.UserId}).then(e=>{this.listBook=e.data.data,this.totalBook=e.data.numberOfRecords,this.loading=!1,this.page=t}).catch(()=>{})},getAllBookByFilter(t){this.loading=!0,window.scrollTo(0,0);const e=s["a"].FILTER_BOOK+"?page="+t;r["a"].callApi(e,"POST",{filter1:this.filter1,filter2:this.filter2,filter3:this.filter3,filter4:this.filter4}).then(e=>{this.listBook=e.data.data,this.totalBook=e.data.numberOfRecords,this.loading=!1,this.page=t}).catch(()=>{})},HandleFilter(){this.fromUser=!1,this.search="",this.getAllBookByFilter(1)},HandleSearch(){return this.fromUser=!1,this.search?(this.isSearch=!0,this.searchBook(1)):(this.filter1="All",this.filter2=0,this.filter3="All",this.filter4="All",this.isSearch=!1,this.getAllBookByFilter(1))},getListCategories(){r["a"].callApi(s["e"].All_CATEGORY,"GET",{}).then(t=>{this.listCategory=t.data.data}).catch(()=>{})}}},f=u,d=(i("17a7"),i("2877")),h=Object(d["a"])(f,n,a,!1,null,null,null);e["default"]=h.exports},"2d06":function(t,e,i){},"48ac":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){return function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/vue-jwt-decode/dist",e(e.s=10)}([function(t,e,i){t.exports=!i(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var i=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=i)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,i){var n=i(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){var i=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:i)(t)}},function(t,e,i){var n=i(6),a=i(5);t.exports=function(t){return n(a(t))}},function(t,e,i){"use strict";var n=i(11),a=i.n(n);e.a={install:function(t){t.prototype.$jwtDec=this,t.jwtDec=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var e=t.split(".");if(e.length<2)return null;var i=JSON.parse(atob(e[0])),n=JSON.parse(atob(e[1]));return a()({},i,n)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(9);e.default=n.a},function(t,e,i){t.exports={default:i(12),__esModule:!0}},function(t,e,i){i(38),t.exports=i(4).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var n=i(3);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,i){var n=i(8),a=i(34),r=i(33);t.exports=function(t){return function(e,i,s){var o,l=n(e),c=a(l.length),u=r(s,c);if(t&&i!=i){for(;c>u;)if((o=l[u++])!=o)return!0}else for(;c>u;u++)if((t||u in l)&&l[u]===i)return t||u||0;return!t&&-1}}},function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,e,i){var n=i(13);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,a){return t.call(e,i,n,a)}}return function(){return t.apply(e,arguments)}}},function(t,e,i){var n=i(3),a=i(2).document,r=n(a)&&n(a.createElement);t.exports=function(t){return r?a.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,i){var n=i(2),a=i(4),r=i(17),s=i(22),o=function(t,e,i){var l,c,u,f=t&o.F,d=t&o.G,h=t&o.S,p=t&o.P,v=t&o.B,_=t&o.W,m=d?a:a[e]||(a[e]={}),g=m.prototype,y=d?n:h?n[e]:(n[e]||{}).prototype;for(l in d&&(i=e),i)(c=!f&&y&&void 0!==y[l])&&l in m||(u=c?y[l]:i[l],m[l]=d&&"function"!=typeof y[l]?i[l]:v&&c?r(u,n):_&&y[l]==u?function(t){var e=function(e,i,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(u):p&&"function"==typeof u?r(Function.call,u):u,p&&((m.virtual||(m.virtual={}))[l]=u,t&o.R&&g&&!g[l]&&s(g,l,u)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,t.exports=o},function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},function(t,e,i){var n=i(25),a=i(30);t.exports=i(0)?function(t,e,i){return n.f(t,e,a(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e,i){t.exports=!i(0)&&!i(1)((function(){return 7!=Object.defineProperty(i(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,i){"use strict";var n=i(28),a=i(26),r=i(29),s=i(35),o=i(6),l=Object.assign;t.exports=!l||i(1)((function(){var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach((function(t){e[t]=t})),7!=l({},t)[i]||Object.keys(l({},e)).join("")!=n}))?function(t,e){for(var i=s(t),l=arguments.length,c=1,u=a.f,f=r.f;l>c;)for(var d,h=o(arguments[c++]),p=u?n(h).concat(u(h)):n(h),v=p.length,_=0;v>_;)f.call(h,d=p[_++])&&(i[d]=h[d]);return i}:l},function(t,e,i){var n=i(14),a=i(23),r=i(36),s=Object.defineProperty;e.f=i(0)?Object.defineProperty:function(t,e,i){if(n(t),e=r(e,!0),n(i),a)try{return s(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,i){var n=i(21),a=i(8),r=i(15)(!1),s=i(31)("IE_PROTO");t.exports=function(t,e){var i,o=a(t),l=0,c=[];for(i in o)i!=s&&n(o,i)&&c.push(i);for(;e.length>l;)n(o,i=e[l++])&&(~r(c,i)||c.push(i));return c}},function(t,e,i){var n=i(27),a=i(19);t.exports=Object.keys||function(t){return n(t,a)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){var n=i(32)("keys"),a=i(37);t.exports=function(t){return n[t]||(n[t]=a(t))}},function(t,e,i){var n=i(2),a=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,e,i){var n=i(7),a=Math.max,r=Math.min;t.exports=function(t,e){return t=n(t),t<0?a(t+e,0):r(t,e)}},function(t,e,i){var n=i(7),a=Math.min;t.exports=function(t){return t>0?a(n(t),9007199254740991):0}},function(t,e,i){var n=i(5);t.exports=function(t){return Object(n(t))}},function(t,e,i){var n=i(3);t.exports=function(t,e){if(!n(t))return t;var i,a;if(e&&"function"==typeof(i=t.toString)&&!n(a=i.call(t)))return a;if("function"==typeof(i=t.valueOf)&&!n(a=i.call(t)))return a;if(!e&&"function"==typeof(i=t.toString)&&!n(a=i.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,e){var i=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+n).toString(36))}},function(t,e,i){var n=i(20);n(n.S+n.F,"Object",{assign:i(24)})}])}))},c67f:function(t,e,i){"use strict";i("2d06")},d8b4:function(t,e,i){t.exports=i.p+"img/logo.d67a157a.png"},ebad:function(t,e,i){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[e("header",{staticClass:"Main__header"},[e("div",{staticClass:"Main__header__container"},[t._m(0),e("div",[e("nav",{staticClass:"Main__nav",staticStyle:{"padding-left":"50px"}},[e("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),e("router-link",{staticClass:"Main__list__item course-management btnCategory",attrs:{to:"/AllBooks","active-color":"#9D6B54"}},[t._v("Tủ sách")]),e("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/BlogIndex","active-color":"#9D6B54"}},[t._v("Trạm đọc ")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Policy&Terms","active-color":"#9D6B54"}},[t._v("Chính sách & điều khoản ")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Quy trình ")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Giới thiệu ")])],1)]),e("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?e("nav",[e("li",[e("b-dropdown",{attrs:{variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("Icon",{staticClass:"icon",attrs:{icon:"tabler:bell-ringing-2"}}),e("div",{staticClass:"countNoti"},[t._v(t._s(t.count))])]},proxy:!0}])},[e("div",{staticClass:"titleNoti"},[t._v("Thông Báo")]),t._l(t.noti,(function(i){return e("div",{key:i.id,staticClass:"notification"},[t._v(' "'+t._s(i.content)+'" '),e("hr",{staticStyle:{"margin-top":"0px","margin-bottom":"10px"}})])})),e("div",{staticClass:"allNoti"},[e("router-link",{staticClass:"linkAllNoti",attrs:{to:"AllNotification"}},[t._v("Xem tất cả")])],1)],2)],1),e("li",[e("b-dropdown",{attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("img",{staticClass:"icon",attrs:{src:t.user.avatar}})]},proxy:!0}])},[e("div",{staticClass:"dropdown-item-top"},[e("Icon",{staticClass:"iconPerson",attrs:{icon:"ic:round-person-pin"}}),t._v(t._s(t.user.fullname))],1),e("hr",{staticStyle:{margin:"5px"}}),e("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyBooks"}},[t._v(" Trang cá nhân ")]),e("hr",{staticStyle:{margin:"5px"}}),1==t.user.roleId||2==t.user.roleId?e("div",[e("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[t._v(" Quản trị ")]),e("hr",{staticStyle:{margin:"5px"}})],1):t._e(),e("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[t._v("Đăng xuất")])],1)],1)]):e("nav",[e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),e("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default"),e("footer",[t._m(1),e("div",{staticClass:"Main__footer"},[e("div",{staticClass:"Main__footer__container"},[e("div",{staticClass:"grid"},[e("div",{staticClass:"grid-row"},[t._m(2),e("div",{staticClass:"grid-column"},[e("h3",{staticClass:"heading"},[t._v("TÀI KHOẢN")]),e("ul",{staticClass:"list"},[e("li",{staticClass:"item"},[this.$cookies.get("token")?e("a",{staticClass:"item-link",staticStyle:{cursor:"pointer"},on:{click:t.HandleLogout}},[t._v("Đăng xuất")]):e("a",{staticClass:"item-link",attrs:{href:"/login"}},[t._v("Đăng nhập/Đăng ký")])]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])]),t._m(8),t._m(9)])])])])])],2)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"Main__logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:i("d8b4"),alt:"Logo Trạm Sách"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"Main__subfooter"},[e("div",{staticClass:"Main__subfooter__container"},[e("div",{staticClass:"contact"},[e("span",[t._v("ĐĂNG KÝ NHẬN TIN:")]),e("input",{staticClass:"input1",attrs:{type:"text",placeholder:"Nhập tên của bạn"}}),e("input",{staticClass:"input2",attrs:{type:"text",placeholder:"Nhập email của bạn"}}),e("button",[t._v("ĐĂNG KÝ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid-column"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:i("d8b4"),alt:"Logo Trạm Sách"}})]),e("br"),e("span",[t._v("Tất cả các giao dịch ở Trạm Sách được")]),e("br"),e("span",[t._v("chúng tôi đảm bảo kiểm duyệt qua ")]),e("br"),e("span",[t._v("hình thức và giao hàng tận nơi trong ")]),e("br"),e("span",[t._v(" địa bàn nội thành TP Hà Nội. Không")]),e("br"),e("span",[t._v("hỗ trợ giao dịch trực tiếp tại Trạm.")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin cá nhân")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin giao hàng")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Tủ sách")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trang cá nhân")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"item"},[e("span",{staticClass:"contact_info"},[t._v("tramsachhn@gmail.com")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid-column"},[e("h3",{staticClass:"heading"},[t._v("HỖ TRỢ")]),e("ul",{staticClass:"list"},[e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách kiểm duyệt")])]),e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách cọc - hoàn tiền")])]),e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Quy trình giao dịch")])]),e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trung tâm hỗ trợ")])]),e("li",{staticClass:"item"},[e("span",{staticClass:"contact_info"},[t._v("Hotline: 0961284654")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid-column"},[e("h3",{staticClass:"heading"},[t._v("DỊCH VỤ")]),e("ul",{staticClass:"list"},[e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Điều khoản sử dụng")])]),e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thông tin cá nhân")])]),e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Phương thức thanh toán")])]),e("li",{staticClass:"item"},[e("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Giới thiệu Trạm Sách")])]),e("li",{staticClass:"item"},[e("span",{staticClass:"contact_info"},[t._v("Số 1 Đào Duy Anh, Đống Đa, Hà Nội")])])])])}],r=i("48ac"),s=i.n(r),o=i("fbfb"),l=i("cde1"),c=i("5ea9"),u={name:"Layout",components:{Icon:c["a"]},data(){return{userByToken:"",user:"",noti:"",userId:"",count:""}},created(){this.getUserInfoByToken(),this.getNotifications(),this.getNotificationsNotRead()},methods:{getUserInfoByToken(){let t=this.$cookies.get("token");this.userByToken=s.a.decode(t,"utf-8"),l["a"].callApi(o["j"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.user=t.data.data}).catch(()=>{})},getNotifications(){let t=this.$cookies.get("token");this.userByToken=s.a.decode(t,"utf-8"),l["a"].callApi(o["j"].NOTIFICATION_10,"POST",{userId:this.userByToken.UserId}).then(t=>{this.noti=t.data.data}).catch(()=>{})},getNotificationsNotRead(){let t=this.$cookies.get("token");this.userByToken=s.a.decode(t,"utf-8"),l["a"].callApi(o["j"].NOTIFICATION_NOT_READ,"POST",{userId:this.userByToken.UserId}).then(t=>{this.count=t.data.numberOfRecords}).catch(()=>{})},HandleLogout(){this.$cookies.remove("token"),window.location.replace("/")}}},f=u,d=(i("c67f"),i("2877")),h=Object(d["a"])(f,n,a,!1,null,null,null);e["a"]=h.exports},ffe8:function(t,e,i){}}]);
//# sourceMappingURL=chunk-6be2fb87.60c51168.js.map