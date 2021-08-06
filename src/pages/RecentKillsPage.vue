<template>
  <div class="home">
    <recent-kills-feed />
  </div>
</template>

<script>
import RecentKillsFeed from "../components/feeds/RecentKillsFeed.vue";

export default {
  name: "RecentKills",
  components: { RecentKillsFeed },
};
</script>
