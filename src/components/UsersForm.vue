<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="form-group">
          <label>
            Имя:
            <input class="form-control" v-model="name" />
          </label>
        </div>
        <div class="form-group">
          <label>
            Возраст:
            <input class="form-control" v-model="age" type="number" />
          </label>
        </div>
        <div class="form-group mb-3">
          <label>
            День рожд:
            <input class="form-control" v-model="birthday" type="date" />
          </label>
        </div>
        <button class="btn btn-primary" @click="addUser">Добавить</button>
      </div>
    </div>
    <div>
      <users-table :users="users" />
    </div>
  </div>
</template>
<script>
import UsersTable from "./UsersTable";
export default {
  name: "UsersForm",
  components: { UsersTable },
  data() {
    return {
      filter: {
        age: null,
        name: "",
      },
      users: [
        { name: "Тошполат", age: 23, birthday: "2021-10-18" },
        { name: "Шомил", age: 22, birthday: "2021-10-04" },
        { name: "Хошим", age: 23, birthday: "2020-10-18" },
        { name: "Козим", age: 26, birthday: "2020-12-04" },
        { name: "Косим", age: 23, birthday: "2021-10-05" },
        { name: "Улук", age: 22, birthday: "2021-10-04" },
      ],
      name: "",
      age: "",
      birthday: "",
    };
  },
  methods: {
    addUser() {
      this.users.push({
        name: this.name,
        age: this.age,
        birthday: this.birthday,
      });
      this.name = "";
      this.age = "";
      this.birthday = "";
    },
  },
};
</script>
