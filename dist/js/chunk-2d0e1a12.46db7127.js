(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1a12"],{"7af8":function(l,a,i){"use strict";i.r(a);var t=function(){var l=this,a=l._self._c;return a("div",[a("div",{staticClass:"DetailExchangeBill"},[a("h1",[l._v("Chi tiết hoá đơn đổi")]),a("div",[a("div",[a("label",[l._v("Mã hóa đơn: ")]),a("span",[l._v(l._s(l.bill.id))])]),a("div",[a("label",[l._v("Mã giao dịch: ")]),a("span",[l._v(l._s(l.bill.exchangeId))])]),a("div",[a("label",[l._v("Khách hàng: ")]),a("span",[l._v(l._s(l.bill.user.fullname))])]),a("div",[a("label",[l._v("Số cuốn sách: ")]),a("span",[l._v(l._s(l.bill.totalBook))])]),a("div",[a("label",[l._v("Số tiền: ")]),a("span",[l._v(l._s(l.bill.totalAmount))])]),a("div",[a("label",[l._v("Phí đặt cọc: ")]),a("span",[l._v(l._s(l.bill.depositFee))])]),a("div",[a("label",[l._v("Trạng thái thanh toán: ")]),a("span",[l._v(l._s(l.bill.isPaid))])]),a("div",[a("label",[l._v("Ngày thanh toán: ")]),a("span",[l._v(l._s(l.bill.paidDate))])]),a("div",[a("label",[l._v("Phương thức thanh toán: ")]),a("span",[l._v(l._s(l.bill.payments))])]),a("button",[a("router-link",{attrs:{to:"/ManageBill/exchange-bill"}},[l._v("Quay lại")])],1)])])])},n=[],e=i("cde1"),s=i("fbfb"),v={name:"DetailExchangeBill",data(){return{bill:""}},created(){this.getBillById()},methods:{getBillById(){const l=s["c"].DETAIL_BILL_EXCHANGE+this.$route.query.id;e["a"].callApi(l,"GET",{}).then(l=>{this.bill=l.data.data}).catch(()=>{})}}},_=v,h=i("2877"),d=Object(h["a"])(_,t,n,!1,null,"027bc7e9",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e1a12.46db7127.js.map