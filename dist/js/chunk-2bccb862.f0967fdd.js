(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bccb862"],{2557:function(t,i,s){"use strict";s("6dec")},"482f":function(t,i,s){"use strict";var n=function(){var t=this,i=t._self._c;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[i("div",{staticClass:"dialogContent"},[i("b-button",{staticClass:"spinner",attrs:{disabled:""}},[i("b-spinner")],1)],1)])},e=[],a={name:"LoadingDialog",props:["show","cancel","confirm"]},r=a,o=(s("ef67"),s("2877")),c=Object(o["a"])(r,n,e,!1,null,"764a15da",null);i["a"]=c.exports},"48ac":function(t,i,s){!function(i,s){t.exports=s()}(0,(function(){return function(t){function i(n){if(s[n])return s[n].exports;var e=s[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}var s={};return i.m=t,i.c=s,i.i=function(t){return t},i.d=function(t,s,n){i.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/vue-jwt-decode/dist",i(i.s=10)}([function(t,i,s){t.exports=!s(1)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,i){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,i){var s=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=s)},function(t,i){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,i){var s=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=s)},function(t,i){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,i,s){var n=s(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,i){var s=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:s)(t)}},function(t,i,s){var n=s(6),e=s(5);t.exports=function(t){return n(e(t))}},function(t,i,s){"use strict";var n=s(11),e=s.n(n);i.a={install:function(t){t.prototype.$jwtDec=this,t.jwtDec=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var i=t.split(".");if(i.length<2)return null;var s=JSON.parse(atob(i[0])),n=JSON.parse(atob(i[1]));return e()({},s,n)}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s(9);i.default=n.a},function(t,i,s){t.exports={default:s(12),__esModule:!0}},function(t,i,s){s(38),t.exports=s(4).Object.assign},function(t,i){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,i,s){var n=s(3);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,i,s){var n=s(8),e=s(34),a=s(33);t.exports=function(t){return function(i,s,r){var o,c=n(i),l=e(c.length),u=a(r,l);if(t&&s!=s){for(;l>u;)if((o=c[u++])!=o)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===s)return t||u||0;return!t&&-1}}},function(t,i){var s={}.toString;t.exports=function(t){return s.call(t).slice(8,-1)}},function(t,i,s){var n=s(13);t.exports=function(t,i,s){if(n(t),void 0===i)return t;switch(s){case 1:return function(s){return t.call(i,s)};case 2:return function(s,n){return t.call(i,s,n)};case 3:return function(s,n,e){return t.call(i,s,n,e)}}return function(){return t.apply(i,arguments)}}},function(t,i,s){var n=s(3),e=s(2).document,a=n(e)&&n(e.createElement);t.exports=function(t){return a?e.createElement(t):{}}},function(t,i){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,i,s){var n=s(2),e=s(4),a=s(17),r=s(22),o=function(t,i,s){var c,l,u,h=t&o.F,f=t&o.G,d=t&o.S,p=t&o.P,v=t&o.B,_=t&o.W,m=f?e:e[i]||(e[i]={}),g=m.prototype,C=f?n:d?n[i]:(n[i]||{}).prototype;for(c in f&&(s=i),s)(l=!h&&C&&void 0!==C[c])&&c in m||(u=l?C[c]:s[c],m[c]=f&&"function"!=typeof C[c]?s[c]:v&&l?a(u,n):_&&C[c]==u?function(t){var i=function(i,s,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(i);case 2:return new t(i,s)}return new t(i,s,n)}return t.apply(this,arguments)};return i.prototype=t.prototype,i}(u):p&&"function"==typeof u?a(Function.call,u):u,p&&((m.virtual||(m.virtual={}))[c]=u,t&o.R&&g&&!g[c]&&r(g,c,u)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,t.exports=o},function(t,i){var s={}.hasOwnProperty;t.exports=function(t,i){return s.call(t,i)}},function(t,i,s){var n=s(25),e=s(30);t.exports=s(0)?function(t,i,s){return n.f(t,i,e(1,s))}:function(t,i,s){return t[i]=s,t}},function(t,i,s){t.exports=!s(0)&&!s(1)((function(){return 7!=Object.defineProperty(s(18)("div"),"a",{get:function(){return 7}}).a}))},function(t,i,s){"use strict";var n=s(28),e=s(26),a=s(29),r=s(35),o=s(6),c=Object.assign;t.exports=!c||s(1)((function(){var t={},i={},s=Symbol(),n="abcdefghijklmnopqrst";return t[s]=7,n.split("").forEach((function(t){i[t]=t})),7!=c({},t)[s]||Object.keys(c({},i)).join("")!=n}))?function(t,i){for(var s=r(t),c=arguments.length,l=1,u=e.f,h=a.f;c>l;)for(var f,d=o(arguments[l++]),p=u?n(d).concat(u(d)):n(d),v=p.length,_=0;v>_;)h.call(d,f=p[_++])&&(s[f]=d[f]);return s}:c},function(t,i,s){var n=s(14),e=s(23),a=s(36),r=Object.defineProperty;i.f=s(0)?Object.defineProperty:function(t,i,s){if(n(t),i=a(i,!0),n(s),e)try{return r(t,i,s)}catch(t){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(t[i]=s.value),t}},function(t,i){i.f=Object.getOwnPropertySymbols},function(t,i,s){var n=s(21),e=s(8),a=s(15)(!1),r=s(31)("IE_PROTO");t.exports=function(t,i){var s,o=e(t),c=0,l=[];for(s in o)s!=r&&n(o,s)&&l.push(s);for(;i.length>c;)n(o,s=i[c++])&&(~a(l,s)||l.push(s));return l}},function(t,i,s){var n=s(27),e=s(19);t.exports=Object.keys||function(t){return n(t,e)}},function(t,i){i.f={}.propertyIsEnumerable},function(t,i){t.exports=function(t,i){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:i}}},function(t,i,s){var n=s(32)("keys"),e=s(37);t.exports=function(t){return n[t]||(n[t]=e(t))}},function(t,i,s){var n=s(2),e=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return e[t]||(e[t]={})}},function(t,i,s){var n=s(7),e=Math.max,a=Math.min;t.exports=function(t,i){return t=n(t),t<0?e(t+i,0):a(t,i)}},function(t,i,s){var n=s(7),e=Math.min;t.exports=function(t){return t>0?e(n(t),9007199254740991):0}},function(t,i,s){var n=s(5);t.exports=function(t){return Object(n(t))}},function(t,i,s){var n=s(3);t.exports=function(t,i){if(!n(t))return t;var s,e;if(i&&"function"==typeof(s=t.toString)&&!n(e=s.call(t)))return e;if("function"==typeof(s=t.valueOf)&&!n(e=s.call(t)))return e;if(!i&&"function"==typeof(s=t.toString)&&!n(e=s.call(t)))return e;throw TypeError("Can't convert object to primitive value")}},function(t,i){var s=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++s+n).toString(36))}},function(t,i,s){var n=s(20);n(n.S+n.F,"Object",{assign:s(24)})}])}))},"6dec":function(t,i,s){},"7d73":function(t,i,s){"use strict";s("e5ea")},ae8c:function(t,i,s){},c53d:function(t,i,s){"use strict";s.r(i);var n=function(){var t,i,s,n=this,e=n._self._c;return e("Layout",[e("main",{staticStyle:{"flex-grow":"1"}},[e("LoadingDialog",{directives:[{name:"show",rawName:"v-show",value:n.spinner,expression:"spinner"}]}),e("div",{staticClass:"postDetail"},[e("div",{staticClass:"container"},[e("div",{staticClass:"leftPD"},[e("div",{staticClass:"bottom"},[e("div",{staticClass:"leftTop"},[e("div",{staticClass:"authorPD"},[e("div",{staticStyle:{"margin-left":"auto","margin-right":"auto",width:"80px"}},[e("img",{staticClass:"authorAvatar",attrs:{src:null===(t=n.post.user)||void 0===t?void 0:t.avatar,alt:"Ảnh đại diện"}})]),e("div",{staticClass:"authorName"},[n._v(n._s(null===(i=n.post.user)||void 0===i?void 0:i.fullname))]),e("div",{staticClass:"authorNumber"},[n._v(n._s(null===(s=n.post.user)||void 0===s?void 0:s.likeNumber)+" người thích")]),e("div",{staticStyle:{"margin-left":"auto","margin-right":"auto",width:"fit-content"}},[n.userByToken.UserId!=n.post.userId?e("router-link",{staticClass:"authorBtn",attrs:{to:{name:"OtherPerson",query:{id:n.post.userId}}}},[n._v("Xem")]):e("router-link",{staticClass:"authorBtn",attrs:{to:"/MyBooks"}},[n._v("Trang cá nhân")])],1),e("hr")]),e("div",{staticClass:"contentPD"},[e("div",{staticClass:"titlePD"},[n._v(n._s(n.post.title))]),e("hr"),e("div",{staticClass:"imgPD"},[e("img",{staticClass:"displayPD",attrs:{src:n.post.image,alt:"Ảnh minh họa"}})])])]),e("div",{staticClass:"leftBottom"},[e("div",{staticClass:"mainPD"},[n._v(n._s(n.post.content))]),e("div",{staticClass:"endPD"},[e("div",{staticClass:"createDate"},[e("Icon",{staticClass:"iconTime",attrs:{icon:"ic:twotone-access-time"}}),n._v(n._s(n._f("formatDate")(n.post.createdDate)))],1),""==n.userByToken||n.checkLike?n._e():e("button",{staticClass:"btnLike",on:{click:n.HandleLike}},[e("Icon",{staticStyle:{width:"20px",height:"20px","margin-right":"2%"},attrs:{icon:"ant-design:like-filled"}}),n._v(" Thích ")],1),""!=n.userByToken&&n.checkLike?e("button",{staticClass:"btnLike",on:{click:n.HandleUnLike}},[e("Icon",{staticStyle:{width:"20px",height:"20px","margin-right":"2%"},attrs:{icon:"ant-design:dislike-filled"}}),n._v(" Bỏ Thích ")],1):n._e()])])])]),e("div",{staticClass:"rightPD"},[e("div",{staticClass:"userPost"},[e("div",{staticClass:"subTitle"},[n._v("Cùng tác giả")]),e("hr",{staticClass:"hrPD"}),n._l(n.listUserPost,(function(t){return e("div",{key:t.id},[e("router-link",{staticClass:"postTitlePD",attrs:{to:{name:"PostDetail",query:{id:t.id}}},nativeOn:{click:function(t){return n.loadPage.apply(null,arguments)}}},[n._v(n._s(t.title))]),e("hr",{staticClass:"hrPD2"})],1)}))],2),e("div",{staticClass:"topPost"},[e("div",{staticClass:"subTitle"},[n._v("Bài viết mới nhất")]),e("hr",{staticClass:"hrPD"}),n._l(n.list6Post,(function(t){return e("div",{key:t.id},[e("router-link",{staticClass:"postTitlePD",attrs:{to:{name:"PostDetail",query:{id:t.id}}},nativeOn:{click:function(t){return n.loadPage.apply(null,arguments)}}},[n._v(n._s(t.title))]),e("hr",{staticClass:"hrPD2"})],1)}))],2)])])])],1)])},e=[],a=(s("14d9"),s("cde1")),r=s("fbfb"),o=s("ebad"),c=s("5ea9"),l=s("482f"),u=s("48ac"),h=s.n(u),f={name:"BookDetail",components:{Layout:o["a"],Icon:c["a"],LoadingDialog:l["a"]},data(){return{userByToken:"",info:"",post:"",list6Post:"",listUserPost:"",spinner:!1,checkLike:!1}},created(){this.$cookies.get("token")&&(this.userByToken=h.a.decode(this.$cookies.get("token"),"utf-8"),this.CheckLike()),this.getPostById(),this.get6Post(),this.getMyInformation()},methods:{getPostById(){const t=r["j"].DETAIL_POST+this.$route.query.id;a["a"].callApi(t,"GET",{}).then(t=>{t.data.data?(this.post=t.data.data,this.getPostUser(this.post.userId)):this.$router.push({name:"404Page"})}).catch(()=>{})},get6Post(){a["a"].callApi(r["j"].POST6,"GET",{}).then(t=>{this.list6Post=t.data.data}).catch(()=>{})},getPostUser(t){const i=r["j"].USER_POST+t;a["a"].callApi(i,"GET",{}).then(t=>{this.listUserPost=t.data.data}).catch(()=>{})},getMyInformation(){this.userByToken=h.a.decode(this.$cookies.get("token"),"utf-8"),a["a"].callApi(r["i"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.info=t.data.data}).catch(()=>{})},loadPage(){this.loading=!0,this.$cookies.get("token")&&this.CheckLike(),this.getPostById()},HandleLike(){this.userByToken=h.a.decode(this.$cookies.get("token"),"utf-8"),a["a"].callApi(r["i"].ADD_POST_FAVORITE+this.$route.query.id,"POST",{userId:this.userByToken.UserId}).then(t=>{"ADD_SUCCESS"==t.data.message&&(this.getPostById(),this.checkLike=!0)}).catch(()=>{})},HandleUnLike(){this.userByToken=h.a.decode(this.$cookies.get("token"),"utf-8"),a["a"].callApi(r["i"].DELETE_POST_FAVORITE+this.$route.query.id,"DELETE",{userId:this.userByToken.UserId}).then(t=>{"DELETE_SUCCESS"==t.data.message&&(this.getPostById(),this.checkLike=!1)}).catch(()=>{})},CheckLike(){this.userByToken=h.a.decode(this.$cookies.get("token"),"utf-8"),a["a"].callApi(r["i"].CHECK_POST_LIKE+this.$route.query.id,"POST",{userId:this.userByToken.UserId}).then(t=>{"TRUE"==t.data.message?this.checkLike=!0:this.checkLike=!1}).catch(()=>{})}},filters:{formatDate(t){return new Date(t).toLocaleString("en-GB")}}},d=f,p=(s("7d73"),s("2877")),v=Object(p["a"])(d,n,e,!1,null,"006761e4",null);i["default"]=v.exports},d8b4:function(t,i,s){t.exports=s.p+"img/logo.d67a157a.png"},e5ea:function(t,i,s){},ebad:function(t,i,s){"use strict";var n=function(){var t=this,i=t._self._c;return i("div",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"}},[i("header",{staticClass:"Main__header"},[i("div",{staticClass:"Main__header__container"},[t._m(0),i("div",[i("nav",{staticClass:"Main__nav",staticStyle:{"padding-left":"50px"}},[i("router-link",{staticClass:"Main__list__item home",attrs:{to:"/","active-color":"#9D6B54"}},[t._v("Trang Chủ ")]),i("router-link",{staticClass:"Main__list__item course-management btnCategory",attrs:{to:"/AllBooks","active-color":"#9D6B54"}},[t._v("Tủ sách")]),i("router-link",{staticClass:"Main__list__item class-management",attrs:{to:"/BlogIndex","active-color":"#9D6B54"}},[t._v("Trạm đọc ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/Policy&Terms","active-color":"#9D6B54"}},[t._v("Chính sách & điều khoản ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Quy trình ")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/users-management","active-color":"#9D6B54"}},[t._v("Giới thiệu ")])],1)]),i("ul",{staticClass:"Main__account"},[this.$cookies.get("token")?i("nav",[i("li",[i("b-dropdown",{attrs:{variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("Icon",{staticClass:"icon",attrs:{icon:"tabler:bell-ringing-2"}}),i("div",{staticClass:"countNoti"},[t._v(t._s(t.count))])]},proxy:!0}])},[i("div",{staticClass:"titleNoti"},[t._v("Thông Báo")]),t._l(t.noti,(function(s){return i("div",{key:s.id,staticClass:"notification"},[s.isRead?i("div",{staticStyle:{"padding-left":"10px",height:"25px","padding-top":"5px"}},[t._v('"'+t._s(s.content)+'"')]):i("div",{staticStyle:{"background-color":"#F0ECE4",height:"25px","padding-left":"10px","padding-top":"5px"}},[t._v('"'+t._s(s.content)+'"')]),i("hr",{staticStyle:{"margin-top":"0px","margin-bottom":"0px"}})])})),i("div",{staticClass:"allNoti"},[i("router-link",{staticClass:"linkAllNoti",attrs:{to:"AllNotification"}},[t._v("Xem tất cả")])],1)],2)],1),i("li",[i("b-dropdown",{attrs:{right:"",text:"Right align",variant:"black","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("img",{staticClass:"icon",attrs:{src:t.user.avatar}})]},proxy:!0}])},[i("div",{staticClass:"dropdown-item-top"},[i("img",{staticClass:"icon",attrs:{src:t.user.avatar}}),i("div",[t._v(t._s(t.user.fullname))]),i("div",{staticStyle:{color:"grey"}},[t._v(t._s(t.user.email))])]),i("hr",{staticStyle:{margin:"5px"}}),i("router-link",{staticClass:"dropdown-item",attrs:{to:"/MyBooks"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"ic:round-person-pin"}}),t._v(" Trang cá nhân ")],1),i("hr",{staticStyle:{margin:"5px"}}),1==t.user.roleId||2==t.user.roleId?i("div",[i("router-link",{staticClass:"dropdown-item",attrs:{to:"/ManageIndex"}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"bi:list-task"}}),t._v(" Quản trị ")],1),i("hr",{staticStyle:{margin:"5px"}})],1):t._e(),i("button",{staticClass:"dropdown-item",on:{click:t.HandleLogout}},[i("Icon",{staticClass:"iconPerson",attrs:{icon:"uil:signout"}}),t._v(" Đăng xuất ")],1)],1)],1)]):i("nav",[i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/login"}},[t._v("Đăng nhập")]),i("router-link",{staticClass:"Main__list__item musers-management",attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])]),t._t("default"),i("footer",[t._m(1),i("div",{staticClass:"Main__footer"},[i("div",{staticClass:"Main__footer__container"},[i("div",{staticClass:"grid"},[i("div",{staticClass:"grid-row"},[t._m(2),i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("TÀI KHOẢN")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[this.$cookies.get("token")?i("a",{staticClass:"item-link",staticStyle:{cursor:"pointer"},on:{click:t.HandleLogout}},[t._v("Đăng xuất")]):i("a",{staticClass:"item-link",attrs:{href:"/login"}},[t._v("Đăng nhập/Đăng ký")])]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])]),t._m(8),t._m(9)])])])])])],2)},e=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"Main__logo"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:s("d8b4"),alt:"Logo Trạm Sách"}})])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"Main__subfooter"},[i("div",{staticClass:"Main__subfooter__container"},[i("div",{staticClass:"contact"},[i("span",[t._v("ĐĂNG KÝ NHẬN TIN:")]),i("input",{staticClass:"input1",attrs:{type:"text",placeholder:"Nhập tên của bạn"}}),i("input",{staticClass:"input2",attrs:{type:"text",placeholder:"Nhập email của bạn"}}),i("button",[t._v("ĐĂNG KÝ")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("a",{attrs:{href:"/"}},[i("img",{attrs:{src:s("d8b4"),alt:"Logo Trạm Sách"}})]),i("br"),i("span",[t._v("Tất cả các giao dịch ở Trạm Sách được")]),i("br"),i("span",[t._v("chúng tôi đảm bảo kiểm duyệt qua ")]),i("br"),i("span",[t._v("hình thức và giao hàng tận nơi trong ")]),i("br"),i("span",[t._v(" địa bàn nội thành TP Hà Nội. Không")]),i("br"),i("span",[t._v("hỗ trợ giao dịch trực tiếp tại Trạm.")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin cá nhân")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Thay đổi thông tin giao hàng")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Tủ sách")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trang cá nhân")])])},function(){var t=this,i=t._self._c;return i("li",{staticClass:"item"},[i("span",{staticClass:"contact_info"},[t._v("tramsachhn@gmail.com")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("HỖ TRỢ")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách kiểm duyệt")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách cọc - hoàn tiền")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Quy trình giao dịch")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Trung tâm hỗ trợ")])]),i("li",{staticClass:"item"},[i("span",{staticClass:"contact_info"},[t._v("Hotline: 0961284654")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"grid-column"},[i("h3",{staticClass:"heading"},[t._v("DỊCH VỤ")]),i("ul",{staticClass:"list"},[i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Điều khoản sử dụng")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thông tin cá nhân")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Chính sách bảo mật thanh toán")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Phương thức thanh toán")])]),i("li",{staticClass:"item"},[i("a",{staticClass:"item-link",attrs:{href:""}},[t._v("Giới thiệu Trạm Sách")])]),i("li",{staticClass:"item"},[i("span",{staticClass:"contact_info"},[t._v("Số 1 Đào Duy Anh, Đống Đa, Hà Nội")])])])])}],a=s("48ac"),r=s.n(a),o=s("fbfb"),c=s("cde1"),l=s("5ea9"),u={name:"Layout",components:{Icon:l["a"]},data(){return{userByToken:"",user:"",noti:"",userId:"",count:""}},created(){this.getUserInfoByToken(),this.getNotifications(),this.getNotificationsNotRead()},methods:{getUserInfoByToken(){let t=this.$cookies.get("token");this.userByToken=r.a.decode(t,"utf-8"),c["a"].callApi(o["i"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.user=t.data.data}).catch(()=>{})},getNotifications(){let t=this.$cookies.get("token");this.userByToken=r.a.decode(t,"utf-8"),c["a"].callApi(o["i"].NOTIFICATION_10,"POST",{userId:this.userByToken.UserId}).then(t=>{this.noti=t.data.data}).catch(()=>{})},getNotificationsNotRead(){let t=this.$cookies.get("token");this.userByToken=r.a.decode(t,"utf-8"),c["a"].callApi(o["i"].NOTIFICATION_NOT_READ,"POST",{userId:this.userByToken.UserId}).then(t=>{this.count=t.data.numberOfRecords}).catch(()=>{})},HandleLogout(){this.$cookies.remove("token"),window.location.replace("/")}}},h=u,f=(s("2557"),s("2877")),d=Object(f["a"])(h,n,e,!1,null,null,null);i["a"]=d.exports},ef67:function(t,i,s){"use strict";s("ae8c")}}]);
//# sourceMappingURL=chunk-2bccb862.f0967fdd.js.map