<template>
  <div class="q-pa-md">
    <el-button type="primary" @click="addData">Add</el-button>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="id"
          label="1">
      </el-table-column>
      <el-table-column
          prop="name"
          label="name"
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
        <el-input placeholder="firstName" v-model="input.name"></el-input>
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
        name:"",
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
      this.input.name = ""
      this.input.id = null

    },
    editData(index, row){
      this.drawer = true
      this.input = JSON.parse(JSON.stringify(row))
    },
    saqlash(){
      if (this.input.firstName === "" ){
        return
      }

      let {input} = this
      this.tableData.push(JSON.parse(JSON.stringify(input)))

      this.drawer = false
      this.input.name = ""
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