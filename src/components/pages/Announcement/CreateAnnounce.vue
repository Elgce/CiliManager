<!-- 创建数据集页面 -->
<template>
    <el-container>

        <!-- 主体部分 -->
        <el-main>

            <!-- 创建数据集的表单 -->
            <el-form :model="form" label-width="120px" style="max-width: 650px">
                <el-form-item label="公告标题">
                    <el-input id="input_name" v-model="form.name" placeholder="限制50个字符以内(支持汉字、英文大小写、数字及下划线，下划线不能作为开头)"/>
                </el-form-item>
        
                <el-form-item label="公告内容">
                    <el-input
                        v-model="form.discriptxt"
                        :autosize="{ minRows: 4}"
                        type="textarea"
                        placeholder="请输入公告内容"
                    />
                </el-form-item>
                <el-form-item label="上传图片">
                    <el-button id="uploader_pic" type="primary" @click="call_diagram_pic"><el-icon><Upload /></el-icon>上传图片</el-button>
                </el-form-item>
                <el-dialog
                    title="上传图片"
                    v-model="picUpVisible"
                >
                    <el-divider id="divider_dialog"/>
                    <el-alert 
                        id="explanation_p" 
                        title="请上传需要的图片" 
                        type="warning" 
                        :closable="false">
                    </el-alert>
                    <el-upload
                        class="upload-demo"
                        drag
                        action="/api/call"
                        multiple
                    >
                        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                        <div class="el-upload__text">
                        将图片拖拽到此处 或 <em>点击上传图片</em>
                        </div>
                        <template #tip>
                        <div class="el-upload__tip">
                            上传图片大小请小于200kb
                        </div>
                        </template>
                    </el-upload>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="picUpVisible=false">取消</el-button>
                            <el-button id="push_file" type="primary" @click="picUpVisible=false">确定</el-button>
                        </span>
                    </template>
                </el-dialog>

            </el-form>
            

            <el-row class="mb-4">
                <el-button type="success" @click="create_announce">发布公告</el-button>
                <el-button type="info" @click="draft_annouce">暂存草稿</el-button>
                <el-button type="warning" @click="cancel">取消</el-button>
            </el-row>


                <!-- 上传图片对话框 -->
        </el-main>
        
    </el-container>
</template>

<script>
import { reactive } from 'vue'
import { ref } from 'vue'

export default{
    components: {
    },
    data(){
        return{
            picUpVisible:false,
        }
    },
    setup(){
        let form = reactive({
            name: '',
            discriptxt: ref(''),
        });
        let is_publish = true;
        return{
            form,
            is_publish,
        }
    },
    methods: {
        //表单校验
        isfull(){
            let form = this.form;
            let full_label = (form.name != "") && (form.discriptxt != "");
            if (!full_label){
                alert("请将表单内容填写完整！");
            }
            return full_label;
        },
        // 获取发布公告的时间
        gettime(){
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            let time = String(year)+"-"+String(month)+"-"+String(day)+" "+String(hour)+":"+String(minute)+":"+String(second);
            print(time)
            return time
        },
        //创建数据集
        create_announce() {
            if (this.isfull()){
                let name = this.form["name"];
                let content = this.form["descriptxt"];
                let date = this.gettime();
                const data = {
                    "title": name,
                    "content": content,
                    "datetime": date,
                    "is_publish":this.is_publish,
                };
                console.log(data);
                return fetch("/api/adddata",{
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(()=>{
                    this.$router.push("/index/announcement/view");            
                })
            }
        },

        draft_annouce(){
            this.is_publish = false;
            this.create_announce();
        },

        cancel(){
            this.$router.push("/index/announcement/view")
        },
        call_diagram_pic(){
            this.picUpVisible = true;
        },
    }
}
</script>



<style scoped>
    .mb-4{
        margin-left: 120px;
    }
    .mb-4 .el-button{
        width: 110px;
    }
    #placeholderChange::-webkit-input-placeholder
    {
        color: red;
    }
    #placeholderChange::-moz-placeholder
    {
        color: red;
    }
    #placeholderChange::-ms-input-placeholder
    {
        color: red;
    }
    #placeholderChange::-ms-input-placeholder
    {
        color: red;
    }
    #pic_assortment
    {
        width:312px;
        height:160px;
        background-position-x:100px;
    }
    #object
    {
        width:312px;
        height:160px;
        background-position-x:100px;
    }

</style>
