<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id="counter">Counter: {{ counter }}</div>
  <button @click="stopTimer">Stop timer</button>
  <button @click="startTimer">Start timer</button>
  <br />
  <br />
  <div>My name is: {{ name }}</div>
  <button @click="setMyName('Islom')">Islom</button>
  <button @click="setMyName('Don')">Don</button>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      name: "Aziz",
      names: ["Don", "Isa", "Az"],
      counter: 0,
      timer: null,
    };
  },
  methods: {
    setMyName(newName) {
      this.name = newName;
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.counter++;
        let index = this.counter % 3;
        this.name = this.names[index];
      }, 1000);
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>
