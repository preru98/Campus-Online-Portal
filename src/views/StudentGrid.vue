<template>
  <div class="student-list">
    <h3>STudent grid</h3>
      <Students-List/>
  </div>
</template>

<script>
import students from '@/components/AllStudents.vue'
export default {
  components:{
    'Students-List':students
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
