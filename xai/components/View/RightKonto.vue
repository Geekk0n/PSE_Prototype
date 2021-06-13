<template>
  <v-row align='center' justify='center' style="height:100%">
    <v-col>
      <v-card
        class="mx-auto"
        max-width="400"
        tile
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>Max Mustermann</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>E-Mail</v-list-item-title>
            <v-list-item-subtitle>max@mustermann.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Passwort</v-list-item-title>
            <v-list-item-subtitle>
              ***************
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Titel</v-list-item-title>
            <v-list-item-subtitle>Meister</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component
export default class KontoRightClass extends Vue{

}
</script>