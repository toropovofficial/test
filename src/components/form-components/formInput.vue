<template>
<div class="input__wrapper">
  <label v-if="labelText" class="label" for="">{{labelText}}</label>
  <input
    @input="change($event)"
    :value="modelValue"
    class="input"
    :class="{'error': !modelValue.length && errorMsg !== ''}"
    :type="typeInput"
    :placeholder="placeHolder">
    <span v-if="errorMsg !== '' && !modelValue.length" class="error-msg">{{errorMsg}}</span>
</div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    labelText: {
      type: String,
    },
    typeInput: {
      type: String,
      default: 'text',
    },
    placeHolder: {
      type: String,
    },
    modelValue: {
      type: String,
      default: '',
    },
    errorMsg: {
      type: String,
      default: '',
    },
  },
  methods: {
    change({ target }) {
      this.$emit('update:modelValue', target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input__wrapper {
  position: relative;
}
.error {
  border: 1px solid #FF8484;
}
.error-msg {
  position: absolute;
  left: 0;
  bottom: 0;
  font-weight: normal;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #FF8484;
}
</style>
