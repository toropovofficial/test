<template>
<div class="div">
  <mainHeader></mainHeader>
  <form action="">
    <input v-model="title" type="text">
    <textarea v-model="descr"  cols="30" rows="10"></textarea>
    <button @click.prevent="updateTask" >update</button>
  </form>
</div>
</template>

<script >
import Vue from 'vue'
import mainHeader from '../components/header.vue'
import GeneralTaskList from '../store/modules/generalStore'
export default Vue.extend({
  name: 'update',
  components: {
    mainHeader
  },
  data: () => ({
    title: GeneralTaskList.getTaskUpdate()[0],
    descr: GeneralTaskList.getTaskUpdate()[1]
  }),
  methods: {
    updateTask () {
      const [,, time, m, status] = GeneralTaskList.getTaskUpdate()
      localStorage.removeItem(GeneralTaskList.getTaskUpdate()[0])
      const descrTask = this.descr
      const titleTask = this.title
      localStorage.setItem(this.title, JSON.stringify({
        titleTask,
        descrTask,
        time,
        m,
        status
      }))
      this.$router.push('list')
    }
  }
})
</script>
