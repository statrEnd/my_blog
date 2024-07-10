<script setup>
import My_Aside from '../components/sidebar/Aside.vue'
import My_head from './header/My_head.vue';

import { ref } from 'vue'

defineProps({
  msg: String,
})
const count = ref(0)
</script>

<template>
  <div class="common-layout w-screen h-screen">
    <el-container class=" h-screen bg-[#f9f9f9]">
      <el-aside class=" bg-[#ffffff] flex flex-col border-r-[1px] border-[#dcdfe6] overflow-x-hidden">
        <!-- 侧边栏 -->
        <My_Aside></My_Aside>

      </el-aside>
      <el-container>

        <el-header class=" bg-[#ecf5ff]">
          <!-- 顶部区域 -->
            <My_head></My_head>
        </el-header>

        <el-main>
          <!-- 内容区域 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.el-header {
  padding: 0;
}
.el-aside {
  width: auto;
}
</style>
