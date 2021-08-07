<template>
  <div id="nav">
    <router-link to="/">About</router-link> |
    <router-link to="/kill-feed">Kill Feed</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  background: #090909;
}

#app {
  color: #fff;
  font-family: "Heebo", sans-serif;
}

#nav {
  padding: 30px;
  text-align: right;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    &.router-link-exact-active {
      color: rgba(118, 209, 20, 0.9108018207282913);
    }
  }
}

body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-thumb {
  border-radius: 15px;
  background-color: rgb(37, 37, 37);
  outline: 1px solid rgb(34, 34, 34);
}
</style>
