<template>
  <form @submit.prevent="submitComment">
    <div class="flex items-center mb-4">
      <img :src="avatar" class="w-12 h-12 rounded-full mr-4" alt="Avatar">
      <textarea v-model="comment" class="w-full p-2 border rounded" placeholder="写下你的留言..."></textarea>
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">发表留言</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      comment: '',
      avatar: 'https://via.placeholder.com/50' // 替换成你的头像链接
    };
  },
  methods: {
    submitComment() {
      // 在此处添加提交评论的逻辑，可以使用后端API或者模拟数据
      const newComment = {
        text: this.comment,
        avatar: this.avatar,
        replies: [] // 可能需要处理回复评论的数据结构
      };

      // 清空评论框
      this.comment = '';

      // 在这里将新评论发送到后端或处理评论列表
      // this.$emit('new-comment', newComment); // 如果使用父组件处理评论
    }
  }
};
</script>

<style>
/* 可以添加一些自定义的样式 */
</style>
