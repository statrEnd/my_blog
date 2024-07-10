<template>
    <div class="md:container md:mx-auto px-4 mt-5 flex flex-row	">
      <!-- 左边列表 -->
      <div class="left mr-5 w-1/4 h-80 ">
        <div class="w-2/2 h-80  mb-5 relative">
          <div class="h-1/3 w-2/2 bg-slate-400"></div>
          <!-- 头像 -->
          <div class="absolute w-[100px] h-[100px] bg-red-300 top-1/3 left-1/2 mt-[-50px] ml-[-50px] rounded-full drop-shadow-xl truncate">
            <img class="w-2/2 h-2/2" src="http://127.0.0.1:8022/public/image/user_avatar/index_avatar.jpg" alt="">
          </div>
          <div class="h-2/3 w-2/2 bg-white pt-[70px] text-center">
            <h3>{{responseData.nickname}}</h3>
            <p class="mt-[5px]">{{ responseData.username }}</p>
            <span class=" rounded-full w-[50px] h-[50px] inline-block mt-4 border-solid border-2 border-[#f9671c] text-[#f9671c] p-[11px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>
            </span>
          </div>
        </div>

        <!-- 热门 -->
        <div class="w-2/2 p-[20px]   mb-5 bg-white">
          <p class=" border-b-[1px] border-solid border-[#e4e8eb] leading-[2.5]	font-sans	">热门阅读</p>
          <ul class="">

          <router-link to="/home/show">
            <li class=" flex flex-row h-24 py-3 border-b-[1px] border-dotted border-[#e4e8eb]">
              <div class="w-1/4 rounded-md overflow-hidden bg-amber-600">

              </div>
              <div class="w-3/4 ml-2">
                <p class=" text-lg">sport | 俩行短发女孩</p>
                <p>fdg</p>
              </div>

            </li>
          </router-link>

            <li class=" flex flex-row h-24 py-3 border-b-[1px] border-dotted border-[#e4e8eb]">
              <div class="w-1/4 rounded-md overflow-hidden bg-amber-600">

              </div>
              <div class="w-3/4 ml-2">
                <p class=" text-lg">sport | 俩行短发女孩</p>
                <p>fdg</p>
              </div>

            </li>
            <li class=" flex flex-row h-24 py-3 border-b-[1px] border-dotted border-[#e4e8eb]">
              <div class="w-1/4 rounded-md overflow-hidden bg-amber-600">

              </div>
              <div class="w-3/4 ml-2">
                <p class=" text-lg">sport | 俩行短发女孩</p>
                <p>fdg</p>
              </div>

            </li>
            <li class=" flex flex-row h-24 py-3 border-b-[1px] border-dotted border-[#e4e8eb]">
              <div class="w-1/4 rounded-md overflow-hidden bg-amber-600">

              </div>
              <div class="w-3/4 ml-2">
                <p class=" text-lg">sport | 俩行短发女孩</p>
                <p>fdg</p>
              </div>

            </li>
            <li class=" flex flex-row h-24 py-3 border-b-[1px] border-dotted border-[#e4e8eb]">
              <div class="w-1/4 rounded-md overflow-hidden bg-amber-600">

              </div>
              <div class="w-3/4 ml-2">
                <p class=" text-lg">sport | 俩行短发女孩</p>
                <p>fdg</p>
              </div>

            </li>
            <li class=" flex flex-row h-24 py-3 border-b-[1px] border-dotted border-[#e4e8eb]">
              <div class="w-1/4 rounded-md overflow-hidden bg-amber-600">

              </div>
              <div class="w-3/4 ml-2">
                <p class=" text-lg">sport | 俩行短发女孩</p>
                <p>fdg</p>
              </div>

            </li>
          </ul>
        </div>

        <!-- 标签列表 -->
      <div class="w-2/2 p-[20px]   mb-5 bg-white">
        <p class=" border-b-[1px] border-solid border-[#e4e8eb] leading-[2.5]	font-sans	">标签列表</p>
        <ul class="mt-3 flex flex-wrap">
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">情绪</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">猫</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">人像</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">博客</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">摄影</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">故事</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">生活</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">爱情</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">猫</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">人像</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">博客</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">摄影</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">故事</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">生活</li>
          <li class="border-[1px] borde-[#e4e8eb] p-[8px] rounded-[3px] mr-[10px] mb-[10px] hover:border-[#0000ff] hover:text-[#0000ff]">爱情</li>
        </ul>
      </div>

      </div>

      <!-- 右边列表 -->
      <div class="right w-3/4 ">
        <router-view></router-view>
      </div>
    </div>
</template>

<script setup>
import { ref ,onMounted ,reactive } from 'vue';
import axios from '../../axios'; // 导入全局配置的 axios 实例

// const loading = ref(true);

// 使用 ref 创建响应式数据
const responseData = ref([]);

// 在组件挂载后发送 Axios 请求获取数据
onMounted(async () => {
  try {
    // 发送 GET 请求获取学生数据
    const response = await axios.get('/user/1'); // 替换成实际的 API 地址
    // console.log(response.data.userData);
    responseData.value = response.data.userData; // 将获取的数据赋值给 
    // console.log(responseData.value);
  } catch (error) {
    console.error('获取数据失败', error);
  }
});


</script>

<style scoped>
.wid {
  width: 100vw;
  height: 160px;
  border-bottom: 3px solid rgb(38, 166, 154);
}

</style>