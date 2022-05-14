<template>
  <div class="messange-error">
    <p class="messange-text">
      <slot></slot>
    </p>
  </div>
</template>

<style lang="sass">
.messange
    &-error
        background-color: #ff7f50
        padding: 12px
        border-radius: 5px
        margin-bottom: 12px
    &-text
        margin: 0 !important
</style>