<template>
  <div class="container mx-auto my-10 p-5 bg-slate-100">
    <h1 class="text-3xl font-bold mb-5">博客留言</h1>

    <div class="mb-5">
      <form @submit.prevent="addComment">
        <label for="username" class="block text-sm font-medium text-gray-700 mb-2">用户名</label>
        <input v-model="newComment.username" type="text" id="username" name="username" class="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />

        <label for="message" class="block text-sm font-medium text-gray-700 mt-3 mb-2">留言</label>
        <textarea v-model="newComment.message" id="message" name="message" rows="3" class="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>

        <button type="submit" class="mt-3 inline-block py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">发布留言</button>
      </form>
    </div>

    <div v-if="comments.length > 0" class="space-y-4">
      <div v-for="(comment, index) in comments" :key="index" class="border p-4 rounded-md">
        <div class="flex items-center mb-2">
          <img :src="comment.avatar" class="w-8 h-8 rounded-full" alt="User Avatar">
          <p class="font-semibold ml-3">{{ comment.username }}</p>
        </div>
        <p>{{ comment.message }}</p>
      </div>
    </div>
    <p v-else>暂无留言</p>
  </div>
</template>

<script>
export default {
  setup() {
    // 模拟数据
    const comments = [
      { username: 'Alice', message: '这是一条留言。', avatar: 'https://robohash.org/Alice.png' },
      { username: 'Bob', message: '又一条留言。', avatar: 'https://robohash.org/Bob.png' }
    ];

    const newComment = {
      username: '',
      message: ''
    };

    const addComment = () => {
      if (newComment.username.trim() !== '' && newComment.message.trim() !== '') {
        comments.push({
          username: newComment.username,
          message: newComment.message,
          avatar: `https://robohash.org/${newComment.username}.png`
        });
        newComment.username = '';
        newComment.message = '';
      }
    };

    return {
      comments,
      newComment,
      addComment
    };
  }
};
</script>

<style>
/* 可以添加自定义样式 */
</style>
