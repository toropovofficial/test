<template>
<div>
  <button  :class="disabled === 'disabled' ? disabled : ''" class="btn " type="submit" >
    {{btnText}}
  </button>
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

</style>
