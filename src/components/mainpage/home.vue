<template>
<div>
  <HEADERMAIN></HEADERMAIN>
  <main class="home">
    <div class="container">
       <section class="home__wrapper">
         <LEFTCONTENT></LEFTCONTENT>
         <div class="home__right">
            <TRACK v-for="(item, index) in mass"
              ref="track"
              @getIndex="stopOtherVideo"
              :index="index"
              :item="item"
              :key="index">
            </TRACK>
         </div>
       </section>
       <section class="home-genre">
          <div class="home-genre__title">Наши самые популярные жанры</div>
          <div class="home-genre__wrapper"  >
            <POPULARGENRE
              v-for="(item, index) in genre"
              :title="item"
              :key="index">
            </POPULARGENRE>
          </div>
       </section>
    </div>
  </main>
</div>

</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import HEADERMAIN from './header-main.vue'
import TRACK from './track.vue'
import LEFTCONTENT from '../genre/leftContent.vue'
import POPULARGENRE from './popular-genre.vue'
import { audio, dataType } from '../../interfaces/interface'
import { DataHomeMain } from '../../interfaces/dataInterfaces'

export default Vue.extend({
  name: 'HOMEMAIN',
  components: {
    HEADERMAIN,
    TRACK,
    POPULARGENRE,
    LEFTCONTENT
  },
  data: (): DataHomeMain => ({
    mass: ['track1.jpeg', 'track2.jpg', 'track3.jpg'],
    typeBtn: true,
    genre: ['pop', 'rock', 'jazz', 'rap']
  }),
  methods: {
    stopOtherVideo (value: string): void {
      _.each((this.$refs.track), (item, index) => {
        if (index !== value) {
          const { $refs }: audio = item
          const { _data }: dataType = item
          _data.type = true
          $refs.audio.pause()
        }
      })
    }
  }
})
</script>

<style scoped lang="scss">
$mainColor: #fff;
.home {
  &__wrapper {
    @include flex();
    align-items: center;
    margin-bottom: 40px;
  }
  &__subtitle {
    color: $mainColor;
  }
  &__right {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    animation: showText 1.5s;
  }
  .home-genre {
    &__title {
      color: $mainColor;
      font-size: 24px;
      margin-bottom: 20px;
    }
    &__wrapper {
      @include flex(wrap, flex-start);
    }
  }
}

@media (max-width: 1024px) {
  .home {
    &__wrapper {
      flex-direction: column;
    }
  }
}

@keyframes showText {
  0% {
    transform: translateY(-1000px);
  }

  100% {
  transform: none;
  }
}

</style>
