<template>
  <label class="label" >{{labelText}}</label>
  <textarea
    @input="change($event)"
    :value="modelValue"
    class="textarea"
    :placeholder="placeHolder">
  </textarea>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    labelText: {
      type: String,
    },
    placeHolder: {
      type: String,
    },
    modelValue: {
      type: String,
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
  label {
    &::after {
      content: none;
    }
  }
</style>
