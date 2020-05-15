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
                alert('login successful '+ this.username+' will send data now')

                axios.post('https://still-harbor-14251.herokuapp.com/studentLogin/', {
                    username: this.username,
                    password: this.password
                })
                .then(function (response) {
                    // alert(response.status)
                    // alert(response.data.Authentication)
                    if(response.status==200 && response.data.Authentication==true){

                        alert("Transferring you to your portal")
                        alert(scope.username)
                        localStorage.setItem('enrollment-number-of-student-provided-access-to-portal',scope.username)
                        scope.$router.push('/studentPortal')
                        scope.username=null
                        scope.password=null
                    }
                })
                .catch(function (error) {
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
