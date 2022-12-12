<!-- 数据集展示页面 -->
<template>
    <el-container>
        <!-- 主体部分 -->
        <el-main>
            <el-row>
                <el-col :span="2">
                    <el-button type="primary" @click="tocreate">新增活动</el-button>
                </el-col>
                <el-col :span="3" :offset="14">
                    <el-select v-model="value" class="m-2" placeholder="全部活动" @change="Search">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-col>
                <el-col :span="5">
                    <el-input
                        v-model="input"
                        class="w-50 m-2"
                        placeholder="输入活动名称"
                        prefix-icon="Search"
                        @change="Search"
                    >
                    </el-input>
                </el-col>
            </el-row>
            <el-empty :image-size="250" description="空空如也" v-if="value=='open' || data_num==0">
            </el-empty>
            <div v-if="value!='open'">
            <div v-for = "(item) in MessageShow" :key="item.name">
            <el-divider class="between" border-style="none"></el-divider>
                <div class="table-header">
                    <div class="title">
                        <span class="inline-editor">
                            <span title="name" class="inline-editor-txt">{{item["name"]}}</span>
                        </span>
                        <span class="id-txt">活动ID:{{item["id"]}}</span>
                    </div>
                    <div class="op">
                        <el-button class="op-item" link @click="call_activity_detail(item.id)">
                            <el-icon><DocumentAdd /></el-icon>
                            <span>活动详情</span>
                        </el-button>
                        <span class="op-item" link @click="call_acitivity_edit(item.id)">
                            <el-icon><Edit /></el-icon>
                            <span>活动编辑</span>
                        </span>
                        <el-button class="op-item" link @click="call_activity_delete(item.id)">
                            <el-icon><Delete /></el-icon>
                            <span>活动删除</span>
                        </el-button>
                    </div>
                </div>

                <!-- 数据集展示部分 -->
                <el-descriptions
                    direction="vertical"
                    :column="8"
                    size="large"
                    border
                >
                    <el-descriptions-item label="活动ID">{{item["id"]}}</el-descriptions-item>
                    <el-descriptions-item label="开始日期">{{item["begin_date"]}}</el-descriptions-item>
                    <el-descriptions-item label="结束日期">{{item["end_date"]}}</el-descriptions-item>
                    <el-descriptions-item label="活动类型">{{item["specy"]}}</el-descriptions-item>
                    <el-descriptions-item label="操作">
                        <el-button type="primary" link key="label" @click="call_activity_detail(item.id)">活动详情</el-button>
                        <el-button type="primary" link key="label" @click="call_activity_edit(item.id)">活动编辑</el-button>
                        <el-button type="primary" link key="delete" @click="call_activity_delete(item.id)">活动删除</el-button>
                    </el-descriptions-item>
                </el-descriptions>
            <el-divider class="between" border-style="none"></el-divider>
            </div>
            </div>
            <el-divider class="lower" border-style="none"></el-divider>

            <!-- 分页部分 -->
            <el-pagination
                v-model:currentPage="queryInfo.pagenum"
                v-model:page-size="queryInfo.pagesize"
                :page-sizes="[1, 2, 3,4, 5]"
                :background="background"
                layout="total, sizes, prev, pager, next, jumper"
                :total="data_num"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                v-if="value!='open' && data_num!=0"
                id="pagination"
            />
            <!-- 活动内容展示 -->
            <el-dialog
                    title="活动详情"
                    v-model="ActivityDetailVisible"
                >
                <el-form :model="form" label-width="120px" style="max-width: 650px" disabled>
                    <el-form-item label="活动名称">
                        <el-input id="input_name" v-model="showActivity_Name" />
                    </el-form-item>
                    <el-form-item label="活动Id">
                        <el-input id="input_id" v-model="showActivity_Id" />
                    </el-form-item>
                    <el-form-item label="活动时间">
                        <div class="demo-date-picker">
                            <div class="block">
                            <el-date-picker
                                v-model="showActivity_Date"
                                type="daterange"
                                unlink-panels
                                range-separator="To"
                                :shortcuts="shortcuts"
                                :size="size"
                            />
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="活动类型">
                        <el-radio-group id="data_type" v-model="showActivity_Specy" color="blue">
                            <el-radio-button name="data_type" value="charity" label="charity">公益活动</el-radio-button>
                            <el-radio-button name="data_type" value="learn" label="learn">研学活动</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动人数">
                        <div>
                            <el-checkbox v-model="showActivity_Single_Sign" label="单人报名" />
                            <el-checkbox v-model="showActivity_Group_Sign" label="团体报名" />
                        </div>
                    </el-form-item>
                    <el-form-item label="活动图片">
                        <el-button id="uploader_pic" type="primary" @click="call_diagram_pic"><el-icon><Upload /></el-icon>上传图片</el-button>
                    </el-form-item>
                    <el-form-item label="活动详情">
                        <el-input
                            v-model="showActivity_Description"
                            autosize
                            type="textarea"
                            placeholder="请输入活动描述"
                        />
                    </el-form-item>
                </el-form>
                </el-dialog>
            <!-- 活动编辑 -->
            <el-dialog
                    title="活动编辑"
                    v-model="ActivityEditVisible"
                >
                <el-form :model="form" label-width="120px" style="max-width: 650px">
                    <el-form-item label="活动名称">
                        <el-input id="input_name" v-model="showActivity_Name" />
                    </el-form-item>
                    <el-form-item label="活动Id">
                        <el-input id="input_id" v-model="showActivity_Id" disabled />
                    </el-form-item>
                    <el-form-item label="活动时间">
                        <div class="demo-date-picker">
                            <div class="block">
                            <el-date-picker
                                v-model="showActivity_Date"
                                type="daterange"
                                unlink-panels
                                range-separator="To"
                                :shortcuts="shortcuts"
                                :size="size"
                            />
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="活动类型">
                        <el-radio-group id="data_type" v-model="showActivity_Specy" color="blue">
                            <el-radio-button name="data_type" value="charity" label="charity">公益活动</el-radio-button>
                            <el-radio-button name="data_type" value="learn" label="learn">研学活动</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动人数">
                        <div>
                            <el-checkbox v-model="showActivity_Single_Sign" label="单人报名" />
                            <el-checkbox v-model="showActivity_Group_Sign" label="团体报名" />
                        </div>
                    </el-form-item>
                    <el-form-item label="活动图片">
                        <el-button id="uploader_pic" type="primary" @click="call_diagram_pic"><el-icon><Upload /></el-icon>上传图片</el-button>
                    </el-form-item>
                    <el-form-item label="活动详情">
                        <el-input
                            v-model="showActivity_Description"
                            autosize
                            type="textarea"
                            placeholder="请输入活动描述"
                        />
                    </el-form-item>
                    
                </el-form>
                <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="ActivityEditVisible=false">取消</el-button>
                            <el-button id="push_file" type="primary" @click="activity_edit(this.showActivity_Id)">确定</el-button>
                        </span>
                    </template>
                </el-dialog>
        </el-main>
    </el-container>
</template>

<script>
import { reactive, ref } from "vue"
    export default{
        name: "ManageDateSet",
        components:{
        },
        data(){
            return{
                showActivity_Name:"alala~",
                showActivity_Date:["2022/11/23","2022/12/01"],
                showActivity_Specy:"charity",
                showActivity_Id:"100001",
                showActivity_Description:"我是谁？",
                showActivity_Single_Sign:true,
                showActivity_Group_Sign:false,

                ActivityDetailVisible : false,
                ActivityEditVisible : false,
                background : ref(true),
                queryInfo: {
                    query: '',
                    pagenum: 1,
                    pagesize: 2,
                },
                data_num: -1,
                authority: -1, // 0:超级管理员 1:社区管理员 2:核验管理员 3:研学管理员 4:活动管理员
                value: ref(''),
                input: ref(''),
                new_name: ref(''),
                MessageInfo: reactive({
                    "charity1":{
                        "name":"人界地理",
                        "begin_date":"2022/11/23",
                        "end_date":"2022/12/01",
                        "specy":"charity",
                        "id":"100001",
                    },
                    "learn1":{
                        "name":"人格什么么",
                        "begin_date":"2022/11/14",
                        "end_date":"2022/12/31",
                        "specy":"learn",
                        "id":"100002",
                    },
                }),
                MessageShow: reactive({}),
                MessageArray: reactive([]),
                options : [
                    {
                        value: "allact",
                        label: "全部活动",
                    },
                    {
                        value: 'charity',
                        label: '公益活动',
                    },
                    {
                        value: 'learn',
                        label: '研学活动',
                    },
                ],
            }
        },
        methods:{
            call_activity_detail(item_id){
                let that = this;
                let data = {"id":parseInt(item_id)}
                return fetch("/api/activity/get",{
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json)
                .then((j)=>{
                    that.showActivity_Name = j.title;
                    that.showActivity_Description = j.content;
                    let num = j.num;
                    that.showActivity_Group_Sign = false;
                    that.showActivity_Single_Sign = false;
                    if (num == 1){
                        that.showActivity_Single_Sign = true;
                    }
                    else if (num == 2){
                        that.showActivity_Group_Sign = true;
                    }
                    else if (num == 3){
                        that.showActivity_Single_Sign = true;
                        that.showActivity_Group_Sign = true;
                    }
                    else{
                        console.log("error!");
                    }
                    that.showActivity_Date = [j.begin_date,j.end_date];
                    that.showActivity_Id = j.id;
                    that.showActivity_Specy = j.specy;
                    that.ActivityDetailVisible = true;
                })
                
            },

            tocreate(){
                this.$router.push({name:"新建活动"})
            },
            
            //搜索数据集
            Search(){
                this.data_num = 0;
                const data = {"name":this.input};
                let val = this.value;
                if (val == "charity"){
                    val = "公益活动";
                }
                else if(val == "learn"){
                    val = "研学活动";
                }
                let that = this;
                that.MessageArray = reactive([]);
                for (let item in that.MessageInfo){
                    if (!that.MessageInfo[item]["name"].search(data["name"]) && ((val == "allact") || (val == that.MessageInfo[item]["specy"]))){
                        that.MessageArray.push(item);
                        this.data_num += 1;
                    }
                }
                    this.handleCurrentChange(1);
            },

            //获取数据
            get_data(){
                this.data_num = 2;
                let that = this;
                fetch("/api/activity/getall").then((res) => res.json().then((j)=>{
                    that.MessageInfo = j.MessageInfo;
                    that.MessageArray = reactive([]);
                    for (let item in that.MessageInfo){
                        that.MessageArray.push(item);
                        if (that.MessageInfo[item]["specy"] == "learn"){
                            that.MessageInfo[item]["specy"] = "研学活动";
                        }
                        else if (that.MessageInfo[item]["specy"] == "charity"){
                            that.MessageInfo[item]["specy"] = "公益活动";
                        }    
                    }
                    this.handleCurrentChange(1);
                }))
            },
            handleSizeChange(newSize){
                this.queryInfo.pagesize = newSize;
                this.handleCurrentChange(1);
            },
            handleCurrentChange(newPage){
                this.queryInfo.pagenum = newPage;
                let start = (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize;
                let end = start + this.queryInfo.pagesize;
                if (this.MessageArray.length < end){
                    end = this.MessageArray.length;
                }
                this.MessageShow = reactive({});
                for (let i = start; i < end; i++){
                    this.MessageShow[this.MessageArray[i]]=this.MessageInfo[this.MessageArray[i]];
                }
            },

            // 用于设置页面表单的默认选项
            setvalue(){
                this.value = this.options[0].value;
            },

            //删除数据
            call_activity_delete(id){
                let that = this;
                const d_act = {"id": parseInt(id)};
                return fetch("/api/activity/delete",{
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(d_act)
                })
                .then(res => res.json())
                .then(() => {
                    if(that.data_num>0){
                        that.data_num = that.data_num - 1;
                    }
                    this.$router.push("/index/activities/blank")
                })
            },
            call_activity_edit(){
                this.ActivityEditVisible = true;
            },
            activity_edit(id){
                let part_num = 0;
                if (this.showActivity_Single_Sign){
                    part_num = 1;
                }
                else if (this.showActivity_Group_Sign){
                    part_num = 2;
                }
                if (this.showActivity_Group_Sign && this.showActivity_Single_Sign){
                    part_num = 3;
                }
                let data = {
                    "id":id,
                    "title":this.showActivity_Name,
                    "content":this.showActivity_Description,
                    "begin_date":this.showActivity_Date[0],
                    "end_date":this.showActivity_Date[1],
                    "num":part_num,
                    "specy":this.showActivity_Specy,
                };
                this.ActivityEditVisible = false;
                return fetch("/api/activity/update",{
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(() => {
                    this.$router.push("/index/activities/blank");
                })
            },
            //获取管理员账户的权限信息
            get_authority(){
                this.authority = 0;
            }
        },
        created() {
            this.setvalue();
            this.get_authority();
            this.get_data();
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
    .between{
        margin: 10px;
    }
    .lower{
        margin: 30px;
    }
    .table-header{
        display: flex;
        padding: 15px;
        border: 1px solid #eee;
        border-bottom: none;
        background-color: #f7f7f7;
        justify-content: space-between;
    }
    .table-header .title .inline-editor .el-icon{
        margin-left:10px;
        padding-bottom: -10px;
    }
    .table-header .title{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-bottom: -10px;
        font-size: 14px;
    }
    .table-header .title .inline-editor{
        margin-right: 20px;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
    }
    .table-header .title .inline-editor-initial-txt{
        max-width: 360px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .table-header .op{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .table-header .op .op-item{
        font-size: 14px;
        cursor: pointer;
        margin-right: 22px;
        color: #000;
        text-decoration: none;
    }
    .table-header .op .op-item span{
        font-size: 12px;
        margin-left: 3px;
    }
    .id-txt{
        position: relative;
        margin-left: 100px;
    }

</style>
