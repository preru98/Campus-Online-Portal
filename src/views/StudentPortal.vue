<template>
  <div class="student-portal-access">
    <h1>This is student detail [Student view only]</h1>
    <h3>Roll Number : {{studentRollNumber}}</h3>
    <button v-on:click="logOut">Log Out</button>
    <h2>Student Detail</h2>
    <table id="student-detail" border="1 px">
      <tr>
        <th>Name</th>
        <th>Enrollment Number</th>
        <th>Course</th>
        <th>Year</th>
        <th>Password</th>
        <th>Attendance</th>
      </tr>
      <tr>
        <td>{{student.name}}</td>
        <td>{{student.enrollmentNumber}}</td>
        <td>{{student.course}}</td>
        <td>{{student.year}}</td>
        <td>{{student.password}}</td>
        <td>{{attendance.length}}</td>
      </tr>
    </table>
    <br><br><hr><br><br>
    <button v-on:click="showAllLogs">Detail Attendance Log</button>
    <h2 v-if="showFullAttendance">Attendance Expanded</h2>
    <table v-if="showFullAttendance" id="attendance-detail" border="1 px">
      <tr v-for="(log,index) in attendance" v-bind:key="index">
        <td>{{log.tapAt}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import * as axios from 'axios'
export default {
  methods:{
    logOut:function(){
      localStorage.removeItem('enrollment-number-of-student-provided-access-to-portal')
      this.$router.push('/')
    },
    showAllLogs:function(){
        this.showFullAttendance=1
    }
  },
  data:function(){
    return{
        studentRollNumber:localStorage.getItem('enrollmentNumberOfStudentProvidedAccessToPortal'),
        student:{},
        attendance:[],
        showFullAttendance:0
    }
  },
  mounted:function(){
    // console.log(localStorage.getItem('enrollment-number-of-student-provided-access-to-portal'))
    const scope=this

    let url='https://still-harbor-14251.herokuapp.com/detail/'+this.studentRollNumber
    axios.get(url)
    .then(function(response){   
        // alert(response.status) 
        // console.log(response.data)
        if(response.status==200){
            scope.student=response.data
        }
    })
    .catch(function (error) {
        console.log(error);
    })
    setInterval(function(){ 
        let urlLog='https://still-harbor-14251.herokuapp.com/Log/'+scope.studentRollNumber
        axios.get(urlLog)
        .then(function(response){   
            // alert(response.status) 
            // console.log(response.data);
            if(response.status==200){
                scope.attendance=response.data
            }
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }, 1000);
  }
}
</script>