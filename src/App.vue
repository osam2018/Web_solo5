<template>
    <div v-if="isLogin">
      <el-container id="app">
          <el-header class="header">
              <div id="nav">
                  <el-menu :default-active="activePage" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                      <el-menu-item index="home"><img src="./assets/logo.gif" alt="국방라이브 로고" style="width:60px; height:46px;" />국방라이브</el-menu-item>
                      <el-menu-item index="mndquiz">국방 퀴즈쇼</el-menu-item>
                      <el-menu-item index="about">국방 정신교육 대회</el-menu-item>
                      <el-menu-item index="about">국방 설문조사</el-menu-item>
                      <el-menu-item index="about">셀프교육</el-menu-item>
                      <el-menu-item index="about">셀프퀴즈쇼</el-menu-item>
                      <el-menu-item index="about">개인정보관리</el-menu-item>
                      <el-menu-item @click="btnLogout()">로그아웃</el-menu-item>
                      <!--<el-menu-item index="sidepage">sidepage</el-menu-item>-->
                  </el-menu>
              </div>
          </el-header>
          <router-view/>

      </el-container>
    </div>
    <div v-else style="text-align:center">
        <h1><img src="./assets/logo.gif" style="vertical-align:middle;" alt="국방라이브 로고" />국방라이브</h1>
        <h2>국방라이브에 오신것을 진심으로 환영합니다.</h2>
        <el-input placeholder="군번을 입력하세요." v-model="userId" @keyup.enter.native="btnLogin()"></el-input>
        <el-input placeholder="비밀번호를 입력하세요." v-model="userPw" type="password" @keyup.enter.native="btnLogin()"></el-input>
        <el-switch
                v-model="isTempLogin"
                active-text="임시 계정 사용"
                @change="btnTempLogin">
        </el-switch>
        <el-button type="primary" @click="btnLogin()" class="el-col-24">로그인</el-button>
    </div>
</template>
<script lang="ts">


    import { Component, Vue } from 'vue-property-decorator';
    @Component({

    })
    export default class Home extends Vue {
        public activePage:string ="home";

        private isTempLogin:boolean = false;

        private userId:string = "";
        private userPw:string = "";

        private isLogin:boolean = false;
        btnLogin(){
            if(this.userId == "16-15986" && this.userPw == "1q2w3e4r!"){
                this.isLogin = true;
                this.userId = "";
                this.userPw = "";
            } else {
                alert("군번 또는 비밀번호가 일치하지 않습니다.");
            }
        }

        handleSelect(key:string, keyPath:string) {
            this.$router.replace("/"+key);
        }

        btnTempLogin(){
            if(this.isTempLogin){
                this.userId = "16-15986";
                this.userPw = "1q2w3e4r!";
            } else {
                this.userId = "";
                this.userPw = "";
            }

        }

        btnLogout(){
            this.isLogin = false;
            this.isTempLogin = false;
        }
    }
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-input,.el-switch{
    margin-bottom: 20px;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
}

.el-main {
    color: #333;
    text-align: center;
}

body > .el-container {
    margin-bottom: 40px;
}

</style>

