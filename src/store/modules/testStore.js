import {
  State, Getter, Mutation, Action,
} from 'vuex-simple';

export default class ModalStore {
  @State()
    id = false

  @Getter()
  get getId() {
    return this.id;
  }

  @Mutation()
  changeId(id) {
    this.id = id;
  }

  @Action()
  callChangeId(id) {
    this.changeId(id);
  }
}
