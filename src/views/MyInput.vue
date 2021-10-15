<template>
  <p>Input value: {{ value }}</p>
  <input v-model="value" />
  <button @click="clearValue">reset</button>
</template>
<script>
export default {
  name: "MyInput",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    clearValue() {
      this.value = "";
    },
  },
};
</script>
