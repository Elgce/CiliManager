"use strict";(self["webpackChunkbmi_hw"]=self["webpackChunkbmi_hw"]||[]).push([[764],{764:function(e,l,a){a.r(l),a.d(l,{default:function(){return k}});var t=a(3396);const i=e=>((0,t.dD)("data-v-2b9d4ad2"),e=e(),(0,t.Cn)(),e),o={class:"demo-date-picker"},d={class:"block"},n=(0,t.Uk)("公益活动"),u=(0,t.Uk)("研学活动"),r=(0,t.Uk)("上传图片"),m=i((()=>(0,t._)("div",{class:"el-upload__text"},[(0,t.Uk)(" 将图片拖拽到此处 或 "),(0,t._)("em",null,"点击上传图片")],-1))),p=i((()=>(0,t._)("div",{class:"el-upload__tip"}," 上传图片大小请小于200kb ",-1))),s={class:"dialog-footer"},c=(0,t.Uk)("取消"),_=(0,t.Uk)("确定"),f=(0,t.Uk)("发布活动"),g=(0,t.Uk)("取消");function w(e,l,a,i,w,b){const h=(0,t.up)("el-input"),W=(0,t.up)("el-form-item"),V=(0,t.up)("el-date-picker"),k=(0,t.up)("el-radio-button"),y=(0,t.up)("el-radio-group"),U=(0,t.up)("el-checkbox"),v=(0,t.up)("Upload"),C=(0,t.up)("el-icon"),x=(0,t.up)("el-button"),Y=(0,t.up)("el-divider"),D=(0,t.up)("el-alert"),H=(0,t.up)("upload-filled"),j=(0,t.up)("el-upload"),z=(0,t.up)("el-dialog"),M=(0,t.up)("el-form"),S=(0,t.up)("el-row"),T=(0,t.up)("el-main"),O=(0,t.up)("el-container");return(0,t.wg)(),(0,t.j4)(O,null,{default:(0,t.w5)((()=>[(0,t.Wm)(T,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{model:i.form,"label-width":"120px",style:{"max-width":"650px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{label:"活动名称"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{id:"input_name",modelValue:i.form.name,"onUpdate:modelValue":l[0]||(l[0]=e=>i.form.name=e),placeholder:"限制50个字符以内(支持汉字、英文大小写、数字及下划线，下划线不能作为开头)"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(W,{label:"活动时间"},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t._)("div",d,[(0,t.Wm)(V,{modelValue:i.form.actdate,"onUpdate:modelValue":l[1]||(l[1]=e=>i.form.actdate=e),type:"daterange","unlink-panels":"","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date",shortcuts:e.shortcuts,size:e.size,format:"YYYY/MM/DD","value-format":"YYYY/MM/DD"},null,8,["modelValue","shortcuts","size"])])])])),_:1}),(0,t.Wm)(W,{label:"活动类型"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{id:"data_type",modelValue:i.form.radio,"onUpdate:modelValue":l[2]||(l[2]=e=>i.form.radio=e),color:"blue"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{name:"data_type",value:"charity",label:"charity"},{default:(0,t.w5)((()=>[n])),_:1}),(0,t.Wm)(k,{name:"data_type",value:"learn",label:"learn"},{default:(0,t.w5)((()=>[u])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(W,{label:"活动人数"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(U,{modelValue:i.form.single_sign,"onUpdate:modelValue":l[3]||(l[3]=e=>i.form.single_sign=e),label:"单人报名"},null,8,["modelValue"]),(0,t.Wm)(U,{modelValue:i.form.group_sign,"onUpdate:modelValue":l[4]||(l[4]=e=>i.form.group_sign=e),label:"团体报名"},null,8,["modelValue"])])])),_:1}),(0,t.Wm)(W,{label:"上传图片"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{id:"uploader_pic",type:"primary",onClick:b.call_diagram_pic},{default:(0,t.w5)((()=>[(0,t.Wm)(C,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v)])),_:1}),r])),_:1},8,["onClick"])])),_:1}),(0,t.Wm)(W,{label:"活动详情"},{default:(0,t.w5)((()=>[(0,t.Wm)(h,{modelValue:i.form.content,"onUpdate:modelValue":l[5]||(l[5]=e=>i.form.content=e),autosize:"",type:"textarea",placeholder:"请输入活动描述"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(z,{title:"上传图片",modelValue:w.picUpVisible,"onUpdate:modelValue":l[8]||(l[8]=e=>w.picUpVisible=e)},{footer:(0,t.w5)((()=>[(0,t._)("span",s,[(0,t.Wm)(x,{onClick:l[6]||(l[6]=e=>w.picUpVisible=!1)},{default:(0,t.w5)((()=>[c])),_:1}),(0,t.Wm)(x,{id:"push_file",type:"primary",onClick:l[7]||(l[7]=e=>w.picUpVisible=!1)},{default:(0,t.w5)((()=>[_])),_:1})])])),default:(0,t.w5)((()=>[(0,t.Wm)(Y,{id:"divider_dialog"}),(0,t.Wm)(D,{id:"explanation_p",title:"请上传需要的图片",type:"warning",closable:!1}),(0,t.Wm)(j,{class:"upload-demo",drag:"",action:"/api/call",multiple:""},{tip:(0,t.w5)((()=>[p])),default:(0,t.w5)((()=>[(0,t.Wm)(C,{class:"el-icon--upload"},{default:(0,t.w5)((()=>[(0,t.Wm)(H)])),_:1}),m])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["model"]),(0,t.Wm)(S,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{type:"primary",onClick:b.createactivity},{default:(0,t.w5)((()=>[f])),_:1},8,["onClick"]),(0,t.Wm)(x,{type:"warning",onClick:b.cancel},{default:(0,t.w5)((()=>[g])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}var b=a(4870),h={components:{},data(){return{picUpVisible:!1}},setup(){let e=(0,b.qj)({name:"",actdate:(0,b.iH)(""),radio:(0,b.iH)(""),content:(0,b.iH)(""),single_sign:(0,b.iH)(""),group_sign:(0,b.iH)("")});return{form:e}},methods:{isfull(){let e=this.form,l=""!=e.name&&""!=e.actdate&&""!=e.radio&&""!=e.content&&!(""==e.single_sign&&""==e.group_sign);return l||alert("请将表单内容填写完整！"),l},createactivity(){if(this.isfull()){let e=this.form,l=0;e.single_sign?l=1:e.group_sign&&(l=2),e.group_sign&&e.single_sign&&(l=3);const a={title:e.name,content:e.content,begin_date:e.actdate[0],end_date:e.actdate[1],num:l,specy:e.radio};return console.log(a),fetch("/api/activity/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((e=>e.json())).then((()=>{this.$router.push("/index/activities/view")}))}},cancel(){this.$router.push("/index/manage/dataset")},call_diagram_pic(){this.picUpVisible=!0}}},W=a(89);const V=(0,W.Z)(h,[["render",w],["__scopeId","data-v-2b9d4ad2"]]);var k=V}}]);
//# sourceMappingURL=764.419b0b30.js.map