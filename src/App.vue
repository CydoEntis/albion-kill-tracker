<template>
  <the-header />
  <router-view />
</template>

<script>
import TheHeader from "./components/ui/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  data() {
    return {};
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  background: rgb(246, 245, 241);
  background: radial-gradient(
    circle,
    rgba(246, 245, 241, 1) 0%,
    rgba(222, 218, 206, 1) 100%
  );
}

#app {
  color: #3c3c3c;
  font-family: "Heebo", sans-serif;
}

body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  background: #dad8d1;
}

body::-webkit-scrollbar-thumb {
  background-color: #c9c7c2;
  outline: 2px solid #c9c7c2;
}
</style>
