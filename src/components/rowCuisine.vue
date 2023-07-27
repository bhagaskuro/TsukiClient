<template>
  <tbody
    class="text-sm font-normal text-gray-700"
    v-for="(cuisine, x) in cuisinesAdmin"
    :key="cuisine.id"
  >
    <tr class="hover:bg-gray-100 border-b border-gray-200 py-10">
      <td class="px-4 py-4">{{ ++x }}</td>
      <td class="px-4 py-4">{{ cuisine.name }}</td>
      <td class="px-4 py-4">
        <img :src="cuisine.imgUrl" alt="" srcset="" />
      </td>
      <td class="px-4 py-4">{{ cuisine.description }}</td>
      <td class="px-4 py-4">{{ cuisine.Category.name }}</td>
      <td class="px-4 py-4">{{ cuisine.User.username }}</td>
      <td class="px-4 py-4">
        <button @click="handleDelete(cuisine.id)">DELETE</button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";
export default {
  name: "rowCuisine",
  computed: {
    ...mapWritableState(useCustomerStore, ["cuisinesAdmin"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["deleteCuisine", "fetchCuisinesAdmin"]),
    handleDelete(id) {
      this.deleteCuisine(id);
      this.fetchCuisinesAdmin();
    },
  },
};
</script>

<style></style>
