(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0476"],{"66ff":function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t._self._c;return o("div",[o("div",{staticClass:"MyBooks"},[o("h1",[t._v("Danh sách sách của tôi")]),o("button",{on:{click:t.getBooksAll}},[t._v("Tất cả")]),o("button",{on:{click:t.getBooksApproved}},[t._v("Đã duyệt")]),o("button",{on:{click:t.getBooksDenied}},[t._v("Bị hủy")]),o("button",{on:{click:t.getBooksWaiting}},[t._v("Đang đợi")]),o("br"),o("br"),o("table",{attrs:{border:"1px"}},[t._m(0),t._l(t.listBooks,(function(e){return o("tr",{key:e.id},[o("td",[o("router-link",{attrs:{to:{name:"DetailBook",query:{id:e.id}}}},[o("button",[t._v("Chi tiết")])])],1),o("td",[t._v(t._s(e.id))]),o("td",[t._v(t._s(e.userId))]),o("td",[t._v(t._s(e.title))]),o("td",[o("img",{attrs:{src:e.image,height:"90px",width:"65px"}})]),o("td",[t._v(t._s(e.coverPrice))]),o("td",[t._v(t._s(e.depositPrice))]),o("td",[t._v(t._s(e.postedDate))]),o("td",[t._v(t._s(e.status))]),o("td",[o("router-link",{attrs:{to:{name:"GetFeedbacks",query:{id:e.id}}}},[o("button",[t._v("Xem")])])],1)])}))],2)]),o("br"),o("button",[o("router-link",{attrs:{to:"/ManageIndex"}},[t._v("Quay lại")])],1)])},s=[function(){var t=this,o=t._self._c;return o("tr",[o("td"),o("td",[t._v("Mã sách")]),o("td",[t._v("Người đăng")]),o("td",[t._v("Tên sách")]),o("td",[t._v("Ảnh")]),o("td",[t._v("Giá bìa")]),o("td",[t._v("Giá cọc")]),o("td",[t._v("Ngày đăng")]),o("td",[t._v("Trạng thái")]),o("td",[t._v("Đánh giá")]),o("td")])}],a=e("cde1"),n=e("fbfb"),d={name:"MyBooks",data(){return{listBooks:""}},created(){this.getBooksAll()},methods:{getBooksAll(){a["a"].callApi(n["j"].LIST_BOOK,"POST",{token:this.$cookies.get("token")}).then(t=>{this.listBooks=t.data.data}).catch(()=>{})},getBooksApproved(){a["a"].callApi(n["j"].LIST_BOOK_APPROVED,"POST",{token:this.$cookies.get("token")}).then(t=>{this.listBooks=t.data.data}).catch(()=>{})},getBooksDenied(){a["a"].callApi(n["j"].LIST_BOOK_DENIED,"POST",{token:this.$cookies.get("token")}).then(t=>{this.listBooks=t.data.data}).catch(()=>{})},getBooksWaiting(){a["a"].callApi(n["j"].LIST_BOOK_WAITING,"POST",{token:this.$cookies.get("token")}).then(t=>{this.listBooks=t.data.data}).catch(()=>{})}}},c=d,_=e("2877"),r=Object(_["a"])(c,i,s,!1,null,null,null);o["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d0476.4a9dfd75.js.map