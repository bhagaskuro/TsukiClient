<template>
  <!-- New Cuisine section -->
  <div class="newpost-section">
    <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
      <div
        class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-4 text-xl font-bold"
      >
        <span class="self-center whitespace-nowrap text-xl font-bold"
          >Add New Cuisine</span
        >
        <br />
        <br />
        <form @submit.prevent="handleSubmit()">
          <div class="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Name</label
              >
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                v-model="newData.name"
                required
              />
            </div>
            <div>
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Category</label
              >
              <select
                name="category"
                id="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="newData.categoryId"
              >
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="mb-6">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Description</label
            >
            <textarea
              name="description"
              id="Description"
              cols="100"
              rows="10"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Cuisine Description"
              v-model="newData.description"
            ></textarea>
          </div>
          <div class="mb-6">
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Price</label
            >
            <input
              type="number"
              id="price"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              v-model="newData.price"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="img"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Image URL</label
            >
            <input
              type="text"
              id="imgUrl"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Image URL"
              v-model="newData.imgUrl"
              required
            />
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "formCuisine",
  data() {
    return {
      newData: {
        id: "",
        name: "",
        categoryId: null,
        description: "",
        price: "",
        imgUrl: "",
      },
    };
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["categories"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["SubmitAdd"]),
    handleSubmit() {
      this.SubmitAdd(this.newData);

      this.$router.push({ path: "/cuisine" });
    },
  },
};
</script>

<style></style>
