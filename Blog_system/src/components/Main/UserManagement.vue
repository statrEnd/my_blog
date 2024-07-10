<template>
  <div>
    <!-- 用户列表 -->
    <el-card>
      <el-table :data="userData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button @click="handleEdit(row)"  size="small">编辑</el-button>
            <el-button @click="handleDelete(row)"  size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 编辑用户表单 -->
    <el-dialog v-model="editDialogVisible" title="编辑用户">
      <el-form :model="editForm" ref="editForm" :rules="editFormRules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="editForm.username"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="password">
          <el-input v-model="editForm.password"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="editForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="上传头像" prop="head_avater">

          <!-- 替换为你的上传服务器端点 -->
          <el-upload
            :action="uploadUrl"
            :before-upload="beforeUpload"
            :on-success="handleSuccess"
            :on-error="handleError"
            list-type="picture-card"
            :file-list="fileList"
            :auto-upload="false"
          >
            <i class="el-icon-plus"></i>
          </el-upload>

          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="Avatar Preview" />
          </el-dialog>
          <el-button @click="submitAvatar">上传头像</el-button>

        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleEditSubmit">
            确定
          </el-button>
        </span>
      </template>

    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
// import { ElUploadProps } from 'element-plus/lib/el-upload';
// import 'element-plus/lib/theme-chalk/el-upload.css';
// import { Plus } from '@element-plus/icons-vue'
// import { UploadProps } from 'element-plus'


const uploadUrl = ''; // 替换为你的上传服务器端点
const fileList = ref([]);
const dialogVisible = ref(false);
const dialogImageUrl = ref('');

const beforeUpload = (file) => {
  // 在此可以添加图片格式和大小的验证逻辑
  // 返回 false 可以阻止上传
  console.log('beforeUpload', file);
  return true;
};

const handleSuccess = (response, file) => {
  // 上传成功的回调
  console.log('handleSuccess', response, file);
  fileList.value.push({
    name: file.name,
    url: URL.createObjectURL(file.raw),
  });
};

const handleError = (error, file) => {
  // 上传失败的回调
  console.error('handleError', error, file);
  ElMessage.error('上传失败');
};

const handlePreview = (file) => {
  // 图片预览
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
};

const submitAvatar = () => {
  // 在这里添加将头像上传到后端保存到数据库的逻辑
  // 使用 axios 或其他方式向后端发送请求
  // 请求中可以包含头像的相关信息，如文件名、文件类型等
  // 你需要在后端提供一个接口用于处理头像的上传
  // 示例：axios.post('/api/uploadAvatar', { avatarFile: fileList.value[0] });
  axios.post('http://localhost:3000/adminapi/user/upload', { avatarFile: fileList.value[0] })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });;
};




// 模拟用户数据
const userData = ref([
  { id: 1, username: 'user1', email: 'user1@example.com' },
  { id: 2, username: 'user2', email: 'user2@example.com' },
  { id: 3, username: 'user2', email: 'user2@example.com' },
  { id: 4, username: 'user2', email: 'user2@example.com' },
  // 添加更多用户数据...
]);

// 编辑用户表单
const editForm = reactive({
  username: '',
  password:'',
  email: '',
  nickname:'',
});

// 编辑表单验证规则
const editFormRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] },
  ],
};

// 编辑对话框可见性
const editDialogVisible = ref(false);

// 处理编辑按钮点击事件
const handleEdit = (row) => {
  editForm.username = row.username;
  editForm.email = row.email;
  editDialogVisible.value = true;
};

// 处理删除按钮点击事件
const handleDelete = (row) => {
  const index = userData.value.indexOf(row);
  if (index !== -1) {
    userData.value.splice(index, 1);
  }
};

// 处理编辑表单提交
const handleEditSubmit = () => {
  const editFormRef = ref('editForm');
  editFormRef.value.validate((valid) => {
    if (valid) {
      // 执行编辑逻辑，更新用户数据等


      editDialogVisible.value = false;
    } else {
      console.log('表单验证失败');
    }
  });
};
</script>

<style scoped>
/* 添加样式，根据需要自定义 */
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader {
  border:1px solid #c0c4cc;
  border-radius: 5px;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
