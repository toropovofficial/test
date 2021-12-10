
import Vue from 'vue'
import { State, Getter, Mutation, Action } from 'vuex-simple'
// import _ from 'lodash'
class GeneralTaskList {
  @State()
  state = {
    taskList: [],
    taskUpdate: ''
  }

  @Getter()
  getTaskList (): string {
    return this.state.taskList
  }

  getTaskUpdate (): string {
    return this.state.taskUpdate
  }

  @Mutation()
  public CHANGE_TASKS (params: any) {
    this.state.taskList = params
  }

  public CHANGE_UPDATE (params: any) {
    this.state.taskUpdate = params
  }

  public CHANGE_DROP (firstTask, indexFirstTask) {
    this.state.taskList.splice(indexFirstTask, 1)
    console.log(firstTask)
    this.state.taskList.push(firstTask)
    this.state.taskList = this.state.taskList.sort((a, b) => +b.time - +a.time)
    console.log(this.state.taskList)
  }

  @Action()
  public setTasks (): void {
    const arrayTasks = []
    _.each((_.keys(localStorage)), (item) => {
      if (item !== 'loglevel:webpack-dev-server') {
        arrayTasks.push(JSON.parse(localStorage.getItem(item)))
      }
    })
    this.CHANGE_TASKS(arrayTasks)
  }

  public setUpdate (...params): void {
    this.CHANGE_UPDATE(params)
  }

  public setDrop (firstTask, indexFirstTask, indexSecondTask): void {
    const time = this.state.taskList[indexSecondTask].time
    this.state.taskList[indexSecondTask].time = firstTask.time
    firstTask.time = time
    this.CHANGE_DROP(firstTask, indexFirstTask)
  }
}

export default new GeneralTaskList()
