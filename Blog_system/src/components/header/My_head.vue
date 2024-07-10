<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
        style="width: 100px"
        src="../../img/logo_20231109_uugai.com_1699525198841.png"
        alt="Element logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" class="flex w-[59px]">
      <el-icon class=" self-center"><Bell /></el-icon>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>用户昵称</template>
      <el-menu-item index="2-1">个人资料 </el-menu-item>
      <el-menu-item index="2-2">修改密码 </el-menu-item>
      <el-menu-item index="2-3" @click="$router.push('/')">退出登陆 </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
