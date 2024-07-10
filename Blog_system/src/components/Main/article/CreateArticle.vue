<template>  
  <el-container>  
    <el-header>  
      <h3>创建文章</h3>  
    </el-header>  
    <el-main>  
      <el-form :model="form" label-position="left" label-width="80px">  
        <el-form-item label="标题">  
          <el-input v-model="form.title"></el-input>  
        </el-form-item>  
        <el-form-item label="内容">  

          <el-input v-model="form.content" type="textarea" placeholder="请输入文章内容"></el-input>  

          <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->

        </el-form-item>  
        <el-form-item label="分类">  
          <el-select v-model="form.category">  
            <el-option label="运动" value="category1"></el-option>  
            <el-option label="日常" value="category2"></el-option>  
            <el-option label="学习" value="category3"></el-option>  
          </el-select>  
        </el-form-item>  
        <el-form-item>  
          <el-button type="primary" >创建</el-button>  
        </el-form-item>  
      </el-form>  
    </el-main>  
  </el-container>  
</template>  
  
<script>  
import { ref } from 'vue'  
// import axios from 'axios'  
  
export default {  
  name: 'CreateArticle',  
  setup() {  
    const form = ref({  
      title: '',  
      content: '',  
      category: '',
    })  

  
    // const createArticle = async () => {  
    //   try {  
    //     await axios.post('/api/articles', form.value)  
    //     console.log('文章创建成功')  
    //   } catch (error) {  
    //     console.error(error)  
    //   }  
    // }  
  
    return { form, }  
  }  
}  
</script>