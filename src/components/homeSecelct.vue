<template>
  <select  @change="changeValue($event)">
    <option value="default">По умолчанию</option>
    <option value="min">По цене min</option>
    <option value="max">По цене max</option>
    <option value="names">По имени</option>
    <input type="text">
  </select>
</template>
<script lang="ts">
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
    },
  },
  methods: {
    changeValue({ target }: any): void {
      this.$emit('update:modelValue', target.value);
    },
  },
};
</script>

<style scoped lang="scss">
  select {
    width: 121.49px;
    height: 36px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 10px 16px;
    font-weight: normal;
    font-size: 12px;
    color: #B4B4B4;
    background: url('../assets/image/select-arrow.svg') no-repeat 93% ;
    -webkit-appearance: none;
    cursor: pointer;
  }
</style>
