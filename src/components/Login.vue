<template>
  <div class="card">
    <figure>
      <svg
        id="_x31__x2C_5"
        enable-background="new 0 0 24 24"
        height="100"
        viewBox="0 0 24 24"
        width="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m18.75 24h-13.5c-1.24 0-2.25-1.009-2.25-2.25v-10.5c0-1.241 1.01-2.25 2.25-2.25h13.5c1.24 0 2.25 1.009 2.25 2.25v10.5c0 1.241-1.01 2.25-2.25 2.25zm-13.5-13.5c-.413 0-.75.336-.75.75v10.5c0 .414.337.75.75.75h13.5c.413 0 .75-.336.75-.75v-10.5c0-.414-.337-.75-.75-.75z"
        />
        <path
          d="m17.25 10.5c-.414 0-.75-.336-.75-.75v-3.75c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5v3.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.75c0-3.309 2.691-6 6-6s6 2.691 6 6v3.75c0 .414-.336.75-.75.75z"
        />
        <path
          d="m12 17c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5c-.275 0-.5.224-.5.5s.225.5.5.5.5-.224.5-.5-.225-.5-.5-.5z"
        />
        <path
          d="m12 20c-.414 0-.75-.336-.75-.75v-2.75c0-.414.336-.75.75-.75s.75.336.75.75v2.75c0 .414-.336.75-.75.75z"
        />
      </svg>
    </figure>
    <form class="form">
      <input-section
        type="email"
        label="Email"
        v-model="email"
        :class="{ filled: email }"
      ></input-section>
      <input-section
        type="password"
        label="Password"
        v-model="password"
        :class="{ filled: password }"
      ></input-section>
      <div class="form__section">
        <button @click="login">Log In</button>
      </div>
    </form>
    <div class="card__test--error">{{ errors }}</div>
  </div>
</template>

<script>
import userMixin from "@/services/User.js";
import InputSection from "@/components/Input.vue";
export default {
  name: "Login",
  mixins: [userMixin],
  components: {
    InputSection
  },
  data() {
    return {
      email: "",
      password: "",
      errors: ""
    };
  }
};
</script>

<style scoped>
input {
  border: none;
  border-bottom: 1px solid grey;
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1.5rem;
}
label {
  position: absolute;
  transition: all 0.3s ease;
  left: 0;
  top: 0;
}
input:focus ~ label,
.form__section .filled ~ label {
  top: -1rem;
  left: 0;
  transform: scale(0.7);
}
input:focus {
  outline: none;
}
figure {
  fill: rgba(20, 100, 165, 1);
  margin-bottom: 4rem;
}
.form {
  width: 90%;
}
.form__section {
  display: block;
  position: relative;
  margin-bottom: 1rem;
}
.card__test--error {
  color: coral;
}
</style>
