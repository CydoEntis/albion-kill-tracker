<template>
  <the-search-bar @findPlayer="findPlayer($event)" />
  <the-loading-spinner v-if="isFetchingRecentKills" />
  <battle-card v-else :battles="getRecentBattles" />
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
      isFetchingRecentKills: false,
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
    async fetchRecentKills() {
      this.isFetchingRecentKills = true;
      this.hidden = false;
      try {
        await this.$store.dispatch("fetchRecentKills");
      } catch (e) {
        this.error = e.message || "Failed to fetch recent kills";
      }

      this.isFetchingRecentKills = false;
    },
  },
  created() {
    this.fetchRecentKills();
  },
  computed: {
    ...mapGetters(["getPlayerInfo", "getRecentBattles"]),
  },
};
</script>

<style lang="scss" scoped>
</style>