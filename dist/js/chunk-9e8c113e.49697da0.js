(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e8c113e"],{"01fe":function(t,i,s){t.exports=s.p+"img/banner3.c51a0a7f.png"},"0c07":function(t,i,s){"use strict";s("f22d")},1023:function(t,i,s){t.exports=s.p+"img/banner2.92b39ff9.png"},"48ac":function(t,i,s){!function(i,s){t.exports=s()}(0,(function(){return function(t){function i(n){if(s[n])return s[n].exports;var a=s[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}var s={};return i.m=t,i.c=s,i.i=function(t){return t},i.d=function(t,s,n){i.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/vue-jwt-decode/dist",i(i.s=10)}([function(t,i,s){t.exports=!s(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,i){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,i){var s=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=s)},function(t,i){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,i){var s=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=s)},function(t,i){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,i,s){var n=s(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,i){var s=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:s)(t)}},function(t,i,s){var n=s(6),a=s(5);t.exports=function(t){return n(a(t))}},function(t,i,s){"use strict";var n=s(11),a=s.n(n);i.a={install:function(t){t.prototype.$jwtDec=this,t.jwtDec=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var i=t.split(".");if(i.length<2)return null;var s=JSON.parse(atob(i[0])),n=JSON.parse(atob(i[1]));return a()({},s,n)}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(9);i.default=n.a},function(t,i,s){t.exports={default:s(12),__esModule:!0}},function(t,i,s){s(38),t.exports=s(4).Object.assign},function(t,i){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,i,s){var n=s(3);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,i,s){var n=s(8),a=s(34),e=s(33);t.exports=function(t){return function(i,s,r){var o,c=n(i),l=a(c.length),u=e(r,l);if(t&&s!=s){for(;l>u;)if((o=c[u++])!=o)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===s)return t||u||0;return!t&&-1}}},function(t,i){var s={}.toString;t.exports=function(t){return s.call(t).slice(8,-1)}},function(t,i,s){var n=s(13);t.exports=function(t,i,s){if(n(t),void 0===i)return t;switch(s){case 1:return function(s){return t.call(i,s)};case 2:return function(s,n){return t.call(i,s,n)};case 3:return function(s,n,a){return t.call(i,s,n,a)}}return function(){return t.apply(i,arguments)}}},function(t,i,s){var n=s(3),a=s(2).document,e=n(a)&&n(a.createElement);t.exports=function(t){return e?a.createElement(t):{}}},function(t,i){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,i,s){var n=s(2),a=s(4),e=s(17),r=s(22),o=function(t,i,s){var c,l,u,f=t&o.F,d=t&o.G,h=t&o.S,p=t&o.P,v=t&o.B,_=t&o.W,g=d?a:a[i]||(a[i]={}),m=g.prototype,C=d?n:h?n[i]:(n[i]||{}).prototype;for(c in d&&(s=i),s)(l=!f&&C&&void 0!==C[c])&&c in g||(u=l?C[c]:s[c],g[c]=d&&"function"!=typeof C[c]?s[c]:v&&l?e(u,n):_&&C[c]==u?function(t){var i=function(i,s,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(i);case 2:return new t(i,s)}return new t(i,s,n)}return t.apply(this,arguments)};return i.prototype=t.prototype,i}(u):p&&"function"==typeof u?e(Function.call,u):u,p&&((g.virtual||(g.virtual={}))[c]=u,t&o.R&&m&&!m[c]&&r(m,c,u)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,t.exports=o},function(t,i){var s={}.hasOwnProperty;t.exports=function(t,i){return s.call(t,i)}},function(t,i,s){var n=s(25),a=s(30);t.exports=s(0)?function(t,i,s){return n.f(t,i,a(1,s))}:function(t,i,s){return t[i]=s,t}},function(t,i,s){t.exports=!s(0)&&!s(1)((function(){return 7!=Object.defineProperty(s(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,i,s){"use strict";var n=s(28),a=s(26),e=s(29),r=s(35),o=s(6),c=Object.assign;t.exports=!c||s(1)((function(){var t={},i={},s=Symbol(),n="abcdefghijklmnopqrst";return t[s]=7,n.split("").forEach((function(t){i[t]=t})),7!=c({},t)[s]||Object.keys(c({},i)).join("")!=n}))?function(t,i){for(var s=r(t),c=arguments.length,l=1,u=a.f,f=e.f;c>l;)for(var d,h=o(arguments[l++]),p=u?n(h).concat(u(h)):n(h),v=p.length,_=0;v>_;)f.call(h,d=p[_++])&&(s[d]=h[d]);return s}:c},function(t,i,s){var n=s(14),a=s(23),e=s(36),r=Object.defineProperty;i.f=s(0)?Object.defineProperty:function(t,i,s){if(n(t),i=e(i,!0),n(s),a)try{return r(t,i,s)}catch(t){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(t[i]=s.value),t}},function(t,i){i.f=Object.getOwnPropertySymbols},function(t,i,s){var n=s(21),a=s(8),e=s(15)(!1),r=s(31)("IE_PROTO");t.exports=function(t,i){var s,o=a(t),c=0,l=[];for(s in o)s!=r&&n(o,s)&&l.push(s);for(;i.length>c;)n(o,s=i[c++])&&(~e(l,s)||l.push(s));return l}},function(t,i,s){var n=s(27),a=s(19);t.exports=Object.keys||function(t){return n(t,a)}},function(t,i){i.f={}.propertyIsEnumerable},function(t,i){t.exports=function(t,i){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:i}}},function(t,i,s){var n=s(32)("keys"),a=s(37);t.exports=function(t){return n[t]||(n[t]=a(t))}},function(t,i,s){var n=s(2),a=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,i,s){var n=s(7),a=Math.max,e=Math.min;t.exports=function(t,i){return t=n(t),t<0?a(t+i,0):e(t,i)}},function(t,i,s){var n=s(7),a=Math.min;t.exports=function(t){return t>0?a(n(t),9007199254740991):0}},function(t,i,s){var n=s(5);t.exports=function(t){return Object(n(t))}},function(t,i,s){var n=s(3);t.exports=function(t,i){if(!n(t))return t;var s,a;if(i&&"function"==typeof(s=t.toString)&&!n(a=s.call(t)))return a;if("function"==typeof(s=t.valueOf)&&!n(a=s.call(t)))return a;if(!i&&"function"==typeof(s=t.toString)&&!n(a=s.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,i){var s=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++s+n).toString(36))}},function(t,i,s){var n=s(20);n(n.S+n.F,"Object",{assign:s(24)})}])}))},"5f9c":function(t,i,s){"use strict";s("9145")},"65d1":function(t,i,s){t.exports=s.p+"img/banner1.7e14f63a.png"},"6a2c":function(t,i,s){},"78a7":function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t._self._c;return i("Layout",[i("main",{staticStyle:{"flex-grow":"1"}},[i("SlidePicture"),i("div",{staticClass:"homepage"},[i("div",{staticClass:"container"},[i("div",{staticClass:"listBook"},[i("div",{staticClass:"home-title"},[t._v("SÁCH MỚI ĐĂNG")]),i("hr",{staticStyle:{"margin-top":"0px"}}),i("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[i("div",{staticClass:"grid-book"},t._l(6,(function(t){return i("div",{key:t,staticClass:"item-book"},[i("b-card",{attrs:{"no-body":"","img-top":""}},[i("b-skeleton-img",{attrs:{"card-img":"top",aspect:"3:1",height:"250px"}}),i("b-card",{staticStyle:{height:"120px"}},[i("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"70%"}})],1)],1)],1)})),0)]},proxy:!0}])},[i("div",{staticClass:"grid-book"},t._l(t.listBook,(function(s){return i("div",{key:s.id,staticClass:"item-book"},[i("router-link",{staticStyle:{position:"relative"},attrs:{to:{name:"BookDetail",query:{id:s.id}}}},[i("img",{staticClass:"imgBook",attrs:{src:s.image}}),s.isTrade?i("label",{staticClass:"layer"},[t._v("Đang giao dịch")]):i("label",{staticClass:"layer1"},[t._v("Sẵn sàng")])]),i("div",{staticClass:"info"},[i("div",{staticClass:"book-title"},[i("strong",[t._v(t._s(s.title))])]),i("div",{staticClass:"book-status"},[t._v("Thể loại: "),i("strong",[t._v(t._s(s.category.name))])]),i("div",{staticClass:"book-status"},[t._v("Đăng bởi: "),i("strong",[t._v(t._s(s.user.fullname))])]),i("label",{staticClass:"book-status"},[t._v("Giá cọc: "),i("strong",[t._v(t._s(s.depositPrice.toLocaleString())+"đ")])]),i("label",{staticClass:"book-status"},[t._v(t._s(s.statusBook))])])],1)})),0)])],1),i("div",{staticClass:"listPost"},[i("div",{staticClass:"home-title2"},[t._v("BÀI VIẾT MỚI")]),i("hr",{staticStyle:{"margin-top":"0px"}}),i("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[i("div",{staticClass:"grid-post"},t._l(3,(function(t){return i("div",{key:t,staticClass:"item-post"},[i("b-card",{attrs:{"no-body":"","img-left":""}},[i("b-skeleton-img",{attrs:{"card-img":"left",width:"191px"}}),i("b-card",{staticStyle:{width:"201px",height:"191px"}},[i("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"70%"}})],1)],1)],1)})),0)]},proxy:!0}])},[i("div",{staticClass:"grid-post"},t._l(t.listPost,(function(s){return i("div",{key:s.id,staticClass:"item-post"},[i("router-link",{attrs:{to:{name:"PostDetail",query:{id:s.id}}}},[i("img",{staticClass:"imgPost",attrs:{src:s.image}})]),i("div",{staticClass:"info"},[i("div",{staticClass:"post-title"},[i("strong",[t._v(t._s(s.title))])]),i("div",{staticClass:"post-content",staticStyle:{color:"#9d6b54"}},[t._v("Tác giả: "),i("strong",[t._v(t._s(s.user.fullname))])]),i("div",{staticClass:"createDate"},[i("Icon",{staticClass:"iconTime",attrs:{icon:"ic:twotone-access-time"}}),t._v(t._s(t._f("formatDate")(s.createdDate)))],1),i("div",{staticClass:"post-content"},[t._v(t._s(s.content))])])],1)})),0)])],1),i("div",{staticClass:"listUserHP"},[i("div",{staticClass:"home-title2"},[t._v("TOP NGƯỜI DÙNG ĐƯỢC YÊU THÍCH")]),i("hr",{staticStyle:{"margin-top":"0px"}}),i("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[i("div",{staticClass:"gridUserHP"},t._l(6,(function(t){return i("div",{key:t,staticClass:"itemUserHP"},[i("b-card",{staticStyle:{height:"250px"},attrs:{"no-body":"","img-top":""}},[i("b-skeleton",{staticStyle:{"margin-left":"20px"},attrs:{type:"avatar",height:"140px",width:"140px"}}),i("b-card",{staticStyle:{height:"110px"}},[i("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),i("b-skeleton",{attrs:{animation:"wave",width:"70%"}})],1)],1)],1)})),0)]},proxy:!0}])},[i("div",{staticClass:"gridUserHP"},t._l(t.listUser,(function(s){return i("div",{key:s.id,staticClass:"itemUserHP"},[i("router-link",{staticClass:"active",attrs:{to:{name:"OtherPerson",query:{id:s.id}}}},[i("img",{attrs:{src:s.avatar}})]),i("div",{staticClass:"itemUserInfo"},[i("div",{staticClass:"username"},[i("strong",[t._v(t._s(s.fullname))])]),i("div",{staticClass:"username"},[t._v(t._s(s.likeNumber)+" người thích")]),i("div",{staticClass:"username"},[t._v(t._s(s.numberOfTransaction)+" lần giao dịch")])])],1)})),0)])],1)])])],1)])},a=[],e=s("cde1"),r=s("fbfb"),o=s("ebad"),c=(s("7b8d"),s("6a2c"),function(){var t=this,i=t._self._c;return i("div",[i("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",interval:3e3,fade:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"510"},model:{value:t.slide,callback:function(i){t.slide=i},expression:"slide"}},[i("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:s("faf7"),alt:"image slot"}})]},proxy:!0}])}),i("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:s("65d1"),alt:"image slot"}})]},proxy:!0}])}),i("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:s("1023"),alt:"image slot"}})]},proxy:!0}])}),i("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[i("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:s("01fe"),alt:"image slot"}})]},proxy:!0}])})],1),i("br")],1)}),l=[],u={name:"SlidePicture"},f=u,d=s("2877"),h=Object(d["a"])(f,c,l,!1,null,"4b7eff7e",null),p=h.exports,v=s("5ea9"),_={name:"HomePage",components:{SlidePicture:p,Layout:o["a"],Icon:v["a"]},data(){return{loading:!1,listBook:"",listPost:"",listUser:"",slide:"false",settings:{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,pauseOnDotsHover:!0,autoplay:!0,autoplaySpeed:2e3,pauseOnFocus:!0,pauseOnHover:!0,centerMode:!0,variableWidth:!0}}},created(){this.getListBook(),this.getListPost(),this.getListUser()},methods:{getListBook(){this.loading=!0,e["a"].callApi(r["a"].TOP_BOOK,"GET",{}).then(t=>{this.listBook=t.data.data,this.loading=!1}).catch(()=>{})},getListPost(){this.loading=!0,e["a"].callApi(r["j"].TOP_POST,"GET",{}).then(t=>{this.listPost=t.data.data,this.loading=!1}).catch(()=>{})},getListUser(){this.loading=!0,e["a"].callApi(r["h"].TOP,"GET",{}).then(t=>{this.listUser=t.data.data,this.loading=!1}).catch(()=>{})}},filters:{formatDate(t){return new Date(t).toLocaleString("en-GB")}}},g=_,m=(s("0c07"),Object(d["a"])(g,n,a,!1,null,null,null));i["default"]=m.exports},"7b8d":function(t,i,s){},9145:function(t,i,s){},d8b4:function(t,i,s){t.exports=s.p+"img/logo.d67a157a.png"},ebad:function(t,i,s){"use strict";var n=function(){var t=this,i=t._self._c;return i("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[i("header",{staticClass:"Main__header"},[i("div",{staticClass:"Main__header__container"},[t._m(0),i("div",[i("nav",{staticClass:"Main__nav",staticStyle:{"padding-left":"50px"}},[i("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),i("router-link",{staticClass:"Main__list__item course-management btnCategory",attrs:{to:"/AllBooks","active-color":"#9D6B54"}},[t._v("Tủ sách")]),i("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/BlogIndex","active-color":"#9D6B54"}},[t._v("Trạm đọc ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Policy&Terms","active-color":"#9D6B54"}},[t._v("Chính sách & điều khoản ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Quy trình ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Giới thiệu ")])],1)]),i("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?i("nav",[i("li",[i("b-dropdown",{attrs:{variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("Icon",{staticClass:"icon",attrs:{icon:"tabler:bell-ringing-2"}}),i("div",{staticClass:"countNoti"},[t._v(t._s(t.count))])]},proxy:!0}])},[i("div",{staticClass:"titleNoti"},[t._v("THÔNG BÁO")]),""!=t.noti?i("div",[t._l(t.noti,(function(s){return i("div",{key:s.id,staticClass:"notification"},[s.isRead?i("div",{staticStyle:{padding:"5px 10px"}},[t._v(t._s(s.content))]):i("div",{staticStyle:{"background-color":"#F0ECE4","border-radius":"5px",padding:"5px 10px"}},[t._v(t._s(s.content))])])})),i("div",{staticClass:"allNoti"},[i("router-link",{staticClass:"linkAllNoti",attrs:{to:"AllNotification"}},[t._v("Xem tất cả")])],1)],2):i("div",{staticClass:"noBookNoti"},[t._v("Danh sách trống!")])])],1),i("li",[i("b-dropdown",{attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("img",{staticClass:"icon",attrs:{src:t.user.avatar}})]},proxy:!0}])},[i("div",{staticClass:"dropdown-item-top"},[i("img",{staticClass:"icon",attrs:{src:t.user.avatar}}),i("div",[t._v(t._s(t.user.fullname))]),i("div",{staticStyle:{color:"grey"}},[t._v(t._s(t.user.email))])]),i("hr",{staticStyle:{margin:"5px"}}),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyBooks"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"ic:round-person-pin"}}),t._v(" Trang cá nhân ")],1),i("hr",{staticStyle:{margin:"5px"}}),1==t.user.roleId||2==t.user.roleId?i("div",[i("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"bi:list-task"}}),t._v(" Quản trị ")],1),i("hr",{staticStyle:{margin:"5px"}})],1):t._e(),i("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"uil:signout"}}),t._v(" Đăng xuất ")],1)],1)],1)]):i("nav",[i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default"),i("footer",[t._m(1),i("div",{staticClass:"Main__footer"},[i("div",{staticClass:"Main__footer__container"},[i("div",{staticClass:"grid"},[i("div",{staticClass:"grid-row"},[t._m(2),i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("TÀI KHOẢN")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[this.$cookies.get("token")?i("a",{staticClass:"item-link",staticStyle:{cursor:"pointer"},on:{click:t.HandleLogout}},[t._v("Đăng xuất")]):i("a",{staticClass:"item-link",attrs:{href:"/login"}},[t._v("Đăng nhập/Đăng ký")])]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])]),t._m(8),t._m(9)])])])])])],2)},a=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"Main__logo"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:s("d8b4"),alt:"Logo Trạm Sách"}})])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"Main__subfooter"},[i("div",{staticClass:"Main__subfooter__container"},[i("div",{staticClass:"contact"},[i("span",[t._v("ĐĂNG KÝ NHẬN TIN:")]),i("input",{staticClass:"input1",attrs:{type:"text",placeholder:"Nhập tên của bạn"}}),i("input",{staticClass:"input2",attrs:{type:"text",placeholder:"Nhập email của bạn"}}),i("button",[t._v("ĐĂNG KÝ")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:s("d8b4"),alt:"Logo Trạm Sách"}})]),i("br"),i("span",[t._v("Tất cả các giao dịch ở Trạm Sách được")]),i("br"),i("span",[t._v("chúng tôi đảm bảo kiểm duyệt qua ")]),i("br"),i("span",[t._v("hình thức và giao hàng tận nơi trong ")]),i("br"),i("span",[t._v(" địa bàn nội thành TP Hà Nội. Không")]),i("br"),i("span",[t._v("hỗ trợ giao dịch trực tiếp tại Trạm.")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin cá nhân")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin giao hàng")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Tủ sách")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trang cá nhân")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("span",{staticClass:"contact_info"},[t._v("tramsachhn@gmail.com")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("HỖ TRỢ")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách kiểm duyệt")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách cọc - hoàn tiền")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Quy trình giao dịch")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trung tâm hỗ trợ")])]),i("li",{staticClass:"item"},[i("span",{staticClass:"contact_info"},[t._v("Hotline: 0961284654")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("DỊCH VỤ")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Điều khoản sử dụng")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thông tin cá nhân")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Phương thức thanh toán")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Giới thiệu Trạm Sách")])]),i("li",{staticClass:"item"},[i("span",{staticClass:"contact_info"},[t._v("Số 1 Đào Duy Anh, Đống Đa, Hà Nội")])])])])}],e=s("48ac"),r=s.n(e),o=s("fbfb"),c=s("cde1"),l=s("5ea9"),u={name:"Layout",components:{Icon:l["a"]},data(){return{userByToken:"",user:"",noti:"",userId:"",count:""}},created(){this.getUserInfoByToken(),this.getNotifications(),this.getNotificationsNotRead()},methods:{getUserInfoByToken(){let t=this.$cookies.get("token");this.userByToken=r.a.decode(t,"utf-8"),c["a"].callApi(o["i"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.user=t.data.data}).catch(()=>{})},getNotifications(){let t=this.$cookies.get("token");this.userByToken=r.a.decode(t,"utf-8"),c["a"].callApi(o["i"].NOTIFICATION_10,"POST",{userId:this.userByToken.UserId}).then(t=>{this.noti=t.data.data}).catch(()=>{})},getNotificationsNotRead(){let t=this.$cookies.get("token");this.userByToken=r.a.decode(t,"utf-8"),c["a"].callApi(o["i"].NOTIFICATION_NOT_READ,"POST",{userId:this.userByToken.UserId}).then(t=>{this.count=t.data.numberOfRecords}).catch(()=>{})},HandleLogout(){this.$cookies.remove("token"),window.location.replace("/")}}},f=u,d=(s("5f9c"),s("2877")),h=Object(d["a"])(f,n,a,!1,null,null,null);i["a"]=h.exports},f22d:function(t,i,s){},faf7:function(t,i,s){t.exports=s.p+"img/banner.b79c9f76.png"}}]);
//# sourceMappingURL=chunk-9e8c113e.49697da0.js.map