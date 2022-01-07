<template>
  <article class="product">
    <picture class="product__img">
      <img src="../assets/image/img.jpg" alt="">
    </picture>
    <div class="product__body">
      <h1 class="product__title">Наименование товара</h1>
    <p class="product__descr">Довольно-таки интересное описание товара в несколько строк.
      Довольно-таки интересное описание товара в несколько строк
      </p>
    <span class="product__price">10 000 руб.</span>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '../assets/scss/styles.scss';
  .product {
    width: 332px;
    height: 423px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
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
    }
    &__price {
      font-weight: 600;
      font-size: 24px;
      color: $mainColor;
      display: block;
      margin-top: 32px;
    }
  }
</style>
