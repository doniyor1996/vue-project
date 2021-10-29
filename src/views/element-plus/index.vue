<template>
  <el-container>
    <el-row>
      <el-col :md="12">
        <router-link :to="{ name: 'element-index' }">Index</router-link> <br />
        <router-link :to="{ name: 'buttons' }">Buttons</router-link> <br />
        <router-link
          :to="{ name: 'with-props', params: { name: 'Aziz', id: 33 } }"
          >With props</router-link
        >
        <br />
        <router-link :to="{ name: 'color', params: { use: 'green' } }"
          >Color</router-link
        >
      </el-col>
      <el-col :md="12">
        <router-view />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "index",
};
</script>

<style scoped></style>
