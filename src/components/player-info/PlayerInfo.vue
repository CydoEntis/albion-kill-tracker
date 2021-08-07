<template>
  <div class="container">
    <div class="user-info">
      <p>
        {{ username }}
        <span v-if="guild">[{{ alliance }}] </span>
        <span v-if="alliance">{{ guild }}</span>
      </p>
      <p></p>
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
  background: #dad8d1;
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px auto;
  /* border: 1px solid grey; */

  .user-info,
  .user-details {
    width: 25%;
    background: #5f0804;
    padding: 0 10px;
    color: #fff;
    font-size: 22px;
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