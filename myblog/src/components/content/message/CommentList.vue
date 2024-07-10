<template>
  <div>
    <CommentForm @new-comment="addComment" />
    <div v-for="(comment, index) in comments" :key="index" class="flex items-start mb-4">
      <img :src="comment.avatar" class="w-12 h-12 rounded-full mr-4" alt="Avatar">
      <div>
        <p>{{ comment.text }}</p>
        <button @click="toggleReply(index)" class="text-blue-500">回复</button>
        <div v-if="comment.showReply" class="ml-8">
          <!-- 可以在这里加入回复评论的表单或逻辑 -->
        </div>
        <div v-if="comment.replies.length">
          <CommentList :comments="comment.replies" /> <!-- 递归显示回复评论 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentForm from '../message/CommentForm.vue';
import CommentList from '../message/CommentList.vue'

export default {
  components: {
    CommentForm,
    CommentList
  },
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    addComment(newComment) {
      // 在这里处理新评论，可能需要发送到后端或者更新评论列表
      this.comments.push(newComment);
    },
    toggleReply(index) {
      // 可以在这里处理显示/隐藏回复评论框的逻辑
      this.$set(this.comments[index], 'showReply', !this.comments[index].showReply);
    }
  }
};
</script>

<style>
/* 可以添加一些自定义的样式 */
</style>
