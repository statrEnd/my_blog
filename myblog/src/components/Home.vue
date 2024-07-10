<template>
  <div class=" min-h-screen">
    <!-- 头部 -->
    <div class="wid bg-white shadow-2xl flex flex-col	items-center ">
         <h3 class="mt-4 text-[#009688]	">欢迎来到我的博客！！！</h3>
         <p class="mt-4 text-[#93d3cd]	">科技改变生活</p>
         <ul class="my-4 text-[#00796b]	text-[15px] flex">

          <router-link to="/home/content/index">
            <li class=" px-4 flex flex-col items-center hover:text-[#9a7bcf]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="hover:border-[#9a7bcf] hover:border-b-2 transition-all cursor-pointer">首页</span>
            </li>
          </router-link>

          <router-link to="/home/content/archive">
            <li class=" px-4 flex flex-col items-center hover:text-[#9a7bcf] ">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="hover:border-[#9a7bcf]  hover:border-b-2 transition-all cursor-pointer">归档</span>
            </li>
          </router-link>

          <router-link to="/home/classify">
            <li class=" px-4 flex flex-col items-center hover:text-[#9a7bcf]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37zM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 013 13.179z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="hover:border-[#9a7bcf]  hover:border-b-2 transition-all cursor-pointer">分类</span>
            </li>
          </router-link>

          <router-link to="/home/leave_message">
            <li class=" px-4 flex flex-col items-center hover:text-[#9a7bcf]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                  <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                </svg>
              </span>
              <span class="hover:border-[#9a7bcf]  hover:border-b-2 transition-all cursor-pointer">留言</span>
            </li>
          </router-link>


          <router-link to="/home/about">
            <li class=" px-4 flex flex-col items-center hover:text-[#9a7bcf]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM6 13.25V3.5h8v9.75a.75.75 0 01-1.064.681L10 12.576l-2.936 1.355A.75.75 0 016 13.25z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="hover:border-[#9a7bcf]  hover:border-b-2 transition-all cursor-pointer">关于</span>
            </li>
          </router-link>

          <router-link to="/home/content/search">
            <li class=" px-4 flex flex-col items-center hover:text-[#9a7bcf]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
              </span>
              <span class="hover:border-[#9a7bcf]  hover:border-b-2 transition-all cursor-pointer">搜索</span>
            </li>
          </router-link>

         </ul>
    </div>

    <!-- 主内容 -->
    <router-view>

    </router-view>
    
  </div>
</template>

<script>

export default {

}
</script> 

<style scoped>
.wid {
  width: 100vw;
  height: 160px;
  border-bottom: 3px solid rgb(38, 166, 154);
}

</style>