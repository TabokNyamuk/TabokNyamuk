<template>
  <div id="app">
    <div id="nav">
      <!-- <gamepage></gamepage> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
// import gamepage from './components/gamepage';

export default {
  name: "App",
  components: {
    // gamepage,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* padding: 50em; */
  background: white;
  background-image: url('./assets/background.gif');
  background-position: center;
  color: #2c3e50;
  height: 1000px;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
