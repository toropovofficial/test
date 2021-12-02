<template>
        <form
          @submit.prevent="getTextInput"
          class="header__form">
            <input v-model="inputValue" type="text">
            <select v-model="selectValue">
              <option >песня</option>
              <option >исполнитель</option>
            </select>
            <button  type="submit" >найти</button>
        </form>
</template>

<script lang="ts">

import Vue from 'vue'
export default Vue.extend({
  name: 'search',
  data: () => ({
    inputValue: '' as string,
    selectValue: 'песня' as string
  }),
  methods: {
    getTextInput (): void {
      if (this.inputValue) {
        this.$emit('sendText', {
          select: this.selectValue,
          value: this.inputValue
        })
      }
      (this.$el as any).reset()
    }
  }
})
</script>

<style scoped lang="scss">
$sizeTitleMobile: 24px;
  .header {
    &__form {
      @include flex(wrap);
      & input {
        @include searchStyles(50%);
      }
      & select {
        @include searchStyles(22%);
      }
      & button {
        @include searchStyles(20%);
      }
    }
  }
</style>
