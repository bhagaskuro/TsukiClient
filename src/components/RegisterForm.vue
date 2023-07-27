<template>
  <div class="w-full h-100">
    <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
      Register new account
    </h1>

    <form class="mt-6" @submit.prevent="handleSubmit">
      <div>
        <label class="block text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          autofocus
          autocomplete
          required
          v-model="username"
        />
      </div>

      <div class="mt-4">
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
          name="Password"
          id="Password"
          placeholder="Enter Password"
          minlength="5"
          class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
          required
          v-model="password"
        />
      </div>
      <button
        type="submit"
        class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
      >
        Register
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
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "RegisterForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCustomerStore, ["handleRegister"]),
    handleSubmit() {
      const value = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.handleRegister(value);
    },
  },
};
</script>

<style></style>
