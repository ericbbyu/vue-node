<template>
  <v-app id="app">
      <HeaderDiv></HeaderDiv>
      <router-view class="main-body"></router-view>
      <Footer></Footer>
  </v-app>
</template>

<script>
import HeaderDiv from './components/Layout/HeaderDiv'
import Footer from './components/Layout/Footer'

export default {
  name: 'app',
  components: {
    HeaderDiv,
    Footer
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
 .main-body {
    padding-top:70px
  }
</style>
