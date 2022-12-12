<!-- index页面 -->
<template>
  <div class="weiyang_ml">
    <div id="header">
    <nav class="top_navbar">
      <ul>
        <li id="msi">
          <a>
            <img src="../assets/cili.png" height="46" id="imgmsi"/>
          </a>
        </li>
        <li><a @click="to_about">关于我们</a></li>
        <li><a href="">使用文档</a></li>
        <li id="shequ"><a @click="log_txt_handle">{{log_txt}}</a></li>
      </ul>
    </nav>
    </div>
    <div id="leftnav">
      <el-aside :width="isCollapse ? '64px' : '200px'">
      <div id="navtop" @click="toggleCollapse">
          <el-icon color="gray" ><DArrowRight /></el-icon>
          <span id="navlogo"  class="mb-2">实况优旅慈利站 （管理服务平台）</span>
      </div>
      <el-menu
        :default-active="$route.path"
        router 
        background-color="rgb(235, 231, 231)"
        text-color="#rgb(0,0,0)"
        class="el-menu-vertical-demo"
        mode="vertical"
        :collapse="isCollapse"
        :collapse-transition="false"
      >

        <el-divider />
        <el-sub-menu index="1">
          <template #title>
            <el-icon color="#409EFC"><Menu /></el-icon>
            <span class="submenu">管理员权限</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/index/community" :disabled="community_able">
              <el-icon><HomeFilled /></el-icon>
              <span>社区管理</span>
            </el-menu-item>
            <el-menu-item index="/index/activities" :disabled="activities_able">
              <el-icon><Camera /></el-icon>
              <span>活动总览</span>
            </el-menu-item>
            <el-menu-item index="/index/check" :disabled="check_able">
              <el-icon><Ticket /></el-icon>
              <span>优惠核验</span>
            </el-menu-item>
            <el-menu-item index="/index/announcement" :disabled="annoucement_able">
              <el-icon><Document /></el-icon>
              <span>公告管理</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        
      </el-menu>
      </el-aside>
    </div>
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      // =============== wait for backend ================
      authority: 0, // 0:超级管理员 1:社区管理员 2:核验管理员 3:研学管理员 4:公告管理员
      // =================================================
      log_txt: "登录",
      isCollapse: false,
      community_able: true,
      activities_able: true,
      check_able: true,
      annoucement_able: true,
    }
  },
  created(){
      this.get_authority();
      // TODO: get backend cookie
      if(this.authority == -1){
        this.init_able(true,1);
        this.$router.push("/");
      }
      else if (this.authority == 0){
        this.init_able(false,0);
      }
      else if (this.authority == 1){
        this.init_able(true,0);
        this.community_able = false;
      }
      else if (this.authority == 2){
        this.init_able(true,0);
        this.activities_able = false;
      }
      else if (this.authority == 3){
        this.init_able(true,0);
        this.annoucement_able = false;
      }
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
      document.getElementById("navlogo").style.display= this.isCollapse? "none" : "inline";
    },
    init_able(_able,_in){
      this.community_able = _able;
      this.activities_able = _able;
      this.check_able = _able;
      this.annoucement_able = _able;
      if(_in == 1){
        this.log_txt = "登录";
      }
      else{
        this.log_txt = "登出";
      }
    },
    get_authority(){
      let that = this;
      return fetch("/api/authority").then((res)=>res.json().then((j) => {
        that.authority = j.authority;
      }))
    },
    log_txt_handle(){
      let chr = this.log_txt;
      if (chr == "登录"){
        console.log("登录");
        this.$router.push("/");
      }
      else if (chr == "登出"){
        let that = this;
        console.log("登出");
        return fetch("/logout").then((res)=>res.json().then(()=>{
          that.$router.push("/");
        }))
      }
    },
    to_about(){
      this.$router.push("/index/about");
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #navtop{
    height: 70px;
  }
  .el-divider--horizontal{
    margin: 0;
    background: 0 0;
    border-top: 1px solid rgb(222, 219, 219);
  }
  #leftnav{
    background-color: rgb(235, 231, 231);
    height: 100vh;
    margin-left: -8px;
    margin-bottom: -10px;
  }
  .submenu{
    font-weight: bold;
    color: rgb(91, 92, 92);
  }
  #navtop{
    margin-top: 20px;
    margin-bottom: -15px;
  }
  .mb-2{
    text-align: left;
    margin-left: 10px;
    height: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: '华文行楷','Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
/* css style for head navigator */
  #header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1200;
    background: black;
    display: flex;
    align-items: center;
    float: left;
    justify-content: space-between;
  }
  .top_navbar ul{
    display: flex;
  }
  .top_navbar ul li{
    float: left;
    font-weight: normal;
    width: 128px;
    list-style: none;
    text-align: center;
  }
  .top_navbar ul li a{
    width: 128px;
    line-height: 27px;
    font-size: auto;
    color: white;
    font-family: STHeiti, SimHei, sans-serif;
    font-size: 18px;
  }
  .top_navbar ul li a:hover{
    color: rgb(115, 149, 241);
  }
  .top_navbar ul li ul{
    background: black;
    position: absolute;
    display: none;
    text-align: center;
  }
  .top_navbar ul li ul li{
    margin-top: 20px;
    height: 40px;
    margin-left: -42px;
    float: none;
    text-align: center;
  }
  .top_navbar ul li:hover ul{
    display: block;
    width: 80px;
  }
  a{
    text-decoration: none;
  }
  #shequ{
    position: absolute;
    left: 1400px;
  }
  #msi{
    margin-top: -8px;
    margin-bottom: -80px;
    margin-left: -10px;
    margin-right: 20px;
    border-radius: 20px;
  }
  #imgmsi{
    border-radius: 23px;
  }
</style>
