<template>
  <div class="q-pa-md">
    <el-button type="primary" @click="addData">Add</el-button>
    <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
      <el-table-column
          prop="id"
          label="1">
      </el-table-column>
      <el-table-column
          prop="name"
          label="firstName"
            width="150px">
      </el-table-column>
      <el-table-column
          prop="lastName"
          label="lastName"
          width="150px">
      </el-table-column>
      <el-table-column
          prop="middleName"
          label="middleName"
          width="150px">
      </el-table-column>
      <el-table-column
          prop="regionId"
          label="regionId"
          width="150px">
      </el-table-column>
      <el-table-column
          prop="tguserId"
          label="taUserId"
          width="150px">
      </el-table-column>
      <el-table-column
          prop="phoneNumber"
          label="phoneNumber"
          width="150px">
      </el-table-column>
      <el-table-column
          prop="login"
          label="login"
          width="150px">
      </el-table-column>
      <el-table-column
          prop="password"
          label="password"
          width="150px">
      </el-table-column>
      <el-table-column
          align="right">
        <template >
          <el-input
              v-model="search"
              size="mini"
              placeholder="Type to search"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="editData(scope.$index, scope.row)" type="primary" style="margin-left: 16px;">
            Edit
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
        title="I'm outer Drawer"
        :visible.sync="drawer"
        size="50%">
      <div>
        <el-input placeholder="firstName" v-model="input.firstName"></el-input>
        <el-input placeholder="lastName" v-model="input.lastName"></el-input>
        <el-input placeholder="middleName" v-model="input.middleName"></el-input>
        <el-input placeholder="regionId" v-model="input.regionId"></el-input>
        <el-input placeholder="districtId" v-model="input.districtId"></el-input>
        <el-input placeholder="tgUserId" v-model="input.tgUserId"></el-input>
        <el-input placeholder="phoneNumber" v-model="input.phoneNumber"></el-input>
        <el-input placeholder="login" v-model="input.login"></el-input>
        <el-input placeholder="password" v-model="input.password"></el-input>
        <el-row>
          <el-button @click="close">bekor qilish</el-button>
          <el-button @click="saqlash" type="success">saqlash</el-button>
        </el-row>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {drawer: false,
      innerDrawer: false,
      input: {
        firstName:"",
        lastName:"",
        middleName:"",
        regionId:"",
        districtId:"",
        tgUserId:"",
        phoneNumber:"",
        login:"",
        password:"",
        id: null
      },

      tableData: [],
      search: '',
    }
  },
  methods: {
    addData(){
      this.drawer = true
    },
    close() {
      this.drawer = false
      this.input.firstName = ""
      this.input.lastName = ""
      this.input.middleName = ""
      this.input.regionId = ""
      this.input.districtId = ""
      this.input.tgUserId = ""
      this.input.phoneNumber = ""
      this.input.login = ""
      this.input.password = ""
      this.input.id = null

    },
    editData(index, row){
      this.drawer = true
      this.input = JSON.parse(JSON.stringify(row))
    },
    saqlash(){
      if (this.input.firstName === "" && this.input.lastName === ""&& this.input.middleName === ""&& this.input.regionId === ""
          && this.input.districtId === ""&& this.input.tgUserId === ""&& this.input.phoneNumber === ""
          && this.input.login === ""&& this.input.password === ""){
        return
      }

      let {input} = this
      this.tableData.push(JSON.parse(JSON.stringify(input)))

      this.drawer = false
      this.input.firstName = ""
      this.input.lastName = ""
      this.input.middleName = ""
      this.input.regionId = ""
      this.input.districtId = ""
      this.input.tgUserId = ""
      this.input.phoneNumber = ""
      this.input.login = ""
      this.input.password = ""
      this.input.id = null
    },
    handleDelete(index, row) {
      console.log(index, row);


      this.tableData.splice(index,1)
    }
  },
  mounted() {
    this.loadData()
  }

}
</script>

<style scoped>

</style>