<template>
  <form class="home__form">
    <form-input
    :labelText="'Наименование товара'"
    :typeInput="'text'"
    :placeHolder="'Введите наименование товара'">
    </form-input>

    <form-text-area
    :labelText="'Описание товара'"
    :placeHolder="'Введите описание товара'">
    </form-text-area>

    <form-input
    :labelText="'Ссылка на изображение товара'"
    :typeInput="'text'"
    :placeHolder="'Введите описание товара'">
    </form-input>

    <form-input
    :labelText="'Цена товара'"
    :typeInput="'number'"
    :placeHolder="'Введите цену'">
    </form-input>
  </form>
</template>

<script>
import formInput from './form-components/formInput.vue';
import formTextArea from './form-components/formTextArea.vue';

export default {
  components: {
    formInput,
    formTextArea,
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
  }
</style>
