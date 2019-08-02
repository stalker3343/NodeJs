<template>
  <div class="login">
    <form @submit.prevent="login" class="form-signin">
      <img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt width="72" height="72" />
      <h1 class="h3 mb-3 font-weight-normal">Please log in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
        v-model="email"
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="password"
      />
      <div class="form-group text-danger" v-show="error">{{error}}</div>
      <!-- <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>-->
      <button
        class="btn btn-lg btn-primary btn-block"
        :disabled="!email || !password"
        type="submit"
      >Log in</button>
    </form>
  </div>
</template>
<script>
import api from "../api";
import { EventBus } from "../event-bus";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      api
        .autorization({
          email: this.email,
          password: this.password
        })
        .then(data => {
          EventBus.$emit("login", data);
        })
        .catch(err => {
          this.error = "Ошибка авторизации";
        });
    }
  }
};
</script>


<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
.login,
.login {
  height: 80vh;
}

.login {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  /* background-color: #f5f5f5; */
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

