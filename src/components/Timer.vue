<template>
  <main class="card">
    <h2>Welcome!</h2>
    <h1>The last time you accessed was</h1>
    <section>
      <div class="timer">
        <div>
          <time>{{ currentDays }}</time>
          <span>Days</span>
        </div>
        <div>
          <time>{{ currentHours }}</time>
          <span>Hours</span>
        </div>
        <div>
          <time>{{ currentMinutes }}</time>
          <span>Minutes </span>
        </div>
        <div>
          <time>{{ currentSeconds }}</time>
          <span>Seconds</span>
        </div>
      </div>
    </section>
    <button @click="logout">Logout</button>
  </main>
</template>

<script>
import userMixin from "@/services/User.js";
export default {
  name: "Timer",
  mixins: [userMixin],
  data: function() {
    return {
      currentSeconds: null,
      currentMinutes: null,
      currentHours: null,
      currentDays: null
    };
  },
  created() {
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  },
  destroyed() {
    console.log('Destroyed')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 0.9rem;
  color: rgb(180, 178, 178);
}
section {
  width: 100%;
  margin: 4rem 0;
}
.timer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.timer div {
  color: rgb(180, 178, 178);
  display: flex;
  flex-direction: column;
}
time {
  font-size: 2rem;
  font-weight: bold;
}
button {
  width: unset;
}
</style>
