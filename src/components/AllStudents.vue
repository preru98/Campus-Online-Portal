<template>
  <div class="student-list">
    <button id="createStudent" v-on:click="create">Create Student</button>
    <create-student v-if="showCreateForm" v-on:created="addStudentToList"></create-student>
    <map-student v-if="showTagMappingForm" v-bind:rollNumber="enrollmentNumberToBeRegistered" v-on:mapped="mappedStudent"></map-student>
    <p>inside all sudents vue</p>
    <table v-if="allStudentsData.length" id="student-record" border="1 px">
      <tr>
        <th>Name</th>
        <th>Enrollment Number</th>
        <th>Course</th>
        <th>Delete</th>
        <th>Map Tag</th>
      </tr>
      <tr v-for="(student,index) in allStudentsData" :key="index">
        <td>{{student.name}}</td>
        <td>{{student.enrollmentNumber}}</td>
        <td>{{student.course}}</td>
        <td><button v-on:click="deleteStudent(index)">Delete</button></td>
        <td><button v-on:click="mapStudent(index)">Map</button></td>

      </tr>
    </table>
    <p v-else>No students are registered</p>
  </div>
</template>

<script>
import * as axios from 'axios'
import createStudent from './createStudent.vue'
import tagMap from './tagMap.vue'
export default {
  mounted: function () {
    const scope=this
    axios.get('https://still-harbor-14251.herokuapp.com/')
      .then(function(response){   
        alert(response.status) 
        console.log(response.data);
        scope.allStudentsData=response.data
        console.log(scope.products) //this.products
      })
      .catch(function (error) {
        console.log(error);
      })
  },
  data:function(){
    return{
      allStudentsData:[],
      showCreateForm:0,
      showTagMappingForm:0,
      enrollmentNumberToBeRegistered:null
      // allMappedStudents:[]
    }
  },
  methods:{
    deleteStudent:function(index){
      let enroll=this.allStudentsData[index].enrollmentNumber
      const scope=this
      let url="https://still-harbor-14251.herokuapp.com/delete/"+enroll+"/"
      axios.post(url)
        .then(function(response){   
            // alert(response.status) 
            if(response.status==204)
            alert("Student with roll number "+enroll+"has been deleted from records")
            scope.allStudentsData.splice(index,1)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    create:function(){
      this.showCreateForm=1
    },
    addStudentToList:function(student){
      this.allStudentsData.push(student)
      this.showCreateForm=0
    },
    mapStudent:function(index){
      let enroll=this.allStudentsData[index].enrollmentNumber
      this.enrollmentNumberToBeRegistered=enroll
      this.showTagMappingForm=1
    },
    mappedStudent:function(){
      this.showTagMappingForm=0
      this.enrollmentNumberToBeRegistered=null
    }
  },
  components:{
    'create-student':createStudent,
    'map-student':tagMap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
