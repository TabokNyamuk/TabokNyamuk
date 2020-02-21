<template>
<div>
    <img id='result' src="../assets/200.webp" alt="">
  <div class="container">
    <div>
    <audio controls autoplay hidden v-if="link">
      <source src="../assets/Tada.mp3" type="audio/mpeg">
    </audio>
    <div class="judul">
      <h2>Congratulations</h2>
    </div>
    <div class="isi">Pemenangnya adalah {{ winner }}</div>
    <button @click="quitGame">Tobat</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      winner: this.$route.query.winner,
      link: true,
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

<style>
#result {
  border-radius: 50%;
  width: 45%
}
.container {
  width: 100%;
}
</style>
