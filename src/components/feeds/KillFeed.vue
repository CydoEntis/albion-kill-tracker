<template>
  <the-search-bar
    @findPlayer="findPlayer($event)"
    @fetchRecentKills="fetchRecentKills"
    @fetchTopKills="fetchTopKills"
  />
  <the-loading-spinner v-if="isLoading" />
  <div v-else-if="error">
    <h3>Unable to Fetch Data</h3>
  </div>
  <div class="content" v-else>
    <div class="recent-kills" v-if="isShowingRecentKills">
      <feed :battles="getRecentKills" />
    </div>
    <div class="top-kills" v-if="isShowingTopBattles">
      <feed :battles="getTopKills" />
    </div>

    <div class="player-kills" v-if="isShowingPlayerFeed && !isLoading">
      <div class="player-feed">
        <player-info
          :username="getPlayerInfo.username"
          :alliance="getPlayerInfo.alliance"
          :guild="getPlayerInfo.guild"
          :fame="getPlayerInfo.killFame"
        />
        <feed :battles="getPlayersRecentKills" />
      </div>
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
      isLoading: false,
      isShowingRecentKills: false,
      isShowingTopBattles: false,
      isShowingTopPlayers: false,

      isShowingPlayerKills: false,
      isShowingPlayerFeed: false,

      error: null,
    };
  },
  methods: {
    resetDisplays() {
      this.error = null;

      this.isLoading = true;

      this.isShowingRecentKills = false;
      this.isShowingTopBattles = false;
      this.isShowingTopPlayers = false;
      this.isShowingPlayerKills = false;
    },
    async findPlayer(username) {
      this.resetDisplays();

      try {
        await this.$store.dispatch("findPlayer", {
          username: username,
        });
      } catch (e) {
        this.error = e.message || "Unable to retrieve player";
      }

      let userId = this.getPlayerInfo.id;

      try {
        await this.$store.dispatch("fetchPlayersRecentKills", {
          id: userId,
        });
      } catch (e) {
        this.error = e.message || "Unable to fetch recent kills.";
      }

      try {
        await this.$store.dispatch("fetchPlayersRecentDeaths", {
          id: userId,
        });
      } catch (e) {
        this.error = e.message || "Unable to fetch recent deaths.";
      }

      this.isLoading = false;
      this.isShowingPlayerFeed = true;
    },
    async fetchTopKills() {
      this.resetDisplays();

      console.log("Recent kills Working");

      try {
        await this.$store.dispatch("fetchTopKills");
      } catch (e) {
        this.error = e.message || "Failed to fetch top battles";
      }

      this.isLoading = false;
      this.isShowingTopBattles = true;
    },
    async fetchRecentKills() {
      this.resetDisplays();

      try {
        await this.$store.dispatch("fetchRecentKills");
      } catch (e) {
        this.error = e.message || "Failed to fetch recent kills";
      }

      this.isLoading = false;
      this.isShowingRecentKills = true;
    },
  },

  created() {
    this.fetchRecentKills();
  },
  computed: {
    ...mapGetters([
      "getRecentKills",
      "getPlayersRecentKills",
      "getPlayersRecentDeaths",
      "getPlayerInfo",
      "getTopKills",
    ]),
  },
};
</script>

<style lang="scss" scoped>
</style>