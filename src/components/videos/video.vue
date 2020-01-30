<template>
  <el-card class="box-card">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 搜索 -->
    <el-row class="inputSearchRow" style="width: 100%">
      <el-input placeholder="请输入内容" class="inputSearch">
        <el-button slot="append" icon="el-icon-search">搜索</el-button>
      </el-input>
      <el-button class="addButton" @click.prevent="pushAddVideo()" type="primary">添加</el-button>
    </el-row>
    <!-- 视频列表 -->
    <p>
      一、import
      <el-button @click.prevent="play1()" class="play-btn">play1</el-button>
    </p>
    <video controls ref="videoDom1" class="video-box" autoplay>
      <source src type="video/mp4" />
    </video>

    <p>
      二、require
      <button @click.prevent="play2()" class="play-btn">play2</button>
    </p>
    <video controls ref="videoDom2" class="video-box" autoplay>
      <source src type="video/mp4" />
    </video>

    <p>
      三、a标签
      <a :href="video2" target="_blank" class="play-btn">play3</a>
    </p>
  </el-card>
</template>

<script>
// 2.组件内引用
// import { videoPlayer } from "vue-video-player";
// import "video.js/dist/video-js.css"; ../../../../Test/aa-30-542.mp4
import video1 from "../../../../Test/aa-30-542.mp4";
export default {
  name: "HelloWorld",
  data() {
    return {
      videoUrl1: "",
      videoUrl2: "",
      video2: require("../../../../Test/aa-30-542.mp4")
    };
  },

  methods: {
    play1() {
      this.$refs.videoDom1.src = video1;
    },
    play2() {
      this.$refs.videoDom2.src = this.video2;
    },
    pushAddVideo() {
      const vm = this;
      vm.$router.push({ name: "addVideo" });
    }
  }
};
</script>

<style>
.box-card {
  height: 100%;
}
.inputSearch {
  margin-top: 20px;
  margin-left: 30px;
  width: 300px;
}
.video-player {
  margin-top: 30px;
  /* margin-left: 40px; */
}
.addButton {
  margin-left: 40px;
}

.div-video {
  height: 20px;
  width: 200px;
}
</style>