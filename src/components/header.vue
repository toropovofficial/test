<template>
  <header>
    <ul>
       <router-link  class="main-header__link btn" to="/">home</router-link>
      <router-link  class="main-header__link btn" to="/list">list tasks</router-link>
    </ul>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'generalHeader'
})
</script>
