(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-weixiuxinxi-add-or-update"],{1084:function(e,i,t){var r=t("f5f8");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("7a924709",r,!0,{sourceMap:!1,shadowMode:!1})},"18ac":function(e,i,t){"use strict";var r=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("28a5"),t("96cf");var n=r(t("3b8d")),a=r(t("e2b1")),o=r(t("064f")),d={data:function(){return{cross:"",ruleForm:{biaoti:"",jianjie:"",tupian:"",weixiuneirong:"",weixiushijian:"",yonghuzhanghao:"",yonghuxingming:"",weixiudizhi:"",weixiuzhanghao:"",weixiuxingming:"",shhf:""},weixiuzhanghaoOptions:[],weixiuzhanghaoIndex:0,user:{},ro:{biaoti:!1,jianjie:!1,tupian:!1,weixiuneirong:!1,weixiushijian:!1,yonghuzhanghao:!1,yonghuxingming:!1,weixiudizhi:!1,weixiuzhanghao:!1,weixiuxingming:!1,sfsh:!1,shhf:!1}}},components:{wPicker:a.default,xiaEditor:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.weixiushijian=this.$utils.getCurDateTime(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:return r=e.sent,this.user=r.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.weixiuzhanghao=this.user.weixiuzhanghao,this.ro.weixiuzhanghao=!0,this.ruleForm.weixiuxingming=this.user.weixiuxingming,this.ro.weixiuxingming=!0,e.next=16,this.$api.option("weixiuyuan","weixiuzhanghao",{});case 16:if(r=e.sent,this.weixiuzhanghaoOptions=r.data,this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=26;break}return this.ruleForm.id=i.id,e.next=24,this.$api.info("weixiuxinxi",this.ruleForm.id);case 24:r=e.sent,this.ruleForm=r.data;case 26:if(this.cross=i.cross,!i.cross){e.next=74;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 30:if((e.t1=e.t0()).done){e.next=74;break}if(a=e.t1.value,"biaoti"!=a){e.next=36;break}return this.ruleForm.biaoti=n[a],this.ro.biaoti=!0,e.abrupt("continue",30);case 36:if("jianjie"!=a){e.next=40;break}return this.ruleForm.jianjie=n[a],this.ro.jianjie=!0,e.abrupt("continue",30);case 40:if("tupian"!=a){e.next=44;break}return this.ruleForm.tupian=n[a].split(",")[0],this.ro.tupian=!0,e.abrupt("continue",30);case 44:if("weixiuneirong"!=a){e.next=48;break}return this.ruleForm.weixiuneirong=n[a],this.ro.weixiuneirong=!0,e.abrupt("continue",30);case 48:if("weixiushijian"!=a){e.next=52;break}return this.ruleForm.weixiushijian=n[a],this.ro.weixiushijian=!0,e.abrupt("continue",30);case 52:if("yonghuzhanghao"!=a){e.next=56;break}return this.ruleForm.yonghuzhanghao=n[a],this.ro.yonghuzhanghao=!0,e.abrupt("continue",30);case 56:if("yonghuxingming"!=a){e.next=60;break}return this.ruleForm.yonghuxingming=n[a],this.ro.yonghuxingming=!0,e.abrupt("continue",30);case 60:if("weixiudizhi"!=a){e.next=64;break}return this.ruleForm.weixiudizhi=n[a],this.ro.weixiudizhi=!0,e.abrupt("continue",30);case 64:if("weixiuzhanghao"!=a){e.next=68;break}return this.ruleForm.weixiuzhanghao=n[a],this.ro.weixiuzhanghao=!0,e.abrupt("continue",30);case 68:if("weixiuxingming"!=a){e.next=72;break}return this.ruleForm.weixiuxingming=n[a],this.ro.weixiuxingming=!0,e.abrupt("continue",30);case 72:e.next=30;break;case 74:this.styleChange();case 75:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{weixiuneirongChange:function(e){this.ruleForm.weixiuneirong=e},styleChange:function(){this.$nextTick((function(){}))},weixiuzhanghaoChange:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.weixiuzhanghaoIndex=i.target.value,this.ruleForm.weixiuzhanghao=this.weixiuzhanghaoOptions[this.weixiuzhanghaoIndex],e.next=4,this.$api.follow("weixiuyuan","weixiuzhanghao",{columnValue:this.ruleForm.weixiuzhanghao});case 4:t=e.sent,t.data.weixiuxingming&&(this.ruleForm.weixiuxingming=t.data.weixiuxingming);case 6:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),weixiushijianConfirm:function(e){console.log(e),this.ruleForm.weixiushijian=e.result,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.tupian="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i,t,r,n,a,o,d,u,p,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.weixiuneirong){e.next=3;break}return this.$utils.msg("维修内容不能为空"),e.abrupt("return");case 3:if(this.ruleForm.weixiudizhi){e.next=6;break}return this.$utils.msg("维修地址不能为空"),e.abrupt("return");case 6:if(!this.cross){e.next=22;break}if(a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=22;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=18;break}for(d in i)d==a&&(i[d]=o);return u=uni.getStorageSync("crossTable"),e.next=16,this.$api.update("".concat(u),i);case 16:e.next=22;break;case 18:t=Number(uni.getStorageSync("userid")),r=i["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 22:if(!r||!t){e.next=44;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=r,p={page:1,limit:10,crossuserid:t,crossrefid:r},e.next=28,this.$api.list("weixiuxinxi",p);case 28:if(g=e.sent,!(g.data.total>=n)){e.next=34;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 34:if(!this.ruleForm.id){e.next=39;break}return e.next=37,this.$api.update("weixiuxinxi",this.ruleForm);case 37:e.next=41;break;case 39:return e.next=41,this.$api.add("weixiuxinxi",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:e.next=52;break;case 44:if(!this.ruleForm.id){e.next=49;break}return e.next=47,this.$api.update("weixiuxinxi",this.ruleForm);case 47:e.next=51;break;case 49:return e.next=51,this.$api.add("weixiuxinxi",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,t=i.getFullYear(),r=i.getMonth()+1,n=i.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(t,"-").concat(r,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};i.default=d},3798:function(e,i,t){"use strict";t.r(i);var r=t("65f3"),n=t("af35");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);t("633d");var o,d=t("f0c5"),u=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"0e69bc04",null,!1,r["a"],o);i["default"]=u.exports},"633d":function(e,i,t){"use strict";var r=t("1084"),n=t.n(r);n.a},"65f3":function(e,i,t){"use strict";var r={"xia-editor":t("064f").default,"w-picker":t("e2b1").default},n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{minHeight:"100vh",padding:"0px 0 80rpx",borderColor:"#21d5ae",background:"#fff",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"32rpx",color:"#8f8adb",textAlign:"right",fontWeight:"600"}},[e._v("标题")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.biaoti,placeholder:"标题"},model:{value:e.ruleForm.biaoti,callback:function(i){e.$set(e.ruleForm,"biaoti",i)},expression:"ruleForm.biaoti"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"32rpx",color:"#8f8adb",textAlign:"right",fontWeight:"600"}},[e._v("图片")]),e.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.tupian.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"32rpx",color:"#8f8adb",textAlign:"right",fontWeight:"600"}},[e._v("维修时间")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{placeholder:"维修时间"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toggleTab("weixiushijian")}},model:{value:e.ruleForm.weixiushijian,callback:function(i){e.$set(e.ruleForm,"weixiushijian",i)},expression:"ruleForm.weixiushijian"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"32rpx",color:"#8f8adb",textAlign:"right",fontWeight:"600"}},[e._v("用户账号")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:e.ruleForm.yonghuzhanghao,callback:function(i){e.$set(e.ruleForm,"yonghuzhanghao",i)},expression:"ruleForm.yonghuzhanghao"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"32rpx",color:"#8f8adb",textAlign:"right",fontWeight:"600"}},[e._v("用户姓名")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:e.ruleForm.yonghuxingming,callback:function(i){e.$set(e.ruleForm,"yonghuxingming",i)},expression:"ruleForm.yonghuxingming"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"32rpx",color:"#8f8adb",textAlign:"right",fontWeight:"600"}},[e._v("维修地址")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.weixiudizhi,placeholder:"维修地址"},model:{value:e.ruleForm.weixiudizhi,callback:function(i){e.$set(e.ruleForm,"weixiudizhi",i)},expression:"ruleForm.weixiudizhi"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"32rpx",color:"#8f8adb",textAlign:"right",fontWeight:"600"}},[e._v("维修账号")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.weixiuzhanghaoIndex,range:e.weixiuzhanghaoOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.weixiuzhanghaoChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666"}},[e._v(e._s(e.weixiuzhanghaoOptions[e.weixiuzhanghaoIndex]))])],1)],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"32rpx",color:"#8f8adb",textAlign:"right",fontWeight:"600"}},[e._v("维修姓名")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.weixiuxingming,placeholder:"维修姓名"},model:{value:e.ruleForm.weixiuxingming,callback:function(i){e.$set(e.ruleForm,"weixiuxingming",i)},expression:"ruleForm.weixiuxingming"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 32rpx",borderColor:"#e9be70",borderRadius:"0px",borderWidth:"0px",background:"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"32rpx",color:"#8f8adb",textAlign:"right",fontWeight:"600"}},[e._v("简介")]),t("v-uni-textarea",{style:{border:"0",minHeight:"240rpx",padding:"40rpx 40rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"none",fontSize:"28rpx"},attrs:{placeholder:"简介"},model:{value:e.ruleForm.jianjie,callback:function(i){e.$set(e.ruleForm,"jianjie",i)},expression:"ruleForm.jianjie"}})],1),t("v-uni-view",{style:{padding:"12rpx 0",margin:"0 0 24rpx 0",borderColor:"#ccc",borderWidth:"0 0 0px 0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"100%",padding:"0 40rpx",lineHeight:"80rpx",fontSize:"32rpx",color:"#8f8adb",fontWeight:"600"}},[e._v("维修内容")]),t("xia-editor",{ref:"editor",style:{minHeight:"300rpx",padding:"24rpx 32rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",borderColor:"#e9be70",borderRadius:"0px",color:"#666",background:"url(http://codegen.caihongy.cn/20230306/d5965dd347be4def8903f02c041e6ca8.png) no-repeat left top / 32rpx,url(http://codegen.caihongy.cn/20230306/16f74414e92b43e495ddaf55761f753f.png) no-repeat right top / 32rpx,url(http://codegen.caihongy.cn/20230306/fd99570ac76d4301918546297b701a3b.png) no-repeat left bottom / 32rpx,url(http://codegen.caihongy.cn/20230306/267c8846963b4c0893ac3a9364a520e6.png) no-repeat right bottom / 32rpx,linear-gradient(180deg, rgba(247,250,254,.6) 0%, rgba(236,242,249,1) 100%)",borderWidth:"0px",width:"100%",fontSize:"32rpx",borderStyle:"solid",height:"auto"},attrs:{placeholder:"维修内容"},on:{editorChange:function(i){arguments[0]=i=e.$handleEvent(i),e.weixiuneirongChange.apply(void 0,arguments)}},model:{value:e.ruleForm.weixiuneirong,callback:function(i){e.$set(e.ruleForm,"weixiuneirong",i)},expression:"ruleForm.weixiuneirong"}})],1),t("v-uni-view",{staticClass:"btn",style:{padding:"0px",margin:"40rpx 0 0 0",background:"none",display:"flex",width:"100%",justifyContent:"center",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"0px 12rpx 12rpx -6rpx #ccc",margin:"0 40rpx 0 0",borderColor:"#6dd5cb",color:"#333",display:"inline",minWidth:"240rpx",borderRadius:"40rpx",background:"#f0d9da",borderWidth:"0px",width:"auto",lineHeight:"88rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"weixiushijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.weixiushijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return r}))},af35:function(e,i,t){"use strict";t.r(i);var r=t("18ac"),n=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(i,e,(function(){return r[e]}))}(a);i["default"]=n.a},f5f8:function(e,i,t){var r=t("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-0e69bc04]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i}}]);