<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  mounted () {
    if (this.$store.getters['generalTrackList/getTotalLength'] > 1) {
      this.$store.commit('generalTrackList/changeResponseTrack')
    }
  }

})
</script>
