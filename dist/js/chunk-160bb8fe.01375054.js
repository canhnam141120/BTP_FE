(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-160bb8fe"],{"2cfa":function(t,s,e){},"43a1":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t._self._c;return s("Layout",[s("main",{staticStyle:{"flex-grow":"1"}},[s("LoadingDialog",{directives:[{name:"show",rawName:"v-show",value:t.spinner,expression:"spinner"}],staticStyle:{"z-index":"999999"}}),t.showAcceptDialog?s("ConfirmDialog",{staticClass:"modal",attrs:{show:t.showAcceptDialog}},[s("div",[s("div",{staticClass:"dialogTitle"},[t._v("XÁC NHẬN")]),s("div",{staticStyle:{color:"#9d6b54","text-align":"center"}},[t._v("Xác nhận chấp nhận yêu cầu trao đổi sách!")]),s("div",{staticClass:"dialogGroupBtn"},[s("button",{staticClass:"dialogBtn",on:{click:t.cancelAcceptDialog}},[t._v("Hủy")]),s("button",{staticClass:"dialogBtn",on:{click:t.HandleAccept}},[t._v("Xác nhận")])])])]):t._e(),t.showConfirmDialog?s("ConfirmDialog",{staticClass:"modal",attrs:{show:t.showConfirmDialog}},[s("div",[s("div",{staticClass:"dialogTitle"},[t._v("XÁC NHẬN")]),s("div",{staticStyle:{color:"#9d6b54","text-align":"center"}},[t._v("Xác nhận từ chối yêu cầu trao đổi sách!")]),s("div",{staticClass:"dialogGroupBtn"},[s("button",{staticClass:"dialogBtn",on:{click:t.cancelConfirmDialog}},[t._v("Hủy")]),s("button",{staticClass:"dialogBtn",on:{click:t.HandleConfirm}},[t._v("Xác nhận")])])])]):t._e(),t.showConfirmDialogHide?s("ConfirmDialog",{staticClass:"modal",attrs:{show:t.showConfirmDialogHide}},[s("div",[s("div",{staticClass:"dialogTitle"},[t._v("XÁC NHẬN")]),s("div",{staticStyle:{color:"#9d6b54","text-align":"center"}},[t._v("Xác nhận ẩn sách!")]),s("div",{staticClass:"dialogGroupBtn"},[s("button",{staticClass:"dialogBtn",on:{click:t.cancelConfirmDialogHide}},[t._v("Hủy")]),s("button",{staticClass:"dialogBtn",on:{click:t.HandleConfirmHide}},[t._v("Xác nhận")])])])]):t._e(),t.showConfirmDialogShow?s("ConfirmDialog",{staticClass:"modal",attrs:{show:t.showConfirmDialogShow}},[s("div",[s("div",{staticClass:"dialogTitle"},[t._v("XÁC NHẬN")]),s("div",{staticStyle:{color:"#9d6b54","text-align":"center"}},[t._v("Xác nhận hiện sách!")]),s("div",{staticClass:"dialogGroupBtn"},[s("button",{staticClass:"dialogBtn",on:{click:t.cancelConfirmDialogShow}},[t._v("Hủy")]),s("button",{staticClass:"dialogBtn",on:{click:t.HandleConfirmShow}},[t._v("Xác nhận")])])])]):t._e(),(t.responseFlag,s("b-alert",{staticStyle:{position:"absolute",right:"0","z-index":"999999"},attrs:{show:t.dismissCountDown,variant:"success"},on:{dismissed:function(s){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.responseMessage)+" ")])),s("div",{staticClass:"VR"},[t.showDialog?s("CreateBookDialog",{staticClass:"modal",attrs:{show:t.showDialog,cancel:t.cancel,save:t.save}},[s("div",[s("div",{staticClass:"dialogTitle"},[t._v("CHỈNH SỬA SÁCH")])]),s("div",{staticClass:"top-form"},[s("div",{staticClass:"left-form"},[s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",attrs:{cols:"2"}},[t._v("Tiêu đề "),t.book.title?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{staticClass:"input-div",attrs:{cols:"9"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.title,expression:"book.title"}],staticClass:"input-text",attrs:{type:"text",maxlength:"100",required:"",placeholder:"Nhập tên sách"},domProps:{value:t.book.title},on:{input:function(s){s.target.composing||t.$set(t.book,"title",s.target.value)}}})])],1),s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",attrs:{cols:"2"}},[t._v("Tác giả "),t.book.author?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{staticClass:"input-div",attrs:{cols:"9"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.author,expression:"book.author"}],staticClass:"input-text",attrs:{type:"text",maxlength:"50",required:"",placeholder:"Nhập tên tác giả"},domProps:{value:t.book.author},on:{input:function(s){s.target.composing||t.$set(t.book,"author",s.target.value)}}})])],1),s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",attrs:{cols:"2"}},[t._v("Thể loại "),t.book.categoryId?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{staticClass:"input-div",attrs:{cols:"9"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.book.categoryId,expression:"book.categoryId"}],staticClass:"input-text",on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.book,"categoryId",s.target.multiple?e:e[0])}}},t._l(t.listCategories,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0)])],1),s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",attrs:{cols:"2"}},[t._v("Ngôn ngữ "),t.book.language?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{staticClass:"input-div",attrs:{cols:"9"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.book.language,expression:"book.language"}],staticClass:"input-text",attrs:{name:"category"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.book,"language",s.target.multiple?e:e[0])}}},t._l(t.listLanguage,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e)+" ")])})),0)])],1),s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",attrs:{cols:"2"}},[t._v("Nhà XB "),t.book.publisher?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{staticClass:"input-div",attrs:{cols:"9"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.publisher,expression:"book.publisher"}],staticClass:"input-text",attrs:{type:"text",maxlength:"50",required:"",placeholder:"Nhập nhà xuất bản"},domProps:{value:t.book.publisher},on:{input:function(s){s.target.composing||t.$set(t.book,"publisher",s.target.value)}}})])],1)],1),s("div",{staticClass:"mid-form"},[s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",staticStyle:{width:"115px"},attrs:{cols:"2"}},[t._v("Năm XB "),t.book.year?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{attrs:{cols:"6"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.book.year,expression:"book.year"}],staticClass:"input-text-short",on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.book,"year",s.target.multiple?e:e[0])}}},t._l(t.listYear,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e)+" ")])})),0)])],1),s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",staticStyle:{width:"115px"},attrs:{cols:"2"}},[t._v("Số trang "),t.book.numberOfPages?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{attrs:{cols:"6"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.numberOfPages,expression:"book.numberOfPages"}],staticClass:"input-text-short",attrs:{type:"number",min:"1",max:"9999",step:"1",required:"",placeholder:"Nhập số trang"},domProps:{value:t.book.numberOfPages},on:{input:[function(s){s.target.composing||t.$set(t.book,"numberOfPages",s.target.value)},t.checkNegative]}})])],1),s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",staticStyle:{width:"116px"},attrs:{cols:"2"}},[t._v("Khối lượng(gr) "),t.book.weight?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{attrs:{cols:"6"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.weight,expression:"book.weight"}],staticClass:"input-text-short",attrs:{type:"number",min:"100",max:"9999",step:"100",required:"",placeholder:"Nhập khối lượng"},domProps:{value:t.book.weight},on:{input:[function(s){s.target.composing||t.$set(t.book,"weight",s.target.value)},t.checkNegative]}})])],1),s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",staticStyle:{width:"115px"},attrs:{cols:"2"}},[t._v("Chọn ảnh")]),s("b-col",{staticClass:"input-div",attrs:{cols:"6"}},[s("input",{staticClass:"input-text-short",staticStyle:{width:"215px"},attrs:{type:"file",title:" ",name:"image"},on:{change:t.uploadImage}})])],1)],1),s("div",{staticClass:"right-form"},[s("b-row",{staticClass:"book-content"},[s("div",[s("b-col",{staticClass:"grCb",attrs:{cols:"9"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.isExchange,expression:"book.isExchange"}],staticClass:"checkB",attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(t.book.isExchange)?t._i(t.book.isExchange,"true")>-1:t.book.isExchange},on:{change:function(s){var e=t.book.isExchange,o=s.target,a=!!o.checked;if(Array.isArray(e)){var i="true",l=t._i(e,i);o.checked?l<0&&t.$set(t.book,"isExchange",e.concat([i])):l>-1&&t.$set(t.book,"isExchange",e.slice(0,l).concat(e.slice(l+1)))}else t.$set(t.book,"isExchange",a)}}}),t._v(" Trao đổi  "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.isRent,expression:"book.isRent"}],staticClass:"checkB",attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(t.book.isRent)?t._i(t.book.isRent,"true")>-1:t.book.isRent},on:{change:function(s){var e=t.book.isRent,o=s.target,a=!!o.checked;if(Array.isArray(e)){var i="true",l=t._i(e,i);o.checked?l<0&&t.$set(t.book,"isRent",e.concat([i])):l>-1&&t.$set(t.book,"isRent",e.slice(0,l).concat(e.slice(l+1)))}else t.$set(t.book,"isRent",a)}}}),t._v(" Thuê "),t.book.isExchange||t.book.isRent?t._e():s("div",{staticStyle:{color:"#ca0303","font-size":"12px","margin-left":"5px"}},[t._v("Vui lòng chọn ít nhất 1 dịch vụ ")])])],1)]),t.book.isExchange||t.book.isRent?s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",staticStyle:{width:"115px"},attrs:{cols:"2"}},[t._v("Giá bìa(đ) "),t.book.coverPrice?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{attrs:{cols:"6"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.coverPrice,expression:"book.coverPrice"}],staticClass:"input-text-short",attrs:{type:"number",min:"10000",max:"9999999",step:"5000",maxlength:"7",required:"",placeholder:"Ví dụ: 199000"},domProps:{value:t.book.coverPrice},on:{input:[function(s){s.target.composing||t.$set(t.book,"coverPrice",s.target.value)},t.checkNegative]}})])],1):t._e(),t.book.isExchange||t.book.isRent?s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",staticStyle:{width:"115px"},attrs:{cols:"2"}},[t._v("Giá đặt cọc(đ) "),t.book.depositPrice?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{attrs:{cols:"6"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.depositPrice,expression:"book.depositPrice"}],staticClass:"input-text-short",attrs:{type:"number",min:"10000",max:"9999999",step:"5000",maxlength:"7",required:"",placeholder:"Ví dụ: 199000"},domProps:{value:t.book.depositPrice},on:{input:[function(s){s.target.composing||t.$set(t.book,"depositPrice",s.target.value)},t.checkNegative]}})])],1):t._e(),t.book.isRent?s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",staticStyle:{width:"115px"},attrs:{cols:"2"}},[t._v("Giá thuê(đ) "),t.book.rentFee?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{attrs:{cols:"6"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.book.rentFee,expression:"book.rentFee"}],staticClass:"input-text-short",attrs:{type:"number",min:"10000",max:"9999999",step:"5000",maxlength:"7",required:"",placeholder:"Ví dụ: 99000"},domProps:{value:t.book.rentFee},on:{input:[function(s){s.target.composing||t.$set(t.book,"rentFee",s.target.value)},t.checkNegative]}})])],1):t._e()],1),s("div",{staticClass:"img-form"},[s("img",{staticStyle:{width:"190px",height:"260px",border:"1px solid #9D6B54"},attrs:{src:t.book.image}})])]),s("div",{staticClass:"bottom-form"},[s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",staticStyle:{width:"85px"},attrs:{cols:"2"}},[t._v("Trạng thái "),t.book.statusBook?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{staticClass:"input-div",attrs:{cols:"9"}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.book.statusBook,expression:"book.statusBook"}],staticClass:"input-text",staticStyle:{height:"100px",width:"1200px"},attrs:{type:"text",maxlength:"250",required:"",placeholder:"Nhập trạng thái"},domProps:{value:t.book.statusBook},on:{input:function(s){s.target.composing||t.$set(t.book,"statusBook",s.target.value)}}})])],1),s("b-row",{staticClass:"book-content"},[s("b-col",{staticClass:"input-label",staticStyle:{width:"85px"},attrs:{cols:"2"}},[t._v("Nội dung "),t.book.description?s("label",{staticStyle:{color:"green"}},[s("Icon",{attrs:{icon:"material-symbols:check-small-rounded"}})],1):s("label",{staticStyle:{color:"#ca0303"}},[t._v("*")])]),s("b-col",{staticClass:"input-div",attrs:{cols:"9"}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.book.description,expression:"book.description"}],staticClass:"input-text",staticStyle:{height:"100px",width:"1200px"},attrs:{type:"text",required:"",placeholder:"Nhập mô tả nội dung sách"},domProps:{value:t.book.description},on:{input:function(s){s.target.composing||t.$set(t.book,"description",s.target.value)}}})])],1)],1),s("div",{staticClass:"dialogGroupBtn"},[s("button",{staticClass:"dialogBtn",on:{click:t.cancel}},[t._v("Hủy")]),t.book.title&&t.book.author&&t.book.categoryId&&t.book.language&&t.book.publisher&&t.book.statusBook&&t.book.description&&(t.book.isExchange||t.book.isRent)&&t.book.year&&t.book.numberOfPages&&t.book.weight&&t.book.coverPrice&&t.book.depositPrice?s("button",{staticClass:"dialogBtn",on:{click:t.save}},[t._v("Lưu")]):s("button",{staticClass:"dialogBtnDisable",attrs:{disabled:""}},[t._v("Lưu")])])]):t._e(),s("div",{staticClass:"containerVR"},[s("div",{staticClass:"left-contentVR"},[s("SideBar_Personal")],1),s("div",{staticClass:"right-contentVR"},[s("div",{staticClass:"topVR"},[s("div",{staticClass:"left"},[t.book.isReady&&"Approved"==t.book.status?s("router-link",{staticStyle:{position:"relative"},attrs:{to:{name:"BookDetail",query:{id:t.book.id}}}},[s("img",{staticClass:"imgBD",attrs:{src:t.book.image}}),t.book.isTrade?s("label",{staticClass:"layer1"},[t._v("Đang giao dịch")]):s("label",{staticClass:"layer2"},[t._v("Sẵn sàng")])]):s("div",{staticStyle:{position:"relative"}},[s("img",{staticClass:"imgBD",attrs:{src:t.book.image}}),t.book.isReady||"Approved"!=t.book.status?t._e():s("label",{staticClass:"hide"},[t._v("Đang ẩn")]),t.book.isReady&&"Waiting"==t.book.status?s("label",{staticClass:"status"},[t._v("Đang đợi duyệt")]):t._e(),t.book.isReady&&"Denied"==t.book.status?s("label",{staticClass:"status"},[t._v("Không được duyệt")]):t._e()]),s("div",{staticClass:"extra"},[t.book.isTrade?t._e():s("button",{staticClass:"editBtn",on:{click:t.openDialog}},[t._v("Chỉnh sửa")]),t.book.isReady&&"Approved"==t.book.status&&!t.book.isTrade?s("button",{staticClass:"hideBtn",on:{click:function(s){return t.HandleHide(t.book.id)}}},[t._v("Ẩn ")]):t._e(),0!=t.book.isReady||"Approved"!=t.book.status||t.book.isTrade?t._e():s("button",{staticClass:"hideBtn",on:{click:function(s){return t.HandleShow(t.book.id)}}},[t._v("Hiện ")])])],1),s("div",{staticClass:"right"},[s("label",{staticClass:"titleBD"},[s("strong",[t._v(t._s(t.book.title))])]),s("div",{staticClass:"contentRight"},[s("div",{staticClass:"bookInfoBD"},[s("div",[t._v("Thể loại: "),s("span",[t._v(t._s(t.book.category.name))])]),s("div",[t._v("Tác giả: "),s("span",[t._v(t._s(t.book.author))])]),s("div",[t._v("Nhà xuất bản: "),s("span",[t._v(t._s(t.book.publisher))])]),s("div",[t._v("Năm xuất bản: "),s("span",[t._v(t._s(t.book.year))])]),s("div",[t._v("Ngôn ngữ: "),s("span",[t._v(t._s(t.book.language))])]),s("div",[t._v("Số trang: "),s("span",[t._v(t._s(t.book.numberOfPages))])]),s("div",[t._v("Trọng lượng: "),s("span",[t._v(t._s(t.book.weight)+"g")])]),s("div",[t._v("Thời gian giao dịch: "),s("span",[t._v(t._s(t.book.numberOfDays)+" ngày")])]),s("div",[t._v("Tình trạng: "+t._s(t.book.statusBook))]),"Approved"==t.book.status?s("div",[t._v("Trạng thái: "),s("strong",{staticStyle:{color:"green"}},[t._v("Đã được duyệt")])]):t._e(),"Denied"==t.book.status?s("div",[t._v("Trạng thái: "),s("strong",{staticStyle:{color:"red"}},[t._v("Đã bị hủy")])]):t._e(),"Waiting"==t.book.status?s("div",[t._v("Trạng thái: "),s("strong",[t._v("Đang đợi duyệt")])]):t._e(),s("div",[t._v("Giá bìa: "),s("span",{staticClass:"cover"},[t._v(t._s(t.book.coverPrice.toLocaleString())+"đ")])]),s("div",[t._v("Phí đặt cọc: "),s("span",{staticClass:"deposit"},[t._v(t._s(t.book.depositPrice.toLocaleString())+"đ")])]),t.book.isRent?s("div",[t._v("Phí thuê: "),s("span",{staticClass:"rent"},[t._v(t._s(t.book.rentFee.toLocaleString())+"đ")])]):t._e()])])])]),s("hr"),s("div",{staticClass:"bottomVR"},[s("div",{staticClass:"title-bottom"},[t._v("Yêu cầu muốn đổi")]),""!=t.listRequestReceive?s("div",{staticClass:"gridMB"},t._l(t.listRequestReceive,(function(o){return s("div",{key:o.id,staticClass:"itemMB"},[s("router-link",{attrs:{to:{name:"BookDetail",query:{id:o.bookOfferId}}}},[s("img",{staticClass:"imgss",attrs:{src:o.bookOffer.image}})]),s("div",{staticClass:"infoMB"},[s("div",{staticClass:"book-titleMB"},[t._v(t._s(o.bookOffer.title))]),s("div",{staticClass:"book-statusMB"},[s("img",{attrs:{src:e("aaca")}}),t._v(" "+t._s(o.bookOffer.user.fullname)+" ")]),s("div",{staticClass:"book-statusMB"},[t._v(t._s(o.bookOffer.category.name))]),s("label",{staticClass:"book-statusMB"},[t._v("Giá bìa: "),s("strong",[t._v(t._s(o.bookOffer.coverPrice.toLocaleString())+"đ")])]),s("label",{staticClass:"book-statusMB"},[t._v(t._s(o.bookOffer.statusBook))])]),s("div",{staticClass:"actionVR"},[t.book.isTrade?t._e():s("button",{staticClass:"active",on:{click:function(s){return t.HandleApproved(o.id)}}},[t._v("Chấp nhận")]),t.book.isTrade?t._e():s("button",{staticClass:"active",on:{click:function(s){return t.HandleDenied(o.id)}}},[t._v("Từ chối")]),t.book.isTrade?s("div",{staticStyle:{"text-align":"center","font-size":"14px","background-color":"grey","border-radius":"10px",padding:"10px",color:"white"}},[t._v("Sách của bạn đang giao dịch")]):t._e()])],1)})),0):s("div",{staticClass:"noBook"},[t._v("Danh sách trống")])])])])],1)],1)])},a=[],i=(e("14d9"),e("2314")),l=e("ebad"),n=e("fbfb"),c=e("cde1"),r=e("48ac"),d=e.n(r),u=e("482f"),h=e("8b91"),g=e("96ec"),b=e("31f0"),v={name:"ViewRequestBook",components:{LoadingDialog:u["a"],SideBar_Personal:i["a"],Layout:l["a"],CreateBookDialog:h["a"],ConfirmDialog:g["a"]},data(){return{dismissSecs:5,dismissCountDown:0,showConfirmDialog:!1,showAcceptDialog:!1,responseFlag:!0,responseMessage:"",showConfirmDialogHide:!1,showConfirmDialogShow:!1,listLanguage:["Tiếng Việt","Tiếng Anh","Tiếng Hán","Tiếng Hàn","Tiếng Nhật","Tiếng Tây Ban Nha","Tiếng Pháp","Tiếng Đức","Tiếng Nga","Tiếng Bồ Đào Nha","Tiếng Hindi","Khác"],listYear:["2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991","1990","1989"],listCategories:"",book:"",listRequestReceive:"",loading:!1,userId:"",userByToken:"",spinner:!1,showDialog:!1,tmpId:""}},created(){this.$cookies.get("token")||this.$router.push({name:"404Page"}),this.getBookById(),this.getRequestReceived(),this.getCategories()},methods:{getCategories(){c["a"].callApi(n["d"].All_CATEGORY,"GET",{}).then(t=>{this.listCategories=t.data.data}).catch(()=>{})},getBookById(){const t=n["c"].DETAIL_BOOK+this.$route.query.id;c["a"].callApi(t,"GET",{}).then(t=>{this.book=t.data.data}).catch(()=>{})},getRequestReceived(){let t=this.$cookies.get("token");this.userByToken=d.a.decode(t,"utf-8");const s=n["i"].LIST_REQUEST_RECEIVED+this.$route.query.id;c["a"].callApi(s,"POST",{userId:this.userByToken.UserId}).then(t=>{this.listRequestReceive=t.data.data}).catch(()=>{})},HandleHide(t){this.tmpId=t,this.showConfirmDialogHide=!0},cancelConfirmDialogHide(){this.showConfirmDialogHide=!1},HandleConfirmHide(){const t=n["a"].HIDE_BOOK+this.tmpId;c["a"].callApi(t,"PUT",{}).then(t=>{"SUCCESS"===t.data.message?(this.responseFlag=!0,this.responseMessage="Ẩn sách thành công!"):(this.responseFlag=!1,this.responseMessage="Có lỗi xảy ra! Vui lòng thử lại sau!"),this.dismissCountDown=this.dismissSecs,this.getBookById(),this.showConfirmDialogHide=!1}).catch(()=>{})},HandleShow(t){this.tmpId=t,this.showConfirmDialogShow=!0},cancelConfirmDialogShow(){this.showConfirmDialogShow=!1},HandleConfirmShow(){const t=n["a"].SHOW_BOOK+this.tmpId;c["a"].callApi(t,"PUT",{}).then(t=>{"SUCCESS"===t.data.message?(this.responseFlag=!0,this.responseMessage="Hiện sách thành công!"):(this.responseFlag=!1,this.responseMessage="Có lỗi xảy ra! Vui lòng thử lại sau!"),this.getBookById(),this.dismissCountDown=this.dismissSecs,this.showConfirmDialogShow=!1}).catch(()=>{})},openDialog(){this.showDialog=!0},cancel(){this.getBookById(),this.showDialog=!1},save(){c["a"].callApi(n["a"].EDIT_BOOK+this.book.id,"PUT",{categoryId:this.book.categoryId,title:this.book.title,description:this.book.description,author:this.book.author,publisher:this.book.publisher,year:this.book.year,language:this.book.language,numberOfPages:this.book.numberOfPages,weight:this.book.weight,coverPrice:this.book.coverPrice,image:this.book.image,depositPrice:this.book.depositPrice,statusBook:this.book.statusBook,isExchange:this.book.isExchange,isRent:this.book.isRent,rentFee:this.book.rentFee}).then(t=>{this.responseMessage="","UPDATE_SUCCESS"===t.data.message?(this.responseFlag=!0,this.responseMessage="Sách của bạn đã được gửi lại QTV để duyệt!"):(this.responseFlag=!1,this.responseMessage="Có lỗi xảy ra! Vui lòng thử lại!"),this.getBookById(),this.dismissCountDown=this.dismissSecs,this.showDialog=!1}).catch(()=>{})},async uploadImage(){const t=document.querySelector("input[type=file]").files[0],s=await Object(b["a"])(t.name);await fetch(s,{method:"PUT",headers:{"Content-Type":"image/jpeg"},body:t});const e=s.split("?")[0];this.book.image=e},HandleApproved(t){this.tmpId=t,this.showAcceptDialog=!0},cancelAcceptDialog(){this.showAcceptDialog=!1},HandleAccept(){this.spinner=!0,window.scroll(0,0),this.userByToken=d.a.decode(this.$cookies.get("token"),"utf-8"),c["a"].callApi(n["k"].ACCEPT_REQUEST+this.tmpId,"PUT",{userId:this.userByToken.UserId}).then(t=>{"SUCCESS"===t.data.message?(this.getRequestReceived(),this.responseFlag=!0,this.responseMessage="Chấp nhận yêu cầu trao đổi sách - Thành công!"):(this.responseFlag=!1,this.responseMessage="Có lỗi xảy ra! Vui lòng thử lại!"),this.dismissCountDown=this.dismissSecs,this.spinner=!1,this.showAcceptDialog=!1}).catch(()=>{})},HandleDenied(t){this.tmpId=t,this.showConfirmDialog=!0},cancelConfirmDialog(){this.showConfirmDialog=!1},HandleConfirm(){this.spinner=!0,window.scroll(0,0),this.userByToken=d.a.decode(this.$cookies.get("token"),"utf-8");const t=n["k"].DENIED_REQUEST+this.tmpId;c["a"].callApi(t,"PUT",{userId:this.userByToken.UserId}).then(t=>{"SUCCESS"===t.data.message?(this.getRequestReceived(),this.responseMessage="Từ chối yêu cầu trao đổi sách - Thành công!"):(this.responseFlag=!1,this.responseMessage="Có lỗi xảy ra! Vui lòng thử lại!"),this.dismissCountDown=this.dismissSecs,this.showConfirmDialog=!1,this.spinner=!1}).catch(()=>{})},countDownChanged(t){this.dismissCountDown=t},checkNegative(t){(t.target.value<=1||t.target.value>9999)&&(t.target.value="")}}},p=v,m=(e("7367"),e("2877")),k=Object(m["a"])(p,o,a,!1,null,"1a5a5354",null);s["default"]=k.exports},"482f":function(t,s,e){"use strict";var o=function(){var t=this,s=t._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[s("div",{staticClass:"dialogContent"},[s("b-button",{staticClass:"spinner",attrs:{disabled:""}},[s("b-spinner")],1)],1)])},a=[],i={name:"LoadingDialog",props:["show","cancel","confirm"]},l=i,n=(e("ef67"),e("2877")),c=Object(n["a"])(l,o,a,!1,null,"764a15da",null);s["a"]=c.exports},7367:function(t,s,e){"use strict";e("c54f")},8136:function(t,s,e){"use strict";e("2cfa")},"8b91":function(t,s,e){"use strict";var o=function(){var t=this,s=t._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[s("div",{staticClass:"dialogContent"},[t._t("default")],2)])},a=[],i={name:"CreateBookDialog",props:["show","cancel","save"]},l=i,n=(e("8136"),e("2877")),c=Object(n["a"])(l,o,a,!1,null,"08d523bd",null);s["a"]=c.exports},"96ec":function(t,s,e){"use strict";var o=function(){var t=this,s=t._self._c;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"dialog"},[s("div",{staticClass:"dialogContent"},[t._t("default")],2)])},a=[],i={name:"ConfirmDialog",props:["show"]},l=i,n=(e("9984"),e("2877")),c=Object(n["a"])(l,o,a,!1,null,"ba3e2db0",null);s["a"]=c.exports},9984:function(t,s,e){"use strict";e("9eea")},"9eea":function(t,s,e){},aaca:function(t,s,e){t.exports=e.p+"img/user.3e879a68.png"},ae8c:function(t,s,e){},c54f:function(t,s,e){},ef67:function(t,s,e){"use strict";e("ae8c")}}]);
//# sourceMappingURL=chunk-160bb8fe.01375054.js.map