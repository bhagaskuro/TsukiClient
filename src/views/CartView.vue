<template>
  <!-- Post section -->
  <div class="post-section">
    <div class="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-4">
        <!-- tables  -->
        <div class="bg-white pb-4 px-4 rounded-md w-full">
          <p class="decoration-solid text-6xl decoration-4">Cart</p>
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
                  <th
                    class="px-4 py-2"
                    style="background-color: #f8f8f8"
                    width="350px"
                  >
                    Description
                  </th>
                  <th
                    class="px-4 py-2"
                    style="background-color: #f8f8f8"
                    width="150px"
                  >
                    Price
                  </th>
                  <th
                    class="px-4 py-2"
                    style="background-color: #f8f8f8"
                    width="150px"
                  >
                    Ammount
                  </th>
                  <th
                    class="px-4 py-2"
                    style="background-color: #f8f8f8"
                    width="150px"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <rowCart />
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";

import rowCart from "../components/rowCart.vue";
export default {
  name: "CartView",
  components: {
    rowCart,
  },
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
  },
};
</script>

<style></style>
