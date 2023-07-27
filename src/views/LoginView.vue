<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div
      class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    >
      <img
        src="https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <login-form />
    </div>
  </section>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>

<style></style>
