<template>
  <div class="container">
    <div class="home">
      <header class="home__header">
        <h1 class="title">Добавление товара</h1>
        <div class="home__wrapper-input">
          <home-input
            :placeHolder="'Введите название'"
            v-model.trim="filterName"
            v-if="selectValue === 'names'">
          </home-input>
          <home-select
            v-model="selectValue">
          </home-select>
        </div>
      </header>
      <div class="home__wrapper">
          <home-form
          @createProduct="addNewProduct">
          </home-form>
        <section class="home__products" v-if="arrayProducts.length">
          <home-product
            v-for="item in test"
            :key="item"
            :item="item"
            @sendId="deleteItemFromArray(item.id), deleteItemFromLocalStorage(item.id)">
          </home-product>
        </section>
        <loader v-if="isLoader"></loader>
        <p v-if="!arrayProducts.length && !isLoader" class="empty">Список пуст</p>
      </div>
    </div>
  </div>
</template>

<script >
import { Options, Vue } from 'vue-class-component';
import homeForm from '../components/homeForm.vue';
import homeProduct from '../components/homeProduct.vue';
import homeSelect from '../components/homeSecelct.vue';
import loader from '../components/loader.vue';
import homeInput from '../components/form-components/formInput.vue';

@Options({
  components: {
    homeForm,
    homeProduct,
    homeSelect,
    loader,
    homeInput,
  },
  created() {
    setTimeout(() => {
      this.isLoader = false;
      Object.keys(localStorage).filter((item) => item.substr(0, 7) === 'product').forEach((item) => this.arrayProducts.push(JSON.parse(localStorage.getItem(item))));
      this.arrayProducts.sort((a, b) => a.time - b.time);
    }, 500);
  },
  data() {
    return {
      arrayProducts: [],
      isLoader: true,
      selectValue: 'default',
      filterName: '',
    };
  },
  methods: {
    addNewProduct(item) {
      this.arrayProducts.push(item);
    },
    deleteItemFromArray(id) {
      console.log(id);
      this.arrayProducts = this.arrayProducts.filter((item) => item.id !== id);
    },
    deleteItemFromLocalStorage(id) {
      localStorage.removeItem(`product${id}`);
    },
  },
  computed: {
    test() {
      if (this.selectValue === 'min') return this.arrayProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      if (this.selectValue === 'max') return this.arrayProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      if (this.selectValue === 'names') return this.arrayProducts.filter((item) => item.name.includes(this.filterName));
      return this.arrayProducts.sort((a, b) => a.time - b.time);
    },
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
    .empty {
      margin: 0 auto;
    }
    &__wrapper-input {
      display: flex;
    }
  }
</style>
