<template>
  <div class="container">
    <p>Tepok {{ tepok }}</p>
    <p>playerOne: {{ playerOne }} | Score: {{ ScoreOne }}</p>
    <p>opponent: {{ opponent }} | Score: {{ ScoreTwo }}</p>
    <img src="../assets/giphy.webp" @click="count" v-if="start" />
    <div v-if="opponent">
      {{ start }}
      countdown {{ countdown }}
    </div>
    <div v-if="start">Time {{ timer }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "gamepage",
  data() {
    return {
      tepok: 0,
      start: false,
      countdown: 5,
      timer: 10,
      opponent: null,
      playerOne: null,
      ScoreOne: null,
      ScoreTwo: null,
      winner: null
    };
  },
  created() {
    this.playerOne = localStorage.name;
    this.opponent = "Waiting for another player...";
  },
  mounted() {
    this.$socket.on("playerTwo", data => {
      console.log(data, "< player Two");
      for (let i = 0; i < data.length; i++) {
        if (data[i] != this.playerOne) {
          this.opponent = data[i];
          break;
        }
      }
      this.startCount();
    });
    this.$socket.on("sendScore", score => {
      console.log(score.name, "< ini score");
      console.log(this.playerOne, "< ini score");
      if (score.name == this.playerOne) {
        this.ScoreOne = score.tepok;
      } else if (score.name == this.opponent) {
        this.ScoreTwo = score.tepok;
      }
   });
// =======
//       countdown: 3,
//       timer: 100,
//       name: localStorage.name,
//       hit1:false,
//       hit2:true,
//     }
// >>>>>>> Gamepage
  },
  methods: {
    count() {
      this.tepok++;
      this.$socket.emit("score", {
        tepok: this.tepok,
        name: localStorage.name
      });
    },
    startCount() {
      let interval = setInterval(() => {
        this.countdown--;
        if (this.countdown == 0) {
          this.start = true;
          this.gameTimer();
          clearInterval(interval);
        }
      }, 1000);
    },
    gameTimer() {
      let interval = setInterval(() => {
        this.timer--;
        if (this.timer == 0) {
          this.start = false;
          clearInterval(interval);
          this.getFinalScore();
          this.$router.push({ name: "result", query: { winner: this.winner } });
        }
      }, 1000);
    },
    getFinalScore() {
      if (this.ScoreOne > this.ScoreTwo) {
        this.winner = this.playerOne;
      } else {
        this.winner = this.opponent;
      }
    }
  }
};
</script>

<style scoped>
/* .container {
  background-image: url('../assets/mosquito.png')
} */
.image {
  position: absolute;
  width: 100px;
  height: 100px;
}
.names {
  display: flex;
  justify-content: space-evenly;
}
.name {
  border: black 2px solid;
  background: black;
  color: white
}

.time{
  border: black 2px solid;
  background: black;
  color: white
}

.nyamuk {
  position: absolute;
  width: 2%;
  left: 53%;
  bottom: 25%;
}
.pantat {
  border-radius: 50%
}
#btn-start {
  background: white
}
</style>
