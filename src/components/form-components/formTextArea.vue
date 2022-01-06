<template>
  <label class="label" for="">{{labelText}}</label>
  <textarea class="textarea" :placeholder="placeHolder" cols="30" rows="10"></textarea>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
    },
    placeHolder: {
      type: String,
    },
  },
};
</script>
