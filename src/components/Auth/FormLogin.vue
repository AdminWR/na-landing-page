<template>
  <div class="container-form__body">
    <form action="" class="auth-registration">
      <label for="name" class="auth-label">Введите имя</label>
      <input type="text" class="auth-input" id="name" v-model="name" />
      <label for="email" class="auth-label">Email*</label>
      <input
        type="email"
        class="auth-input"
        id="email"
        v-model="email"
        required
      />
      <label for="password" class="auth-label">Пароль*</label>
      <input
        type="password"
        class="auth-input"
        id="password"
        v-model="passMain"
        required
      />
      <label for="sub-password" class="auth-label">Повторение пароля*</label>
      <input
        type="password"
        class="auth-input"
        id="sub-password"
        v-model="passConfirm"
        required
      />
      <button class="auth-btn" type="submit" @click.prevent="onSubmit">
        Зарегистрироваться
      </button>
    </form>
    <MessangeBlock v-show="checkSend"></MessangeBlock>
  </div>
</template>

<script>
export default {
  name: "FormRegistr",
  data() {
    return {
      name: "",
      email: "",
      passMain: "",
      passConfirm: "",
    };
  },
  mounted() {
    this.name = this.email = this.passMain = this.passConfirm = "";
  },
  methods: {
    onSubmit() {
      console.log([this.name, this.email, this.passMain, this.passConfirm]);
    },
  },
  components: { MessangeBlock },
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
    border: 2px solid #fff
    border-radius: 50px
    margin-bottom: 12px

    &::last-child
      margin-bottom: none
  &-input
    padding: 6px 12px
    color: #fff
    outline: none
  &-btn
    padding: 12px 24px
    margin: auto
</style>