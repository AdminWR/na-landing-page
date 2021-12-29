<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-1 mb-3">
                Об IT-комитете
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <ul>
                    <li>
                      <p class="text-justify text-body-1">
                        Мы занимаемся разработкой сервисов, помогающих нам в несении Вести АН, а также поддержкой служащих по вопросам, связанным с IT.
                      </p>
                    </li>
                    <li>
                      <p class="text-justify text-body-1">
                        Наш пилотный проект - база знаний wiki-na.ru. Цель проекта, собрать материалы по всем видам служений в АН в одном месте. 
                      </p>
                    </li>
                    <li>
                      <p class="text-justify text-body-1">
                        Мы запускаем еще несколько проектов, которые, как мы надеемся, помогут нам в служении.
                      </p>
                    </li>
                    <li>
                      <p class="text-justify text-body-1">
                        Рабочие собрания подкомитета проходят каждый четверг в 19-00 по МСК в Zoom-комнате  2101201212 (код доступа 1212). 
                      </p>
                    </li>
                    <li>
                      <p class="text-justify text-body-1">
                        Приходи, ты нам нужен!
                      </p>
                    </li>
                  </ul>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
