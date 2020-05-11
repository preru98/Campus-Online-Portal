<template>
  <div class="student-list">
    <p>inside all sudents vue</p>
    <table id="student-record" border="1 px">
      <tr>
        <th>Name</th>
        <th>Enrollment Number</th>
        <th>Course</th>
        <th>Delete</th>
      </tr>
      <tr v-for="student in allStudentsData" :key="student.enrollmentNumber">
        <td>{{student.name}}</td>
        <td>{{student.enrollmentNumber}}</td>
        <td>{{student.course}}</td>
        <td><button v-on:click="deleteStudent(student.enrollmentNumber)">Delete</button></td>

      </tr>
    </table>
  </div>
</template>

<script>
import * as axios from 'axios'
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
      allStudentsData:[]
    }
  },
  methods:{
    deleteStudent:function(enroll){
      const scope=this
      let url="https://still-harbor-14251.herokuapp.com/delete/"+enroll+"/"
      axios.post(url)
        .then(function(response){   
            // alert(response.status) 
            if(response.status==204)
            alert("Student with roll number "+enroll+"has been deleted from records")
            // scope.data.splice(enroll,1)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
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
