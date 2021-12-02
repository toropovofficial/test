
import { State, Getter, Mutation, Action } from 'vuex-simple'
class TestModule {
  @State()
  state = {
    data: 'ss'
  }

  @Getter()
  getData (): string {
    return this.state.data
  }

  @Mutation()
  public changeState (item: string): void {
    this.state.data = item
  }

  @Action()
  public show (item: string): void {
    this.changeState(item)
  }
}

export default new TestModule()
