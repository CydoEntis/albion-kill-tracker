<template>
  <battle-card :battles="battles" />
</template>

<script>
import BattleCard from "../battle/BattleCard.vue";

export default {
  props: ["battles"],
  components: {
    BattleCard,
  },
};
</script>

<style>
</style>