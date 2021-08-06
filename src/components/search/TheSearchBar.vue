<template>
  <div class="wrapper">
    <form @submit.prevent="findPlayer">
      <input type="text" placeholder="Find A Player" v-model="username" />
    </form>
  </div>
</template>

<script>
export default {
  emits: ["findPlayer"],
  data() {
    return {
      error: null,
      isFindingPlayer: false,
      username: "",
    };
  },
  methods: {
    findPlayer() {
      this.$emit("findPlayer", this.username);
    },
    // async findPlayer() {
    //   this.isFindingPlayer = true;
    //   try {
    //     this.$store.dispatch("findPlayer", {
    //       username: this.username,
    //     });
    //   } catch (e) {
    //     this.error = e.message || "Could not retrieve player info";
    //   }
    //   this.$emit("findingPlayer", this.isFindingPlayer);
    // },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  border-bottom: 1px solid rgb(41, 41, 41);

  form {
    input {
      width: 250px;
      height: 30px;
      border: none;
      outline: none;
      background: transparent;
      color: white;
      border: 1px solid grey;
      padding-left: 5px;
    }
  }
}
</style>