<template lang="">
  <form @submit.prevent="submitForm" class="mainForm">
    <form-input
      v-model="childName"
      :placeHolder="'Введите имя'"
      :labelText="'afaf'"
      :formIsValid="formIsValid"
    >
    </form-input>
    <form-input
      v-model="childAge"
      :placeHolder="'Введите возраст'"
      :labelText="'afaf'"
      :inputType="'number'"
      :formIsValid="formIsValid"
    >
    </form-input>
    <form-input
      v-model="parentName"
      :placeHolder="'Введите руководителя'"
      :labelText="'afaf'"
      :formIsValid="formIsValid"
    >
    </form-input>
    <formButton></formButton>
  </form>
</template>
<script>
import formInput from './formComponents/formInput.vue';
import formButton from './formComponents/formButton.vue';

export default {
  name: 'appForm',
  components: {
    formInput,
    formButton,
  },
  data() {
    return {
      childName: '',
      childAge: '',
      parentName: '',
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      if (!(this.childName && this.childAge && this.parentName)) this.formIsValid = false;
      else {
        this.$emit('sendFormInfo', {
          childName: this.childName,
          childAge: this.childAge,
          parentName: this.parentName,
        });
      }
    },
  },

};
</script>
<style lang="scss" scoped>
.mainForm {
  width: 500px;
  height: max-content;
  padding: 30px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
}
</style>
