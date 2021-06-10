<template>
  <v-tabs
    v-model="tab"
    align-with-title
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>

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
export default class BaseClass extends Vue{
  tab=null;
  items = ['Info Page','Teilnehmen','Studienverwaltung','Benutzerverwaltung','Mein Konto'];
}
</script>