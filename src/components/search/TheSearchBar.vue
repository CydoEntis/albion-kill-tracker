<template>
  <div class="wrapper">
    <form @submit.prevent="findPlayer">
      <input type="text" placeholder="Find A Player" v-model="username" />
      <div class="form-controls">
        <button
          v-if="!hideRecentKillsBtn"
          type="button"
          @click="fetchRecentKills"
        >
          Recent Kills
        </button>
        <button v-if="!hideTopKillsBtn" type="button" @click="fetchTopKills">
          Top Kills
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["findPlayer", "fetchTopKills"],
  data() {
    return {
      error: null,
      isFindingPlayer: false,
      username: "",
      hideTopKillsBtn: false,
      hideRecentKillsBtn: true,

      hidePlayerKillsBtn: true,
      hidePlayerDeathsBtn: true,
    };
  },
  methods: {
    findPlayer() {
      this.hideRecentKillsBtn = false;
      this.hideTopKillsBtn = false;

      this.$emit("findPlayer", this.username);

      this.username = "";
    },
    fetchTopKills() {
      this.hideRecentKillsBtn = false;
      this.hideTopKillsBtn = true;

      this.$emit("fetchTopKills");
    },
    fetchRecentKills() {
      this.hideRecentKillsBtn = true;
      this.hideTopKillsBtn = false;

      this.$emit("fetchRecentKills");
    },
    fetchPlayerKills() {
      hidePlayerKillsBtn = true;
      hidePlayerDeathsBtn = false;

      this.$emite("fetchPlayerKills");
    },
    fetchPlayerDeaths() {
      hidePlayerKillsBtn = false;
      hidePlayerDeathsBtn = true;

      this.$emite("fetchPlayerDeaths");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid rgb(41, 41, 41);

  form {
    margin-top: 75px;
    display: flex;
    justify-content: space-between;

    input {
      width: 275px;
      height: 40px;
      border: none;
      outline: none;
      background: transparent;
      border: 1px solid rgb(41, 41, 41);
      padding-left: 5px;
    }

    button {
      font-size: 16px;
      margin: 0 5px;
      outline: none;
      border: none;
      width: 100px;
      height: 40px;
      background: #5f0804;
      border: 1px solid #5f0804;
      color: #fff;
      transition: all 200ms ease-in;
      cursor: pointer;

      &:hover {
        background: transparent;
        border: 1px solid #5f0804;
        color: #3c3c3c;
      }
    }
  }
}
</style>