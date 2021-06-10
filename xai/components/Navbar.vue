<template>
  <v-tabs
    v-model="tab"
    align-with-title
    color="grey"
  >
    <v-tabs-slider color="grey"></v-tabs-slider>

    <v-tab
      v-for="item in items"
      :key="item"
    >
      {{ item }}
    </v-tab>
  </v-tabs>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
export default class NavbarClass extends Vue{
  tab=null;
  items = ['Info Page','Teilnehmen','Studienverwaltung','Benutzerverwaltung','Mein Konto'];
}
</script>


<style>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>