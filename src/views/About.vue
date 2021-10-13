<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id="counter">Counter: {{ counter }}</div>
  <button @click="stopTimer">Stop timer</button>
  <button @click="startTimer">Start timer</button>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      counter: 0,
      timer: null,
    };
  },
  methods: {
    stopTimer() {
      clearInterval(this.timer);
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.counter++;
      }, 1000);
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>
