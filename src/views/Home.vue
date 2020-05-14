<template>
  <div class="home">
    <h2>Please login for service</h2>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Admin-Login v-if="!currentForm" v-on:toggle="shuffle" />
    <Student-Login v-else v-on:toggle="shuffle" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import login from '@/components/login.vue'
import studentLogin from '@/components/studentLogin.vue'

export default {
  name: 'Home',
  components: {
    'Admin-Login':login,
    'Student-Login':studentLogin,
  },
  data:function(){
      return{
        currentForm:0
      }
  },
  methods:{
    shuffle:function(){
      this.currentForm=!this.currentForm
    }
  }
}
</script>
