<template>
  <div class="wrapper mt-2">
    <slot name="bg">
      <div class="bg bg-blue-950"></div>
    </slot>
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

  .bg,
  :slotted(.bg) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: 12px;
  }

  :slotted(img) {
    z-index: 1;
  }
}
</style>
