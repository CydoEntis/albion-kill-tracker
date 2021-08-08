<template>
  <div class="container">
    <div class="text-content">
      <h1>The Albion Online Kill Tracker</h1>
      <h2>Easily track top players, friends or just the most recent kills!</h2>
      <div class="sub-container">
        <router-link to="/kill-feed">Kill Feed</router-link>
      </div>
    </div>
    <div class="image-content">
      <div class="image-wrapper">
        <img src="../assets/kill-tracker.png" alt="kill tracker image" />
      </div>
    </div>
  </div>
  <div class="footer"></div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  .text-content {
    h1 {
      font-size: 40px;
    }

    a {
      display: inline-block;
      text-decoration: none;
      margin: 10px auto;
      color: #fff;
      padding: 10px 30px;
      background: #ec552c;
      border: 1px solid #ec552c;
      cursor: pointer;
      transition: all 200ms ease-in;

      &:hover {
        color: #3c3c3c;
        border: 1px solid #ec552c;
        background: transparent;
      }
    }
  }
}

.image-content {
  position: relative;

  .image-wrapper {
    margin: 0 auto;
    max-width: 950px;

    img {
      width: 100%;
      /* min-width: 850px; */
    }
  }
}

.footer {
  width: 100%;
  background: maroon;
}

@media screen and (max-width: 850px) {
  .image-wrapper {
    width: 100%;

    img {
      min-width: none;
    }
  }
}

@media screen and (max-width: 425px) {
  img {
    display: none;
  }
}
</style>