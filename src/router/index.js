import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/Login"
  },
  {
    path: "/",
    redirect: "/Login"
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      autentificate: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let authorization = to.matched.some(record => record.meta.autentificate);
  if (authorization && !user) {
    next("login");
  } else if (!authorization && user) {
    next("home");
  } else {
    next();
  }
});

export default router;
