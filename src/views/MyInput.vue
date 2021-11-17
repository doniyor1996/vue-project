<template>
  <p>Input value: {{ value }}</p>
  <input v-model="value" ref="textBox" @input="setColor('green')" />
  <button @click="clearValue">reset</button>
  <div ref="history" class="values-history" style="border: 1px solid black">
    prevValues:
  </div>
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
    setColor(color) {
      this.$refs.textBox.style.border = "1px solid " + color;
      this.$refs.textBox.style.outline = "none";
    },
    clearValue() {
      this.setColor("red");
      let p = document.createElement("p");
      p.innerText = this.value;
      this.$refs.history.append(p);
      this.$refs.history.querySelector("p:first-child").style.color =
        this.value;
      this.value = "";
    },
  },
  mounted() {
    this.$refs.textBox.focus();
  },
};
</script>
