<template>
  <the-search-bar @findPlayer="findPlayer($event)" />
  <the-loading-spinner />
</template>

<script>
import BattleCard from "../battle/BattleCard.vue";
import TheSearchBar from "../search/TheSearchBar.vue";
import PlayerInfo from "../player-info/PlayerInfo.vue";

import TheLoadingSpinner from "../ui/spinner/TheLoadingSpinner.vue";

export default {
  name: "RecentKills",
  components: { BattleCard, TheSearchBar, TheLoadingSpinner, PlayerInfo },
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
  },
};
</script>

<style>
</style>