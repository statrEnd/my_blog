<template>
  <div class="container mx-auto my-10">
    <h1 class="text-3xl font-bold mb-5">关于我们</h1>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-3">我们的使命</h2>
      <p class="text-gray-700">在这里写下你们团队或网站的使命宣言。</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-3">我们的团队</h2>

      <div class="grid grid-cols-2 gap-6">
        <div v-for="(member, index) in team" :key="index" class="p-4 border rounded-md bg-white shadow">
          <img :src="member.avatar" :alt="member.name" class="w-20 h-20 rounded-full mx-auto mb-3 border-[1px]">
          <h3 class="text-lg font-semibold">{{ member.name }}</h3>
          <p>{{ member.position }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    // 模拟团队成员信息
    const team = [
      { name: '黄德友', position: '创始人', avatar: 'https://robohash.org/Alice.png' },
      { name: '黄德友', position: '设计师', avatar: 'https://robohash.org/Bob.png' },
      { name: '黄德友', position: '开发者', avatar: 'https://robohash.org/Charlie.png' },
      // 可根据需要添加更多成员信息
    ];

    return {
      team
    };
  }
};
</script>

<style>
/* 你可以添加自定义样式 */
</style>
