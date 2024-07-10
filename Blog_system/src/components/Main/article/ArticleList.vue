<template>
  <div>
    <!-- 文章列表 -->
    <el-card>
      <el-table :data="articleData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="author" label="作者"></el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button @click="handleEdit(row)"  size="small">编辑</el-button>
            <el-button @click="handleDelete(row)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 编辑文章表单 -->
    <el-dialog v-model="editDialogVisible" title="编辑文章">
      <el-form :model="editForm" ref="editForm" :rules="editFormRules" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="editForm.title"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="editForm.author"></el-input>
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

    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { ElTable, ElTableColumn, ElCard, ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElDatePicker } from 'element-plus';

// 模拟文章数据
const articleData = ref([
  { id: 1, title: '文章1', author: '作者1', date: '2023-01-01' },
  { id: 2, title: '文章2', author: '作者2', date: '2023-02-01' },
  // 添加更多文章数据...
]);

// 编辑文章表单
const editForm = reactive({
  title: '',
  author: '',
  date: '',
});

// 编辑表单验证规则
const editFormRules = {
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
  author: [{ required: true, message: '请输入作者', trigger: 'blur' }],
  date: [{ required: true, message: '请选择日期', trigger: 'blur' }],
};

// 编辑对话框可见性
const editDialogVisible = ref(false);

// 处理编辑按钮点击事件
const handleEdit = (row) => {
  editForm.title = row.title;
  editForm.author = row.author;
  editForm.date = row.date;
  editDialogVisible.value = true;
};

// 处理删除按钮点击事件
const handleDelete = (row) => {
  const index = articleData.value.indexOf(row);
  if (index !== -1) {
    articleData.value.splice(index, 1);
  }
};

// 处理编辑表单提交
const handleEditSubmit = () => {
  const editFormRef = ref('editForm');
  editFormRef.value.validate((valid) => {
    if (valid) {
      // 执行编辑逻辑，更新文章数据等
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
