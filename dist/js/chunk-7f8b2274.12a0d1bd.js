(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f8b2274"],{"99bc":function(t,n,s){},a92d:function(t,n,s){"use strict";s("99bc")},fe5b:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t._self._c;return n("div",[n("div",{staticClass:"GetPosts"},[n("h1",[t._v("Danh sách bài đăng")]),n("button",{on:{click:t.getPostsAll}},[t._v("Tất cả")]),n("button",{on:{click:t.getPostsApproved}},[t._v("Đã duyệt")]),n("button",{on:{click:t.getPostsDenied}},[t._v("Bị hủy")]),n("button",{on:{click:t.getPostsWaiting}},[t._v("Đang đợi")]),n("br"),n("br"),n("table",{attrs:{border:"1px"}},[t._m(0),t._l(t.listPosts,(function(s){return n("tr",{key:s.id},[n("td",[n("router-link",{attrs:{to:{name:"DetailPost",query:{id:s.id}}}},[n("button",[t._v("Chi tiết")])])],1),n("td",[t._v(t._s(s.id))]),n("td",[t._v(t._s(s.user.fullname))]),n("td",[t._v(t._s(s.title))]),n("td",[t._v(t._s(s.createdDate))]),n("td",[t._v(t._s(s.status))]),n("td",[n("router-link",{attrs:{to:{name:"GetComments",query:{id:s.id}}}},[n("button",[t._v("Xem")])])],1),"Waiting"==s.status?n("td",[n("button",{on:{click:function(n){return t.HandleApproved(s.id)}}},[t._v("Duyệt")]),n("button",{on:{click:function(n){return t.HandleDenied(s.id)}}},[t._v("Hủy")])]):t._e()])}))],2)]),n("br"),n("button",[n("router-link",{attrs:{to:"/ManageIndex"}},[t._v("Quay lại")])],1)])},a=[function(){var t=this,n=t._self._c;return n("tr",[n("td"),n("td",[t._v("Mã bài dăng")]),n("td",[t._v("Người đăng")]),n("td",[t._v("Tiêu đề")]),n("td",[t._v("Thời gian đăng")]),n("td",[t._v("Trạng thái")]),n("td",[t._v("Bình luận")]),n("td")])}],i=s("cde1"),o=s("fbfb"),d={name:"GetPosts",data(){return{listPosts:""}},created(){this.getPostsAll()},methods:{getPostsAll(){i["a"].callApi(o["g"].LIST_POST,"GET",{}).then(t=>{this.listPosts=t.data.data}).catch(()=>{})},getPostsApproved(){i["a"].callApi(o["g"].LIST_POST_APPROVED,"GET",{}).then(t=>{this.listPosts=t.data.data}).catch(()=>{})},getPostsDenied(){i["a"].callApi(o["g"].LIST_POST_DENIED,"GET",{}).then(t=>{this.listPosts=t.data.data}).catch(()=>{})},getPostsWaiting(){i["a"].callApi(o["g"].LIST_POST_WAITING,"GET",{}).then(t=>{this.listPosts=t.data.data}).catch(()=>{})},HandleApproved(t){const n=o["g"].APPROVED_POST+t;i["a"].callApi(n,"PUT",{}).then(t=>{"SUCCESS"===t.data.message&&this.$router.go(),console.log(t)}).catch(()=>{alert("Duyệt không thành công!")})},HandleDenied(t){const n=o["g"].DENIED_POST+t;i["a"].callApi(n,"PUT",{}).then(t=>{"SUCCESS"===t.data.message&&this.$router.go(),console.log(t)}).catch(()=>{alert("Hủy không thành công!")})}}},c=d,l=(s("a92d"),s("2877")),r=Object(l["a"])(c,e,a,!1,null,"795c18f2",null);n["default"]=r.exports}}]);
//# sourceMappingURL=chunk-7f8b2274.12a0d1bd.js.map