"use strict";(self["webpackChunkbmi_hw"]=self["webpackChunkbmi_hw"]||[]).push([[999],{6804:function(t,e,a){a.d(e,{Z:function(){return d}});var u=a(3396),r=a(7139);const i=(0,u.Uk)("首页");function n(t,e,a,n,o,l){const s=(0,u.up)("el-breadcrumb-item"),d=(0,u.up)("el-breadcrumb");return(0,u.wg)(),(0,u.j4)(d,{separator:">"},{default:(0,u.w5)((()=>[(0,u.Wm)(s,{to:{path:"/"}},{default:(0,u.w5)((()=>[i])),_:1}),((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(o.breadList,((t,e)=>((0,u.wg)(),(0,u.iD)(u.HY,null,[t.name?((0,u.wg)(),(0,u.j4)(s,{key:e,to:t.path},{default:(0,u.w5)((()=>[(0,u.Uk)((0,r.zw)(t.name),1)])),_:2},1032,["to"])):(0,u.kq)("",!0)],64)))),256))])),_:1})}var o={data(){return{breadList:[]}},methods:{getMatched(){this.breadList=this.$route.matched}},created(){this.getMatched()},watch:{$route(){this.breadList=this.$route.matched}}},l=a(89);const s=(0,l.Z)(o,[["render",n],["__scopeId","data-v-1a755c60"]]);var d=s},8999:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var u=a(3396);const r=t=>((0,u.dD)("data-v-a902cdc0"),t=t(),(0,u.Cn)(),t),i={class:"login-wrap"},n=r((()=>(0,u._)("h1",{class:"title"},"管理员登录",-1))),o=(0,u.Uk)("登录");function l(t,e,a,r,l,s){const d=(0,u.up)("Breadcrumb"),h=(0,u.up)("el-header"),c=(0,u.up)("el-divider"),m=(0,u.up)("el-input"),p=(0,u.up)("el-form-item"),w=(0,u.up)("el-button"),f=(0,u.up)("el-form"),y=(0,u.up)("el-main"),g=(0,u.up)("el-container");return(0,u.wg)(),(0,u.j4)(g,null,{default:(0,u.w5)((()=>[(0,u.Wm)(h,null,{default:(0,u.w5)((()=>[(0,u.Wm)(d)])),_:1}),(0,u.Wm)(c),(0,u.Wm)(y,null,{default:(0,u.w5)((()=>[(0,u._)("div",i,[(0,u.Wm)(f,{class:"login-container"},{default:(0,u.w5)((()=>[n,(0,u.Wm)(p,{label:"账号"},{default:(0,u.w5)((()=>[(0,u.Wm)(m,{type:"text",modelValue:l.uname,"onUpdate:modelValue":e[0]||(e[0]=t=>l.uname=t),placeholder:"登录账号",autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,u.Wm)(p,{label:"密码"},{default:(0,u.w5)((()=>[(0,u.Wm)(m,{type:"password",modelValue:l.password,"onUpdate:modelValue":e[1]||(e[1]=t=>l.password=t),placeholder:"登录密码",autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,u.Wm)(p,null,{default:(0,u.w5)((()=>[(0,u.Wm)(w,{type:"primary",style:{width:"100%"},onClick:e[2]||(e[2]=t=>s.checklogin())},{default:(0,u.w5)((()=>[o])),_:1})])),_:1})])),_:1})])])),_:1})])),_:1})}var s=a(7178),d=a(4870),h=a(6804),c={name:"ManagerLogin",data(){return{password:(0,d.iH)(""),uname:(0,d.iH)(""),authority:-1}},components:{Breadcrumb:h.Z},methods:{checklogin(){let t=this.uname,e=this.password,a={adminname:t,password:e},u=this;fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((t=>t.json())).then((t=>{u.authority=t.authority})),0==this.authority?this.$router.push("/index/activities"):1==this.authority?this.$router.push("/index/community"):2==this.authority?this.$router.push("/index/check"):3==this.authority?this.$router.push("/index/activities/learn"):4==this.authority?this.$router.push("/index/activities/charity"):-1==this.authority&&(0,s.z8)({message:"Error:You have input wrong uname or passwd!",type:"warning",grouping:!0})}}},m=a(89);const p=(0,m.Z)(c,[["render",l],["__scopeId","data-v-a902cdc0"]]);var w=p}}]);
//# sourceMappingURL=999.76f52827.js.map