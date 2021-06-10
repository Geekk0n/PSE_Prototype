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
            <td>{{row.item.role}}</td>
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
          </tr>
      </template>
  </v-data-table>
  <v-btn class="mx-2" dark small color="grey" @click="onButtonClick(row.item)">
    Neuen Nutzer einladen
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
          { text: 'Rolle', value: 'role' },
          { text: '', },
          { text: '', },
        ],
        studies: [
          {
            name: 'Max Mustermann',
            role: 'Forscher',
          },
          {
            name: 'Peter Lustig',
            role: 'Teilnehmer',
          },
          {
            name: 'Heinz Platte',
            role: 'Administrator',
          },
          {
            name: 'Hans Raser',
            role: 'Teilnehmer',
          },
          {
            name: 'Rudolf Reiner',
            role: 'Forscher',
          }, 
          {
            name: 'Anna Schmidt',
            role: 'Teilnehmer',
          },
          {
            name: 'Alice Wonder',
            role: 'Administrator',
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