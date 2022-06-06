<template>
  <div class="container-form__body">
    <form action="" class="auth-registration" @submit.prevent="login">
      <label for="email" class="auth-label">Email</label>
      <input
        type="email"
        class="auth-input"
        id="email"
        v-model="email"
        required
      />
      <label for="password" class="auth-label">Пароль</label>
      <input
        type="password"
        class="auth-input"
        id="password"
        v-model="passMain"
        required
      />
      <button class="auth-btn" type="submit">Войти</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormRegistr",
  data() {
    return {
      email: "",
      passMain: "",
    };
  },
  mounted() {
    this.name = this.email = this.passMain = this.passConfirm = "";
  },
  methods: {
    login() {
      let email = this.email;
      let password = this.passMain;
      this.$store.dispatch("loginSee", { email, password });
      this.$router.push("/");
    },
  },
  components: {},
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