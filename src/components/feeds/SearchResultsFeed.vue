<template>
  <the-search-bar @findPlayer="findPlayer($event)" />
  <the-loading-spinner />
  <player-info></player-info>
  <battle-card :battles="test" />
</template>

<script>
import BattleCard from "../battle/BattleCard.vue";
import TheSearchBar from "../search/TheSearchBar.vue";

import { mapGetters } from "vuex";
import TheLoadingSpinner from "../ui/spinner/TheLoadingSpinner.vue";

export default {
  name: "RecentKills",
  components: { BattleCard, TheSearchBar, TheLoadingSpinner },
  data() {
    return {
      isFetchingPlayer: false,
      error: null,
    };
  },
  methods: {
    findPlayer(username) {
      this.isFetchingPlayer = true;
      try {
        this.$store.dispatch("findPlayer", {
          username: username,
        });
      } catch (e) {
        this.error = e.message || "Unable to retrieve player";
      }

      this.$router.replace("/results");
      this.isFetchingPlayer = false;
    },
    computed: {
      ...mapGetters(["getPlayerInfo"]),
    },
  },
};
</script>

<style>
</style>