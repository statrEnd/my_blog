<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">友情链接管理</h2>
    
    <!-- 添加友情链接表单 -->
    <div class="mb-4">
      <label for="linkName" class="block text-sm font-medium text-gray-700">链接名称:</label>
      <input v-model="newLink.name" type="text" id="linkName" name="linkName" class="mt-1 p-2 border rounded-md w-full" />
    </div>

    <div class="mb-4">
      <label for="linkUrl" class="block text-sm font-medium text-gray-700">链接地址:</label>
      <input v-model="newLink.url" type="text" id="linkUrl" name="linkUrl" class="mt-1 p-2 border rounded-md w-full" />
    </div>

    <button @click="addLink" class="bg-blue-500 text-white px-4 py-2 rounded-md">添加链接</button>

    <!-- 友情链接列表 -->
    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-4">友情链接列表</h3>
      <ul class=" bg-white shadow-md p-[20px]">
        <li v-for="link in links" :key="link.id" class="mb-2">
          <span class="font-semibold hover:border-b-[1px] hover:border-[#9c9595]">{{ link.name }}</span> - 
          <a :href="link.url" target="_blank" class="text-blue-500 hover:border-b-[1px] hover:border-[#9c9595]">{{ link.url }}</a>
          <el-button @click="removeLink(link.id)" type="danger" plain size="small" class="ml-[25px]">删除</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newLink = ref({
  name: '',
  url: ''
});

const links = ref([
  { id: 1, name: 'Link 1', url: 'https://link1.com' },
  { id: 2, name: 'Link 2', url: 'https://link2.com' },
  // 添加更多链接数据...
]);

const addLink = () => {
  if (newLink.value.name && newLink.value.url) {
    links.value.push({ id: links.value.length + 1, ...newLink.value });
    newLink.value = { name: '', url: '' };
  }
};

const removeLink = (linkId) => {
  links.value = links.value.filter(link => link.id !== linkId);
};
</script>

<style>
/* 添加 Tailwind CSS 样式，根据需要自定义 */
</style>
