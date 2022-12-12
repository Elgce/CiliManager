<!-- 本部分为平台社区管理的前端 -->
<!-- 文本标签 -->
<template>
    <el-container>


        <!-- 主体部分 -->
        <el-main>
            <el-col :span="9" :offset="1">
            <el-radio-group v-model="t_type" @change="handleradiochange" size="large" class="mytest3">
                <el-radio-button label="all">全部公告({{all_num}})</el-radio-button>
                <el-radio-button label="ed" >已发布公告({{ed_num}})</el-radio-button>
                <el-radio-button label="to" >待编辑公告({{to_num}})</el-radio-button>
            </el-radio-group>
            </el-col>
            <el-col :span="14"></el-col>
            <el-button class="txt_in" @click="insert_txt" type="primary">新建公告</el-button>
            <el-table
                    :data="tableData"
                    stripe="true"
                    style="width: 100%"
                    class="mytest8">
                <el-table-column
                                prop="id"
                                label="公告ID">
                </el-table-column>
                <el-table-column
                                prop="name"
                                label="公告标题">
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" @click="show_edit(scope)">编辑</el-button>
                        <el-button @click="delete_announcement(scope)">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>
        
            <div class="txt_num">共有{{show_num}}个公告</div>
            <!-- 公告编辑页面 -->
            <el-dialog
                    title="公告编辑"
                    v-model="AnnouncementEditVisible"
                >
                <el-form :model="form" label-width="120px" style="max-width: 650px">
                    <el-form-item label="公告标题">
                        <el-input id="input_name" v-model="show_name" />
                    </el-form-item>
                    <el-form-item label="公告Id">
                        <el-input id="input_id" v-model="show_id" disabled />
                    </el-form-item>
                    <el-form-item label="公告描述">
                        <el-input
                            v-model="show_content"
                            autosize
                            type="textarea"
                            placeholder="请输入活动描述"
                        />
                    </el-form-item>
                    <el-form-item label="编辑时间">
                        <el-input id="input_time" v-model="show_time" disabled/>
                    </el-form-item>
                    
                </el-form>
                <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="AnnouncementEditVisible=false">取消</el-button>
                            <el-button id="push_file" type="primary" @click="edit_announcement()">发布</el-button>
                        </span>
                    </template>
                </el-dialog>
        </el-main>
</el-container>

</template>

<script>
import { reactive, ref } from 'vue';

export default{
    name: 'TxtTag',
    components:{
    },
data(){
    return {
        show_num: 0,
        all_num: 0,
        ed_num: 0,
        to_num: 0,
        t_type: ref('all'),
        context: reactive(),
        tableData: ref([]),
        show_name: ref(''),
        show_content: ref(''),
        show_id: ref(),
        show_time: ref(''),
        AnnouncementEditVisible: false,
    }
},
created(){
    this.getAnnouncement();
},
methods:{
    show_edit(scope){
        let id = scope["row"]["id"];
        let data = {"id": id};
        let that = this;
        return fetch("/api/announcement/get",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((j) => {
            that.show_name = j.title;
            that.show_content = j.content;
            that.show_id = j.show_id;
            that.show_time = j.datetime;
            that.AnnouncementEditVisible = true;
        })
    },

    edit_announcement(){
        let data = {"id":this.show_id, "title":this.show_name, "content":this.show_content, "datetime": this.show_time};
        let that = this;
        return fetch("/api/announcement/update",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(()=>{
            that.AnnouncementEditVisible = false;
            that.$router.push("/index/announcement/blank");
        })
    },

    delete_announcement(scope){
        let id = scope["row"]["id"];
        let data = {"id": id};
        let that = this;
        return fetch("/api/announcement/delete",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(()=>{
            that.$router.push("/index/announcement/blank");
        })
    },

    getAnnouncement(){
        let that = this;
        that.all_num = 0;
        that.ed_num = 0;
        that.to_num = 0;
        
        return fetch("/api/getannouncement/getall")
        .then((res) => res.json()
        .then((j)=>{
            that.context = j.MessageInfo;
            for (let item in that.context){
                let name = item["title"];
                let id = item["id"];
                let content = item["content"];
                let is_publish = item["is_publish"]
                let datetime = item["datetime"]
                let data = {"name": name, "id": id, "content": content, "is_publish": is_publish, "datetime": datetime};
                that.tableData.push(data);
                if (is_publish == true){
                    that.ed_num += 1;
                }
                else{
                    that.to_num += 1;
                }
                that.all_num += 1;
            }
            that.show_num = that.all_num;
        }))
    },

    handleradiochange(){
        let lable = this.t_type;
        this.tableData = [];
        let that = this;
        if (lable == "ed"){
            this.show_num = this.ed_num;
            for (let item in this.context){
                if (item["is_publish"] == true){
                    let name = item["title"];
                    let id = item["id"];
                    let content = item["content"];
                    let is_publish = item["is_publish"]
                    let datetime = item["datetime"]
                    let data = {"name": name, "id": id, "content": content, "is_publish": is_publish, "datetime": datetime};
                    that.tableData.push(data);
                }
            }
        }
        else if (lable == "to"){
            this.show_num = this.to_num;
            for (let item in this.context){
                if (item["is_publish"] != true){
                    let name = item["title"];
                    let id = item["id"];
                    let content = item["content"];
                    let is_publish = item["is_publish"]
                    let datetime = item["datetime"]
                    let data = {"name": name, "id": id, "content": content, "is_publish": is_publish, "datetime": datetime};
                    that.tableData.push(data);
                }
            }
        }
        else{
            this.show_num = this.all_num;
            for (let item in this.context){
                let name = item["title"];
                let id = item["id"];
                let content = item["content"];
                let is_publish = item["is_publish"]
                let datetime = item["datetime"]
                let data = {"name": name, "id": id, "content": content, "is_publish": is_publish, "datetime": datetime};
                that.tableData.push(data);
            }
        }
    }
}


}
</script>

<style scoped>
#top_table{
    position: relative;
    display: flex;
    margin-top: 20px;
}
.txt_list{
    position: relative;
}
.mytest3{
    position: relative;
    margin-left: -140px;
}
.mytest8{
    position: relative;
    margin-top: 20px;
}
.txt_in{
    position: relative;
    margin-left: 980px;
}
.txt_num{
    position: relative;
    font-size:15px;
    color: #8e8483;
    margin-top: 40px;
    margin-left: 0 px;
}
.choose_btn{
    position: relative;
    margin-left: 40px;
}


</style>
