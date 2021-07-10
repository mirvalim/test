<template>
  <div id="app" class="asosiy">
   <router-view></router-view>
  </div>
</template>

<script>

export default {


}
</script>

<style>
h1{
  font-size: 35px;
}
body{
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.btt{
  margin-top: -5px;
  width: 100px;
  height: 40px;
}
.el-header, .el-footer {
  color: #333;
  line-height: 60px;
}
.router{
  font-size: 30px;
  text-decoration: none;
  margin-top: -20px;
}
button{
  width: 200px;
  font-size: 40px;
}
.main{
  margin-top: -30px;
}
.el-main {

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
