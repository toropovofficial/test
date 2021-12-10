<template>
  <div
  @dragstart="onDragStart($event)"
  @dragover.prevent
  @dragenter.prevent
  @drop.prevent="onDragEnd($event)"
  draggable="true"
  class="task">
    <h1 class="task__title">
      {{task.titleTask}}
    </h1>
     <p class="task__descr">
       {{task.descrTask}}
     </p>
     <span :class="task.status" >{{time || task.status}}</span>
     <div class="task__footer">
       <button @click="getTitleForRemove" >delete</button>
       <button @click="clickUpdate" >update</button>
     </div>
  </div>
</template>

<script >
import Vue from 'vue'
import GeneralTaskList from '../store/modules/generalStore'
import _ from 'lodash'
import moment from 'moment'
import 'moment-duration-format'
export default Vue.extend({
  name: 'task',
  props: {
    task: {
      // type: Object
    }
  },
  data: () => ({
    time: ''
  }),
  mounted () {
    if (this.task.status !== 'expired') {
      const interval = setInterval(() => {
        const date1 = moment()
        const date2 = moment(this.task.m)
        const seconds = date2.diff(date1, 'seconds')
        const duration = moment.duration(seconds, 'seconds')
        this.time = duration.format('DD:hh:mm:ss')
        if (this.time.split(':').join('') < 0) {
          console.log('dkiwNJdOIdnWOjd')
          this.time = 'expired'
          this.task.status = 'expired'
          clearInterval(interval)
        } else if (this.time.split(':').join('') < 999) {
          this.task.status = 'expires'
        }
      }, 1000)
    }
  },
  methods: {
    getTitleForRemove () {
      this.$emit('getTitleTask', this.task.titleTask)
    },
    onDragStart (e) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('id', JSON.stringify(this.task))
    },
    onDragEnd (e) {
      const firstTask = JSON.parse(e.dataTransfer.getData('id'))
      const indexFirstTask = _.findIndex((GeneralTaskList.state.taskList), (item) => item.m === firstTask.m)
      _.some((GeneralTaskList.state.taskList), (item, index) => {
        if (item.time === this.task.time) {
          const indexSecondTask = index
          GeneralTaskList.setDrop(firstTask, indexFirstTask, indexSecondTask)
          return true
        }
      })
    },
    clickUpdate () {
      GeneralTaskList.setUpdate(this.task.titleTask, this.task.descrTask, this.task.time, this.task.m, this.task.status)
      this.$router.push('update')
    }
  },
  watch: {
    task: function (params) {
      if (this.task.status !== 'expired') {
        const interval = setInterval(() => {
          const date1 = moment()
          const date2 = moment(this.task.m)
          const seconds = date2.diff(date1, 'seconds')
          const duration = moment.duration(seconds, 'seconds')
          this.time = duration.format('DD:hh:mm:ss')
          if (this.time.split(':').join('') < 0) {
            console.log('dkiwNJdOIdnWOjd')
            this.time = 'expired'
            this.task.status = 'expired'
            clearInterval(interval)
          } else if (this.time.split(':').join('') < 999) {
            this.task.status = 'expires'
          }
        }, 1000)
      }
    }
  }
})
</script>

<style scoped lang="scss">
  .task {
    width: 400px;
    min-height: 200px;
    border: solid 1px grey;
    padding: 10px;
    position: relative;
    background: #101010;
    &__title {
      text-align: center;
    }
    &__descr {
      margin-top: 10px;
    }
    &__footer {
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
