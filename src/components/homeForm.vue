<template>
  <form @submit.prevent="test" class="home__form">
    <form-input
    :labelText="'Наименование товара'"
    :typeInput="'text'"
    :placeHolder="'Введите наименование товара'"
    v-model="nameProduct">
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
    v-model="linkProduct">
    </form-input>

    <form-input
    :labelText="'Цена товара'"
    :typeInput="'number'"
    :placeHolder="'Введите цену'"
    v-model="priceProduct">
    </form-input>

    <form-button
    :btnText="'Добавить товар'"
    :disabled="isDisabled">
    </form-button>
  </form>
</template>

<script>
import formInput from './form-components/formInput.vue';
import formTextArea from './form-components/formTextArea.vue';
import formButton from './form-components/formButton.vue';

export default {
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
    };
  },
  computed: {
    isDisabled() {
      if (this.nameProduct.length > 3
      && this.linkProduct.length > 5
      && this.priceProduct.length > 1) {
        return 'nodisabled';
      }
      return 'disabled';
    },
  },
  methods: {
    test() {
      console.log(2);
    },
  },
  watch: {
    nameProduct(value) {
      console.log(value);
    },
    linkProduct(value) {
      console.log(value);
    },
    priceProduct(value) {
      console.log(value);
    },
    descrProduct(value) {
      console.log(value);
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
</style>
