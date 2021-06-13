<template>
  <v-row justify='space-around' class="fillheight">
  <!-- Left Content -->
  <v-col id="content-left" class="grey lighten-3" md=5 >
    <ViewLeftKonto />
  </v-col>
  <!-- Right Content -->
  <v-col id="content-right" class="grey lighten-3 p-4" md=6>
    <ViewRightKonto />
  </v-col>
</v-row>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component
export default class KontoClass extends Vue{
}
</script>