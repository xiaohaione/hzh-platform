<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../../assets/logo3.png" alt="无法显示图片" />
            <h3></h3>
          </div>
        </el-col>
        <el-col :span="18" class="middle">
          <h3>后台管理系统</h3>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a class="loginout" @click.prevent="handleSignout()" href="#">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside class="aside" width="200px">
        <!-- 侧边导航栏 -->
        <!-- 开启油路模式 -->
        <el-menu :router="true" :unique-opened="true">
          <!-- 标签1 (没有下级标签)-->
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <!-- 标签2 -->
          <el-submenu index="2">
            <!-- 第2级标签 -->
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户与权限管理</span>
            </template>
            <!-- 导航内部标签 -->
            <el-menu-item index="users">
              <i class="el-icon-location"></i>
              <span>用户列表</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </el-menu-item>
          </el-submenu>

          <!-- 标签3 -->
          <el-submenu index="3">
            <!-- 第3级标签 -->
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <span>商品管理</span>
            </template>
            <!-- 导航内部标签 -->
            <el-menu-item index="3-1">
              <i class="el-icon-s-cooperation"></i>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-s-data"></i>
              <span>数据统计</span>
            </el-menu-item>
          </el-submenu>

          <!-- 标签4 -->
          <el-submenu index="4">
            <!-- 第4级标签 -->
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>订单管理</span>
            </template>
            <!-- 导航内部标签 -->
            <el-menu-item index="4-1">
              <i class="el-icon-s-order"></i>
              <span>订单列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  beforeCreate() {
    const token = localStorage.getItem("token");

    if (!token) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    handleSignout() {
      // 1.清楚缓存
      localStorage.clear;
      // 2.提示
      this.$message.success("退出成功");
      // 3.跳转到登录页
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style>
.container {
  height: 100%;
}
.header {
  text-align: left;
  background-color: rgb(228, 247, 240);
}
.aside {
  text-align: left;
  background-color: #d3dce6;
}
.main {
  text-align: left;
  background-color: #e9eef3;
}

/* 顶部样式 */
.middle {
  text-align: center;
}
.loginout {
  line-height: 60px;
  text-decoration: none;
}
</style>