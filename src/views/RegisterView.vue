<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div
      class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    >
      <img
        src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <register-form />
    </div>
  </section>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";

export default {
  name: "Register",
  components: {
    RegisterForm,
  },
};
</script>

<style></style>
