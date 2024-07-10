<template>
  <div>
    <!-- 留言列表 -->
    <el-card>
      <el-table :data="commentData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="content" label="留言内容"></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button @click="handleEdit(row)" size="small">编辑</el-button>
            <el-button @click="handleDelete(row)"  size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 编辑留言表单 -->
    <el-dialog v-model="editDialogVisible" title="编辑留言">
      <el-form :model="editForm" ref="editForm" :rules="editFormRules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="editForm.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="留言内容" prop="content">
          <el-input v-model="editForm.content"></el-input>
        </el-form-item>
        <el-form-item label="日期" prop="date">
          <el-date-picker v-model="editForm.date" type="date" placeholder="选择日期"></el-date-picker>
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


      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleEditSubmit">确定</el-button>
      </div> -->

    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { ElTable, ElTableColumn, ElCard, ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElDatePicker } from 'element-plus';

const editDialogVisible = ref(false);
// 模拟留言数据
const commentData = ref([
  { id: 1, username: 'user1', content: '留言内容1', date: '2023-01-01' },
  { id: 2, username: 'user2', content: '留言内容2', date: '2023-02-01' },
  // 添加更多留言数据...
]);

// 编辑留言表单
const editForm = reactive({
  username: '',
  content: '',
  date: '',
});

// 编辑对话框可见性



// 编辑表单验证规则
const editFormRules = {
  content: [{ required: true, message: '请输入留言内容', trigger: 'blur' }],
  date: [{ required: true, message: '请选择日期', trigger: 'blur' }],
};



// 处理编辑按钮点击事件
const handleEdit = (row) => {
  editDialogVisible.value = true;
  editForm.username = row.username;
  editForm.content = row.content;
  editForm.date = row.date;
};

// 处理删除按钮点击事件
const handleDelete = (row) => {
  const index = commentData.value.indexOf(row);
  if (index !== -1) {
    commentData.value.splice(index, 1);
  }
};

// 处理编辑表单提交
const handleEditSubmit = () => {
  const editFormRef = ref('editForm');
  editFormRef.value.validate((valid) => {
    if (valid) {
      // 执行编辑逻辑，更新留言数据等
      editDialogVisible.value = false;
    } else {
      console.log('表单验证失败');
    }
  });
};
</script>

<style>
/* 添加Tailwind CSS样式，根据需要自定义 */
</style>
