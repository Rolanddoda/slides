<template>
  <div class="wrapper">
    <div class="bg bg-blue-950"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate;

  .bg {
    position: absolute;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    z-index: 0;
    border-radius: 12px;
  }

  :slotted(img) {
    z-index: 1;
  }
}
</style>
