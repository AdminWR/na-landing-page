<template>
  <div class="mesange-block">
    <p class="mesange-text">
      <slot></slot>
    </p>
  </div>
</template>

<style lang="sass">
.mesange
  &-block
    color: #fff
    background-color: green
    padding: 12px
    border-radius: 5px
    display: flex
    align-items: center
    &-text
      padding: 0
      margin: 0 !important
      font-size: 20px
      font-style: italic
</style>