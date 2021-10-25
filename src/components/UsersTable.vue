<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Возраст</th>
          <th scope="col">День рожд</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th scope="row">{{ index + 1 }} |</th>
          <td>
            {{ user.name }}
          </td>
          <td>
            {{ user.age }}
          </td>
          <td>{{ user.birthday }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "UsersTable",
  props: {
    users: Array,
  },
};
</script>

<style scoped></style>
