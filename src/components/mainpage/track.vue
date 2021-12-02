<template>
  <div   @click="changeTypeBtn" class="main__track">
      <img class="main__trackWrapper"
      :src="require(`../../assets/img/mainpage/${item}`)"   alt="background">
      <img class="main__btnControls"
      v-if="type" src="../../assets/img/mainpage/play.png"  alt="play">
      <img class="main__btnControls"
      v-if="!type" src="../../assets/img/mainpage/stop.png" alt="stop">
        <audio ref="audio" >
          <source :src="require(`../../assets/track${index + 1}.mp3`)">
          <p>Ваш браузер не поддерживает аудио</p>
      </audio>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TRACKLIST',
  props: {
    item: {
      type: String
    },
    index: {
      type: Number
    }
  },
  data: () => ({
    type: true
  }),
  methods: {
    changeTypeBtn (): void {
      if (this.type && this.$refs !== undefined) {
        (this as any).$refs.audio.play()
      } else (this as any).$refs.audio.pause()
      this.$emit('getIndex', this.index)
      this.type = !this.type
    }
  }
})
</script>

<style scoped lang="scss">
.main {
  &__track {
    @include size(200px, 200px);
    border-radius: 20%;
    border: 1px solid #919191;
    cursor: pointer;
    @include flex(wrap, center);
    align-items: center;
    overflow: hidden;
  }
  &__track:not(:last-child) {
    margin-right: 20px;
    margin-bottom: 20px;
  }
  &__trackWrapper {
      border-radius: 20%;
      width: 100%;
      transition: transform 0.2s ease-in;
      &:hover {
        transition: transform 0.2s ease-in;
        transform: scale(1.2);
      }
  }
  &__btnControls {
      width: 40px;
      position: absolute;
    }
}

@media (max-width: 1200px) {
  .main {
    &__track {
      @include size(150px, 150px);
    }
  }
}

@media (max-width: 500px) {
  .main {
    &__track {
      @include size(120px, 120px);
    }
  }
}
</style>
