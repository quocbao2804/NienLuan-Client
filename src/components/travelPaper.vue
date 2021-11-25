<template>
  <div class="health-declaration">
    <el-form :label-position="labelPosition" ref="form" :model="sizeForm" label-width="140px" size="mini" >
      <h3 style="text-align: center;">Travel Paper</h3>
      <el-form-item label="First and last name">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Identity card">
        <el-input v-model="sizeForm.card"></el-input>
      </el-form-item>
      <el-form-item label="Sex">
        <el-select v-model="sizeForm.sex" placeholder="Please select your sex" style="width:100%;">
          <el-option label="Male" value="male"></el-option>
          <el-option label="Female" value="female"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Date of birth">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date" style="width:220%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Phone Number">
        <el-input v-model="sizeForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="sizeForm.address"></el-input>
      </el-form-item>
      <el-form-item label="Move in 14 days">
        <el-input v-model="sizeForm.subtext"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit(sizeForm)" style="margin-left:-100px">Submit</el-button>
        <el-button @click="showModal(false)">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: "TravelPaper",
  data() {
    return {
      labelPosition: 'left',
      sizeForm: {
        name: '',
        card:'',
        phone:'',
        sex: '',
        date: '',
        address:'',
        subtext:'',
      }
    };
  },
  methods: {
    onSubmit(sizeForm) {
      axios
          .post('http://localhost:3000/travelPaper',{sizeForm})
          .then(response => {
            if(response.status === 200){
              this.$notify({
                title: 'Success',
                message: 'This is a success message',
                type: 'success'
              });
            }else {
              this.$notify.error({
                title: 'Error',
                message: 'This is an error message'
              });
            }
          })
    },
    showModal(data){
      this.$emit('show',data);
    }
  }
};
</script>

<style scoped>
.el-form-item {
  padding-left: 5px;
  text-align: justify-all;

}
</style>