<script setup lang="ts"></script>

<template>
  <div>
    <SlideH2> 🤔 The Old Way: Only `stop()` </SlideH2>

    <SlideBody1>
      Previously, `watch` and `watchEffect` returned only a `stop` function to permanently end the
      watcher:
    </SlideBody1>

    <img src="../images/2.png" alt="Code illustration" />

    <SlideBody1 secondary> Once stopped, it couldn't be restarted. </SlideBody1>
  </div>
</template>
