<template>
  <!-- This is an example component -->
  <nav aria-label="Page navigation example" class="mt-6 content-center">
    <ul class="inline-flex -space-x-px">
      <li v-if="currentPage !== 1">
        <a
          href="#"
          @click.prevent="pagination(currentPage - 1)"
          class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Previous</a
        >
      </li>
      <li v-for="page in totalPage" :key="page">
        <a
          href="#"
          @click.prevent="pagination(page)"
          class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >{{ page }}</a
        >
      </li>
      <li v-if="currentPage !== totalPage">
        <a
          href="#"
          @click.prevent="pagination(currentPage + 1)"
          class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "pagination",
  computed: {
    ...mapWritableState(useCustomerStore, ["totalPage", "currentPage"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["fetchCuisines"]),
    pagination(id) {
      const query = { page: id };
      this.fetchCuisines(query);
      this.$router.push({ path: "/", query });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
