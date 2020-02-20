<template>
  <div>
    <div class="Judul">
      <h1>TABOK NYAMUK</h1>
    </div>

    <div class="form">
      <loginForm></loginForm>
    </div>
  </div>
</template>

<script>
import loginForm from "../components/loginForm.vue";

export default {
  name: "Home",
  components: {
    loginForm
  }
};
</script>

<style scoped>
.form {
  margin-top: 200px;
}
h1 {
  font-family: "Lacquer", sans-serif;
}
</style>
