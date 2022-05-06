<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">
                Хочешь служить в IT-комитете или есть вопросы?
              </h1>
              <h3 class="font-weight-light mt-3">
                Заполни форму и мы с тобой свяжемся.
              </h3>
              <h3 class="font-weight-light mt-3">
                Также ты можешь написать в телеграм или на почту:
              </h3>
              <h3 class="font-weight-light mt-3">
                Telegram:
                <a href="https://telegram.me/an_jin" target="_blank">@an_jin</a>
              </h3>
              <h3 class="font-weight-light">
                Email: <a href="mailto:admin@rko-na.ru">admin@rko-na.ru</a>
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Заполни анкету</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            v-model="name"
                            label="Имя"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="Email*"
                            type="email"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="tel"
                            label="Телефон"
                            type="tel"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea
                            v-model="msg"
                            :rules="msgRules"
                            label="Сообщение*"
                            required
                            auto-grows
                            rows="3"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*Необходимые поля</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      :disabled="!valid"
                      color="primary"
                      rounded
                      block
                      @click="submit"
                    >
                      Отправить
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg" />
    </div>
    <v-snackbar
      v-model="snackbar.enabled"
      timeout="3000"
      right
      top
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.enabled = false">
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>
<script>
// import {db} from '@/main'

export default {
  data() {
    return {
      name: "",
      email: "",
      emailRules: [
        (v) => !!v || "Поле адреса электронной почты является обязательным.",
        (v) =>
          /.+@.+\..+/.test(v) || "Введите корректный адрес электронной почты",
      ],
      tel: "",
      msg: "",
      msgRules: [
        (v) => !!v || "Поле адреса сообщения является обязательным",
        (v) =>
          (v && v.length >= 10) ||
          "Введите хотя бы 10 символов. Например, какое служение Вас заинтересовало.",
      ],
      lazy: false,
      valid: true,
      dialog: false,
      snackbar: {
        enabled: false,
        text: "",
        color: "",
      },
    };
  },
  methods: {
    submit() {
      db.collection("contactData")
        .add({
          name: this.name,
          email: this.email,
          tel: this.tel,
          msg: this.msg,
        })
        .then(() => {
          this.snackbar.text = "Ваша заявка успешно отправлена";
          this.snackbar.color = "success";
          this.snackbar.enabled = true;
        })
        .catch(() => {
          this.snackbar.text =
            "При отправке произошла ошибка. Сообщите об этом администратору сайта или по контактным данным.";
          this.snackbar.color = "danger";
          this.snackbar.enabled = true;
        });
    },
  },
};
</script>