<template>
  <div class="container">
    <div class="judul">
      <h1>Input Your Username</h1>
    </div>
    <form method="POST" v-on:submit.prevent="loginUser">
      <div class="form-group">
        <input
          v-model="form.name"
          type="username"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Usename"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const server = "http://localhost:3000";
export default {
  name: "loginForm",
  data() {
    return {
      form: { name: null, score: null }
    };
  },
  methods: {
    loginUser() {
      axios({
        method: "post",
        url: `${server}/user`,
        data: { name: this.form.name, score: this.form.score }
      })
        .then(data => {
          console.log("MASUK");
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scope>
.container {
  border: 1px solid blue;
  align-items: center;
}
</style>
