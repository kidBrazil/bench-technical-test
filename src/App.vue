<template>
  <main class="bt-main-app">
    <main-navigation/>
    <div class="bt-wrapper">
      <router-view/>
    </div>
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
