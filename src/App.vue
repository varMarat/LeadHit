<template>
  <v-app>
    
    <v-main>
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>

</v-app>
</template>

<script>

import Authorization from './components/Authorization'
import About from './components/Analytics'

export default {
  name: 'App',

  components: {
    Authorization, About,
  },
  data() {
    return {}
  }
};
</script>
 <style>
 </style>