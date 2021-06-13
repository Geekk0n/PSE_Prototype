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
            <td>{{row.item.researcher}}</td>
            <td>{{row.item.category}}</td>
            <td>
                <v-btn class="mx-2" dark small color="grey" @click="onButtonClick(row.item)">
                    Teilnahme
                </v-btn>
            </td>
          </tr>
      </template>
  </v-data-table>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import {getModule} from 'vuex-module-decorators'
import TeilnahmenModule from '../../store/teilnahmen'

@Component
export default class TeilnahmeClass extends Vue{
  teilnahmenModule!: TeilnahmenModule;

  headers= [
          {
            text: 'Name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Forscher', value: 'researcher' },
          { text: 'Kategorie', value: 'category' },
          { text: 'Teilnehmen', },
        ];
  get studies(){
    return this.$store.state.teilnahmen.studies;
  }

  async created(){
    this.teilnahmenModule = getModule(TeilnahmenModule, this.$store);
    await this.teilnahmenModule.loadTeilnahmen();
  }
  
  onButtonClick(item: { name: string; }) {
      console.log('click on ' + item.name);
    }
}
</script>