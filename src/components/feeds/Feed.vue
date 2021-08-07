<template>
  <battle-card :battles="getRecentBattles" />
</template>

<script>
import BattleCard from "../battle/BattleCard.vue";

export default {
  props: ["getRecentBattles"],
  components: {
    BattleCard,
  },
};
</script>

<style>
</style>