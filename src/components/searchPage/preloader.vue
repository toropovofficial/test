<template>
<div class="loader">
    <div class="lds-hourglass"></div>
</div>

</template>

<style scoped lang="scss">
.loader {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}
.lds-hourglass {
  display: inline-block;
  position: relative;
  @include size(120px, 120px);
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  @include size(0px, 0px);
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
