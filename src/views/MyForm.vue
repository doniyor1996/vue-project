<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="form-group">
          <div class="block">
            <label for="fiz">fiz.lico</label>
            <input
              v-model="check"
              name="check"
              type="radio"
              id="fiz"
              value="fiz"
            />
          </div>
          <div class="block2">
            <label for="yur">yur.lico</label>
            <input
              v-model="check"
              name="check"
              type="radio"
              id="yur"
              value="yur"
            />
          </div>
          <label for="name">name</label>
          <input type="text" id="name" class="form-control" /><br />
          <br />
          <label for="email">email</label>
          <input type="text" id="email" class="form-control" /><br />
          <br />
          <div v-if="check == 'fiz'">
            <label for="number">number</label>
            <input type="number" id="number" class="form-control" />
          </div>
        </div>
        <div v-if="check == 'yur'" class="blockYur form-group">
          <label for="company">company</label>
          <input class="form-control" type="text" name="company" id="company" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyForm",
  data() {
    return {
      check: "fiz",
    };
  },
  methods: {},
};
</script>
