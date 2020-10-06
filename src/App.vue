<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
}
</script>

<style lang="css" src="./application/style.css"></style>
