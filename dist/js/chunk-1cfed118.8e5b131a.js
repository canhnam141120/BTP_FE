(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cfed118"],{"1c02":function(t,e,a){},"482f":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[e("div",{staticClass:"dialogContent"},[e("b-button",{staticClass:"spinner",attrs:{disabled:""}},[e("b-spinner")],1)],1)])},o=[],s={name:"LoadingDialog",props:["show","cancel","confirm"]},n=s,l=(a("ef67"),a("2877")),c=Object(l["a"])(n,i,o,!1,null,"764a15da",null);e["a"]=c.exports},"65ff":function(t,e,a){},7380:function(t,e,a){"use strict";a("7f5f")},"748a":function(t,e,a){},"768e":function(t,e,a){"use strict";a("65ff")},"7f5f":function(t,e,a){},ae8c:function(t,e,a){},b45b:function(t,e,a){"use strict";a("748a")},c27e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("Side_Bar",[e("div",{staticClass:"ml"},[e("div",{staticClass:"row"},[t.showDialog?e("CreateCategoryDialog",{staticClass:"modal",attrs:{show:t.showDialog,cancel:t.cancel,save:t.save}},[e("div",{staticClass:"dialogBody"},[e("label",{staticClass:"labelFee"},[t._v("Tên thể loại: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryName,expression:"categoryName"}],staticClass:"inputFee",attrs:{maxlength:"50",type:"text",required:"",placeholder:"Nhập thể loại mới"},domProps:{value:t.categoryName},on:{input:function(e){e.target.composing||(t.categoryName=e.target.value)}}})])]):t._e(),t.showDialogEdit?e("EditCategoryDialog",{staticClass:"modal",attrs:{show:t.showDialogEdit,cancelEdit:t.cancelEdit,confirm:t.confirm}},[e("div",{staticClass:"dialogBody"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.category.id,expression:"category.id"}],attrs:{type:"hidden"},domProps:{value:t.category.id},on:{input:function(e){e.target.composing||t.$set(t.category,"id",e.target.value)}}}),e("label",{staticClass:"labelFee"},[t._v("Tên thể loại: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.category.name,expression:"category.name"}],staticClass:"inputFee",attrs:{maxlength:"50",type:"text",required:"",placeholder:"Nhập thể loại"},domProps:{value:t.category.name},on:{input:function(e){e.target.composing||t.$set(t.category,"name",e.target.value)}}})])]):t._e(),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"user-data m-b-30"},[e("div",{staticClass:"titleMB"},[t._v("QUẢN LÝ THỂ LOẠI")]),e("hr"),e("div",[e("button",{staticClass:"addBtn",on:{click:function(e){return t.openDialog()}}},[e("Icon",{staticStyle:{"margin-bottom":"5px","margin-right":"10px"},attrs:{icon:"material-symbols:add-circle-outline-rounded"}}),t._v("Thêm mới ")],1)]),e("div",{staticClass:"table-responsive table-data"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("td",[t._v("Mã thể loại")]),e("td",[t._v("Tên thể loại")]),e("td",[t._v("Chỉnh sửa")]),e("td",[t._v("Xóa")])])]),e("tbody",t._l(t.listCategories,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.id))]),e("td",[t._v(t._s(a.name))]),e("td",[e("button",{staticClass:"au-btn au-btn-icon au-btn--brown au-btn--small",on:{click:function(e){return t.openDialogEdit(a.id)}}},[t._v("Sửa")])]),e("td",[e("button",{staticClass:"au-btn au-btn-icon au-btn--brown au-btn--small",on:{click:function(e){return t.HandleDelete(a.id)}}},[t._v("Xoá")])])])})),0)])])])]),e("LoadingDialog",{directives:[{name:"show",rawName:"v-show",value:t.spinner,expression:"spinner"}]})],1)])])},o=[],s=a("cde1"),n=a("fbfb"),l=a("d0be"),c=a("482f"),r=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[e("div",{staticClass:"dialogContent"},[t._m(0),t._t("default"),e("div",{staticClass:"dialogGroupBtn"},[e("button",{staticClass:"dialogBtn",on:{click:t.cancel}},[t._v("Hủy")]),e("button",{staticClass:"dialogBtn",on:{click:t.save}},[t._v("Xác nhận")])])],2)])},d=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"dialogTitle"},[t._v("THÊM THỂ LOẠI MỚI")])])}],u={name:"CreateCategoryDialog",props:["show","cancel","save"]},g=u,h=(a("7380"),a("2877")),p=Object(h["a"])(g,r,d,!1,null,"2e4d47e2",null),m=p.exports,f=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[e("div",{staticClass:"dialogContent"},[t._m(0),t._t("default"),e("div",{staticClass:"dialogGroupBtn"},[e("button",{staticClass:"dialogBtn",on:{click:t.cancelEdit}},[t._v("Hủy")]),e("button",{staticClass:"dialogBtn",on:{click:t.confirm}},[t._v("Lưu")])])],2)])},C=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"dialogTitle"},[t._v("SỬA THỂ LOẠI")])])}],v={name:"EditCategoryDialog",props:["show","cancelEdit","confirm"]},y=v,b=(a("768e"),Object(h["a"])(y,f,C,!1,null,"2122763a",null)),_=b.exports,x=a("5ea9"),w={name:"GetCategories",components:{Side_Bar:l["a"],LoadingDialog:c["a"],CreateCategoryDialog:m,Icon:x["a"],EditCategoryDialog:_},data(){return{listCategories:"",category:"",categoryName:"",showDialog:!1,showDialogEdit:!1,spinner:!1}},created(){this.getCategories()},methods:{getCategories(){this.spinner=!0,s["a"].callApi(n["e"].All_CATEGORY,"GET",{}).then(t=>{this.listCategories=t.data.data,this.spinner=!1}).catch(()=>{})},HandleDelete(t){s["a"].callApi(n["e"].DELETE_CATEGORY+t,"PUT",{}).then(t=>{"DELETE_SUCCESS"===t.data.message&&(alert("Xóa thành công!"),this.getCategories())}).catch(()=>{alert("Xóa không thành công!")})},getCategoryById(t){s["a"].callApi(n["e"].DETAIL_CATEGORY+t,"GET",{}).then(t=>{this.category=t.data.data}).catch(()=>{})},openDialogEdit(t){this.category="",this.getCategoryById(t),this.showDialogEdit=!0},cancelEdit(){this.showDialogEdit=!1},confirm(){s["a"].callApi(n["e"].EDIT_CATEGORY+this.category.id,"PUT",{name:this.category.name}).then(t=>{"UPDATE_SUCCESS"===t.data.message&&(alert("Sửa thể loại thành công"),this.showDialogEdit=!1,this.getCategories())}).catch(()=>{}),this.showDialogEdit=!1},openDialog(){this.showDialog=!0},cancel(){this.showDialog=!1},save(){s["a"].callApi(n["e"].CREATE_CATEGORY,"POST",{name:this.categoryName}).then(t=>{"CREATE_SUCCESS"===t.data.message&&(alert("Thêm thể loại mới thành công"),this.showDialog=!1,this.getCategories())}).catch(()=>{}),this.showDialog=!1}}},T=w,D=(a("b45b"),Object(h["a"])(T,i,o,!1,null,null,null));e["default"]=D.exports},d0be:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"sidebar",class:t.isOpened?"open":"",style:t.cssVars},[e("div",{staticClass:"logo-details",staticStyle:{margin:"6px 14px 0 14px"}},[e("div",{staticClass:"logo_name"},[t._v(" "+t._s(t.menuTitle))]),e("i",{staticClass:"bx",class:t.isOpened?"bx-menu-alt-right":"bx-menu",attrs:{id:"btn"},on:{click:function(e){t.isOpened=!t.isOpened}}})]),e("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"space-between","flex-grow":"1","max-height":"calc(100% - 60px)"}},[e("div",{staticStyle:{margin:"6px 14px 0 14px"},attrs:{id:"my-scroll"}},[e("ul",{staticClass:"nav-list",staticStyle:{overflow:"visible"}},t._l(t.menuItems,(function(a,i){return e("span",{key:i},[e("li",[e("router-link",{staticClass:"rt-link",attrs:{to:a.link}},[e("i",{staticClass:"bx",class:a.icon||"bx-square-rounded"}),e("span",{staticClass:"links_name"},[t._v(t._s(a.name))])]),e("span",{staticClass:"tooltip"},[t._v(t._s(a.tooltip||a.name))])],1)])})),0)]),t.isLoggedIn?e("div",{staticClass:"profile"},[e("div",{staticClass:"profile-details"},[e("img",{staticClass:"avatar",attrs:{src:t.user.avatar}}),e("div",{staticClass:"name_job"},[t._v(t._s(t.user.fullname))])]),t.isExitButton?e("i",{staticClass:"bx bx-log-out",attrs:{id:"log_out"},on:{click:function(e){return e.stopPropagation(),t.$emit("button-exit-clicked")}}}):t._e()]):t._e()])]),t._t("default")],2)},o=[],s=a("48ac"),n=a.n(s),l=a("cde1"),c=a("fbfb"),r={name:"Side_Bar",props:{
//! Menu settings
isMenuOpen:{type:Boolean,default:!1},menuTitle:{type:String,default:"TRẠM SÁCH"},menuIcon:{type:String,default:"bxl-c-plus-plus"},isPaddingLeft:{type:Boolean,default:!0},menuOpenedPaddingLeftBody:{type:String,default:"0px"},menuClosedPaddingLeftBody:{type:String,default:"0px"},
//! Menu items
menuItems:{type:Array,default:()=>[{link:"/ManageIndex",name:"Quản lý sách",tooltip:"Analytics",icon:"bx-book"},{link:"/ManagePost",name:"Quản lý bài đăng",tooltip:"Files",icon:"bx-book-content"},{link:"/ManageTransaction/exchange",name:"Quản lý giao dịch",tooltip:"Dashboard",icon:"bx-cart-alt"},{link:"/ManageCategory",name:"Quản lý thể loại",tooltip:"Order",icon:"bx-category"},{link:"/ManageFee",name:"Quản lý phí",tooltip:"Saved",icon:"bx-money"},{link:"/ManageUser",name:"Quản lý người dùng",tooltip:"Messages",icon:"bx-user"},{link:"/ManageAdmin",name:"Quản lý admin",tooltip:"Messages",icon:"bx-cog"},{link:"/",name:"Trang chủ",tooltip:"Saved",icon:"bx-home"}]},
//! Profile detailes
profileImg:{type:String,default:""},profileName:{type:String,default:""},profileRole:{type:String,default:""},isExitButton:{type:Boolean,default:!0},isLoggedIn:{type:Boolean,default:!0},
//! Styles
bgColor:{type:String,default:"#DFD5CB"},secondaryColor:{type:String,default:"#DFD5CB"},homeSectionColor:{type:String,default:"#e4e9f7"},logoTitleColor:{type:String,default:"#9D6B54"},iconsColor:{type:String,default:"#9D6B54"},itemsTooltipColor:{type:String,default:"#9D6B54"},searchInputTextColor:{type:String,default:"#fff"},menuItemsHoverColor:{type:String,default:"#9D6B54"},menuItemsTextColor:{type:String,default:"#9D6B54"},menuFooterTextColor:{type:String,default:"#9D6B54"}},data(){return{isOpened:!1,user:""}},created(){this.getUserInfoByToken()},methods:{getUserInfoByToken(){let t=this.$cookies.get("token"),e=n.a.decode(t,"utf-8");l["a"].callApi(c["j"].INFORMATION,"POST",{userId:e.UserId}).then(t=>{this.user=t.data.data}).catch(()=>{})}},mounted(){this.isOpened=this.isMenuOpen},computed:{cssVars(){return{"--padding-left-body":this.isOpened?this.menuOpenedPaddingLeftBody:this.menuClosedPaddingLeftBody,"--bg-color":this.bgColor,"--secondary-color":this.secondaryColor,"--home-section-color":this.homeSectionColor,"--logo-title-color":this.logoTitleColor,"--icons-color":this.iconsColor,"--items-tooltip-color":this.itemsTooltipColor,"--serach-input-text-color":this.searchInputTextColor,"--menu-items-hover-color":this.menuItemsHoverColor,"--menu-items-text-color":this.menuItemsTextColor,"--menu-footer-text-color":this.menuFooterTextColor}}},watch:{isOpened(){window.document.body.style.paddingLeft=this.isOpened&&this.isPaddingLeft?this.menuOpenedPaddingLeftBody:this.menuClosedPaddingLeftBody}}},d=r,u=(a("f595"),a("2877")),g=Object(u["a"])(d,i,o,!1,null,null,null);e["a"]=g.exports},ef67:function(t,e,a){"use strict";a("ae8c")},f595:function(t,e,a){"use strict";a("1c02")}}]);
//# sourceMappingURL=chunk-1cfed118.8e5b131a.js.map