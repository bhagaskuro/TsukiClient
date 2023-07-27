<template>
  <div
    class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl"
  >
    <img
      :src="cuisine.imgUrl"
      alt="plant"
      class="h-auto w-full"
      style="height: 250px; width: 100%; object-fit: cover"
      @click.prevent="detail(cuisine.id)"
    />

    <div class="p-5">
      <div class="flex items-center justify-between mt-4">
        <div class="flex-1" @click.prevent="detail(cuisine.id)">
          <h1 class="font-semibold text-base">{{ cuisine.name }}</h1>
          <p>{{ formattedPrice }}</p>
        </div>

        <div class="flex" v-if="isLogin == true && $route.name === 'home'">
          <div
            @click.prevent="handleCart(cuisine.id)"
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

      <p class="mt-5" @click.prevent="detail(cuisine.id)">
        {{ cuisine.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "Card",
  props: ["cuisine"],
  computed: {
    formattedPrice() {
      return `Rp ${this.cuisine.price.toLocaleString("id-ID")}`;
    },
  },
  methods: {
    ...mapActions(useCustomerStore, ["addCart"]),
    detail(id) {
      this.$router.push({ path: "/detail/" + id });
    },
    handleCart(id) {
      this.addCart(id);
      this.$router.push({ path: "/" });
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
