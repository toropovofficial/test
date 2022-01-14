<template>
  <div class="home">
    <div  class="home__table">
      <child v-for="item in listUsers" :key="item.name" :item="item"> </child>
      <button >сохранить</button>
    </div>
    <appForm @sendFormInfo="createdChildUser"  ></appForm>
  </div>
</template>

<script>
import child from '../components/child.vue';
import appForm from '../components/appForm.vue';

export default {
  name: 'Home',
  components: {
    child,
    appForm,
  },
  data() {
    return {
      listUsers: [
        {
          name: 'alex',
          age: 24,
          id: Math.random(),
          isShow: true,
        },
        {
          name: 'alex2',
          age: 25,
          id: Math.random(),
          isShow: true,
        },
        {
          name: 'alex3',
          age: 23,
          id: Math.random(),
          isShow: true,
        },
        {
          name: 'alex4',
          age: 19,
          id: Math.random(),
          isShow: true,
        },
      ],
      parentUser: '',
    };
  },
  created() {
    window.addEventListener('beforeunload', this.addLocalStorageBeforeReboot);
    if (JSON.parse(localStorage.getItem('listUsers'))) this.listUsers = JSON.parse(localStorage.getItem('listUsers'));
  },
  methods: {
    createdChildUser({ childName, childAge, parentName }) {
      this.findParentUser(this.listUsers, 'name', parentName);
      this.addChild(this.parentUser, childName, childAge);
    },
    findParentUser(mainArray, paramForSearch, params) {
      mainArray.forEach((item) => {
        if (item[paramForSearch] === params) this.parentUser = item;
        if (item.child) this.findParentUser(item.child, paramForSearch, params);
      });
    },
    addChild(user, childName, childAge) {
      if (user) {
        if (!user.child) user.child = [];
        user.child.push({
          name: childName,
          age: childAge,
          id: Math.random(),
          isShow: false,
        });
      }
    },
    addLocalStorageBeforeReboot() {
      localStorage.setItem('listUsers', JSON.stringify(this.listUsers));
    },
  },
  computed: {
    test() {
      this.findParentUser(this.listUsers, 'id', this.$store.getters['IdUser/getId']);
      return this.$store.getters['IdUser/getId'];
    },
  },
  watch: {
    test() {
      if (this.parentUser.child) {
        this.parentUser.child.forEach((item) => { item.isShow = !item.isShow; });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
</style>
