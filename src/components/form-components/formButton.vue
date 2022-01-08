<template>
<div>
  <button  :class="disabled === 'disabled' ? disabled : ''" class="btn " type="submit" >
    {{btnText}}
  </button>
  <picture @click="this.$emit('clickClear')" v-if="disabled !== 'disabled'">
    <img src="../../assets/image/clear.png" alt="">
  </picture>
</div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
    },
    disabled: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
}
picture {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 20px;
  top: 50%;
  transform: translateY(-30%);
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
  }
}
</style>
