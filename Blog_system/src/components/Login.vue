<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import axios from 'axios'
import { data } from 'autoprefixer';

const router = useRouter()
let input1 = ref('')
let input2 = ref('')
let input3 = ref('')
let checked1 =ref('')

function login () {
  // console.log(input1,input2);
  router.push('/home');
const params={
					username:input1.value,
					password:input2.value
				}

// 登录的post请求
const res = axios.post('http://127.0.0.1:8022/api/login',params)
				// console.log('res',res)
        // 设置回调函数，接收返回的响应对象
				// 异步操作成功时，执行的回调函数
				res.then(response=>{
          

					console.log('respnse',response)
          if(response.data.status==0){
            ElMessage({
              showClose: true,
              message: '登录成功',
              type: 'success',
            });
            router.push('/home');
          }else{
            ElMessage({
              showClose: true,
              message: response.data,
              type: 'warning',
            });
          }
          

				})
        // 异步操作失败时，执行的回调函数
        res.catch(error=>{
                  console.log('请求失败:')
                  // console.log('error:',error)
                  console.log('请求失败响应对象获取',error.response)
                })
}
</script>

<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center bg-slate-100 overflow-hidden">
    <!-- 登录页 -->
    <div class="2xl:w-1/4 lg:w-2/5 h-1/2 p-10 bg-white shadow-md ">
      <form class="w-full h-full">
        <h1 class="text-center leading-10">Blog后台</h1>

        <div class="w-full h-1/7 flex flex-row ">
          <el-icon class=" self-center mr-2"><User /></el-icon>
          <el-input v-model="input1" placeholder="用户名或邮箱" clearable />
        </div>

        <div class="w-full h-1/7 flex flex-row my-[20px]">
          <el-icon class=" self-center mr-2"><Lock /></el-icon>
          <el-input
            v-model="input2"
            type="password"
            placeholder="密码"
            show-password
          />
        </div>

        <div class="w-full h-1/7 flex flex-row ">
          <el-icon class=" self-center mr-2"><Promotion /></el-icon>
          <el-input v-model="input3" placeholder="验证码" clearable />
          <div class="w-1/3 ml-3 self-center">7795</div>
        </div>

        <div class="w-full h-1/7 flex flex-row justify-between">
          <el-checkbox v-model="checked1" label="记住我" size="large" />
          <span class="text-[14px] text-[#555] self-center cursor-pointer select-none hover:text-[#007acc]">忘记密码？</span>
        </div>

        <div class="w-full h-1/7 flex flex-row ">
          <el-button type="success" class="w-full my-[20px]" @click="login">登录</el-button>
        </div>

        <div class="w-full h-1/7 flex flex-row ">
          <el-button type="primary" class="w-full">注册</el-button>
        </div>
      </form>
    </div>

    
  </div>

</template>

<style scoped>

</style>