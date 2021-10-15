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
      {{ this.users }}
    </div>
  </div>
</template>
<script>
export default {
  name: "MyInput",
  data() {
    return {
      users: [],
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
