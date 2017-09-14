<template>
  <div light class="headerDiv">
    <v-navigation-drawer light v-model="drawer" overflow enable-resize-watcher class="hidden-md-and-up">
      <v-toolbar flat class="transparent">
        <v-toolbar-title class="ml-4">
        Wealth<span class="success--text">Edge</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-layout row>
        <v-flex>
          <div>
          <v-btn flat block to="/methodology">Methodology</v-btn>
          </div>
          <div>
          <v-btn flat block to="/blog">Blog</v-btn>
          </div>
          <div>
          <v-btn flat block to="/faq">FAQ</v-btn>
          </div>
          <div>
          <v-btn flat block to="/contact">Contact Us</v-btn>
          </div>
          <div>
            <v-btn flat success block>Invest Now</v-btn>
          </div>
        </v-flex>
      </v-layout>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-title class="ml-3">
        <router-link to="/"><v-icon x-large class="success--text text--lighten-2">done_all</v-icon></router-link> 
        Wealth<span class="success--text">Edge</span>
        </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down ml-4">
        <v-btn flat to="/methodology">Methodology</v-btn>
        <v-btn flat to="/blog">Blog</v-btn>
        <v-btn flat to="/faq">FAQ</v-btn>
        <v-btn flat to="/contact">Contact Us</v-btn>
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
