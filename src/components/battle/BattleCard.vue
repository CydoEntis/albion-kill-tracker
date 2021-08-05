<template>
  <div class="loading-wrapper" v-if="isLoading">
    <div class="loadingio-spinner-spin-mqz9ok6x5in">
      <div class="ldio-1c97jpjgh8c">
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="battle-wrapper"
    v-for="battle in getRecentBattles"
    :key="battle.id"
  >
    <card-info
      :isKiller="true"
      :username="battle.killer.username"
      :alliance="battle.killer.alliance"
      :guild="battle.killer.guild"
      :fame="battle.killer.killFame"
      :itemPower="battle.killer.itemPower"
      :equipment="battle.killer.equipment"
    />
    <card-info
      :isKiller="false"
      :username="battle.victim.username"
      :alliance="battle.victim.alliance"
      :guild="battle.victim.guild"
      :fame="battle.victim.killFame"
      :itemPower="battle.victim.itemPower"
      :equipment="battle.victim.equipment"
    />
  </div>
</template>

<script>
import CardInfo from "./CardInfo.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    CardInfo,
  },
  data() {
    return {
      isLoading: false,
      error: null,
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
    async fetchRecentKills() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("fetchRecentKills");
      } catch (e) {
        this.error = e.message || "Failed to fetch recent kills";
      }

      this.isLoading = false;
    },
  },
  created() {
    this.fetchRecentKills();
  },
};
</script>

<style lang="scss" scoped>
.battle-wrapper {
  max-width: 1200px;
  margin: 15px auto;
  display: flex;
}

.loading-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes ldio-1c97jpjgh8c {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.34, 1.34);
  }
  100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1, 1);
  }
}
.ldio-1c97jpjgh8c div > div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #a0e400;
  animation: ldio-1c97jpjgh8c 1s linear infinite;
}
.ldio-1c97jpjgh8c div:nth-child(1) > div {
  left: 73px;
  top: 42px;
  animation-delay: -0.875s;
}
.ldio-1c97jpjgh8c > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 81px 50px;
}
.ldio-1c97jpjgh8c div:nth-child(2) > div {
  left: 64px;
  top: 64px;
  animation-delay: -0.75s;
}
.ldio-1c97jpjgh8c > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 72px 72px;
}
.ldio-1c97jpjgh8c div:nth-child(3) > div {
  left: 42px;
  top: 73px;
  animation-delay: -0.625s;
}
.ldio-1c97jpjgh8c > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 50px 81px;
}
.ldio-1c97jpjgh8c div:nth-child(4) > div {
  left: 20px;
  top: 64px;
  animation-delay: -0.5s;
}
.ldio-1c97jpjgh8c > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 28px 72px;
}
.ldio-1c97jpjgh8c div:nth-child(5) > div {
  left: 11px;
  top: 42px;
  animation-delay: -0.375s;
}
.ldio-1c97jpjgh8c > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 19px 50px;
}
.ldio-1c97jpjgh8c div:nth-child(6) > div {
  left: 20px;
  top: 20px;
  animation-delay: -0.25s;
}
.ldio-1c97jpjgh8c > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 28px 28px;
}
.ldio-1c97jpjgh8c div:nth-child(7) > div {
  left: 42px;
  top: 11px;
  animation-delay: -0.125s;
}
.ldio-1c97jpjgh8c > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 50px 19px;
}
.ldio-1c97jpjgh8c div:nth-child(8) > div {
  left: 64px;
  top: 20px;
  animation-delay: 0s;
}
.ldio-1c97jpjgh8c > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 72px 28px;
}
.loadingio-spinner-spin-mqz9ok6x5in {
  width: 64px;
  height: 64px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-1c97jpjgh8c {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.64);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-1c97jpjgh8c div {
  box-sizing: content-box;
}

@media screen and (max-width: 1250px) {
  .battle-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>