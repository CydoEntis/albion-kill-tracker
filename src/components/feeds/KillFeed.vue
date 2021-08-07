<template>
  <the-search-bar @findPlayer="findPlayer($event)" />
  <div class="recent-kills" v-if="!isShowingPlayerFeed">
    <the-loading-spinner v-if="isLoadingRecentKills" />
    <feed v-else :battles="getRecentBattles" />
  </div>
  <div class="player-kills" v-else>
    <the-loading-spinner v-if="isLoadingPlayerKills" />
    <div v-else class="player-feed">
      <player-info
        :username="getPlayerInfo.username"
        :alliance="getPlayerInfo.alliance"
        :guild="getPlayerInfo.guild"
        :fame="getPlayerInfo.killFame"
      />
      <feed :battles="getPlayersRecentBattles" />
    </div>
  </div>
</template>

<script>
import TheSearchBar from "../search/TheSearchBar.vue";
import TheLoadingSpinner from "../ui/spinner/TheLoadingSpinner.vue";
import PlayerInfo from "../player-info/PlayerInfo.vue";
import Feed from "../feeds/Feed.vue";

import { mapGetters } from "vuex";

export default {
  name: "KillFeed",
  components: { TheSearchBar, TheLoadingSpinner, PlayerInfo, Feed },
  data() {
    return {
      isLoadingRecentKills: false,
      isLoadingPlayerKills: false,
      isShowingPlayerFeed: false,
      error: null,
    };
  },
  methods: {
    async findPlayer(username) {
      this.isLoadingPlayerKills = true;
      this.isShowingPlayerFeed = true;

      try {
        await this.$store.dispatch("findPlayer", {
          username: username,
        });
      } catch (e) {
        this.error = e.message || "Unable to retrieve player";
      }

      let userId = this.getPlayerInfo.id;

      try {
        await this.$store.dispatch("fetchPlayersRecentBattles", {
          id: userId,
        });
      } catch (e) {
        this.error = e.message || "Unable to fetch recent kills.";
      }

      this.isLoadingPlayerKills = false;
    },
    async fetchRecentKills() {
      this.isShowingPlayerFeed = false;
      this.isLoadingRecentKills = true;

      try {
        await this.$store.dispatch("fetchRecentKills");
      } catch (e) {
        this.error = e.message || "Failed to fetch recent kills";
      }

      this.isLoadingRecentKills = false;
    },
  },
  created() {
    this.fetchRecentKills();
  },
  computed: {
    ...mapGetters([
      "getRecentBattles",
      "getPlayersRecentBattles",
      "getPlayerInfo",
    ]),
  },
};
</script>

<style lang="scss" scoped>
</style>