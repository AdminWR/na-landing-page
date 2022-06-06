<template>
  <section class="for-bg">
    <div class="container-form">
      <h1 class="auth-title">Регистрация</h1>
      <FormRegistr />
    </div>
  </section>
</template>

<script>
import FormRegistr from "../components/Auth/FormRegistr";
export default {
  name: "Registration",
  components: {
    FormRegistr,
  },
};
</script>

<style lang="sass">
.for-bg
  background-image: url('../assets/img/bgDrawer.jpg')
  display: flex
  min-height: 100vh
  background-position: center
  align-items: center
  margin-bottom: -54px
.container-form
  color: #fff
  max-width: 1110px
  display: flex
  margin: 64px auto 0
  flex-direction: column
  &__body
    width: 500px
.auth
  &-title
    text-align: center
    margin-bottom: 12px
</style>