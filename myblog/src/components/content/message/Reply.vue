<template>
  <div class="mt-2 p-2 border">
    <input type="text" v-model="reply" placeholder="输入回复">
    <button @click="submitReply">回复</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const reply = ref('');

    const submitReply = () => {
      // 在这里处理回复提交的逻辑，这里只是简单地清空回复框内容
      reply.value = '';
    };

    return {
      reply,
      submitReply,
    };
  },
};
</script>
