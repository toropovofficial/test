<template>
    <section class="topchart">
     <h1 class="topchart__title title ">ТОП ЖАНРОВ</h1>
      <div  class="topchart__wrapper">
          <genreList v-for="(item, index) in list" :item="item"  :key="index"
          @click.native="searchTrackByGenre(item)" ></genreList>
      </div>
   </section>
</template>

<script lang='ts'>
import Vue from 'vue'
import axios from '../../plugins/axios'
import genreList from '../helpers/genreList.vue'
import { Data } from '../../interfaces/interface'

export default Vue.extend({
  name: 'topChart',
  components: {
    genreList
  },
  props: {
    list: {
    }
  },
  methods: {
    searchTrackByGenre (item: string): void {
      axios
        .get(`?method=tag.gettoptracks&tag=${item}&format=json`)
        .then((response) => response.data)
        .then((data: Data) => {
          this.$emit('getTrackList', data.tracks.track)
        })
        .catch((error) => console.log(error))
    }
  }
})
</script>

 <style lang="scss" scoped>
.topchart {
  margin-bottom: 50px;
  &__wrapper {
    @include flex(wrap, flex-start);
  }

}

</style>
