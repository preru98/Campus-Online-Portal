<template>
  <div id="login">
    <form @submit.prevent="onSubmitLogin">
        <fieldset>
            <legend>Login</legend>

            <label for="username">Username</label><br>
            <input v-model="username" type="text" id="username" name="username" required><br>

            <label for="password">Password</label><br>
            <input v-model="password" type="password" id="password" name="password" required><br>
            <input type="submit" value="LOG IN">
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

                axios.post('https://still-harbor-14251.herokuapp.com/adminLogin/', {
                    username: this.username,
                    password: this.password
                })
                .then(function (response) {
                    
                    // alert(response.status)
                    // alert(response.data.Authentication)
                    if(response.status==200 && response.data.Authentication==true){
                        alert("Transferring")
                        scope.$router.push('/grid')
                    }
                    // console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                });
                this.username=null
                this.password=null
            }
        }
    }
</script>

<style>

</style>
