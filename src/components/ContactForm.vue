<template>
  <section id="contactform">
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
                  :rules="nameRules"
                  label="Имя"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email*"
                  type="email"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="tel"
                  :rules="telRules"
                  label="Телефон"
                  type="tel"
                  required
                />
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
          <v-spacer />
          <v-btn
            :disabled="!valid"
            color="blue darken-1"
            text
            @click="submit"
          >
            Отправить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>

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
import axios from 'axios';

export default {
    data() {
        return {
            name: "",
            nameRules: [
              (v) => !!v || "Введите своё или вымышленное имя",
            ],
            email: "",
            emailRules: [
                (v) => !!v || "Поле адреса электронной почты является обязательным.",
                (v) => /.+@.+\..+/.test(v) || "Введите корректный адрес электронной почты",
            ],
            tel: "",
            telRules: [
                (v) => !!v || "Необходимо ввести номер телефона",
                (v) => (v && v.length >= 11) || "Введите корректный номер телефона",
            ],
            msg: "",
            msgRules: [
                (v) => !!v || "Сообщение является обязательным. Например, напишите какое служение Вас заинтересовало?",
                (v) => (v && v.length >= 10) || "Введите хотя бы 10 символов. Например, какое служение Вас заинтересовало.",
            ],
            lazy: false,
            valid: true,
            snackbar: {
                enabled: false,
                text: '',
                color: ''
            },
        }    
    },
    props: {
      serviceTitle: String
    },
    methods: {
        submit() {
            axios.post('https://api.na-promo.ru/api/forms',{
                name: this.name,
                email: this.email,
                tel: this.tel,
                msg: this.msg,
                title: this.serviceTitle,
            }).then(() => {
                this.snackbar.text = "Ваша заявка успешно отправлена"
                this.snackbar.color = "success"
                this.snackbar.enabled = true
                this.$refs.form.reset()
                this.$emit('success');
            }).catch(() => {
                this.snackbar.text = "При отправке произошла ошибка. Сообщите об этом администратору сайта или по контактным данным."
                this.snackbar.color = "danger"
                this.snackbar.enabled = true
            })
        }
    }
}
</script>