<template>
  <div class="topchart__item">
         <img class="topchart__image" :src="require(`../../assets/img/mainpage/${item}.jpg`)"
         alt="genre">
         <h2 class="topchart__title">{{item}}</h2>
          </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'genreList',
  props: {
    item: {
    }
  }
})
</script>

 <style scoped lang="scss">
  .topchart__item {
    cursor: pointer;
    margin-right: 40px;
    transition: transform 0.5s ease-in;
    &:hover {
      transition: transform 0.5s ease-in;
      transform: scale(1.2);
    }
  }
  .topchart__image {
    @include size(200px, 200px);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    border: solid 1px #919191;
    border-radius: 10%;
    padding: 10px;
    background-position: center;
    background-size: cover;
    transition: all 1.2s ease;
  }
  .topchart__title {
    color: $mainColor;
  }

@media (max-width: 500px) {
    .topchart__item {
      margin-right: 25px;
    }
    .topchart__image {
      @include size(120px, 120px);
    }
}
</style>
