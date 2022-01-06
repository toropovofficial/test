<template>
  <div class="container">
    <div class="home">
      <h1 class="title">Добавление товара</h1>
      <div class="home__wrapper">
        <home-form></home-form>
      </div>
    </div>
  </div>
</template>

<script >
import { Options, Vue } from 'vue-class-component';
import homeForm from '../components/homeForm.vue';

@Options({
  components: {
    homeForm,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
  @import '../assets/scss/styles.scss';
  .home {
    &__wrapper {
      margin-top: 16px;
      @include flex;
    }
  }
</style>
