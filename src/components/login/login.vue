<template>
  <dev class="login-wrap">
    <el-form class="login-from" :model="fromdata" label-position="top" label-width="80px">
      <el-form-item>
        <h3 class="title">系统登录</h3>
        <el-input v-model="fromdata.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="fromdata.password" placeholder="密码"></el-input>
      </el-form-item>
      <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
      <el-form-item>
        <el-button @click.prevent="handleLongin()" class="login-btn" type="primary">登录</el-button>
        <!-- <el-button @click.native.prevent="handleReset2">重置</el-button>-->
      </el-form-item>
    </el-form>
  </dev>
</template>

<script>
import apiLogin from "@/api/login";

export default {
  data() {
    return {
      fromdata: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    //登录请求
    handleLongin() {
      apiLogin
        .login(this.fromdata.username, this.fromdata.password)
        .then(res => {
          alert(res);
          console.log("res-->" + res);
        });
    }
  }
};
</script>

<style>
.login-wrap {
  height: 100%;
  /* background-color: #3178b3; */
  /* 弹性盒子布局 */
  display: flex;
  justify-content: center;
  align-content: center;
}
.login-wrap .login-from {
  width: 400px;
  background-color: aliceblue;
  border-radius: 5px;
  padding: 30px;
}
.login-wrap .login-btn {
  width: 100%;
}
</style>
