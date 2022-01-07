<template>
  <button @click='test' :class="disabled === 'disabled' ? disabled : ''" class="btn" type="submit" >
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
  methods: {
    test() {
      console.log(1);
    },
  },
};
</script>
