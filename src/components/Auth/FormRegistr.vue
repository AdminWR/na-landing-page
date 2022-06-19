<template>
  <div class="container-form__body">
    <form action="" class="auth-registration" @submit.prevent="onSubmit">
      <label for="name" class="auth-label">Введите имя</label>
      <input type="text" class="auth-input" id="name" v-model="nameUser" />
      <label for="email" class="auth-label">Email*</label>
      <input type="email" class="auth-input" id="email" v-model.trim="email" />
      <transition name="slide-fade">
        <MessageError v-if="$v.email.$dirty && !$v.email.required">
          Введите электронную почту, пожалуйста.
        </MessageError>
        <MessageError v-else-if="$v.email.$dirty && !$v.email.email">
          Введите корерктный электронный адрес.
        </MessageError>
      </transition>
      <label for="password" class="auth-label">Пароль*</label>
      <input
        type="password"
        class="auth-input"
        id="password"
        v-model="passMain"
      />
      <transition name="slide-fade">
        <MessageError v-if="$v.passMain.$dirty && $v.passMain.required">
          Введите пароль, пожалуйста.
        </MessageError>
        <MessageError v-else-if="$v.passMain.$dirty && $v.passMain.minLength">
          Пароль не должен быть меньше
          {{ $v.passMain.$params.minLength.min }} символов, сейчас
          {{ passMain.length }} символов.
        </MessageError>
      </transition>
      <label for="sub-password" class="auth-label">Повторение пароля*</label>
      <input
        type="password"
        class="auth-input"
        id="sub-password"
        v-model="passConfirm"
      />
      <transition name="slide-fade">
        <MessageError v-show="errorCheck === 1">
          Пароли должны совпадать.
        </MessageError>
      </transition>
      <button class="auth-btn" type="submit" :disabled="$v.$invalid">
        Зарегистрироваться
      </button>
    </form>
    <transition name="slide-fade">
      <MessangeBlock v-show="checkSend"
        >Спасибо, регистрация прошла успешно. Сейчас Вас перенаправят на
        страницу входа.</MessangeBlock
      >
    </transition>
  </div>
</template>

<script>
import MessangeBlock from "../Messange/MessangeBlock.vue";
import MessageError from "../Messange/MessageError.vue";
import { mapGetters, mapActions } from "vuex";
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  name: "FormRegistr",
  data() {
    return {
      nameUser: "Аноним",
      email: "",
      passMain: "",
      passConfirm: "",
      checkSend: false,
      errorCheck: 0,
    };
  },
  validations: {
    email: { email, required },
    passMain: { required, minLength: minLength(6) },
    passConfirm: { required },
  },
  watch: {
    passConfirm: "checkEqualityPass",
  },
  methods: {
    ...mapActions(["register"]),
    onSubmit() {
      this.checkSend = true;
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      setTimeout(() => {
        this.$router.push("/login");
        this.checkSend = false;
      }, 5000);
      const data = {
        name: this.nameUser,
        email: this.email,
        password: this.passMain,
      };
      this.register(data);
      this.nameUser = this.email = this.passMain = this.passConfirm = "";
    },
    checkEqualityPass() {
      if (this.passMain !== this.passConfirm) {
        this.errorCheck = 1;
      } else {
        this.errorCheck = 0;
      }
    },
  },
  computed: mapGetters["fullUser"],
  components: {
    MessangeBlock,
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