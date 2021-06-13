<template>
  <v-col id="content-right" class="grey lighten-3 p-4" md=6>
          <v-row align='end' style="height:20%">
        <!-- Right Content Title -->
        <ViewRightTitleInfo />
      </v-row>
      <!-- Right Content Body -->
      <v-row align='start' style="height:70%" class="grey lighten-2">
        <ViewRightBodyInfo />
      </v-row>
    </v-col>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component
export default class InfoRightClass extends Vue{

}
</script>