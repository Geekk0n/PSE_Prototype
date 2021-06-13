<template>
<v-app>
  <Base />
</v-app>
</template>

<script>
import {Vue,Component} from 'vue-property-decorator'

@Component
export default class MainClass extends Vue{
  getUser(){
    const path='http://localhost:5000/users';
  }

  // Created Lifycycle Hook
  async created(){
    // const data = await this.$axios.$get("http://localhost:5000/users");
    // console.log(data);
  }
}
</script>

<style>
</style>
