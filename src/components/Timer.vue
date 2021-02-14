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
import firebase from "firebase";
import moment from "moment";
export default {
  name: "imer",
  data: function() {
    return {
      currentSeconds: null,
      currentMinutes: null,
      currentHours: null,
      currentDays: null
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
    updateCurrentTime() {
      const loginDate = firebase.auth().currentUser.metadata.lastSignInTime;
      const login = moment(loginDate);
      const now = moment();
      const time = now.diff(login, "seconds");
      const seconds = Math.round(time % 60);
      const minutes = Math.floor((time / 60) % 60);
      const hours = Math.floor((time / 3600) % 24);
      const days = Math.floor(time / 86400);
      this.currentSeconds = seconds;
      this.currentMinutes = minutes;
      this.currentHours = hours;
      this.currentDays = days;
    }
  },
  created() {
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
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
