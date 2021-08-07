<template>
  <div class="container">
    <div class="battle-wrapper" v-for="battle in battles" :key="battle.id">
      <card-info
        :isKiller="true"
        :username="battle.killer.username"
        :alliance="battle.killer.alliance"
        :guild="battle.killer.guild"
        :fame="battle.killer.killFame"
        :itemPower="battle.killer.itemPower"
        :equipment="battle.killer.equipment"
      />
      <div class="seperator">
        <h3>Vs.</h3>
      </div>
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
  </div>
</template>

<script>
import CardInfo from "./CardInfo.vue";

export default {
  components: {
    CardInfo,
  },
  props: ["battles"],
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;

  .battle-wrapper {
    margin: 5px auto;
    display: flex;

    .seperator {
      padding: 0 10px;
      background: #c9c7c2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media screen and (max-width: 1405px) {
  .battle-wrapper {
    flex-direction: column;
    align-items: center;

    .seperator {
      width: 100%;
    }
  }
}
</style>