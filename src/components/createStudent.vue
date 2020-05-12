<template>
  <div id="create-form">
    <form @submit.prevent="onSubmitCreate">
        <fieldset>
            <legend>Create</legend>

            <label for="enroll">Enrollment Number</label><br>
            <input v-model="enrollmentNumber" type="text" id="enroll" name="enroll" required><br>

            <label for="course">Course</label><br>
            <input v-model="course" type="text" id="course" name="course" required><br>

            <label for="name">Name</label><br>
            <input v-model="name" type="text" id="name" name="name" required><br>

            <label for="year">Year</label><br>
            <input v-model.number="year" type="number" id="year" name="year" required><br>

            <label for="password">Password</label><br>
            <input v-model="password" type="password" id="password" name="password" required><br>
            <input type="submit" value="REGISTER STUDENT">
        </fieldset> 
    </form>  
  </div>

</template>

<script>
import * as axios from 'axios'
    export default {
        data:function(){
            return{
                enrollmentNumber:null,
                name:null,
                course:null,
                year:null,
                password:null,
            }
        },
        methods:{
            onSubmitCreate:function(){
                const scope=this
               // alert('login successful '+ this.username+' will send data now')

                axios.post('https://still-harbor-14251.herokuapp.com/create/', {
                    enrollmentNumber:this.enrollmentNumber,
                    name:this.name,
                    course:this.course,
                    year:this.year,
                    password:this.password
                })
                .then(function (response) {
                    console.log(response)
                    // alert(response.status)
                    if(response.status==200){
                        alert("Student Added")
                        // console.log(scope.newlyRegistered)
                        // scope.$router.push('/grid')

                        console.log("Here")
                        scope.enrollmentNumber=null
                        scope.name=null
                        scope.course=null
                        scope.year=null
                        scope.password=null
                        console.log("Here!:>>>>")
                        console.log(response.data)
                        scope.$emit('created',response.data)
                    }
                })
                .catch(function (error) {
                    console.log(error)
                });
            }
        }
    }
</script>

<style>

</style>
