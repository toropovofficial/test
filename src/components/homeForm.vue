<template>
  <form
    @submit.prevent="createNewProduct(), saveProductToLocalStorage()"
    class="home__form">
      <form-input
      :labelText="'Наименование товара'"
      :typeInput="'text'"
      :placeHolder="'Введите наименование товара'"
      v-model.trim="nameProduct"
      :errorMsg='error'>
      </form-input>

      <form-text-area
      :labelText="'Описание товара'"
      :placeHolder="'Введите описание товара'"
      v-model="descrProduct">
      </form-text-area>

      <form-input
      :labelText="'Ссылка на изображение товара'"
      :typeInput="'text'"
      :placeHolder="'Введите описание товара'"
      v-model.trim="linkProduct"
      :errorMsg='error'>
      </form-input>

      <form-input
      :labelText="'Цена товара'"
      :typeInput="'number'"
      :placeHolder="'Введите цену'"
      v-model="priceProduct"
      :errorMsg='error'>
      </form-input>

      <form-button
      :btnText="'Добавить товар'"
      :disabled="isDisabled"
      @clickClear="resetForm">
      </form-button>
  </form>
</template>

<script>
import formInput from './form-components/formInput.vue';
import formTextArea from './form-components/formTextArea.vue';
import formButton from './form-components/formButton.vue';

export default {
  emits: ['createProduct'],
  components: {
    formInput,
    formTextArea,
    formButton,
  },
  data() {
    return {
      nameProduct: '',
      descrProduct: '',
      linkProduct: '',
      priceProduct: '',
      error: '',
      newProduct: [],

    };
  },
  computed: {
    isDisabled() {
      if (this.nameProduct.length === 0
      || this.linkProduct.length === 0
      || this.priceProduct.length === 0) {
        return 'disabled';
      }
      return 'no-disabled';
    },
  },
  methods: {
    createNewProduct() {
      if (this.isDisabled === 'disabled') {
        this.error = 'Поле является обязательным';
      } else {
        this.newProduct = {
          name: this.nameProduct,
          descr: this.descrProduct,
          link: this.linkProduct,
          price: (+this.priceProduct).toLocaleString(),
          id: Math.random(),
          time: Date.now(),
        };
        this.$emit('createProduct', this.newProduct);
      }
    },
    saveProductToLocalStorage() {
      if (this.isDisabled !== 'disabled') {
        localStorage.setItem(`product${this.newProduct.id}`, JSON.stringify(this.newProduct));
      }
    },
    resetForm() {
      this.nameProduct = '';
      this.descrProduct = '';
      this.linkProduct = '';
      this.priceProduct = '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .home__form {
    width: 332px;
    height: 440px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    padding: 24px;
    flex-shrink: 0;
    position: sticky;
    top: 24px;
  }

@media (max-width: 767px) {
  .home__form {
    position: relative;
    top: 0;
    margin-bottom: 20px;
  }
}
</style>
