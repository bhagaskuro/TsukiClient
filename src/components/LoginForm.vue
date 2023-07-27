<template>
  <div class="w-full h-100">
    <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
      Log in to your account
    </h1>

    <form class="mt-6" @submit.prevent="handleSubmit">
      <div>
        <label class="block text-gray-700">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email Address"
          class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          autofocus
          autocomplete
          required
          v-model="email"
        />
      </div>

      <div class="mt-4">
        <label class="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          minlength="5"
          class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          required
          v-model="password"
        />
      </div>

      <!-- <div class="text-right mt-2">
            <a
              href="#"
              class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >Forgot Password?</a
            >
          </div> -->

      <button
        type="submit"
        class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
      >
        Log In
      </button>
    </form>

    <div class="text-right mt-2">
      <RouterLink to="/">
        <a
          href="#"
          class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
          >Back to Home</a
        >
      </RouterLink>
    </div>

    <hr class="my-6 border-gray-300 w-full" />

    <p class="mt-8">
      Need an account?
      <RouterLink to="/register">
        <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold"
          >Create an account</a
        >
      </RouterLink>
    </p>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "NavbarTop",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCustomerStore, ["handleLogin", "googleOauth"]),
    handleSubmit() {
      const value = {
        email: this.email,
        password: this.password,
      };
      this.handleLogin(value);
    },
  },
  mounted() {
    const cb = this.googleOauth;
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          "132354888149-dv9hhjm8q5hcqd0bpug3dte0miq4cb0n.apps.googleusercontent.com",
        callback: cb,
      });
      google.accounts.id.renderButton(
        document.getElementById("google-button-login"),
        { theme: "outline", size: "large" } // customization attributes
      );
    };
  },
};
</script>

<style></style>
