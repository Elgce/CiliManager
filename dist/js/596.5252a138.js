"use strict";(self["webpackChunkbmi_hw"]=self["webpackChunkbmi_hw"]||[]).push([[596],{3596:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var l=n(3396),a=n(7139);const i=(0,l.Uk)("新建公告"),o=(0,l.Uk)("编辑"),u=(0,l.Uk)("删除"),d={class:"txt_num"},s={class:"dialog-footer"},m=(0,l.Uk)("取消"),h=(0,l.Uk)("发布");function _(e,t,n,_,p,c){const w=(0,l.up)("el-radio-button"),r=(0,l.up)("el-radio-group"),f=(0,l.up)("el-col"),b=(0,l.up)("el-button"),W=(0,l.up)("el-table-column"),y=(0,l.up)("el-table"),V=(0,l.up)("el-input"),k=(0,l.up)("el-form-item"),g=(0,l.up)("el-form"),x=(0,l.up)("el-dialog"),C=(0,l.up)("el-main"),U=(0,l.up)("el-container");return(0,l.wg)(),(0,l.j4)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{span:9,offset:1},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{modelValue:p.t_type,"onUpdate:modelValue":t[0]||(t[0]=e=>p.t_type=e),onChange:c.handleradiochange,size:"large",class:"mytest3"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{label:"all"},{default:(0,l.w5)((()=>[(0,l.Uk)("全部公告("+(0,a.zw)(p.all_num)+")",1)])),_:1}),(0,l.Wm)(w,{label:"ed"},{default:(0,l.w5)((()=>[(0,l.Uk)("已发布公告("+(0,a.zw)(p.ed_num)+")",1)])),_:1}),(0,l.Wm)(w,{label:"to"},{default:(0,l.w5)((()=>[(0,l.Uk)("待编辑公告("+(0,a.zw)(p.to_num)+")",1)])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),(0,l.Wm)(f,{span:14}),(0,l.Wm)(b,{class:"txt_in",onClick:e.insert_txt,type:"primary"},{default:(0,l.w5)((()=>[i])),_:1},8,["onClick"]),(0,l.Wm)(y,{data:p.tableData,stripe:"true",style:{width:"100%"},class:"mytest8"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{prop:"id",label:"公告ID"}),(0,l.Wm)(W,{prop:"name",label:"公告标题"}),(0,l.Wm)(W,{label:"操作"},{default:(0,l.w5)((e=>[(0,l.Wm)(b,{type:"primary",onClick:t=>c.show_edit(e)},{default:(0,l.w5)((()=>[o])),_:2},1032,["onClick"]),(0,l.Wm)(b,{onClick:t=>c.delete_announcement(e)},{default:(0,l.w5)((()=>[u])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),(0,l._)("div",d,"共有"+(0,a.zw)(p.show_num)+"个公告",1),(0,l.Wm)(x,{title:"公告编辑",modelValue:p.AnnouncementEditVisible,"onUpdate:modelValue":t[7]||(t[7]=e=>p.AnnouncementEditVisible=e)},{footer:(0,l.w5)((()=>[(0,l._)("span",s,[(0,l.Wm)(b,{onClick:t[5]||(t[5]=e=>p.AnnouncementEditVisible=!1)},{default:(0,l.w5)((()=>[m])),_:1}),(0,l.Wm)(b,{id:"push_file",type:"primary",onClick:t[6]||(t[6]=e=>c.edit_announcement())},{default:(0,l.w5)((()=>[h])),_:1})])])),default:(0,l.w5)((()=>[(0,l.Wm)(g,{model:e.form,"label-width":"120px",style:{"max-width":"650px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{label:"公告标题"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{id:"input_name",modelValue:p.show_name,"onUpdate:modelValue":t[1]||(t[1]=e=>p.show_name=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(k,{label:"公告Id"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{id:"input_id",modelValue:p.show_id,"onUpdate:modelValue":t[2]||(t[2]=e=>p.show_id=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(k,{label:"公告描述"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{modelValue:p.show_content,"onUpdate:modelValue":t[3]||(t[3]=e=>p.show_content=e),autosize:"",type:"textarea",placeholder:"请输入活动描述"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(k,{label:"编辑时间"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{id:"input_time",modelValue:p.show_time,"onUpdate:modelValue":t[4]||(t[4]=e=>p.show_time=e),disabled:""},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])),_:1})])),_:1})}var p=n(4870),c={name:"TxtTag",components:{},data(){return{show_num:0,all_num:0,ed_num:0,to_num:0,t_type:(0,p.iH)("all"),context:(0,p.qj)(),tableData:(0,p.iH)([]),show_name:(0,p.iH)(""),show_content:(0,p.iH)(""),show_id:(0,p.iH)(),show_time:(0,p.iH)(""),AnnouncementEditVisible:!1}},created(){this.getAnnouncement()},methods:{show_edit(e){let t=e["row"]["id"],n={id:t},l=this;return fetch("/api/announcement/get",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json())).then((e=>{l.show_name=e.title,l.show_content=e.content,l.show_id=e.show_id,l.show_time=e.datetime,l.AnnouncementEditVisible=!0}))},edit_announcement(){let e={id:this.show_id,title:this.show_name,content:this.show_content,datetime:this.show_time},t=this;return fetch("/api/announcement/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((()=>{t.AnnouncementEditVisible=!1,t.$router.push("/index/announcement/blank")}))},delete_announcement(e){let t=e["row"]["id"],n={id:t},l=this;return fetch("/api/announcement/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json())).then((()=>{l.$router.push("/index/announcement/blank")}))},getAnnouncement(){let e=this;return e.all_num=0,e.ed_num=0,e.to_num=0,fetch("/api/getannouncement/getall").then((t=>t.json().then((t=>{e.context=t.MessageInfo;for(let n in e.context){let t=n["title"],l=n["id"],a=n["content"],i=n["is_publish"],o=n["datetime"],u={name:t,id:l,content:a,is_publish:i,datetime:o};e.tableData.push(u),1==i?e.ed_num+=1:e.to_num+=1,e.all_num+=1}e.show_num=e.all_num}))))},handleradiochange(){let e=this.t_type;this.tableData=[];let t=this;if("ed"==e){this.show_num=this.ed_num;for(let e in this.context)if(1==e["is_publish"]){let n=e["title"],l=e["id"],a=e["content"],i=e["is_publish"],o=e["datetime"],u={name:n,id:l,content:a,is_publish:i,datetime:o};t.tableData.push(u)}}else if("to"==e){this.show_num=this.to_num;for(let e in this.context)if(1!=e["is_publish"]){let n=e["title"],l=e["id"],a=e["content"],i=e["is_publish"],o=e["datetime"],u={name:n,id:l,content:a,is_publish:i,datetime:o};t.tableData.push(u)}}else{this.show_num=this.all_num;for(let e in this.context){let n=e["title"],l=e["id"],a=e["content"],i=e["is_publish"],o=e["datetime"],u={name:n,id:l,content:a,is_publish:i,datetime:o};t.tableData.push(u)}}}}},w=n(89);const r=(0,w.Z)(c,[["render",_],["__scopeId","data-v-e5f8cbaa"]]);var f=r}}]);
//# sourceMappingURL=596.5252a138.js.map