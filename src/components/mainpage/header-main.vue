<template>
  <header class="main-header">
    <router-link  class="main-header__logo btn" to="/">главная</router-link>
  <ul class="main-header__list" >
    <!-- <router-link  class="main-header__link btn" to="/tes">test</router-link> -->
    <router-link  class="main-header__link btn" to="/playlist">мой плейлист</router-link>
    <router-link  class="main-header__link btn" to="/search">Поиск</router-link>
  </ul>
</header>
</template>

<style scoped lang="scss">
$mainColor: #fff;
.main-header {
  @include flex();
  padding: 10px;
  &__list {
      display: flex;
    }
    &__link {
      margin: 0 5px;
      list-style: none;
      color: $mainColor;
      &:hover {
          color: #c3c3c3f2;
        }
    }
    &__logo {
      color: $mainColor;
      &:hover {
          color: #c3c3c3f2;
        }
    }
}
</style>
