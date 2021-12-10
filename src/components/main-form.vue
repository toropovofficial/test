<template>
  <form action="">
    <input v-model='titleTask' type="text" name="" id="">
    <textarea v-model='descrTask' name="" id="" cols="30" rows="10"></textarea>
    <label for="days">days</label>
    <input v-model="days" type="number" name="days" id="">
    <label for="hours">hours</label>
    <input v-model="hours" type="number" name="hours" id="">
    <label for="minutes">minutes</label>
    <input v-model="minutes" type="minutes" name="minutes" id="">
     <input @click.prevent="addTask" type="submit" value="create">
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'
export default Vue.extend({
  name: 'main-form',
  data: () => ({
    titleTask: '',
    descrTask: '',
    days: 0,
    hours: 0,
    minutes: 0
  }),
  methods: {
    addTask () {
      if (this.titleTask && this.descrTask) {
        const titleTask = this.titleTask
        const descrTask = this.descrTask
        const time = moment().format('hhmmyyyyss')
        const m = moment()
        const status = 'active'
        m.add({
          d: this.days,
          h: this.hours,
          m: this.minutes
        })
        localStorage.setItem(`${titleTask}`, JSON.stringify({
          titleTask,
          descrTask,
          time,
          m,
          status
        }))
      }
    }
  }
})
</script>
