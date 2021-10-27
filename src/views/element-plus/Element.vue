<template>
  <el-container>
    <el-container>
      <el-header>Шрек 2001 смотри онлайн или скачай</el-header>
      <el-main>
        <div class="name">
          <div class="logo"></div>
          <h2>Шрек</h2>
          <p>
            Жил да был в сказочном государстве большой зеленый великан по имени
            Шрэк. Жил он в гордом одиночестве в лесу, на болоте, которое считал
            своим. Но однажды злобный коротышка — лорд Фаркуад, правитель
            волшебного королевства, безжалостно согнал на Шрэково болото всех
            сказочных обитателей.

            <br />
            И беспечной жизни зеленого великана пришел конец. Но лорд Фаркуад
            пообещал вернуть Шрэку болото, если великан добудет ему прекрасную
            принцессу Фиону, которая томится в неприступной башне, охраняемой
            огнедышащим драконом.
          </p>
          <div class="buttons">
            <el-button type="success" round>Смотреть онлайн</el-button>
            <el-button type="warning" round>Скачать</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Element",
};
</script>

<style scoped>
.el-header {
  color: aliceblue;
  font-size: 30px;
  background-color: #42b983;
}
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}
.buttons {
  margin-bottom: 45px;
}
.buttons button {
  margin-right: 50px;
  width: 200px;
}

.name {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.logo {
  position: absolute;
  width: 230px;
  height: 400px;
  background: url("../../img/Shrek.jpg") center no-repeat;
  background-size: cover;
  top: 140px;
  left: 30px;
  border-radius: 20px;
}
.el-main {
  background-image: url("../../img/bacgr.webp");

  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 30px;
  width: 100%;
  padding: 0px;
}
p {
  margin: 120px auto;
  color: aliceblue;
  width: 60%;
  padding: 15px;
  border: 1px solid inherit;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.4);
}
h2 {
  padding-top: 100px;
  font-size: 70px;
  color: aliceblue;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
