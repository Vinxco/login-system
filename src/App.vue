<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  height: 60vh;
  max-width: 35rem;
  width: 40vw;
  position: relative;
}
button {
  outline: none;
  cursor: pointer;
  border-radius: 0.2rem;
  border: none;
  font-size: large;
  background-color: rgba(20, 100, 165, 1);
  color: #fff;
  display: block;
  padding: 0.5rem 1.5rem;
  width: 100%;
}
</style>
