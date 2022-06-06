<template>
  <section class="for-bg">
    <div class="container-form">
      <h1 class="login-title">Войти в личный кабинет</h1>
      <FormLogin />
    </div>
  </section>
</template>

<script>
import FormLogin from "../components/Auth/FormLogin.vue";
export default {
  name: "Login",
  components: {
    FormLogin,
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
.login
  &-title
    text-align: center
    margin-bottom: 12px
</style>