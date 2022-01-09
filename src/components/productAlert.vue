<template>
  <div :class="{'redColor': alertMsg === 'товар удален'}"  class="alert">
    {{alertMsg}}</div>
</template>

<script lang="ts">
export default {
  props: {
    alertMsg: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';
  .alert {
    position: fixed;
    top: 5px;
    left: 50%;
    width: 118px;
    height: 36px;
    background: green;
    color: #fff;
    border-radius: 13px;
    transform: translateX(-50%);
    @include flex(center);
  }
  .redColor {
    background: red;
  }
</style>
