<template>
<div>
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
  <v-btn class="mx-2" dark small color="grey" @click="onButtonClick(row.item)">
                    Neue Studie erstellen
  </v-btn>
</div>
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
          { text: 'Status', value: 'status' },
          { text: '', },
          { text: '', },
          { text: '', },
        ],
        studies: [
          {
            name: 'Study1',
            status: 'Abgeschlossen',
          },
          {
            name: 'Study2',
            status: 'Laufend',
          },
          {
            name: 'Study3',
            status: 'Entwurf',
          },
          {
            name: 'Study4',
            status: 'Abgeschlossen',
          },
          {
            name: 'Study5',
            status: 'Abgeschlossen',
          }, 
          {
            name: 'Study6',
            status: 'Entwurf',
          },
          {
            name: 'Study7',
            status: 'Laufend',
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