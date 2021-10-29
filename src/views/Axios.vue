<template>
  <ul>
    <li v-for="user in users" :key="user.age">
      <span>{{ user.name }}</span>
      <span>{{ user.age }}</span>
      <span>{{ user.birthday }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Axios",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.$http.get("/users.json").then(({ data }) => {
        this.users = data;
      });
    }, 1000);
  },
};
</script>

<style scoped></style>
