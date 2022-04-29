<template>
  <div class="layout">
    <Header></Header>
    <slot/>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components:{
    Header,
    Footer
  }
}
</script>
<style>

</style>
