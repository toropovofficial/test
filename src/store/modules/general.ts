
import GeneralState from '../../interfaces/state'

const generalTrackList = {
  namespaced: true,
  state: {
    responseTrack: [],
    from: 0,
    to: 10,
    total: 50,
    auth: true
  } as GeneralState,
  getters: {
    getResponseTrack: (state: any) => state.responseTrack.slice(state.from, state.to),
    getTotalLength: (state: any) => state.responseTrack.length
  },
  mutations: {
    ADD_OBJ (state: (GeneralState), item: object[]): void {
      state.responseTrack = item
    },
    CHANGE_FROM (state: GeneralState, item: number): void {
      state.from = item
    },
    CHANGE_TO (state: GeneralState, item: number): void {
      state.to = item
    },
    CHANGE_TOTAL (state: GeneralState, item: number): void {
      state.total = item
    }
  },
  actions: {
    changeResponseTrack ({ commit }: any, responseTrack: object[]): void {
      commit('ADD_OBJ', responseTrack)
    },
    setFrom ({ commit }: any, from: number): void {
      commit('CHANGE_FROM', from)
    },
    setTo ({ commit }: any, to: number): void {
      commit('CHANGE_TO', to)
    },
    setTotal ({ commit }: any, total: number): void {
      commit('CHANGE_TOTAL', total)
    }
  }
}

export default generalTrackList
