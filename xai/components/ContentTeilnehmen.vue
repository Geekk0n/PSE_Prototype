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

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Forscher', value: 'researcher' },
          { text: 'Kategorie', value: 'category' },
          { text: 'Teilnehmen', },
        ],
        studies: [
          {
            name: 'Study1',
            researcher: 'Tom Doe',
            category: 'Blub',
          },
          {
            name: 'Study2',
            researcher: 'Tom Doe',
            category: 'FA',
          },
          {
            name: 'Study3',
            researcher: 'Chrstine Peters',
            category: 'FA',
          },
          {
            name: 'Study4',
            researcher: 'Alex Northon',
            category: 'Blub',
          },
          {
            name: 'Study5',
            researcher: 'Frank Hank',
            category: 'Anomaly',
          }, 
          {
            name: 'Study6',
            researcher: 'Marie Hazel',
            category: 'Blub',
          },
          {
            name: 'Study7',
            researcher: 'Tom Doe',
            category: 'Anomaly',
          },
        ],
      }
    },
    methods: {
    onButtonClick(item) {
      console.log('click on ' + item.no)
    }
    }
  }
</script>