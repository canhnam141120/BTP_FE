(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36da0235"],{3171:function(t,i,e){},4318:function(t,i,e){"use strict";e("6088")},"482f":function(t,i,e){"use strict";var s=function(){var t=this,i=t._self._c;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[i("div",{staticClass:"dialogContent"},[i("b-button",{staticClass:"spinner",attrs:{disabled:""}},[i("b-spinner")],1)],1)])},a=[],n={name:"LoadingDialog",props:["show","cancel","confirm"]},o=n,r=(e("ef67"),e("2877")),c=Object(r["a"])(o,s,a,!1,null,"764a15da",null);i["a"]=c.exports},"48ac":function(t,i,e){!function(i,e){t.exports=e()}(0,(function(){return function(t){function i(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}var e={};return i.m=t,i.c=e,i.i=function(t){return t},i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/vue-jwt-decode/dist",i(i.s=10)}([function(t,i,e){t.exports=!e(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,i){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,i){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,i){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,i){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)},function(t,i){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,i,e){var s=e(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==s(t)?t.split(""):Object(t)}},function(t,i){var e=Math.ceil,s=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?s:e)(t)}},function(t,i,e){var s=e(6),a=e(5);t.exports=function(t){return s(a(t))}},function(t,i,e){"use strict";var s=e(11),a=e.n(s);i.a={install:function(t){t.prototype.$jwtDec=this,t.jwtDec=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var i=t.split(".");if(i.length<2)return null;var e=JSON.parse(atob(i[0])),s=JSON.parse(atob(i[1]));return a()({},e,s)}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(9);i.default=s.a},function(t,i,e){t.exports={default:e(12),__esModule:!0}},function(t,i,e){e(38),t.exports=e(4).Object.assign},function(t,i){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,i,e){var s=e(3);t.exports=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t}},function(t,i,e){var s=e(8),a=e(34),n=e(33);t.exports=function(t){return function(i,e,o){var r,c=s(i),l=a(c.length),u=n(o,l);if(t&&e!=e){for(;l>u;)if((r=c[u++])!=r)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===e)return t||u||0;return!t&&-1}}},function(t,i){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,i,e){var s=e(13);t.exports=function(t,i,e){if(s(t),void 0===i)return t;switch(e){case 1:return function(e){return t.call(i,e)};case 2:return function(e,s){return t.call(i,e,s)};case 3:return function(e,s,a){return t.call(i,e,s,a)}}return function(){return t.apply(i,arguments)}}},function(t,i,e){var s=e(3),a=e(2).document,n=s(a)&&s(a.createElement);t.exports=function(t){return n?a.createElement(t):{}}},function(t,i){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,i,e){var s=e(2),a=e(4),n=e(17),o=e(22),r=function(t,i,e){var c,l,u,d=t&r.F,h=t&r.G,f=t&r.S,p=t&r.P,v=t&r.B,g=t&r.W,m=h?a:a[i]||(a[i]={}),_=m.prototype,k=h?s:f?s[i]:(s[i]||{}).prototype;for(c in h&&(e=i),e)(l=!d&&k&&void 0!==k[c])&&c in m||(u=l?k[c]:e[c],m[c]=h&&"function"!=typeof k[c]?e[c]:v&&l?n(u,s):g&&k[c]==u?function(t){var i=function(i,e,s){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(i);case 2:return new t(i,e)}return new t(i,e,s)}return t.apply(this,arguments)};return i.prototype=t.prototype,i}(u):p&&"function"==typeof u?n(Function.call,u):u,p&&((m.virtual||(m.virtual={}))[c]=u,t&r.R&&_&&!_[c]&&o(_,c,u)))};r.F=1,r.G=2,r.S=4,r.P=8,r.B=16,r.W=32,r.U=64,r.R=128,t.exports=r},function(t,i){var e={}.hasOwnProperty;t.exports=function(t,i){return e.call(t,i)}},function(t,i,e){var s=e(25),a=e(30);t.exports=e(0)?function(t,i,e){return s.f(t,i,a(1,e))}:function(t,i,e){return t[i]=e,t}},function(t,i,e){t.exports=!e(0)&&!e(1)((function(){return 7!=Object.defineProperty(e(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,i,e){"use strict";var s=e(28),a=e(26),n=e(29),o=e(35),r=e(6),c=Object.assign;t.exports=!c||e(1)((function(){var t={},i={},e=Symbol(),s="abcdefghijklmnopqrst";return t[e]=7,s.split("").forEach((function(t){i[t]=t})),7!=c({},t)[e]||Object.keys(c({},i)).join("")!=s}))?function(t,i){for(var e=o(t),c=arguments.length,l=1,u=a.f,d=n.f;c>l;)for(var h,f=r(arguments[l++]),p=u?s(f).concat(u(f)):s(f),v=p.length,g=0;v>g;)d.call(f,h=p[g++])&&(e[h]=f[h]);return e}:c},function(t,i,e){var s=e(14),a=e(23),n=e(36),o=Object.defineProperty;i.f=e(0)?Object.defineProperty:function(t,i,e){if(s(t),i=n(i,!0),s(e),a)try{return o(t,i,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[i]=e.value),t}},function(t,i){i.f=Object.getOwnPropertySymbols},function(t,i,e){var s=e(21),a=e(8),n=e(15)(!1),o=e(31)("IE_PROTO");t.exports=function(t,i){var e,r=a(t),c=0,l=[];for(e in r)e!=o&&s(r,e)&&l.push(e);for(;i.length>c;)s(r,e=i[c++])&&(~n(l,e)||l.push(e));return l}},function(t,i,e){var s=e(27),a=e(19);t.exports=Object.keys||function(t){return s(t,a)}},function(t,i){i.f={}.propertyIsEnumerable},function(t,i){t.exports=function(t,i){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:i}}},function(t,i,e){var s=e(32)("keys"),a=e(37);t.exports=function(t){return s[t]||(s[t]=a(t))}},function(t,i,e){var s=e(2),a=s["__core-js_shared__"]||(s["__core-js_shared__"]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,i,e){var s=e(7),a=Math.max,n=Math.min;t.exports=function(t,i){return t=s(t),t<0?a(t+i,0):n(t,i)}},function(t,i,e){var s=e(7),a=Math.min;t.exports=function(t){return t>0?a(s(t),9007199254740991):0}},function(t,i,e){var s=e(5);t.exports=function(t){return Object(s(t))}},function(t,i,e){var s=e(3);t.exports=function(t,i){if(!s(t))return t;var e,a;if(i&&"function"==typeof(e=t.toString)&&!s(a=e.call(t)))return a;if("function"==typeof(e=t.valueOf)&&!s(a=e.call(t)))return a;if(!i&&"function"==typeof(e=t.toString)&&!s(a=e.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,i){var e=0,s=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+s).toString(36))}},function(t,i,e){var s=e(20);s(s.S+s.F,"Object",{assign:e(24)})}])}))},6088:function(t,i,e){},"6eb5":function(t,i,e){"use strict";e("3171")},ae8c:function(t,i,e){},d8b4:function(t,i,e){t.exports=e.p+"img/logo.d67a157a.png"},e914:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t._self._c;return i("Layout",[i("main",{staticStyle:{"flex-grow":"1"}},[i("LoadingDialog",{directives:[{name:"show",rawName:"v-show",value:t.spinner,expression:"spinner"}],staticStyle:{"z-index":"999"}}),i("div",{staticClass:"body"},[i("div",{staticClass:"container"},[i("div",{staticClass:"profile"},[i("div",[i("b-avatar",{staticClass:"avatar-personal",attrs:{badge:"","badge-left":""}},[i("img",{staticStyle:{width:"190px",height:"190px"},attrs:{src:t.info.avatar}})])],1),i("div",[i("div",{staticClass:"infor"},[i("p",{staticClass:"name-other-person"},[t._v(t._s(t.info.fullname))]),i("div",{staticClass:"infoDes"},[i("div",{staticClass:"description"},[i("Icon",{staticClass:"iconSmall",attrs:{icon:"mdi:email"}}),i("label",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.info.email))])],1),i("div",{staticClass:"description"},[i("Icon",{staticClass:"iconSmall",attrs:{icon:"material-symbols:call"}}),i("label",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.info.phone))])],1),i("div",{staticClass:"description"},[i("Icon",{staticClass:"iconSmall",attrs:{icon:"material-symbols:location-on"}}),i("label",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.info.addressMain))])],1)])]),i("div",{staticClass:"edit"},[""==t.userByToken||t.checkLike?t._e():i("button",{staticClass:"btn-edit",on:{click:t.HandleLike}},[i("Icon",{staticStyle:{width:"20px",height:"20px","margin-right":"2%"},attrs:{icon:"ant-design:like-filled"}}),t._v(" Thích ")],1),""!=t.userByToken&&t.checkLike?i("button",{staticClass:"btn-edit",on:{click:t.HandleUnLike}},[i("Icon",{staticStyle:{width:"20px",height:"20px","margin-right":"2%"},attrs:{icon:"ant-design:dislike-filled"}}),t._v(" Bỏ Thích ")],1):t._e(),i("div",{staticClass:"likeNumber"},[i("Icon",{staticClass:"iconSmall",attrs:{icon:"mdi:like"}}),i("label",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.info.likeNumber)+" người thích")])],1)])])]),i("div",{staticClass:"content-bottom"},[i("b-card",{staticClass:"background-tab",attrs:{card:""}},[i("b-tabs",[i("b-tab",{attrs:{title:"Tủ sách",active:""}},[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBook,expression:"searchBook"}],attrs:{type:"text",placeholder:"Nhập tên sản phẩm"},domProps:{value:t.searchBook},on:{input:function(i){i.target.composing||(t.searchBook=i.target.value)}}}),i("button",{on:{click:t.HandleSearchBook}},[t._v("Tìm")])]),i("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[i("div",{staticClass:"grid-bookOP"},t._l(10,(function(t){return i("div",{key:t,staticClass:"item-bookOP"},[i("b-card",{staticStyle:{height:"380px"},attrs:{"no-body":"","img-top":""}},[i("b-skeleton-img",{attrs:{"card-img":"top",aspect:"3:1",height:"250px"}}),i("b-card",{staticStyle:{height:"130px"}},[i("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"70%"}})],1)],1)],1)})),0)]},proxy:!0}])},[0!=t.totalBook?i("div",{staticClass:"grid-bookOP"},t._l(t.listBook,(function(e){var s;return i("div",{key:e.id,staticClass:"item-bookOP"},[i("router-link",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:e.title,expression:"item.title",modifiers:{hover:!0,bottom:!0}}],staticStyle:{position:"relative"},attrs:{to:{name:"BookDetail",query:{id:e.id}}}},[i("img",{attrs:{src:e.image}}),e.isTrade?i("label",{staticClass:"layer1OP"},[t._v("Đang giao dịch")]):i("label",{staticClass:"layer2OP"},[t._v("Sẵn sàng")])]),i("div",{staticClass:"infoOP"},[i("div",{staticClass:"book-titleOP"},[i("strong",[t._v(t._s(e.title))])]),i("label",{staticClass:"book-statusOP"},[t._v("Thể loại: "),i("strong",[t._v(t._s(null===(s=e.category)||void 0===s?void 0:s.name))])]),i("label",{staticClass:"book-statusOP"},[t._v("Giá cọc: "),i("strong",[t._v(t._s(e.depositPrice.toLocaleString())+"đ")])]),i("label",{staticClass:"book-statusOP"},[t._v(t._s(e.statusBook))])])],1)})),0):i("div",{staticClass:"noBook"},[t._v("Danh sách trống!")])]),0!=t.totalBook?i("div",{staticClass:"pagingBook"},[i("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalBook,"per-page":10},on:{input:t.getBooks},scopedSlots:t._u([{key:"first-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:e,active:s}){return[s?i("b",{staticStyle:{color:"white"}},[t._v(t._s(e)+" ")]):i("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(e))])]}}],null,!1,1684021845),model:{value:t.pageBook,callback:function(i){t.pageBook=i},expression:"pageBook"}})],1):t._e()],1),i("b-tab",{attrs:{title:"Bài đăng"}},[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchPost,expression:"searchPost"}],attrs:{type:"text",placeholder:"Nhập tên sản phẩm"},domProps:{value:t.searchPost},on:{input:function(i){i.target.composing||(t.searchPost=i.target.value)}}}),i("button",{on:{click:t.HandleSearchPost}},[t._v("Tìm")])]),i("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[i("div",{staticClass:"gridPost"},t._l(6,(function(t){return i("div",{key:t,staticClass:"itemPost"},[i("b-card",{staticStyle:{height:"180px"},attrs:{"no-body":"","img-left":""}},[i("b-skeleton-img",{attrs:{"card-img":"left",width:"180px"}}),i("b-card",{staticStyle:{width:"413px",height:"180px"}},[i("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"70%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"70%"}})],1)],1)],1)})),0)]},proxy:!0}])},[0!=t.totalPost?i("div",{staticClass:"gridPost"},t._l(t.listPost,(function(e){return i("div",{key:e.id,staticClass:"itemPost"},[i("router-link",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.bottom",value:e.title,expression:"item.title",modifiers:{hover:!0,bottom:!0}}],attrs:{to:{name:"PostDetail",query:{id:e.id}}}},[i("img",{staticClass:"imagePost",attrs:{src:e.image}})]),i("button",{staticClass:"actionPost"},[t._v("Xem chi tiết")]),i("div",{staticClass:"infoPost"},[i("div",{staticClass:"titlePost"},[i("strong",[t._v(t._s(e.title))])]),i("div",{staticClass:"contentPost"},[t._v("Đăng lúc: "),i("strong",[t._v(t._s(t._f("formatDate")(e.createdDate)))])]),i("label",{staticClass:"contentPost"},[t._v(t._s(e.content))])])],1)})),0):i("div",{staticClass:"noBook"},[t._v("Danh sách trống!")])]),0!=t.totalPost?i("div",{staticClass:"pagingPost"},[i("div",{staticClass:"pagePost"},[i("b-pagination",{attrs:{"total-rows":t.totalPost,"per-page":6},on:{input:t.getPost},scopedSlots:t._u([{key:"first-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:e,active:s}){return[s?i("b",{staticStyle:{color:"white"}},[t._v(t._s(e)+" ")]):i("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(e))])]}}],null,!1,1684021845),model:{value:t.pagePost,callback:function(i){t.pagePost=i},expression:"pagePost"}})],1)]):t._e()],1)],1)],1)],1),i("div")])])],1)])},a=[],n=(e("14d9"),e("ebad")),o=e("5ea9"),r=e("fbfb"),c=e("cde1"),l=e("48ac"),u=e.n(l),d=e("482f"),h={name:"OtherPerson",components:{Layout:n["a"],Icon:o["a"],LoadingDialog:d["a"]},data(){return{userByToken:"",info:"",listBook:"",totalBook:"",listPost:"",totalPost:"",loading:!1,searchBook:"",isSearchBook:!1,searchPost:"",isSearchPost:!1,pageBook:1,pagePost:1,spinner:!1,checkLike:!1}},created(){this.$cookies.get("token")&&(this.userByToken=u.a.decode(this.$cookies.get("token"),"utf-8")),this.getInformation(),this.getBooks(1),this.getPost(1)},methods:{getInformation(){c["a"].callApi(r["i"].INFORMATION,"POST",{userId:this.$route.query.id}).then(t=>{t.data.data?(this.info=t.data.data,this.$cookies.get("token")&&this.CheckLike()):this.$router.push({name:"404Page"})}).catch(()=>{})},getBooks(t){this.loading=!0,this.isSearchBook?c["a"].callApi(r["a"].SEARCH_BOOK_USER+this.$route.query.id+"?page="+t,"POST",{search:this.searchBook}).then(i=>{this.listBook=i.data.data,this.totalBook=i.data.numberOfRecords,this.pageBook=t,this.loading=!1}).catch(()=>{}):c["a"].callApi(r["a"].USER_BOOK+this.$route.query.id+"?page="+t,"GET",{}).then(i=>{this.listBook=i.data.data,this.totalBook=i.data.numberOfRecords,this.pageBook=t,this.loading=!1}).catch(()=>{})},getPost(t){this.loading=!0,this.isSearchPost?c["a"].callApi(r["j"].SEARCH_POST_USER+this.$route.query.id+"?page="+t,"POST",{search:this.searchPost}).then(i=>{this.listPost=i.data.data,this.totalPost=i.data.numberOfRecords,this.pagePost=t,this.loading=!1}).catch(()=>{}):c["a"].callApi(r["j"].USER_POST+this.$route.query.id+"?page="+t,"GET",{}).then(i=>{this.listPost=i.data.data,this.totalPost=i.data.numberOfRecords,this.pagePost=t,this.loading=!1}).catch(()=>{})},HandleSearchBook(){return this.searchBook?this.isSearchBook=!0:this.isSearchBook=!1,this.getBooks(1)},HandleSearchPost(){return this.searchPost?this.isSearchPost=!0:this.isSearchPost=!1,this.getPost(1)},HandleLike(){this.userByToken=u.a.decode(this.$cookies.get("token"),"utf-8"),c["a"].callApi(r["i"].ADD_USER_FAVORITE+this.$route.query.id,"POST",{userId:this.userByToken.UserId}).then(t=>{"ADD_SUCCESS"==t.data.message&&(this.getInformation(),this.checkLike=!0)}).catch(()=>{})},HandleUnLike(){this.userByToken=u.a.decode(this.$cookies.get("token"),"utf-8"),c["a"].callApi(r["i"].DELETE_USER_FAVORITE+this.$route.query.id,"DELETE",{userId:this.userByToken.UserId}).then(t=>{"DELETE_SUCCESS"==t.data.message&&(this.getInformation(),this.checkLike=!1)}).catch(()=>{})},CheckLike(){this.userByToken=u.a.decode(this.$cookies.get("token"),"utf-8"),c["a"].callApi(r["i"].CHECK_USER_LIKE+this.$route.query.id,"POST",{userId:this.userByToken.UserId}).then(t=>{"TRUE"==t.data.message?this.checkLike=!0:this.checkLike=!1}).catch(()=>{})}},filters:{formatDate(t){return new Date(t).toLocaleString("en-GB")}}},f=h,p=(e("6eb5"),e("2877")),v=Object(p["a"])(f,s,a,!1,null,null,null);i["default"]=v.exports},ebad:function(t,i,e){"use strict";var s=function(){var t=this,i=t._self._c;return i("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[i("header",{staticClass:"Main__header"},[i("div",{staticClass:"Main__header__container"},[t._m(0),i("div",[i("nav",{staticClass:"Main__nav",staticStyle:{"padding-left":"50px"}},[i("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),i("router-link",{staticClass:"Main__list__item course-management btnCategory",attrs:{to:"/AllBooks","active-color":"#9D6B54"}},[t._v("Tủ sách")]),i("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/BlogIndex","active-color":"#9D6B54"}},[t._v("Trạm đọc ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Policy&Terms","active-color":"#9D6B54"}},[t._v("Chính sách & điều khoản ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Process","active-color":"#9D6B54"}},[t._v("Quy trình ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Introduce","active-color":"#9D6B54"}},[t._v("Giới thiệu ")])],1)]),i("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?i("nav",[i("li",[i("b-dropdown",{attrs:{variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("Icon",{staticClass:"icon",attrs:{icon:"tabler:bell-ringing-2"}}),i("div",{staticClass:"countNoti"},[t._v(t._s(t.count))])]},proxy:!0}])},[i("div",{staticClass:"titleNoti"},[t._v("THÔNG BÁO")]),""!=t.noti?i("div",[t._l(t.noti,(function(e){return i("div",{key:e.id,staticClass:"notification"},[e.isRead?i("div",{staticStyle:{padding:"5px 10px"}},[t._v(t._s(e.content))]):i("div",{staticStyle:{"background-color":"#F0ECE4","border-radius":"5px",padding:"5px 10px"}},[t._v(t._s(e.content))])])})),i("div",{staticClass:"allNoti"},[i("router-link",{staticClass:"linkAllNoti",attrs:{to:"AllNotification"}},[t._v("Xem tất cả")])],1)],2):i("div",{staticClass:"noBookNoti"},[t._v("Danh sách trống!")])])],1),i("li",[i("b-dropdown",{attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("img",{staticClass:"icon",attrs:{src:t.user.avatar}})]},proxy:!0}])},[i("div",{staticClass:"dropdown-item-top"},[i("img",{staticClass:"icon",attrs:{src:t.user.avatar}}),i("div",[t._v(t._s(t.user.fullname))]),i("div",{staticStyle:{color:"grey"}},[t._v(t._s(t.user.email))])]),i("hr",{staticStyle:{margin:"5px"}}),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyBooks"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"ph:folder-user-bold"}}),t._v(" Quản lý cá nhân ")],1),i("hr",{staticStyle:{margin:"5px"}}),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyTransaction"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"uil:transaction"}}),t._v(" Giao dịch ")],1),i("hr",{staticStyle:{margin:"5px"}}),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyRequests"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"bx:mail-send"}}),t._v(" Yêu cầu đã gửi ")],1),i("hr",{staticStyle:{margin:"5px"}}),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyInformation"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"mdi:user-card-details-outline"}}),t._v(" Thông tin cá nhân ")],1),i("hr",{staticStyle:{margin:"5px"}}),1==t.user.roleId||2==t.user.roleId?i("div",[i("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"material-symbols:format-list-bulleted-rounded"}}),t._v(" Quản trị ")],1),i("hr",{staticStyle:{margin:"5px"}})],1):t._e(),i("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"uil:signout"}}),t._v(" Đăng xuất ")],1)],1)],1)]):i("nav",[i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default"),i("footer",[t._m(1),i("div",{staticClass:"Main__footer"},[i("div",{staticClass:"Main__footer__container"},[i("div",{staticClass:"grid"},[i("div",{staticClass:"grid-row"},[t._m(2),i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("TÀI KHOẢN")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/MyBooks"}},[t._v("Trang cá nhân")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/MyTransaction"}},[t._v("Giao dịch")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/MyRequests"}},[t._v("Yêu cầu")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/MyInformation"}},[t._v("Thông tin cá nhân")])],1),i("li",{staticClass:"item"},[this.$cookies.get("token")?i("router-link",{staticClass:"item-link",staticStyle:{cursor:"pointer"},attrs:{to:""},nativeOn:{click:function(i){return t.HandleLogout.apply(null,arguments)}}},[t._v("Đăng xuất")]):i("router-link",{staticClass:"item-link",attrs:{to:"/login"}},[t._v("Đăng nhập/Đăng ký")])],1),i("li",{staticClass:"item",staticStyle:{display:"flex",color:"#9d6b54"}},[i("Icon",{staticStyle:{height:"30px"},attrs:{icon:"material-symbols:mail"}}),i("label",{staticClass:"contact_info",staticStyle:{height:"27px"}},[t._v("tramsachhn@gmail.com")])],1)])]),i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("HỖ TRỢ")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"#"}},[t._v("Chính sách kiểm duyệt")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Policy-Refund"}},[t._v("Chính sách cọc - hoàn tiền")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Policy-Cencorship"}},[t._v("Chính sách bảo mật thanh toán")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/#"}},[t._v("Quy trình giao dịch")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/#"}},[t._v("Trung tâm hỗ trợ")])],1),i("li",{staticClass:"item",staticStyle:{display:"flex",color:"#9d6b54"}},[i("Icon",{staticStyle:{height:"30px"},attrs:{icon:"ic:round-phone-enabled"}}),i("label",{staticClass:"contact_info",staticStyle:{height:"27px"}},[t._v("Hotline: 0961284654")])],1)])]),i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("DỊCH VỤ")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/TermOfUse"}},[t._v("Điều khoản sử dụng")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Policy-Infomation"}},[t._v("Chính sách bảo mật thông tin cá nhân")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Policy-Payment"}},[t._v("Chính sách bảo mật thanh toán")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Guide-Payment"}},[t._v("Phương thức thanh toán")])],1),i("li",{staticClass:"item"},[i("router-link",{staticClass:"item-link",attrs:{to:"/Introduce"}},[t._v("Giới thiệu Trạm sách")])],1),i("li",{staticClass:"item",staticStyle:{display:"flex",color:"#9d6b54"}},[i("Icon",{staticStyle:{height:"30px"},attrs:{icon:"material-symbols:location-on"}}),i("label",{staticClass:"contact_info",staticStyle:{height:"27px"}},[t._v("Số 1 Đào Duy Anh, Đống Đa, HN")])],1)])])])])])])])],2)},a=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"Main__logo"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:e("d8b4"),alt:"Logo Trạm Sách"}})])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"Main__subfooter"},[i("div",{staticClass:"Main__subfooter__container"},[i("div",{staticClass:"contact"},[i("span",[t._v("ĐĂNG KÝ NHẬN TIN:")]),i("input",{staticClass:"input1",attrs:{type:"text",placeholder:"Nhập tên của bạn"}}),i("input",{staticClass:"input2",attrs:{type:"text",placeholder:"Nhập email của bạn"}}),i("button",[t._v("ĐĂNG KÝ")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:e("d8b4"),alt:"Logo Trạm Sách"}})]),i("br"),i("span",{staticStyle:{color:"grey"}},[t._v("Tất cả các giao dịch ở Trạm Sách được chúng tôi đảm bảo kiểm duyệt qua hình thức và giao hàng tận nơi trong địa bàn nội thành TP Hà Nội. Không hỗ trợ giao dịch trực tiếp tại Trạm! ")])])}],n=e("48ac"),o=e.n(n),r=e("fbfb"),c=e("cde1"),l=e("5ea9"),u={name:"Layout",components:{Icon:l["a"]},data(){return{userByToken:"",user:"",noti:"",userId:"",count:""}},created(){this.getUserInfoByToken(),this.getNotifications(),this.getNotificationsNotRead()},methods:{getUserInfoByToken(){let t=this.$cookies.get("token");this.userByToken=o.a.decode(t,"utf-8"),c["a"].callApi(r["i"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.user=t.data.data}).catch(()=>{})},getNotifications(){let t=this.$cookies.get("token");this.userByToken=o.a.decode(t,"utf-8"),c["a"].callApi(r["i"].NOTIFICATION_10,"POST",{userId:this.userByToken.UserId}).then(t=>{this.noti=t.data.data}).catch(()=>{})},getNotificationsNotRead(){let t=this.$cookies.get("token");this.userByToken=o.a.decode(t,"utf-8"),c["a"].callApi(r["i"].NOTIFICATION_NOT_READ,"POST",{userId:this.userByToken.UserId}).then(t=>{this.count=t.data.numberOfRecords}).catch(()=>{})},HandleLogout(){this.$cookies.remove("token"),window.location.replace("/")}}},d=u,h=(e("4318"),e("2877")),f=Object(h["a"])(d,s,a,!1,null,null,null);i["a"]=f.exports},ef67:function(t,i,e){"use strict";e("ae8c")}}]);
//# sourceMappingURL=chunk-36da0235.2d4476c4.js.map