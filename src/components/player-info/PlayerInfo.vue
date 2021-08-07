<template>
  <div class="container">
    <div class="user-info">
      <p>{{ username }}</p>
      <p>
        <span v-if="guild">[{{ alliance }}] </span>
        <span v-if="alliance">{{ guild }}</span>
      </p>
    </div>
    <div class="user-details">
      <p>Fame: {{ fame }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["username", "alliance", "guild", "fame"],
};
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px;
  margin: 5px auto;
  /* border: 1px solid grey; */

  .user-info,
  .user-details {
    width: 50%;
    min-width: 270px;
  }

  .user-details {
    text-align: right;
  }
}

@media screen and (max-width: 630px) {
  .user-details {
    text-align: left !important;
  }
}
</style>