<template>
  <div>
    <div class="mx-auto grid max-w-7xl grid-cols-12 gap-4 p-1 mt-6">
      <div class="col-span-12 rounded-lg sm:col-span-8">
        <img :src="cuisineDetail.imgUrl" alt="" srcset="" />
      </div>
      <div id="side" class="col-span-12 rounded-lg sm:col-span-4">
        <div class="flex items-center justify-between mt-4">
          <h1 class="decoration-solid text-5xl decoration-4">
            {{ cuisineDetail.name }}
          </h1>
          <div class="flex" v-if="isLogin == true && $route.name == 'detail'">
            <div
              @click.prevent="handleCart(cuisineDetail.id)"
              class="mr-1 h-10 w-10 bg-blue-400 hover:bg-blue-300 rounded-lg flex items-center justify-center cursor-pointer shadow-lg"
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z"
                    fill="#fff"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <br />
        <p class="decoration-solid text-2xl decoration-4">
          Rp. {{ cuisineDetail.price }} <br /><br />
        </p>
        <hr />
        <br />
        <p class="decoration-solid text-xl decoration-4">Description :</p>
        <br />
        {{ cuisineDetail.description }}
        <br /><br />
        <hr />
        <br />
        <p class="decoration-solid text-xl decoration-4">Add to cart :</p>

        <div v-html="cuisineDetail.qr" style="width: 200px"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "detailView",
  computed: {
    ...mapWritableState(useCustomerStore, ["cuisineDetail"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["fetchDetail", "addCart"]),
    handleCart(id) {
      this.addCart(id);
    },
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    this.fetchDetail(this.$route.params.id);
  },
};
</script>

<style></style>
