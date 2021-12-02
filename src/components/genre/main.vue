<template>
  <div class="genre">
    <headerMain></headerMain>
        <section>
          <div class="container">
            <div class="genre__wrapper">
              <leftContent></leftContent>
                <div class="genre__right">
                     <img :src="require(`../../assets/img/mainpage/${img}`)"
                     alt="" class="genre__img">
                </div>
            </div>
          </div>
        </section>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import headerMain from '../mainpage/header-main.vue'
import leftContent from './leftContent.vue'

export default Vue.extend({
  name: 'GENREMAIN',
  components: {
    headerMain,
    leftContent
  },
  data: () => ({
    img: 'pop.jpg'
  }),
  mounted () {
    this.img = `${this.$route.fullPath.slice(1)}.jpg`
  }
})
</script>

<style scoped lang="scss">
.genre {
  &__wrapper {
    @include flex();
  }
  &__right {
    margin-left: 10px;
    cursor: pointer;
    animation: spin 2s;
    & img {
      @include size(400px, 400px);
      border-radius: 50%;
      border: solid 1px $mainColor;
    }
  }
}
@media (max-width:1399px) {
  .genre {
    &__wrapper {
      flex-direction: column-reverse;
    }
    &__right {
      margin: 0 auto;
      margin-bottom: 10px;
      & img {
         @include size(300px, 300px);
      }
    }
  }
}
@keyframes spin {
    0%  {-webkit-transform: rotate(0deg);}
    100% {-webkit-transform: rotate(360deg);}
}
</style>
