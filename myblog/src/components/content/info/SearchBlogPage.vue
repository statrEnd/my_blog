<template>
   <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-6">博客搜索</h1>

        <div class="w-full flex flex-row items-center justify-center ">
            <input type="text" placeholder="输入关键词搜索..." class="w-5/6 h-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <!-- <div class="border-solid border-2 border-indigo-600 bg-white w-[120px] ml-[20px] text-center rounded-lg h-[58px] p-4 ">搜索</div> -->
            <button class="w-1/6 h-full p-3 ml-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        搜索
    </button>
        </div>


        <div class="mt-6">
            <h2 class="text-xl font-semibold mb-3">搜索结果</h2>
            <div class="bg-white p-4 rounded-lg border border-gray-200">
                <!-- 示例搜索结果 -->
                <div class="flex items-center border-b border-gray-200 py-2">
                    <img src="https://via.placeholder.com/50" alt="Blog Post" class="w-12 h-12 rounded-full">
                    <div class="ml-4">
                        <h3 class="text-lg font-semibold">文章标题</h3>
                        <p class="text-gray-600">文章摘要或描述...</p>
                    </div>
                </div>

                <div class="flex items-center border-b border-gray-200 py-2">
                    <img src="https://via.placeholder.com/50" alt="Blog Post" class="w-12 h-12 rounded-full">
                    <div class="ml-4">
                        <h3 class="text-lg font-semibold">另一篇文章标题</h3>
                        <p class="text-gray-600">文章摘要或描述...</p>
                    </div>
                </div>
                <div class="flex items-center border-b border-gray-200 py-2">
                    <img src="https://via.placeholder.com/50" alt="Blog Post" class="w-12 h-12 rounded-full">
                    <div class="ml-4">
                        <h3 class="text-lg font-semibold">另一篇文章标题</h3>
                        <p class="text-gray-600">文章摘要或描述...</p>
                    </div>
                </div>
                <div class="flex items-center border-b border-gray-200 py-2">
                    <img src="https://via.placeholder.com/50" alt="Blog Post" class="w-12 h-12 rounded-full">
                    <div class="ml-4">
                        <h3 class="text-lg font-semibold">另一篇文章标题</h3>
                        <p class="text-gray-600">文章摘要或描述...</p>
                    </div>
                </div>


                
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>