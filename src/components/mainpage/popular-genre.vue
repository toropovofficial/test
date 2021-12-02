<template>
    <generlist :item="title" @click.native="changePage" ></generlist>
</template>

<script lang="ts">
import Vue from 'vue'
import generlist from '../helpers/genreList.vue'
export default Vue.extend({
  name: 'GENREITEM',
  components: {
    generlist
  },
  props: {
    title: {
    }
  },
  methods: {
    changePage (): void {
      this.$router.push(`${this.title}`)
    }
  }
})
</script>
