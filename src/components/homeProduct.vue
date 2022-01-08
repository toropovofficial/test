<template>
  <article class="product">
    <picture class="product__img">
      <img src="../assets/image/img.jpg" alt="">
    </picture>
    <div class="product__body">
      <h1 class="product__title">{{item.name}}</h1>
    <p v-if="item.descr !== ''" class="product__descr">{{item.descr}}</p>
    <span class="product__price">{{item.price}}.руб</span>
    </div>
    <div @click="getIdForDelete" class="product__delete">
      <picture >
      <img src="../assets/image/delete-icon.svg" alt="">
    </picture>
    </div>
  </article>
</template>

<script>
export default {
  emits: ['sendId'],
  props: {
    item: {},
  },
  methods: {
    getIdForDelete() {
      this.$emit('sendId', this.item.id);
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/styles.scss';
  .product {
    position: relative;
    width: 332px;
    height: 423px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      box-shadow: 16px 51px 62px rgb(0 0 0 / 9%), 15px 16px 20px rgb(0 0 0 / 9%);
    }
    &__img {
      width: 100%;
      max-height: 200px;
      & img {
        width: 100%;
        max-height: 100%;
      }
    }
    &__body {
      padding: 0 16px;
    }
    &__title {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: $mainColor;
      margin-top: 16px;
    }
    &__descr {
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: $mainColor;
      margin-top: 16px;
      word-wrap: break-word;
    }
    &__price {
      font-weight: 600;
      font-size: 24px;
      color: $mainColor;
      display: block;
      margin-top: 32px;
    }
    &__delete {
      @include flex(center);
      position: absolute;
      top: -8px;
      right: -8px;
      width: 32px;
      height: 32px;
      background: #FF8484;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      display: none;
    }
    &:hover {
      .product__delete {
        display: flex;
      }
    }
  }
</style>
