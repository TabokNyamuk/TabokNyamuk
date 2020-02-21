<template>
<div class="mainpage">
  <div class="names" v-if="start">
    <audio controls autoplay hidden>
        <source src="../assets/Kahoot.mp3" type="audio/mpeg">
    </audio>
  <!-- <h1>{{name}}</h1> -->
  <div class="name">
  <h1>Name</h1>
  <h1>Tepok {{tepok}}</h1>
  </div>
  <div class='time' v-if="start">
   <h1>
      Time {{timer}}
     </h1>
     </div> 
  <div class="name">
  <h1>Name</h1>
  <h1>Tepok {{tepok}}</h1>
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
   <div id='btn-start' v-if="!start">
    <button @click="startCount">Start!</button>
    <h1>
      {{start}}
    countdown {{countdown}}
      </h1> 
     </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'gamepage',
  data() {
    return {
      tepok: 0,
      start: false,
      countdown: 3,
      timer: 100,
      name: localStorage.name,
      hit1:false,
      hit2:true,
    }
  },
  methods: {
    count() {
      this.tepok++
    },
    startCount() {
      let interval = setInterval(() => {
        this.countdown--
        if (this.countdown == 0) {
          this.start = true
          this.gameTimer()
          clearInterval(interval)
        }
      }, 1000);        
    },
    gameTimer() {
      let interval = setInterval(() => {
        this.timer--
        if (this.timer==0) {
          this.start = false;
          this.addScore()
          clearInterval(interval)          
        }
      }, 1000);
    },
    addScore() {
      let playerId = localStorage.id
      axios({
        method: 'put',
        url: `http://localhost:3000/${playerId}`,
        data: {
          score: this.tepok
        }
      })
      .then(result => {
        console.log("masuk gak?");
        console.log(result);
      })
      .catch(err => {
        console.log("masuk error");
        console.log(err);
      })
    },
    gethit() {
      this.hit1 = !this.hit1;
      this.hit2 = !this.hit2;   
    }
  }
}
</script>

<style  scoped>
/* .container {
  background-image: url('../assets/mosquito.png')
} */
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
