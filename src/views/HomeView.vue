<template>
  <div>
    <div>
      <div class="mx-auto grid max-w-7xl grid-cols-12 gap-4 p-5">
        <div class="col-span-12 rounded-lg sm:col-span-8">
          <br /><br /><br /><br /><br />
          <p class="decoration-solid text-6xl decoration-4">TSUKI RESTAURANT</p>
          <p class="decoration-solid text-3xl decoration-1">
            ...your delicious cuisines
          </p>
        </div>
        <div id="side" class="col-span-12 rounded-lg sm:col-span-4">
          <img
            src="/chef1.png"
            class="side object-cover h-413 col-span-12 rounded-lg m:col-span-4"
            alt="..."
            width="80%"
          />
        </div>
      </div>
    </div>

    <div class="bg-gray-100">
      <div class="mx-auto grid max-w-7xl grid-cols-12 gap-4 p-5">
        <div class="col-span-12 sm:col-span-12">
          <p class="decoration-solid text-6xl decoration-4">Our Cuisine</p>
          <br />

          <div
            class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden mb-4"
          >
            <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <form @submit.prevent="handleSubmit">
              <input
                v-model="name"
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
                width="100%"
              />
            </form>
          </div>

          <div
            class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
          >
            <Card
              v-for="cuisine in cuisines"
              :key="cuisine.id"
              :cuisine="cuisine"
            />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Pagination from "../components/Pagination.vue";

import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "HomeView",
  components: {
    Card,
    Pagination,
  },
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["cuisines", "isLogin"]),
  },
  methods: {
    ...mapActions(useCustomerStore, [
      "fetchCuisines",
      "fetchCuisinesAdmin",
      "fetchCategories",
    ]),
    handleSubmit() {
      const query = { name: this.name };
      this.fetchCuisines(query);
      this.$router.push({ path: "/" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  created() {
    this.fetchCuisines({});
    this.fetchCategories();
  },
};
</script>
