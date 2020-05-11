<template>
  <div class="home">
    <h2>Please login for service</h2>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import login from '@/components/login.vue'

export default {
  name: 'Home',
  components: {
    'Login':login
  }
}
</script>
