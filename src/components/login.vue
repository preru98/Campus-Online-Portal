<template>
  <div id="login">
    <form @submit.prevent="onSubmitLogin">
        <fieldset>
            <legend>Admin Login</legend>

            <label for="username">Username</label><br>
            <input v-model="username" type="text" id="username" name="username" required><br>

            <label for="password">Password</label><br>
            <input v-model="password" type="password" id="password" name="password" required><br>
            <input type="submit" value="LOG IN">
            <button v-on:click="notify">Student Login</button>
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
                // alert('login successful '+ this.username+' will send data now')
                axios.post('https://still-harbor-14251.herokuapp.com/adminLogin/', {
                    username: this.username,
                    password: this.password
                })
                .then(function (response) {
                    if(response.status==200 && response.data.Authentication==true){
                        alert("Transferring you to admin panel")
                        localStorage.setItem('accessProvidedToAdmin',scope.username)
                        scope.$router.push('/grid')
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
                        alert("No registered admin found with this username "+ scope.username)
                        document.getElementById('username').focus()
                        scope.username=null
                        scope.password=null
                    }
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
