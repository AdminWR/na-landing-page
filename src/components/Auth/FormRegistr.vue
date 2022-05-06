<template>
  <div class="container-form__body">
    <form action="" class="auth-registration">
      <label for="name" class="auth-label">Введите имя</label>
      <input type="text" class="auth-input" id="name" />
      <label for="email" class="auth-label">Email*</label>
      <input type="text" class="auth-input" id="email" />
      <label for="password" class="auth-label">Пароль*</label>
      <input type="password" class="auth-input" id="password" />
      <label for="sub-password" class="auth-label">Повторение пароля*</label>
      <input type="password" class="auth-input" id="sub-password" />
      <button class="auth-btn" type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormRegistr",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      service: "",
    };
  },
};
</script>

<style lang="sass">
.auth-registration
  display: flex
  flex-direction: column
  margin-bottom: 24px
.auth
  &-label
    margin-bottom: 6px
    &:last-child
      margin-bottom: none
  &-input, &-btn
    border: 2px solid #000
    border-radius: 50px
    margin-bottom: 12px

    &::last-child
      margin-bottom: none
  &-input
    padding: 6px 12px
  &-btn
    padding: 12px 24px
    margin: auto
</style>