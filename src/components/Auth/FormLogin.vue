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
      <transition name="slide-fade">
        <MessageError v-if="!$v.email.required"> Введите e-mail.</MessageError>
        <MessageError v-else-if="!$v.email.email">
          Введите корретный e-mail.</MessageError
        >
      </transition>
      <label for="password" class="auth-label">Пароль</label>
      <input
        type="password"
        class="auth-input"
        id="password"
        v-model="passMain"
        required
      />
      <transition name="slide-fade">
        <MessageError v-show="!$v.passMain.required">
          Введите пароль
        </MessageError>
      </transition>
      <button class="auth-btn" type="submit" :disabled="$v.$invalid">
        Войти
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { email, required } from "vuelidate/lib/validators";
import MessageError from "../Messange/MessageError.vue";
export default {
  name: "FormRegistr",
  data() {
    return {
      email: "",
      passMain: "",
    };
  },
  validations: {
    email: { email, required },
    passMain: { required },
  },
  methods: {
    ...mapState(["isLogin"]),
    login() {
      let onLogin = {
        email: this.email,
        password: this.passMain,
      };
      this.$store.dispatch("loginSee", onLogin);
      this.$router.push("/");
    },
  },
  components: {
    MessageError,
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

    &:disabled
      opacity: .5
</style>