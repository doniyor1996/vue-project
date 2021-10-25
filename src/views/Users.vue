<template>
  <div class="row">
    <div class="col-md-6">
      <users-form />
    </div>
  </div>
</template>

<script>
import UsersForm from "../components/UsersForm";
export default {
  name: "Users",
  components: { UsersForm },
};
</script>

<style scoped></style>
