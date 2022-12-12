<!-- 创建数据集页面 -->
<template>
    <el-container>
        <!-- 主体部分 -->
        <el-main>

            <!-- 创建数据集的表单 -->
            <el-form :model="form" label-width="120px" style="max-width: 650px">
                <el-form-item label="活动名称">
                    <el-input id="input_name" v-model="form.name" placeholder="限制50个字符以内(支持汉字、英文大小写、数字及下划线，下划线不能作为开头)"/>
                </el-form-item>
                <el-form-item label="活动时间">
                    <div class="demo-date-picker">
                        <div class="block">
                        <el-date-picker
                            v-model="form.actdate"
                            type="daterange"
                            unlink-panels
                            range-separator="To"
                            start-placeholder="Start date"
                            end-placeholder="End date"
                            :shortcuts="shortcuts"
                            :size="size"
                            format="YYYY/MM/DD"
                            value-format="YYYY/MM/DD"
                        />
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="活动类型">
                    <el-radio-group id="data_type" v-model="form.radio" color="blue">
                        <el-radio-button name="data_type" value="charity" label="charity">公益活动</el-radio-button>
                        <el-radio-button name="data_type" value="learn" label="learn">研学活动</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动人数">
                    <div>
                        <el-checkbox v-model="form.single_sign" label="单人报名" />
                        <el-checkbox v-model="form.group_sign" label="团体报名" />
                    </div>
                </el-form-item>
                <el-form-item label="上传图片">
                    <el-button id="uploader_pic" type="primary" @click="call_diagram_pic"><el-icon><Upload /></el-icon>上传图片</el-button>
                </el-form-item>
                <el-form-item label="活动详情">
                    <el-input
                        v-model="form.content"
                        autosize
                        type="textarea"
                        placeholder="请输入活动描述"
                    />
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
                <el-button type="primary" @click="createactivity">发布活动</el-button>
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
            actdate: ref(''),
            radio: ref(''),
            content: ref(''),
            single_sign: ref(''),
            group_sign: ref(''),
        });
        return{
            form
        }
    },
    methods: {
        //表单校验
        isfull(){
            let form = this.form;
            let full_label = (form.name != "") && (form.actdate != "") && (form.radio != "") && (form.content != "") && !(form.single_sign=="" && form.group_sign=="");
            if (!full_label){
                alert("请将表单内容填写完整！");
            }
            return full_label;
        },

        //创建活动
        createactivity() {
            if (this.isfull()){
                let form = this.form;
                let part_num = 0;
                if (form.single_sign){
                    part_num = 1;
                }
                else if (form.group_sign){
                    part_num = 2;
                }
                if (form.group_sign && form.single_sign){
                    part_num = 3;
                }
                const data = {
                    "title": form.name,
                    "content": form.content,
                    "begin_date": form.actdate[0],
                    "end_date": form.actdate[1],
                    "num": part_num,
                    "specy": form.radio,
                };
                console.log(data);
                return fetch("/api/activity/create",{
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(()=>{
                    this.$router.push("/index/activities/view");                   
                })
            }
        },
        cancel(){
            this.$router.push("/index/manage/dataset")
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
