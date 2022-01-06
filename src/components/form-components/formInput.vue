<template>
  <label class="label" for="">{{labelText}}</label>
  <input class="input" :type="typeInput" :placeholder="placeHolder">
</template>

<script>
export default {
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
  },
};
</script>
