<template>
  <div style="width: 400px; margin: 0 auto">
    <el-input class="input" placeholder="Login" v-model="login" ></el-input>
    <el-input class="input" placeholder="Parol" v-model="parol" show-password></el-input>
    <el-button class="button" type="primary" style="float: right" @click="kirish">Kirish</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      login:"",
      parol:""
    }
  },
  methods:{

    kirish(){
      if (this.login === "mirvali" && this.parol === "6165199"){

        this.$router.push("/")
      }else {
        this.$notify.error("login yoki parol  hato yozildi")
      }


    }
  }
}
</script>

<style>
.input{
  margin-top: 20px;
}
.button{
  margin-top: 20px;
  background-color: green;
}
</style>