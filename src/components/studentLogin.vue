<template>
  <div id="student-login">
    <form @submit.prevent="onSubmitLogin">
        <fieldset>
            <legend>Student Login</legend>

            <label for="username">Username</label><br>
            <input v-model="username" type="text" id="username" name="username" required><br>

            <label for="password">Password</label><br>
            <input v-model="password" type="password" id="password" name="password" required><br>
            
            <input type="submit" value="LOG IN">
            <button v-on:click="notify">Admin Login</button>
        </fieldset> 
    </form>  
  </div>

</template>

<script>
import * as axios from 'axios'
    export default {
        data:function(){
            return{
                username:null,
                password:null   
            }
        },
        methods:{
            onSubmitLogin:function(){
                const scope=this
                axios.post('https://still-harbor-14251.herokuapp.com/studentLogin/', {
                    username: this.username,
                    password: this.password
                })
                .then(function (response) {
                    if(response.status==200 && response.data.Authentication==true){
                        alert("Transferring you to your portal")
                        alert(scope.username)
                        localStorage.setItem('enrollmentNumberOfStudentProvidedAccessToPortal',scope.username)
                        scope.$router.push('/studentPortal')
                        scope.username=null
                        scope.password=null
                    }
                    if(response.status==200 && response.data.Authentication==false){
                        alert("Kindly enter correct password")
                        document.getElementById('password').focus()
                        scope.password=null
                    }
                })
                .catch(function (error) {
                    if(error.response.status==404){
                        alert("No registered student found with enrollment number "+ scope.username)
                        document.getElementById('username').focus()
                        scope.username=null
                        scope.password=null
                    }
                    console.log(error)
                });
            },
            notify:function(){
                this.$emit('toggle');
            }
        }
    }
</script>

<style>

</style>
