<template>
<div>
  <headerMain></headerMain>
   <div class="container">
     <search @sendText="getTextInput"  ></search>
      <topChart :list="genreList"  @getTrackList='changeSelect' ></topChart>
   </div>
   <mainTrackList  :selectValue="selectValue" ></mainTrackList>
    <loader v-if="showLoader" ></loader>
    <errorMessage v-if="isEmpty"></errorMessage>

</div>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import axios from '../../plugins/axios'
import headerMain from '../mainpage/header-main.vue'
import search from './seacrh.vue'
import mainTrackList from './main.vue'
import loader from './preloader.vue'
import topChart from './topchart.vue'
import errorMessage from './errorMessage.vue'
import { inputAndSelectValue } from '../../interfaces/interface'
import { DataSearchPage } from '../../interfaces/dataInterfaces'

export default Vue.extend({
  name: 'searchPage',
  components: {
    headerMain,
    search,
    mainTrackList,
    loader,
    topChart,
    errorMessage
  },
  data: (): DataSearchPage => ({
    inputText: {
      select: '',
      value: ''
    },
    selectValue: 'песня',
    showLoader: 0,
    genreList: ['pop', 'rock', 'jazz', 'rap'],
    isEmpty: false
  }),
  methods: {
    ...mapActions('generalTrackList', ['changeResponseTrack']),
    getTextInput (value: inputAndSelectValue): void {
      this.inputText = value
    },
    setValue (): void {
      this.selectValue = this.inputText.select
      if (this.selectValue === 'песня') {
        this.showLoader = 1
        axios
          .get(`?method=track.search&track=${this.inputText.value}&format=json`)
          .then((response) => {
            this.changeResponseTrack(response.data.results.trackmatches.track)
            this.showLoader = 0
            if (response.data.results.trackmatches.track.length > 1) {
              this.isEmpty = false
            } else this.isEmpty = true
          })
          .catch((error) => {
            console.log(error)
            this.showLoader = 0
          })
      } else if (this.selectValue === 'исполнитель') {
        this.showLoader = 1
        axios
          .get(`?method=artist.gettoptracks&artist=${this.inputText.value}&format=json`)
          .then((response) => {
            this.changeResponseTrack(response.data.toptracks.track, 1)
            this.showLoader = 0
            if (response.data.toptracks.track.length > 1) {
              this.isEmpty = false
            } else this.isEmpty = true
          })
          .catch((error) => {
            console.log(error)
            this.changeResponseTrack([])
            this.isEmpty = true
            this.showLoader = 0
          })
      }
    },
    changeSelect (value: string, list: object[]): void {
      if (!list) {
        this.changeResponseTrack(value)
        this.isEmpty = false
        this.selectValue = 'исполнитель'
      }
    }
  },
  watch: {
    inputText: 'setValue'
  }
})
</script>
