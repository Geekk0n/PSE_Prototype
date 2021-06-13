<template>
<v-row justify='space-around' class="fillheight">
  <!-- Left Content -->
  <v-col id="content-left" class="grey lighten-3" md=5 >
    <ViewLeftInfo />
  </v-col>
  <!-- Right Content -->
  <!-- Der v-col für ViewRightInfo ist in dieser Komponente da sonst die Größen kaputt -->
  <!-- Gehen weil in Templates nur ein root-sein darf aber wir halt mehrere Elemente haben -->
  <!-- Und ein Div oder ähnliches verliert die oben gesetzten Dimensionen -->
  <ViewRightInfo />
</v-row>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component
export default class InfoClass extends Vue{
}
</script>

<style>
  .fillheight{
    min-height:70vh !important;
  }
</style>