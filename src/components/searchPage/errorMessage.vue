<template>
  <div  class="container">
      <div  class="error">по этому запросу ничего не найдено</div>
    </div>
</template>

<script>
export default {
  name: 'errorMessage'
}
</script>

<style scoped lang="scss">
 .error {
    color: $mainColor;
    margin-top: 20px;
    font-size: 24px;
    text-align: center;;
  }
</style>
