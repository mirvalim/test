<template>
  <div class="hello">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}    <el-image class="rasm" :src="src"><h1>endi sizning imkoniyatlaringiz cheksiz</h1></el-image>
        </h3>
        <h3 class="rasm"></h3>
      </el-carousel-item>
    </el-carousel>
    <div  class="demo-image">
      <div class="block" v-for="fit in fits" :key="fit">
        <span class="demonstration">{{ fit }}</span>
        <el-image
            style="width: 100px; height: 100px"
            :src="url"
            :fit="fit"></el-image>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rasm{
  width: 400px;

}
</style>
