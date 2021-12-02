<template>
  <div class="div">
    <MAIN></MAIN>
    <section class="listTrack">
      <div class="container">
        <h2 class="listTrack__title title">самые популярные песни жанра</h2>
      <SEARCHMAIN :selectValue="'исполнитель'" ></SEARCHMAIN>
      </div>
    </section>

  </div>

</template>

<script lang='ts'>
import Vue from 'vue'
import { mapActions } from 'vuex'
import axios from '../../plugins/axios'
import MAIN from './main.vue'
import SEARCHMAIN from '../searchPage/main.vue'

export default Vue.extend({
  name: 'genres',
  components: {
    MAIN,
    SEARCHMAIN
  },
  data: () => ({
    title: ''
  }),
  created () {
    this.title = this.$route.fullPath.slice(1)
    axios
      .get(`?method=tag.gettoptracks&tag=${this.title}&format=json&limit=15`, {
      })
      .then((response) => response.data)
      .then((data) => {
        this.changeResponseTrack(data.tracks.track)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    ...mapActions('generalTrackList', ['changeResponseTrack'])
  }
})
</script>

<style scoped lang="scss">
  .listTrack__title {
    margin-bottom: 0;
  }
</style>
