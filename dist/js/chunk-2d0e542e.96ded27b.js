(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e542e"],{9474:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"GetComments"},[e("h1",[t._v("Danh sách bình luận")]),e("table",{attrs:{border:"1px"}},[t._m(0),t._l(t.listComments,(function(n){return e("tr",{key:n.id},[e("td",[t._v(t._s(n.id))]),e("td",[t._v(t._s(n.postId))]),e("td",[t._v(t._s(n.user.fullname))]),e("td",[t._v(t._s(n.content))]),e("td",[t._v(t._s(n.createdDate))]),e("td",[e("button",{on:{click:function(e){return t.HandleDelete(n.id)}}},[t._v("Xóa")])])])}))],2)]),e("br"),e("button",[e("router-link",{attrs:{to:"/ManagePost"}},[t._v("Quay lại")])],1)])},a=[function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("Mã đánh giá")]),e("td",[t._v("Mã sách")]),e("td",[t._v("Người đánh giá")]),e("td",[t._v("Nội dung")]),e("td",[t._v("Ngày đánh giá")]),e("td")])}],d=(n("14d9"),n("cde1")),o=n("fbfb"),i={name:"GetComments",data(){return{listComments:""}},created(){this.getComments()},methods:{getComments(){const t=o["g"].COMMENT_OF_POST+this.$route.query.id;d["a"].callApi(t,"GET",{}).then(t=>{this.listComments=t.data.data}).catch(()=>{})},HandleDelete(t){const e=o["g"].DELETE_COMMENT+t;d["a"].callApi(e,"DELETE",{}).then(t=>{"DELETE_SUCCESS"===t.data.message&&this.$router.push({name:"GetComments"}).catch(()=>{}),console.log(t)}).catch(()=>{alert("Xóa không thành công!")})}}},c=i,r=n("2877"),l=Object(r["a"])(c,s,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e542e.96ded27b.js.map