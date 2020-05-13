<template>
  <div id="tag-map-form">
    <form @submit.prevent="onSubmitMap">
        <fieldset>
            <legend>Map Tag</legend>

            <label for="tagID">Enter Unique Tag ID</label><br>
            <input v-model="tagID" type="text" id="tagID" name="tagID" required><br>
            
            <input type="submit" value="MAP STUDENT">
        </fieldset> 
    </form>  
  </div>

</template>

<script>
import * as axios from 'axios'
    export default {
        props:['rollNumber'],
        data:function(){
            return{
                tagID:null,
            }
        },
        methods:{
            onSubmitMap:function(){
                const scope=this
                axios.post('https://still-harbor-14251.herokuapp.com/mapTag/', {
                    studentRollNumber:this.rollNumber,
                    tag:this.tagID,
                })
                .then(function (response) {
                    //console.log(response.data)
                     if(response.status==200 && response.data.successful==true){
                        alert("Student Added")
                        scope.$emit('mapped')
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
