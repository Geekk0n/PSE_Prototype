<template>
<v-app>
  <Base />
</v-app>
</template>

<script>
import {Vue,Component} from 'vue-property-decorator'

// export default {
//   data() {
//     return{
//       items: ['Info','Teilnehmen','Studien','Nutzer','Konto'],
//       leftContent: 'LeftContentInfo',
//     };
//   },
//   methods:{
//     loadKonto(){
//       this.leftContent='LeftContentKonto';
//     },
//     loadInfo(){
//       this.leftContent='LeftContentInfo';
//     },
//   },
// }

@Component
export default class TestClass extends Vue{
  items=['Info','Teilnehmen','Studienverwaltung','Nutzerverwaltung','Mein Konto'];
  leftContent= 'OldLeftContentInfo';

  loadKonto(){
    this.leftContent='OldLeftContentKonto';
  }

  loadInfo(){
      this.leftContent='OldLeftContentInfo';
  }
}
</script>

<style>
  .fillheight{
    min-height:70vh !important;
  }
</style>