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
  <product-alert
    v-if="alertValue"
    :alertMsg="alertValue">
  </product-alert>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import homeForm from '../components/homeForm.vue';
import homeProduct from '../components/homeProduct.vue';
import homeSelect from '../components/homeSecelct.vue';
import loader from '../components/loader.vue';
import homeInput from '../components/form-components/formInput.vue';
import productAlert from '../components/productAlert.vue';
import { dataHome, newProduct } from '../dataInterface';

@Options({
  components: {
    homeForm,
    homeProduct,
    homeSelect,
    loader,
    homeInput,
    productAlert,
  },
  created() {
    setTimeout(() => {
      this.isLoader = false;
      Object.keys(localStorage).filter((item) => item.substr(0, 7) === 'product').forEach((item) => this.arrayProducts.push(JSON.parse(localStorage.getItem(item) as any)));
      this.arrayProducts.sort((a: newProduct, b: newProduct) => a.time - b.time);
    }, 500);
  },
  data(): dataHome {
    return {
      arrayProducts: [],
      isLoader: true,
      selectValue: 'default',
      filterName: '',
      alertValue: '',
    };
  },
  methods: {
    addNewProduct(item: newProduct): void {
      this.arrayProducts.push(item);
      this.alertValue = 'товар добавлен';
      setTimeout(() => { this.alertValue = false; }, 300);
    },
    deleteItemFromArray(id: number): void {
      this.alertValue = 'товар удален';
      setTimeout(() => { this.alertValue = false; }, 300);
      this.arrayProducts = this.arrayProducts.filter((item: newProduct) => item.id !== id);
    },
    deleteItemFromLocalStorage(id: number): void {
      localStorage.removeItem(`product${id}`);
    },
  },
  computed: {
    test(): any {
      if (this.selectValue === 'min') return this.arrayProducts.sort((a: any, b: any) => a.price.replace(/\s/g, '') - b.price.replace(/\s/g, ''));
      if (this.selectValue === 'max') return this.arrayProducts.sort((a: any, b: any) => b.price.replace(/\s/g, '') - a.price.replace(/\s/g, ''));
      if (this.selectValue === 'names') return this.arrayProducts.filter((item: newProduct) => item.name.includes(this.filterName));
      return this.arrayProducts.sort((a: newProduct, b: newProduct) => a.time - b.time);
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

  @media (max-width: 767px) {
    .home {
      &__wrapper {
        @include flex(center, center, wrap,);
      }
      &__products {
        flex-direction: column;
        margin-left: 0;
      }
      &__wrapper-input {
        margin: 0 auto;
        margin-top: 10px;
      }
    }
}
</style>
