<template>
  <section>
   <div class="container" v-if="!pageTracks && !pageSingers">
      <mainCard
        v-for="(item, index) in getResponseTrack"
        :key="index"
        :track="item"
        :selectValue="selectValue">
      </mainCard>
    </div>
    <div class="container" v-if="pageTracks" >
      <mainCard
        v-for="(item, index) in getLocalStorageValueTrack"
        @removeTrack="deleteItem"
        :key="index"
        :track="item">
      </mainCard>
    </div>
     <div class="container" v-else-if="pageSingers">
       <ul class="tabs">
          <li
            v-for="(item, index) in createArrayNamesSingers"
            :key="index"
            @click="sortSingers(item)"
            :class="{'after' : item === tab}"
            class="tabs__tab btn ">{{item}}
          </li>
       </ul>
      <mainCard
        v-for="(item, index) in getLocalStorageValueSinger"
        @removeTrack="deleteItem"
        v-show="item.artist.name === tab || item.artist === tab "
        :key="index"
        :track="item">
      </mainCard>
    </div>

      <div v-if="getTotalLength" class="pagination">
        <BPagination
          v-model="currentPage"
          :per-page="perPage"
          :total-rows="getTotalLength">
        </BPagination>
      </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import _ from 'lodash'
import mainCard from './main-card.vue'
import { oneArtist } from '../../interfaces/interface'
import { DatAMainTrackList } from '../../interfaces/dataInterfaces'

export default Vue.extend({
  name: 'mainTrackList',
  components: {
    mainCard
  },
  props: {
    selectValue: {
      type: String
    },
    pageTracks: {
      type: Boolean
    },
    pageSingers: {
      type: Boolean
    }
  },
  mounted () {
    this.$store.commit('generalTrackList/CHANGE_FROM', 0)
    this.$store.commit('generalTrackList/CHANGE_TO', 10)
    if (this.getResponseTrack) {
      this.$store.commit('generalTrackList/ADD_OBJ', [])
    }
    const massObjInLocalStorage: (string | null)[] = (_.keys(localStorage)).map((item) => localStorage.getItem(`${item}`))
    _.each(massObjInLocalStorage, (item: (string | null)) => {
      if (item !== 'SILENT' && item !== null) {
        this.result.push(JSON.parse(item))
      }
    })
    const [firstChild] = this.createArrayNamesSingers
    this.tab = firstChild
  },
  data: (): DatAMainTrackList => ({
    tab: '1',
    result: [],
    massDeletedItem: [],
    perPage: 10,
    total: 50,
    currentPage: 1
  }),
  computed: {
    ...mapGetters('generalTrackList', ['getResponseTrack', 'getTotalLength']),
    getLocalStorageValueTrack (): oneArtist[] {
      return _.filter((this.result), (item: oneArtist) => item.id.substr(0, 5) === 'track')
    },
    getLocalStorageValueSinger (): oneArtist[] {
      return _.filter((this.result), (item: oneArtist) => item.id.substr(0, 6) === 'singer')
    },
    createArrayNamesSingers (): string[] {
      const singersArray = _.reduce(this.result, (acc, item: oneArtist) => {
        if (item.id.substr(0, 6) === 'singer') {
          if (typeof item.artist === 'string') {
            acc.push(item.artist)
          } else acc.push(item.artist.name)
        }
        return acc
      }, [])
      return [...new Set(singersArray)].sort()
    }
  },
  methods: {
    deleteItem (value: string): void {
      const index = this.result.findIndex((item: oneArtist) => item.id === value)
      this.massDeletedItem.push(value)
      this.$delete(this.result, index)
    },
    sortSingers (item: string): void {
      this.tab = item
    }
  },
  beforeDestroy (): void {
    _.each((this.massDeletedItem), (item) => {
      localStorage.removeItem(item)
    })
    this.massDeletedItem = []
  },
  watch: {
    currentPage: function chngeFromAndTo (): void {
      this.$store.commit('generalTrackList/CHANGE_TOTAL', this.getTotalLength)
      if ((this.currentPage * this.perPage - this.perPage - 1) === -1) {
        this.$store.commit('generalTrackList/CHANGE_FROM', 0)
        this.$store.commit('generalTrackList/CHANGE_TO', 10)
      } else {
        this.$store.commit('generalTrackList/CHANGE_FROM', (this.currentPage * this.perPage - this.perPage - 1))
        this.$store.commit('generalTrackList/CHANGE_TO', (this.currentPage * this.perPage - this.perPage + 9))
      }
    }
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  @include flex(wrap);
}
.tabs {
  @include flex(wrap);
  margin-bottom: 20px;
  &__tab {
    position: relative;
  }
  &__tab:not(:last-child) {
   margin-right: 20px;
   margin-bottom: 10px;
  }
}
.after {
  &::after {
     @extend %after;
    }
}

</style>
