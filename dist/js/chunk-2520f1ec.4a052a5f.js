(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2520f1ec"],{"1a7b":function(e,t,a){},"5ca8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"register"}},[e._m(0),e._m(1),t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",required:"",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._m(2),t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",required:"",placeholder:"Mật khẩu"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._m(3),t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",required:"",placeholder:"Phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._m(4),t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],attrs:{type:"text",required:"",placeholder:"FullName"},domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}})]),e._m(5),t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",required:"",placeholder:"Address"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})]),t("button",{on:{click:e.HandleRegister}},[e._v("Đăng ký")]),t("hr"),t("br"),e._m(6),e._v("   "),t("button",[t("router-link",{attrs:{to:"/login"}},[e._v("Đăng nhập")])],1)])},s=[function(){var e=this,t=e._self._c;return t("h1",[t("strong",[e._v("Chào bạn")]),e._v(" Hãy đăng ký nhé!")])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"email"}},[t("b",[e._v("Email")])])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"password"}},[t("b",[e._v("Password")])])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"email"}},[t("b",[e._v("Phone Number")])])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"email"}},[t("b",[e._v("Full Name")])])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"email"}},[t("b",[e._v("Address")])])},function(){var e=this,t=e._self._c;return t("label",{attrs:{for:"email"}},[t("b",[e._v("Đã có tài khoản?")])])}],n=(a("14d9"),a("cde1")),o=a("fbfb"),l={name:"Register",data(){return{username:"",password:"",phone:"",fullName:"",address:"",flag:!0}},methods:{HandleRegister(){""===this.username&&(this.flag=!1,alert("Khong duoc null")),this.flag&&n["a"].callApi(o["k"].USER_REGISTER,"POST",{email:this.username,phone:this.phone,fullname:this.fullName,password:this.password,addressMain:this.address}).then(e=>{this.$router.push({name:"ManageBook"}),console.log(e)}).catch(()=>{})}}},i=l,u=(a("f317"),a("2877")),d=Object(u["a"])(i,r,s,!1,null,"109cba6f",null);t["default"]=d.exports},f317:function(e,t,a){"use strict";a("1a7b")}}]);
//# sourceMappingURL=chunk-2520f1ec.4a052a5f.js.map