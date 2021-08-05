<template>
  <div class="home">
    <div class="wrapper">
      <form @submit.prevent="test">
        <input type="text" placeholder="Find A Player" v-model="username" />
      </form>
    </div>
    <battle-card />
  </div>
</template>

<script>
import BattleCard from "../components/battle/BattleCard.vue";

export default {
  name: "Home",
  components: { BattleCard },
  data() {
    return {
      username: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 80%;
  margin: 0 auto;
  padding: 10px 0;
  border-bottom: 1px solid grey;

  form {
    input {
      width: 250px;
      height: 30px;
      border: none;
      outline: none;
    }
  }
}
</style>
