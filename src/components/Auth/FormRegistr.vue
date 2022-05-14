<template>
  <div class="container-form__body">
    <form action="" class="auth-registration" @submit.prevent="onSubmit">
      <label for="name" class="auth-label">Введите имя</label>
      <input type="text" class="auth-input" id="name" v-model="nameUser" />
      <label for="email" class="auth-label">Email*</label>
      <input
        type="email"
        class="auth-input"
        id="email"
        v-model="email"
        required
      />
      <transition name="slide-fade">
        <MessageError v-show="errorCheck === 1">
          Введите электронную почту, пожалуйста.
        </MessageError>
      </transition>
      <label for="password" class="auth-label">Пароль*</label>
      <input
        type="password"
        class="auth-input"
        id="password"
        v-model="passMain"
        required
      />
      <transition name="slide-fade">
        <MessageError v-show="errorCheck === 3">
          Пароль не должен быть меньше {{ lengthPassMax }}
        </MessageError>
      </transition>
      <label for="sub-password" class="auth-label">Повторение пароля*</label>
      <input
        type="password"
        class="auth-input"
        id="sub-password"
        v-model="passConfirm"
        required
      />
      <transition name="slide-fade">
        <MessageError v-show="errorCheck === 2">
          Пароли должны совпадать.
        </MessageError>
      </transition>
      <button class="auth-btn" type="submit" :disabled="errorCheck > 0">
        Зарегистрироваться
      </button>
    </form>
    <transition name="slide-fade">
      <MessangeBlock v-show="checkSend"
        >Спасибо, регистрация прошла успешно.</MessangeBlock
      >
    </transition>
  </div>
</template>

<script>
import MessangeBlock from "../Messange/MessangeBlock.vue";
import MessageError from "../Messange/MessageError.vue";
export default {
  name: "FormRegistr",
  data() {
    return {
      nameUser: "Аноним",
      email: null,
      passMain: null,
      passConfirm: null,
      checkSend: false,
      errorCheck: 0,
      lengthPassMax: 6,
    };
  },
  mounted() {
    this.errorCheck = 0;
  },
  watch: {
    passConfirm: "checkEquality",
    email: "checkEqualityMail",
    passMain: "checkEquality",
  },
  methods: {
    onSubmit() {
      this.checkSend = true;
      setTimeout(() => {
        this.checkSend = false;
        this.errorCheck = 0;
      }, 5000);
      this.nameUser = this.email = this.passMain = this.passConfirm = "";
    },
    checkEquality() {
      if (this.passMain !== this.passConfirm) {
        this.errorCheck = 2;
      } else {
        this.errorCheck = 0;
      }
      if (this.passMain.length < this.lengthPassMax) {
        this.errorCheck = 3;
      } else {
        this.errorCheck = 0;
      }
    },
    checkEqualityMail() {
      if (this.email === "") {
        this.errorCheck = 1;
      } else {
        this.errorCheck = 0;
      }
    },
  },
  components: { MessangeBlock, MessageError },
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
.slide-fade-enter-active
  transition: all .3s ease

.slide-fade-leave-active
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateY(10px)
  opacity: 0
</style>