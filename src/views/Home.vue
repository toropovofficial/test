<template>
  <div class="container">
    <div class="home">
      <header class="home__header">
        <h1 class="title">Добавление товара</h1>
         <home-select></home-select>
      </header>
      <div class="home__wrapper">
          <home-form></home-form>
        <section class="home__products">
          <home-product v-for="item in 15" :key="item" ></home-product>
        </section>
      </div>
    </div>
  </div>
</template>

<script >
import { Options, Vue } from 'vue-class-component';
import homeForm from '../components/homeForm.vue';
import homeProduct from '../components/homeProduct.vue';
import homeSelect from '../components/homeSecelct.vue';

@Options({
  components: {
    homeForm,
    homeProduct,
    homeSelect,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
  @import '../assets/scss/styles.scss';
  .home {
    &__header {
      @include flex();
    }
    &__wrapper {
      margin-top: 16px;
      @include flex(flex-start, flex-start, nowrap,);
    }
    &__products {
      margin-left: 16px;
      @include flex(flex-start, flex-start,);
      gap: 16px;
    }
  }
</style>
