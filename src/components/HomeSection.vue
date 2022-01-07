<template>
  <section id="home">
    <v-parallax dark src="@/assets/img/bgHome.jpg" height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">IT комитет региона <br> "Западная Россия"</h1>
              <h1 class="font-weight-light">Ищет служащих!</h1>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#features')"
                class="mt-5"
              >
                Узнать больше
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
    </v-parallax>

    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card 
                  @click.stop="dialog = true"
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>

                  <ul>
                    <li v-for="(require,j) in feature.requires" :key="j" class="font-weight-regular subtitle-1 text-left">
                      {{ require }}
                    </li>
                  </ul>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <div class="svg-border-waves">
      <img src="~@/assets/img/wave2.svg" />
    </div>

    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
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
              color="blue darken-1"
              text
              @click="submitModal"
            >
              Отправить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>

    <v-snackbar
      v-model="snackbar.enabled"
      timeout="3000"
      right
      top
      :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar.enabled = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script>
import {db} from '@/main'

export default {
  data() {
    return {
      name: "",
      email: "",
      emailRules: [
        (v) => !!v || "Поле адреса электронной почты является обязательным.",
        (v) => /.+@.+\..+/.test(v) || "Введите корректный адрес электронной почты",
      ],
      tel: "",
      msg: "",
      msgRules: [
        (v) => !!v || "Сообщение является обязательным. Например, напишите какое служение Вас заинтересовало?",
        (v) => (v && v.length >= 10) || "Введите хотя бы 10 символов. Например, какое служение Вас заинтересовало.",
      ],
      lazy: false,
      valid: true,
      dialog: false,
      snackbar: {
        enabled: false,
        text: '',
        color: ''
      },
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Редактор сайта",
          requires: [
            "От 1 года ЧВ", 
            "Уверенный пользователь ПК", 
            "Понимание структуры Сообщества АН"
          ],
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "Разработчик Back-end",
          requires: [
            "От 1 года ЧВ", 
            "Знание PHP", 
            "Желательно понимание работы одного или нескольких фреймворков: YII2, Laravel, Simfony"
          ],
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "Разработчик Front-end",
          requires: [
            "От 1 года ЧВ", 
            "Знание HTML/CSS", 
            "Желательно навык работы с js-фреймворками (Vue.js, React, Angular)"
          ],
        },
      ],
    };
  },
  methods: {
    submit() {
      db.collection("contactData").add({
        name: this.name,
        email: this.email,
        tel: this.tel,
        msg: this.msg,
      }).then(() => {
        this.snackbar.text = "Ваша заявка успешно отправлена"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
        this.$refs.form.reset()
      }).catch(() => {
        this.snackbar.text = "При отправке произошла ошибка. Сообщите об этом администратору сайта или по контактным данным."
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      })
    },
    submitModal() {
      this.dialog = false;
      this.submit();
    }
  }
};
</script>

<style>
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#home {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
