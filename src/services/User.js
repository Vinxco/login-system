import firebase from "firebase";
import moment from "moment";

export default {
  methods: {
    clicked(value) {
      alert(value);
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => this.$router.replace("home"),
          error => (this.errors = error.message)
        );
    },
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
      const secondsInAMInute = 60;
      const minutesInAnHour = 60;
      const hoursInADay = 24;
      const secondsInAnHour = 3600;
      const secondsInADay = 86400;
      const seconds = Math.round(time % secondsInAMInute);
      const minutes = Math.floor((time / secondsInAMInute) % minutesInAnHour);
      const hours = Math.floor((time / secondsInAnHour) % hoursInADay);
      const days = Math.floor(time / secondsInADay);
      this.currentSeconds = seconds < 10 ? "0" + seconds : seconds;
      this.currentMinutes = minutes < 10 ? "0" + minutes : minutes;
      this.currentHours = hours < 10 ? "0" + hours : hours;
      this.currentDays = days < 10 ? "0" + days : days;
    }
  }
};
