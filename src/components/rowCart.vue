<template>
  <tbody class="text-sm font-normal text-gray-700">
    <tr
      class="hover:bg-gray-100 border-b border-gray-200 py-10"
      v-for="(cart, x) in carts"
      :key="cart.id"
    >
      <td class="px-4 py-4">{{ ++x }}</td>
      <td class="px-4 py-4">{{ cart.cuisine.name }}</td>
      <td class="px-4 py-4">
        <img :src="cart.cuisine.imgUrl" alt="" srcset="" />
      </td>
      <td class="px-4 py-4">{{ cart.cuisine.description }}</td>
      <td class="px-4 py-4">{{ cart.cuisine.price }}</td>
      <td class="px-4 py-4">{{ cart.total }}</td>
      <td class="px-4 py-4">
        {{ cart.total * cart.cuisine.price }}
      </td>
    </tr>
    <tr class="hover:bg-gray-100 border-b border-gray-200 py-10">
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4 decoration-solid text-xl decoration-4">Sub Total</td>
      <td class="px-4 py-4 decoration-solid text-xl decoration-4">
        {{ Total }}
      </td>
    </tr>
    <tr class="py-10">
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4"></td>
      <td class="px-4 py-4 decoration-solid text-xl decoration-4">
        <button @click="handlePayment">Pay Now</button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "rowCart",

  computed: {
    ...mapWritableState(useCustomerStore, ["carts", "Total"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["fetchCart", "doPayment"]),
    handlePayment() {
      this.doPayment();
    },
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    this.fetchCart();
  },
};
</script>

<style></style>
