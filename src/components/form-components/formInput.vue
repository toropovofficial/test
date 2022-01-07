<template>
  <label class="label" for="">{{labelText}}</label>
  <input
    @input="change($event)"
    :value="modelValue"
    class="input"
    :type="typeInput"
    :placeholder="placeHolder">
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
