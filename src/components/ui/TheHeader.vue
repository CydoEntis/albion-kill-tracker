<template>
  <div id="nav">
    <div class="logo-wrapper">
      <h3>Albion Kill Tracker</h3>
    </div>
    <div class="nav-links">
      <router-link to="/">About</router-link>
      <router-link to="/kill-feed">Kill Feed</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#nav {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  background: #5f0804;

  .logo-wrapper {
    color: #fff;
    padding-left: 25px;
    width: 50%;
  }

  .nav-links {
    display: flex;
    justify-content: flex-end;
    width: 50%;
    text-align: right;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 65px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover {
      opacity: 0.8;
    }

    &.router-link-exact-active {
      background: #ec552c;
    }
  }
}
</style>