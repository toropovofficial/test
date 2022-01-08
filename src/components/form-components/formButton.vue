<template>
  <button  :class="disabled === 'disabled' ? disabled : ''" class="btn" type="submit" >
    {{btnText}}
  </button>
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
