<template>
  <!-- Post section -->
  <div class="post-section">
    <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-4">
        <!-- tables  -->
        <div class="bg-white pb-4 px-4 rounded-md w-full">
          <!-- search bar -->
          <div class="w-full flex justify-end px-2 mt-2">
            <RouterLink to="formCuisine">
              <button
                type="button"
                class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
              >
                Add
              </button>
            </RouterLink>
          </div>

          <div class="overflow-x-auto mt-6">
            <table class="table-auto border-collapse w-full">
              <thead>
                <tr
                  class="rounded-lg text-sm font-medium text-gray-700 text-left"
                  style="font-size: 0.9674rem"
                >
                  <th class="px-4 py-2" style="background-color: #f8f8f8">#</th>
                  <th
                    class="px-4 py-2 bg-gray-200"
                    style="background-color: #f8f8f8"
                    width="250px"
                  >
                    Name
                  </th>
                  <th
                    class="px-4 py-2"
                    style="background-color: #f8f8f8"
                    width="180px"
                  >
                    Image
                  </th>
                  <th class="px-4 py-2" style="background-color: #f8f8f8">
                    Description
                  </th>
                  <th class="px-4 py-2" style="background-color: #f8f8f8">
                    Category
                  </th>
                  <th class="px-4 py-2" style="background-color: #f8f8f8">
                    Author
                  </th>
                  <th class="px-4 py-2" style="background-color: #f8f8f8">
                    Action
                  </th>
                </tr>
              </thead>
              <rowCuisine />
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rowCuisine from "../components/rowCuisine.vue";

import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";
export default {
  name: "cuisineView",

  components: {
    rowCuisine,
  },
  methods: {
    ...mapActions(useCustomerStore, [
      "fetchCuisines",
      "fetchCuisinesAdmin",
      "fetchCategories",
    ]),
  },
  created() {
    this.fetchCuisines({});
    this.fetchCategories();
    this.fetchCuisinesAdmin();
  },
};
</script>

<style></style>
