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

    <div v-for="battle in getRecentBattles" :key="battle.id">
      <p>{{ battle.id }}</p>
      <p>{{ battle.username }}</p>
      <p>{{ battle.guild }}</p>
      <p>{{ battle.killFame }}</p>
      <p>{{ battle.itemPower }}</p>
    </div>
    <!-- <button @click="fetchRecentKills">Get Kills</button> -->
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
    ...mapGetters(["getPlayerInfo", "getRecentBattles"]),
  },
  methods: {
    async fetchPlayer() {
      await this.$store.dispatch("findPlayer", {
        username: this.username,
      });
    },
    fetchRecentKills() {
      this.$store.dispatch("fetchRecentKills");
    },
  },
  created() {
    this.fetchRecentKills();
  },
};
</script>
