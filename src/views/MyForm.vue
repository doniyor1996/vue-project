<template>
  <el-container style="width: 400px; margin: 0 auto; height: 100vh">
    <el-main>
      <h1 class="stol">4</h1>
      <div class="menu">
        <div class="zavtraki">
          <header class="zavtraki-close">
            <img src="../img/zavtraki.svg" alt="" />
            <div class="zavtraki-text">
              <h2 class="zavtraki-title">Завтраки</h2>
              <p class="zavtraki-p">9 позиции</p>
            </div>
          </header>
        </div>

        <div class="zavtraki">
          <header class="zavtraki-close">
            <img src="../img/zavtraki.svg" alt="" />
            <div class="zavtraki-text">
              <h2 class="zavtraki-title">Завтраки</h2>
              <p class="zavtraki-p">9 позиции</p>
            </div>
          </header>
        </div>

        <div class="zavtraki">
          <header class="zavtraki-close">
            <img src="../img/zavtraki.svg" alt="" />
            <div class="zavtraki-text">
              <h2 class="zavtraki-title">Завтраки</h2>
              <p class="zavtraki-p">9 позиции</p>
            </div>
          </header>
        </div>
      </div>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script></script>

<style scoped>
.el-container {
  background: url("../img/kuxnya.jpg") no-repeat;
  background-size: cover;
}

.el-main {
  padding: 0;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
  position: relative;
}

.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.menu {
  position: absolute;
  width: 100%;
  top: 300px;
  background-color: #fff;
  border-radius: 10px;
}

.zavtraki-close {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0px;
  height: 100px;
  min-height: 90px;
  width: 100%;
  z-index: 1;
  padding: 10px 30px 10px 20px;
  border-bottom: 2px solid #b3c0d1;
  /*background: url(/icon-arrow-down.svg) calc(100% - 30px) center no-repeat;*/
}

.zavtraki-text {
  height: 100px;
  line-height: 5px;
  margin: 20px 10px;
}
img {
  margin-top: -55px;
}
.zavtraki-title {
  font-size: 25px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
}
</style>
