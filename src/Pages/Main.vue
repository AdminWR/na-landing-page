<template>
  <div>
    <v-main class="pt-0">
      <home />
      <about />
      <contact />
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </div>
</template>

<script>
import home from "../components/HomeSection";
import about from "../components/AboutSection";
import contact from "../components/ContactSection";
export default {
  name: "Main",
  components: {
    home,
    about,
    contact,
  },
  data() {
    return {
      fab: null,
      color: "",
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      let top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>