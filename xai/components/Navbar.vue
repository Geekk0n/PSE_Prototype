<template>
  <v-tabs
    align-with-title
    color="grey"
  >
    <v-tabs-slider color="grey"></v-tabs-slider>

    <v-tab to="/mainpages/info" nuxt class="text-decoration-none">
      Info Page
    </v-tab>
    
    <v-tab to="/mainpages/teilnehmen" nuxt class="text-decoration-none">
      Teilnehmen
    </v-tab>

    <v-tab to="/mainpages/studienverwaltung" nuxt class="text-decoration-none">
      Studienverwaltung
    </v-tab>
    
    <v-tab to="/mainpages/benutzerverwaltung" nuxt class="text-decoration-none">
      Benutzerverwaltung
    </v-tab>
    
    <v-tab to="/mainpages/konto" nuxt class="text-decoration-none">
      Mein Konto
    </v-tab>
    <!-- <v-tab
      v-for="item in items"
      :key="item"
      to="/mainpages/info"
      nuxt
      class="text-decoration-none"
    >
      {{ item }}
    </v-tab> -->
  </v-tabs>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
export default {
  tab: null,
  items:['Info Page','Teilnehmen','Studienverwaltung','Benutzerverwaltung','Mein Konto'],
}
// export default class NavbarClass extends Vue{
//   tab=null;
//   items = ['Info Page','Teilnehmen','Studienverwaltung','Benutzerverwaltung','Mein Konto'];
// }
</script>


<style>
li a{
  text-decoration: none;
}
</style>