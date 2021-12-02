<template>
<div>
  <headerMain ></headerMain>
  <div class="container">
    <ul ref="ul"  @click="changeShow" >
      <li ref="list" :class="{'active' : isShow}" >мой плейлист</li>
      <li ref="list" :class="{'active' : !isShow}" >по исполнителям</li>
  </ul>
  <mainTrackList v-if="isShow" :pageTracks="pageTracks"  ></mainTrackList>
  <mainTrackList v-else-if="!isShow" :pageSingers="pageSingers" ></mainTrackList>
  </div>
</div>

</template>

<script lang="ts">
import Vue from 'vue'
import headerMain from '../mainpage/header-main.vue'
import mainTrackList from '../searchPage/main.vue'

export default Vue.extend({
  name: 'playList',
  components: {
    headerMain,
    mainTrackList
  },
  beforeRouteEnter (to, from, next): void {
    console.log('beforeRouteEnter')
    next()
  },
  // beforeRouteUpdate() {
  //   console.log('beforeRouteUpdate');
  // },
  beforeRouteLeave (to, from, next): void {
    console.log('beforeRouteLeave')
    if (prompt('вы точно хотите уйти со страницы? треки будут удалены навсегда')) {
      next()
    }
  },
  // mounted() {
  //   console.log(1);
  // },
  data: () => ({
    isShow: true,
    pageTracks: true,
    pageSingers: true
  }),
  methods: {
    changeShow (item: any): void {
      if (item.target.textContent === 'мой плейлист') {
        this.isShow = true
      } else this.isShow = false
    }
  }
})
</script>

<style scoped lang="scss">
  ul {
    display: flex;
    animation: showTabs 1s;
    li {
    color: $mainColor;
    cursor: pointer;
    position: relative;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  }
  .active {
    &::after {
      @extend %after;
      }
  }

  @keyframes showTabs {
    0% {
      transform: translateX(-3000px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
