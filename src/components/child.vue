<template lang="">
  <div v-show="item.isShow"  @click.stop="test($event)"  class="user"  :class="myClass">
    <div  class="user__wrapper">
      <div class="user__age">
        <h2 >{{ item.age }}</h2>
      </div>
      <div class="user__name">
         <h1 >{{ item.name }}{{isChild}}</h1>
      </div>
    </div>
    <template v-if="item.child">
      <component
        v-for="item in item.child"
        :key="item.name"
        :item="item"
        :is="'my-component'"
        :child="true">
      </component>
    </template>
  </div>
</template>
<script>

export default {
  name: 'my-component',
  props: {
    item: {
      type: Object,
    },
    child: {
      type: Boolean,
    },
  },
  methods: {
    test() {
      this.$store.dispatch('IdUser/callChangeId', this.item.id);
    },
  },
  computed: {
    myClass() {
      return this.child ? 'user-child' : 'user-main';
    },
    isChild() {
      return this.item.child ? 'yes' : '';
    },
  },
};
</script>
<style lang="scss" scoped>
  .user {
    &__wrapper {
      display: flex;
      justify-content: flex-start;
      border: solid 1px #000;
      border-left: none;
    }
    &__name {
      width: 50%;
      border-left: solid 1px #000;
    }
    &__age {
      width: 199px;
      border-left: solid 1px #000;
    }
  }
  .user-main {
    width: 400px;
    position: relative;
  }
  .user-child {
    position: relative;
      width: calc(100% - 10px);
     .user__name {
      width: auto;
     }
     .user__age {
       width: 199px;
     }
  }
</style>
