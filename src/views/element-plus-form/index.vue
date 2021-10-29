<template>
  <el-col :span="12">
    <h5>Default colors</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <router-link :to="{ name: 'input' }">Input</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <router-link :to="{ name: 'checkbox' }">Checkbox</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-col>

  <el-col
    style="background-color: #42b983; width: 100%; height: 100vh"
    :md="18"
  >
    <router-view />
  </el-col>
</template>

<script>
export default {
  name: "E-plus forms",
};
</script>

<style scoped></style>
