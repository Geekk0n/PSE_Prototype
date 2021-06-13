<template>
  <v-app>
    <v-main class="grey lighten-5">
        <!-- Main Navigation bar -->
        <v-container id="nav" class="grey lighten-4 mt-13 mb-3">
          <v-row justify='center'>
            <v-spacer></v-spacer>
            <v-col md=8>
            <v-tabs
              background-color="grey lighten-4"
              color="purple">
                <v-tab
                v-for="item in items"
                :key="item">
                  {{item}}
                </v-tab>
            </v-tabs>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
        
        <!-- Main Content -->
        <v-container id="content-main" class="grey lighten-4 p-4" >
          <v-row justify='space-around' class="fillheight">
            <!-- Left Content -->
            <v-col id="content-left" class="grey lighten-3" md=5 >
              <v-row align='center' justify='center' style="height:100%">
                <v-spacer></v-spacer>
                <v-col>
                  
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
            </v-col>
            <!-- Right Content -->
            <v-col id="content-right" class="grey lighten-3 p-4" md=6>
              <v-row align='end' style="height:20%">
                <!-- Right Content Title -->
                <v-col  class="grey lighten-2 mb-2">
                </v-col>
              </v-row>
              <!-- Right Content Body -->
              <v-row align='start' style="height:70%" class="grey lighten-2">
                <v-col>
                  <!-- Dynamic Binding to current Content -->
                  <component :is="leftContent"></component>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
    </v-main>
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
  items=['Info','Teilnehmen','Studien','Nutzer','Konto'];
}
</script>

<style>
  .fillheight{
    min-height:70vh !important;
  }
</style>