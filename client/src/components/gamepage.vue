<template>
<div class="container">
  <p>Tepok {{tepok}}</p>
    <img src="../assets/giphy.webp" @click='count' v-if="start">
   <div v-if="!start">
    <button @click="startCount">Start!</button>
     {{start}}
    countdown {{countdown}}
     </div>
     <div v-if="start">
    Time {{timer}}
     </div> 
  </div>
</template>

<script>
export default {
  name: 'gamepage',
  data() {
    return {
      tepok: 0,
      start: false,
      countdown: 3,
      timer: 10,
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
          this.start = falses
          clearInterval(interval)
        }
      }, 1000);
    }

  }  
}
</script>

<style  scoped>
/* .container {
  background-image: url('../assets/mosquito.png')
} */
  .image {
      position: absolute;
      width: 100px;
      height: 100px;
  }

</style>
