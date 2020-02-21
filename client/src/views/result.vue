<template>
  <div class="container">
    <div class="judul">
      <h2>Congratulations</h2>
    </div>
    <div class="isi">Pemenangnya adalah {{ winner }}</div>
    <button @click="quitGame">Tobat</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winner: this.$route.query.winner
    };
  },
  methods: {
    quitGame() {
      this.$socket.emit("quitGame");
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style></style>
