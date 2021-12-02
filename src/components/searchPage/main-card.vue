<template  >
  <article v-if="selectValue === 'песня'"  class="card-custom">
    <div class="card-custom__wrapper">
      <div class="card-custom__title">
      <h2 v-if=" typeof track.artist === 'object'" >{{track.artist.name}}</h2>
      <h2 v-else >{{track.artist}}</h2>
    </div>
    <div class="card-custom__subtitle">
      <p>{{track.name}}</p>
    </div>
    </div>
    <div class="div">
      <button @click="openModalBtn()"
       class="card-custom__button btn">{{buttonValue}}</button>
       <div class="card-custom__btnWrapper">
         <button class="card-custom__button btn"  @click="addTrack" v-if="isModal" >в папку</button>
        <button class="card-custom__button btn"
         @click="addTrack('в плейлист')" v-if="isModal" >в плейлист</button>
       </div>
    </div>
  </article>
   <article v-else-if="selectValue === 'исполнитель'"  class="card-custom">
    <div class="card-custom__wrapper">
      <div class="card-custom__title">
      <h2 v-if=" typeof track.artist === 'object'" >{{track.artist.name}}</h2>
      <h2 v-else >{{track.artist}}</h2>
    </div>
    <div class="card-custom__subtitle">
      <p>{{track.name}}</p>
    </div>
    </div>
    <div>
      <button @click="openModalBtn()"
        class="card-custom__button btn" >{{buttonValue}}</button>
        <div class="card-custom__btnWrapper">
           <button class="card-custom__button btn"
           @click="addTrack" v-if="isModal" >в папку</button>
          <button class="card-custom__button btn"
          @click="addTrack('в плейлист')" v-if="isModal" >в плейлист</button>
        </div>
    </div>
  </article>
  <article  v-else class="card-custom" >
     <div class="card-custom__wrapper">
        <div class="card-custom__title">
      <h2 v-if=" typeof track.artist === 'object'" >{{track.artist.name}}</h2>
      <h2 v-else >{{track.artist}}</h2>
    </div>
    <div class="card-custom__subtitle">
      <p>{{track.name}}</p>
    </div>
     </div>

       <button @click="removeTrack(track)"
       class="card-custom__button btn" >удалить</button>

    </article>
</template>

<script lang='ts'>
import Vue from 'vue'
import moment from 'moment'
import { DataMainCard } from '../../interfaces/dataInterfaces'

export default Vue.extend({
  name: 'mainCard',
  props: {
    track: {
      type: Object,
      default: () => ({})
    },
    selectValue: {
      type: [String, Number]
    }
  },
  data: (): DataMainCard => ({
    buttonValue: 'добавить',
    isModal: false
  }),
  methods: {
    openModalBtn (): void {
      this.isModal = true
    },
    addTrack (item: string): void {
      const { name, artist, mbid } = this.track
      let id = ''
      if (item === 'в плейлист') {
        id = `track${moment().millisecond()}`
      } else {
        id = `singer${moment().millisecond()}`
      }
      localStorage.setItem(id, JSON.stringify({
        name,
        artist,
        mbid,
        id
      }))
      this.isModal = false
      this.buttonValue = 'добавлено'
    },
    removeTrack (): void {
      this.$emit('removeTrack', this.track.id)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-custom {
  @include flex();
  flex-direction: row;
  @extend %cardColor;
  padding: 20px;
  color: $mainColor;
  border-radius: 15%;
  width: 45%;
  max-height: 180px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &__img {
    @include size(50px, 50px);
    & img {
      width: 100%;
    }
  }
  &__button {
    @include size(200px, 50px);
  }
  &__btnWrapper {
    @include flex();
    align-items: center;
    margin-top: 5px;
    font-size: 14px;
    .card-custom__button {
      &:nth-child(1) {
      width: 90px;
    }
    &:nth-child(2) {
      width: 90px;
      line-height: 1;
    }
    }
  }

}
@media (max-width: 991px) {
  .card-custom  {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .card-custom  {
    padding: 10px;
    &__button {
      @include size(130px, 40px);
    }
    &__btnWrapper{
      .card-custom__button {
        &:nth-child(1) {
          @include size(60px, 35px);
          font-size: 11px;
        }
        &:nth-child(2) {
           @include size(60px, 35px);
          font-size: 11px;
        }
      }
    }
  }
}
</style>
