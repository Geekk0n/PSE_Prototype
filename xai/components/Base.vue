<template>
    <v-main class="grey lighten-5">
        <!-- Main Navigation bar -->
        <v-container id="nav" class="grey lighten-4 mt-13 mb-3">
         <Navbar />
        </v-container>
        
        <!-- Main Content -->
        <v-container id="content-main" class="grey lighten-4 p-4" >
          <component :is="mainComponent"></component>
        </v-container>
    </v-main>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import {getModule} from 'vuex-module-decorators'
import ContentModule from '../store/content'

@Component
export default class BaseClass extends Vue{
  // mainComponent = 'ViewContentInfo';
  contentModule!: ContentModule;

  async created(){
    this.contentModule = getModule(ContentModule, this.$store);
  }

  get mainComponent(){
    return this.contentModule.activeTab;
  }
}
</script>

<style>
</style>