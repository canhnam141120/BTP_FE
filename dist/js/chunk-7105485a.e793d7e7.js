(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7105485a"],{"482f":function(t,i,s){"use strict";var e=function(){var t=this,i=t._self._c;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[i("div",{staticClass:"dialogContent"},[i("b-button",{staticClass:"spinner",attrs:{disabled:""}},[i("b-spinner")],1)],1)])},a=[],n={name:"LoadingDialog",props:["show","cancel","confirm"]},o=n,r=(s("ef67"),s("2877")),c=Object(r["a"])(o,e,a,!1,null,"764a15da",null);i["a"]=c.exports},"48ac":function(t,i,s){!function(i,s){t.exports=s()}(0,(function(){return function(t){function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}var s={};return i.m=t,i.c=s,i.i=function(t){return t},i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:e})},i.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/vue-jwt-decode/dist",i(i.s=10)}([function(t,i,s){t.exports=!s(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,i){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,i){var s=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=s)},function(t,i){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,i){var s=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=s)},function(t,i){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,i,s){var e=s(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,i){var s=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:s)(t)}},function(t,i,s){var e=s(6),a=s(5);t.exports=function(t){return e(a(t))}},function(t,i,s){"use strict";var e=s(11),a=s.n(e);i.a={install:function(t){t.prototype.$jwtDec=this,t.jwtDec=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var i=t.split(".");if(i.length<2)return null;var s=JSON.parse(atob(i[0])),e=JSON.parse(atob(i[1]));return a()({},s,e)}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s(9);i.default=e.a},function(t,i,s){t.exports={default:s(12),__esModule:!0}},function(t,i,s){s(38),t.exports=s(4).Object.assign},function(t,i){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,i,s){var e=s(3);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,i,s){var e=s(8),a=s(34),n=s(33);t.exports=function(t){return function(i,s,o){var r,c=e(i),l=a(c.length),u=n(o,l);if(t&&s!=s){for(;l>u;)if((r=c[u++])!=r)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===s)return t||u||0;return!t&&-1}}},function(t,i){var s={}.toString;t.exports=function(t){return s.call(t).slice(8,-1)}},function(t,i,s){var e=s(13);t.exports=function(t,i,s){if(e(t),void 0===i)return t;switch(s){case 1:return function(s){return t.call(i,s)};case 2:return function(s,e){return t.call(i,s,e)};case 3:return function(s,e,a){return t.call(i,s,e,a)}}return function(){return t.apply(i,arguments)}}},function(t,i,s){var e=s(3),a=s(2).document,n=e(a)&&e(a.createElement);t.exports=function(t){return n?a.createElement(t):{}}},function(t,i){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,i,s){var e=s(2),a=s(4),n=s(17),o=s(22),r=function(t,i,s){var c,l,u,h=t&r.F,d=t&r.G,f=t&r.S,p=t&r.P,v=t&r.B,_=t&r.W,g=d?a:a[i]||(a[i]={}),m=g.prototype,k=d?e:f?e[i]:(e[i]||{}).prototype;for(c in d&&(s=i),s)(l=!h&&k&&void 0!==k[c])&&c in g||(u=l?k[c]:s[c],g[c]=d&&"function"!=typeof k[c]?s[c]:v&&l?n(u,e):_&&k[c]==u?function(t){var i=function(i,s,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(i);case 2:return new t(i,s)}return new t(i,s,e)}return t.apply(this,arguments)};return i.prototype=t.prototype,i}(u):p&&"function"==typeof u?n(Function.call,u):u,p&&((g.virtual||(g.virtual={}))[c]=u,t&r.R&&m&&!m[c]&&o(m,c,u)))};r.F=1,r.G=2,r.S=4,r.P=8,r.B=16,r.W=32,r.U=64,r.R=128,t.exports=r},function(t,i){var s={}.hasOwnProperty;t.exports=function(t,i){return s.call(t,i)}},function(t,i,s){var e=s(25),a=s(30);t.exports=s(0)?function(t,i,s){return e.f(t,i,a(1,s))}:function(t,i,s){return t[i]=s,t}},function(t,i,s){t.exports=!s(0)&&!s(1)((function(){return 7!=Object.defineProperty(s(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,i,s){"use strict";var e=s(28),a=s(26),n=s(29),o=s(35),r=s(6),c=Object.assign;t.exports=!c||s(1)((function(){var t={},i={},s=Symbol(),e="abcdefghijklmnopqrst";return t[s]=7,e.split("").forEach((function(t){i[t]=t})),7!=c({},t)[s]||Object.keys(c({},i)).join("")!=e}))?function(t,i){for(var s=o(t),c=arguments.length,l=1,u=a.f,h=n.f;c>l;)for(var d,f=r(arguments[l++]),p=u?e(f).concat(u(f)):e(f),v=p.length,_=0;v>_;)h.call(f,d=p[_++])&&(s[d]=f[d]);return s}:c},function(t,i,s){var e=s(14),a=s(23),n=s(36),o=Object.defineProperty;i.f=s(0)?Object.defineProperty:function(t,i,s){if(e(t),i=n(i,!0),e(s),a)try{return o(t,i,s)}catch(t){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(t[i]=s.value),t}},function(t,i){i.f=Object.getOwnPropertySymbols},function(t,i,s){var e=s(21),a=s(8),n=s(15)(!1),o=s(31)("IE_PROTO");t.exports=function(t,i){var s,r=a(t),c=0,l=[];for(s in r)s!=o&&e(r,s)&&l.push(s);for(;i.length>c;)e(r,s=i[c++])&&(~n(l,s)||l.push(s));return l}},function(t,i,s){var e=s(27),a=s(19);t.exports=Object.keys||function(t){return e(t,a)}},function(t,i){i.f={}.propertyIsEnumerable},function(t,i){t.exports=function(t,i){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:i}}},function(t,i,s){var e=s(32)("keys"),a=s(37);t.exports=function(t){return e[t]||(e[t]=a(t))}},function(t,i,s){var e=s(2),a=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,i,s){var e=s(7),a=Math.max,n=Math.min;t.exports=function(t,i){return t=e(t),t<0?a(t+i,0):n(t,i)}},function(t,i,s){var e=s(7),a=Math.min;t.exports=function(t){return t>0?a(e(t),9007199254740991):0}},function(t,i,s){var e=s(5);t.exports=function(t){return Object(e(t))}},function(t,i,s){var e=s(3);t.exports=function(t,i){if(!e(t))return t;var s,a;if(i&&"function"==typeof(s=t.toString)&&!e(a=s.call(t)))return a;if("function"==typeof(s=t.valueOf)&&!e(a=s.call(t)))return a;if(!i&&"function"==typeof(s=t.toString)&&!e(a=s.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,i){var s=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++s+e).toString(36))}},function(t,i,s){var e=s(20);e(e.S+e.F,"Object",{assign:s(24)})}])}))},"5e7e":function(t,i,s){"use strict";s("c4c1")},"9d83":function(t,i,s){"use strict";s("b53c")},ae8c:function(t,i,s){},b53c:function(t,i,s){},c4c1:function(t,i,s){},d8b4:function(t,i,s){t.exports=s.p+"img/logo.d67a157a.png"},e914:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("Layout",[i("main",{staticStyle:{"flex-grow":"1"}},[i("LoadingDialog",{directives:[{name:"show",rawName:"v-show",value:t.spinner,expression:"spinner"}],staticStyle:{"z-index":"999"}}),i("div",{staticClass:"body"},[i("div",{staticClass:"container"},[i("div",{staticClass:"profile"},[i("div",[i("b-avatar",{staticClass:"avatar-personal",attrs:{badge:"","badge-left":""}},[i("img",{staticStyle:{width:"190px",height:"190px"},attrs:{src:t.info.avatar}})])],1),i("div",[i("div",{staticClass:"infor"},[i("p",{staticClass:"name-other-person"},[t._v(t._s(t.info.fullname))]),i("div",{staticClass:"infoDes"},[i("div",{staticClass:"description"},[i("Icon",{staticClass:"iconSmall",attrs:{icon:"mdi:email"}}),i("label",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.info.email))])],1),i("div",{staticClass:"description"},[i("Icon",{staticClass:"iconSmall",attrs:{icon:"material-symbols:call"}}),i("label",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.info.phone))])],1),i("div",{staticClass:"description"},[i("Icon",{staticClass:"iconSmall",attrs:{icon:"material-symbols:location-on"}}),i("label",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.info.addressMain))])],1)])]),i("div",{staticClass:"edit"},[""==t.userByToken||t.checkLike?t._e():i("button",{staticClass:"btn-edit",on:{click:t.HandleLike}},[i("Icon",{staticStyle:{width:"20px",height:"20px","margin-right":"2%"},attrs:{icon:"ant-design:like-filled"}}),t._v(" Thích ")],1),""!=t.userByToken&&t.checkLike?i("button",{staticClass:"btn-edit",on:{click:t.HandleUnLike}},[i("Icon",{staticStyle:{width:"20px",height:"20px","margin-right":"2%"},attrs:{icon:"ant-design:dislike-filled"}}),t._v(" Bỏ Thích ")],1):t._e(),i("div",{staticClass:"likeNumber"},[i("Icon",{staticClass:"iconSmall",attrs:{icon:"mdi:like"}}),i("label",{staticStyle:{"font-weight":"600"}},[t._v(t._s(t.info.likeNumber)+" người thích")])],1)])])]),i("div",{staticClass:"content-bottom"},[i("b-card",{staticClass:"background-tab",attrs:{card:""}},[i("b-tabs",[i("b-tab",{attrs:{title:"Tủ sách",active:""}},[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBook,expression:"searchBook"}],attrs:{type:"text",placeholder:"Nhập tên sản phẩm"},domProps:{value:t.searchBook},on:{input:function(i){i.target.composing||(t.searchBook=i.target.value)}}}),i("button",{on:{click:t.HandleSearchBook}},[t._v("Tìm")])]),i("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[i("div",{staticClass:"grid-bookOP"},t._l(10,(function(t){return i("div",{key:t,staticClass:"item-bookOP"},[i("b-card",{staticStyle:{height:"380px"},attrs:{"no-body":"","img-top":""}},[i("b-skeleton-img",{attrs:{"card-img":"top",aspect:"3:1",height:"250px"}}),i("b-card",{staticStyle:{height:"130px"}},[i("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"70%"}})],1)],1)],1)})),0)]},proxy:!0}])},[0!=t.totalBook?i("div",{staticClass:"grid-bookOP"},t._l(t.listBook,(function(s){var e;return i("div",{key:s.id,staticClass:"item-bookOP"},[i("router-link",{staticStyle:{position:"relative"},attrs:{to:{name:"BookDetail",query:{id:s.id}}}},[i("img",{attrs:{src:s.image}}),s.isTrade?i("label",{staticClass:"layer1OP"},[t._v("Đang giao dịch")]):i("label",{staticClass:"layer2OP"},[t._v("Sẵn sàng")])]),i("div",{staticClass:"infoOP"},[i("div",{staticClass:"book-titleOP"},[i("strong",[t._v(t._s(s.title))])]),i("label",{staticClass:"book-statusOP"},[t._v("Thể loại: "),i("strong",[t._v(t._s(null===(e=s.category)||void 0===e?void 0:e.name))])]),i("label",{staticClass:"book-statusOP"},[t._v("Giá cọc: "),i("strong",[t._v(t._s(s.depositPrice.toLocaleString())+"đ")])]),i("label",{staticClass:"book-statusOP"},[t._v(t._s(s.statusBook))])])],1)})),0):i("div",{staticClass:"noBook"},[t._v("Danh sách trống!")])]),0!=t.totalBook?i("div",{staticClass:"pagingBook"},[i("b-pagination",{staticClass:"page-number",attrs:{"total-rows":t.totalBook,"per-page":10},on:{input:t.getBooks},scopedSlots:t._u([{key:"first-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:s,active:e}){return[e?i("b",{staticStyle:{color:"white"}},[t._v(t._s(s)+" ")]):i("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(s))])]}}],null,!1,1684021845),model:{value:t.pageBook,callback:function(i){t.pageBook=i},expression:"pageBook"}})],1):t._e()],1),i("b-tab",{attrs:{title:"Bài đăng"}},[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchPost,expression:"searchPost"}],attrs:{type:"text",placeholder:"Nhập tên sản phẩm"},domProps:{value:t.searchPost},on:{input:function(i){i.target.composing||(t.searchPost=i.target.value)}}}),i("button",{on:{click:t.HandleSearchPost}},[t._v("Tìm")])]),i("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[i("div",{staticClass:"gridPost"},t._l(6,(function(t){return i("div",{key:t,staticClass:"itemPost"},[i("b-card",{staticStyle:{height:"180px"},attrs:{"no-body":"","img-left":""}},[i("b-skeleton-img",{attrs:{"card-img":"left",width:"180px"}}),i("b-card",{staticStyle:{width:"413px",height:"180px"}},[i("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"70%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"70%"}})],1)],1)],1)})),0)]},proxy:!0}])},[0!=t.totalPost?i("div",{staticClass:"gridPost"},t._l(t.listPost,(function(s){return i("div",{key:s.id,staticClass:"itemPost"},[i("router-link",{attrs:{to:{name:"PostDetail",query:{id:s.id}}}},[i("img",{staticClass:"imagePost",attrs:{src:s.image}})]),i("button",{staticClass:"actionPost"},[t._v("Xem chi tiết")]),i("div",{staticClass:"infoPost"},[i("div",{staticClass:"titlePost"},[i("strong",[t._v(t._s(s.title))])]),i("div",{staticClass:"contentPost"},[t._v("Đăng lúc: "),i("strong",[t._v(t._s(t._f("formatDate")(s.createdDate)))])]),i("label",{staticClass:"contentPost"},[t._v(t._s(s.content))])])],1)})),0):i("div",{staticClass:"noBook"},[t._v("Danh sách trống!")])]),0!=t.totalPost?i("div",{staticClass:"pagingPost"},[i("div",{staticClass:"pagePost"},[i("b-pagination",{attrs:{"total-rows":t.totalPost,"per-page":6},on:{input:t.getPost},scopedSlots:t._u([{key:"first-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹‹")])]},proxy:!0},{key:"prev-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("‹")])]},proxy:!0},{key:"next-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("›")])]},proxy:!0},{key:"last-text",fn:function(){return[i("span",{staticStyle:{color:"#9D6B54"}},[t._v("››")])]},proxy:!0},{key:"page",fn:function({page:s,active:e}){return[e?i("b",{staticStyle:{color:"white"}},[t._v(t._s(s)+" ")]):i("b",{staticStyle:{color:"#9D6B54"}},[t._v(t._s(s))])]}}],null,!1,1684021845),model:{value:t.pagePost,callback:function(i){t.pagePost=i},expression:"pagePost"}})],1)]):t._e()],1)],1)],1)],1),i("div")])])],1)])},a=[],n=(s("14d9"),s("ebad")),o=s("5ea9"),r=s("fbfb"),c=s("cde1"),l=s("48ac"),u=s.n(l),h=s("482f"),d={name:"OtherPerson",components:{Layout:n["a"],Icon:o["a"],LoadingDialog:h["a"]},data(){return{userByToken:"",info:"",listBook:"",totalBook:"",listPost:"",totalPost:"",loading:!1,searchBook:"",isSearchBook:!1,searchPost:"",isSearchPost:!1,pageBook:1,pagePost:1,spinner:!1,checkLike:!1}},created(){this.$cookies.get("token")&&(this.userByToken=u.a.decode(this.$cookies.get("token"),"utf-8")),this.getInformation(),this.getBooks(1),this.getPost(1)},methods:{getInformation(){c["a"].callApi(r["i"].INFORMATION,"POST",{userId:this.$route.query.id}).then(t=>{t.data.data?(this.info=t.data.data,this.$cookies.get("token")&&this.CheckLike()):this.$router.push({name:"404Page"})}).catch(()=>{})},getBooks(t){this.loading=!0,this.isSearchBook?c["a"].callApi(r["a"].SEARCH_BOOK_USER+this.$route.query.id+"?page="+t,"POST",{search:this.searchBook}).then(i=>{this.listBook=i.data.data,this.totalBook=i.data.numberOfRecords,this.pageBook=t,this.loading=!1}).catch(()=>{}):c["a"].callApi(r["a"].USER_BOOK+this.$route.query.id+"?page="+t,"GET",{}).then(i=>{this.listBook=i.data.data,this.totalBook=i.data.numberOfRecords,this.pageBook=t,this.loading=!1}).catch(()=>{})},getPost(t){this.loading=!0,this.isSearchPost?c["a"].callApi(r["j"].SEARCH_POST_USER+this.$route.query.id+"?page="+t,"POST",{search:this.searchPost}).then(i=>{this.listPost=i.data.data,this.totalPost=i.data.numberOfRecords,this.pagePost=t,this.loading=!1}).catch(()=>{}):c["a"].callApi(r["j"].USER_POST+this.$route.query.id+"?page="+t,"GET",{}).then(i=>{this.listPost=i.data.data,this.totalPost=i.data.numberOfRecords,this.pagePost=t,this.loading=!1}).catch(()=>{})},HandleSearchBook(){return this.searchBook?this.isSearchBook=!0:this.isSearchBook=!1,this.getBooks(1)},HandleSearchPost(){return this.searchPost?this.isSearchPost=!0:this.isSearchPost=!1,this.getPost(1)},HandleLike(){this.userByToken=u.a.decode(this.$cookies.get("token"),"utf-8"),c["a"].callApi(r["i"].ADD_USER_FAVORITE+this.$route.query.id,"POST",{userId:this.userByToken.UserId}).then(t=>{"ADD_SUCCESS"==t.data.message&&(this.getInformation(),this.checkLike=!0)}).catch(()=>{})},HandleUnLike(){this.userByToken=u.a.decode(this.$cookies.get("token"),"utf-8"),c["a"].callApi(r["i"].DELETE_USER_FAVORITE+this.$route.query.id,"DELETE",{userId:this.userByToken.UserId}).then(t=>{"DELETE_SUCCESS"==t.data.message&&(this.getInformation(),this.checkLike=!1)}).catch(()=>{})},CheckLike(){this.userByToken=u.a.decode(this.$cookies.get("token"),"utf-8"),c["a"].callApi(r["i"].CHECK_USER_LIKE+this.$route.query.id,"POST",{userId:this.userByToken.UserId}).then(t=>{"TRUE"==t.data.message?this.checkLike=!0:this.checkLike=!1}).catch(()=>{})}},filters:{formatDate(t){return new Date(t).toLocaleString("en-GB")}}},f=d,p=(s("5e7e"),s("2877")),v=Object(p["a"])(f,e,a,!1,null,null,null);i["default"]=v.exports},ebad:function(t,i,s){"use strict";var e=function(){var t=this,i=t._self._c;return i("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[i("header",{staticClass:"Main__header"},[i("div",{staticClass:"Main__header__container"},[t._m(0),i("div",[i("nav",{staticClass:"Main__nav",staticStyle:{"padding-left":"50px"}},[i("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),i("router-link",{staticClass:"Main__list__item course-management btnCategory",attrs:{to:"/AllBooks","active-color":"#9D6B54"}},[t._v("Tủ sách")]),i("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/BlogIndex","active-color":"#9D6B54"}},[t._v("Trạm đọc ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Policy&Terms","active-color":"#9D6B54"}},[t._v("Chính sách & điều khoản ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Quy trình ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Giới thiệu ")])],1)]),i("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?i("nav",[i("li",[i("b-dropdown",{attrs:{variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("Icon",{staticClass:"icon",attrs:{icon:"tabler:bell-ringing-2"}}),i("div",{staticClass:"countNoti"},[t._v(t._s(t.count))])]},proxy:!0}])},[i("div",{staticClass:"titleNoti"},[t._v("Thông Báo")]),""!=t.noti?i("div",[t._l(t.noti,(function(s){return i("div",{key:s.id,staticClass:"notification"},[s.isRead?i("div",{staticStyle:{"padding-left":"10px",height:"25px","padding-top":"5px"}},[t._v('"'+t._s(s.content)+'"')]):i("div",{staticStyle:{"background-color":"#F0ECE4",height:"25px","padding-left":"10px","padding-top":"5px"}},[t._v('"'+t._s(s.content)+'"')]),i("hr",{staticStyle:{"margin-top":"0px","margin-bottom":"0px"}})])})),i("div",{staticClass:"allNoti"},[i("router-link",{staticClass:"linkAllNoti",attrs:{to:"AllNotification"}},[t._v("Xem tất cả")])],1)],2):i("div",{staticClass:"noBookNoti"},[t._v("Danh sách trống!")])])],1),i("li",[i("b-dropdown",{attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("img",{staticClass:"icon",attrs:{src:t.user.avatar}})]},proxy:!0}])},[i("div",{staticClass:"dropdown-item-top"},[i("img",{staticClass:"icon",attrs:{src:t.user.avatar}}),i("div",[t._v(t._s(t.user.fullname))]),i("div",{staticStyle:{color:"grey"}},[t._v(t._s(t.user.email))])]),i("hr",{staticStyle:{margin:"5px"}}),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyBooks"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"ic:round-person-pin"}}),t._v(" Trang cá nhân ")],1),i("hr",{staticStyle:{margin:"5px"}}),1==t.user.roleId||2==t.user.roleId?i("div",[i("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"bi:list-task"}}),t._v(" Quản trị ")],1),i("hr",{staticStyle:{margin:"5px"}})],1):t._e(),i("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"uil:signout"}}),t._v(" Đăng xuất ")],1)],1)],1)]):i("nav",[i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default"),i("footer",[t._m(1),i("div",{staticClass:"Main__footer"},[i("div",{staticClass:"Main__footer__container"},[i("div",{staticClass:"grid"},[i("div",{staticClass:"grid-row"},[t._m(2),i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("TÀI KHOẢN")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[this.$cookies.get("token")?i("a",{staticClass:"item-link",staticStyle:{cursor:"pointer"},on:{click:t.HandleLogout}},[t._v("Đăng xuất")]):i("a",{staticClass:"item-link",attrs:{href:"/login"}},[t._v("Đăng nhập/Đăng ký")])]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])]),t._m(8),t._m(9)])])])])])],2)},a=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"Main__logo"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:s("d8b4"),alt:"Logo Trạm Sách"}})])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"Main__subfooter"},[i("div",{staticClass:"Main__subfooter__container"},[i("div",{staticClass:"contact"},[i("span",[t._v("ĐĂNG KÝ NHẬN TIN:")]),i("input",{staticClass:"input1",attrs:{type:"text",placeholder:"Nhập tên của bạn"}}),i("input",{staticClass:"input2",attrs:{type:"text",placeholder:"Nhập email của bạn"}}),i("button",[t._v("ĐĂNG KÝ")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:s("d8b4"),alt:"Logo Trạm Sách"}})]),i("br"),i("span",[t._v("Tất cả các giao dịch ở Trạm Sách được")]),i("br"),i("span",[t._v("chúng tôi đảm bảo kiểm duyệt qua ")]),i("br"),i("span",[t._v("hình thức và giao hàng tận nơi trong ")]),i("br"),i("span",[t._v(" địa bàn nội thành TP Hà Nội. Không")]),i("br"),i("span",[t._v("hỗ trợ giao dịch trực tiếp tại Trạm.")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin cá nhân")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin giao hàng")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Tủ sách")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trang cá nhân")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("span",{staticClass:"contact_info"},[t._v("tramsachhn@gmail.com")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("HỖ TRỢ")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách kiểm duyệt")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách cọc - hoàn tiền")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Quy trình giao dịch")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trung tâm hỗ trợ")])]),i("li",{staticClass:"item"},[i("span",{staticClass:"contact_info"},[t._v("Hotline: 0961284654")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("DỊCH VỤ")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Điều khoản sử dụng")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thông tin cá nhân")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Phương thức thanh toán")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Giới thiệu Trạm Sách")])]),i("li",{staticClass:"item"},[i("span",{staticClass:"contact_info"},[t._v("Số 1 Đào Duy Anh, Đống Đa, Hà Nội")])])])])}],n=s("48ac"),o=s.n(n),r=s("fbfb"),c=s("cde1"),l=s("5ea9"),u={name:"Layout",components:{Icon:l["a"]},data(){return{userByToken:"",user:"",noti:"",userId:"",count:""}},created(){this.getUserInfoByToken(),this.getNotifications(),this.getNotificationsNotRead()},methods:{getUserInfoByToken(){let t=this.$cookies.get("token");this.userByToken=o.a.decode(t,"utf-8"),c["a"].callApi(r["i"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.user=t.data.data}).catch(()=>{})},getNotifications(){let t=this.$cookies.get("token");this.userByToken=o.a.decode(t,"utf-8"),c["a"].callApi(r["i"].NOTIFICATION_10,"POST",{userId:this.userByToken.UserId}).then(t=>{this.noti=t.data.data}).catch(()=>{})},getNotificationsNotRead(){let t=this.$cookies.get("token");this.userByToken=o.a.decode(t,"utf-8"),c["a"].callApi(r["i"].NOTIFICATION_NOT_READ,"POST",{userId:this.userByToken.UserId}).then(t=>{this.count=t.data.numberOfRecords}).catch(()=>{})},HandleLogout(){this.$cookies.remove("token"),window.location.replace("/")}}},h=u,d=(s("9d83"),s("2877")),f=Object(d["a"])(h,e,a,!1,null,null,null);i["a"]=f.exports},ef67:function(t,i,s){"use strict";s("ae8c")}}]);
//# sourceMappingURL=chunk-7105485a.e793d7e7.js.map