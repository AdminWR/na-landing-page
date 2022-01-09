<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">Хочешь служить в IT-комитете или есть вопросы?</h1>
              <h3 class="font-weight-light mt-3">
                Заполни форму и мы с тобой свяжемся.
              </h3>
              <h3 class="font-weight-light mt-3">
                Также ты можешь написать в телеграм или на почту: 
              </h3>
              <h3 class="font-weight-light mt-3">
                Telegram: <a href="https://telegram.me/an_jin" target="_blank">@an_jin</a>
              </h3>
              <h3 class="font-weight-light">
                Email: <a href="mailto:admin@rko-na.ru">admin@rko-na.ru</a>
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              <contactform />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg"/>
    </div>
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
import contactform from "./ContactForm";

export default {
  components: {
    contactform,
  },
}
</script>