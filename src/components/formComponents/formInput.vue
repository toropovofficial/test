<template lang="">
  <div class="mainForm__wrapper">
    <label class="label">{{ labelText }}</label>
    <input
      @input="sendModelValue($event)"
      :type="inputType"
      :placeholder="placeHolder"
      class="input"
      :class="{'error': checkError}"
    />
  </div>
</template>
<script>
export default {
  emits: ['update:modelValue'],
  props: {
    inputType: {
      type: String,
      default: 'text',
      validator(value) {
        if (typeof value === 'string') return true;
        return false;
      },
    },
    placeHolder: {
      type: String,
      default: '',
      validator(value) {
        if (typeof value === 'string') return true;
        return false;
      },
    },
    labelText: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
    },
    formIsValid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      error: this.formIsValid,
    };
  },
  methods: {
    sendModelValue({ target }) {
      this.$emit('update:modelValue', target.value);
    },
  },
  computed: {
    checkError() {
      if (!this.formIsValid) {
        if (!this.modelValue) return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.mainForm__wrapper {
  margin-bottom: 20px;
}
.error {
  border: solid 1px red;
}
</style>
