<template>
  <div class="home__left">
    <h2 class="home__subtitle">Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Praesentium, unde!</h2>
    <p v-html="descr" class="home__descr">{{this.descr || 'default text'}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from '../../plugins/axios'

export default Vue.extend({
  name: 'LEFTCONTENT',
  data: () => ({
    descr: '',
    title: ''
  }),
  created () {
    this.title = this.$route.fullPath.slice(1)
    if (this.title !== '') {
      axios
        .get(`?method=tag.getinfo&tag=${this.title}&format=json`, {
        })
        .then((response) => response.data)
        .then((data) => {
          if (data.tag.name !== 'undefined') {
            this.descr = data.tag.wiki.summary
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
</script>

<style scoped lang='scss'>
.home {
  &__subtitle {
    color: $mainColor;
    font-size: 60px;
    animation: showText 1.5s ease-out;
  }
  &__descr {
    font-size: 20px;
    color: $mainColor;
    animation: showText 1.5s ease-out;
  }
}
@media (max-width:1399px) {
  .home {
    &__subtitle {
      font-size: 40px;
      margin-bottom: 10px;
    }
  }
}
@media (max-width:500px) {
  .home {
    &__descr {
    font-size: 14px;
    }
    &__subtitle {
      font-size: 30px;
    }
  }
}

@keyframes showText {
  0% {
    transform: translateX(-1000px);
  }

  100% {
  transform: none;
  }
}
</style>
