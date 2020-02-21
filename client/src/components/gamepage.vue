<template>
  <div>
    <div v-if="endgame">
      <audio>
        <source src="../assets/Tada.mp3">
      </audio>
    </div>
    <!-- INI DARI NOTEPAD -->
  <div v-if="opponent && !start">
   <h1>
   {{ countdown }}
     </h1>
  </div>
  <div v-if="!opponent">
    <h1>WAITING FOR OTHER PLAYER.....</h1>
    </div>
  <div v-if="playerOne && !start">
  <waiting></waiting>
  </div>
  <div class="mainpage">
  <div class="names" v-if="start">
    <audio controls autoplay hidden>
        <source src="../assets/shinchan.mp3" type="audio/mpeg">
    </audio>
  <!-- <h1>{{name}}</h1> -->
  <div class="name">
  <h1>You : {{ playerOne }} </h1>
  <h1>Tabok : {{ ScoreOne }}</h1>
  </div>
  <div class='time' v-if="start">
   <h1>
     : Time : <br>
      {{timer}}
     </h1>
     </div> 
  <div class="name">
  <h1>Opponent : {{ opponent }} </h1>
  <h1>Tabok : {{ ScoreTwo }}</h1>
  </div>
  </div>
  </div>
  <div>
    <img class='nyamuk' src="../assets/mosquito.png" v-if="start">
    <div @click="gethit">
      <div>
      <audio controls autoplay hidden v-if="hit1">
        <source src="../assets/hit.mp3" type="audio/mpeg">
      </audio>
      </div>
      <div>
      <audio controls autoplay hidden v-if="!hit2">
      <source src="../assets/awch.mp3" type="audio/mpeg">
      </audio>
      </div>
    <img class='pantat' src="../assets/giphy.webp" @click='count' v-if="start">
    </div>
  </div>
  </div>
</template>

<script>
import waiting from '../components/waiting';

export default {
  name: "gamepage",
  components: {
    waiting,
  },
  data() {
    return {
      tepok: 0,
      start: false,
      countdown: 5,
      timer: 30,
      opponent: null,
      playerOne: null,
      ScoreOne: null,
      ScoreTwo: null,
      winner: null,
      hit1:false,
      hit2:true,
      endgame: false,
    };
  },
  created() {
    this.playerOne = localStorage.name;
    this.opponent = null;
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
          this.endgame = true
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
    },
    gethit() {
      this.hit1 = !this.hit1;
      this.hit2 = !this.hit2;   
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
