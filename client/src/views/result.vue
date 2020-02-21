<template>
  <div class="container">
    <div class="judul">
      <h2>Congratulations</h2>
    </div>
    <div class="isi">Pemenangnya adalah {{ winner }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winner: this.$route.query.winner
    };
  }
};
</script>

<style></style>
