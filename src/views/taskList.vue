<template>
 <div class="div">
   <mainHeader></mainHeader>
   filter <select v-model="select" >
     <option value="all">all</option>
     <option value="active">active</option>
     <option value="expires">expires</option>
     <option value="expired">expired</option>
   </select>
   <div v-if="filterTasks.length"  class="task__wrapper">
     <task @getTitleTask="removeTask" :task="item" v-for="(item) in filterTasks" :key="item.time"></task>
   </div>
   <div v-else-if="!filterTasks.length"  class="empty">list is empty</div>
 </div>
</template>

<script >
import Vue from 'vue'
import mainHeader from '../components/header.vue'
import GeneralTaskList from '../store/modules/generalStore'
import task from '../components/task.vue'
import _ from 'lodash'
export default Vue.extend({
  name: 'taskList',
  components: {
    mainHeader,
    task
  },
  data: () => ({
    select: 'all',
    tasks: []
  }),
  created () {
    GeneralTaskList.setTasks()
    if (GeneralTaskList.state.taskList.length) {
      this.tasks = GeneralTaskList.state.taskList.sort((a, b) => +b.time - +a.time)
    }
  },
  methods: {
    removeTask (title) {
      this.tasks = this.tasks.filter(item => item.titleTask !== title)
      // GeneralTaskList.state.taskList = this.tasks
      GeneralTaskList.setTasks(this.tasks)
    }
  },
  computed: {
    filterTasks () {
      if (this.select === 'all') {
        return this.tasks
      }
      return this.tasks.filter(item => item.status === this.select)
    }
  },

  beforeDestroy () {
    localStorage.clear()
    _.each((this.tasks), (item) => {
      const { titleTask, descrTask, time, m, status } = item
      localStorage.setItem(titleTask, JSON.stringify({
        titleTask,
        descrTask,
        time,
        m,
        status
      }))
    })
  }
})
</script>

<style scoped lang='scss'>
  .task__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .empty {
    width: 50%;
    text-align: center;
    margin: 50px auto;
    font-size: 20px;
    color: red;
  }
</style>
