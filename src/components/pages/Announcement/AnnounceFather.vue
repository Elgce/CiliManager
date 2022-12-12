<!-- 活动的父页面 -->
<template>
    <el-container>
        <!-- 头部元素 -->
        <el-header>
            <Breadcrumb></Breadcrumb>
        </el-header>
        <el-divider />

        <!-- 主体部分 -->
        <el-main>
            <router-view/>
        </el-main>
        
    </el-container>
</template>

<script>
import Breadcrumb from "../../BreadCrumb.vue"

export default{
    components: {
        Breadcrumb,
    },
    
}
</script>



<style scoped>
    .el-header  {
        height: 75px;
    }
    .el-divider{
        margin: 0;
    }

</style>
