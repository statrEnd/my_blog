<template>
  <div>
    <!-- 项目列表 -->
    <el-card>
      <el-table :data="projectData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="name" label="项目名称"></el-table-column>
        <el-table-column prop="description" label="项目描述"></el-table-column>
        <el-table-column prop="status" label="项目状态"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button @click="handleEdit(row)"  size="small">编辑</el-button>
            <el-button @click="handleDelete(row)"  size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 编辑项目表单 -->
    <el-dialog v-model="editDialogVisible" title="编辑项目">
      <el-form :model="editForm" ref="editForm" :rules="editFormRules" label-width="80px">
        <el-form-item label="项目名称" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="项目描述" prop="description">
          <el-input v-model="editForm.description"></el-input>
        </el-form-item>
        <el-form-item label="项目状态" prop="status">
          <el-select v-model="editForm.status" placeholder="请选择">
            <el-option label="未开始" value="未开始"></el-option>
            <el-option label="进行中" value="进行中"></el-option>
            <el-option label="已完成" value="已完成"></el-option>
          </el-select>
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
import { ElTable, ElTableColumn, ElCard, ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElSelect, ElOption } from 'element-plus';

// 模拟项目数据
const projectData = ref([
  { id: 1, name: '项目1', description: '项目描述1', status: '未开始' },
  { id: 2, name: '项目2', description: '项目描述2', status: '进行中' },
  // 添加更多项目数据...
]);

// 编辑项目表单
const editForm = reactive({
  name: '',
  description: '',
  status: '',
});

// 编辑表单验证规则
const editFormRules = {
  name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
  description: [{ required: true, message: '请输入项目描述', trigger: 'blur' }],
  status: [{ required: true, message: '请选择项目状态', trigger: 'change' }],
};

// 编辑对话框可见性
const editDialogVisible = ref(false);

// 处理编辑按钮点击事件
const handleEdit = (row) => {
  editForm.name = row.name;
  editForm.description = row.description;
  editForm.status = row.status;
  editDialogVisible.value = true;
};

// 处理删除按钮点击事件
const handleDelete = (row) => {
  const index = projectData.value.indexOf(row);
  if (index !== -1) {
    projectData.value.splice(index, 1);
  }
};

// 处理编辑表单提交
const handleEditSubmit = () => {
  const editFormRef = ref('editForm');
  editFormRef.value.validate((valid) => {
    if (valid) {
      // 执行编辑逻辑，更新项目数据等
      editDialogVisible.value = false;
    } else {
      console.log('表单验证失败');
    }
  });
};
</script>

<style>
/* 添加 Tailwind CSS 样式，根据需要自定义 */
</style>
