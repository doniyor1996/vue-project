<template>
  <div class="container">
    <h1>My form component</h1>
    <MyForm />
    <hr />
    <h1>My Table component</h1>
    <MyTable />
    <hr />
    <h1>My input component</h1>
    <my-input />
    <div class="mb-5"></div>
  </div>
</template>
<script>
import MyTable from "./MyTable";
import MyInput from "./MyInput";
import MyForm from "./MyForm";

export default {
  name: "MyComponents",
  components: { MyForm, MyTable, MyInput },
  data() {
    return {};
  },
  methods: {},
};
</script>
