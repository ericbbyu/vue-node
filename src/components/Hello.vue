<template>
  <v-app light class="hello">
    <main>
    <v-parallax src="../assets/home-banner.png" height="800">  
    <v-layout column align-center justify-center>  
      <v-flex xs10 offset-xs1  lg6 offset-xl3>
      <h3 class="black--text">Professional Investment For Everyone</h3>
      <h4 class="black--text">Build your wealth today!</h4>
      <v-btn success>Invest Now</v-btn>
      <v-btn outline success>Learn More</v-btn>
      </v-flex>
    </v-layout>
    </v-parallax>
    </main>
  </v-app>
</template>

<script>

export default {
    name: 'hello',
    data () {
      return {
        
      }
    }
}
</script>


