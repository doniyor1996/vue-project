<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/my-input">My input</router-link> |
    <router-link to="/my-table">My table</router-link> |
    <router-link to="/my-form">My form</router-link> |
    <router-link to="/my-components">My components</router-link> |
    <router-link to="/users">Users component</router-link> |
    <router-link to="/element">Element-plus</router-link> |
    <router-link to="/E-plus">E-plus forms</router-link> |
    <router-link to="/axios">Axios</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
