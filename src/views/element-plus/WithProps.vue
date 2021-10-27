<template>
  prop from url:
  <ul>
    <li>name = {{ name }}</li>
    <li>id = {{ id }}</li>
  </ul>
</template>

<script>
export default {
  name: "WithProps",
  props: ["name", "id"],
};
</script>

<style scoped></style>
