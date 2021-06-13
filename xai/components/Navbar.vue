<template>
    <v-row justify='center'>
      <v-spacer></v-spacer>
      <v-col md=8>
      <v-tabs
        background-color="grey lighten-4"
        color="purple">
          <v-tab
          v-for="item in items"
          :key="item.name"
          @click="changeTab(item.content)"
          >
            {{item.name}}
          </v-tab>
      </v-tabs>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component
export default class NavClass extends Vue{
  // items=['Info','Teilnehmen','Studienverwaltung','Nutzerverwaltung','Mein Konto'];

  items=[
    {name:'Info',content:'ViewContentInfo'},
    {name:'Teilnehmen',content:'ViewContentTeilnehmen'},
    {name:'Studienverwaltung',content:'ViewContentStudienverwaltung'},
    {name:'Nutzerverwaltung',content:'ViewContentBenutzerverwaltung'},
    {name:'Mein Konto',content:'ViewContentKonto'}
  ];

  changeTab(newTab:string){
    this.$store.commit('content/setTab',newTab);
    return this.$store.state.content.activeTab;
  }
}
</script>