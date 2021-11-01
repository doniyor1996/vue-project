<template>
  <el-col
    style="background-color: blueviolet; width: 100%; height: 100vh"
    :md="12"
  >
    <el-button
      class="but"
      v-on:click="showUsers = !showUsers"
      type="warning"
      round
      >{{ showUsers ? "Скрыт    " : "Пользователи" }}</el-button
    >
    <div v-show="showUsers" class="users">
      <ul>
        <li v-for="user in users" :key="user.age">
          <span>{{ user.name }}</span>
          <span>{{ user.age }}</span>
          <span>{{ user.birthday }}</span>
        </li>
      </ul>
    </div>
  </el-col>
  <el-col style="background-color: brown; width: 100%; height: 100vh" :md="12">
    <el-button
      class="but"
      v-on:click="showCars = !showCars"
      type="primary"
      round
      >{{ showCars ? "Скрыт" : "Авто" }}</el-button
    >
    <div v-show="showCars" class="cars">
      <ul>
        <li v-for="cars in product" :key="cars.year">
          <span>{{ cars.prName }}</span>
          <span>{{ cars.year }}</span>
          <span>{{ cars.color }}</span>
        </li>
      </ul>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "Axios",
  data() {
    return {
      showCars: false,
      showUsers: false,
      product: [],
      users: [],
    };
  },

  mounted() {
    this.$http.get("/product.json").then(({ data }) => {
      this.product = data;
    });
    this.$http.get("/users.json").then(({ data }) => {
      this.users = data;
    });
  },
};
</script>

<style scoped>
.but {
  margin-top: 20px;
  width: 160px;
}
</style>
