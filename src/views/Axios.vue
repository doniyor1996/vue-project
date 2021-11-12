<template>
  <el-col
    style="border-right: 3px solid #b3c0d1; width: 100%; height: 100vh"
    :md="12"
  >
    <p>{{ reloaded ? "Данные обновлены" : "Данные не обновлены" }}</p>
    <el-button
      class="but"
      v-on:click="showUsers = !showUsers"
      type="warning"
      round
      >{{ showUsers ? "Скрыть" : "Пользователи" }}</el-button
    >
    <div>
      <el-table
        v-show="showUsers"
        class="users"
        :data="users"
        style="width: 100%"
      >
        <el-table-column type="index" width="50" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="age" label="Age" width="180" />
        <el-table-column prop="birthday" label="Birthday" />
      </el-table>
      <p>Ср. знач. age: {{ avg_age }}</p>
      <el-button class="but" @click="getUsers(2)" type="primary" round
        >Обновить</el-button
      >
    </div>
  </el-col>
  <el-col style="width: 100%; height: 100vh" :md="12">
    <el-button
      class="but"
      v-on:click="showCars = !showCars"
      type="primary"
      round
      >{{ showCars ? "Скрыть" : "Авто" }}</el-button
    >
    <div v-show="showCars" class="cars">
      <el-table
        v-show="showCars"
        class="users"
        :data="product"
        style="width: 100%"
      >
        <el-table-column type="index" width="50" />
        <el-table-column prop="prName" label="Name" width="180" />
        <el-table-column prop="year" label="Year" width="180" />
        <el-table-column prop="color" label="Color" />
      </el-table>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "Axios",
  data() {
    return {
      reloaded: false,
      showCars: false,
      showUsers: false,
      product: [],
      users: [],
    };
  },
  computed: {
    avg_age() {
      let sum = 0;
      this.users.forEach((item) => {
        sum += item.age;
      });
      return sum / this.users.length;
    },
  },
  watch: {
    users(newValue, oldValue) {
      if (oldValue.length) {
        this.reloaded = true;
      }
    },
  },
  mounted() {
    this.$http.get("/product.json").then(({ data }) => {
      this.product = data;
    });
    this.getUsers();
  },
  methods: {
    getUsers(n = "") {
      this.$http.get(`/users${n}.json`).then(({ data }) => {
        this.users = data;
      });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

.but {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 160px;
}
</style>
