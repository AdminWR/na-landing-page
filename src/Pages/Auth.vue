<template>
  <div class="container-form">
    <h1 class="auth-title">Регистрация</h1>
    <FormRegistr />
  </div>
</template>

<script>
import FormRegistr from "../components/Auth/FormRegistr";
export default {
  name: "Auth",
  components: {
    FormRegistr,
  },
};
</script>

<style lang="sass">
.container-form
  max-width: 1110px
  display: flex
  margin: 64px auto 0
  flex-direction: column
  &__body
    width: 500px
</style>