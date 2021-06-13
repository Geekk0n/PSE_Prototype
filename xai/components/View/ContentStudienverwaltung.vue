<template>
  <v-data-table
    :headers="headers"
    :items="studies"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:item="row">
          <tr>
            <td>{{row.item.name}}</td>
            <td>{{row.item.status}}</td>
            <td>
                <v-btn class="mx-2" dark small color="grey" @click="onButtonClick(row.item)">
                    Bearbeiten
                </v-btn>
            </td>
            <td>
                <v-btn class="mx-2" dark small color="grey" @click="onButtonClick(row.item)">
                    Löschen
                </v-btn>
            </td>
            <td>
                <v-btn class="mx-2" dark small color="grey" @click="onButtonClick(row.item)">
                    Ergebnisse
                </v-btn>
            </td>
          </tr>
      </template>
  </v-data-table>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import {getModule} from 'vuex-module-decorators'
import StudyModule from '../../store/studies'

@Component
export default class StudienverwaltungClass extends Vue{
  studyModule!:StudyModule;

  headers= [
          {
            text: 'Name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Status', value: 'status' },
          { text: '', },
          { text: '', },
          { text: '', },
  ];

  get studies(){
    return this.$store.state.studies.studies;
  }

  async created(){
    this.studyModule = getModule(StudyModule, this.$store);
    await this.studyModule.loadStudies();
  }

  onButtonClick(item: { name: string; }) {
      console.log('click on ' + item.name)
    }
}
</script>