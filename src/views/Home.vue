<template>
  <div class="home">
    <form @submit.prevent="fetchPlayer">
      <input type="text" v-model="username" />
      <p>{{ getPlayerInfo.id }}</p>
      <p>{{ getPlayerInfo.username }}</p>
      <p>{{ getPlayerInfo.guild }}</p>
      <p>{{ getPlayerInfo.alliance }}</p>
      <p>{{ getPlayerInfo.killFame }}</p>
    </form>
    <!-- <button @click="fetchPlayer">Fetch</button>
    <p>{{ player }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      username: "",
    };
  },
  computed: {
    ...mapGetters(["getPlayerInfo"]),
  },
  methods: {
    async fetchPlayer() {
      await this.$store.dispatch("findPlayer", {
        username: this.username,
      });
    },
  },
};
</script>
