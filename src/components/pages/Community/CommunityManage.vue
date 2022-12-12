<!-- 本部分为平台社区管理的前端 -->
<!-- 文本标签 -->
<template>
    <el-container>
        <!-- 头部元素 -->
        <el-header>
            <Breadcrumb></Breadcrumb>
        </el-header>
        <el-divider />

        <!-- 主体部分 -->
        <el-main>
            <el-col :span="9" :offser="1">
            <el-radio-group v-model="t_type" @change="handleradiochange" size="large" class="mytest3">
                <el-radio-button label="all">全部评论({{all_num}})</el-radio-button>
                <el-radio-button label="ed" >未封禁评论({{to_num}})</el-radio-button>
                <el-radio-button label="to" >已封禁评论({{ed_num}})</el-radio-button>
            </el-radio-group>
            </el-col>
            <el-col :span="14"></el-col>
            <el-table :data="tableData" border style="width: 95%" class="table">
                <el-divider class="divider_solid"/>
                <el-table-column type="expand">
                <template #default="props">
                    <div m="4" class="_detail">
                    <p m="t-0 b-2">评论者姓名: {{ props.row.name }}</p>
                    <p m="t-0 b-2">评论日期: {{ props.row.date }}</p>
                    <p m="t-0 b-2">评论时间: {{ props.row.time }}</p>
                    <p m="t-0 b-2">评论内容: {{ props.row.content }}</p>
                    <el-tag
                        v-if="props.row.is_comment_forbidden==true"
                        type="success"
                        effect="dark"
                        round
                        >
                        评论被封禁
                    </el-tag>
                    <el-tag
                        v-if="props.row.is_author_forbidden==true"
                        type="success"
                        effect="dark"
                        round
                        >
                        用户被禁言
                    </el-tag>
                    <h3>用户历史消息</h3>
                    <el-table :data="props.row.history" border class="table">
                        <el-table-column label="评论日期" prop="date" />
                        <el-table-column label="评论时间" prop="time" />
                        <el-table-column label="评论Id" prop="id" />
                        <el-table-column label="评论内容" prop="content" />
                        <el-table-column label="操作">
                            <template #default="scope">
                                <el-button type="danger" @click="block_btn(scope)">封禁</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    </div>
                </template>
                </el-table-column>
                <el-table-column label="评论日期" prop="date" />
                <el-table-column label="评论者姓名" prop="name" />
                <el-table-column label="评论者Id" prop="author_id" />
                <el-table-column label="评论内容" prop="content" />
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="danger" @click="forbid_btn(scope)">禁言</el-button>
                    </template>
                </el-table-column>
                
            </el-table>
        
            <div class="txt_num">共有{{show_num}}条评论</div>
        </el-main>
</el-container>

</template>

<script>
import { reactive, ref } from 'vue';
import Breadcrumb from "../../BreadCrumb.vue";
export default{
    name: 'TxtTag',
    components:{
        Breadcrumb,
    },
data(){
    return {
        all_num: 2,
        ed_num: 2,
        to_num: 0,
        show_num: 2,
        t_type: ref('all'),
        CommentInfo: {},
        AuthorInfo: {},
        context: reactive({
            "commemt1":{
                date: '2016-05-03',
                name: 'berber',
                id: "00001",
                author_id: "1",
                time: '00:12:46',
                content: '我爱berber老师',
                history: [
                {
                    date: "2016-05-03",
                    time: "00:12:46",
                    content: "我爱berber老师",
                    id: "00001",
                },
                {
                    date: "2016-05-02",
                    time: "14:12:46",
                    content: "我bu爱berber老师",
                    id: "00002",
                },
                ],
            },
            "commemt2":{
                date: '2016-05-04',
                name: '昂仔',
                time: '00:12:16',
                author_id: "2",
                id: "20001",
                content: '我*********',
                history: [
                {
                    date: "2016-05-04",
                    time: "00:12:16",
                    content: "我*********",
                    id: "20001",
                },
                {
                    date: "2016-05-02",
                    time: "14:26:57",
                    content: "我太强了！",
                    id: "20002",
                },
                ],
            }
            
        }),
        tableData: [],
        name:"",

    }
},
created(){
    this.getComments();
},
methods:{
    handleradiochange(){
        console.log(this.t_type);
        let t_type = this.t_type;
        this.tableData = []
        if (t_type == "all"){
            this.show_num = this.all_num;
            for (let item in this.context){
                this.tableData.push(item);
            }
        }
        else if (t_type == "ed"){
            this.show_num = this.ed_num;
            for (let item in this.context){
                if(item["is_author_forbidden"] || item["is_comment_item"]){
                    this.tableData.push(item);
                }
            }
        }
        else{
            this.show_num = this.to_num;
            for (let item in this.context){
                if(!(item["is_author_forbidden"] || item["is_comment_item"])){
                    this.tableData.push(item);
                }
            }
        }
    },
    // 评论封
    block_btn(scope){
        let id = scope.row["id"];
        let data = {"id": id};
        return fetch("/api/comment/forbidden",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(() => {
            this.$router.push("/index/community/blank");
        })
    },

    // 用户封
    forbid_btn(scope){
        let id = scope.row["author_id"];
        let data = {"id": id};
        return fetch("/api/comment/forbidden/author",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(() => {
            this.$router.push("/index/community/blank");
        })
    },

    getComments(){
        this.ed_num = 0;
        this.to_num = 0;
        this.all_num = 0;
        let that = this;
        return fetch("/api/comment/getall")
        .then((res) => res.json()
        .then((j)=>{
            that.CommentInfo = j.CommentInfo;
            that.AuthorInfo = j.AuthorInfo;
            for (let item in that.CommentInfo){
                let author_id = item["author"];
                let author_name = "";
                let author_forbidden = false;
                let comment_forbidden = false;
                let history = []
                let comments = []
                if (item["is_forbidden"]){
                    comment_forbidden = true;
                }
                for (let i in that.AuthorInfo){
                    if (i["id"] == author_id){
                        author_name = i["name"];
                        if (i["is_forbidden"]){
                            author_forbidden = true;
                        }
                        comments = i["comments"];
                    }
                }
                for (let i in that.CommentInfo){
                    if (i["id"] in comments){
                        let tmp_data = {
                            "date": i["date"],
                            "time": i["time"],
                            "content": i["content"],
                            "id": i["id"]
                        }
                        history.push(tmp_data);
                    }
                }
                let data = {
                    "date": item["date"],
                    "name": author_name,
                    "time": item["time"],
                    "author_id": item["author"],
                    "id": item["id"],
                    "content": item["content"],
                    "is_author_forbidden": author_forbidden,
                    "is_comment_forbidden": comment_forbidden,
                    "history": history
                }
                this.context.push(data);
                this.all_num += 1;
                if (author_forbidden || comment_forbidden){
                    this.ed_num += 1;
                }
                else{
                    this.to_num += 1;
                }
            }

            that.t_type = "all";
            that.handleradiochange();
        }))

    },
}


}
</script>

<style scoped>

.el-header  {
    height: 75px;
}
.el-divider{
    margin: 0;
}


.txt_num{
    position: relative;
    font-size:15px;
    color: #8e8483;
    margin-top: 40px;
    margin-left: 0 px;
}

.table{
    position: relative;
    font-size: 16px;
    margin-top: 30px;
    margin-left: 25px;
    border: 2px solid;
}

._detail{
    position: relative;
    margin-left: 20px;
}

.divider_solid{
    margin:2px ;
    border-style: solid;
}

</style>
