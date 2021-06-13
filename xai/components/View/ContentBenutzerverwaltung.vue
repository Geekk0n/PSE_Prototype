<template>
<div>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:item="row">
          <tr>
            <td>{{row.item.name}}</td>
            <td>{{row.item.role}}</td>
            <td>
                <v-btn class="mx-2" dark small color="grey">
                    Bearbeiten
                </v-btn>
            </td>
            <td>
                <v-btn class="mx-2" dark small color="grey">
                    Löschen
                </v-btn>
            </td>
          </tr>
      </template>
  </v-data-table>
  <v-btn class="mx-2" dark small color="grey" @click="run()">
    Neuen Nutzer einladen
  </v-btn>
</div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import {getModule} from 'vuex-module-decorators'
import UserModule from '../../store/users'

@Component
export default class BenutzerverwaltungClass extends Vue{
  userModule!: UserModule;

  // test = [{name:'Test',role:'Test'}];

  headers = [
          {
            text: 'Name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Rolle', value: 'role' },
          { text: '', },
          { text: '', },
        ];

  get users(){
    return this.$store.state.users.users;
  }

  async run(){
    // console.log('run');
    // console.log(this.test);
    await this.userModule.loadUsers();
    // const data = await this.$axios.$get('http://localhost:5000/users');
    // this.test = data.users;
    // console.log(this.test);
  }

  async created(){
    this.userModule = getModule(UserModule, this.$store);
    await this.userModule.loadUsers();
  }
  // users= [
  //         {
  //           name: 'Max Mustermann',
  //           role: 'Forscher',
  //         },
  //         {
  //           name: 'Peter Lustig',
  //           role: 'Teilnehmer',
  //         },
  //         {
  //           name: 'Heinz Platte',
  //           role: 'Administrator',
  //         },
  //         {
  //           name: 'Hans Raser',
  //           role: 'Teilnehmer',
  //         },
  //         {
  //           name: 'Rudolf Reiner',
  //           role: 'Forscher',
  //         }, 
  //         {
  //           name: 'Anna Schmidt',
  //           role: 'Teilnehmer',
  //         },
  //         {
  //           name: 'Alice Wonder',
  //           role: 'Administrator',
  //         },
  //       ];
}
</script>