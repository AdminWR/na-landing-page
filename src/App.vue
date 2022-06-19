<template>
  <v-app>
    <navigation v-scroll="onScroll" :color="color" :flat="flat" />
    <router-view></router-view>
    <foote />
  </v-app>
</template>

<style>
.v-main {
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
textarea {
  resize: none;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";

export default {
  name: "App",

  components: {
    navigation,
    foote,
  },
  data() {
    return {
      flat: null,
      fab: null,
      color: "",
      isLogin: false,
    };
  },
  created() {
    let top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
  },
};
</script>
