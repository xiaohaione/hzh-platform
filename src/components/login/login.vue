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
    //登录请求 异步请求代码 看起来更同步一样
    async handleLongin() {
      const res = await apiLogin.login(
        this.fromdata.username,
        this.fromdata.password
      );

      console.log(res);
      const { data, success, code, message } = res.data;
      // 登录成功
      // 1.跳转到home首页
      console.log("code:" + code);
      if (code === 200) {
        // 保存token
        localStorage.setItem("token", data.token);
        // 跳转到home 首页
        this.$router.push({ name: "home" });
        //提示登录成功
        console.log("token-->" + localStorage.getItem("token"));
        this.$message.success("登录成功");
      } else {
        this.$message.error(message);
      }

      // 登录不成功
      // 1.提示错误信息
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
