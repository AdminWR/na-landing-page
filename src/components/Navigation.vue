<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <router-link to="/">
              <v-img src="@/assets/img/NA-logo-square.png" alt="Logo" />
            </router-link>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">IT комитет</v-list-item-title>
            <v-list-item-subtitle>"Западная Россия"</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <!-- <v-btn > -->
        <router-link to="/">
          <v-img
            src="@/assets/img/NA-logo-square.png"
            max-width="50px"
            @click="$vuetify.goTo('#home')"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <router-link to="/registration"
          ><v-btn text>
            <span class="mr-2">Регистрация</span>
          </v-btn></router-link
        >
        <v-btn text @click="$vuetify.goTo('#features')">
          <span class="mr-2">О нас</span>
        </v-btn>
        <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">Контакты</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-information-outline", "О нас", "#features"],
      ["mdi-email-outline", "Контакты", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
