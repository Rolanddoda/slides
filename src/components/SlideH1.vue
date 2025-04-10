<template>
  <div>
    <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"><slot></slot></h1>
    <p v-if="$slots['subtitle']" class="text-lg md:text-xl text-center text-gray-600">
      <slot name="subtitle"></slot>
    </p>
  </div>
</template>
