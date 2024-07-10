<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">创建文章</h2>

    <!-- 文章表单 -->
    <form @submit.prevent="submitForm" class="max-w-md">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700">标题:</label>
        <input v-model="article.title" type="text" id="title" name="title" class="mt-1 p-2 border rounded-md w-full" />
      </div>

      <div class="mb-4">
        <label for="content" class="block text-sm font-medium text-gray-700">内容:</label>
        <textarea v-model="article.content" id="content" name="content" rows="4" class="mt-1 p-2 border rounded-md w-full"></textarea>
      </div>

      <div class="mb-4">
        <label for="tags" class="block text-sm font-medium text-gray-700">标签 (逗号分隔):</label>
        <input v-model="article.tags" type="text" id="tags" name="tags" class="mt-1 p-2 border rounded-md w-full" />
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">创建文章</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const article = ref({
  title: '',
  content: '',
  tags: ''
});

const submitForm = () => {
  // 执行提交逻辑，可以发送请求到后台保存文章等
  console.log('提交文章:', article.value);
  // 清空表单
  article.value = { title: '', content: '', tags: '' };
};
</script>

<style>
/* 添加 Tailwind CSS 样式，根据需要自定义 */
</style>
