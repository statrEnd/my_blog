<template>
  <el-radio-group v-model="isCollapse" class="w-[20px] h-[20px] self-left pl-[20px]  font-[20px] mt-6 mb-3 cursor-pointer">
    <el-icon @click="kai" class="flex"><Operation /></el-icon>
  </el-radio-group>

  <el-menu
    :default-active="router.fullPath"
    class="el-menu-vertical-demo hhh overflow-x-hidden"
    :collapse="isCollapse"
    :router="true"
   
  >
    <!-- <router-link to="/home/index"> -->
      <el-menu-item index="/home/index" >
        <el-icon><House /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
    <!-- </router-link> -->

    
    <el-sub-menu index="/article">
      <template #title>
        <el-icon><Document /></el-icon>
        <span>文章管理</span>
      </template>
      <el-menu-item-group>
        <!-- <router-link to="/home/article/articlelist"> -->
          <el-menu-item index="/home/article/articlelist">文章列表</el-menu-item>
        <!-- </router-link> -->
        <!-- <router-link to="/home/article/createarticle"> -->
          <el-menu-item index="/home/article/createarticle">创建文章</el-menu-item>
        <!-- </router-link> -->

        <el-menu-item index="/home/article/createarticle">文章标签</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

    <!-- <router-link to="/home/projectmanagement"> -->
      <el-menu-item index="/home/projectmanagement" >
        <el-icon><Folder /></el-icon>
        <template #title>项目管理</template>
      </el-menu-item>
    <!-- </router-link> -->

    <!-- <router-link to="/home/link"> -->
      <el-menu-item index="/home/link">
        <el-icon><Link /></el-icon>
        <template #title>友情链接</template>
      </el-menu-item>
    <!-- </router-link> -->

    <!-- <router-link to="/home/leaveword"> -->
      <el-menu-item index="/home/leaveword">
        <el-icon><ChatDotRound /></el-icon>
        <template #title>留言管理</template>
      </el-menu-item>
    <!-- </router-link> -->

    <!-- <router-link to="/home/usermanagement"> -->
      <el-menu-item index="/home/usermanagement">
        <el-icon><setting /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
    <!-- </router-link> -->

  </el-menu>
</template>

<script setup>
import { ref,reactive } from 'vue'
import { ElMessage } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {useRoute} from 'vue-router'

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting, 
} from '@element-plus/icons-vue'

const router = useRoute()

// console.log(router.fullPath);
let isCollapse = ref(false)
let shjd = reactive({
  isCollapse
})
console.log();
function kai() {
  shjd.isCollapse=!shjd.isCollapse

}



const handleOpen = (key , keyPath) => {
  // console.log(key, keyPath)
}
const handleClose = (key, keyPath ) => {
  // console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
}
.el-radio-group {
  font-size: 20px;
}
.el-menu {
  border-right: 0;
}

.hhh .el-menu-item {
  padding-right: 100px;
}
</style>
