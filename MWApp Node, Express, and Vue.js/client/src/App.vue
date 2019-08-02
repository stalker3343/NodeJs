<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Logo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item" v-show="isAuthenticated">
              <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
            </li>
            <li class="nav-item" v-show="isAdmin">
              <router-link class="nav-link" to="/admin/currencies">Manage Currency</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="!isAuthenticated" class="nav-link" to="/login">Login</router-link>
              <a href="#" class="nav-link" v-else @click.prevent="logout">Logout</a>
            </li>
            <li class="nav-item">
              <router-link v-show="!isAuthenticated" class="nav-link" to="/register">Register</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="page-content-container" class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { EventBus } from "./event-bus";
export default {
  data() {
    return {
      isAdmin: false,
      isAuthenticated: false
    };
  },
  created() {
    EventBus.$on("login", this.login());
  },
  methods: {
    login() {}
  }
};
</script>


<style>
</style>
