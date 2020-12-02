<template>
  <main class="bt-main-app">
    <main-navigation/>
    <router-view/>
  </main>
</template>

<script>
import Navigation from '@/components/navigation.vue'

export default {
  name: 'App',

  components: {
    'main-navigation': Navigation
  }
}
</script>

<style lang="scss">

</style>
