(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea178812"],{2314:function(t,s,i){"use strict";var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"menu-sidebarPS"},[s("div",{staticClass:"title"},[t._v("TRANG CÁ NHÂN")]),s("div",{staticClass:"group-btn"},[s("button",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"material-symbols:menu-book-outline-rounded"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyBooks"}},[t._v("Tủ sách")])],1),s("div",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"mdi:post-outline"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyPosts"}},[t._v("Bài đăng")])],1),s("div",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"mdi:cards-heart-outline"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyFavorites"}},[t._v("Danh sách yêu thích")])],1),s("div",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"mdi:chat-question-outline"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyRequests"}},[t._v("Yêu cầu đã gửi")])],1),s("div",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"ic:outline-swap-horizontal-circle"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyTransaction"}},[t._v("Giao dịch")])],1),s("div",{staticClass:"btn"},[s("button",{staticClass:"btn-icon"},[s("Icon",{attrs:{icon:"iconoir:profile-circled"}})],1),s("router-link",{staticClass:"side-btn",attrs:{to:"/MyInformation"}},[t._v("Thông tin cá nhân")])],1)])])},n=[],o=i("5ea9"),e={name:"SideBar_Personal",components:{Icon:o["a"]}},c=e,r=(i("60bb"),i("2877")),l=Object(r["a"])(c,a,n,!1,null,"4a4ff1e1",null);s["a"]=l.exports},"60bb":function(t,s,i){"use strict";i("ccac")},ccac:function(t,s,i){},d234:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t._self._c;return s("Layout",[s("main",{staticStyle:{"flex-grow":"1"}},[s("div",{staticClass:"MI"},[s("div",{staticClass:"containerMI"},[s("div",{staticClass:"left-contentMI"},[s("SideBar_Personal")],1),s("div",{staticClass:"right-contentMI"},[s("b-skeleton-wrapper",{attrs:{loading:t.loading},scopedSlots:t._u([{key:"loading",fn:function(){return[s("div",{staticClass:"topMI"},[s("b-card",{staticStyle:{width:"742.2px",height:"298px"},attrs:{"no-body":"","img-right":""}},[s("b-skeleton-img",{staticClass:"imgMI",staticStyle:{border:"none"},attrs:{"card-img":"right"}}),s("b-card-body",{staticStyle:{height:"290px"}},[s("br"),s("br"),s("br"),s("b-skeleton",{attrs:{animation:"wave",width:"80%",height:"30px"}}),s("b-skeleton",{attrs:{animation:"wave",width:"90%",height:"30px"}},[t._v(">")]),s("b-skeleton",{attrs:{animation:"wave",width:"90%",height:"30px"}},[t._v(">")]),s("b-skeleton",{attrs:{animation:"wave",width:"60%",height:"30px"}},[t._v(">")])],1)],1)],1)]},proxy:!0}])},[s("div",{staticClass:"topMI"},[s("div",{staticClass:"infoMI"},[s("div",{staticClass:"nameMI"},[t._v(t._s(t.info.fullname))]),s("div",{staticClass:"divMI"},[s("Icon",{attrs:{icon:"mdi:email"}}),s("span",[t._v("Email: "+t._s(t.info.email))])],1),s("div",{staticClass:"divMI"},[s("Icon",{attrs:{icon:"material-symbols:call"}}),s("span",[t._v("Số điện thoại: "+t._s(t.info.phone))])],1),s("div",{staticClass:"divMI"},[s("Icon",{attrs:{icon:"material-symbols:location-on"}}),s("span",[t._v("Địa chỉ: "+t._s(t.info.addressMain))])],1),s("button",{staticClass:"editMI"},[s("Icon",{staticStyle:{width:"20px",height:"20px","margin-right":"2%"},attrs:{icon:"uil:pen"}}),t._v("Thay đổi thông tin ")],1)]),s("div",[s("button",{staticClass:"imgBtn"},[s("Icon",{attrs:{icon:"material-symbols:flip-camera-ios"}})],1),s("img",{staticClass:"imgMI",attrs:{src:t.info.avatar}}),s("div",{staticClass:"numberMI"},[s("div",{},[t._v(t._s(t.info.likeNumber)+" người thích")]),s("div",{},[t._v(t._s(t.info.numberOfTransaction)+" lượt giao dịch")])])])])]),s("hr"),s("div",{staticClass:"bottomMI"})],1)])])])])},n=[],o=i("fbfb"),e=i("cde1"),c=i("2314"),r=i("ebad"),l=i("48ac"),d=i.n(l),u=i("5ea9"),b={name:"MyInformation",components:{SideBar_Personal:c["a"],Layout:r["a"],Icon:u["a"]},data(){return{info:"",userId:"",loading:!1}},created(){this.getMyInformation()},methods:{getMyInformation(){this.loading=!0;let t=this.$cookies.get("token");this.userByToken=d.a.decode(t,"utf-8"),e["a"].callApi(o["j"].INFORMATION,"POST",{userId:this.userByToken.UserId}).then(t=>{this.info=t.data.data,this.loading=!1}).catch(()=>{})}}},h=b,v=(i("f6b0"),i("2877")),m=Object(v["a"])(h,a,n,!1,null,null,null);s["default"]=m.exports},e21e:function(t,s,i){},f6b0:function(t,s,i){"use strict";i("e21e")}}]);
//# sourceMappingURL=chunk-ea178812.30081840.js.map