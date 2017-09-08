<template>
  <div light class="headerDiv">
    <v-navigation-drawer light v-model="drawer" overflow enable-resize-watcher class="hidden-md-and-up">
      <v-toolbar flat class="transparent">
        <v-toolbar-title class="ml-4">WealthEdge</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-layout row>
        <v-flex>
          <div>
          <v-btn flat block>Methodology</v-btn>
          </div>
          <div>
          <v-btn flat block>Blog</v-btn>
          </div>
          <div>
          <v-btn flat block>FAQ</v-btn>
          </div>
          <div>
          <v-btn flat block>Contact Us</v-btn>
          </div>
          <div>
            <v-btn flat success block>Invest Now</v-btn>
          </div>
        </v-flex>
      </v-layout>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-title class="ml-5">WealthEdge</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down ml-4">
        <v-btn flat>Methodology</v-btn>
        <v-btn flat>Blog</v-btn>
        <v-btn flat>FAQ</v-btn>
        <v-btn flat>Contact Us</v-btn>
      </v-toolbar-items>  
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down mr-5">
        <v-btn flat success>Invest Now</v-btn>
        <v-btn flat>Login</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>      
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'headerDiv',
  data () {
    return {
      drawer: true
    }
  }
}
</script>
